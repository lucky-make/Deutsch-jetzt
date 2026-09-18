#!/usr/bin/env python3
"""Generate data/lessons_2.js — days 31-240 (A1.2 → B2.2) for Deutsch Jetzt!
Original content. Deterministic (seeded by day id). Loaded alongside lessons.js (days 1-30)."""
import json, random

OUT = []
CHARS = ["Mia","Jonas","Leila","Frau Becker","Herr Vogt","Tom","Nadja","Prof. Neumann","Kommissar Berger"]

def example(v):
    if len(v) == 5: return v[4]
    de, en, art, typ = v
    if typ == "noun": return f"Das ist {art} {de}."
    if typ == "verb":
        stem = de[:-2] if de.endswith("en") else de
        return f"Wir {stem}en jeden Tag." if de.endswith("en") else f"Wir {de}."
    if typ == "adj": return f"Das ist sehr {de}."
    return f"{de}."

def vocab_list(pool, n, seed):
    rnd = random.Random(seed)
    items = rnd.sample(pool, min(n, len(pool)))
    out = []
    for i, v in enumerate(items, 1):
        de, en, art, typ = v[0], v[1], v[2], v[3]
        out.append({"id": f"d{{ID}}_v{i}", "de": de, "en": en, "article": art, "type": typ, "example": example(v)})
    return out

def chunks_list(pool, n, seed):
    rnd = random.Random(seed+7)
    return [{"de": c[0], "en": c[1]} for c in rnd.sample(pool, min(n, len(pool)))]

def episode(scene_pool, seed):
    rnd = random.Random(seed+13)
    lines = rnd.sample(scene_pool, min(7, len(scene_pool)))
    return [{"speaker": s, "de": d, "en": e, "audioFile": None} for s, d, e in lines]

def gen_module(code, start, topics, titles, goals, grammar, vocab_pool, chunk_pool, scene_pool, out_prompts):
    rnd = random.Random(start)
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

# ============================================================ A1.2 (31-60)
A12_topics = ["Tagesablauf","Tagesablauf","Büroalltag","Stress im Büro","Am Computer","Am Computer",
"Termine vereinbaren","Termine","Jahreszeiten","Wetter","Wetter","Reisevorbereitungen","Reisevorbereitungen",
"Verkehrsmittel","Verkehrsmittel","Wohnen & Möbel","Wohnen & Möbel","Haushalt","Gesundheit","Gesundheit",
"Entschuldigungen","Entschuldigungen","Wochenplan","Freizeit","Einkaufen","Küche","Post & Bank","Handy",
"Freunde treffen","Wiederholung A1.2"]
A12_titles = ["Mein Wochenplan","Der Wecker klingelt","Ein normaler Arbeitstag","Zu viel Arbeit!","Emails schreiben",
"Das Internet","Das Meeting verschieben","Zeit haben","Der Frühling kommt","Regen in Berlin","Ein schöner Herbsttag",
"Packen für die Reise","Am Flughafen","Mit dem Zug fahren","Eine Autofahrt","Die neue Couch","Meine Küche einrichten",
"Staubsaugen und putzen","Zum Arzt gehen","Medikamente nehmen","Zu spät kommen","Eine Entschuldigung schreiben",
"Der Wochenplan","Am Wochenende","Auf dem Markt","Kochen lernen","Auf die Post","Eine Nachricht schicken",
"Eine Party bei Mia","Alles zusammen!"]
A12_goals = ["Den Tagesablauf beschreiben und Uhrzeiten sagen.","Über Arbeit und Stress sprechen.","Computer und Internet benennen.","Einen Termin vereinbaren und absagen.","Über Wetter und Jahreszeiten sprechen.","Eine Reise vorbereiten und Verkehrsmittel wählen.","Die Wohnung einrichten und Haushalt beschreiben.","Über Gesundheit sprechen und sich entschuldigen."]
A12_grammar = [
("Präpositionen der Zeit: am, um, von…bis, vor, nach", "Zeitangaben: <b>am</b> Montag, <b>um</b> 8 Uhr, <b>von</b> 9 <b>bis</b> 17 Uhr, <b>vor</b> dem Essen, <b>nach</b> der Arbeit.", ["Am Montag arbeite ich.","Ich stehe um 7 Uhr auf.","Von 9 bis 17 Uhr bin ich im Büro."]),
("Konjunktionen: und, aber, oder, denn", "Hauptsatzverbindungen: <b>und</b> (and), <b>aber</b> (but), <b>oder</b> (or), <b>denn</b> (because — main clause word order after).", ["Ich arbeite viel, aber ich bin glücklich.","Nimmst du den Zug oder das Auto?","Ich bleibe zu Hause, denn ich bin krank."]),
("Adjektive (Grundform) nach sein/werden", "Adjektive nach <b>sein</b> enden nicht: <b>Das Haus ist groß.</b> Steigerung: größer, am größten.", ["Die Wohnung ist klein aber hell.","Er wird müde.","Das Wetter ist schön."]),
("Werden + Adjektiv", "<b>werden</b> (become): ich werde, du wirst, er wird. Drückt Veränderung aus.", ["Es wird kalt.","Ich werde müde.","Die Tage werden kürzer."]),
("Präpositionen mit Dativ: aus, bei, mit, nach, seit, von, zu", "Diese Präpositionen verlangen immer den Dativ. Merke sie als Chunks: <b>mit dem Zug</b>, <b>zu Hause</b>, <b>bei mir</b>.", ["Ich fahre mit dem Bus.","Ich wohne bei meinen Eltern.","Nach der Arbeit gehe ich nach Hause."]),
("Trennbare Verben im Alltag", "Präfix geht ans Ende: <b>aufstehen</b> → ich stehe auf, <b>anrufen</b> → ich rufe an, <b>einkaufen</b> → ich kaufe ein.", ["Ich stehe um 7 auf.","Ruf mich später an!","Wir kaufen um 5 ein."]),
("Modalverben: müssen, wollen, können (Präsens)", "Modalverb + Infinitiv am Ende: <b>ich muss arbeiten</b>. Konjugation: ich muss, du musst, er muss; ich kann, du kannst, er kann.", ["Ich muss zum Arzt.","Kannst du mir helfen?","Wir wollen ins Kino."]),
("Possessivartikel im Akkusativ", "meinen/deinen/meine/deine + Akkusativobjekt: <b>Ich sehe meinen Bruder.</b>", ["Ich rufe meinen Freund an.","Du liest deine Zeitung.","Wir besuchen unsere Tante."]),
("Adjektive vor Nomen (schwach: nach dem/der/dem)", "Nach dem bestimmten Artikel endet das Adjektiv auf -e (Singular) bzw. -en (Plural): <b>der große Mann</b>, <b>die kleine Frau</b>.", ["Der schwarze Kaffee ist heiß.","Ich wohne in der neuen Wohnung.","Die alten Bücher sind interessant."]),
("Fragen mit wann, wie lange, wie oft", "<b>Wann?</b> (when), <b>Wie lange?</b> (how long), <b>Wie oft?</b> (how often). Antwort mit Zeitangaben.", ["Wann fährst du weg?","Wie lange bleibst du?","Wie oft gehst du ins Kino?"]),
]
A12_vocab = [
("der Wecker","alarm clock","der","noun"),("die Uhr","clock/watch","die","noun"),("der Termin","appointment","der","noun"),
("die Besprechung","meeting","die","noun"),("die Deadline","deadline","die","noun"),("der Stress","stress","der","noun"),
("die E-Mail","email","die","noun"),("das Internet","internet","das","noun"),("die Website","website","die","noun"),
("das Passwort","password","das","noun"),("der Termin","appointment","der","noun"),("absagen","to cancel","","verb"),
("verschieben","to postpone","","verb"),("die Jahreszeit","season","die","noun"),("der Frühling","spring","der","noun"),
("der Sommer","summer","der","noun"),("der Herbst","autumn","der","noun"),("der Winter","winter","der","noun"),
("der Regen","rain","der","noun"),("der Schnee","snow","der","noun"),("der Wind","wind","der","noun"),
("die Sonne","sun","die","noun"),("warm","warm","","adj"),("kalt","cold","","adj"),
("kühl","cool","","adj"),("der Koffer","suitcase","der","noun"),("packen","to pack","","verb"),
("der Flug","flight","der","noun"),("der Flughafen","airport","der","noun"),("der Zug","train","der","noun"),
("das Ticket","ticket","das","noun"),("die Fahrkarte","ticket","die","noun"),("die Haltestelle","stop","die","noun"),
("umsteigen","to change (trains)","","verb"),("die Couch","couch","die","noun"),("der Schrank","wardrobe","der","noun"),
("der Tisch","table","der","noun"),("der Stuhl","chair","der","noun"),("die Lampe","lamp","die","noun"),
("der Teppich","carpet","der","noun"),("die Küche","kitchen","die","noun"),("das Bad","bathroom","das","noun"),
("putzen","to clean","","verb"),("staubsaugen","to vacuum","","verb"),("waschen","to wash","","verb"),
("die Waschmaschine","washing machine","die","noun"),("der Arzt","doctor","der","noun"),("das Medikament","medicine","das","noun"),
("die Apotheke","pharmacy","die","noun"),("das Rezept","prescription","das","noun"),("die Krankheit","illness","die","noun"),
("sich erholen","to recover","","verb"),("die Entschuldigung","apology","die","noun"),("sich entschuldigen","to apologize","","verb"),
("der Wochenplan","weekly plan","der","noun"),("der Markt","market","der","noun"),("kochen","to cook","","verb"),
("das Rezept","recipe","das","noun"),("die Post","post office","die","noun"),("der Brief","letter","der","noun"),
("die Nachricht","message","die","noun"),("die Party","party","die","noun"),("einladen","to invite","","verb"),
("mitbringen","to bring along","","verb"),("spät","late","","adj"),("früh","early","","adj"),
("pünktlich","on time","","adj"),("die Verspätung","delay","die","noun"),("warten","to wait","","verb"),
("der Feierabend","end of work","der","noun"),("die Mittagspause","lunch break","die","noun"),("der Kollege","colleague","der","noun"),
("die Chefin","boss (fem)","die","noun"),("besprechen","to discuss","","verb"),("berichten","to report","","verb"),
("erklären","to explain","","verb"),("zeigen","to show","","verb"),("helfen","to help","","verb","Kannst du mir helfen?"),
]
A12_chunks = [("Ich muss …","I have to …"),("Kannst du mir helfen?","Can you help me?"),("Wie lange dauert das?","How long does it take?"),
("Von … bis …","From … to …"),("Ich habe keine Zeit.","I have no time."),("Das verschieben wir.","We'll postpone that."),
("Ich rufe dich zurück.","I'll call you back."),("Wie viel kostet …?","How much is …?"),("Ich nehme …","I'll take …"),
("Bis später!","See you later!"),("Das geht leider nicht.","That won't work, unfortunately."),("Ich habe mich verspätet.","I'm late."),
("Entschuldigung!","Sorry!"),("Kein Problem.","No problem."),("Ich bin gleich wieder da.","I'll be right back.")]
A12_scenes = [
("Mia","Guten Morgen! Wie war dein Wochenende?","Good morning! How was your weekend?"),
("Jonas","Gut! Ich bin mit dem Fahrrad zum See gefahren.","Good! I rode my bike to the lake."),
("Mia","Das klingt schön. Ich musste arbeiten — zu viel Stress.","That sounds nice. I had to work — too much stress."),
("Jonas","Arbeitest du auch am Wochenende? Das ist ungesund.","You work on weekends too? That's unhealthy."),
("Mia","Ja, aber nächste Woche mache ich Urlaub. Ich packe schon den Koffer.","Yes, but next week I'm going on holiday. I'm already packing the suitcase."),
("Jonas","Wohin fährst du? Mit dem Zug oder dem Flugzeug?","Where are you going? By train or plane?"),
("Mia","Ich fliege nach Italien. Von Berlin bis Rom dauert es zwei Stunden.","I'm flying to Italy. From Berlin to Rome takes two hours."),
("Leila","Kannst du mir morgen helfen? Ich muss umziehen.","Can you help me tomorrow? I have to move house."),
("Mia","Natürlich! Um wie viel Uhr soll ich kommen?","Of course! What time should I come?"),
("Leila","Um 10 Uhr. Wir tragen die Möbel: Couch, Schrank, Tisch und Stühle.","At 10. We carry the furniture: couch, wardrobe, table and chairs."),
("Mia","Danach kochen wir etwas und trinken einen Kaffee.","Afterwards we'll cook something and drink coffee."),
("Leila","Perfekt! Ich bringe das Rezept für meine berühmte Pasta mit.","Perfect! I'll bring the recipe for my famous pasta."),
("Frau Becker","Entschuldigung, dass ich zu spät komme — der Bus hatte Verspätung.","Sorry I'm late — the bus was delayed."),
("Mia","Kein Problem. Nehmen Sie Platz. Möchten Sie einen Kaffee?","No problem. Have a seat. Would you like a coffee?"),
("Frau Becker","Ja, danke. Ich muss mit Ihnen über die Heizung sprechen.","Yes, thanks. I need to talk to you about the heating."),
("Mia","Sie ist kaputt? Ich habe schon dreimal angerufen.","It's broken? I've already called three times."),
("Herr Vogt","Die Besprechung verschieben wir auf morgen.","We're postponing the meeting to tomorrow."),
("Leila","Gut, dann habe ich mehr Zeit für die Emails.","Good, then I have more time for the emails."),
("Herr Vogt","Schicken Sie mir die Datei bis 15 Uhr.","Send me the file by 3pm."),
("Tom","Das Passwort funktioniert nicht. Kannst du es zurücksetzen?","The password doesn't work. Can you reset it?"),
("Mia","Klar. Ich schicke dir eine Nachricht mit dem neuen Code.","Sure. I'll send you a message with the new code."),
("Tom","Danke! Oh, und das Internet ist auch langsam heute.","Thanks! Oh, and the internet is slow today too."),
("Nadja","Wie ist das Wetter heute? Soll ich einen Regenschirm mitnehmen?","How's the weather today? Should I bring an umbrella?"),
("Jonas","Nein, die Sonne scheint. Es wird warm — bis 25 Grad.","No, the sun is shining. It'll be warm — up to 25 degrees."),
("Nadja","Super! Dann gehen wir nach der Arbeit in den Park.","Great! Then after work we'll go to the park."),
("Mia","Ich bin krank. Ich habe Kopfschmerzen und Fieber.","I'm sick. I have a headache and fever."),
("Leila","Geh zum Arzt! Ich gebe dir die Adresse von meiner Ärztin.","Go to the doctor! I'll give you my doctor's address."),
("Mia","Danke. Ich hole mir ein Medikament in der Apotheke.","Thanks. I'll get some medicine at the pharmacy."),
("Jonas","Wann kommst du zurück? Wir haben am Freitag eine Party.","When are you back? We have a party on Friday."),
("Mia","Am Donnerstag. Ich bringe italienischen Wein mit.","Thursday. I'll bring Italian wine."),
]
A12_out = ["Beschreibe deinen Tagesablauf von heute mit Uhrzeiten.","Erkläre, wie du zur Arbeit/Schule kommst (Verkehrsmittel, Dauer).","Plane eine Reise: Ziel, Verkehrsmittel, Gepäck.","Beschwere dich höflich über ein Problem und entschuldige dich für etwas."]
gen_module("A1.2", 31, A12_topics, A12_titles, A12_goals, A12_grammar, A12_vocab, A12_chunks, A12_scenes, A12_out)

# ============================================================ A2.1 (61-90)
A21_topics = ["Vorstellung wiederholen","Berufe & Tätigkeiten","Von der Vergangenheit","Kindheit","Schule & Ausbildung",
"Lebenslauf","Bewerbung","Tagesablauf","Freizeit & Geld","Geld ausgeben","Träume vom Reichtum","Was wäre wenn?",
"Im Büro telefonieren","Termine machen","Auf der Bank","Im Supermarkt","Kleidung kaufen","Im Café",
"Freunde & Familie","Hobbys","Sport","Musik & Konzerte","Reise erzählen","Ein Unfall","Ein Interview",
"Mein erster Job","Wohnungssuche","Auf einer Party","Smalltalk","Wiederholung A2.1"]
A21_titles = ["Wer bin ich?","Mein Beruf","Damals, als ich klein war","Kindheitserinnerungen","In der Schule",
"Mein Lebenslauf","Die Bewerbung","Ein typischer Tag","Geld und Freizeit","Shoppen gehen","Der Lottogewinn",
"Wenn ich reich wäre…","Klingeling!","Ein wichtiger Termin","Auf der Bank","Einkaufstour","Neue Kleidung",
"Im Café","Familienbesuch","Meine Hobbys","Im Fitnessstudio","Das Konzert","Meine letzte Reise","Ein kleiner Unfall",
"Das Vorstellungsgespräch","Der erste Tag","Wohnung suchen","Auf der Geburtstagsparty","Ins Gespräch kommen","Alles zusammen!"]
A21_goals = ["Von der Vergangenheit erzählen (Perfekt).","Einen Lebenslauf und eine Bewerbung verstehen.","Über Geld, Träume und Wünsche sprechen (Konjunktiv II).","Telefonieren und Termine machen.","Einkäufe beschreiben und Smalltalk führen."]
A21_grammar = [
("Perfekt mit haben und sein", "Das Perfekt: <b>haben/sein</b> + Partizip II. Die meisten Verben mit <b>haben</b>; Bewegungsverben (gehen, fahren, kommen) und sein/bleiben mit <b>sein</b>. Partizip II: regular = ge- + stem + -t (gemacht); irregular = gelernt, gegangen, gewesen.", ["Ich habe gearbeitet.","Wir sind nach Italien gefahren.","Sie hat einen Brief geschrieben."]),
("Partizip II: unregelmäßige Verben", "Wichtige unregelmäßige Partizipien: sein→gewesen, haben→gehabt, gehen→gegangen, kommen→gekommen, essen→gegessen, trinken→getrunken, sehen→gesehen, sprechen→gesprochen, schlafen→geschlafen.", ["Ich bin ins Kino gegangen.","Hast du schon gegessen?","Wir haben viel gesprochen."]),
("Haupt- und Nebensätze: dass, weil, wenn", "Nebensätze mit <b>dass/weil/wenn</b>: das Verb steht am Ende. <b>Ich weiß, dass er kommt.</b> Hauptsatz danach beginnt mit dem Verb: <b>Weil ich krank bin, bleibe ich zu Hause.</b>", ["Ich denke, dass das richtig ist.","Weil es regnet, nehme ich einen Schirm.","Wenn ich Zeit habe, rufe ich dich an."]),
("Verben mit Dativ (helfen, danken, gefallen, gehören)", "Diese Verben nehmen ein Dativobjekt (keinen Akkusativ): <b>Ich helfe dem Mann.</b> <b>Das Buch gehört mir.</b> <b>Mir gefällt Berlin.</b>", ["Kannst du mir helfen?","Ich danke dir für die Hilfe.","Mir gefällt das neue Auto."]),
("Verben mit Dativ + Akkusativ (geben, schicken, zeigen, erzählen)", "Person = Dativ, Sache = Akkusativ: <b>Ich gebe dem Mann (Dat) das Buch (Akk).</b> Reihenfolge: zuerst Person, dann Sache.", ["Sie schickt mir eine E-Mail.","Zeig mir das Foto!","Er erzählt uns eine Geschichte."]),
("Konjunktiv II (möchte, würde, hätte, wäre) — Wünsche", "Höfliche Wünsche und Irrealität: <b>ich hätte</b> (I would have), <b>ich wäre</b> (I would be), <b>ich würde + Infinitiv</b>. <b>Wenn ich reich wäre, würde ich ein Haus kaufen.</b>", ["Ich hätte gern ein Wasser.","Wenn ich mehr Zeit hätte, würde ich reisen.","Ich wäre lieber zu Hause."]),
("Genus & Plural wiederholen", "Substantive haben ein festes Genus (der/die/das) und einen Plural. Lerne Substantive immer mit Artikel und Plural: der Koffer, die Koffer.", ["Der Mann — die Männer","Die Frau — die Frauen","Das Kind — die Kinder"]),
("Adjektivdeklination nach ein/kein/mein", "Nach ein-/kein-/mein- endet das Adjektiv im Nominativ: maskulin -er, feminin -e, neutrum -es: <b>ein neuer Wagen</b>, <b>eine neue Wohnung</b>, <b>ein neues Auto</b>.", ["Ich habe einen neuen Job.","Das ist keine gute Idee.","Meine alte Schule ist geschlossen."]),
("Präteritum von sein und haben (war, hatte)", "In Erzählungen oft Präteritum: <b>sein</b> → ich war, du warst, er war; <b>haben</b> → ich hatte, du hattest, er hatte.", ["Ich war gestern im Kino.","Wir hatten viel Spaß.","Es war eine schöne Zeit."]),
("Relativsätze (der, die, das, wo)", "Relativsatz mit Artikelwort als Relativpronomen, Verb am Ende: <b>Der Mann, der dort steht, ist mein Lehrer.</b> Für Orte: <b>die Stadt, wo ich wohne</b>.", ["Das Buch, das ich lese, ist spannend.","Die Frau, die dort sitzt, heißt Anna.","Berlin ist die Stadt, wo ich wohne."]),
]
A21_vocab = [
("die Vergangenheit","past","die","noun"),("die Kindheit","childhood","die","noun"),("die Schule","school","die","noun"),
("die Ausbildung","training/vocational education","die","noun"),("der Lebenslauf","CV/résumé","der","noun"),("die Bewerbung","application","die","noun"),
("das Vorstellungsgespräch","job interview","das","noun"),("der Beruf","profession","der","noun"),("die Tätigkeit","activity","die","noun"),
("das Geld","money","das","noun"),("der Euro","euro","der","noun"),("sparen","to save (money)","","verb"),
("ausgeben","to spend","","verb"),("der Lottogewinn","lottery win","der","noun"),("reich","rich","","adj"),
("arm","poor","","adj"),("der Traum","dream","der","noun"),("wünschen","to wish","","verb"),
("das Telefon","telephone","das","noun"),("anrufen","to call","","verb"),("zurückrufen","to call back","","verb"),
("die Bank","bank","die","noun"),("das Konto","account","das","noun"),("der Betrag","amount","der","noun"),
("überweisen","to transfer (money)","","verb"),("abheben","to withdraw","","verb"),("die Kleidung","clothes","die","noun"),
("die Hose","trousers","die","noun"),("das Hemd","shirt","das","noun"),("die Jacke","jacket","die","noun"),
("die Schuhe (pl.)","shoes","die","noun"),("anprobieren","to try on","","verb"),("das Café","café","das","noun"),
("der Kuchen","cake","der","noun"),("der Sport","sport","der","noun"),("das Fitnessstudio","gym","das","noun"),
("das Konzert","concert","das","noun"),("die Musik","music","die","noun"),("die Reise","trip","die","noun"),
("der Unfall","accident","der","noun"),("passieren","to happen","","verb","Mir ist etwas passiert."),("das Interview","interview","das","noun"),
("die Wohnungssuche","apartment hunt","die","noun"),("der Mietvertrag","lease","der","noun"),("die Kaution","deposit","die","noun"),
("die Party","party","die","noun"),("der Smalltalk","small talk","der","noun"),("erzählen","to tell/narrate","","verb","Er erzählt eine Geschichte."),
("erklären","to explain","","verb"),("erleben","to experience","","verb"),("besichtigen","to visit (sight)","","verb"),
("bestehen","to pass (exam)","","verb","Ich habe die Prüfung bestanden."),("lernen","to learn","","verb"),("studieren","to study (univ.)","","verb"),
("abschließen","to complete/graduate","","verb"),("der Abschluss","degree/graduation","der","noun"),("die Note","grade","die","noun"),
("die Prüfung","exam","die","noun"),("die Zertifikat","certificate","das","noun"),("der Gehalt","salary","der","noun"),
("verdienen","to earn","","verb"),("kosten","to cost","","verb"),("teuer","expensive","","adj"),
("billig","cheap","","adj"),("bezahlen","to pay","","verb"),("die Rechnung","bill/invoice","die","noun"),
("die Quittung","receipt","die","noun"),("der Kunde","customer","der","noun"),("verkaufen","to sell","","verb"),
("der Laden","shop","der","noun"),("öffnen","to open","","verb"),("schließen","to close","","verb"),
("der Termin","appointment","der","noun"),("vereinbaren","to arrange","","verb"),("absagen","to cancel","","verb"),
]
A21_chunks = [("Als ich klein war,…","When I was little,…"),("Ich habe … gemacht.","I did …"),("Wir sind … gefahren.","We traveled to …"),
("Wenn ich reich wäre,…","If I were rich,…"),("Ich hätte gern …","I'd like …"),("Kann ich … anprobieren?","Can I try on …?"),
("Wie viel kostet das?","How much is that?"),("Ich rufe Sie zurück.","I'll call you back."),("Können Sie mir … überweisen?","Can you transfer … to me?"),
("Mir gefällt …","I like …"),("Können Sie mir helfen?","Can you help me?"),("Ich erzähle Ihnen von …","I'll tell you about …"),
("Das ist mir zu teuer.","That's too expensive for me."),("Ich nehme es.","I'll take it."),("Stimmt so.","Keep the change.")]
A21_scenes = [
("Mia","Gestern habe ich meine alte Schulfreundin getroffen.","Yesterday I met my old school friend."),
("Leila","Wirklich? Wo habt ihr euch getroffen?","Really? Where did you meet?"),
("Mia","Im Café am Markt. Wir haben drei Stunden geredet.","At the café at the market. We talked for three hours."),
("Leila","Wovon habt ihr gesprochen? Von der Kindheit?","What did you talk about? Childhood?"),
("Mia","Ja! Wir haben über die Schule erzählt und über unsere ersten Jobs.","Yes! We talked about school and our first jobs."),
("Leila","Schön! Ich habe gestern meinen Lebenslauf fertiggeschrieben.","Nice! Yesterday I finished my CV."),
("Mia","Bewirbst du dich um eine neue Stelle?","Are you applying for a new position?"),
("Leila","Ja, bei einer großen Firma. Ich habe schon eine Einladung zum Vorstellungsgespräch.","Yes, at a big company. I already got an interview invitation."),
("Mia","Aufregend! Was verdienst du dort?","Exciting! What would you earn there?"),
("Leila","Mehr als jetzt. Wenn ich die Stelle kriege, mache ich eine große Reise.","More than now. If I get the job, I'll take a big trip."),
("Jonas","Wenn ich reich wäre, würde ich mir ein Haus am Meer kaufen.","If I were rich, I'd buy a house by the sea."),
("Mia","Ich würde eine Weltreise machen und viele Sprachen lernen.","I'd travel the world and learn many languages."),
("Jonas","Hast du eigentlich Lotto gespielt? Gestern war die Ziehung.","Did you play the lottery? Yesterday was the draw."),
("Mia","Nein, ich spare mein Geld lieber für die Miete.","No, I'd rather save my money for rent."),
("Herr Vogt","Frau López, ich habe gestern versucht, Sie anzurufen.","Ms. López, I tried to call you yesterday."),
("Mia","Oh, entschuldigung! Mein Handy war aus. Ich rufe Sie sofort zurück.","Oh, sorry! My phone was off. I'll call you right back."),
("Herr Vogt","Kein Problem. Können Sie mir die Datei per E-Mail schicken?","No problem. Can you send me the file by email?"),
("Tom","Ich war gestern auf der Bank. Ich musste Geld abheben.","I was at the bank yesterday. I had to withdraw money."),
("Nadja","Hast du die neue Jacke gesehen? Sie kostet nur 50 Euro.","Did you see the new jacket? It only costs 50 euros."),
("Tom","Kann ich sie anprobieren? — Nein, das ist mir zu teuer.","Can I try it on? — No, that's too expensive for me."),
("Frau Becker","Ich habe Ihre Bewerbung erhalten. Wann können Sie anfangen?","I received your application. When can you start?"),
("Mia","In zwei Wochen. Ich habe meinen alten Job schon gekündigt.","In two weeks. I already quit my old job."),
("Frau Becker","Sehr gut. Der Mietvertrag liegt für Sie bereit.","Very good. The lease is ready for you."),
("Jonas","Gestern ist mir ein Unfall passiert — mit dem Fahrrad.","Yesterday I had an accident — with my bike."),
("Leila","Oh nein! Bist du verletzt worden?","Oh no! Did you get hurt?"),
("Jonas","Nein, zum Glück nicht. Aber das Fahrrad ist kaputt.","No, luckily not. But the bike is broken."),
("Mia","Auf der Party habe ich viele nette Leute kennengelernt.","At the party I met many nice people."),
("Nadja","Hast du Smalltalk gemacht? Über das Wetter?","Did you make small talk? About the weather?"),
("Mia","Ja, und über Musik. Wir haben über das Konzert am Wochenende geredet.","Yes, and about music. We talked about the concert on the weekend."),
("Leila","Ich habe das Konzert auch besucht. Es war toll!","I went to the concert too. It was great!"),
]
A21_out = ["Erzähle von deiner Kindheit (3 Sätze im Perfekt).","Beschreibe deinen Traumjob und was du verdienen möchtest.","Wenn du reich wärst — was würdest du tun? (Konjunktiv II)","Führe ein Telefonat: vereinbare einen Termin."]
gen_module("A2.1", 61, A21_topics, A21_titles, A21_goals, A21_grammar, A21_vocab, A21_chunks, A21_scenes, A21_out)

# ============================================================ A2.2 (91-120)
A22_topics = ["Urlaub","Urlaubsziele","Länder & Nationalitäten","Reise planen","Tiere","Gefährliche Tiere",
"Menschen beschreiben","Charakter","Wohnen in der Stadt","Wohnen auf dem Land","Garten","Gesunde Ernährung",
"Ernährung & Diät","Nachrichten","Internationale Nachrichten","Umwelt","Umweltschutz","Technik",
"Smartphone & Co","Im Internet","Soziale Medien","Neue Geräte","Kochen & Rezepte","Sport & Fitness",
"Feste & Feiertage","Geschenke","Besuch","Wegbeschreibung","Notfall","Wiederholung A2.2"]
A22_titles = ["Endlich Urlaub!","Wohin fährst du?","Andere Länder, andere Sitten","Die Reise planen","Im Zoo",
"Achtung, gefährlich!","Menschen kennenlernen","Charaktereigenschaften","Das Stadtleben","Auf dem Land",
"Mein Garten","Gesund essen","Diät-Trends","In den Nachrichten","Weltnachrichten","Der Klimawandel",
"Umwelt schützen","Neue Technik","Mein Smartphone","Online unterwegs","Social Media","Das neue Gadget",
"Ein Rezept kochen","Im Fitnessstudio","Weihnachten & Co","Geschenke kaufen","Besuch aus der Heimat",
"Den Weg finden","Ein Notfall","Alles zusammen!"]
A22_goals = ["Über Reisen, Länder und Nationalitäten sprechen.","Menschen und Tiere beschreiben.","Über Ernährung, Umwelt und Technik diskutieren.","Eine Reise planen und über Nachrichten reden."]
A22_grammar = [
("Perfekt: sein/haben + Trennbare Verben", "Trennbare Verben im Perfekt: <b>Ich habe eingekauft.</b> (Partizip II = ge + Präfix + Stamm + t). Mit sein: <b>Wir sind angekommen.</b>", ["Wir sind in Berlin angekommen.","Ich habe dich angerufen.","Hast du schon eingekauft?"]),
("Adjektivdeklination (alle Fälle, nach dem)", "Nach dem bestimmten Artikel: Nom. -e/-e/-e, Akk. -en/-e/-e, Dat. -en/-en/-en, Gen. -en/-en/-en. <b>Der gute Mann, ich sehe den guten Mann.</b>", ["Das alte Haus steht am Fluss.","Ich wohne in der großen Stadt.","Er gibt dem kleinen Kind ein Eis."]),
("Verben + Präpositionen (warten auf, träumen von, denken an)", "Viele Verben brauchen eine feste Präposition: <b>warten auf</b> + Akk, <b>träumen von</b> + Dat, <b>denken an</b> + Akk. Lerne sie als Chunks.", ["Ich warte auf den Bus.","Ich träume von einer Reise.","Denk an mich!"]),
("Präpositionen mit Wechsel (in, an, auf, über, unter, vor, hinter, neben, zwischen)", "Wechselpräpositionen: Wo? (Dativ) → Wohin? (Akkusativ). <b>Ich bin in der Küche.</b> (Dat) vs. <b>Ich gehe in die Küche.</b> (Akk).", ["Das Bild hängt an der Wand.","Ich hänge das Bild an die Wand.","Wir sitzen zwischen den Bäumen."]),
("Komparation von Adjektiven", "Komparativ: +-er (schneller); Superlativ: am + -sten (am schnellsten). Unregelmäßig: gut→besser→am besten, viel→mehr→am meisten, gern→lieber→am liebsten.", ["Mein Auto ist schneller als deins.","Das ist am besten.","Ich arbeite mehr als du."]),
("Nomen + Präpositionen (Angst vor, Interesse an, Lust auf)", "Substantive mit festen Präpositionen: <b>Angst vor</b> + Dat, <b>Interesse an</b> + Dat, <b>Lust auf</b> + Akk.", ["Ich habe Angst vor Spinnen.","Hast du Interesse an Kunst?","Ich habe Lust auf Pizza."]),
("Präteritum (reguläre Verben)", "Erzählform: Präteritum = Stamm + -te/-test/-ten/-tet. <b>Ich arbeitete, du arbeitetest, er arbeitete.</b> Besonders in Schriftsprache.", ["Gestern arbeitete ich bis 18 Uhr.","Wir wohnten in Hamburg.","Sie spielte Klavier."]),
("Genitiv (Präpositionen: wegen, während, trotz)", "Genitiv zeigt Besitz: <b>das Auto meines Vaters</b>. Präpositionen mit Genitiv: <b>wegen</b> (because of), <b>während</b> (during), <b>trotz</b> (despite).", ["Wegen des Regens bleiben wir zu Hause.","Während der Pause esse ich.","Trotz der Kälte gehen wir raus."]),
("Reflexive Verben (sich freuen, sich interessieren, sich erinnern)", "Reflexivpronomen mich/dich/sich/uns/euch. <b>Ich freue mich auf die Party.</b> <b>Ich interessiere mich für Musik.</b> + Präpositionen fest lernen.", ["Ich interessiere mich für Politik.","Erinnern Sie sich an mich?","Wir freuen uns auf Sie."]),
("Relativsätze mit Präpositionen", "Steht das Relativpronomen nach einer Präposition, steht die Präposition davor: <b>Der Mann, mit dem ich gesprochen habe.</b> <b>Das Buch, von dem ich erzähle.</b>", ["Die Stadt, in der ich wohne, ist Berlin.","Der Freund, mit dem ich reise, heißt Tom.","Das Problem, über das wir reden, ist wichtig."]),
]
A22_vocab = [
("der Urlaub","holiday/vacation","der","noun"),("das Reiseziel","destination","das","noun"),("die Nationalität","nationality","die","noun"),
("der Reiseführer","guidebook","der","noun"),("die Buchung","booking","die","noun"),("reservieren","to reserve","","verb"),
("das Tier","animal","das","noun"),("gefährlich","dangerous","","adj"),("harmlos","harmless","","adj"),
("der Charakter","character","der","noun"),("freundlich","friendly","","adj"),("frech","cheeky","","adj"),
("ruhig","calm/quiet","","adj"),("aufgeregt","excited","","adj"),("die Stadt","city","die","noun"),
("das Land","countryside/country","das","noun"),("der Garten","garden","der","noun"),("die Blume","flower","die","noun"),
("der Baum","tree","der","noun"),("die Ernährung","nutrition/diet","die","noun"),("gesund","healthy","","adj"),
("ungesund","unhealthy","","adj"),("das Gemüse","vegetables","das","noun"),("das Obst","fruit","das","noun"),
("die Nachricht","news/message","die","noun"),("international","international","","adj"),("die Umwelt","environment","die","noun"),
("der Umweltschutz","environmental protection","der","noun"),("der Müll","trash/garbage","der","noun"),("recyceln","to recycle","","verb"),
("der Klimawandel","climate change","der","noun"),("die Technik","technology","die","noun"),("das Smartphone","smartphone","das","noun"),
("das Internet","internet","das","noun"),("sozial","social","","adj"),("die Medien (pl.)","media","die","noun"),
("das Gerät","device","das","noun"),("das Rezept","recipe","das","noun"),("kochen","to cook","","verb"),
("der Sport","sport","der","noun"),("fit","fit","","adj"),("das Fest","celebration/holiday","das","noun"),
("das Geschenk","gift","das","noun"),("besuchen","to visit","","verb"),("der Notfall","emergency","der","noun"),
("die Polizei","police","die","noun"),("der Krankenwagen","ambulance","der","noun"),("passieren","to happen","","verb"),
("entspannen","to relax","","verb","Ich entspanne mich am Wochenende."),("genießen","to enjoy","","verb"),("entdecken","to discover","","verb"),
("erleben","to experience","","verb"),("die Kultur","culture","die","noun"),("die Sehenswürdigkeit","sight/landmark","die","noun"),
("der Strand","beach","der","noun"),("das Gebirge","mountains","das","noun"),("das Meer","sea","das","noun"),
("der Wald","forest","der","noun"),("die Wüste","desert","die","noun"),("der Vulkan","volcano","der","noun"),
("der Fluss","river","der","noun"),("der See","lake","der","noun"),("die Insel","island","die","noun"),
("die Hauptstadt","capital","die","noun"),("die Grenze","border","die","noun"),("der Pass","passport","der","noun"),
("das Visum","visa","das","noun"),("die Versicherung","insurance","die","noun"),("impfen","to vaccinate","","verb"),
("der Koffer","suitcase","der","noun"),("der Rucksack","backpack","der","noun"),("die Reisegruppe","tour group","die","noun"),
("der Reiseführer","tour guide","der","noun"),("das Souvenir","souvenir","das","noun"),("die Postkarte","postcard","die","noun"),
]
A22_chunks = [("Ich habe Lust auf …","I feel like …"),("Ich interessiere mich für …","I'm interested in …"),("Ich habe Angst vor …","I'm afraid of …"),
("Wegen … muss ich …","Because of … I have to …"),("Trotz … gehen wir …","Despite … we go …"),("Während …","While/during …"),
("Ich freue mich auf …","I'm looking forward to …"),("Erinnerst du dich an …?","Do you remember …?"),("Das ist mir zu …","That's too … for me."),
("Je mehr, desto besser.","The more, the better."),("Stimmt das?","Is that true?"),("Darüber habe ich noch nie nachgedacht.","I've never thought about that."),
("Ich bin anderer Meinung.","I disagree."),("Da hast du recht.","You're right there."),("Lass uns …","Let's …")]
A22_scenes = [
("Mia","Nächste Woche mache ich Urlaub. Ich fahre nach Griechenland, auf eine Insel.","Next week I'm going on holiday. I'm going to Greece, to an island."),
("Jonas","Wow! Ich träume schon lange von einer Reise nach Asien.","Wow! I've long dreamed of a trip to Asia."),
("Mia","Wohin genau? Nach Japan oder Thailand?","Where exactly? To Japan or Thailand?"),
("Jonas","Nach Japan. Ich interessiere mich für die Kultur und das Essen.","To Japan. I'm interested in the culture and the food."),
("Mia","Ich auch! Aber zuerst muss ich sparen. Reisen ist teuer.","Me too! But first I have to save. Traveling is expensive."),
("Leila","Gestern habe ich im Fernsehen eine Reportage über den Klimawandel gesehen.","Yesterday I saw a documentary about climate change on TV."),
("Nadja","Ich auch! Es ist erschreckend. Wegen der Erderwärmung schmilzt das Eis.","Me too! It's shocking. Because of global warming the ice is melting."),
("Leila","Trotzdem werfen viele Leute ihren Müll nicht in die Mülltonne.","Still, many people don't throw their trash in the bin."),
("Nadja","Ich versuche, mehr zu recyceln und weniger Fleisch zu essen.","I try to recycle more and eat less meat."),
("Mia","Gesunde Ernährung ist wichtig. Ich esse viel Gemüse und Obst.","Healthy nutrition is important. I eat lots of vegetables and fruit."),
("Tom","Ich auch. Aber ich habe manchmal Lust auf Pizza oder Burger.","Me too. But sometimes I feel like pizza or burgers."),
("Mia","Ab und zu ist das okay. Die Balance ist wichtig.","Once in a while that's okay. Balance is important."),
("Jonas","Hast du Angst vor Tieren? Vor Spinnen oder Schlangen?","Are you afraid of animals? Of spiders or snakes?"),
("Nadja","Ja, vor Spinnen habe ich große Angst. Aber vor Hunden nicht.","Yes, I'm very afraid of spiders. But not of dogs."),
("Jonas","Ich finde Tiere faszinierend. Letztes Wochenende war ich im Zoo.","I find animals fascinating. Last weekend I was at the zoo."),
("Frau Becker","Sie wohnen jetzt seit einem Monat hier. Gefällt es Ihnen in der Stadt?","You've lived here for a month now. Do you like it in the city?"),
("Mia","Ja, sehr! Es gibt viel Kultur. Aber manchmal vermisse ich die Ruhe auf dem Land.","Yes, very much! There's lots of culture. But sometimes I miss the quiet of the countryside."),
("Frau Becker","Verstehe ich. Haben Sie einen Garten?","I understand. Do you have a garden?"),
("Mia","Nur einen Balkon. Aber da wachsen Blumen und Kräuter.","Only a balcony. But flowers and herbs grow there."),
("Herr Vogt","Haben Sie schon das neue Smartphone gesehen? Es ist unglaublich.","Have you seen the new smartphone? It's unbelievable."),
("Tom","Ja, aber es ist mir zu teuer. Mein altes Handy funktioniert noch.","Yes, but it's too expensive for me. My old phone still works."),
("Herr Vogt","Ich bin süchtig nach sozialen Medien. Ich checke sie ständig.","I'm addicted to social media. I check them constantly."),
("Leila","Während der Arbeit sollte man das Handy weglegen.","During work one should put the phone away."),
("Nadja","Gestern hatte ich einen Notfall: Ich habe die Polizei gerufen.","Yesterday I had an emergency: I called the police."),
("Mia","Oh! Was ist passiert?","Oh! What happened?"),
("Nadja","Ein Einbrecher war in meiner Wohnung. Zum Glück war nichts Wertvolles da.","A burglar was in my apartment. Luckily nothing valuable was there."),
("Jonas","Ich habe für meine Mutter ein Geschenk gekauft. Sie hat Geburtstag.","I bought a gift for my mother. It's her birthday."),
("Mia","Wie schön! Ich backe ihr einen Kuchen. Welchen Geschmack mag sie?","How nice! I'll bake her a cake. What flavor does she like?"),
("Jonas","Schokolade. Sie freut sich immer über Besuch aus der Heimat.","Chocolate. She's always happy about visits from home."),
("Leila","Kannst du mir den Weg zum Bahnhof erklären? Ich habe mich verlaufen.","Can you explain the way to the station? I got lost."),
("Tom","Gehen Sie geradeaus, dann rechts. Zwischen dem Park und dem Hotel ist der Eingang.","Go straight, then right. Between the park and the hotel is the entrance."),
]
A22_out = ["Plane deinen Traumurlaub: Ziel, Transport, Aktivitäten.","Diskutiere Umwelt: 2 Probleme und 2 Lösungen.","Beschreibe ein Tier und deine Gefühle ihm gegenüber.","Erzähle eine Nachricht, die du kürzlich gehört hast."]
gen_module("A2.2", 91, A22_topics, A22_titles, A22_goals, A22_grammar, A22_vocab, A22_chunks, A22_scenes, A22_out)

# write partial so far
with open('/home/user/.super_doubao/super-doubao-runtime/workspace/deutsch-jetzt/data/lessons_2.js','w',encoding='utf-8') as f:
    f.write("/* Days 31-240 (A1.2→B2.2). Original content. */\nwindow.LESSONS_2 = " + json.dumps(OUT, ensure_ascii=False) + ";\n")
print("Partial:", len(OUT), "days written. Continuing in part 2 script.")
