#!/usr/bin/env python3
"""Part 2: B1.1, B1.2, B2.1, B2.2 (days 121-240). Appends to lessons_2.js."""
import json, random, re

path = '/home/user/.super_doubao/super-doubao-runtime/workspace/deutsch-jetzt/data/lessons_2.js'
src = open(path, encoding='utf-8').read()
OUT = json.loads(re.search(r'= (\[.*\]);', src, re.S).group(1))

CHARS = ["Mia","Jonas","Leila","Frau Becker","Herr Vogt","Tom","Nadja","Prof. Neumann","Kommissar Berger","Dr. Adler"]

def example(v):
    if len(v) == 5: return v[4]
    de, en, art, typ = v[0], v[1], v[2], v[3]
    if typ == "noun": return f"Das ist {art} {de}."
    if typ == "verb":
        return f"Wir {de[:-2]}en jeden Tag." if de.endswith("en") else f"Wir {de}."
    if typ == "adj": return f"Das ist sehr {de}."
    return f"{de}."

def vocab_list(pool, n, seed):
    rnd = random.Random(seed)
    items = rnd.sample(pool, min(n, len(pool)))
    out = []
    for i, v in enumerate(items, 1):
        out.append({"id": f"d{{ID}}_v{i}", "de": v[0], "en": v[1], "article": v[2], "type": v[3], "example": example(v)})
    return out

def chunks_list(pool, n, seed):
    rnd = random.Random(seed+7)
    return [{"de": c[0], "en": c[1]} for c in rnd.sample(pool, min(n, len(pool)))]

def episode(scene_pool, seed):
    rnd = random.Random(seed+13)
    lines = rnd.sample(scene_pool, min(7, len(scene_pool)))
    return [{"speaker": s, "de": d, "en": e, "audioFile": None} for s, d, e in lines]

def gen_module(code, start, topics, titles, goals, grammar, vocab_pool, chunk_pool, scene_pool, out_prompts):
    for i in range(30):
        did = start + i
        g = grammar[i % len(grammar)]
        vb = vocab_list(vocab_pool, 13, did)
        for v in vb: v["id"] = v["id"].replace("{ID}", str(did))
        ch = chunks_list(chunk_pool, 5, did)
        ep = episode(scene_pool, did)
        OUT.append({
            "id": did, "level": code, "act": topics[i], "title": titles[i], "goal": goals[i % len(goals)],
            "grammar": {"topic": g[0], "note": g[1], "examples": g[2]},
            "episode": ep, "vocab": vb, "chunks": ch,
            "outputTask": {"prompt": out_prompts[i % len(out_prompts)], "model": g[2][0]}
        })

# ============================================================ B1.1 (121-150)
B11_topics = ["Zeit & Aktivitäten","Pünktlichkeit","Museen","Kunst & Kultur","Beruf & Berufung",
"Probleme am Arbeitsplatz","Termine & Geschäft","Umgangsformen im Beruf","Lesen & Literatur",
"Kindheit & Vergangenheit","Medien","Werbung: Wirkung","Werbung: Produkte","Reklamation & Beschwerde",
"Reflexive Verben","Passiv Einführung","Genitiv","Relativsätze erweitert",
"Komparation & Superlativ","Vergangenheit: Präteritum","Plusquamperfekt","Modalverben & brauchen zu",
"Konjunktiv II: höflich","N-Deklination","Zeitadverbien","Fragepartikel","Lesestrategien",
"Mein Lebenslauf","Bewerbungsgespräch","Wiederholung B1.1"]
B11_titles = ["Zeitmanagement","Zu spät!","Im Museum","Moderne Kunst","Mein Traumberuf",
"Konflikt im Büro","Ein Geschäftstermin","Gute Manieren","Ein gutes Buch","Als ich klein war…",
"Die Medienwelt","Wie Werbung wirkt","Das perfekte Produkt","Ich möchte reklamieren!",
"Sich um etwas kümmern","Wie funktioniert das?","Wegen des Regens…","Der Mann, der…",
"Größer, schneller, besser","Damals…","Bevor ich ankam…","Ich muss / brauche nicht",
"Könnten Sie bitte…?","Der Student, den…","Gestern, dann, später","Doch, mal, eben",
"Eine Buchvorstellung","Der perfekte Lebenslauf","Das Vorstellungsgespräch","Alles zusammen!"]
B11_goals = ["Meinungen und Pläne ausdrücken, über Vergangenheit erzählen.","Sich beruflich verständigen: Termine, Bewerbung, Reklamation.","Komplexere Sätze bilden: Relativsätze, Passiv, Genitiv."]
B11_grammar = [
("Präteritum (starke Verben): sein, haben, gehen, kommen, sehen, sprechen", "Im Schriftlichen/Erzählerischen: Präteritum. Starke Verben ändern den Stamm: gehen→ging, kommen→kam, sehen→sah, sprechen→sprach, finden→fand, halten→hielt.", ["Ich ging gestern ins Kino.","Wir kamen zu spät.","Sie sah einen Film."]),
("Plusquamperfekt: Vorvergangenheit", "Handlung vor einer anderen vergangenen Handlung: <b>war/hatte + Partizip II</b>. <b>Bevor ich ankam, hatte er schon gegessen.</b>", ["Ich hatte schon gegessen, als sie ankam.","Wir waren schon gegangen, als es anfing zu regnen.","Er hatte das Buch gelesen, bevor wir darüber sprachen."]),
("Passiv (Vorgangspassiv): werden + Partizip II", "Täter unwichtig, Handlung im Vordergrund: <b>Das Buch wird gelesen.</b> Täter mit <b>von</b> (Person) / <b>durch</b> (Sache). Präsens: werde/wirst/wird + PII. Präteritum: wurde + PII.", ["Das Fenster wird geöffnet.","Der Brief wurde von dem Chef unterschrieben.","Die Häuser werden gebaut."]),
("Relativsätze (alle Fälle) + wo/wohin/wo", "Relativpronomen nach Genus/Numerus/Kasus: <b>der Mann, den ich kenne</b> (Akk), <b>der Frau, der ich helfe</b> (Dat), <b>des Buches, dessen Inhalt…</b> (Gen). Orte mit <b>wo</b>.", ["Der Mann, der dort steht, ist mein Chef.","Die Frau, der ich geholfen habe, ist dankbar.","Das Auto, das ich kaufen will, ist teuer."]),
("Genitiv + Präpositionen: wegen, während, trotz, anstatt", "Genitiv nach Präpositionen: <b>wegen des Wetters</b>, <b>während der Pause</b>, <b>trotz der Kälte</b>, <b>anstatt zu arbeiten</b>.", ["Wegen des Streiks fahren keine Bahnen.","Trotz seiner Krankheit kam er zur Arbeit.","Anstatt zu lernen, spielte er Fußball."]),
("Konjunktiv II: höfliche Bitten + Irrealität", "Höflich: <b>Könnten Sie…? Würden Sie…? Hätten Sie…?</b> Irreal in der Gegenwart: <b>Wenn ich Zeit hätte, würde ich kommen.</b> (Konj II + würde + Infinitiv).", ["Könnten Sie mir bitte helfen?","Wenn ich reich wäre, würde ich nicht arbeiten.","Ich hätte gern ein Glas Wein."]),
("Reflexive Verben + Präpositionen (sich freuen auf/über, sich interessieren für, sich erinnern an)", "Reflexivpronomen im Akk/Dat. Feste Präpositionen dazu: <b>sich freuen auf</b> (Akk, future), <b>sich freuen über</b> (Akk, past), <b>sich erinnern an</b> (Akk).", ["Ich freue mich auf den Urlaub.","Erinnern Sie sich an mich?","Wir interessieren uns für moderne Kunst."]),
("Komparation: je…desto (umso)", "Komparativ + <b>je…desto/umso</b>: <b>Je mehr ich lerne, desto besser spreche ich.</b> Auch: <b>immer schneller</b> (faster and faster).", ["Je älter ich werde, desto weniger schlafe ich.","Je teurer, desto besser?","Das Auto wird immer schneller."]),
("N-Deklination (schwache Maskulina): der Student, den Studenten", "Bestimmte maskuline Nomen enden im Akk/Dat/Gen auf -n/-en: <b>der Student → den Studenten</b>. Weitere: Herr, Mensch, Name, Kollege, Prinz, Nachbar.", ["Ich kenne den Studenten.","Ich helfe dem Kollegen.","Der Name des Herrn ist Müller."]),
("Fragepartikel: denn, doch, mal, eben, eigentlich", "Fragepartikel machen Fragen natürlicher, ändern die Bedeutung nicht stark: <b>Wie alt bist du denn?</b> <b>Weißt du das nicht?</b> → <b>Weißt du das denn nicht?</b> <b>Hast du mal Zeit?</b>", ["Was machst du denn da?","Kommst du nicht mit? — Doch, ich komme!","Hast du mal einen Stift für mich?"]),
]
B11_vocab = [
("die Pünktlichkeit","punctuality","die","noun"),("die Verspätung","delay","die","noun"),("das Museum","museum","das","noun"),
("die Kunst","art","die","noun"),("das Gemälde","painting","das","noun"),("der Künstler","artist","der","noun"),
("die Ausstellung","exhibition","die","noun"),("der Beruf","profession","der","noun"),("die Berufung","calling/vocation","die","noun"),
("der Konflikt","conflict","der","noun"),("die Lösung","solution","die","noun"),("lösen","to solve","","verb"),
("der Geschäftstermin","business appointment","der","noun"),("die Umgangsform","manner/etiquette","die","noun"),("höflich","polite","","adj"),
("unhöflich","impolite","","adj"),("die Literatur","literature","die","noun"),("der Roman","novel","der","noun"),
("die Kindheit","childhood","die","noun"),("die Medien (pl.)","media","die","noun"),("die Werbung","advertising","die","noun"),
("die Wirkung","effect","die","noun"),("wirken","to have an effect","","verb"),("das Produkt","product","das","noun"),
("die Eigenschaft","property/quality","die","noun"),("die Reklamation","complaint","die","noun"),("sich beschweren","to complain","","verb","Ich beschwere mich über den Service."),
("der Mangel","defect/lack","der","noun"),("der Kunde","customer","der","noun"),("der Service","service","der","noun"),
("der Rücktritt","resignation/refund","der","noun"),("umtauschen","to exchange","","verb"),("reparieren","to repair","","verb"),
("der Lebenslauf","CV","der","noun"),("die Bewerbung","application","die","noun"),("das Vorstellungsgespräch","interview","das","noun"),
("die Qualifikation","qualification","die","noun"),("die Erfahrung","experience","die","noun"),("die Stärke","strength","die","noun"),
("die Schwäche","weakness","die","noun"),("der Gehalt","salary","der","noun"),("verdienen","to earn","","verb"),
("kündigen","to quit/give notice","","verb"),("annehmen","to accept","","verb"),("ablehnen","to reject","","verb"),
("die Karriere","career","die","noun"),("befördern","to promote","","verb"),("der Aufstieg","rise/promotion","der","noun"),
("der Druck","pressure","der","noun"),("das Burnout","burnout","das","noun"),("die Überstunde","overtime","die","noun"),
("erholen","to recover","","verb","Ich erhole mich am Wochenende."),("entspannen","to relax","","verb"),("der Ausgleich","balance/compensation","der","noun"),
("das Hobby","hobby","das","noun"),("sich engagieren","to get involved/commit","","verb"),("die Gesellschaft","society/company","die","noun"),
("die Politik","politics","die","noun"),("die Meinung","opinion","die","noun"),("meinen","to mean/think","","verb"),
("glauben","to believe","","verb"),("hoffen","to hope","","verb"),("fürchten","to fear","","verb"),
("zweifeln","to doubt","","verb"),("die Argumentation","argumentation","die","noun"),("das Argument","argument","das","noun"),
("begründen","to justify/give reasons","","verb"),("widerlegen","to refute","","verb"),("zustimmen","to agree","","verb","Ich stimme dir zu."),
("ablehnen","to reject","","verb"),("vorschlagen","to suggest","","verb","Ich schlage dir etwas vor."),("entscheiden","to decide","","verb"),
("die Entscheidung","decision","die","noun"),("die Folge","consequence","die","noun"),("die Ursache","cause","die","noun"),
("der Grund","reason","der","noun"),("das Ziel","goal","das","noun"),("erreichen","to reach/achieve","","verb"),
]
B11_chunks = [("Meiner Meinung nach…","In my opinion…"),("Ich bin der Meinung, dass…","I am of the opinion that…"),("Das hängt davon ab, ob…","It depends on whether…"),
("Auf der einen Seite… auf der anderen Seite…","On the one hand… on the other hand…"),("Nicht nur…, sondern auch…","Not only… but also…"),("Je mehr…, desto…","The more…, the more…"),
("Könnten Sie bitte…?","Could you please…?"),("Ich hätte gern…","I'd like…"),("Es tut mir leid, aber…","I'm sorry, but…"),
("Ich möchte mich beschweren über…","I'd like to complain about…"),("Das ist nicht akzeptabel.","That's not acceptable."),("Ich erwarte eine Entschädigung.","I expect compensation."),
("In letzter Zeit…","Recently/Lately…"),("Seitdem…","Since then…"),("Im Gegensatz dazu…","In contrast…")]
B11_scenes = [
("Prof. Neumann","Guten Tag, Frau López. Wie gefällt Ihnen die Ausstellung moderner Kunst?","Good day, Ms. López. How do you like the modern art exhibition?"),
("Mia","Sehr gut! Besonders das Gemälde mit den blauen Farben. Aber manche Kunst verstehe ich nicht.","Very good! Especially the painting with the blue colors. But I don't understand some art."),
("Prof. Neumann","Das ist normal. Kunst muss nicht sofort verstanden werden.","That's normal. Art doesn't have to be understood immediately."),
("Jonas","Gestern war ich im Bewerbungsgespräch. Es war ziemlich stressig.","Yesterday I was at a job interview. It was quite stressful."),
("Leila","Was wurde dir gefragt? Nach deinen Stärken und Schwächen?","What were you asked? About your strengths and weaknesses?"),
("Jonas","Ja, und nach meiner Berufserfahrung. Ich habe von meiner letzten Stelle erzählt.","Yes, and about my professional experience. I talked about my last position."),
("Leila","Wie hast du dich auf die Schwäche-Frage vorbereitet?","How did you prepare for the weakness question?"),
("Jonas","Ich sagte: Ich bin manchmal zu perfektionistisch. — Eine klassische Antwort.","I said: I'm sometimes too perfectionistic. — A classic answer."),
("Herr Vogt","Ich möchte mich über die letzte Lieferung beschweren. Die Produkte sind beschädigt.","I'd like to complain about the last delivery. The products are damaged."),
("Mia","Es tut mir leid. Das ist nicht akzeptabel. Wir tauschen die Ware sofort um.","I'm sorry. That's not acceptable. We'll exchange the goods immediately."),
("Herr Vogt","Ich erwarte außerdem eine Entschädigung für den entstandenen Schaden.","I also expect compensation for the damage incurred."),
("Mia","Verstehe ich. Ich melde mich morgen bei Ihnen mit einem Angebot.","I understand. I'll get back to you tomorrow with an offer."),
("Nadja","Wegen des Streiks kommen heute keine U-Bahnen. Ich bin eine Stunde zu spät.","Because of the strike no subways are running today. I'm an hour late."),
("Tom","Trotz der Verspätung bist du aber gut gelaunt.","Despite the delay you're in a good mood."),
("Nadja","Ich habe die Zeit genutzt und ein Buch gelesen. Es war spannend.","I used the time and read a book. It was exciting."),
("Leila","Der Mann, der dort steht, ist übrigens mein neuer Chef.","The man standing there, by the way, is my new boss."),
("Mia","Der Mann, mit dem er gerade spricht? Der sieht sehr jung aus.","The man he's talking to? He looks very young."),
("Leila","Ja, er ist jünger als ich. Aber er hat viel Erfahrung.","Yes, he's younger than me. But he has a lot of experience."),
("Tom","Könnten Sie mir bitte sagen, wie man zum Museum kommt?","Could you please tell me how to get to the museum?"),
("Frau Becker","Natürlich. Gehen Sie geradeaus, dann die zweite Straße links.","Of course. Go straight, then the second street on the left."),
("Tom","Danke! Ich interessiere mich für die Ausstellung über das alte Ägypten.","Thanks! I'm interested in the exhibition about ancient Egypt."),
("Jonas","Als ich klein war, wollte ich immer Feuerwehrmann werden.","When I was little, I always wanted to be a firefighter."),
("Nadja","Ich wollte Tierärztin werden. Aber dann habe ich mich für Informatik entschieden.","I wanted to become a vet. But then I decided on computer science."),
("Mia","Interessant. Ich wollte Designerin werden — und das bin ich jetzt geworden.","Interesting. I wanted to become a designer — and that's what I became."),
("Herr Vogt","In letzter Zeit gibt es viel Überstunden. Der Druck in der Abteilung ist hoch.","Recently there's a lot of overtime. The pressure in the department is high."),
("Leila","Ja, ich merke das auch. Ich fürchte, ein Burnout droht, wenn sich nichts ändert.","Yes, I notice that too. I fear a burnout is looming if nothing changes."),
("Herr Vogt","Wir brauchen mehr Personal. Ich werde mit der Geschäftsleitung sprechen.","We need more staff. I'll talk to the management."),
("Prof. Neumann","Meiner Meinung nach ist Werbung heute aggressiver als früher.","In my opinion advertising is more aggressive today than before."),
("Mia","Auf der einen Seite stimmt das. Auf der anderen Seite hilft Werbung auch, Produkte zu finden.","On the one hand that's true. On the other hand advertising also helps find products."),
("Prof. Neumann","Eine gute Argumentation! Je mehr man darüber nachdenkt, desto komplexer wird es.","A good argument! The more you think about it, the more complex it becomes.")]
B11_out = ["Beschwere dich höflich über ein defektes Produkt und verlange eine Lösung.","Erzähle von deiner Kindheit und deinem Traumberuf (Präteritum/Perfekt).","Diskutiere ein Thema: nenne zwei Argumente pro und contra.","Führe ein Bewerbungsgespräch: Stärken, Schwächen, Erfahrung."]
gen_module("B1.1", 121, B11_topics, B11_titles, B11_goals, B11_grammar, B11_vocab, B11_chunks, B11_scenes, B11_out)

# ============================================================ B1.2 (151-180)
B12_topics = ["Sprachen lernen","Lebenslanges Lernen","Lerntipps","Schule & Noten","Abschlüsse & Zertifikate",
"Verkehrsprobleme","Verkehrsmittel","Unterwegs","Urlaubserzählung","Glücksgefühle","Persönlichkeitseigenschaften",
"Stress, Wut & Freude","Deutsche Rezepte","Essen & Trinken","Im Restaurant","Einladungen",
"Glückwünsche","Finalsätze","Konditionalsätze","Zeitgleichkeiten","Kausalsätze","Konzessivsätze",
"Adjektiv + Präposition","Aufzählungen","Folgen","Recht & Pflicht","Bildungssystem","Arbeitswelt",
"Freizeit & Verein","Wiederholung B1.2"]
B12_titles = ["Warum Deutsch lernen?","Nie auslernen","Die besten Lerntipps","Noten & Zeugnisse","Das Abitur",
"Stau auf der Autobahn","ÖPNV vs. Auto","Eine lange Reise","Mein schönster Urlaub","Was macht glücklich?",
"Charakter: gut oder schlecht?","Mit Stress umgehen","Kartoffelsalat & Co","Deutsche Küche","Essen gehen",
"Eine Einladung","Herzlichen Glückwunsch!","Damit es klappt…","Wenn ich Zeit hätte…","Während ich lerne…",
"Weil, denn, deshalb","Obwohl es regnet…","Interessiert an…","Erstens, zweitens, drittens","Die Folgen des Klimawandels",
"Rechte und Pflichten","Das deutsche Schulsystem","Homeoffice & Co","Im Verein","Alles zusammen!"]
B12_goals = ["Über Bildung, Arbeit und Gesellschaft diskutieren.","Komplexe Nebensätze bilden (Finalsatz, Konditional, Kausal, Konzessiv).","Gefühle und Eigenschaften differenziert ausdrücken."]
B12_grammar = [
("Finalsätze: damit / um…zu", "Ziel ausdrücken: <b>damit</b> + Nebensatz (Subjektwechsel) oder <b>um + Infinitiv + zu</b> (gleiches Subjekt). <b>Ich lerne Deutsch, um in Deutschland zu arbeiten.</b> / <b>Ich lerne Deutsch, damit ich mit den Leuten reden kann.</b>", ["Ich spare Geld, um ein Auto zu kaufen.","Er erklärt es laut, damit alle es hören.","Wir gehen früh, um den Zug zu erreichen."]),
("Konditionalsätze: wenn (real) / wenn…würde (irreal)", "Real: <b>Wenn ich Zeit habe, komme ich.</b> Irreal Gegenwart: <b>Wenn ich Zeit hätte, würde ich kommen.</b> Irreal Vergangenheit: <b>Wenn ich Zeit gehabt hätte, wäre ich gekommen.</b>", ["Wenn es regnet, bleibe ich zu Hause.","Wenn ich reich wäre, würde ich reisen.","Wenn ich gewusst hätte, hätte ich dir geholfen."]),
("Zeitsätze: während, bevor, nachdem, als, seitdem", "Gleichzeitigkeit: <b>während</b> (while). Vorzeitigkeit: <b>bevor</b> (before), <b>nachdem</b> (after, + Perfekt). Einmalige Vergangenheit: <b>als</b> (when). <b>Seitdem</b> (since then). Verb am Ende!", ["Während ich koche, hörst du Musik.","Nachdem ich gegessen hatte, ging ich schlafen.","Als ich 10 war, zog ich nach Berlin."]),
("Kausalsätze: weil, da; denn (Hauptsatz); deshalb/deswegen", "<b>Weil/da</b> + Nebensatz (Verb am Ende). <b>Denn</b> + Hauptsatz. <b>Deshalb/deswegen</b> steht im Hauptsatz an Position 1 oder nach dem Verb. <b>Weil ich krank bin, bleibe ich zu Hause. / Ich bin krank, deshalb bleibe ich zu Hause.</b>", ["Ich bleibe zu Hause, weil ich krank bin.","Da es spät ist, gehen wir jetzt.","Er hatte kein Geld, deshalb konnte er nichts kaufen."]),
("Konzessivsätze: obwohl / obgleich / trotzdem", "<b>Obwohl</b> + Nebensatz: <b>Obwohl es regnet, gehen wir spazieren.</b> Im Hauptsatz: <b>Es regnet. Trotzdem gehen wir spazieren.</b>", ["Obwohl er viel lernt, besteht er die Prüfung nicht.","Sie ist müde, trotzdem arbeitet sie weiter.","Obwohl das Auto alt ist, fährt es gut."]),
("Adjektive + Präpositionen (interessiert an, stolz auf, zufrieden mit)", "Feste Kombinationen: <b>interessiert an</b> + Dat, <b>stolz auf</b> + Akk, <b>zufrieden mit</b> + Dat, <b>berühmt für</b> + Akk, <b>abhängig von</b> + Dat.", ["Ich bin stolz auf dich.","Sie ist zufrieden mit ihrer Arbeit.","Er ist berühmt für seine Romane."]),
("Aufzählung & Argumentation: erstens…zweitens…drittens; sowohl…als auch", "Strukturieren: <b>Erstens… Zweitens… Drittens…</b> <b>Sowohl A als auch B</b>. <b>Nicht nur…, sondern auch…</b> <b>Einerseits…, andererseits…</b>", ["Erstens ist es teuer, zweitens ist es unnötig.","Sowohl er als auch sie kommen.","Einerseits ist es praktisch, andererseits ist es gefährlich."]),
("Folgen: so…dass / sodass / dadurch, dass", "Folge ausdrücken: <b>Es war so kalt, dass ich friere.</b> <b>Er lernte viel, sodass er die Prüfung bestand.</b> <b>Dadurch, dass er viel lernte, bestand er die Prüfung.</b>", ["Der Kaffee ist so heiß, dass ich ihn nicht trinken kann.","Sie hatte viel Stress, sodass sie krank wurde.","Dadurch, dass ich früh kam, bekam ich einen Platz."]),
("Modalverben in der Vergangenheit (Perfekt): hat…müssen", "Modalverb im Perfekt: <b>Er hat viel arbeiten müssen.</b> (Infinitiv + Modal am Ende, kein ge-). Doppelinfinitiv: <b>Ich habe kommen wollen.</b>", ["Ich habe viel lernen müssen.","Wir haben gehen wollen.","Sie hat es nicht machen dürfen."]),
("Satzreihen & Verbstellung: jedoch, trotzdem, außerdem, allerdings", "Konjunktionaladverbien stehen an Position 1, dann Verb: <b>Es regnet. Trotzdem gehe ich raus.</b> <b>Ich bin müde. Jedoch muss ich arbeiten.</b> <b>Außerdem</b> (in addition), <b>allerdings</b> (however).", ["Ich habe keine Zeit. Außerdem bin ich müde.","Das Auto ist schnell. Allerdings verbraucht es viel Benzin.","Er ist reich. Trotzdem ist er unglücklich."]),
]
B12_vocab = [
("das Lernen","learning","das","noun"),("die Motivation","motivation","die","noun"),("motivieren","to motivate","","verb"),
("der Lerntipp","study tip","der","noun"),("die Note","grade","die","noun"),("das Zeugnis","report card","das","noun"),
("der Abschluss","degree/completion","der","noun"),("das Zertifikat","certificate","das","noun"),("das Abitur","A-levels/high school diploma","das","noun"),
("die Universität","university","die","noun"),("der Verkehr","traffic","der","noun"),("der Stau","traffic jam","der","noun"),
("die Autobahn","highway/motorway","die","noun"),("der ÖPNV","public transport","der","noun"),("die Fahrkarte","ticket","die","noun"),
("die Verspätung","delay","die","noun"),("die Strecke","route/distance","die","noun"),("die Ankunft","arrival","die","noun"),
("die Abreise","departure","die","noun"),("das Glück","happiness/luck","das","noun"),("glücklich","happy","","adj"),
("unglücklich","unhappy","","adj"),("die Freude","joy","die","noun"),("der Stress","stress","der","noun"),
("die Wut","anger","die","noun"),("wütend","angry","","adj"),("entspannt","relaxed","","adj"),
("das Rezept","recipe","das","noun"),("die Zutat","ingredient","die","noun"),("kochen","to cook","","verb"),
("backen","to bake","","verb"),("der Geschmack","taste","der","noun"),("leckerschmecken","to taste delicious","","verb","Das schmeckt lecker!"),
("die Einladung","invitation","die","noun"),("einladen","to invite","","verb"),("der Glückwunsch","congratulation","der","noun"),
("gratulieren","to congratulate","","verb","Ich gratuliere dir!"),("das Geschenk","gift","das","noun"),("die Feier","celebration/party","die","noun"),
("der Grund","reason","der","noun"),("die Folge","consequence","die","noun"),("die Ursache","cause","die","noun"),
("die Bedingung","condition","die","noun"),("der Zweck","purpose","der","noun"),("das Ziel","goal","das","noun"),
("die Pflicht","duty/obligation","die","noun"),("das Recht","right/law","das","noun"),("die Regel","rule","die","noun"),
("das Bildungssystem","education system","das","noun"),("die Ausbildung","vocational training","die","noun"),("der duale Ausbildungsbetrieb","dual training company","der","noun"),
("das Homeoffice","work from home","das","noun"),("der Verein","club/association","der","noun"),("sich engagieren","to get involved","","verb"),
("das Ehrenamt","volunteer work","das","noun"),("die Gemeinschaft","community","die","noun"),("der Umweltschutz","environmental protection","der","noun"),
("die Verschmutzung","pollution","die","noun"),("der Müll","trash","der","noun"),("recyceln","to recycle","","verb"),
("nachhaltig","sustainable","","adj"),("erneuerbar","renewable","","adj"),("die Energie","energy","die","noun"),
("die Solarenergie","solar energy","die","noun"),("der Windpark","wind farm","der","noun"),("die Atomenergie","nuclear energy","die","noun"),
("die Diskussion","discussion","die","noun"),("die Debatte","debate","die","noun"),("sich äußern","to express oneself","","verb"),
("vertreten","to represent/defend","","verb","Ich vertrete meine Meinung."),("widerlegen","to refute","","verb"),("zustimmen","to agree","","verb","Ich stimme zu."),
("ablehnen","to reject","","verb"),("vorschlagen","to suggest","","verb"),("fordern","to demand","","verb"),
]
B12_chunks = [("Damit ich … kann, muss ich …","So that I can …, I have to …"),("Um … zu können, …","In order to be able to …, …"),("Wenn ich … hätte, würde ich …","If I had …, I would …"),
("Während ich …, …","While I …, …"),("Nachdem ich … hatte, …","After I had …, …"),("Obwohl …, …","Although …, …"),
("Einerseits…, andererseits…","On the one hand…, on the other hand…"),("Erstens…, zweitens…, drittens…","First…, second…, third…"),("Dadurch, dass…, …","By the fact that…, …"),
("Ich bin der Meinung, dass…","I am of the opinion that…"),("Meiner Ansicht nach…","In my view…"),("Im Gegensatz dazu…","In contrast to that…"),
("Darüber hinaus…","Beyond that…"),("Allerdings…","However…"),("Nicht nur…, sondern auch…","Not only… but also…")]
B12_scenes = [
("Prof. Neumann","Warum lernen Sie eigentlich Deutsch? Um in Deutschland zu arbeiten?","Why are you actually learning German? To work in Germany?"),
("Mia","Ja, damit ich hier Karriere machen kann. Außerdem liebe ich die Sprache.","Yes, so that I can build a career here. Besides, I love the language."),
("Prof. Neumann","Das ist eine gute Motivation. Seitdem ich Sie kenne, haben Sie sich stark verbessert.","That's good motivation. Since I've known you, you've improved a lot."),
("Leila","Gestern war Stau auf der Autobahn. Ich bin zwei Stunden im Verkehr gestanden.","Yesterday there was a traffic jam on the highway. I stood in traffic for two hours."),
("Tom","Deshalb solltest du öfter den ÖPNV nehmen. Er ist pünktlicher und umweltfreundlicher.","That's why you should take public transport more often. It's more punctual and eco-friendly."),
("Leila","Trotzdem fahre ich lieber mit dem Auto. Es ist flexibler.","Still, I prefer driving. It's more flexible."),
("Nadja","Wenn ich viel Geld hätte, würde ich mir ein Haus am See kaufen.","If I had a lot of money, I'd buy a house by the lake."),
("Jonas","Ich würde eine Weltreise machen. Nachdem ich alle Länder gesehen hätte, würde ich ein Buch schreiben.","I'd travel the world. After I'd seen all countries, I'd write a book."),
("Mia","Ich würde eine Schule gründen, damit arme Kinder kostenlos lernen können.","I'd found a school so that poor children can learn for free."),
("Herr Vogt","Obwohl wir viel Überstunden machen, ist das Projekt noch nicht fertig.","Although we work a lot of overtime, the project isn't finished yet."),
("Leila","Das liegt daran, dass ständig neue Anforderungen dazukommen.","That's because new requirements keep being added."),
("Herr Vogt","Dadurch, dass wir Prioritäten setzen, können wir uns auf das Wichtigste konzentrieren.","By setting priorities, we can focus on what's most important."),
("Frau Becker","Herzlichen Glückwunsch zum Geburtstag! Ich habe dir ein Geschenk mitgebracht.","Congratulations on your birthday! I brought you a gift."),
("Mia","Vielen Dank! Wie lieb von dir! Komm herein, ich mache dir einen Kaffee.","Thank you so much! How sweet of you! Come in, I'll make you a coffee."),
("Frau Becker","Ich habe gehört, du hast die Deutschprüfung bestanden. Dazu gratuliere ich dir!","I heard you passed the German exam. Congratulations for that too!"),
("Tom","Kartoffelsalat ist typisch deutsch. Hast du das Rezept von deiner Oma?","Potato salad is typically German. Did you get the recipe from your grandma?"),
("Nadja","Ja. Erstens Kartoffeln kochen, zweitens Zwiebeln schneiden, drittens mit Brühe verrühren.","Yes. First boil potatoes, second cut onions, third mix with broth."),
("Tom","Das klingt einfach. Allerdings braucht man Geduld, damit es gut schmeckt.","That sounds simple. However, you need patience so it tastes good."),
("Prof. Neumann","Meiner Ansicht nach ist das deutsche Bildungssystem sehr gut, aber auch kompliziert.","In my view the German education system is very good, but also complicated."),
("Mia","Einerseits gibt es viele Möglichkeiten, andererseits sind die Übergänge schwer.","On the one hand there are many opportunities, on the other hand the transitions are difficult."),
("Prof. Neumann","Richtig. Seitdem es die duale Ausbildung gibt, profitieren beide Seiten: Betriebe und Azubis.","Correct. Since dual training exists, both sides benefit: companies and apprentices."),
("Jonas","Ich engagiere mich im Verein. Wir helfen alten Menschen beim Einkaufen.","I'm involved in a club. We help old people with shopping."),
("Leila","Das ist toll! Ehrenamt macht glücklich, oder?","That's great! Volunteering makes you happy, right?"),
("Jonas","Ja. Obwohl es Zeit kostet, bereichert es das Leben.","Yes. Although it costs time, it enriches life."),
("Mia","Wenn ich nächstes Jahr mehr Zeit hätte, würde ich mich auch engagieren.","If I had more time next year, I'd get involved too."),
("Tom","Der Klimawandel hat viele Folgen: Erstens steigt der Meeresspiegel, zweitens gibt es mehr Extremwetter.","Climate change has many consequences: first sea levels rise, second there's more extreme weather."),
("Nadja","Drittens sterben viele Arten. Wir müssen handeln, bevor es zu spät ist.","Third many species die. We must act before it's too late."),
("Tom","Ich bin der Meinung, dass erneuerbare Energien die Lösung sind.","I am of the opinion that renewable energies are the solution."),
("Herr Vogt","Sowohl die Regierung als auch die Unternehmen müssen mehr tun.","Both the government and companies must do more."),
("Leila","Allerdings fehlt oft das Geld. Außerdem sind die Menschen noch nicht bereit für Veränderungen.","However, money is often lacking. Besides, people aren't ready for change yet."),
("Mia","Trotzdem dürfen wir nicht aufgeben. Jeder kann einen Beitrag leisten.","Still we mustn't give up. Everyone can contribute.")]
B12_out = ["Erkläre, warum du Deutsch lernst (damit/um…zu).","Diskutiere Vor- und Nachteile von Auto vs. ÖPNV.","Beschreibe deinen glücklichsten Moment (Präteritum).","Nenne 3 Folgen des Klimawandels und 2 Lösungen."]
gen_module("B1.2", 151, B12_topics, B12_titles, B12_goals, B12_grammar, B12_vocab, B12_chunks, B12_scenes, B12_out)

# ============================================================ B2.1 (181-210)
B21_topics = ["Schule & Ausbildung","Zwischenmenschliche Beziehungen","Freundschaft & Liebe","Wohnen & Miete",
"Reiseprobleme","Beschwerdebrief","Kulturelle Unterschiede","Arbeitswelt international","Europa & die Deutschen",
"Smalltalk","Redemittel Diskussion","Meinung äußern","Vergleichen & Gegenüberstellen","Diplomatie & Höflichkeit",
"Passiv intensiv","Adjektivdeklination alle Fälle","Wechselpräpositionen","N-Deklination & Genitiv",
"Kausal: weil/denn/deshalb/so…dass","Modalverben in allen Zeiten","Konjunktiv II höflich & irreal",
"Textarbeit: Leseverstehen","Hörverstehen Reportage","Vortrag halten","Diskussion führen",
"Essay schreiben","Bewerbung auf Deutsch","Wissenschaft & Forschung","Gesellschaft & Soziales","Wiederholung B2.1"]
B21_titles = ["Das deutsche Schulsystem","Freunde fürs Leben","Liebe in Deutschland","Eine Wohnung finden",
"Der verspätete Flug","Der Beschwerdebrief","Andere Länder, andere Sitten","Im internationalen Team",
"Was ist typisch deutsch?","Das perfekte Smalltalk","Meinung vs. Tatsache","Pro und Contra",
"Vergleich zweier Städte","Diplomatisch bleiben","Wie wird das gemacht?","Alle Fälle, alle Artikel",
"In den oder im Park?","Studenten, deren…","Der Grund und die Folge","Müssen, sollen, wollen",
"Wenn ich Präsident wäre…","Einen Zeitungsartikel lesen","Eine Reportage hören","Ein Kurzvortrag",
"Die große Debatte","Ein Essay schreiben","Die Traumbewerbung","Forschung in Deutschland","Soziale Gerechtigkeit","Alles zusammen!"]
B21_goals = ["Differenziert diskutieren, argumentieren und überzeugen.","Komplexe Texte verstehen und produzieren (Brief, Essay, Vortrag).","Alle grammatischen Strukturen sicher beherrschen und kombinieren."]
B21_grammar = [
("Passiv in allen Zeiten + Zustandspassiv (sein + PII)", "Vorgangspassiv: <b>Das Haus wird gebaut.</b> (Präsens), <b>Das Haus wurde gebaut.</b> (Präteritum), <b>Das Haus ist gebaut worden.</b> (Perfekt). Zustandspassiv (Ergebnis): <b>Das Haus ist gebaut.</b> (sein + PII, kein werden).", ["Das Fenster wird geöffnet.","Das Fenster wurde geöffnet.","Das Fenster ist geöffnet."]),
("Adjektivdeklination: stark (nach viel/wenig), schwach (nach dem), gemischt (nach ein)", "Deklination nach Artikelwort: stark (kein Artikel: guter Wein), schwach (der gute Wein), gemischt (ein guter Wein). Alle vier Fälle beherrschen.", ["Guter Wein schmeckt mir.","Der gute Wein ist aus Frankreich.","Ein guter Wein kostet mehr."]),
("Wechselpräpositionen (in/an/auf/über/unter/vor/hinter/neben/zwischen) + Dativ/Akkusativ", "Wo? → Dativ (Ruhe). Wohin? → Akkusativ (Richtung). <b>Ich hänge das Bild an die Wand (Akk).</b> → <b>Das Bild hängt an der Wand (Dat).</b>", ["Ich lege das Buch auf den Tisch.","Das Buch liegt auf dem Tisch.","Wir gehen in das Haus / Wir sind in dem Haus."]),
("Genitiv & N-Deklination: des Studenten, wegen des Mannes", "Schwache Maskulina (Student, Herr, Name, Kollege, Nachbar) enden im Gen/Akk/Dat auf -n/-en. Genitiv mit s/-es bei starken Maskulina/Neutra: <b>des Mannes, des Kindes</b>.", ["Ich erinnere mich des Mannes, der mir geholfen hat.","Wegen des Studenten, der zu spät kam,…","Der Name des Herrn ist mir entfallen."]),
("Kausalgefüge: weil/da (Nebensatz), denn (Hauptsatz), deshalb/deswegen/daher (Adverb), so…dass/sodass (Folge)", "Kausalität differenziert ausdrücken. <b>Weil ich krank bin, bleibe ich zu Hause.</b> <b>Ich bin krank, denn ich habe Fieber.</b> <b>Ich bin krank, deshalb bleibe ich zu Hause.</b> <b>Es war so kalt, dass ich fror.</b>", ["Da es regnet, nehme ich einen Schirm.","Er ist müde, denn er hat schlecht geschlafen.","Der Zug hatte Verspätung, sodass ich den Anschluss verpasste."]),
("Konjunktiv II: würde + Infinitiv; hätte/wäre/konnte; höflich + irreal", "Irrealität und Höflichkeit. <b>Ich würde kommen, wenn ich Zeit hätte.</b> <b>An deiner Stelle würde ich…</b> <b>Hätten Sie vielleicht…?</b> Konj II der Vergangenheit: <b>Ich hätte…gemacht / wäre…gegangen.</b>", ["An deiner Stelle würde ich die Stelle annehmen.","Wenn ich mehr Zeit hätte, würde ich mehr Sport machen.","Hätten Sie vielleicht einen Moment Zeit?"]),
("Modalverben in allen Zeiten + Ersatzformen (brauchen zu, in der Lage sein)", "Müssen/können/sollen/wollen/dürfen/mögen im Präsens, Präteritum, Perfekt (Doppelinfinitiv). Ersatz: <b>ich brauche nicht zu kommen</b> (muss nicht), <b>ich bin in der Lage zu…</b> (kann).", ["Er hat viel lernen müssen.","Sie wird kommen können.","Du brauchst mir nicht zu helfen."]),
("Relativsätze mit Präposition + Genitiv (dessen/deren)", "Präposition vor Relativpronomen: <b>der Mann, von dem ich rede</b>. Genitiv: <b>der Mann, dessen Auto kaputt ist</b>; <b>die Frau, deren Kinder…</b>.", ["Das Haus, in dem ich wohne, ist alt.","Der Schriftsteller, dessen Bücher ich liebe, kommt aus Österreich.","Die Frage, über die wir diskutieren, ist komplex."]),
("Konzessiv & adversativ: obwohl/obgleich/obwohl; trotzdem/jedoch/allerdings/dennoch", "Einräumen und widersprechen. <b>Obwohl er gut vorbereitet war, fiel er durch.</b> <b>Er war gut vorbereitet. Dennoch fiel er durch.</b>", ["Obwohl die Preise steigen, kaufen die Leute weiter.","Das Argument ist schlüssig. Allerdings ignoriert es einen wichtigen Punkt.","Trotz aller Bemühungen gelang es nicht."]),
("Wortstellung in komplexen Sätzen (Nebensatz + Hauptsatz; Verb am Ende/Position 2)", "Nach Nebensatz beginnt der Hauptsatz mit dem finite Verb (Position 1): <b>Wenn ich Zeit habe, komme ich.</b> In Infinitivgruppen steht das finite Verb vor oder nach der Gruppe: <b>Ich versuche, pünktlich zu sein.</b>", ["Nachdem er gegangen war, begann die Sitzung.","Je mehr ich darüber nachdenke, desto besser gefällt es mir.","Er sagte, dass er morgen kommen würde."]),
]
B21_vocab = [
("die Ausbildung","vocational training","die","noun"),("der Auszubildende (Azubi)","apprentice","der","noun"),("die Universität","university","die","noun"),
("die Beziehung","relationship","die","noun"),("die Freundschaft","friendship","die","noun"),("die Liebe","love","die","noun"),
("der Mietvertrag","lease","der","noun"),("die Miete","rent","die","noun"),("die Kaution","deposit","die","noun"),
("der Mieter","tenant","der","noun"),("der Vermieter","landlord","der","noun"),("die Kündigung","termination/notice","die","noun"),
("die Beschwerde","complaint","die","noun"),("sich beschweren","to complain","","verb"),("der Schaden","damage","der","noun"),
("die Entschädigung","compensation","die","noun"),("der Kulturunterschied","cultural difference","der","noun"),("die Sitte","custom","die","noun"),
("die Höflichkeit","politeness","die","noun"),("die Diplomatie","diplomacy","die","noun"),("diplomatisch","diplomatic","","adj"),
("die Meinung","opinion","die","noun"),("die Tatsache","fact","die","noun"),("die Behauptung","claim/assertion","die","noun"),
("das Argument","argument","das","noun"),("begründen","to justify","","verb"),("widerlegen","to refute","","verb"),
("vertreten","to represent/defend","","verb"),("die Debatte","debate","die","noun"),("der Vortrag","lecture/talk","der","noun"),
("der Essay","essay","der","noun"),("die These","thesis","die","noun"),("die Gegenposition","opposing position","die","noun"),
("die Forschung","research","die","noun"),("der Wissenschaftler","scientist","der","noun"),("die Studie","study","die","noun"),
("die Umfrage","survey/poll","die","noun"),("das Ergebnis","result","das","noun"),("die Statistik","statistics","die","noun"),
("die Gesellschaft","society","die","noun"),("die Gerechtigkeit","justice","die","noun"),("die Ungleichheit","inequality","die","noun"),
("die Armut","poverty","die","noun"),("der Reichtum","wealth","der","noun"),("die Sozialversicherung","social insurance","die","noun"),
("die Rente","pension","die","noun"),("die Arbeitslosigkeit","unemployment","die","noun"),("die Integration","integration","die","noun"),
("die Migration","migration","die","noun"),("die Vielfalt","diversity","die","noun"),("die Toleranz","tolerance","die","noun"),
("die Demokratie","democracy","die","noun"),("die Regierung","government","die","noun"),("das Parlament","parliament","das","noun"),
("die Partei","political party","die","noun"),("wählen","to vote/choose","","verb"),("der Abgeordnete","MP/member of parliament","der","noun"),
("das Grundrecht","fundamental right","das","noun"),("die Meinungsfreiheit","freedom of speech","die","noun"),("die Pressefreiheit","freedom of the press","die","noun"),
("der Journalist","journalist","der","noun"),("die Reportage","reportage","die","noun"),("der Kommentar","commentary","der","noun"),
("die Redewendung","idiom","die","noun"),("der Ausdruck","expression","der","noun"),("formulieren","to formulate","","verb"),
("ausdrücken","to express","","verb"),("verdeutlichen","to clarify","","verb"),("zusammenfassen","to summarize","","verb"),
("ableiten","to derive/conclude","","verb"),("schlussfolgern","to conclude","","verb"),("behaupten","to claim","","verb"),
("bezweifeln","to doubt","","verb"),("bestätigen","to confirm","","verb"),("widerlegen","to refute","","verb"),
]
B21_chunks = [("Meiner Meinung nach…","In my opinion…"),("Ich vertrete die Auffassung, dass…","I take the view that…"),("Dafür spricht, dass…","In favor of that is that…"),
("Dagegen spricht, dass…","Against that is that…"),("Einerseits…, andererseits…","On the one hand…, on the other…"),("Im Gegensatz dazu…","In contrast…"),
("Es lässt sich nicht leugnen, dass…","It cannot be denied that…"),("Man darf nicht vergessen, dass…","One must not forget that…"),("In Anbetracht der Tatsache, dass…","Considering the fact that…"),
("Ich würde vorschlagen, dass…","I would suggest that…"),("Es wäre sinnvoll, …","It would make sense to …"),("An Ihrer Stelle würde ich …","In your place I would …"),
("Hätten Sie vielleicht …?","Would you perhaps have …?"),("Wäre es möglich, dass …?","Would it be possible that …?"),("Ich bin mir nicht sicher, ob …","I'm not sure whether …")]
B21_scenes = [
("Prof. Neumann","In Deutschland gibt es das duale Ausbildungssystem. Das ist weltweit einzigartig.","In Germany there is the dual training system. That's unique worldwide."),
("Mia","Erklären Sie mir das bitte. Ich verstehe das Konzept noch nicht ganz.","Please explain that to me. I don't quite understand the concept yet."),
("Prof. Neumann","Die Azubis lernen sowohl in der Berufsschule als auch im Betrieb. Dadurch gewinnen sie sofort Praxiserfahrung.","Apprentices learn both at vocational school and in the company. Thereby they immediately gain practical experience."),
("Leila","Ich habe eine Beschwerde an die Fluggesellschaft geschrieben. Mein Gepäck ist verloren gegangen.","I wrote a complaint to the airline. My luggage got lost."),
("Jonas","Hast du eine Entschädigung gefordert? Nach EU-Recht steht dir das zu.","Did you demand compensation? Under EU law you're entitled to it."),
("Leila","Ja, aber die Airline weigert sich. Obwohl ich alle Belege habe, lehnt sie ab.","Yes, but the airline refuses. Although I have all receipts, it declines."),
("Jonas","Dann schalte doch einen Anwalt ein. In so einem Fall hast du gute Karten.","Then hire a lawyer. In such a case you have good chances."),
("Nadja","Kulturelle Unterschiede im Berufsleben: In Deutschland ist Pünktlichkeit heilig.","Cultural differences in professional life: In Germany punctuality is sacred."),
("Tom","In meinem Land ist es normal, 15 Minuten zu spät zu kommen. Deshalb hatte ich am Anfang Probleme.","In my country it's normal to arrive 15 minutes late. That's why I had problems at the beginning."),
("Nadja","Ich habe gelernt, mich anzupassen. Trotzdem vermisse ich die Flexibilität meiner Heimat.","I learned to adapt. Still I miss the flexibility of my home country."),
("Herr Vogt","Wir diskutieren heute über die Frage: Soll das Homeoffice Pflicht werden?","Today we discuss the question: Should working from home become mandatory?"),
("Mia","Dafür spricht, dass Mitarbeiter zufriedener sind. Dagegen spricht, dass der Teamgeist leidet.","In favor is that employees are more satisfied. Against is that team spirit suffers."),
("Leila","Ich bin der Meinung, dass eine Mischung das Beste ist. Sowohl Homeoffice als auch Büro haben Vorteile.","I am of the opinion that a mix is best. Both home office and office have advantages."),
("Prof. Neumann","Fassen Sie den Artikel zusammen und leiten Sie die Hauptthese ab.","Summarize the article and derive the main thesis."),
("Mia","Der Autor behauptet, dass soziale Medien einsam machen. Aber er widerlegt sich teilweise selbst.","The author claims that social media make people lonely. But he partly contradicts himself."),
("Prof. Neumann","Gute Analyse. Allerdings sollten Sie die Studie, auf die er sich beruft, genauer prüfen.","Good analysis. However, you should examine the study he refers to more closely."),
("Frau Becker","Ich habe die Wohnung gekündigt. Die Miete ist zu stark gestiegen.","I terminated the apartment. The rent rose too much."),
("Mia","Das ist schade. Wegen der Mietsteigerungen ziehen viele Menschen aus der Stadt weg.","That's a shame. Because of rent increases many people move out of the city."),
("Frau Becker","Ja, die Ungleichheit wächst. Die Regierung sollte mehr Sozialwohnungen bauen.","Yes, inequality grows. The government should build more social housing."),
("Jonas","Gestern habe ich einen Vortrag über Klimawandel gehalten. Es war auf Deutsch!","Yesterday I gave a talk about climate change. It was in German!"),
("Nadja","Respekt! Wie ist es gelaufen? Hast du Fragen aus dem Publikum beantwortet?","Respect! How did it go? Did you answer questions from the audience?"),
("Jonas","Ja, teilweise. Manche Fragen waren so komplex, dass ich sie erst später beantworten musste.","Yes, partly. Some questions were so complex that I had to answer them later."),
("Tom","Die Studie zeigt, dass mehr Bildung zu mehr Einkommen führt. Allerdings ist der Zusammenhang nicht immer kausal.","The study shows that more education leads to higher income. However the connection isn't always causal."),
("Leila","Das ist ein wichtiger Punkt. Man darf nicht vergessen, dass auch andere Faktoren eine Rolle spielen.","That's an important point. One mustn't forget that other factors play a role too."),
("Tom","Genau. In Anbetracht der Datenlage sollte man vorsichtig mit Schlussfolgerungen sein.","Exactly. Considering the data situation one should be careful with conclusions."),
("Herr Vogt","An Ihrer Stelle würde ich die Stelle annehmen. Das Gehalt ist gut, und das Team ist motiviert.","In your place I'd accept the position. The salary is good, and the team is motivated."),
("Mia","Ich bin mir nicht sicher. Wäre es möglich, dass ich erst eine Probezeit vereinbare?","I'm not sure. Would it be possible that I first agree on a probation period?"),
("Herr Vogt","Das ist üblich. Ich würde vorschlagen, dass Sie drei Monate Probezeit vereinbaren.","That's common. I'd suggest you agree on three months probation."),
("Prof. Neumann","Es lässt sich nicht leugnen, dass die Demokratie unter Druck steht.","It cannot be denied that democracy is under pressure."),
("Mia","Meiner Meinung nach ist die Meinungsfreiheit das wichtigste Grundrecht.","In my opinion freedom of speech is the most important fundamental right."),
("Prof. Neumann","Richtig. Aber Toleranz und Vielfalt gehören dazu. Nur so funktioniert eine offene Gesellschaft.","Correct. But tolerance and diversity belong to it. Only thus does an open society function.")]
B21_out = ["Schreibe den Anfang eines Beschwerdebriefes (3 Sätze).","Diskutiere eine kontroverse Frage pro/contra mit 2 Argumenten je Seite.","Fasse einen (gedachten) Artikel zusammen: These + 2 Belege.","Äußere diplomatisch eine Kritik an einem Vorschlag deines Chefs."]
gen_module("B2.1", 181, B21_topics, B21_titles, B21_goals, B21_grammar, B21_vocab, B21_chunks, B21_scenes, B21_out)

# ============================================================ B2.2 (211-240)
B22_topics = ["Emails & Telefon","Arbeitsalltag","Besprechungen leiten","Präsentationen","Verhandlung",
"Freizeit & Hobby","Kultur & Kunst","Universität","Studium in Deutschland","Wissenschaft",
"Geschichte Deutschlands","Politik","Wahlen & Demokratie","Nachrichten aus aller Welt","Medienkritik",
"Kriminalgeschichten","Krimi & Ermittlung","Gericht & Recht","Subjunktiv I: indirekte Rede","Konjunktiv II: Vergangenheit",
"Bedingungssätze alle Typen","Wortstellung verfeinert","Verbstellung in Nebensätzen","Nomen-Verb-Verbindungen",
"Präpositionen & Rektion","Textproduktion: Reportage","Streitgespräch","Literarische Texte","Abschlussprojekt B2","Wiederholung B2.2"]
B22_titles = ["Eine formelle Email","Das Telefonat","Eine Besprechung leiten","Die große Präsentation","Verhandeln wie ein Profi",
"Meine Freizeit","Theater & Oper","An der Universität","Erasmus in Deutschland","Forschungsmethoden",
"Deutsche Geschichte: 1989","Politik verstehen","Bundestagswahl","Weltnachrichten","Medien unter der Lupe",
"Der Krimi-Abend","Kommissar Berger ermittelt","Vor Gericht","Der Präsident sagte, dass…","Wenn ich gewusst hätte…",
"Falls, sofern, vorausgesetzt","Wortstellung: Perfektion","Dass-Sätze & Infinitivgruppen","zur Kenntnis nehmen, in Frage stellen",
"Rektion: sich befassen mit","Eine Reportage schreiben","Die große Talkshow","Ein Roman lesen","Mein B2-Abschluss","Alles zusammen!"]
B22_goals = ["Sich in Beruf, Studium und Politik differenziert ausdrücken.","Indirekte Rede, Konjunktiv II Vergangenheit und komplexe Bedingungssätze beherrschen.","Eigenständig komplexe Texte (Reportage, Essay, Email) produzieren."]
B22_grammar = [
("Konjunktiv I (indirekte Rede): er sage, er habe, er werde", "Wiedergabe von fremdem Sprechen, oft in Nachrichten. <b>Er sagte, er komme aus Berlin.</b> (Konj I = Präsensform). <b>Er sagte, er habe gearbeitet.</b> (Perfekt). <b>Er sagte, er würde kommen.</b> (Ersatz, wenn Konj I nicht erkennbar).", ["Der Minister sagte, die Wirtschaft wachse.","Sie behauptete, sie habe ihn nicht gesehen.","Er erwähnte, er werde morgen kommen."]),
("Konjunktiv II der Vergangenheit: hätte + PII / wäre + PII", "Irreal in der Vergangenheit (Bedauern/vorstellen). <b>Wenn ich gewusst hätte, hätte ich dir geholfen.</b> <b>Ich wäre gekommen, wenn du mich gerufen hättest.</b> Auch: <b>Ich hätte es fast vergessen.</b>", ["Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden.","Wir wären früher gekommen, wenn der Zug nicht verspätet gewesen wäre.","Ich hätte dir geschrieben, aber ich hatte deine Adresse nicht."]),
("Bedingungssätze Typ I/II/III + falls/sofern/vorausgesetzt", "Typ I (real): <b>Wenn ich Zeit habe, komme ich.</b> Typ II (irreal Gegenwart): <b>Wenn ich Zeit hätte, würde ich kommen.</b> Typ III (irreal Vergangenheit): <b>Wenn ich Zeit gehabt hätte, wäre ich gekommen.</b> Varianten: <b>falls, sofern, vorausgesetzt, dass…</b>", ["Falls es regnet, nehme ich einen Schirm.","Sofern du mir hilfst, schaffen wir es.","Vorausgesetzt, dass er kommt, feiern wir."]),
("Wortstellung verfeinert: Ausklammerung, Infinitivgruppe, dass-Satz am Anfang", "Erweiterte Inversion: <b>Nicht nur hat er viel Geld, sondern er ist auch großzügig.</b> Dass-Satz als Subjektsatz: <b>Dass er kommt, ist sicher.</b> Infinitivgruppen mit um…zu, ohne…zu, statt…zu.", ["Dass er kommt, wundert mich.","Ohne zu zögern, half er mir.","Statt zu arbeiten, spielte er am Handy."]),
("Nomen-Verb-Verbindungen (Funktionsverbgefüge): zur Kenntnis nehmen, in Frage stellen, zur Verfügung stellen", "Feste Kombinationen aus Nomen + Verb, oft formell. <b>Ich nehme zur Kenntnis, dass…</b> (I note that…), <b>Das stellt alles in Frage.</b> (That calls everything into question), <b>Wir stellen Ihnen ein Auto zur Verfügung.</b>", ["Ich habe Ihre Bewerbung zur Kenntnis genommen.","Die neue Studie stellt alte Theorien in Frage.","Das Hotel stellt den Gästen WLAN zur Verfügung."]),
("Verben mit fester Rektion (Präposition + Kasus): sich befassen mit, bestehen aus, hinweisen auf", "Wichtige Rektionen: <b>sich befassen mit</b> + Dat, <b>bestehen aus</b> + Dat, <b>hinweisen auf</b> + Akk, <b>zweifeln an</b> + Dat, <b>teilnehmen an</b> + Dat, <b>reagieren auf</b> + Akk.", ["Wir befassen uns mit dem Thema Umwelt.","Das Buch besteht aus drei Teilen.","Er wies auf die Gefahr hin."]),
("Subjunktiv I vs. Konjunktiv II in der indirekten Rede", "Konj I für neutrale Wiedergabe; Konj II (würde) als Ersatz, wenn Konj I nicht von Indikativ zu unterscheiden ist (z.B. wir/sie). <b>Er sagte, sie seien krank.</b> vs. <b>Er sagte, sie würden kommen.</b>", ["Der Reporter sagte, der Minister habe zurückgetreten.","Sie erzählte, sie wäre in Paris gewesen.","Man hört, er würde ein neues Buch schreiben."]),
("Passiv mit Modalverben + Zustandspassiv + sich lassen", "Modalverb + Passiv: <b>Das muss gemacht werden.</b> <b>Das kann gemacht werden.</b> <b>sich lassen + Infinitiv</b> = kann man: <b>Das Problem lässt sich lösen.</b> (= Es kann gelöst werden.)", ["Das muss sofort erledigt werden.","Die Frage lässt sich nicht einfach beantworten.","Die Arbeit kann von zu Hause aus erledigt werden."]),
("Konzessiv-/Adversativsätze: auch wenn/selbst wenn/ungeachtet dessen", "Stärkere Konzession: <b>Auch wenn es regnet, gehen wir.</b> <b>Selbst wenn er reich ist, ist er nicht glücklich.</b> <b>Ungeachtet dessen</b> (regardless of that).", ["Auch wenn ich müde bin, muss ich lernen.","Selbst wenn du recht hast, solltest du zuhören.","Ungeachtet der Kritik setzte er seinen Plan durch."]),
("Stilregister: formell vs. informell; Nominalstil vs. verbaler Stil", "B2 = Register beherrschen. Formell: <b>Ich bitte um…</b>, <b>Hiermit teile ich Ihnen mit…</b> Nominalstil (schriftlich): <b>Die Durchführung des Projekts…</b> statt <b>Wir führen das Projekt durch…</b>", ["Ich bitte um eine baldige Antwort.","Hiermit bestätige ich den Termin.","Die Untersuchung der Ergebnisse ergab…"]),
]
B22_vocab = [
("die E-Mail","email","die","noun"),("der Anhang","attachment","der","noun"),("die Empfänger","recipient","der","noun"),
("der Absender","sender","der","noun"),("die Betreffzeile","subject line","die","noun"),("formell","formal","","adj"),
("informell","informal","","adj"),("die Besprechung","meeting","die","noun"),("leiten","to lead/conduct","","verb"),
("die Tagesordnung","agenda","die","noun"),("der Protokollführer","minute-taker","der","noun"),("der Beschluss","decision/resolution","der","noun"),
("die Präsentation","presentation","die","noun"),("die Folie","slide","die","noun"),("der Redner","speaker","der","noun"),
("das Publikum","audience","das","noun"),("die Verhandlung","negotiation","die","noun"),("verhandeln","to negotiate","","verb"),
("das Angebot","offer","das","noun"),("das Gegenangebot","counteroffer","das","noun"),("der Vertrag","contract","der","noun"),
("unterschreiben","to sign","","verb"),("kündigen","to terminate","","verb"),("die Universität","university","die","noun"),
("das Studium","studies (univ.)","das","noun"),("der Studiengang","degree program","der","noun"),("die Vorlesung","lecture","die","noun"),
("das Seminar","seminar","das","noun"),("die Hausarbeit","term paper","die","noun"),("die Abschlussarbeit","thesis","die","noun"),
("der Professor","professor","der","noun"),("die Forschung","research","die","noun"),("die Methode","method","die","noun"),
("die Hypothese","hypothesis","die","noun"),("die Quelle","source","die","noun"),("die Geschichte","history","die","noun"),
("die Mauer","wall","die","noun"),("die Wende","reunification/turning point (1989)","die","noun"),("die Demokratie","democracy","die","noun"),
("die Politik","politics","die","noun"),("die Wahl","election","die","noun"),("der Bundestag","German parliament","der","noun"),
("der Kanzler","chancellor","der","noun"),("die Regierung","government","die","noun"),("die Opposition","opposition","die","noun"),
("die Nachricht","news","die","noun"),("der Journalist","journalist","der","noun"),("die Reportage","reportage","die","noun"),
("der Krimi","crime story/detective novel","der","noun"),("der Kommissar","detective inspector","der","noun"),("der Mord","murder","der","noun"),
("der Dieb","thief","der","noun"),("das Gericht","court","das","noun"),("der Richter","judge","der","noun"),
("der Anwalt","lawyer","der","noun"),("das Urteil","verdict/judgment","das","noun"),("die Rede","speech","die","noun"),
("behaupten","to claim","","verb"),("bestreiten","to deny","","verb"),("bestätigen","to confirm","","verb"),
("bezweifeln","to doubt","","verb"),("sich äußern","to express oneself","","verb"),("äußern","to express","","verb"),
("die Äußerung","statement/utterance","die","noun"),("die Behauptung","claim","die","noun"),("der Beweis","proof","der","noun"),
("der Indikator","indicator","der","noun"),("die Konsequenz","consequence","die","noun"),("die Auswirkung","effect/impact","die","noun"),
("der Zusammenhang","connection/context","der","noun"),("die Analyse","analysis","die","noun"),("auswerten","to evaluate","","verb"),
("interpretieren","to interpret","","verb"),("ableiten","to derive","","verb"),("schlussfolgern","to conclude","","verb"),
]
B22_chunks = [("Hiermit teile ich Ihnen mit, dass…","I hereby inform you that…"),("Ich bitte um…","I request…"),("Vielen Dank für Ihre Bemühungen.","Thank you for your efforts."),
("Es wurde behauptet, dass…","It was claimed that…"),("Laut Angaben von…","According to information from…"),("Wie bereits erwähnt,…","As already mentioned,…"),
("Daraus lässt sich schlussfolgern, dass…","From this one can conclude that…"),("In Anbetracht der Tatsache, dass…","Considering the fact that…"),("Es steht außer Frage, dass…","It is beyond question that…"),
("Allerdings ist zu beachten, dass…","However, it should be noted that…"),("Nicht außer Acht lassen darf man, dass…","One must not disregard that…"),("Vorausgesetzt, dass…","Provided that…"),
("Auch wenn…, so ist doch…","Even if…, still…"),("Selbst wenn… würde…","Even if… would…"),("Es lässt sich nicht leugnen, dass…","It cannot be denied that…")]
B22_scenes = [
("Herr Vogt","Frau López, hiermit teile ich Ihnen mit, dass die Präsentation auf morgen verschoben wird.","Ms. López, I hereby inform you that the presentation is postponed to tomorrow."),
("Mia","Verstehe. Ich bitte um die neuen Folien bis heute Abend, damit ich mich vorbereiten kann.","Understood. I request the new slides by this evening so I can prepare."),
("Herr Vogt","Selbstverständlich. Vielen Dank für Ihre Flexibilität.","Of course. Thank you for your flexibility."),
("Prof. Neumann","Laut Angaben der Regierung soll die Reform das Bildungssystem verbessern.","According to the government, the reform is supposed to improve the education system."),
("Mia","Aber Kritiker behaupten, dass sie im Gegenteil mehr Ungleichheit erzeugt.","But critics claim that it on the contrary creates more inequality."),
("Prof. Neumann","Das ist eine berechtigte Kritik. Allerdings ist zu beachten, dass die Wirkung erst langfristig sichtbar wird.","That's a justified criticism. However, it should be noted that the effect only becomes visible long-term."),
("Kommissar Berger","Der Fall ist klar: Der Dieb ist zwischen 22 und 23 Uhr eingebrochen.","The case is clear: The thief broke in between 10 and 11 pm."),
("Mia","Wie können Sie das so sicher sagen? Es gibt doch keinen Zeugen.","How can you be so sure? There's no witness, after all."),
("Kommissar Berger","Wir haben DNA-Spuren gefunden. Außerdem wurde das Opfer von jemandem gekannt, der Dieb also kein Fremder.","We found DNA traces. Besides, the victim was known by someone, so the thief wasn't a stranger."),
("Leila","Gestern war ich vor Gericht. Ich musste als Zeugin aussagen.","Yesterday I was in court. I had to testify as a witness."),
("Jonas","Spannend! Wie ist das Urteil ausgefallen?","Exciting! What was the verdict?"),
("Leila","Der Angeklagte wurde zu zwei Jahren Haft verurteilt. Obwohl er die Tat bestritt, gab es viele Beweise.","The defendant was sentenced to two years in prison. Although he denied the act, there was a lot of evidence."),
("Nadja","Wenn ich gewusst hätte, dass der Job so stressig ist, hätte ich die Stelle nicht angenommen.","If I had known that the job is so stressful, I wouldn't have accepted the position."),
("Tom","Hinterher ist man immer schlauer. Aber du kannst ja noch kündigen, falls es nicht besser wird.","Hindsight is always 20/20. But you can still quit if it doesn't get better."),
("Nadja","Vorausgesetzt, dass ich eine neue Stelle finde. Das ist in der Branche nicht einfach.","Provided that I find a new position. That's not easy in this industry."),
("Prof. Neumann","Fassen Sie die indirekte Rede zusammen: Was sagte der Minister genau?","Summarize the indirect speech: What exactly did the minister say?"),
("Mia","Er sagte, die Wirtschaft wachse, und die Arbeitslosigkeit sei gesunken.","He said the economy is growing and unemployment has fallen."),
("Prof. Neumann","Richtig. Und er fügte hinzu, man werde in Zukunft mehr in Bildung investieren.","Correct. And he added that one would invest more in education in the future."),
("Leila","Die neue Studie stellt alles in Frage, was wir über Schlaf zu wissen glaubten.","The new study calls into question everything we thought we knew about sleep."),
("Jonas","Wirklich? Darf ich danach fragen, welche Ergebnisse sie erzielt hat?","Really? May I ask what results it achieved?"),
("Leila","Die Forscher befassen sich seit Jahren mit dem Thema. Sie kamen zu dem Schluss, dass weniger Schlaf manchmal besser ist.","The researchers have dealt with the topic for years. They came to the conclusion that less sleep is sometimes better."),
("Herr Vogt","In der Verhandlung konnten wir einen besseren Preis erzielen. Der Vertrag wird morgen unterschrieben.","In the negotiation we achieved a better price. The contract will be signed tomorrow."),
("Mia","Herzlichen Glückwunsch! Das ist ein großer Erfolg. Wie haben Sie das geschafft?","Congratulations! That's a great success. How did you manage that?"),
("Herr Vogt","Wir haben ein Gegenangebot gemacht. Auch wenn es riskant war, hat es sich gelohnt.","We made a counteroffer. Even though it was risky, it was worth it."),
("Nadja","Gestern habe ich eine Reportage über die deutsche Wiedervereinigung gesehen.","Yesterday I watched a reportage about German reunification."),
("Tom","1989, der Mauerfall. Das muss ich mir auch ansehen. Die Geschichte Deutschlands ist faszinierend.","1989, the fall of the Wall. I must watch that too. German history is fascinating."),
("Nadja","Ja, besonders die Zeit danach. Es lässt sich nicht leugnen, dass die Wiedervereinigung auch Probleme brachte.","Yes, especially the time after. It cannot be denied that reunification also brought problems."),
("Prof. Neumann","Ihre Abschlussarbeit ist hervorragend. Sie analysieren die Quellen kritisch und leiten klare Schlussfolgerungen ab.","Your thesis is excellent. You analyze the sources critically and derive clear conclusions."),
("Mia","Vielen Dank! Das bedeutet mir viel. Ich habe versucht, beide Seiten fair darzustellen.","Thank you! That means a lot to me. I tried to present both sides fairly."),
("Prof. Neumann","Das ist Ihnen gelungen. Damit haben Sie das Niveau C1 fast erreicht.","You succeeded. With that you've almost reached C1 level.")]
B22_out = ["Schreibe eine formelle Email: Absage eines Termins mit Begründung.","Wiederhole eine Aussage in indirekter Rede (Konjunktiv I).","Bilde einen irrealen Satz in der Vergangenheit (Typ III).","Fasse eine (gedachte) Studie zusammen: Methode, Ergebnis, Kritik."]
gen_module("B2.2", 211, B22_topics, B22_titles, B22_goals, B22_grammar, B22_vocab, B22_chunks, B22_scenes, B22_out)

with open(path, 'w', encoding='utf-8') as f:
    f.write("/* Deutsch Jetzt! — days 31-240 (A1.2 → B2.2). Original content. */\n")
    f.write("/* Extend by appending more day objects (see docs/DESIGN.md). */\n")
    f.write("window.LESSONS_2 = " + json.dumps(OUT, ensure_ascii=False, indent=1) + ";\n")
print(f"Total days in lessons_2.js: {len(OUT)} (ids {OUT[0]['id']}–{OUT[-1]['id']})")
print(f"Vocab items: {sum(len(d['vocab']) for d in OUT)}, episode lines: {sum(len(d['episode']) for d in OUT)}")
