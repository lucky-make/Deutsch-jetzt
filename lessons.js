/* Deutsch Jetzt! — lesson data (A1.1, Tage 1–30). Original content. Auto-generated. */
/* To extend: append more day objects following the same schema (see docs/DESIGN.md). */
window.LESSONS = [
 {
  "id": 1,
  "level": "A1.1",
  "act": "Begrüßung",
  "title": "Ankunft in Berlin",
  "goal": "Sich begrüßen und vorstellen (Name, Herkunft).",
  "grammar": {
   "topic": "Personalpronomen ich/du/Sie + Verben sein, heißen, kommen (Präsens)",
   "note": "Use <b>ich</b> for yourself, <b>du</b> for friends/young people, <b>Sie</b> (formal) for strangers and work. Verbs end in -e (ich), -st (du), -en (wir/Sie).",
   "examples": [
    "Ich heiße Mia.",
    "Woher kommst du?",
    "Ich komme aus Spanien.",
    "Wie geht es Ihnen?"
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "Hallo! Entschuldigung — wo ist der Bahnhof?",
    "en": "Hi! Excuse me — where is the train station?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Guten Tag! Der Bahnhof ist hier links. Kommen Sie aus dem Ausland?",
    "en": "Hello! The station is left from here. Are you from abroad?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, ich heiße Mia. Ich komme aus Madrid. Und du?",
    "en": "Yes, I'm Mia. I come from Madrid. And you?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ich bin Jonas. Ich wohne in Berlin. Willkommen in Deutschland!",
    "en": "I'm Jonas. I live in Berlin. Welcome to Germany!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke! Wie geht es dir?",
    "en": "Thanks! How are you?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Gut, danke. Und Ihnen? — äh, dir!",
    "en": "Good, thanks. And you? — uh, you (informal)!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Sehr gut. Bis bald!",
    "en": "Very good. See you soon!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d1_v1",
    "de": "der Tag",
    "en": "the day",
    "article": "der",
    "type": "noun",
    "example": "Guten Tag!"
   },
   {
    "id": "d1_v2",
    "de": "hallo",
    "en": "hello",
    "article": "",
    "type": "interjection",
    "example": "Hallo, wie geht's?"
   },
   {
    "id": "d1_v3",
    "de": "heißen",
    "en": "to be called",
    "article": "",
    "type": "verb",
    "example": "Ich heiße Anna."
   },
   {
    "id": "d1_v4",
    "de": "kommen",
    "en": "to come",
    "article": "",
    "type": "verb",
    "example": "Ich komme aus Italien."
   },
   {
    "id": "d1_v5",
    "de": "wohnen",
    "en": "to live",
    "article": "",
    "type": "verb",
    "example": "Ich wohne in Berlin."
   },
   {
    "id": "d1_v6",
    "de": "ich",
    "en": "I",
    "article": "",
    "type": "pronoun",
    "example": "Ich bin neu hier."
   },
   {
    "id": "d1_v7",
    "de": "du",
    "en": "you (informal)",
    "article": "",
    "type": "pronoun",
    "example": "Du bist nett."
   },
   {
    "id": "d1_v8",
    "de": "Sie",
    "en": "you (formal)",
    "article": "",
    "type": "pronoun",
    "example": "Wie heißen Sie?"
   },
   {
    "id": "d1_v9",
    "de": "aus",
    "en": "from (country)",
    "article": "",
    "type": "prep",
    "example": "aus Österreich"
   },
   {
    "id": "d1_v10",
    "de": "deutsch",
    "en": "German (lang)",
    "article": "",
    "type": "adj",
    "example": "Ich spreche Deutsch."
   },
   {
    "id": "d1_v11",
    "de": "danke",
    "en": "thank you",
    "article": "",
    "type": "interjection",
    "example": "Danke schön!"
   },
   {
    "id": "d1_v12",
    "de": "bitte",
    "en": "please / you're welcome",
    "article": "",
    "type": "interjection",
    "example": "Bitte schön!"
   },
   {
    "id": "d1_v13",
    "de": "ja",
    "en": "yes",
    "article": "",
    "type": "adverb",
    "example": "Ja, gerne."
   },
   {
    "id": "d1_v14",
    "de": "nein",
    "en": "no",
    "article": "",
    "type": "adverb",
    "example": "Nein, danke."
   }
  ],
  "chunks": [
   {
    "de": "Ich heiße …",
    "en": "My name is …"
   },
   {
    "de": "Woher kommst du?",
    "en": "Where are you from?"
   },
   {
    "de": "Ich komme aus …",
    "en": "I come from …"
   },
   {
    "de": "Wie geht es dir?",
    "en": "How are you?"
   },
   {
    "de": "Bis bald!",
    "en": "See you soon!"
   }
  ],
  "outputTask": {
   "prompt": "Introduce yourself out loud: greeting, name, where you are from. Then say goodbye.",
   "model": "Hallo! Ich heiße Mia. Ich komme aus Spanien. Wie geht es dir? — Gut, danke. Auf Wiedersehen!"
  }
 },
 {
  "id": 2,
  "level": "A1.1",
  "act": "Alphabet & Aussprache",
  "title": "Das deutsche Alphabet",
  "goal": "Das Alphabet buchstabieren und Umlaute aussprechen.",
  "grammar": {
   "topic": "Alphabet, Umlaute (ä ö ü) und ß; Ausspracheregeln",
   "note": "German has 3 extra vowels: <b>ä</b> (like 'a' in 'cat'), <b>ö</b> (rounded 'e'), <b>ü</b> (rounded 'i'), and <b>ß</b> (sharp s, like 'ss'). 'v' sounds like 'f', 'w' like 'v', 'j' like 'y'.",
   "examples": [
    "Öffne die Tür!",
    "Die Straße ist lang.",
    "Ich heiße Jürgen.",
    "Übung macht den Meister."
   ]
  },
  "episode": [
   {
    "speaker": "Jonas",
    "de": "Kannst du deinen Namen buchstabieren?",
    "en": "Can you spell your name?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "M-I-A. Und mein Nachname: L-Ö-P-E-Z.",
    "en": "M-I-A. And my surname: L-Ö-P-E-Z.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Mit Ö? Interessant! In Deutschland gibt es ä, ö, ü und ß.",
    "en": "With Ö? Interesting! In Germany there are ä, ö, ü and ß.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Was ist ß?",
    "en": "What is ß?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Das ist ein scharfes S, wie in Straße. Es heißt Eszett.",
    "en": "That's a sharp s, like in 'Straße'. It's called Eszett.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ah! Also Straße mit ß. Übung macht den Meister, sagt man?",
    "en": "Ah! So Straße with ß. Practice makes perfect, they say?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Genau! Sprich langsam, dann klappt es.",
    "en": "Exactly! Speak slowly, then it works.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d2_v1",
    "de": "das Alphabet",
    "en": "the alphabet",
    "article": "das",
    "type": "noun",
    "example": "Das deutsche Alphabet hat 26 Buchstaben."
   },
   {
    "id": "d2_v2",
    "de": "der Buchstabe",
    "en": "the letter",
    "article": "der",
    "type": "noun",
    "example": "Welcher Buchstabe ist das?"
   },
   {
    "id": "d2_v3",
    "de": "buchstabieren",
    "en": "to spell",
    "article": "",
    "type": "verb",
    "example": "Kannst du das buchstabieren?"
   },
   {
    "id": "d2_v4",
    "de": "der Umlaut",
    "en": "the umlaut",
    "article": "der",
    "type": "noun",
    "example": "Ä, Ö, Ü sind Umlaute."
   },
   {
    "id": "d2_v5",
    "de": "das ß (Eszett)",
    "en": "the sharp s",
    "article": "das",
    "type": "noun",
    "example": "Straße schreibt man mit ß."
   },
   {
    "id": "d2_v6",
    "de": "sprechen",
    "en": "to speak",
    "article": "",
    "type": "verb",
    "example": "Ich spreche ein bisschen Deutsch."
   },
   {
    "id": "d2_v7",
    "de": "langsam",
    "en": "slowly",
    "article": "",
    "type": "adverb",
    "example": "Sprechen Sie langsam, bitte."
   },
   {
    "id": "d2_v8",
    "de": "der Name",
    "en": "the name",
    "article": "der",
    "type": "noun",
    "example": "Mein Name ist Mia."
   },
   {
    "id": "d2_v9",
    "de": "der Nachname",
    "en": "the surname",
    "article": "der",
    "type": "noun",
    "example": "Mein Nachname ist López."
   },
   {
    "id": "d2_v10",
    "de": "wie",
    "en": "how",
    "article": "",
    "type": "adv",
    "example": "Wie heißt du?"
   },
   {
    "id": "d2_v11",
    "de": "was",
    "en": "what",
    "article": "",
    "type": "pronoun",
    "example": "Was ist das?"
   },
   {
    "id": "d2_v12",
    "de": "genau",
    "en": "exactly / right",
    "article": "",
    "type": "adv",
    "example": "Ja, genau!"
   },
   {
    "id": "d2_v13",
    "de": "klappen",
    "en": "to work out",
    "article": "",
    "type": "verb",
    "example": "Es klappt!"
   }
  ],
  "chunks": [
   {
    "de": "Wie buchstabiert man …?",
    "en": "How do you spell …?"
   },
   {
    "de": "Können Sie das buchstabieren?",
    "en": "Can you spell that?"
   },
   {
    "de": "Sprechen Sie langsam, bitte.",
    "en": "Speak slowly, please."
   },
   {
    "de": "Was heißt …?",
    "en": "What does … mean?"
   },
   {
    "de": "Wie spricht man das aus?",
    "en": "How do you pronounce that?"
   }
  ],
  "outputTask": {
   "prompt": "Spell your full name and your city slowly, then write it down from memory.",
   "model": "Mein Name ist Mia López. L-Ö-P-E-Z. Ich komme aus Madrid. M-A-D-R-I-D."
  }
 },
 {
  "id": 3,
  "level": "A1.1",
  "act": "Zahlen & Telefon",
  "title": "Zahlen bis 20 und die Telefonnummer",
  "goal": "Zahlen 1–20 sagen und Telefonnummern austauschen.",
  "grammar": {
   "topic": "Zahlen 0–20; Telefonnummer; wie viel? wie viele?",
   "note": "Numbers 0–12 are irregular (eins, zwei, drei … zwölf). 13–19 = digit + zehn (drei-zehn). Note: <b>null</b>=0, <b>eins</b>=1 but before a noun it's <b>ein</b>. Phone numbers are spoken digit by digit.",
   "examples": [
    "Meine Nummer ist null eins sieben sechs, drei zwei null eins vier.",
    "Ich habe drei Geschwister.",
    "Wie viel kostet das?",
    "Sie ist neunzehn Jahre alt."
   ]
  },
  "episode": [
   {
    "speaker": "Jonas",
    "de": "Wie ist deine Telefonnummer, Mia?",
    "en": "What's your phone number, Mia?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Null eins fünf eins, vier vier acht null neun drei zwei.",
    "en": "0151, 4480932.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Danke! Ich schreibe sie auf. Wie alt bist du eigentlich?",
    "en": "Thanks! I'll write it down. How old are you, by the way?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich bin vierundzwanzig. Und du?",
    "en": "I'm twenty-four. And you?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ich bin sechsundzwanzig. Ich habe zwei Schwestern.",
    "en": "I'm twenty-six. I have two sisters.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich habe einen Bruder und eine Schwester. Wir sind drei Kinder.",
    "en": "I have one brother and one sister. We are three children.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Große Familie! Ich rufe dich später an.",
    "en": "Big family! I'll call you later.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d3_v1",
    "de": "null",
    "en": "zero",
    "article": "",
    "type": "number",
    "example": "Die Nummer beginnt mit null."
   },
   {
    "id": "d3_v2",
    "de": "eins",
    "en": "one",
    "article": "",
    "type": "number",
    "example": "Ich habe eins."
   },
   {
    "id": "d3_v3",
    "de": "zwei",
    "en": "two",
    "article": "",
    "type": "number",
    "example": "zwei Brüder"
   },
   {
    "id": "d3_v4",
    "de": "drei",
    "en": "three",
    "article": "",
    "type": "number",
    "example": "drei Kinder"
   },
   {
    "id": "d3_v5",
    "de": "zehn",
    "en": "ten",
    "article": "",
    "type": "number",
    "example": "zehn Euro"
   },
   {
    "id": "d3_v6",
    "de": "zwanzig",
    "en": "twenty",
    "article": "",
    "type": "number",
    "example": "Er ist zwanzig."
   },
   {
    "id": "d3_v7",
    "de": "die Zahl",
    "en": "the number",
    "article": "die",
    "type": "noun",
    "example": "Welche Zahl ist das?"
   },
   {
    "id": "d3_v8",
    "de": "die Telefonnummer",
    "en": "the phone number",
    "article": "die",
    "type": "noun",
    "example": "Wie ist deine Telefonnummer?"
   },
   {
    "id": "d3_v9",
    "de": "wie alt",
    "en": "how old",
    "article": "",
    "type": "phrase",
    "example": "Wie alt bist du?"
   },
   {
    "id": "d3_v10",
    "de": "alt",
    "en": "old",
    "article": "",
    "type": "adj",
    "example": "Ich bin 24 Jahre alt."
   },
   {
    "id": "d3_v11",
    "de": "das Jahr",
    "en": "the year",
    "article": "das",
    "type": "noun",
    "example": "in einem Jahr"
   },
   {
    "id": "d3_v12",
    "de": "haben",
    "en": "to have",
    "article": "",
    "type": "verb",
    "example": "Ich habe einen Bruder."
   },
   {
    "id": "d3_v13",
    "de": "der Bruder",
    "en": "the brother",
    "article": "der",
    "type": "noun",
    "example": "Mein Bruder ist groß."
   },
   {
    "id": "d3_v14",
    "de": "die Schwester",
    "en": "the sister",
    "article": "die",
    "type": "noun",
    "example": "zwei Schwestern"
   }
  ],
  "chunks": [
   {
    "de": "Wie ist deine Telefonnummer?",
    "en": "What's your phone number?"
   },
   {
    "de": "Wie alt bist du?",
    "en": "How old are you?"
   },
   {
    "de": "Ich bin … Jahre alt.",
    "en": "I am … years old."
   },
   {
    "de": "Ich habe … Geschwister.",
    "en": "I have … siblings."
   },
   {
    "de": "Ich rufe dich später an.",
    "en": "I'll call you later."
   }
  ],
  "outputTask": {
   "prompt": "Say your phone number, age, and number of siblings in German from memory.",
   "model": "Meine Telefonnummer ist 0151 4480932. Ich bin 24 Jahre alt. Ich habe zwei Geschwister."
  }
 },
 {
  "id": 4,
  "level": "A1.1",
  "act": "Länder & Herkunft",
  "title": "Woher kommst du?",
  "goal": "Über Herkunft, Länder und Nationalitäten sprechen.",
  "grammar": {
   "topic": "Präposition aus + Land; woher?; Nationalitäten (invariabel Adjektiv)",
   "note": "Ask origin with <b>Woher kommst du?</b> Answer with <b>Ich komme aus …</b> (aus + country, no article for most countries). Nationality adjectives have no ending: <b>ich bin spanisch</b>.",
   "examples": [
    "Woher kommst du? — Ich komme aus der Türkei.",
    "Sie ist italienisch.",
    "Wir kommen aus Österreich.",
    "Aus welchem Land kommst du?"
   ]
  },
  "episode": [
   {
    "speaker": "Frau Becker",
    "de": "Guten Tag, Sie müssen Mia sein! Ich bin Frau Becker, Ihre Vermieterin.",
    "en": "Hello, you must be Mia! I'm Mrs. Becker, your landlady.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Guten Tag! Ja, ich bin's. Schön, Sie kennenzulernen.",
    "en": "Hello! Yes, that's me. Nice to meet you.",
    "audioFile": null
   },
   {
    "speaker": "Frau Becker",
    "de": "Kommen Sie aus Spanien? Ihre Akzent ist spanisch.",
    "en": "Are you from Spain? Your accent is Spanish.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, ich komme aus Madrid. Meine Mutter ist kolumbianisch, mein Vater spanisch.",
    "en": "Yes, I'm from Madrid. My mother is Colombian, my father Spanish.",
    "audioFile": null
   },
   {
    "speaker": "Frau Becker",
    "de": "Interessant! Mein Mann kommt aus Polen. Wir sprechen zu Hause Polnisch.",
    "en": "Interesting! My husband comes from Poland. We speak Polish at home.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Wow, zweisprachig! Ich möchte auch so gut Deutsch sprechen.",
    "en": "Wow, bilingual! I want to speak German that well too.",
    "audioFile": null
   },
   {
    "speaker": "Frau Becker",
    "de": "Das schaffen Sie! Hier ist Ihr Schlüssel.",
    "en": "You'll manage! Here is your key.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d4_v1",
    "de": "das Land",
    "en": "the country",
    "article": "das",
    "type": "noun",
    "example": "Welches Land ist das?"
   },
   {
    "id": "d4_v2",
    "de": "woher",
    "en": "where from",
    "article": "",
    "type": "adv",
    "example": "Woher kommst du?"
   },
   {
    "id": "d4_v3",
    "de": "spanisch",
    "en": "Spanish",
    "article": "",
    "type": "adj",
    "example": "Ich bin spanisch."
   },
   {
    "id": "d4_v4",
    "de": "deutsch",
    "en": "German",
    "article": "",
    "type": "adj",
    "example": "Er ist deutsch."
   },
   {
    "id": "d4_v5",
    "de": "italienisch",
    "en": "Italian",
    "article": "",
    "type": "adj",
    "example": "Sie ist italienisch."
   },
   {
    "id": "d4_v6",
    "de": "die Heimat",
    "en": "homeland",
    "article": "die",
    "type": "noun",
    "example": "Meine Heimat ist Madrid."
   },
   {
    "id": "d4_v7",
    "de": "der Akzent",
    "en": "the accent",
    "article": "der",
    "type": "noun",
    "example": "Du hast einen spanischen Akzent."
   },
   {
    "id": "d4_v8",
    "de": "die Mutter",
    "en": "the mother",
    "article": "die",
    "type": "noun",
    "example": "Meine Mutter kocht gut."
   },
   {
    "id": "d4_v9",
    "de": "der Vater",
    "en": "the father",
    "article": "der",
    "type": "noun",
    "example": "Mein Vater arbeitet viel."
   },
   {
    "id": "d4_v10",
    "de": "kennenlernen",
    "en": "to meet (get to know)",
    "article": "",
    "type": "verb",
    "example": "Schön, Sie kennenzulernen."
   },
   {
    "id": "d4_v11",
    "de": "der Schlüssel",
    "en": "the key",
    "article": "der",
    "type": "noun",
    "example": "Hier ist Ihr Schlüssel."
   },
   {
    "id": "d4_v12",
    "de": "die Vermieterin",
    "en": "the landlady",
    "article": "die",
    "type": "noun",
    "example": "Frau Becker ist meine Vermieterin."
   },
   {
    "id": "d4_v13",
    "de": "zu Hause",
    "en": "at home",
    "article": "",
    "type": "phrase",
    "example": "Ich bin zu Hause."
   },
   {
    "id": "d4_v14",
    "de": "sprechen",
    "en": "to speak",
    "article": "",
    "type": "verb",
    "example": "Wir sprechen Deutsch."
   }
  ],
  "chunks": [
   {
    "de": "Woher kommst du?",
    "en": "Where are you from?"
   },
   {
    "de": "Ich komme aus …",
    "en": "I come from …"
   },
   {
    "de": "Schön, Sie kennenzulernen.",
    "en": "Nice to meet you."
   },
   {
    "de": "Meine Mutter/Vater ist …",
    "en": "My mother/father is …"
   },
   {
    "de": "Das schaffen Sie!",
    "en": "You can do it!"
   }
  ],
  "outputTask": {
   "prompt": "Explain your origin, your parents' origins, and one country you'd like to visit.",
   "model": "Ich komme aus Spanien. Meine Mutter ist kolumbianisch und mein Vater ist spanisch. Ich möchte nach Japan reisen."
  }
 },
 {
  "id": 5,
  "level": "A1.1",
  "act": "Sprachen",
  "title": "Ich spreche ein bisschen Deutsch",
  "goal": "Sagen, welche Sprachen man spricht, und nach Sprachen fragen.",
  "grammar": {
   "topic": "Verbkonjugation Präsens (ich/du/Sie/wir/ihr/sie); sprechen + Sprache",
   "note": "Regular verbs: stem + endings <b>-e, -st, -t, -en, -t, -en</b> (ich mach-e, du mach-st, er mach-t, wir mach-en, ihr mach-t, sie mach-en). <b>sprechen</b> is irregular: ich spreche, du sprichst, er spricht.",
   "examples": [
    "Ich spreche Spanisch und ein bisschen Deutsch.",
    "Sprichst du Englisch?",
    "Wir sprechen zu Hause Polnisch.",
    "Er spricht drei Sprachen."
   ]
  },
  "episode": [
   {
    "speaker": "Leila",
    "de": "Hallo, du bist Mia, oder? Ich bin Leila, deine Kollegin im Praktikum.",
    "en": "Hi, you're Mia, right? I'm Leila, your internship colleague.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, hallo! Sprechen wir Deutsch oder Englisch?",
    "en": "Yes, hi! Shall we speak German or English?",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Lass uns Deutsch sprechen! Ich komme aus der Türkei und lerne auch Deutsch.",
    "en": "Let's speak German! I'm from Turkey and also learning German.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Super! Ich spreche Spanisch, Englisch und ein bisschen Deutsch.",
    "en": "Great! I speak Spanish, English, and a bit of German.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Ich spreche Türkisch, Englisch und Deutsch. Mein Deutsch ist noch nicht perfekt.",
    "en": "I speak Turkish, English, and German. My German isn't perfect yet.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Meins auch nicht. Übung macht den Meister!",
    "en": "Mine neither. Practice makes perfect!",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Genau. Nach der Arbeit trinken wir einen Kaffee?",
    "en": "Exactly. After work let's have a coffee?",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d5_v1",
    "de": "die Sprache",
    "en": "the language",
    "article": "die",
    "type": "noun",
    "example": "Welche Sprachen sprichst du?"
   },
   {
    "id": "d5_v2",
    "de": "Spanisch",
    "en": "Spanish",
    "article": "",
    "type": "noun",
    "example": "Ich lerne Spanisch."
   },
   {
    "id": "d5_v3",
    "de": "Englisch",
    "en": "English",
    "article": "",
    "type": "noun",
    "example": "Sprechen Sie Englisch?"
   },
   {
    "id": "d5_v4",
    "de": "Türkisch",
    "en": "Turkish",
    "article": "",
    "type": "noun",
    "example": "Sie spricht Türkisch."
   },
   {
    "id": "d5_v5",
    "de": "ein bisschen",
    "en": "a little",
    "article": "",
    "type": "phrase",
    "example": "Ich verstehe ein bisschen."
   },
   {
    "id": "d5_v6",
    "de": "verstehen",
    "en": "to understand",
    "article": "",
    "type": "verb",
    "example": "Ich verstehe nicht."
   },
   {
    "id": "d5_v7",
    "de": "lernen",
    "en": "to learn",
    "article": "",
    "type": "verb",
    "example": "Ich lerne Deutsch."
   },
   {
    "id": "d5_v8",
    "de": "perfekt",
    "en": "perfect",
    "article": "",
    "type": "adj",
    "example": "Dein Deutsch ist perfekt."
   },
   {
    "id": "d5_v9",
    "de": "noch",
    "en": "still / yet",
    "article": "",
    "type": "adv",
    "example": "Ich bin noch nicht fertig."
   },
   {
    "id": "d5_v10",
    "de": "nicht",
    "en": "not",
    "article": "",
    "type": "adv",
    "example": "Ich verstehe nicht."
   },
   {
    "id": "d5_v11",
    "de": "die Kollegin",
    "en": "the (female) colleague",
    "article": "die",
    "type": "noun",
    "example": "Leila ist meine Kollegin."
   },
   {
    "id": "d5_v12",
    "de": "das Praktikum",
    "en": "the internship",
    "article": "das",
    "type": "noun",
    "example": "Ich mache ein Praktikum."
   },
   {
    "id": "d5_v13",
    "de": "die Arbeit",
    "en": "the work / job",
    "article": "die",
    "type": "noun",
    "example": "Ich gehe zur Arbeit."
   },
   {
    "id": "d5_v14",
    "de": "trinken",
    "en": "to drink",
    "article": "",
    "type": "verb",
    "example": "Ich trinke Kaffee."
   }
  ],
  "chunks": [
   {
    "de": "Ich spreche … und ein bisschen …",
    "en": "I speak … and a little …"
   },
   {
    "de": "Sprichst du …?",
    "en": "Do you speak …?"
   },
   {
    "de": "Ich verstehe (nur) ein bisschen.",
    "en": "I understand (only) a little."
   },
   {
    "de": "Lass uns Deutsch sprechen!",
    "en": "Let's speak German!"
   },
   {
    "de": "Mein Deutsch ist noch nicht perfekt.",
    "en": "My German isn't perfect yet."
   }
  ],
  "outputTask": {
   "prompt": "List all languages you speak, rate them, and say which you're still learning.",
   "model": "Ich spreche Spanisch und Englisch. Ich lerne Deutsch — mein Deutsch ist noch nicht perfekt, aber ich übe jeden Tag."
  }
 },
 {
  "id": 6,
  "level": "A1.1",
  "act": "Berufe",
  "title": "Was bist du von Beruf?",
  "goal": "Nach Berufen fragen und Berufe beschreiben.",
  "grammar": {
   "topic": "Berufe; von Beruf sein; arbeiten bei/in; unregelmäßige Verben (arbeiten, machen)",
   "note": "Ask about jobs: <b>Was bist du von Beruf?</b> or <b>Was machst du beruflich?</b> Say where you work: <b>Ich arbeite bei …</b> (company) / <b>in …</b> (city/field). Many job nouns add -in for female: der Lehrer / die Lehrerin.",
   "examples": [
    "Was bist du von Beruf? — Ich bin Designerin.",
    "Er arbeitet bei Siemens.",
    "Sie ist Ärztin von Beruf.",
    "Ich mache ein Praktikum in Berlin."
   ]
  },
  "episode": [
   {
    "speaker": "Herr Vogt",
    "de": "Guten Morgen, Mia! Willkommen im Büro. Ich bin Herr Vogt, Ihr Chef.",
    "en": "Good morning, Mia! Welcome to the office. I'm Mr. Vogt, your boss.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Guten Morgen, Herr Vogt! Danke, dass ich hier bin.",
    "en": "Good morning, Mr. Vogt! Thank you for having me.",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Was machst du beruflich? Du studierst Design, richtig?",
    "en": "What do you do professionally? You study design, right?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, ich bin Designerin. Ich arbeite gerne mit Farben und Typografie.",
    "en": "Yes, I'm a designer. I like working with colors and typography.",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Sehr gut. Leila ist Grafikerin, und Tom ist Programmierer.",
    "en": "Very good. Leila is a graphic designer, and Tom is a programmer.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Was machen Sie genau, Herr Vogt?",
    "en": "What exactly do you do, Mr. Vogt?",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Ich bin Projektmanager. Ich organisiere die Teams. Fangen wir an!",
    "en": "I'm a project manager. I organize the teams. Let's begin!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d6_v1",
    "de": "der Beruf",
    "en": "the profession",
    "article": "der",
    "type": "noun",
    "example": "Was ist dein Beruf?"
   },
   {
    "id": "d6_v2",
    "de": "arbeiten",
    "en": "to work",
    "article": "",
    "type": "verb",
    "example": "Ich arbeite in Berlin."
   },
   {
    "id": "d6_v3",
    "de": "der Chef / die Chefin",
    "en": "the boss",
    "article": "der",
    "type": "noun",
    "example": "Mein Chef ist nett."
   },
   {
    "id": "d6_v4",
    "de": "die Designerin",
    "en": "the (female) designer",
    "article": "die",
    "type": "noun",
    "example": "Sie ist Designerin."
   },
   {
    "id": "d6_v5",
    "de": "der Lehrer / die Lehrerin",
    "en": "the teacher",
    "article": "der",
    "type": "noun",
    "example": "Meine Lehrerin heißt Anna."
   },
   {
    "id": "d6_v6",
    "de": "der Arzt / die Ärztin",
    "en": "the doctor",
    "article": "der",
    "type": "noun",
    "example": "Er ist Arzt."
   },
   {
    "id": "d6_v7",
    "de": "der Student / die Studentin",
    "en": "the student",
    "article": "der",
    "type": "noun",
    "example": "Ich bin Studentin."
   },
   {
    "id": "d6_v8",
    "de": "studieren",
    "en": "to study (at university)",
    "article": "",
    "type": "verb",
    "example": "Ich studiere Design."
   },
   {
    "id": "d6_v9",
    "de": "machen",
    "en": "to do / make",
    "article": "",
    "type": "verb",
    "example": "Was machst du?"
   },
   {
    "id": "d6_v10",
    "de": "das Büro",
    "en": "the office",
    "article": "das",
    "type": "noun",
    "example": "Ich bin im Büro."
   },
   {
    "id": "d6_v11",
    "de": "das Team",
    "en": "the team",
    "article": "das",
    "type": "noun",
    "example": "Unser Team ist klein."
   },
   {
    "id": "d6_v12",
    "de": "organisieren",
    "en": "to organize",
    "article": "",
    "type": "verb",
    "example": "Ich organisiere die Reise."
   },
   {
    "id": "d6_v13",
    "de": "genau",
    "en": "exactly",
    "article": "",
    "type": "adv",
    "example": "Genau das meine ich."
   },
   {
    "id": "d6_v14",
    "de": "anfangen",
    "en": "to begin",
    "article": "",
    "type": "verb",
    "example": "Wir fangen um 9 Uhr an."
   }
  ],
  "chunks": [
   {
    "de": "Was bist du von Beruf?",
    "en": "What's your job?"
   },
   {
    "de": "Ich arbeite bei/in …",
    "en": "I work at/in …"
   },
   {
    "de": "Ich bin … von Beruf.",
    "en": "I am a … by profession."
   },
   {
    "de": "Was machst du beruflich?",
    "en": "What do you do for a living?"
   },
   {
    "de": "Fangen wir an!",
    "en": "Let's begin!"
   }
  ],
  "outputTask": {
   "prompt": "State your job/studies, where you work, and describe one colleague's job.",
   "model": "Ich bin Designerin von Beruf. Ich arbeite bei einer Werbeagentur in Berlin. Meine Kollegin Leila ist Grafikerin."
  }
 },
 {
  "id": 7,
  "level": "A1.1",
  "act": "Familie",
  "title": "Meine Familie",
  "goal": "Über Familie sprechen und Possessivartikel verwenden.",
  "grammar": {
   "topic": "haben; Possessivartikel mein/dein/Ihr (Nominativ); Familienmitglieder",
   "note": "Possessive articles (my/your): <b>mein</b> (my, masc/neut), <b>meine</b> (fem/plural); <b>dein/deine</b> (your informal); <b>Ihr/Ihre</b> (your formal). Use <b>haben</b> (habe, hast, hat, haben) to say what you have.",
   "examples": [
    "Mein Bruder ist groß.",
    "Wie viele Geschwister hast du?",
    "Ihre Eltern wohnen in München.",
    "Meine Schwester hat zwei Kinder."
   ]
  },
  "episode": [
   {
    "speaker": "Leila",
    "de": "Zeig mir mal ein Foto von deiner Familie!",
    "en": "Show me a photo of your family!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Gerne. Das sind meine Eltern, mein Bruder Carlos und meine Schwester Lucia.",
    "en": "Sure. These are my parents, my brother Carlos and my sister Lucia.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Wie alt ist dein Bruder?",
    "en": "How old is your brother?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Er ist achtzehn. Meine Schwester ist dreißig und hat zwei Kinder.",
    "en": "He's eighteen. My sister is thirty and has two children.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Oh, du bist Tante! Wohnen deine Eltern in Madrid?",
    "en": "Oh, you're an aunt! Do your parents live in Madrid?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, mein Vater ist Koch und meine Mutter ist Lehrerin. Und deine Familie?",
    "en": "Yes, my father is a cook and my mother is a teacher. And your family?",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Meine Eltern wohnen in Istanbul. Ich habe eine Schwester in Berlin.",
    "en": "My parents live in Istanbul. I have a sister in Berlin.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d7_v1",
    "de": "die Familie",
    "en": "the family",
    "article": "die",
    "type": "noun",
    "example": "Meine Familie ist groß."
   },
   {
    "id": "d7_v2",
    "de": "die Eltern",
    "en": "the parents",
    "article": "die",
    "type": "noun",
    "example": "Meine Eltern sind nett."
   },
   {
    "id": "d7_v3",
    "de": "mein / meine",
    "en": "my",
    "article": "",
    "type": "poss",
    "example": "Mein Vater ist Koch."
   },
   {
    "id": "d7_v4",
    "de": "dein / deine",
    "en": "your (informal)",
    "article": "",
    "type": "poss",
    "example": "Wie heißt dein Bruder?"
   },
   {
    "id": "d7_v5",
    "de": "das Kind",
    "en": "the child",
    "article": "das",
    "type": "noun",
    "example": "Sie hat zwei Kinder."
   },
   {
    "id": "d7_v6",
    "de": "der Sohn / die Tochter",
    "en": "son / daughter",
    "article": "der",
    "type": "noun",
    "example": "Ihre Tochter ist klein."
   },
   {
    "id": "d7_v7",
    "de": "der Onkel / die Tante",
    "en": "uncle / aunt",
    "article": "der",
    "type": "noun",
    "example": "Ich bin Tante."
   },
   {
    "id": "d7_v8",
    "de": "die Großeltern",
    "en": "grandparents",
    "article": "die",
    "type": "noun",
    "example": "Meine Großeltern leben in Spanien."
   },
   {
    "id": "d7_v9",
    "de": "der Cousin / die Cousine",
    "en": "cousin",
    "article": "der",
    "type": "noun",
    "example": "Mein Cousin wohnt in Berlin."
   },
   {
    "id": "d7_v10",
    "de": "das Foto",
    "en": "the photo",
    "article": "das",
    "type": "noun",
    "example": "Zeig mir ein Foto!"
   },
   {
    "id": "d7_v11",
    "de": "wohnen",
    "en": "to live",
    "article": "",
    "type": "verb",
    "example": "Ich wohne in Berlin."
   },
   {
    "id": "d7_v12",
    "de": "der Koch / die Köchin",
    "en": "cook",
    "article": "der",
    "type": "noun",
    "example": "Mein Vater ist Koch."
   },
   {
    "id": "d7_v13",
    "de": "wie viele",
    "en": "how many",
    "article": "",
    "type": "phrase",
    "example": "Wie viele Geschwister hast du?"
   },
   {
    "id": "d7_v14",
    "de": "jung",
    "en": "young",
    "article": "",
    "type": "adj",
    "example": "Mein Bruder ist jung."
   }
  ],
  "chunks": [
   {
    "de": "Das sind meine Eltern.",
    "en": "These are my parents."
   },
   {
    "de": "Wie alt ist dein/deine …?",
    "en": "How old is your …?"
   },
   {
    "de": "Ich habe … Geschwister.",
    "en": "I have … siblings."
   },
   {
    "de": "Mein/Meine … ist/sind …",
    "en": "My … is/are …"
   },
   {
    "de": "Wohnen deine Eltern in …?",
    "en": "Do your parents live in …?"
   }
  ],
  "outputTask": {
   "prompt": "Describe your family: parents, siblings, their ages/jobs, where they live.",
   "model": "Meine Eltern wohnen in Madrid. Mein Vater ist Koch und meine Mutter ist Lehrerin. Ich habe einen Bruder und eine Schwester. Meine Schwester hat zwei Kinder."
  }
 },
 {
  "id": 8,
  "level": "A1.1",
  "act": "Wohnen & Wohnung",
  "title": "Die neue Wohnung",
  "goal": "Die Wohnung beschreiben und Möbel benennen.",
  "grammar": {
   "topic": "Präpositionen des Ortes (in, auf, unter, vor, hinter, neben); es gibt",
   "note": "Prepositions of place answer <b>Wo?</b> (where). <b>in</b>=in/inside, <b>auf</b>=on top, <b>unter</b>=under, <b>vor</b>=in front of, <b>hinter</b>=behind, <b>neben</b>=next to. <b>Es gibt</b> = there is/are.",
   "examples": [
    "Das Sofa ist vor dem Fenster.",
    "Es gibt zwei Schlafzimmer.",
    "Die Küche ist neben dem Bad.",
    "Auf dem Tisch steht eine Lampe."
   ]
  },
  "episode": [
   {
    "speaker": "Frau Becker",
    "de": "Hier ist Ihre Wohnung, Mia. Zwei Zimmer, eine Küche und ein Bad.",
    "en": "Here is your apartment, Mia. Two rooms, a kitchen and a bathroom.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Wow, sie ist hell! Wo ist das Bett?",
    "en": "Wow, it's bright! Where is the bed?",
    "audioFile": null
   },
   {
    "speaker": "Frau Becker",
    "de": "Das Bett ist dort hinten, neben dem Schrank. Der Schreibtisch ist vor dem Fenster.",
    "en": "The bed is back there, next to the wardrobe. The desk is in front of the window.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Perfekt! Gibt es eine Küche mit Herd?",
    "en": "Perfect! Is there a kitchen with a stove?",
    "audioFile": null
   },
   {
    "speaker": "Frau Becker",
    "de": "Ja, natürlich. Der Kühlschrank steht neben dem Herd. Und die Couch ist im Wohnzimmer.",
    "en": "Yes, of course. The fridge stands next to the stove. And the couch is in the living room.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Es gibt sogar einen Balkon! Darf ich auf den Balkon gehen?",
    "en": "There's even a balcony! May I go onto the balcony?",
    "audioFile": null
   },
   {
    "speaker": "Frau Becker",
    "de": "Aber natürlich! Die Aussicht ist schön.",
    "en": "But of course! The view is nice.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d8_v1",
    "de": "die Wohnung",
    "en": "the apartment",
    "article": "die",
    "type": "noun",
    "example": "Meine Wohnung ist klein."
   },
   {
    "id": "d8_v2",
    "de": "das Zimmer",
    "en": "the room",
    "article": "das",
    "type": "noun",
    "example": "Das Schlafzimmer ist groß."
   },
   {
    "id": "d8_v3",
    "de": "die Küche",
    "en": "the kitchen",
    "article": "die",
    "type": "noun",
    "example": "Ich koche in der Küche."
   },
   {
    "id": "d8_v4",
    "de": "das Bad",
    "en": "the bathroom",
    "article": "das",
    "type": "noun",
    "example": "Das Bad ist modern."
   },
   {
    "id": "d8_v5",
    "de": "das Bett",
    "en": "the bed",
    "article": "das",
    "type": "noun",
    "example": "Das Bett ist bequem."
   },
   {
    "id": "d8_v6",
    "de": "der Tisch",
    "en": "the table",
    "article": "der",
    "type": "noun",
    "example": "Auf dem Tisch steht eine Lampe."
   },
   {
    "id": "d8_v7",
    "de": "der Schrank",
    "en": "the wardrobe/cupboard",
    "article": "der",
    "type": "noun",
    "example": "Der Schrank ist groß."
   },
   {
    "id": "d8_v8",
    "de": "der Balkon",
    "en": "the balcony",
    "article": "der",
    "type": "noun",
    "example": "Ich frühstücke auf dem Balkon."
   },
   {
    "id": "d8_v9",
    "de": "in",
    "en": "in / into",
    "article": "",
    "type": "prep",
    "example": "in der Küche"
   },
   {
    "id": "d8_v10",
    "de": "auf",
    "en": "on (top of)",
    "article": "",
    "type": "prep",
    "example": "auf dem Tisch"
   },
   {
    "id": "d8_v11",
    "de": "unter",
    "en": "under",
    "article": "",
    "type": "prep",
    "example": "unter dem Bett"
   },
   {
    "id": "d8_v12",
    "de": "neben",
    "en": "next to",
    "article": "",
    "type": "prep",
    "example": "neben dem Fenster"
   },
   {
    "id": "d8_v13",
    "de": "vor",
    "en": "in front of / before",
    "article": "",
    "type": "prep",
    "example": "vor dem Haus"
   },
   {
    "id": "d8_v14",
    "de": "es gibt",
    "en": "there is / there are",
    "article": "",
    "type": "phrase",
    "example": "Es gibt einen Supermarkt."
   }
  ],
  "chunks": [
   {
    "de": "Es gibt …",
    "en": "There is/are …"
   },
   {
    "de": "Wo ist …? — … ist neben/unter/vor …",
    "en": "Where is …? — It's next to/under/in front of …"
   },
   {
    "de": "Darf ich …?",
    "en": "May I …?"
   },
   {
    "de": "Die Wohnung ist hell/groß/klein.",
    "en": "The apartment is bright/big/small."
   },
   {
    "de": "Hier ist …",
    "en": "Here is …"
   }
  ],
  "outputTask": {
   "prompt": "Describe your room/home: what furniture there is and where it stands.",
   "model": "In meiner Wohnung gibt es ein Bett, einen Tisch und einen Schrank. Der Schreibtisch ist vor dem Fenster. Die Küche ist neben dem Bad."
  }
 },
 {
  "id": 9,
  "level": "A1.1",
  "act": "Hobbys & Freizeit",
  "title": "Was machst du in deiner Freizeit?",
  "goal": "Über Hobbys sprechen und gern/mögen verwenden.",
  "grammar": {
   "topic": "gern(e) haben; mögen (mag, magst, mag); Verben + gern; Fragen mit was",
   "note": "Express likes with <b>Ich … gern</b> (e.g., ich tanze gern) or <b>Ich mag …</b> (mögen is irregular: ich mag, du magst, er mag). Ask: <b>Was machst du gern?</b> / <b>Was ist dein Hobby?</b>",
   "examples": [
    "Ich lese gern.",
    "Magst du Musik?",
    "Was machst du in deiner Freizeit?",
    "Wir gehen gern ins Kino."
   ]
  },
  "episode": [
   {
    "speaker": "Jonas",
    "de": "Hast du heute Abend Zeit? Eine Freundin gibt ein Konzert.",
    "en": "Are you free this evening? A friend is giving a concert.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ein Konzert? Ich höre gern Musik! Um wie viel Uhr?",
    "en": "A concert? I like listening to music! What time?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Um acht. Was machst du sonst so in deiner Freizeit?",
    "en": "At eight. What else do you do in your free time?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich lese gern, ich fotografiere gern und ich koche gern. Und du?",
    "en": "I like reading, I like photographing and I like cooking. And you?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ich spiele Fußball und ich mag Kino. Ich sehe gern Filme.",
    "en": "I play football and I like cinema. I like watching films.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich mag auch Kino! Am Wochenende gehen wir zusammen ins Kino?",
    "en": "I also like cinema! At the weekend let's go to the cinema together?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Super! Ich kenne ein gutes Kino in Kreuzberg.",
    "en": "Great! I know a good cinema in Kreuzberg.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d9_v1",
    "de": "die Freizeit",
    "en": "free time",
    "article": "die",
    "type": "noun",
    "example": "Was machst du in deiner Freizeit?"
   },
   {
    "id": "d9_v2",
    "de": "das Hobby",
    "en": "the hobby",
    "article": "das",
    "type": "noun",
    "example": "Mein Hobby ist Lesen."
   },
   {
    "id": "d9_v3",
    "de": "gern / gerne",
    "en": "gladly / like to",
    "article": "",
    "type": "adv",
    "example": "Ich tanze gern."
   },
   {
    "id": "d9_v4",
    "de": "mögen",
    "en": "to like",
    "article": "",
    "type": "verb",
    "example": "Ich mag Kaffee."
   },
   {
    "id": "d9_v5",
    "de": "lesen",
    "en": "to read",
    "article": "",
    "type": "verb",
    "example": "Ich lese ein Buch."
   },
   {
    "id": "d9_v6",
    "de": "kochen",
    "en": "to cook",
    "article": "",
    "type": "verb",
    "example": "Ich koche gern italienisch."
   },
   {
    "id": "d9_v7",
    "de": "spielen",
    "en": "to play",
    "article": "",
    "type": "verb",
    "example": "Er spielt Fußball."
   },
   {
    "id": "d9_v8",
    "de": "der Fußball",
    "en": "football/soccer",
    "article": "der",
    "type": "noun",
    "example": "Fußball ist beliebt."
   },
   {
    "id": "d9_v9",
    "de": "das Kino",
    "en": "the cinema",
    "article": "das",
    "type": "noun",
    "example": "Wir gehen ins Kino."
   },
   {
    "id": "d9_v10",
    "de": "der Film",
    "en": "the film",
    "article": "der",
    "type": "noun",
    "example": "Der Film ist gut."
   },
   {
    "id": "d9_v11",
    "de": "die Musik",
    "en": "music",
    "article": "die",
    "type": "noun",
    "example": "Ich höre gern Musik."
   },
   {
    "id": "d9_v12",
    "de": "hören",
    "en": "to hear/listen",
    "article": "",
    "type": "verb",
    "example": "Ich höre Radio."
   },
   {
    "id": "d9_v13",
    "de": "zusammen",
    "en": "together",
    "article": "",
    "type": "adv",
    "example": "Wir gehen zusammen."
   },
   {
    "id": "d9_v14",
    "de": "am Wochenende",
    "en": "at the weekend",
    "article": "",
    "type": "phrase",
    "example": "Am Wochenende schlafe ich lang."
   }
  ],
  "chunks": [
   {
    "de": "Was machst du gern?",
    "en": "What do you like doing?"
   },
   {
    "de": "Ich … gern.",
    "en": "I like to …"
   },
   {
    "de": "Ich mag …",
    "en": "I like …"
   },
   {
    "de": "Hast du heute Abend Zeit?",
    "en": "Are you free this evening?"
   },
   {
    "de": "Um wie viel Uhr?",
    "en": "At what time?"
   }
  ],
  "outputTask": {
   "prompt": "Talk about three hobbies of yours and one you'd like to try.",
   "model": "Ich lese gern und ich fotografiere gern. Ich mag Kino. Ich möchte gern tanzen lernen."
  }
 },
 {
  "id": 10,
  "level": "A1.1",
  "act": "Der Arbeitsplatz",
  "title": "Erster Tag im Büro",
  "goal": "Sich im Büro zurechtfinden und nach Dingen fragen.",
  "grammar": {
   "topic": "Trennbare Verben (anrufen, anfangen, vorstellen); wo? wohin?; im Büro-Vokabular",
   "note": "Separable verbs split: prefix goes to the end. <b>anrufen</b> → <b>Ich rufe dich an.</b> <b>vorstellen</b> → <b>Ich stelle mich vor.</b> <b>anfangen</b> → <b>Wir fangen um 9 an.</b> The prefix is stressed.",
   "examples": [
    "Ich rufe dich später an.",
    "Stell dich mal vor!",
    "Wann fangen wir an?",
    "Er stellt mich seinen Kollegen vor."
   ]
  },
  "episode": [
   {
    "speaker": "Leila",
    "de": "Guten Morgen! Hier ist dein Schreibtisch. Der Computer ist schon an.",
    "en": "Good morning! Here's your desk. The computer is already on.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke! Wann fangen wir an?",
    "en": "Thanks! When do we start?",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Um neun. Ich stelle dich gleich dem Team vor.",
    "en": "At nine. I'll introduce you to the team right away.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Super. Wo ist die Toilette? Und wo kann ich Kaffee holen?",
    "en": "Great. Where is the bathroom? And where can I get coffee?",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Die Toilette ist links, die Küche rechts. Ruf mich an, wenn du Hilfe brauchst.",
    "en": "The bathroom is left, the kitchen right. Call me if you need help.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Wie ist deine Durchwahl?",
    "en": "What's your extension number?",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Die 23. Und hier ist dein Ausweis. Willkommen im Team!",
    "en": "23. And here's your ID badge. Welcome to the team!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d10_v1",
    "de": "der Schreibtisch",
    "en": "the desk",
    "article": "der",
    "type": "noun",
    "example": "Mein Schreibtisch ist groß."
   },
   {
    "id": "d10_v2",
    "de": "der Computer",
    "en": "the computer",
    "article": "der",
    "type": "noun",
    "example": "Der Computer ist neu."
   },
   {
    "id": "d10_v3",
    "de": "anrufen",
    "en": "to call (phone)",
    "article": "",
    "type": "verb",
    "example": "Ich rufe dich an."
   },
   {
    "id": "d10_v4",
    "de": "vorstellen",
    "en": "to introduce",
    "article": "",
    "type": "verb",
    "example": "Ich stelle dich vor."
   },
   {
    "id": "d10_v5",
    "de": "anfangen",
    "en": "to begin",
    "article": "",
    "type": "verb",
    "example": "Wir fangen um 9 an."
   },
   {
    "id": "d10_v6",
    "de": "brauchen",
    "en": "to need",
    "article": "",
    "type": "verb",
    "example": "Ich brauche Hilfe."
   },
   {
    "id": "d10_v7",
    "de": "die Hilfe",
    "en": "the help",
    "article": "die",
    "type": "noun",
    "example": "Brauchst du Hilfe?"
   },
   {
    "id": "d10_v8",
    "de": "der Ausweis",
    "en": "the ID badge",
    "article": "der",
    "type": "noun",
    "example": "Hier ist dein Ausweis."
   },
   {
    "id": "d10_v9",
    "de": "die Toilette",
    "en": "the toilet",
    "article": "die",
    "type": "noun",
    "example": "Wo ist die Toilette?"
   },
   {
    "id": "d10_v10",
    "de": "links / rechts",
    "en": "left / right",
    "article": "",
    "type": "adv",
    "example": "Links ist die Küche."
   },
   {
    "id": "d10_v11",
    "de": "holen",
    "en": "to get/fetch",
    "article": "",
    "type": "verb",
    "example": "Ich hole Kaffee."
   },
   {
    "id": "d10_v12",
    "de": "der Kaffee",
    "en": "coffee",
    "article": "der",
    "type": "noun",
    "example": "Einen Kaffee, bitte."
   },
   {
    "id": "d10_v13",
    "de": "gleich",
    "en": "right away / soon",
    "article": "",
    "type": "adv",
    "example": "Ich komme gleich."
   },
   {
    "id": "d10_v14",
    "de": "das Team",
    "en": "the team",
    "article": "das",
    "type": "noun",
    "example": "Willkommen im Team!"
   }
  ],
  "chunks": [
   {
    "de": "Ich rufe dich an.",
    "en": "I'll call you."
   },
   {
    "de": "Ich stelle dich vor.",
    "en": "I'll introduce you."
   },
   {
    "de": "Wann fangen wir an?",
    "en": "When do we start?"
   },
   {
    "de": "Wo ist …?",
    "en": "Where is …?"
   },
   {
    "de": "Brauchst du Hilfe?",
    "en": "Do you need help?"
   }
  ],
  "outputTask": {
   "prompt": "Describe your first day at work/school: who you met, where things are.",
   "model": "Heute ist mein erster Tag im Büro. Mein Schreibtisch ist neben dem Fenster. Meine Kollegin stellt mich dem Team vor. Ich brauche einen Ausweis und einen Schlüssel."
  }
 },
 {
  "id": 11,
  "level": "A1.1",
  "act": "Einkaufen & Lebensmittel",
  "title": "Einkaufen im Supermarkt",
  "goal": "Lebensmittel einkaufen und nach Preisen fragen.",
  "grammar": {
   "topic": "Akkusativ (den/die/das); einkaufen; wie viel kostet?; Zahlen bis 100",
   "note": "The accusative case marks the direct object. Definite articles change: <b>der→den</b>, <b>die→die</b>, <b>ein→einen</b>. <b>Ich kaufe den Apfel.</b> Ask price: <b>Wie viel kostet das?</b>",
   "examples": [
    "Ich kaufe einen Kaffee und ein Brot.",
    "Wie viel kostet die Milch?",
    "Er liest den Brief.",
    "Wir nehmen den Zug."
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "Entschuldigung, wo finde ich die Milch?",
    "en": "Excuse me, where do I find the milk?",
    "audioFile": null
   },
   {
    "speaker": "Verkäufer",
    "de": "Die Milch ist hinten links, neben dem Käse. Brauchen Sie noch etwas?",
    "en": "The milk is at the back left, next to the cheese. Do you need anything else?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, ich brauche noch Brot, Eier und Obst. Wie viel kostet das Brot?",
    "en": "Yes, I still need bread, eggs and fruit. How much is the bread?",
    "audioFile": null
   },
   {
    "speaker": "Verkäufer",
    "de": "Das Brot kostet drei Euro fünfzig.",
    "en": "The bread costs three euros fifty.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Gut, ich nehme es. Und die Äpfel — wie viel kosten sie?",
    "en": "Good, I'll take it. And the apples — how much are they?",
    "audioFile": null
   },
   {
    "speaker": "Verkäufer",
    "de": "Die Äpfel sind zwei Euro das Kilo.",
    "en": "Apples are two euros per kilo.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Perfekt. Ich nehme ein Kilo. Zusammen macht das?",
    "en": "Perfect. I'll take a kilo. How much total?",
    "audioFile": null
   },
   {
    "speaker": "Verkäufer",
    "de": "Das macht acht Euro zwanzig. Zahlen Sie bar oder mit Karte?",
    "en": "That's eight euros twenty. Pay cash or card?",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d11_v1",
    "de": "einkaufen",
    "en": "to shop / buy",
    "article": "",
    "type": "verb",
    "example": "Ich kaufe ein."
   },
   {
    "id": "d11_v2",
    "de": "der Supermarkt",
    "en": "the supermarket",
    "article": "der",
    "type": "noun",
    "example": "Ich gehe zum Supermarkt."
   },
   {
    "id": "d11_v3",
    "de": "die Milch",
    "en": "the milk",
    "article": "die",
    "type": "noun",
    "example": "Die Milch ist kalt."
   },
   {
    "id": "d11_v4",
    "de": "das Brot",
    "en": "the bread",
    "article": "das",
    "type": "noun",
    "example": "Ich kaufe Brot."
   },
   {
    "id": "d11_v5",
    "de": "das Ei",
    "en": "the egg",
    "article": "das",
    "type": "noun",
    "example": "Ich brauche Eier."
   },
   {
    "id": "d11_v6",
    "de": "der Käse",
    "en": "the cheese",
    "article": "der",
    "type": "noun",
    "example": "Der Käse ist lecker."
   },
   {
    "id": "d11_v7",
    "de": "das Obst",
    "en": "the fruit",
    "article": "das",
    "type": "noun",
    "example": "Obst ist gesund."
   },
   {
    "id": "d11_v8",
    "de": "der Apfel",
    "en": "the apple",
    "article": "der",
    "type": "noun",
    "example": "Ich esse einen Apfel."
   },
   {
    "id": "d11_v9",
    "de": "kosten",
    "en": "to cost",
    "article": "",
    "type": "verb",
    "example": "Was kostet das?"
   },
   {
    "id": "d11_v10",
    "de": "der Euro",
    "en": "the euro",
    "article": "der",
    "type": "noun",
    "example": "Es kostet fünf Euro."
   },
   {
    "id": "d11_v11",
    "de": "teuer / billig",
    "en": "expensive / cheap",
    "article": "",
    "type": "adj",
    "example": "Das ist teuer!"
   },
   {
    "id": "d11_v12",
    "de": "nehmen",
    "en": "to take",
    "article": "",
    "type": "verb",
    "example": "Ich nehme das."
   },
   {
    "id": "d11_v13",
    "de": "bezahlen",
    "en": "to pay",
    "article": "",
    "type": "verb",
    "example": "Ich bezahle mit Karte."
   },
   {
    "id": "d11_v14",
    "de": "die Karte",
    "en": "the card",
    "article": "die",
    "type": "noun",
    "example": "Zahlen Sie mit Karte?"
   }
  ],
  "chunks": [
   {
    "de": "Wie viel kostet …?",
    "en": "How much does … cost?"
   },
   {
    "de": "Ich nehme …",
    "en": "I'll take …"
   },
   {
    "de": "Brauchen Sie noch etwas?",
    "en": "Do you need anything else?"
   },
   {
    "de": "Zahlen Sie bar oder mit Karte?",
    "en": "Pay cash or card?"
   },
   {
    "de": "Das macht … Euro.",
    "en": "That's … euros."
   }
  ],
  "outputTask": {
   "prompt": "Role-play a supermarket trip: list 5 items you buy and their (invented) prices.",
   "model": "Ich kaufe Milch, Brot, Eier, Käse und Äpfel. Die Milch kostet einen Euro, das Brot drei Euro. Zusammen macht das zehn Euro. Ich bezahle mit Karte."
  }
 },
 {
  "id": 12,
  "level": "A1.1",
  "act": "Im Restaurant",
  "title": "Im italienischen Restaurant",
  "goal": "Im Restaurant bestellen, essen und bezahlen.",
  "grammar": {
   "topic": "Modalverb möchten (möchte, möchtest, möchte); Akkusativ; bestellen",
   "note": "<b>Möchten</b> (would like) is polite for ordering: <b>Ich hätte gern …</b> / <b>Ich möchte …</b>. Conjugation: ich möchte, du möchtest, er/sie möchte, wir möchten, ihr möchtet, sie/Sie möchten. The waiter asks <b>Was möchten Sie?</b>",
   "examples": [
    "Ich hätte gern ein Wasser.",
    "Was möchten Sie essen?",
    "Wir möchten zwei Kaffee, bitte.",
    "Die Rechnung, bitte!"
   ]
  },
  "episode": [
   {
    "speaker": "Kellner",
    "de": "Guten Abend! Was möchten Sie trinken?",
    "en": "Good evening! What would you like to drink?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich hätte gern ein Mineralwasser, bitte. Und ein Bier für meinen Freund.",
    "en": "I'd like a mineral water, please. And a beer for my friend.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Danke! Und wir möchten die Speisekarte sehen.",
    "en": "Thanks! And we'd like to see the menu.",
    "audioFile": null
   },
   {
    "speaker": "Kellner",
    "de": "Natürlich. Hier ist die Karte.",
    "en": "Of course. Here's the menu.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich möchte die Pizza Margherita. Und du?",
    "en": "I'd like the Pizza Margherita. And you?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ich nehme die Pasta mit Tomatensauce. Schmeckt dir das?",
    "en": "I'll have the pasta with tomato sauce. Do you like that?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, sehr! Zum Nachtisch möchte ich ein Tiramisu.",
    "en": "Yes, very much! For dessert I'd like a tiramisu.",
    "audioFile": null
   },
   {
    "speaker": "Kellner",
    "de": "Und sonst noch etwas? Sonst bringen ich die Rechnung?",
    "en": "Anything else? Otherwise I'll bring the bill?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Die Rechnung, bitte. Wir zahlen getrennt.",
    "en": "The bill, please. We'll pay separately.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d12_v1",
    "de": "das Restaurant",
    "en": "the restaurant",
    "article": "das",
    "type": "noun",
    "example": "Wir gehen ins Restaurant."
   },
   {
    "id": "d12_v2",
    "de": "bestellen",
    "en": "to order",
    "article": "",
    "type": "verb",
    "example": "Wir bestellen Pizza."
   },
   {
    "id": "d12_v3",
    "de": "möchten",
    "en": "would like",
    "article": "",
    "type": "verb",
    "example": "Ich möchte ein Wasser."
   },
   {
    "id": "d12_v4",
    "de": "hätte gern",
    "en": "would like (have)",
    "article": "",
    "type": "phrase",
    "example": "Ich hätte gern ein Bier."
   },
   {
    "id": "d12_v5",
    "de": "die Speisekarte",
    "en": "the menu",
    "article": "die",
    "type": "noun",
    "example": "Die Speisekarte, bitte."
   },
   {
    "id": "d12_v6",
    "de": "trinken",
    "en": "to drink",
    "article": "",
    "type": "verb",
    "example": "Was trinkst du?"
   },
   {
    "id": "d12_v7",
    "de": "essen",
    "en": "to eat",
    "article": "",
    "type": "verb",
    "example": "Ich esse gern Pizza."
   },
   {
    "id": "d12_v8",
    "de": "das Bier",
    "en": "the beer",
    "article": "das",
    "type": "noun",
    "example": "Ein Bier, bitte."
   },
   {
    "id": "d12_v9",
    "de": "das Wasser",
    "en": "the water",
    "article": "das",
    "type": "noun",
    "example": "Ein Wasser, bitte."
   },
   {
    "id": "d12_v10",
    "de": "schmecken",
    "en": "to taste / like (food)",
    "article": "",
    "type": "verb",
    "example": "Schmeckt es dir?"
   },
   {
    "id": "d12_v11",
    "de": "der Nachtisch",
    "en": "the dessert",
    "article": "der",
    "type": "noun",
    "example": "Zum Nachtisch nehme ich Eis."
   },
   {
    "id": "d12_v12",
    "de": "die Rechnung",
    "en": "the bill",
    "article": "die",
    "type": "noun",
    "example": "Die Rechnung, bitte!"
   },
   {
    "id": "d12_v13",
    "de": "bezahlen",
    "en": "to pay",
    "article": "",
    "type": "verb",
    "example": "Wir bezahlen zusammen."
   },
   {
    "id": "d12_v14",
    "de": "getrennt / zusammen",
    "en": "separately / together",
    "article": "",
    "type": "adv",
    "example": "Wir zahlen getrennt."
   }
  ],
  "chunks": [
   {
    "de": "Ich hätte gern … / Ich möchte …",
    "en": "I'd like …"
   },
   {
    "de": "Was möchten Sie trinken/essen?",
    "en": "What would you like to drink/eat?"
   },
   {
    "de": "Die Rechnung, bitte!",
    "en": "The bill, please!"
   },
   {
    "de": "Zahlen Sie getrennt oder zusammen?",
    "en": "Separate or together?"
   },
   {
    "de": "Schmeckt es dir?",
    "en": "Do you like it (food)?"
   }
  ],
  "outputTask": {
   "prompt": "Order a full meal (drink, main, dessert) and ask for the bill in German.",
   "model": "Ich hätte gern ein Wasser. Als Hauptgericht möchte ich die Pizza Margherita. Zum Nachtisch nehme ich ein Tiramisu. Die Rechnung, bitte! Wir zahlen zusammen."
  }
 },
 {
  "id": 13,
  "level": "A1.1",
  "act": "Essen & Trinken — Präferenzen",
  "title": "Was isst du gern?",
  "goal": "Essen bevorzugen und verneinen (kein/nicht).",
  "grammar": {
   "topic": "Negation: kein (before nouns) vs nicht (elsewhere); lieber / am liebsten",
   "note": "Use <b>kein</b> to negate a noun with no/indefinite article: <b>Ich trinke keinen Kaffee.</b> Use <b>nicht</b> for verbs/adjectives/specific nouns: <b>Ich trinke Kaffee nicht gern.</b> Preferences: <b>gern</b> (like), <b>lieber</b> (rather), <b>am liebsten</b> (most of all).",
   "examples": [
    "Ich esse keinen Fisch.",
    "Ich trinke nicht gern Milch.",
    "Ich trinke lieber Tee als Kaffee.",
    "Am liebsten esse ich Pizza."
   ]
  },
  "episode": [
   {
    "speaker": "Leila",
    "de": "Heute Abend machen wir eine Kochabend. Was isst du gern?",
    "en": "Tonight we're doing a cooking evening. What do you like to eat?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich esse gern Pasta und Salat. Aber ich esse keinen Fisch.",
    "en": "I like pasta and salad. But I don't eat fish.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Kein Problem! Ich koche auch keinen Fisch. Isst du Fleisch?",
    "en": "No problem! I don't cook fish either. Do you eat meat?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Nein, ich bin Vegetarierin. Ich esse kein Fleisch und keine Wurst.",
    "en": "No, I'm vegetarian. I don't eat meat or sausage.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Ah, verstehe. Trinkst du Alkohol?",
    "en": "Ah, I see. Do you drink alcohol?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, aber nicht viel. Am liebsten trinke ich Wein. Und du?",
    "en": "Yes, but not much. I like wine most of all. And you?",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Ich trinke lieber Bier. Aber heute trinken wir zusammen etwas!",
    "en": "I'd rather drink beer. But today we'll have something together!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Super! Ich bringe einen spanischen Wein mit.",
    "en": "Great! I'll bring a Spanish wine.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d13_v1",
    "de": "kein / keine / kein",
    "en": "no (not a/any)",
    "article": "",
    "type": "neg",
    "example": "Ich habe kein Auto."
   },
   {
    "id": "d13_v2",
    "de": "nicht",
    "en": "not",
    "article": "",
    "type": "neg",
    "example": "Ich verstehe nicht."
   },
   {
    "id": "d13_v3",
    "de": "essen",
    "en": "to eat",
    "article": "",
    "type": "verb",
    "example": "Was isst du gern?"
   },
   {
    "id": "d13_v4",
    "de": "der Fisch",
    "en": "the fish",
    "article": "der",
    "type": "noun",
    "example": "Ich esse keinen Fisch."
   },
   {
    "id": "d13_v5",
    "de": "das Fleisch",
    "en": "the meat",
    "article": "das",
    "type": "noun",
    "example": "Er isst kein Fleisch."
   },
   {
    "id": "d13_v6",
    "de": "der Salat",
    "en": "the salad",
    "article": "der",
    "type": "noun",
    "example": "Ich mache einen Salat."
   },
   {
    "id": "d13_v7",
    "de": "die Pasta / die Nudeln",
    "en": "pasta / noodles",
    "article": "die",
    "type": "noun",
    "example": "Die Nudeln schmecken gut."
   },
   {
    "id": "d13_v8",
    "de": "vegetarisch",
    "en": "vegetarian",
    "article": "",
    "type": "adj",
    "example": "Ich bin Vegetarierin."
   },
   {
    "id": "d13_v9",
    "de": "der Wein",
    "en": "the wine",
    "article": "der",
    "type": "noun",
    "example": "Ein Glas Wein, bitte."
   },
   {
    "id": "d13_v10",
    "de": "lieber",
    "en": "rather / prefer",
    "article": "",
    "type": "adv",
    "example": "Ich trinke lieber Tee."
   },
   {
    "id": "d13_v11",
    "de": "am liebsten",
    "en": "most of all",
    "article": "",
    "type": "phrase",
    "example": "Am liebsten esse ich Schokolade."
   },
   {
    "id": "d13_v12",
    "de": "viel / wenig",
    "en": "much / little",
    "article": "",
    "type": "adj",
    "example": "Ich trinke nicht viel."
   },
   {
    "id": "d13_v13",
    "de": "mitbringen",
    "en": "to bring along",
    "article": "",
    "type": "verb",
    "example": "Ich bringe Wein mit."
   },
   {
    "id": "d13_v14",
    "de": "kochen",
    "en": "to cook",
    "article": "",
    "type": "verb",
    "example": "Wir kochen zusammen."
   }
  ],
  "chunks": [
   {
    "de": "Ich esse keinen / keine …",
    "en": "I don't eat …"
   },
   {
    "de": "Ich bin Vegetarier/in.",
    "en": "I'm vegetarian."
   },
   {
    "de": "Ich trinke lieber … als …",
    "en": "I'd rather drink … than …"
   },
   {
    "de": "Am liebsten … ich …",
    "en": "What I like most is …"
   },
   {
    "de": "Kein Problem!",
    "en": "No problem!"
   }
  ],
  "outputTask": {
   "prompt": "State your food preferences and allergies, and one thing you'd never eat.",
   "model": "Ich esse gern Pasta und Salat. Ich esse keinen Fisch und kein Fleisch — ich bin Vegetarierin. Ich trinke am liebsten Wein, aber nicht viel."
  }
 },
 {
  "id": 14,
  "level": "A1.1",
  "act": "Die Stadt & Wegbeschreibung",
  "title": "Wie komme ich zum Brandenburger Tor?",
  "goal": "Nach dem Weg fragen und Richtungen angeben.",
  "grammar": {
   "topic": "Präpositionen mit Akkusativ (Richtung: in, auf, an, zu); Wohin? vs Wo?",
   "note": "Ask direction with <b>Wohin?</b> (where to) and location with <b>Wo?</b> (where at). Prepositions of direction take accusative: <b>in den Park</b>, <b>auf die Straße</b>, <b>zum Bahnhof</b> (zu + dem = zum). Give directions: geradeaus, links/rechts abbiegen.",
   "examples": [
    "Wie komme ich zum Bahnhof?",
    "Gehen Sie geradeaus, dann links.",
    "Ich gehe in den Park.",
    "Wir fahren zur Oper."
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "Entschuldigung, wie komme ich zum Brandenburger Tor?",
    "en": "Excuse me, how do I get to the Brandenburg Gate?",
    "audioFile": null
   },
   {
    "speaker": "Passant",
    "de": "Gehen Sie hier geradeaus, dann an der zweiten Kreuzung links abbiegen.",
    "en": "Go straight here, then turn left at the second intersection.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Und dann?",
    "en": "And then?",
    "audioFile": null
   },
   {
    "speaker": "Passant",
    "de": "Dann gehen Sie die Straße entlang, bis zum Park. Das Tor ist rechts vom Park.",
    "en": "Then go along the street, up to the park. The gate is to the right of the park.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ist es weit? Soll ich die U-Bahn nehmen?",
    "en": "Is it far? Should I take the subway?",
    "audioFile": null
   },
   {
    "speaker": "Passant",
    "de": "Nein, es sind nur zehn Minuten zu Fuß. Viel Spaß in Berlin!",
    "en": "No, it's only ten minutes on foot. Enjoy Berlin!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke! Sie sind sehr hilfsbereit.",
    "en": "Thanks! You're very helpful.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d14_v1",
    "de": "der Weg",
    "en": "the way / path",
    "article": "der",
    "type": "noun",
    "example": "Welcher Weg ist richtig?"
   },
   {
    "id": "d14_v2",
    "de": "geradeaus",
    "en": "straight ahead",
    "article": "",
    "type": "adv",
    "example": "Gehen Sie geradeaus."
   },
   {
    "id": "d14_v3",
    "de": "links / rechts abbiegen",
    "en": "to turn left/right",
    "article": "",
    "type": "verb",
    "example": "Biegen Sie links ab."
   },
   {
    "id": "d14_v4",
    "de": "die Kreuzung",
    "en": "the intersection",
    "article": "die",
    "type": "noun",
    "example": "An der Kreuzung rechts."
   },
   {
    "id": "d14_v5",
    "de": "bis zum",
    "en": "up to the",
    "article": "",
    "type": "prep",
    "example": "Bis zum Ende der Straße."
   },
   {
    "id": "d14_v6",
    "de": "entlang",
    "en": "along",
    "article": "",
    "type": "prep",
    "example": "die Straße entlang"
   },
   {
    "id": "d14_v7",
    "de": "weit",
    "en": "far",
    "article": "",
    "type": "adj",
    "example": "Ist es weit?"
   },
   {
    "id": "d14_v8",
    "de": "zu Fuß",
    "en": "on foot",
    "article": "",
    "type": "phrase",
    "example": "Ich gehe zu Fuß."
   },
   {
    "id": "d14_v9",
    "de": "die U-Bahn",
    "en": "the subway",
    "article": "die",
    "type": "noun",
    "example": "Ich nehme die U-Bahn."
   },
   {
    "id": "d14_v10",
    "de": "nehmen",
    "en": "to take",
    "article": "",
    "type": "verb",
    "example": "Ich nehme den Bus."
   },
   {
    "id": "d14_v11",
    "de": "der Park",
    "en": "the park",
    "article": "der",
    "type": "noun",
    "example": "Wir gehen in den Park."
   },
   {
    "id": "d14_v12",
    "de": "das Tor",
    "en": "the gate",
    "article": "das",
    "type": "noun",
    "example": "Das Brandenburger Tor."
   },
   {
    "id": "d14_v13",
    "de": "hilfsbereit",
    "en": "helpful",
    "article": "",
    "type": "adj",
    "example": "Sie sind hilfsbereit."
   },
   {
    "id": "d14_v14",
    "de": "sich befinden",
    "en": "to be located",
    "article": "",
    "type": "verb",
    "example": "Wo befindet sich das Kino?"
   }
  ],
  "chunks": [
   {
    "de": "Wie komme ich zum/zur …?",
    "en": "How do I get to …?"
   },
   {
    "de": "Gehen Sie geradeaus / links / rechts.",
    "en": "Go straight / left / right."
   },
   {
    "de": "An der Kreuzung … abbiegen.",
    "en": "Turn … at the intersection."
   },
   {
    "de": "Es sind … Minuten zu Fuß.",
    "en": "It's … minutes on foot."
   },
   {
    "de": "Soll ich die U-Bahn nehmen?",
    "en": "Should I take the subway?"
   }
  ],
  "outputTask": {
   "prompt": "Give directions from your home to a nearby landmark, in German.",
   "model": "Gehen Sie von meiner Wohnung geradeaus, dann an der ersten Kreuzung rechts. Dann bis zum Park, das Kino ist links vom Park. Es sind fünf Minuten zu Fuß."
  }
 },
 {
  "id": 15,
  "level": "A1.1",
  "act": "Im Hotel",
  "title": "Eine Nacht im Hotel",
  "goal": "Im Hotel ankommen, ein Zimmer buchen und Probleme melden.",
  "grammar": {
   "topic": "möchten + Buchung; es gibt; Präpositionen im Zimmer; haben + Problem",
   "note": "Hotel phrases use formal <b>Sie</b>. <b>Ich habe ein Zimmer reserviert.</b> Complain: <b>Es gibt kein …</b> / <b>Das … funktioniert nicht.</b> Key words: das Zimmer, die Rezeption, der Schlüssel, das Bad, der Schlüssel.",
   "examples": [
    "Ich habe ein Zimmer reserviert.",
    "Haben Sie ein freies Zimmer?",
    "Das WLAN funktioniert nicht.",
    "Um wie viel Uhr ist das Frühstück?"
   ]
  },
  "episode": [
   {
    "speaker": "Rezeption",
    "de": "Guten Abend! Willkommen im Hotel. Haben Sie reserviert?",
    "en": "Good evening! Welcome to the hotel. Do you have a reservation?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, ich habe ein Einzelzimmer auf den Namen López reserviert.",
    "en": "Yes, I reserved a single room under the name López.",
    "audioFile": null
   },
   {
    "speaker": "Rezeption",
    "de": "Bitte sehr. Hier ist Ihr Schlüssel, Zimmer 204. Das Frühstück ist von sieben bis zehn.",
    "en": "Here you go. Here's your key, room 204. Breakfast is from seven to ten.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke. Gibt es WLAN im Zimmer?",
    "en": "Thanks. Is there wifi in the room?",
    "audioFile": null
   },
   {
    "speaker": "Rezeption",
    "de": "Ja, das Passwort steht auf dem Tisch.",
    "en": "Yes, the password is on the table.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "(später) Entschuldigung, das Licht im Bad funktioniert nicht.",
    "en": "(later) Excuse me, the light in the bathroom doesn't work.",
    "audioFile": null
   },
   {
    "speaker": "Rezeption",
    "de": "Oh, Entschuldigung! Ein Techniker kommt sofort. Wir bringen Ihnen eine neue Lampe.",
    "en": "Oh, sorry! A technician comes immediately. We'll bring you a new lamp.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke. Und wo ist der Aufzug?",
    "en": "Thanks. And where is the elevator?",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d15_v1",
    "de": "das Hotel",
    "en": "the hotel",
    "article": "das",
    "type": "noun",
    "example": "Wir schlafen im Hotel."
   },
   {
    "id": "d15_v2",
    "de": "das Zimmer",
    "en": "the room",
    "article": "das",
    "type": "noun",
    "example": "Das Zimmer ist ruhig."
   },
   {
    "id": "d15_v3",
    "de": "reservieren",
    "en": "to reserve",
    "article": "",
    "type": "verb",
    "example": "Ich habe reserviert."
   },
   {
    "id": "d15_v4",
    "de": "die Rezeption",
    "en": "the reception",
    "article": "die",
    "type": "noun",
    "example": "Ich gehe zur Rezeption."
   },
   {
    "id": "d15_v5",
    "de": "der Schlüssel",
    "en": "the key",
    "article": "der",
    "type": "noun",
    "example": "Hier ist Ihr Schlüssel."
   },
   {
    "id": "d15_v6",
    "de": "das Frühstück",
    "en": "the breakfast",
    "article": "das",
    "type": "noun",
    "example": "Das Frühstück ist inklusive."
   },
   {
    "id": "d15_v7",
    "de": "das WLAN",
    "en": "the wifi",
    "article": "das",
    "type": "noun",
    "example": "Das WLAN ist schnell."
   },
   {
    "id": "d15_v8",
    "de": "das Passwort",
    "en": "the password",
    "article": "das",
    "type": "noun",
    "example": "Wie ist das Passwort?"
   },
   {
    "id": "d15_v9",
    "de": "funktionieren",
    "en": "to work/function",
    "article": "",
    "type": "verb",
    "example": "Das Licht funktioniert nicht."
   },
   {
    "id": "d15_v10",
    "de": "der Aufzug",
    "en": "the elevator",
    "article": "der",
    "type": "noun",
    "example": "Wo ist der Aufzug?"
   },
   {
    "id": "d15_v11",
    "de": "das Einzelzimmer",
    "en": "single room",
    "article": "das",
    "type": "noun",
    "example": "Ich habe ein Einzelzimmer."
   },
   {
    "id": "d15_v12",
    "de": "das Doppelzimmer",
    "en": "double room",
    "article": "das",
    "type": "noun",
    "example": "Wir möchten ein Doppelzimmer."
   },
   {
    "id": "d15_v13",
    "de": "inklusive",
    "en": "included",
    "article": "",
    "type": "adj",
    "example": "Frühstück ist inklusive."
   },
   {
    "id": "d15_v14",
    "de": "ruhig",
    "en": "quiet",
    "article": "",
    "type": "adj",
    "example": "Das Zimmer ist ruhig."
   }
  ],
  "chunks": [
   {
    "de": "Ich habe ein Zimmer reserviert.",
    "en": "I have reserved a room."
   },
   {
    "de": "Haben Sie ein freies Zimmer?",
    "en": "Do you have a free room?"
   },
   {
    "de": "Um wie viel Uhr ist das Frühstück?",
    "en": "What time is breakfast?"
   },
   {
    "de": "Das … funktioniert nicht.",
    "en": "The … doesn't work."
   },
   {
    "de": "Wie ist das Passwort?",
    "en": "What's the password?"
   }
  ],
  "outputTask": {
   "prompt": "Check into a hotel: give your name, ask about breakfast and wifi, report one problem.",
   "model": "Guten Abend! Ich habe ein Einzelzimmer reserviert, auf den Namen López. Um wie viel Uhr ist das Frühstück? Leider funktioniert das Licht im Bad nicht."
  }
 },
 {
  "id": 16,
  "level": "A1.1",
  "act": "Verkehrsmittel",
  "title": "Mit der Bahn nach Hamburg",
  "goal": "Verkehrsmittel benutzen und Fahrkarten kaufen.",
  "grammar": {
   "topic": "fahren (fährst, fährt); mit + Dativ (fixed: mit dem Zug); von … nach …",
   "note": "Travel: <b>Ich fahre mit dem Zug/der Bahn/dem Bus/dem Fahrrad.</b> (mit + dative is a fixed pattern — learn it as a chunk). Routes: <b>von Berlin nach Hamburg</b>. <b>fahren</b> is irregular: ich fahre, du fährst, er fährt.",
   "examples": [
    "Ich fahre mit dem Zug nach Hamburg.",
    "Der Zug fährt um 9 Uhr ab.",
    "Von hier bis zum Bahnhof sind es 10 Minuten.",
    "Mit welcher Bahn fahre ich?"
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "Am Wochenende fahre ich nach Hamburg. Hast du Lust mitzukommen?",
    "en": "At the weekend I'm going to Hamburg. Do you want to come along?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Klar! Wie fahren wir hin? Mit dem Auto?",
    "en": "Sure! How do we get there? By car?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Nein, ich fahre lieber mit dem Zug. Es ist entspannter.",
    "en": "No, I'd rather go by train. It's more relaxing.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Gut. Wann fährt der Zug ab? Und wo steigen wir ein?",
    "en": "Good. When does the train leave? And where do we board?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Der Zug fährt um acht Uhr dreißig vom Hauptbahnhof ab, Gleis fünf.",
    "en": "The train leaves at 8:30 from the main station, track five.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Und die Rückfahrt? Wann kommen wir zurück?",
    "en": "And the return? When do we come back?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Sonntag Abend, um sieben Uhr. Ich kaufe die Fahrkarten online.",
    "en": "Sunday evening, at seven. I'll buy the tickets online.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Super! Ich bringe Snacks mit.",
    "en": "Great! I'll bring snacks.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d16_v1",
    "de": "das Verkehrsmittel",
    "en": "means of transport",
    "article": "das",
    "type": "noun",
    "example": "Welches Verkehrsmittel nimmst du?"
   },
   {
    "id": "d16_v2",
    "de": "der Zug / die Bahn",
    "en": "the train",
    "article": "der",
    "type": "noun",
    "example": "Der Zug ist pünktlich."
   },
   {
    "id": "d16_v3",
    "de": "fahren",
    "en": "to drive/travel",
    "article": "",
    "type": "verb",
    "example": "Ich fahre nach Hamburg."
   },
   {
    "id": "d16_v4",
    "de": "abfahren",
    "en": "to depart",
    "article": "",
    "type": "verb",
    "example": "Der Zug fährt um 8 ab."
   },
   {
    "id": "d16_v5",
    "de": "einsteigen",
    "en": "to board/get in",
    "article": "",
    "type": "verb",
    "example": "Wir steigen in Berlin ein."
   },
   {
    "id": "d16_v6",
    "de": "aussteigen",
    "en": "to get off",
    "article": "",
    "type": "verb",
    "example": "Wo steigen wir aus?"
   },
   {
    "id": "d16_v7",
    "de": "der Hauptbahnhof",
    "en": "main station",
    "article": "der",
    "type": "noun",
    "example": "Ich treffe dich am Hauptbahnhof."
   },
   {
    "id": "d16_v8",
    "de": "das Gleis",
    "en": "the platform/track",
    "article": "das",
    "type": "noun",
    "example": "Der Zug fährt von Gleis 5 ab."
   },
   {
    "id": "d16_v9",
    "de": "die Fahrkarte",
    "en": "the ticket",
    "article": "die",
    "type": "noun",
    "example": "Ich kaufe eine Fahrkarte."
   },
   {
    "id": "d16_v10",
    "de": "von … nach …",
    "en": "from … to …",
    "article": "",
    "type": "prep",
    "example": "von Berlin nach Hamburg"
   },
   {
    "id": "d16_v11",
    "de": "zurück",
    "en": "back",
    "article": "",
    "type": "adv",
    "example": "Wann kommst du zurück?"
   },
   {
    "id": "d16_v12",
    "de": "die Rückfahrt",
    "en": "the return trip",
    "article": "die",
    "type": "noun",
    "example": "Die Rückfahrt ist um 19 Uhr."
   },
   {
    "id": "d16_v13",
    "de": "pünktlich",
    "en": "on time",
    "article": "",
    "type": "adj",
    "example": "Die Bahn ist pünktlich."
   },
   {
    "id": "d16_v14",
    "de": "mitkommen",
    "en": "to come along",
    "article": "",
    "type": "verb",
    "example": "Kommst du mit?"
   }
  ],
  "chunks": [
   {
    "de": "Ich fahre mit dem Zug/Bus/Auto.",
    "en": "I travel by train/bus/car."
   },
   {
    "de": "Wann fährt der Zug ab?",
    "en": "When does the train leave?"
   },
   {
    "de": "Von welchem Gleis?",
    "en": "From which platform?"
   },
   {
    "de": "Wo steige ich um/aus?",
    "en": "Where do I change/get off?"
   },
   {
    "de": "Hast du Lust mitzukommen?",
    "en": "Do you want to come along?"
   }
  ],
  "outputTask": {
   "prompt": "Plan a trip: destination, transport, departure time and platform, return time.",
   "model": "Am Wochenende fahre ich mit dem Zug nach Hamburg. Der Zug fährt um 8:30 vom Hauptbahnhof, Gleis 5, ab. Die Rückfahrt ist Sonntag um 19 Uhr."
  }
 },
 {
  "id": 17,
  "level": "A1.1",
  "act": "Tagesablauf & Uhrzeit",
  "title": "Ein normaler Tag",
  "goal": "Den Tagesablauf beschreiben und die Uhrzeit sagen.",
  "grammar": {
   "topic": "Uhrzeit (offiziell vs informell); trennbare Verben des Alltags (aufstehen, frühstücken, losgehen)",
   "note": "Tell time: official <b>Es ist 14 Uhr 30</b>; informal <b>Es ist halb drei</b> (half past two!). Routine verbs: <b>aufstehen</b> (stehe auf), <b>frühstücken</b>, <b>losgehen</b> (gehe los), <b>nach Hause kommen</b>.",
   "examples": [
    "Ich stehe um sieben Uhr auf.",
    "Es ist halb vier (15:30).",
    "Der Unterricht beginnt um neun Uhr.",
    "Ich komme um sechs nach Hause."
   ]
  },
  "episode": [
   {
    "speaker": "Leila",
    "de": "Wie sieht dein normaler Tag aus, Mia? Wann stehst du auf?",
    "en": "What does your normal day look like, Mia? When do you get up?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich stehe um sieben Uhr auf. Dann dusche ich und frühstücke ich um halb acht.",
    "en": "I get up at seven. Then I shower and have breakfast at half past seven.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Wann gehst du zur Arbeit?",
    "en": "When do you go to work?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich gehe um acht Uhr los. Die Arbeit beginnt um neun.",
    "en": "I leave at eight. Work starts at nine.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Und wann ist Feierabend?",
    "en": "And when do you finish work?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Um fünf Uhr nachmittags. Dann gehe ich manchmal ins Fitnessstudio.",
    "en": "At five in the afternoon. Then I sometimes go to the gym.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Wann isst du zu Abend?",
    "en": "When do you have dinner?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Um halb acht. Um elf Uhr gehe ich schlafen. Und du?",
    "en": "At half past seven. At eleven I go to sleep. And you?",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Ich bin eine Nachteule — ich schlafe erst um Mitternacht.",
    "en": "I'm a night owl — I only sleep at midnight.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d17_v1",
    "de": "aufstehen",
    "en": "to get up",
    "article": "",
    "type": "verb",
    "example": "Ich stehe um 7 auf."
   },
   {
    "id": "d17_v2",
    "de": "frühstücken",
    "en": "to have breakfast",
    "article": "",
    "type": "verb",
    "example": "Wir frühstücken um 8."
   },
   {
    "id": "d17_v3",
    "de": "losgehen",
    "en": "to leave/set off",
    "article": "",
    "type": "verb",
    "example": "Ich gehe um 8 los."
   },
   {
    "id": "d17_v4",
    "de": "der Tag",
    "en": "the day",
    "article": "der",
    "type": "noun",
    "example": "Ein normaler Tag."
   },
   {
    "id": "d17_v5",
    "de": "die Uhr",
    "en": "clock / o'clock",
    "article": "die",
    "type": "noun",
    "example": "Wie viel Uhr ist es?"
   },
   {
    "id": "d17_v6",
    "de": "halb acht",
    "en": "half past seven (7:30)",
    "article": "",
    "type": "phrase",
    "example": "Es ist halb acht."
   },
   {
    "id": "d17_v7",
    "de": "viertel nach",
    "en": "quarter past",
    "article": "",
    "type": "phrase",
    "example": "Es ist viertel nach drei."
   },
   {
    "id": "d17_v8",
    "de": "die Arbeit beginnt",
    "en": "work starts",
    "article": "",
    "type": "phrase",
    "example": "Die Arbeit beginnt um 9."
   },
   {
    "id": "d17_v9",
    "de": "der Feierabend",
    "en": "end of work",
    "article": "der",
    "type": "noun",
    "example": "Wann ist Feierabend?"
   },
   {
    "id": "d17_v10",
    "de": "nach Hause kommen",
    "en": "to come home",
    "article": "",
    "type": "phrase",
    "example": "Ich komme um 6 nach Hause."
   },
   {
    "id": "d17_v11",
    "de": "zu Abend essen",
    "en": "to have dinner",
    "article": "",
    "type": "phrase",
    "example": "Wir essen um 7 zu Abend."
   },
   {
    "id": "d17_v12",
    "de": "schlafen gehen",
    "en": "to go to sleep",
    "article": "",
    "type": "phrase",
    "example": "Ich gehe um 11 schlafen."
   },
   {
    "id": "d17_v13",
    "de": "manchmal",
    "en": "sometimes",
    "article": "",
    "type": "adv",
    "example": "Ich gehe manchmal ins Kino."
   },
   {
    "id": "d17_v14",
    "de": "die Nachteule",
    "en": "night owl",
    "article": "die",
    "type": "noun",
    "example": "Er ist eine Nachteule."
   }
  ],
  "chunks": [
   {
    "de": "Wann stehst du auf?",
    "en": "When do you get up?"
   },
   {
    "de": "Ich stehe um … Uhr auf.",
    "en": "I get up at …"
   },
   {
    "de": "Es ist … Uhr / halb …",
    "en": "It's … o'clock / half past …"
   },
   {
    "de": "Wann ist Feierabend?",
    "en": "When do you finish work?"
   },
   {
    "de": "Ich gehe um … schlafen.",
    "en": "I go to sleep at …"
   }
  ],
  "outputTask": {
   "prompt": "Describe your typical day from waking up to going to sleep, with times.",
   "model": "Ich stehe um sieben Uhr auf. Ich frühstücke um halb acht. Die Arbeit beginnt um neun. Um fünf ist Feierabend. Ich esse um halb acht zu Abend und gehe um elf schlafen."
  }
 },
 {
  "id": 18,
  "level": "A1.1",
  "act": "Termine vereinbaren",
  "title": "Hast du am Mittwoch Zeit?",
  "goal": "Einen Termin vereinbaren und absagen.",
  "grammar": {
   "topic": "Wochentage; Uhrzeit für Termine; haben + Zeit; Präpositionen der Zeit (am, um, von…bis)",
   "note": "Days: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag/Sonnabend, Sonntag. Use <b>am</b> + day (am Mittwoch), <b>um</b> + time (um 15 Uhr), <b>von … bis …</b> (from…to). Agree: <b>Das passt.</b> Decline: <b>Da habe ich leider keine Zeit.</b>",
   "examples": [
    "Hast du am Mittwoch Zeit?",
    "Treffen wir uns um 15 Uhr.",
    "Ich habe von 9 bis 17 Uhr Arbeit.",
    "Leider kann ich nicht.",
    "Das passt!"
   ]
  },
  "episode": [
   {
    "speaker": "Herr Vogt",
    "de": "Mia, können wir kurz einen Termin besprechen? Nächste Woche ist ein wichtiges Meeting.",
    "en": "Mia, can we briefly discuss an appointment? Next week there's an important meeting.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Natürlich. An welchem Tag?",
    "en": "Of course. Which day?",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Am Mittwoch oder Donnerstag. Passt dir Mittwoch um 10 Uhr?",
    "en": "Wednesday or Thursday. Does Wednesday at 10am suit you?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Am Mittwoch habe ich von 9 bis 12 Uhr einen Termin beim Bürgeramt. Geht es um 14 Uhr?",
    "en": "On Wednesday I have an appointment at the citizens' office from 9 to 12. Would 2pm work?",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Um 14 Uhr habe ich leider keine Zeit. Donnerstag um 11 Uhr?",
    "en": "At 2pm I unfortunately have no time. Thursday at 11am?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Donnerstag um 11 Uhr passt perfekt. Wo treffen wir uns?",
    "en": "Thursday at 11am fits perfectly. Where do we meet?",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Im Konferenzraum, Raum 3. Ich schicke dir eine Einladung per E-Mail.",
    "en": "In the conference room, room 3. I'll send you an invitation by email.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Super, danke! Ich schreibe es mir in den Kalender.",
    "en": "Great, thanks! I'll write it in my calendar.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d18_v1",
    "de": "der Termin",
    "en": "the appointment",
    "article": "der",
    "type": "noun",
    "example": "Ich habe einen Termin."
   },
   {
    "id": "d18_v2",
    "de": "vereinbaren",
    "en": "to arrange",
    "article": "",
    "type": "verb",
    "example": "Wir vereinbaren einen Termin."
   },
   {
    "id": "d18_v3",
    "de": "Montag bis Sonntag",
    "en": "Monday to Sunday",
    "article": "",
    "type": "noun",
    "example": "Am Montag habe ich frei."
   },
   {
    "id": "d18_v4",
    "de": "am Wochentag",
    "en": "on (day)",
    "article": "",
    "type": "prep",
    "example": "am Mittwoch"
   },
   {
    "id": "d18_v5",
    "de": "um … Uhr",
    "en": "at … o'clock",
    "article": "",
    "type": "prep",
    "example": "um 14 Uhr"
   },
   {
    "id": "d18_v6",
    "de": "von … bis …",
    "en": "from … to …",
    "article": "",
    "type": "prep",
    "example": "von 9 bis 17 Uhr"
   },
   {
    "id": "d18_v7",
    "de": "Zeit haben",
    "en": "to have time",
    "article": "",
    "type": "phrase",
    "example": "Hast du Zeit?"
   },
   {
    "id": "d18_v8",
    "de": "passt (mir)",
    "en": "(it) suits (me)",
    "article": "",
    "type": "verb",
    "example": "Das passt mir."
   },
   {
    "id": "d18_v9",
    "de": "leider",
    "en": "unfortunately",
    "article": "",
    "type": "adv",
    "example": "Leider kann ich nicht."
   },
   {
    "id": "d18_v10",
    "de": "absagen",
    "en": "to cancel",
    "article": "",
    "type": "verb",
    "example": "Ich muss den Termin absagen."
   },
   {
    "id": "d18_v11",
    "de": "treffen",
    "en": "to meet",
    "article": "",
    "type": "verb",
    "example": "Wir treffen uns um 3."
   },
   {
    "id": "d18_v12",
    "de": "das Meeting",
    "en": "the meeting",
    "article": "das",
    "type": "noun",
    "example": "Das Meeting ist wichtig."
   },
   {
    "id": "d18_v13",
    "de": "der Konferenzraum",
    "en": "conference room",
    "article": "der",
    "type": "noun",
    "example": "Im Konferenzraum, Raum 3."
   },
   {
    "id": "d18_v14",
    "de": "die E-Mail",
    "en": "the email",
    "article": "die",
    "type": "noun",
    "example": "Ich schicke eine E-Mail."
   }
  ],
  "chunks": [
   {
    "de": "Hast du am … Zeit?",
    "en": "Are you free on …?"
   },
   {
    "de": "Passt dir … um … Uhr?",
    "en": "Does … at … suit you?"
   },
   {
    "de": "Das passt (perfekt)!",
    "en": "That suits (me perfectly)!"
   },
   {
    "de": "Leider habe ich da keine Zeit.",
    "en": "Unfortunately I have no time then."
   },
   {
    "de": "Wo treffen wir uns?",
    "en": "Where do we meet?"
   }
  ],
  "outputTask": {
   "prompt": "Negotiate an appointment: propose two days/times, decline one, agree on one.",
   "model": "Hast du am Mittwoch um 10 Uhr Zeit? — Leider nein, ich habe dann einen Termin. Geht es am Donnerstag um 11 Uhr? — Ja, das passt perfekt!"
  }
 },
 {
  "id": 19,
  "level": "A1.1",
  "act": "Wetter & Jahreszeiten",
  "title": "Heute regnet es!",
  "goal": "Über das Wetter und die Jahreszeiten sprechen.",
  "grammar": {
   "topic": "es ist / es gibt Wetter; Adjektive (kalt, warm, sonnig, regnerisch); Jahreszeiten",
   "note": "Weather uses <b>es</b>: <b>Es regnet.</b> (it rains), <b>Es ist kalt/warm/sonnig.</b>, <b>Es gibt Schnee.</b> Seasons: der Frühling, der Sommer, der Herbst, der Winter. In + season: <b>im Sommer</b> (in + dem = im).",
   "examples": [
    "Heute regnet es.",
    "Im Sommer ist es warm.",
    "Wie ist das Wetter?",
    "Es schneit im Winter."
   ]
  },
  "episode": [
   {
    "speaker": "Jonas",
    "de": "Zieh dich warm an! Heute regnet es und es ist nur acht Grad.",
    "en": "Dress warm! Today it's raining and it's only eight degrees.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Acht Grad? Im September? In Madrid ist es noch warm!",
    "en": "Eight degrees? In September? In Madrid it's still warm!",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ja, in Deutschland ist der Herbst oft kalt und nass. Magst du Regen?",
    "en": "Yes, in Germany autumn is often cold and wet. Do you like rain?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Nicht so gern. Ich liebe Sonne und Wärme. Ich mag den Sommer am liebsten.",
    "en": "Not really. I love sun and warmth. I like summer most of all.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ich mag den Frühling. Dann blühen die Bäume und es wird langsam warm.",
    "en": "I like spring. Then the trees bloom and it slowly gets warm.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Und Winter? Schnee mag ich! Ich möchte mal Schnee sehen.",
    "en": "And winter? I like snow! I'd like to see snow sometime.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Im Dezember schneit es oft. Dann gehen wir Schlittschuhlaufen!",
    "en": "In December it often snows. Then we'll go ice skating!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Das klingt gut! Aber jetzt hole ich erst mal meinen Regenschirm.",
    "en": "That sounds good! But first I'll get my umbrella.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d19_v1",
    "de": "das Wetter",
    "en": "the weather",
    "article": "das",
    "type": "noun",
    "example": "Wie ist das Wetter?"
   },
   {
    "id": "d19_v2",
    "de": "regnen",
    "en": "to rain",
    "article": "",
    "type": "verb",
    "example": "Es regnet."
   },
   {
    "id": "d19_v3",
    "de": "schneien",
    "en": "to snow",
    "article": "",
    "type": "verb",
    "example": "Im Winter schneit es."
   },
   {
    "id": "d19_v4",
    "de": "sonnig",
    "en": "sunny",
    "article": "",
    "type": "adj",
    "example": "Heute ist es sonnig."
   },
   {
    "id": "d19_v5",
    "de": "kalt / warm",
    "en": "cold / warm",
    "article": "",
    "type": "adj",
    "example": "Es ist kalt."
   },
   {
    "id": "d19_v6",
    "de": "der Frühling",
    "en": "spring",
    "article": "der",
    "type": "noun",
    "example": "Im Frühling blühen die Blumen."
   },
   {
    "id": "d19_v7",
    "de": "der Sommer",
    "en": "summer",
    "article": "der",
    "type": "noun",
    "example": "Der Sommer ist heiß."
   },
   {
    "id": "d19_v8",
    "de": "der Herbst",
    "en": "autumn",
    "article": "der",
    "type": "noun",
    "example": "Der Herbst ist nass."
   },
   {
    "id": "d19_v9",
    "de": "der Winter",
    "en": "winter",
    "article": "der",
    "type": "noun",
    "example": "Im Winter schneit es."
   },
   {
    "id": "d19_v10",
    "de": "der Regen",
    "en": "the rain",
    "article": "der",
    "type": "noun",
    "example": "Ich mag keinen Regen."
   },
   {
    "id": "d19_v11",
    "de": "der Regenschirm",
    "en": "the umbrella",
    "article": "der",
    "type": "noun",
    "example": "Ich hole meinen Regenschirm."
   },
   {
    "id": "d19_v12",
    "de": "die Temperatur",
    "en": "the temperature",
    "article": "die",
    "type": "noun",
    "example": "Die Temperatur ist 8 Grad."
   },
   {
    "id": "d19_v13",
    "de": "Grad",
    "en": "degrees",
    "article": "",
    "type": "noun",
    "example": "Es hat 25 Grad."
   },
   {
    "id": "d19_v14",
    "de": "klingen",
    "en": "to sound",
    "article": "",
    "type": "verb",
    "example": "Das klingt gut!"
   }
  ],
  "chunks": [
   {
    "de": "Wie ist das Wetter heute?",
    "en": "How's the weather today?"
   },
   {
    "de": "Es regnet/schneit/scheint die Sonne.",
    "en": "It's raining/snowing/sunny."
   },
   {
    "de": "Im … ist es …",
    "en": "In … it is …"
   },
   {
    "de": "Ich mag den … am liebsten.",
    "en": "I like … most of all."
   },
   {
    "de": "Zieh dich warm an!",
    "en": "Dress warm!"
   }
  ],
  "outputTask": {
   "prompt": "Describe today's weather, your favorite season, and why.",
   "model": "Heute regnet es und es ist kalt, nur 8 Grad. Ich mag den Sommer am liebsten, weil es warm ist und die Sonne scheint. Im Winter schneit es oft in Berlin."
  }
 },
 {
  "id": 20,
  "level": "A1.1",
  "act": "Am Computer & Internet",
  "title": "Ich schicke dir eine E-Mail",
  "goal": "Über Computer und Internet sprechen, digital kommunizieren.",
  "grammar": {
   "topic": "Trennbare Verben (anmelden, ausschalten, herunterladen); Computer-Vokabular; senden/schicken",
   "note": "Digital separable verbs: <b>anmelden</b> → ich melde mich an (log in), <b>ausschalten</b> → schalte aus, <b>herunterladen</b> → lade herunter. Communication: <b>Ich schicke/sende dir eine E-Mail/Nachricht.</b>",
   "examples": [
    "Ich schicke dir eine E-Mail.",
    "Ich melde mich später an.",
    "Laden Sie die Datei herunter.",
    "Schalten Sie den Computer aus."
   ]
  },
  "episode": [
   {
    "speaker": "Tom",
    "de": "Hi Mia, ich bin Tom, der Programmierer. Brauchst du Hilfe mit dem Computer?",
    "en": "Hi Mia, I'm Tom, the programmer. Do you need help with the computer?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, danke! Ich kann mich nicht anmelden. Das Passwort funktioniert nicht.",
    "en": "Yes, thanks! I can't log in. The password doesn't work.",
    "audioFile": null
   },
   {
    "speaker": "Tom",
    "de": "Kein Problem. Ich setze das Passwort zurück. Dann schicke ich dir eine E-Mail.",
    "en": "No problem. I'll reset the password. Then I'll send you an email.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Super! Und wie verbinde ich mich mit dem WLAN?",
    "en": "Great! And how do I connect to the wifi?",
    "audioFile": null
   },
   {
    "speaker": "Tom",
    "de": "Wähle das Netzwerk 'Office-Gast' aus. Das Passwort steht auf dem Zettel.",
    "en": "Select the network 'Office-Guest'. The password is on the note.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke! Kann ich Dateien auf den Server herunterladen?",
    "en": "Thanks! Can I download files onto the server?",
    "audioFile": null
   },
   {
    "speaker": "Tom",
    "de": "Ja, aber speichere alles im Ordner 'Projekte'. Am Ende schaltest du den Computer aus.",
    "en": "Yes, but save everything in the 'Projects' folder. At the end turn off the computer.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Alles klar! Du bist eine große Hilfe.",
    "en": "Got it! You're a big help.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d20_v1",
    "de": "der Computer",
    "en": "the computer",
    "article": "der",
    "type": "noun",
    "example": "Der Computer ist neu."
   },
   {
    "id": "d20_v2",
    "de": "sich anmelden",
    "en": "to log in",
    "article": "",
    "type": "verb",
    "example": "Ich melde mich an."
   },
   {
    "id": "d20_v3",
    "de": "ausschalten",
    "en": "to turn off",
    "article": "",
    "type": "verb",
    "example": "Schalte den Computer aus."
   },
   {
    "id": "d20_v4",
    "de": "herunterladen",
    "en": "to download",
    "article": "",
    "type": "verb",
    "example": "Ich lade die Datei herunter."
   },
   {
    "id": "d20_v5",
    "de": "die E-Mail schicken",
    "en": "to send an email",
    "article": "",
    "type": "phrase",
    "example": "Ich schicke dir eine E-Mail."
   },
   {
    "id": "d20_v6",
    "de": "das Passwort",
    "en": "the password",
    "article": "das",
    "type": "noun",
    "example": "Ich habe mein Passwort vergessen."
   },
   {
    "id": "d20_v7",
    "de": "das WLAN / Netzwerk",
    "en": "wifi / network",
    "article": "das",
    "type": "noun",
    "example": "Verbinde dich mit dem WLAN."
   },
   {
    "id": "d20_v8",
    "de": "die Datei",
    "en": "the file",
    "article": "die",
    "type": "noun",
    "example": "Die Datei ist groß."
   },
   {
    "id": "d20_v9",
    "de": "der Ordner",
    "en": "the folder",
    "article": "der",
    "type": "noun",
    "example": "Speichere es im Ordner."
   },
   {
    "id": "d20_v10",
    "de": "speichern",
    "en": "to save",
    "article": "",
    "type": "verb",
    "example": "Speichere das Dokument!"
   },
   {
    "id": "d20_v11",
    "de": "zurücksetzen",
    "en": "to reset",
    "article": "",
    "type": "verb",
    "example": "Ich setze das Passwort zurück."
   },
   {
    "id": "d20_v12",
    "de": "senden / schicken",
    "en": "to send",
    "article": "",
    "type": "verb",
    "example": "Ich sende dir eine Nachricht."
   },
   {
    "id": "d20_v13",
    "de": "die Nachricht",
    "en": "the message",
    "article": "die",
    "type": "noun",
    "example": "Ich habe eine Nachricht bekommen."
   },
   {
    "id": "d20_v14",
    "de": "helfen",
    "en": "to help",
    "article": "",
    "type": "verb",
    "example": "Kannst du mir helfen?"
   }
  ],
  "chunks": [
   {
    "de": "Ich schicke/sende dir eine E-Mail.",
    "en": "I'll send you an email."
   },
   {
    "de": "Ich kann mich nicht anmelden.",
    "en": "I can't log in."
   },
   {
    "de": "Wie verbinde ich mich mit dem WLAN?",
    "en": "How do I connect to wifi?"
   },
   {
    "de": "Speichern Sie die Datei.",
    "en": "Save the file."
   },
   {
    "de": "Schalten Sie den Computer aus.",
    "en": "Turn off the computer."
   }
  ],
  "outputTask": {
   "prompt": "Explain a small tech problem and how someone helped you fix it.",
   "model": "Ich kann mich nicht am Computer anmelden — das Passwort funktioniert nicht. Tom setzt das Passwort zurück und schickt mir eine E-Mail. Dann verbinde ich mich mit dem WLAN."
  }
 },
 {
  "id": 21,
  "level": "A1.1",
  "act": "Stress & Entschuldigungen",
  "title": "Ich komme zu spät!",
  "goal": "Sich entschuldigen und Verspätung erklären.",
  "grammar": {
   "topic": "müssen (muss, musst, muss); weil (Ursache, Nebensatz — Verb am Ende); Entschuldigung",
   "note": "<b>müssen</b> (must/have to): ich muss, du musst, er muss. <b>weil</b> (because) starts a subordinate clause — the verb goes to the end: <b>Ich komme zu spät, weil der Zug Verspätung hat.</b> Apologize: <b>Entschuldigung!</b> / <b>Es tut mir leid!</b>",
   "examples": [
    "Es tut mir leid, ich komme zu spät.",
    "Ich muss arbeiten.",
    "Ich bleibe zu Hause, weil ich krank bin.",
    "Entschuldigung, dass ich zu spät komme!"
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "(im Büro, atmet schwer) Entschuldigung! Es tut mir leid, dass ich zu spät komme!",
    "en": "(in the office, breathing hard) Sorry! I'm sorry I'm late!",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Kein Problem. Ist alles in Ordnung?",
    "en": "No problem. Is everything okay?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ja, aber die U-Bahn hatte Verspätung. Ich musste warten.",
    "en": "Yes, but the subway was delayed. I had to wait.",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Das passiert. In Berlin muss man immer etwas Zeit einplanen.",
    "en": "That happens. In Berlin you always have to plan in some time.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Stimmt. Morgen muss ich früher losgehen.",
    "en": "Right. Tomorrow I have to leave earlier.",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Kein Stress. Aber du musst die Präsentation heute noch fertig machen.",
    "en": "No stress. But you have to finish the presentation today.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Kein Problem, ich mache sie in der Mittagspause fertig.",
    "en": "No problem, I'll finish it during the lunch break.",
    "audioFile": null
   },
   {
    "speaker": "Herr Vogt",
    "de": "Gut. Und entschuldigen Sie sich bitte bei dem Kunden — er wartet schon.",
    "en": "Good. And please apologize to the client — he's already waiting.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d21_v1",
    "de": "sich entschuldigen",
    "en": "to apologize",
    "article": "",
    "type": "verb",
    "example": "Ich entschuldige mich."
   },
   {
    "id": "d21_v2",
    "de": "zu spät",
    "en": "too late",
    "article": "",
    "type": "phrase",
    "example": "Ich komme zu spät."
   },
   {
    "id": "d21_v3",
    "de": "Es tut mir leid!",
    "en": "I'm sorry!",
    "article": "",
    "type": "phrase",
    "example": "Es tut mir leid!"
   },
   {
    "id": "d21_v4",
    "de": "müssen",
    "en": "to have to / must",
    "article": "",
    "type": "verb",
    "example": "Ich muss gehen."
   },
   {
    "id": "d21_v5",
    "de": "weil",
    "en": "because",
    "article": "",
    "type": "conj",
    "example": "Ich bleibe zu Hause, weil ich krank bin."
   },
   {
    "id": "d21_v6",
    "de": "die Verspätung",
    "en": "the delay",
    "article": "die",
    "type": "noun",
    "example": "Der Zug hat Verspätung."
   },
   {
    "id": "d21_v7",
    "de": "passieren",
    "en": "to happen",
    "article": "",
    "type": "verb",
    "example": "Das passiert."
   },
   {
    "id": "d21_v8",
    "de": "früher",
    "en": "earlier",
    "article": "",
    "type": "adv",
    "example": "Ich muss früher losgehen."
   },
   {
    "id": "d21_v9",
    "de": "der Stress",
    "en": "the stress",
    "article": "der",
    "type": "noun",
    "example": "Kein Stress!"
   },
   {
    "id": "d21_v10",
    "de": "fertig machen",
    "en": "to finish",
    "article": "",
    "type": "verb",
    "example": "Ich mache die Präsentation fertig."
   },
   {
    "id": "d21_v11",
    "de": "die Präsentation",
    "en": "the presentation",
    "article": "die",
    "type": "noun",
    "example": "Die Präsentation ist gut."
   },
   {
    "id": "d21_v12",
    "de": "die Mittagspause",
    "en": "lunch break",
    "article": "die",
    "type": "noun",
    "example": "In der Mittagspause esse ich."
   },
   {
    "id": "d21_v13",
    "de": "warten",
    "en": "to wait",
    "article": "",
    "type": "verb",
    "example": "Ich muss warten."
   },
   {
    "id": "d21_v14",
    "de": "der Kunde",
    "en": "the customer/client",
    "article": "der",
    "type": "noun",
    "example": "Der Kunde wartet."
   }
  ],
  "chunks": [
   {
    "de": "Entschuldigung! / Es tut mir leid!",
    "en": "Sorry! / I'm sorry!"
   },
   {
    "de": "Ich komme zu spät, weil …",
    "en": "I'm late because …"
   },
   {
    "de": "Ich muss …",
    "en": "I have to …"
   },
   {
    "de": "Das passiert.",
    "en": "That happens."
   },
   {
    "de": "Kein Problem / kein Stress.",
    "en": "No problem / no stress."
   }
  ],
  "outputTask": {
   "prompt": "Apologize for being late, give a reason with 'weil', and promise to do better.",
   "model": "Entschuldigung, ich komme zu spät! Ich musste warten, weil die U-Bahn Verspätung hatte. Morgen gehe ich früher los. Es tut mir leid!"
  }
 },
 {
  "id": 22,
  "level": "A1.1",
  "act": "Gesundheit & Arzt",
  "title": "Ich habe Kopfschmerzen",
  "goal": "Über Beschwerden sprechen und zum Arzt gehen.",
  "grammar": {
   "topic": "Ich habe … (Schmerzen); weh tun; müssen; Körperteile; Rat geben",
   "note": "Describe ailments with <b>Ich habe Kopfschmerzen/Halsschmerzen/Fieber.</b> or <b>Mir tut der Kopf weh.</b> (weh tun: es tut mir weh). Advice: <b>Du solltest …</b> (you should — sollen). <b>Gehen Sie zum Arzt!</b>",
   "examples": [
    "Ich habe Kopfschmerzen.",
    "Mir tut der Bauch weh.",
    "Du solltest zum Arzt gehen.",
    "Ich habe Fieber."
   ]
  },
  "episode": [
   {
    "speaker": "Leila",
    "de": "Du siehst blass aus, Mia. Ist alles in Ordnung?",
    "en": "You look pale, Mia. Is everything okay?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Mir ist schlecht. Ich habe Kopfschmerzen und Halsschmerzen.",
    "en": "I feel sick. I have a headache and a sore throat.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Hast du Fieber?",
    "en": "Do you have a fever?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich glaube schon. Mir tut auch der Hals weh, wenn ich schlucke.",
    "en": "I think so. My throat also hurts when I swallow.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Du solltest nach Hause gehen und dich ausruhen. Trink viel Tee!",
    "en": "You should go home and rest. Drink lots of tea!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Du hast recht. Ich rufe beim Arzt an und morgen gehe ich hin.",
    "en": "You're right. I'll call the doctor and tomorrow I'll go.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Gute Idee. Ich schreibe dich krank. Melde dich, wenn es dir besser geht!",
    "en": "Good idea. I'll report you sick. Get in touch when you feel better!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke, du bist die Beste!",
    "en": "Thanks, you're the best!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d22_v1",
    "de": "gesund",
    "en": "healthy",
    "article": "",
    "type": "adj",
    "example": "Ich bin gesund."
   },
   {
    "id": "d22_v2",
    "de": "der Schmerz",
    "en": "the pain",
    "article": "der",
    "type": "noun",
    "example": "Ich habe Schmerzen."
   },
   {
    "id": "d22_v3",
    "de": "Kopfschmerzen haben",
    "en": "to have a headache",
    "article": "",
    "type": "phrase",
    "example": "Ich habe Kopfschmerzen."
   },
   {
    "id": "d22_v4",
    "de": "Fieber haben",
    "en": "to have a fever",
    "article": "",
    "type": "phrase",
    "example": "Das Kind hat Fieber."
   },
   {
    "id": "d22_v5",
    "de": "weh tun",
    "en": "to hurt",
    "article": "",
    "type": "verb",
    "example": "Mir tut der Kopf weh."
   },
   {
    "id": "d22_v6",
    "de": "der Hals",
    "en": "the throat",
    "article": "der",
    "type": "noun",
    "example": "Ich habe Halsschmerzen."
   },
   {
    "id": "d22_v7",
    "de": "der Arzt / die Ärztin",
    "en": "the doctor",
    "article": "der",
    "type": "noun",
    "example": "Ich gehe zum Arzt."
   },
   {
    "id": "d22_v8",
    "de": "sich ausruhen",
    "en": "to rest",
    "article": "",
    "type": "verb",
    "example": "Ruhe dich aus!"
   },
   {
    "id": "d22_v9",
    "de": "sollen",
    "en": "should / ought to",
    "article": "",
    "type": "verb",
    "example": "Du solltest Tee trinken."
   },
   {
    "id": "d22_v10",
    "de": "trinken",
    "en": "to drink",
    "article": "",
    "type": "verb",
    "example": "Trink viel Wasser!"
   },
   {
    "id": "d22_v11",
    "de": "der Tee",
    "en": "the tea",
    "article": "der",
    "type": "noun",
    "example": "Eine Tasse Tee, bitte."
   },
   {
    "id": "d22_v12",
    "de": "krank",
    "en": "sick",
    "article": "",
    "type": "adj",
    "example": "Ich bin krank."
   },
   {
    "id": "d22_v13",
    "de": "krank schreiben",
    "en": "to report sick (doctor's note)",
    "article": "",
    "type": "phrase",
    "example": "Der Arzt schreibt mich krank."
   },
   {
    "id": "d22_v14",
    "de": "es geht mir besser",
    "en": "I feel better",
    "article": "",
    "type": "phrase",
    "example": "Es geht mir schon besser."
   }
  ],
  "chunks": [
   {
    "de": "Ich habe Kopfschmerzen / Fieber.",
    "en": "I have a headache / fever."
   },
   {
    "de": "Mir tut … weh.",
    "en": "My … hurts."
   },
   {
    "de": "Du solltest zum Arzt gehen.",
    "en": "You should go to the doctor."
   },
   {
    "de": "Gehen Sie zum Arzt!",
    "en": "Go to the doctor!"
   },
   {
    "de": "Es geht mir besser / schlechter.",
    "en": "I feel better / worse."
   }
  ],
  "outputTask": {
   "prompt": "Describe an illness (symptoms) and the advice a friend/doctor gave you.",
   "model": "Ich habe Kopfschmerzen und Halsschmerzen, und ich glaube, ich habe Fieber. Meine Freundin sagt: Du solltest nach Hause gehen, viel Tee trinken und dich ausruhen. Morgen gehe ich zum Arzt."
  }
 },
 {
  "id": 23,
  "level": "A1.1",
  "act": "Pläne fürs Wochenende",
  "title": "Was machst du am Wochenende?",
  "goal": "Zukünftige Pläne mit Präsens und wollen ausdrücken.",
  "grammar": {
   "topic": "wollen (will, willst, will); Zukunft mit Präsens + Zeitadverb; am Wochenende",
   "note": "German often uses present tense for future plans with a time word: <b>Morgen gehe ich ins Kino.</b> <b>wollen</b> (want to): ich will, du willst, er will, wir wollen. Ask plans: <b>Was hast du am Wochenende vor?</b> (vorhaben).",
   "examples": [
    "Am Wochenende will ich schlafen.",
    "Nächste Woche fahre ich nach Hamburg.",
    "Was hast du vor?",
    "Wir wollen eine Party machen."
   ]
  },
  "episode": [
   {
    "speaker": "Jonas",
    "de": "Was hast du am Wochenende vor, Mia?",
    "en": "What are your plans for the weekend, Mia?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich will am Samstag schlafen! Die Woche war anstrengend.",
    "en": "I want to sleep on Saturday! The week was exhausting.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Verständlich. Am Sonntag wollen wir eine Grillparty im Park machen. Kommst du?",
    "en": "Understandable. On Sunday we want to have a barbecue party in the park. Are you coming?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Eine Grillparty? Ich bin dabei! Was soll ich mitbringen?",
    "en": "A barbecue party? I'm in! What should I bring?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Bring Salat oder Getränke mit. Wir haben schon Fleisch und Brot.",
    "en": "Bring salad or drinks. We already have meat and bread.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich bringe einen spanischen Salat und Wein mit. Wann geht es los?",
    "en": "I'll bring a Spanish salad and wine. When does it start?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Um drei Uhr nachmittags, im Tiergarten. Ich schicke dir die Adresse.",
    "en": "At three in the afternoon, in the Tiergarten. I'll send you the address.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Perfekt! Ich freue mich schon.",
    "en": "Perfect! I'm already looking forward to it.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d23_v1",
    "de": "der Plan",
    "en": "the plan",
    "article": "der",
    "type": "noun",
    "example": "Was ist dein Plan?"
   },
   {
    "id": "d23_v2",
    "de": "vorhaben",
    "en": "to plan/intend",
    "article": "",
    "type": "verb",
    "example": "Was hast du vor?"
   },
   {
    "id": "d23_v3",
    "de": "wollen",
    "en": "to want to",
    "article": "",
    "type": "verb",
    "example": "Ich will schlafen."
   },
   {
    "id": "d23_v4",
    "de": "am Wochenende",
    "en": "at the weekend",
    "article": "",
    "type": "phrase",
    "example": "Am Wochenende habe ich frei."
   },
   {
    "id": "d23_v5",
    "de": "morgen / nächste Woche",
    "en": "tomorrow / next week",
    "article": "",
    "type": "adv",
    "example": "Morgen gehe ich schwimmen."
   },
   {
    "id": "d23_v6",
    "de": "die Party",
    "en": "the party",
    "article": "die",
    "type": "noun",
    "example": "Wir machen eine Party."
   },
   {
    "id": "d23_v7",
    "de": "mitbringen",
    "en": "to bring along",
    "article": "",
    "type": "verb",
    "example": "Was soll ich mitbringen?"
   },
   {
    "id": "d23_v8",
    "de": "das Getränk",
    "en": "the drink",
    "article": "das",
    "type": "noun",
    "example": "Bring Getränke mit!"
   },
   {
    "id": "d23_v9",
    "de": "der Salat",
    "en": "the salad",
    "article": "der",
    "type": "noun",
    "example": "Ich mache einen Salat."
   },
   {
    "id": "d23_v10",
    "de": "sich freuen auf",
    "en": "to look forward to",
    "article": "",
    "type": "verb",
    "example": "Ich freue mich auf die Party."
   },
   {
    "id": "d23_v11",
    "de": "anstrengend",
    "en": "exhausting",
    "article": "",
    "type": "adj",
    "example": "Die Arbeit ist anstrengend."
   },
   {
    "id": "d23_v12",
    "de": "die Adresse",
    "en": "the address",
    "article": "die",
    "type": "noun",
    "example": "Wie ist die Adresse?"
   },
   {
    "id": "d23_v13",
    "de": "losgehen",
    "en": "to start",
    "article": "",
    "type": "verb",
    "example": "Wann geht es los?"
   },
   {
    "id": "d23_v14",
    "de": "dabei sein",
    "en": "to be in/joining",
    "article": "",
    "type": "phrase",
    "example": "Ich bin dabei!"
   }
  ],
  "chunks": [
   {
    "de": "Was hast du am Wochenende vor?",
    "en": "What are your weekend plans?"
   },
   {
    "de": "Ich will …",
    "en": "I want to …"
   },
   {
    "de": "Kommst du? — Ich bin dabei!",
    "en": "Are you coming? — I'm in!"
   },
   {
    "de": "Was soll ich mitbringen?",
    "en": "What should I bring?"
   },
   {
    "de": "Ich freue mich schon.",
    "en": "I'm already looking forward to it."
   }
  ],
  "outputTask": {
   "prompt": "Describe your weekend plans in detail (days, times, who with).",
   "model": "Am Samstag will ich schlafen und dann einkaufen. Am Sonntag gehe ich um 15 Uhr zu einer Grillparty im Park. Ich bringe Salat und Wein mit. Ich freue mich schon!"
  }
 },
 {
  "id": 24,
  "level": "A1.1",
  "act": "Einladung & Party",
  "title": "Du bist eingeladen!",
  "goal": "Eine Einladung annehmen/ablehnen und auf einer Party reden.",
  "grammar": {
   "topic": "einladen (lädt ein); mitkommen; dürfen; Präpositionen bei jemandem",
   "note": "<b>einladen</b> (invite): ich lade dich ein. Accept: <b>Ja, gerne! Ich komme.</b> Decline politely: <b>Danke für die Einladung, aber ich kann leider nicht.</b> At a party: small talk with was, wer, woher, was machst du beruflich.",
   "examples": [
    "Ich lade dich zu meiner Party ein.",
    "Darf ich einen Freund mitbringen?",
    "Danke für die Einladung!",
    "Leider kann ich nicht, ich habe keine Zeit."
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "Hallo Jonas! Ich lade dich nächste Woche zu meiner Geburtstagsparty ein.",
    "en": "Hi Jonas! I invite you to my birthday party next week.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Oh, vielen Dank! Wann ist die Party?",
    "en": "Oh, thank you very much! When is the party?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Am Freitag ab 20 Uhr, bei mir zu Hause. Darfst du etwas mitbringen?",
    "en": "On Friday from 8pm, at my place. You may bring something?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Klar! Darf ich einen Freund mitbringen?",
    "en": "Sure! May I bring a friend?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Natürlich! Jeder ist willkommen. Bring einfach Musik mit.",
    "en": "Of course! Everyone is welcome. Just bring music.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Super. Ach, ich muss dich leider an etwas erinnern: Du musst noch die Musik vorbereiten.",
    "en": "Great. Oh, I unfortunately have to remind you of something: you still have to prepare the music.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Stimmt! Danke für den Hinweis. Ich mache das heute Abend.",
    "en": "Right! Thanks for the hint. I'll do that this evening.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Bis Freitag! Ich freue mich.",
    "en": "See you Friday! I'm looking forward to it.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d24_v1",
    "de": "die Einladung",
    "en": "the invitation",
    "article": "die",
    "type": "noun",
    "example": "Danke für die Einladung!"
   },
   {
    "id": "d24_v2",
    "de": "einladen",
    "en": "to invite",
    "article": "",
    "type": "verb",
    "example": "Ich lade dich ein."
   },
   {
    "id": "d24_v3",
    "de": "annehmen / ablehnen",
    "en": "to accept / decline",
    "article": "",
    "type": "verb",
    "example": "Ich nehme die Einladung an."
   },
   {
    "id": "d24_v4",
    "de": "der Geburtstag",
    "en": "the birthday",
    "article": "der",
    "type": "noun",
    "example": "Heute ist mein Geburtstag."
   },
   {
    "id": "d24_v5",
    "de": "die Party",
    "en": "the party",
    "article": "die",
    "type": "noun",
    "example": "Die Party ist toll."
   },
   {
    "id": "d24_v6",
    "de": "mitbringen",
    "en": "to bring along",
    "article": "",
    "type": "verb",
    "example": "Was bringst du mit?"
   },
   {
    "id": "d24_v7",
    "de": "dürfen",
    "en": "may / to be allowed",
    "article": "",
    "type": "verb",
    "example": "Darf ich hereinkommen?"
   },
   {
    "id": "d24_v8",
    "de": "natürlich",
    "en": "of course",
    "article": "",
    "type": "adv",
    "example": "Natürlich kannst du kommen."
   },
   {
    "id": "d24_v9",
    "de": "jeder / jede / jedes",
    "en": "everyone / each",
    "article": "",
    "type": "pron",
    "example": "Jeder ist willkommen."
   },
   {
    "id": "d24_v10",
    "de": "willkommen",
    "en": "welcome",
    "article": "",
    "type": "adj",
    "example": "Willkommen bei mir!"
   },
   {
    "id": "d24_v11",
    "de": "sich erinnern an",
    "en": "to remember",
    "article": "",
    "type": "verb",
    "example": "Ich erinnere mich an dich."
   },
   {
    "id": "d24_v12",
    "de": "der Hinweis",
    "en": "the hint",
    "article": "der",
    "type": "noun",
    "example": "Danke für den Hinweis!"
   },
   {
    "id": "d24_v13",
    "de": "vorbereiten",
    "en": "to prepare",
    "article": "",
    "type": "verb",
    "example": "Ich bereite das Essen vor."
   },
   {
    "id": "d24_v14",
    "de": "vielen Dank",
    "en": "thank you very much",
    "article": "",
    "type": "phrase",
    "example": "Vielen Dank für die Einladung!"
   }
  ],
  "chunks": [
   {
    "de": "Ich lade dich zu … ein.",
    "en": "I invite you to …"
   },
   {
    "de": "Danke für die Einladung!",
    "en": "Thanks for the invitation!"
   },
   {
    "de": "Darf ich … mitbringen?",
    "en": "May I bring …?"
   },
   {
    "de": "Leider kann ich nicht.",
    "en": "Unfortunately I can't."
   },
   {
    "de": "Jeder ist willkommen.",
    "en": "Everyone is welcome."
   }
  ],
  "outputTask": {
   "prompt": "Invite someone to an event, they ask to bring a friend, you agree, remind them of one detail.",
   "model": "Ich lade dich zu meiner Geburtstagsparty ein: am Freitag ab 20 Uhr, bei mir zu Hause. — Darf ich einen Freund mitbringen? — Natürlich! Jeder ist willkommen. Bring einfach Getränke mit."
  }
 },
 {
  "id": 25,
  "level": "A1.1",
  "act": "Auf dem Markt",
  "title": "Einkaufen auf dem Wochenmarkt",
  "goal": "Auf dem Markt einkaufen, Preise verhandeln, Zahlen bis 100.",
  "grammar": {
   "topic": "Zahlen 20–100; wie viel / wie viele; viel/viele; etwas/nichts",
   "note": "Numbers 21–99: units first, then tens, with <b>und</b>: <b>vierundzwanzig</b> (24), <b>siebenundfünfzig</b> (57). <b>viel</b> (much, uncountable) vs <b>viele</b> (many, plural). <b>etwas</b>=some, <b>nichts</b>=nothing.",
   "examples": [
    "Das kostet fünfunddreißig Euro.",
    "Ich habe noch etwas Geld.",
    "Wie viele Äpfel möchtest du?",
    "Ich nehme ein Kilo Tomaten."
   ]
  },
  "episode": [
   {
    "speaker": "Marktfrau",
    "de": "Guten Morgen! Frische Erdbeeren! Nur drei Euro das Kilo!",
    "en": "Good morning! Fresh strawberries! Only three euros a kilo!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Die sehen gut aus! Wie viel kostet ein Kilo?",
    "en": "They look good! How much is a kilo?",
    "audioFile": null
   },
   {
    "speaker": "Marktfrau",
    "de": "Drei Euro, oder zwei Kilo für fünf Euro.",
    "en": "Three euros, or two kilos for five euros.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Gut, ich nehme zwei Kilo. Haben Sie auch frisches Gemüse?",
    "en": "Good, I'll take two kilos. Do you also have fresh vegetables?",
    "audioFile": null
   },
   {
    "speaker": "Marktfrau",
    "de": "Natürlich! Tomaten, Gurken, Paprika — alles frisch vom Feld.",
    "en": "Of course! Tomatoes, cucumbers, peppers — all fresh from the field.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich nehme vier Tomaten und eine Gurke. Wie viel macht das zusammen?",
    "en": "I'll take four tomatoes and one cucumber. How much is that together?",
    "audioFile": null
   },
   {
    "speaker": "Marktfrau",
    "de": "Das macht zusammen sieben Euro fünfzig. Möchten Sie noch etwas?",
    "en": "That's seven euros fifty together. Would you like anything else?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Nein danke, das ist alles. Hier sind zehn Euro.",
    "en": "No thanks, that's all. Here's ten euros.",
    "audioFile": null
   },
   {
    "speaker": "Marktfrau",
    "de": "Danke schön, und zwei fünfzig Rückgeld. Schönen Tag noch!",
    "en": "Thank you, and two fifty change. Have a nice day!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d25_v1",
    "de": "der Markt",
    "en": "the market",
    "article": "der",
    "type": "noun",
    "example": "Ich gehe auf den Markt."
   },
   {
    "id": "d25_v2",
    "de": "frisch",
    "en": "fresh",
    "article": "",
    "type": "adj",
    "example": "Das Obst ist frisch."
   },
   {
    "id": "d25_v3",
    "de": "die Erdbeere",
    "en": "the strawberry",
    "article": "die",
    "type": "noun",
    "example": "Erdbeeren sind süß."
   },
   {
    "id": "d25_v4",
    "de": "das Gemüse",
    "en": "the vegetables",
    "article": "das",
    "type": "noun",
    "example": "Gemüse ist gesund."
   },
   {
    "id": "d25_v5",
    "de": "die Tomate",
    "en": "the tomato",
    "article": "die",
    "type": "noun",
    "example": "Ich nehme vier Tomaten."
   },
   {
    "id": "d25_v6",
    "de": "die Gurke",
    "en": "the cucumber",
    "article": "die",
    "type": "noun",
    "example": "Eine Gurke, bitte."
   },
   {
    "id": "d25_v7",
    "de": "das Kilo",
    "en": "the kilo",
    "article": "das",
    "type": "noun",
    "example": "Ein Kilo Äpfel, bitte."
   },
   {
    "id": "d25_v8",
    "de": "viel / viele",
    "en": "much / many",
    "article": "",
    "type": "adj",
    "example": "Ich habe viel Geld / viele Äpfel."
   },
   {
    "id": "d25_v9",
    "de": "etwas",
    "en": "something / some",
    "article": "",
    "type": "pron",
    "example": "Ich möchte etwas Wasser."
   },
   {
    "id": "d25_v10",
    "de": "nichts",
    "en": "nothing",
    "article": "",
    "type": "pron",
    "example": "Ich möchte nichts."
   },
   {
    "id": "d25_v11",
    "de": "zusammen",
    "en": "together / total",
    "article": "",
    "type": "adv",
    "example": "Was macht das zusammen?"
   },
   {
    "id": "d25_v12",
    "de": "das Rückgeld",
    "en": "the change",
    "article": "das",
    "type": "noun",
    "example": "Hier ist Ihr Rückgeld."
   },
   {
    "id": "d25_v13",
    "de": "kosten",
    "en": "to cost",
    "article": "",
    "type": "verb",
    "example": "Was kostet das?"
   },
   {
    "id": "d25_v14",
    "de": "schönen Tag noch!",
    "en": "have a nice day!",
    "article": "",
    "type": "phrase",
    "example": "Schönen Tag noch!"
   }
  ],
  "chunks": [
   {
    "de": "Wie viel kostet …?",
    "en": "How much does … cost?"
   },
   {
    "de": "Ich nehme …",
    "en": "I'll take …"
   },
   {
    "de": "Möchten Sie noch etwas?",
    "en": "Would you like anything else?"
   },
   {
    "de": "Das ist alles.",
    "en": "That's all."
   },
   {
    "de": "Schönen Tag noch!",
    "en": "Have a nice day!"
   }
  ],
  "outputTask": {
   "prompt": "Role-play a market purchase: ask price, take items, pay, get change.",
   "model": "Wie viel kostet ein Kilo Erdbeeren? — Drei Euro. Ich nehme zwei Kilo und vier Tomaten. Das macht zusammen sieben Euro fünfzig. Hier sind zehn Euro — danke für das Rückgeld!"
  }
 },
 {
  "id": 26,
  "level": "A1.1",
  "act": "Post & Bank",
  "title": "Auf die Post und zur Bank",
  "goal": "Ein Paket schicken und Geld abheben.",
  "grammar": {
   "topic": "schicken/senden; wie viel kostet das Porto?; Geld; Dativ fest: geben (ich gebe dir…)",
   "note": "At the post office: <b>Ich möchte ein Paket nach … schicken.</b> <b>Wie viel kostet das Porto?</b> At the bank: <b>Ich möchte Geld abheben/einzahlen.</b> <b>geben</b> is irregular and takes dative + accusative: <b>Ich gebe dir das Geld.</b> (learn as chunk).",
   "examples": [
    "Ich möchte ein Paket nach Spanien schicken.",
    "Wie viel kostet das Porto?",
    "Ich möchte 100 Euro abheben.",
    "Können Sie mir das geben?"
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "Guten Tag! Ich möchte ein Paket nach Madrid schicken. Wie viel kostet das Porto?",
    "en": "Hello! I'd like to send a package to Madrid. How much is the postage?",
    "audioFile": null
   },
   {
    "speaker": "Postangestellte",
    "de": "Das Paket wiegt zwei Kilo. Das Porto kostet vierzehn Euro.",
    "en": "The package weighs two kilos. Postage costs fourteen euros.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Okay. Und ich möchte noch zwei Briefmarken für einen Brief nach Berlin.",
    "en": "Okay. And I'd also like two stamps for a letter to Berlin.",
    "audioFile": null
   },
   {
    "speaker": "Postangestellte",
    "de": "Zwei Briefmarken kosten zusammen ein Euro sechzig. Zusammen mit dem Paket: fünfzehn Euro sechzig.",
    "en": "Two stamps cost one euro sixty together. With the package: fifteen euros sixty.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Hier ist zwanzig Euro. — Später, an der Bank: Guten Tag, ich möchte hundert Euro abheben.",
    "en": "Here's twenty euros. — Later, at the bank: Hello, I'd like to withdraw one hundred euros.",
    "audioFile": null
   },
   {
    "speaker": "Bankangestellter",
    "de": "Bitte stecken Sie Ihre Karte in den Automaten und geben Sie Ihre PIN ein.",
    "en": "Please insert your card into the machine and enter your PIN.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke. Kann ich auch 50-Euro-Scheine bekommen?",
    "en": "Thanks. Can I also get 50-euro notes?",
    "audioFile": null
   },
   {
    "speaker": "Bankangestellter",
    "de": "Natürlich. Hier sind Ihre hundert Euro.",
    "en": "Of course. Here are your one hundred euros.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d26_v1",
    "de": "die Post",
    "en": "the post office",
    "article": "die",
    "type": "noun",
    "example": "Ich gehe zur Post."
   },
   {
    "id": "d26_v2",
    "de": "die Bank",
    "en": "the bank",
    "article": "die",
    "type": "noun",
    "example": "Die Bank ist um die Ecke."
   },
   {
    "id": "d26_v3",
    "de": "das Paket",
    "en": "the package",
    "article": "das",
    "type": "noun",
    "example": "Ich schicke ein Paket."
   },
   {
    "id": "d26_v4",
    "de": "schicken / senden",
    "en": "to send",
    "article": "",
    "type": "verb",
    "example": "Ich schicke ein Paket."
   },
   {
    "id": "d26_v5",
    "de": "das Porto",
    "en": "the postage",
    "article": "das",
    "type": "noun",
    "example": "Wie viel kostet das Porto?"
   },
   {
    "id": "d26_v6",
    "de": "die Briefmarke",
    "en": "the stamp",
    "article": "die",
    "type": "noun",
    "example": "Ich brauche Briefmarken."
   },
   {
    "id": "d26_v7",
    "de": "der Brief",
    "en": "the letter",
    "article": "der",
    "type": "noun",
    "example": "Ich schreibe einen Brief."
   },
   {
    "id": "d26_v8",
    "de": "Geld abheben",
    "en": "to withdraw money",
    "article": "",
    "type": "phrase",
    "example": "Ich hebe Geld ab."
   },
   {
    "id": "d26_v9",
    "de": "die Karte",
    "en": "the card",
    "article": "die",
    "type": "noun",
    "example": "Stecken Sie die Karte ein."
   },
   {
    "id": "d26_v10",
    "de": "die PIN",
    "en": "the PIN",
    "article": "die",
    "type": "noun",
    "example": "Geben Sie Ihre PIN ein."
   },
   {
    "id": "d26_v11",
    "de": "der Euro-Schein",
    "en": "the euro note",
    "article": "der",
    "type": "noun",
    "example": "Ein 50-Euro-Schein."
   },
   {
    "id": "d26_v12",
    "de": "wiegen",
    "en": "to weigh",
    "article": "",
    "type": "verb",
    "example": "Das Paket wiegt 2 Kilo."
   },
   {
    "id": "d26_v13",
    "de": "geben",
    "en": "to give",
    "article": "",
    "type": "verb",
    "example": "Ich gebe dir das Geld."
   },
   {
    "id": "d26_v14",
    "de": "bekommen",
    "en": "to get/receive",
    "article": "",
    "type": "verb",
    "example": "Ich bekomme Geld."
   }
  ],
  "chunks": [
   {
    "de": "Ich möchte ein Paket nach … schicken.",
    "en": "I'd like to send a package to …"
   },
   {
    "de": "Wie viel kostet das Porto?",
    "en": "How much is the postage?"
   },
   {
    "de": "Ich möchte … Euro abheben.",
    "en": "I'd like to withdraw … euros."
   },
   {
    "de": "Geben Sie Ihre PIN ein.",
    "en": "Enter your PIN."
   },
   {
    "de": "Hier ist Ihr Rückgeld.",
    "en": "Here's your change."
   }
  ],
  "outputTask": {
   "prompt": "Describe going to the post office and the bank: what you sent/withdrew and how much it cost.",
   "model": "Auf der Post schicke ich ein Paket nach Madrid. Das Porto kostet 14 Euro. Dann gehe ich zur Bank und hebe 100 Euro ab. Ich bekomme zwei 50-Euro-Scheine."
  }
 },
 {
  "id": 27,
  "level": "A1.1",
  "act": "Handy & Nachrichten",
  "title": "Ruf mich an!",
  "goal": "Über das Handy sprechen und Nachrichten schicken.",
  "grammar": {
   "topic": "anrufen; zurückrufen; Nachricht schicken; erreichbar sein; trennbare Verben wiederholen",
   "note": "Phone verbs: <b>anrufen</b> (call), <b>zurückrufen</b> (call back), <b>auflegen</b> (hang up), <b>abnehmen</b> (pick up). <b>Erreichbar sein</b>=be reachable. Messages: <b>Ich schicke dir eine SMS/WhatsApp-Nachricht.</b> Review separable verbs (prefix at end).",
   "examples": [
    "Ich rufe dich später an.",
    "Ruf mich zurück!",
    "Ich bin nicht erreichbar.",
    "Schick mir eine Nachricht!"
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "(am Telefon) Hallo Jonas! Ich bin's, Mia. Warum rufst du nicht an?",
    "en": "(on phone) Hi Jonas! It's me, Mia. Why don't you call?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Oh, sorry! Mein Akku ist leer. Ich konnte dich nicht anrufen.",
    "en": "Oh, sorry! My battery is empty. I couldn't call you.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Kein Problem. Hast du meine Nachricht gesehen? Ich schreibe dir per WhatsApp.",
    "en": "No problem. Did you see my message? I write you via WhatsApp.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ja, gesehen. Ich antworte dir später, ich bin gerade in der U-Bahn.",
    "en": "Yes, seen. I'll answer you later, I'm just in the subway.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Okay, in der U-Bahn ist kein Empfang. Ruf mich zurück, wenn du wieder Empfang hast.",
    "en": "Okay, in the subway there's no reception. Call me back when you have reception again.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Mache ich. Wenn ich nicht rangehe, schick mir eine Sprachnachricht.",
    "en": "Will do. If I don't pick up, send me a voice message.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Gut. Bis später! Ich lege auf.",
    "en": "Good. See you later! I'll hang up.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Tschüss!",
    "en": "Bye!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d27_v1",
    "de": "das Handy",
    "en": "the mobile phone",
    "article": "das",
    "type": "noun",
    "example": "Mein Handy ist neu."
   },
   {
    "id": "d27_v2",
    "de": "anrufen",
    "en": "to call",
    "article": "",
    "type": "verb",
    "example": "Ich rufe dich an."
   },
   {
    "id": "d27_v3",
    "de": "zurückrufen",
    "en": "to call back",
    "article": "",
    "type": "verb",
    "example": "Ruf mich zurück!"
   },
   {
    "id": "d27_v4",
    "de": "auflegen",
    "en": "to hang up",
    "article": "",
    "type": "verb",
    "example": "Ich lege auf."
   },
   {
    "id": "d27_v5",
    "de": "rangehen",
    "en": "to pick up (phone)",
    "article": "",
    "type": "verb",
    "example": "Er geht nicht ran."
   },
   {
    "id": "d27_v6",
    "de": "die Nachricht",
    "en": "the message",
    "article": "die",
    "type": "noun",
    "example": "Schick mir eine Nachricht!"
   },
   {
    "id": "d27_v7",
    "de": "die Sprachnachricht",
    "en": "voice message",
    "article": "die",
    "type": "noun",
    "example": "Ich schicke eine Sprachnachricht."
   },
   {
    "id": "d27_v8",
    "de": "der Akku",
    "en": "the battery",
    "article": "der",
    "type": "noun",
    "example": "Mein Akku ist leer."
   },
   {
    "id": "d27_v9",
    "de": "leer / voll",
    "en": "empty / full",
    "article": "",
    "type": "adj",
    "example": "Der Akku ist leer."
   },
   {
    "id": "d27_v10",
    "de": "der Empfang",
    "en": "the reception",
    "article": "der",
    "type": "noun",
    "example": "Kein Empfang im Keller."
   },
   {
    "id": "d27_v11",
    "de": "erreichbar",
    "en": "reachable",
    "article": "",
    "type": "adj",
    "example": "Ich bin heute erreichbar."
   },
   {
    "id": "d27_v12",
    "de": "antworten",
    "en": "to answer",
    "article": "",
    "type": "verb",
    "example": "Ich antworte dir später."
   },
   {
    "id": "d27_v13",
    "de": "sehen",
    "en": "to see",
    "article": "",
    "type": "verb",
    "example": "Ich habe die Nachricht gesehen."
   },
   {
    "id": "d27_v14",
    "de": "später",
    "en": "later",
    "article": "",
    "type": "adv",
    "example": "Bis später!"
   }
  ],
  "chunks": [
   {
    "de": "Ruf mich an / zurück!",
    "en": "Call me / call me back!"
   },
   {
    "de": "Ich bin (nicht) erreichbar.",
    "en": "I am (not) reachable."
   },
   {
    "de": "Schick mir eine Nachricht.",
    "en": "Send me a message."
   },
   {
    "de": "Mein Akku ist leer.",
    "en": "My battery is empty."
   },
   {
    "de": "Ich lege auf.",
    "en": "I'm hanging up."
   }
  ],
  "outputTask": {
   "prompt": "Describe a phone call: why someone didn't answer, what you agreed, how you'll stay in touch.",
   "model": "Jonas ruft mich nicht an, weil sein Akku leer ist. Ich schicke ihm eine Nachricht. Er ruft mich später zurück. Wenn er nicht rangeht, schicke ich eine Sprachnachricht."
  }
 },
 {
  "id": 28,
  "level": "A1.1",
  "act": "Berlin entdecken",
  "title": "Sehenswürdigkeiten in Berlin",
  "goal": "Über Sehenswürdigkeiten reden und eine Stadttour planen.",
  "grammar": {
   "topic": "besichtigen; besuchen; Modalverben wiederholen; Adjektive beschreiben",
   "note": "Sightseeing: <b>besichtigen</b> (visit a place/building), <b>besuchen</b> (visit a person/event). Describe with adjectives: <b>groß, alt, modern, beeindruckend, schön.</b> Plan a tour with zuerst, dann, danach, am Ende.",
   "examples": [
    "Wir besichtigen das Brandenburger Tor.",
    "Das Museum ist sehr interessant.",
    "Zuerst gehen wir zum Reichstag, dann zum Holocaust-Mahnmal.",
    "Berlin ist groß und lebendig."
   ]
  },
  "episode": [
   {
    "speaker": "Jonas",
    "de": "Heute mache ich eine Stadttour mit dir. Was willst du in Berlin unbedingt sehen?",
    "en": "Today I'll do a city tour with you. What do you absolutely want to see in Berlin?",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Das Brandenburger Tor! Und den Reichstag. Ist der Eintritt frei?",
    "en": "The Brandenburg Gate! And the Reichstag. Is entry free?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Ja, aber für die Reichstagskuppel muss man sich vorher anmelden. Danach gehen wir zum Holocaust-Mahnmal.",
    "en": "Yes, but for the Reichstag dome you have to register beforehand. After that we go to the Holocaust Memorial.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Das soll sehr beeindruckend sein. Und dann?",
    "en": "That's supposed to be very impressive. And then?",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Dann spazieren wir durch den Tiergarten und trinken einen Kaffee am Kudamm.",
    "en": "Then we stroll through the Tiergarten and drink a coffee on the Kurfürstendamm.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Klingt perfekt! Berlin ist so groß und lebendig. Ich liebe diese Stadt.",
    "en": "Sounds perfect! Berlin is so big and lively. I love this city.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Am Ende gehen wir zum East Side Gallery — die längste Open-Air-Galerie der Welt.",
    "en": "At the end we go to the East Side Gallery — the longest open-air gallery in the world.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Wow! Ich mache viele Fotos. Zeig mir dein Berlin!",
    "en": "Wow! I'll take lots of photos. Show me your Berlin!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d28_v1",
    "de": "die Sehenswürdigkeit",
    "en": "sight/landmark",
    "article": "die",
    "type": "noun",
    "example": "Berlin hat viele Sehenswürdigkeiten."
   },
   {
    "id": "d28_v2",
    "de": "besichtigen",
    "en": "to visit (sight)",
    "article": "",
    "type": "verb",
    "example": "Wir besichtigen das Museum."
   },
   {
    "id": "d28_v3",
    "de": "besuchen",
    "en": "to visit (person/event)",
    "article": "",
    "type": "verb",
    "example": "Ich besuche meine Schwester."
   },
   {
    "id": "d28_v4",
    "de": "der Eintritt",
    "en": "the entry/admission",
    "article": "der",
    "type": "noun",
    "example": "Der Eintritt ist frei."
   },
   {
    "id": "d28_v5",
    "de": "frei",
    "en": "free",
    "article": "",
    "type": "adj",
    "example": "Der Eintritt ist frei."
   },
   {
    "id": "d28_v6",
    "de": "beeindruckend",
    "en": "impressive",
    "article": "",
    "type": "adj",
    "example": "Das Tor ist beeindruckend."
   },
   {
    "id": "d28_v7",
    "de": "spazieren gehen",
    "en": "to go for a stroll",
    "article": "",
    "type": "phrase",
    "example": "Wir spazieren durch den Park."
   },
   {
    "id": "d28_v8",
    "de": "die Stadt",
    "en": "the city",
    "article": "die",
    "type": "noun",
    "example": "Berlin ist eine große Stadt."
   },
   {
    "id": "d28_v9",
    "de": "groß / klein",
    "en": "big / small",
    "article": "",
    "type": "adj",
    "example": "Berlin ist groß."
   },
   {
    "id": "d28_v10",
    "de": "modern / alt",
    "en": "modern / old",
    "article": "",
    "type": "adj",
    "example": "Das Gebäude ist modern."
   },
   {
    "id": "d28_v11",
    "de": "zuerst / dann / danach",
    "en": "first / then / after that",
    "article": "",
    "type": "adv",
    "example": "Zuerst… dann… danach…"
   },
   {
    "id": "d28_v12",
    "de": "am Ende",
    "en": "in the end",
    "article": "",
    "type": "phrase",
    "example": "Am Ende trinken wir Kaffee."
   },
   {
    "id": "d28_v13",
    "de": "das Foto",
    "en": "the photo",
    "article": "das",
    "type": "noun",
    "example": "Ich mache viele Fotos."
   },
   {
    "id": "d28_v14",
    "de": "die Galerie",
    "en": "the gallery",
    "article": "die",
    "type": "noun",
    "example": "Die East Side Gallery ist berühmt."
   }
  ],
  "chunks": [
   {
    "de": "Was willst du unbedingt sehen?",
    "en": "What do you absolutely want to see?"
   },
   {
    "de": "Ist der Eintritt frei?",
    "en": "Is entry free?"
   },
   {
    "de": "Zuerst …, dann …, danach …",
    "en": "First …, then …, after that …"
   },
   {
    "de": "Das ist sehr beeindruckend.",
    "en": "That's very impressive."
   },
   {
    "de": "Ich liebe diese Stadt!",
    "en": "I love this city!"
   }
  ],
  "outputTask": {
   "prompt": "Plan a city tour: 3 sights in order, say one adjective about each, end with a coffee.",
   "model": "Zuerst besichtigen wir das Brandenburger Tor — es ist beeindruckend. Dann gehen wir zum Reichstag, er ist groß und modern. Danach spazieren wir durch den Tiergarten. Am Ende trinken wir einen Kaffee."
  }
 },
 {
  "id": 29,
  "level": "A1.1",
  "act": "Wiederholung",
  "title": "Wochenrückblick",
  "goal": "Alles aus A1.1 wiederholen und Lücken finden.",
  "grammar": {
   "topic": "Wiederholung: Präsens, Akkusativ, trennbare Verben, Modalverben, Negation, Präpositionen",
   "note": "Review day! Today's session interleaves everything from days 1–28: present tense (regular + irregular), accusative articles, separable verbs, modal verbs (möchten, müssen, wollen, sollen, dürfen), kein/nicht, prepositions of place/time. Use retrieval — no peeking!",
   "examples": [
    "Ich rufe dich morgen an.",
    "Er möchte ein Wasser.",
    "Wir haben keine Zeit.",
    "Die Präsentation ist fertig."
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "(Tagebuch) Heute ist mein 29. Tag in Berlin. Ich kann mich vorstellen, einkaufen, im Restaurant bestellen und zum Arzt gehen.",
    "en": "(Diary) Today is my 29th day in Berlin. I can introduce myself, shop, order in restaurants and go to the doctor.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Dein Deutsch ist schon viel besser! Du sprichst fast fließend.",
    "en": "Your German is already much better! You speak almost fluently.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke! Aber ich mache noch viele Fehler mit den Artikeln und der Wortstellung.",
    "en": "Thanks! But I still make many mistakes with articles and word order.",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Das ist normal. Übung macht den Meister. Morgen ist dein letzter Tag von A1.1.",
    "en": "That's normal. Practice makes perfect. Tomorrow is your last day of A1.1.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Schon? Dann mache ich morgen eine große Selbstvorstellung — auf Deutsch!",
    "en": "Already? Then tomorrow I'll do a big self-introduction — in German!",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "Super! Ich bin dein Publikum. Erzähl alles: Herkunft, Familie, Arbeit, Hobbys, Wohnung, Berlin.",
    "en": "Great! I'll be your audience. Tell everything: origin, family, work, hobbies, apartment, Berlin.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Abgemacht! Ich übe heute Abend noch mal alle Vokabeln.",
    "en": "Deal! I'll review all the vocabulary again this evening.",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d29_v1",
    "de": "wiederholen",
    "en": "to repeat/review",
    "article": "",
    "type": "verb",
    "example": "Ich wiederhole die Grammatik."
   },
   {
    "id": "d29_v2",
    "de": "die Wiederholung",
    "en": "the review",
    "article": "die",
    "type": "noun",
    "example": "Heute ist Wiederholung."
   },
   {
    "id": "d29_v3",
    "de": "der Fehler",
    "en": "the mistake",
    "article": "der",
    "type": "noun",
    "example": "Ich mache viele Fehler."
   },
   {
    "id": "d29_v4",
    "de": "besser",
    "en": "better",
    "article": "",
    "type": "adj",
    "example": "Dein Deutsch ist besser."
   },
   {
    "id": "d29_v5",
    "de": "fließend",
    "en": "fluent",
    "article": "",
    "type": "adj",
    "example": "Ich spreche fließend Spanisch."
   },
   {
    "id": "d29_v6",
    "de": "normal",
    "en": "normal",
    "article": "",
    "type": "adj",
    "example": "Das ist normal."
   },
   {
    "id": "d29_v7",
    "de": "die Grammatik",
    "en": "the grammar",
    "article": "die",
    "type": "noun",
    "example": "Die Grammatik ist schwierig."
   },
   {
    "id": "d29_v8",
    "de": "der Artikel",
    "en": "the article (der/die/das)",
    "article": "der",
    "type": "noun",
    "example": "Ich vergesse die Artikel."
   },
   {
    "id": "d29_v9",
    "de": "die Wortstellung",
    "en": "the word order",
    "article": "die",
    "type": "noun",
    "example": "Die Wortstellung ist schwierig."
   },
   {
    "id": "d29_v10",
    "de": "üben",
    "en": "to practice",
    "article": "",
    "type": "verb",
    "example": "Ich übe jeden Tag."
   },
   {
    "id": "d29_v11",
    "de": "die Vokabeln",
    "en": "the vocabulary",
    "article": "die",
    "type": "noun",
    "example": "Ich lerne Vokabeln."
   },
   {
    "id": "d29_v12",
    "de": "sich vorstellen",
    "en": "to introduce oneself",
    "article": "",
    "type": "verb",
    "example": "Ich stelle mich vor."
   },
   {
    "id": "d29_v13",
    "de": "erzählen",
    "en": "to tell/narrate",
    "article": "",
    "type": "verb",
    "example": "Erzähl mir von deiner Reise."
   },
   {
    "id": "d29_v14",
    "de": "abgemacht!",
    "en": "it's a deal!",
    "article": "",
    "type": "phrase",
    "example": "Abgemacht! Bis morgen!"
   }
  ],
  "chunks": [
   {
    "de": "Ich kann schon …",
    "en": "I can already …"
   },
   {
    "de": "Ich mache noch Fehler mit …",
    "en": "I still make mistakes with …"
   },
   {
    "de": "Das ist normal.",
    "en": "That's normal."
   },
   {
    "de": "Übung macht den Meister.",
    "en": "Practice makes perfect."
   },
   {
    "de": "Abgemacht!",
    "en": "It's a deal!"
   }
  ],
  "outputTask": {
   "prompt": "Write/say a short review: what you can now do in German, and what is still difficult.",
   "model": "Nach 29 Tagen kann ich mich vorstellen, einkaufen und im Restaurant bestellen. Ich kann über Familie, Hobbys und Arbeit sprechen. Noch schwierig sind die Artikel und die Wortstellung. Aber Übung macht den Meister!"
  }
 },
 {
  "id": 30,
  "level": "A1.1",
  "act": "A1.1 Abschlussprojekt",
  "title": "Mein Leben in Berlin",
  "goal": "Eine komplette Selbstvorstellung halten — A1.1 Abschluss.",
  "grammar": {
   "topic": "Abschluss: alle Strukturen kombiniert; Selbstvorstellung; Ausblick auf A1.2",
   "note": "Final project day! Combine everything: greeting, name, origin, family, job/studies, apartment, hobbies, likes/dislikes, daily routine, weekend plans, your opinion of Berlin. Speak for 60–90 seconds. Then compare with the model. Nächster Halt: A1.2!",
   "examples": [
    "Ich heiße Mia und komme aus Madrid.",
    "Ich wohne seit einem Monat in Berlin.",
    "Ich arbeite als Designerin in einem Büro.",
    "Am Wochenende treffe ich mich mit Freunden."
   ]
  },
  "episode": [
   {
    "speaker": "Mia",
    "de": "(vor Jonas und Leila) Hallo! Ich heiße Mia López. Ich komme aus Madrid und bin seit einem Monat in Berlin.",
    "en": "(in front of Jonas and Leila) Hi! I'm Mia López. I come from Madrid and have been in Berlin for a month.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich bin Designerin und mache ein Praktikum in einem kleinen Büro in Kreuzberg. Meine Kollegin Leila ist hier — hallo!",
    "en": "I'm a designer and do an internship in a small office in Kreuzberg. My colleague Leila is here — hi!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich wohne in einer kleinen Wohnung mit einem Balkon. Ich habe einen Bruder und eine Schwester in Spanien.",
    "en": "I live in a small apartment with a balcony. I have a brother and a sister in Spain.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "In meiner Freizeit lese ich gern, fotografiere und koche. Am Wochenende treffe ich mich mit Freunden im Park.",
    "en": "In my free time I like reading, photographing and cooking. At the weekend I meet friends in the park.",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Ich mag Berlin sehr: die Stadt ist lebendig und die Menschen sind offen. Nur das Wetter — manchmal regnet es zu viel!",
    "en": "I like Berlin a lot: the city is lively and the people are open. Only the weather — sometimes it rains too much!",
    "audioFile": null
   },
   {
    "speaker": "Jonas",
    "de": "(applaudiert) Toll! Das war perfekt! Du bist bereit für A1.2.",
    "en": "(applauds) Great! That was perfect! You're ready for A1.2.",
    "audioFile": null
   },
   {
    "speaker": "Leila",
    "de": "Weiter so! Nächstes Thema: Perfekt und Vergangenheit — dann kannst du von deiner Reise erzählen!",
    "en": "Keep it up! Next topic: perfect tense and past — then you can tell about your trip!",
    "audioFile": null
   },
   {
    "speaker": "Mia",
    "de": "Danke! Ich freue mich auf A1.2. Auf Wiedersehen, A1.1!",
    "en": "Thanks! I'm looking forward to A1.2. Goodbye, A1.1!",
    "audioFile": null
   }
  ],
  "vocab": [
   {
    "id": "d30_v1",
    "de": "die Selbstvorstellung",
    "en": "self-introduction",
    "article": "die",
    "type": "noun",
    "example": "Ich halte eine Selbstvorstellung."
   },
   {
    "id": "d30_v2",
    "de": "seit",
    "en": "since (time)",
    "article": "",
    "type": "prep",
    "example": "Ich bin seit einem Monat hier."
   },
   {
    "id": "d30_v3",
    "de": "der Monat",
    "en": "the month",
    "article": "der",
    "type": "noun",
    "example": "in einem Monat"
   },
   {
    "id": "d30_v4",
    "de": "bereit",
    "en": "ready",
    "article": "",
    "type": "adj",
    "example": "Ich bin bereit für A1.2."
   },
   {
    "id": "d30_v5",
    "de": "der Abschluss",
    "en": "the completion/graduation",
    "article": "der",
    "type": "noun",
    "example": "Heute ist der Abschluss von A1.1."
   },
   {
    "id": "d30_v6",
    "de": "das Projekt",
    "en": "the project",
    "article": "das",
    "type": "noun",
    "example": "Das Abschlussprojekt."
   },
   {
    "id": "d30_v7",
    "de": "erzählen",
    "en": "to tell/narrate",
    "article": "",
    "type": "verb",
    "example": "Erzähl uns von Berlin!"
   },
   {
    "id": "d30_v8",
    "de": "die Meinung",
    "en": "the opinion",
    "article": "die",
    "type": "noun",
    "example": "Was ist deine Meinung?"
   },
   {
    "id": "d30_v9",
    "de": "mögen",
    "en": "to like",
    "article": "",
    "type": "verb",
    "example": "Ich mag Berlin."
   },
   {
    "id": "d30_v10",
    "de": "lebendig",
    "en": "lively",
    "article": "",
    "type": "adj",
    "example": "Berlin ist lebendig."
   },
   {
    "id": "d30_v11",
    "de": "offen",
    "en": "open",
    "article": "",
    "type": "adj",
    "example": "Die Menschen sind offen."
   },
   {
    "id": "d30_v12",
    "de": "nächste Woche / nächstes Level",
    "en": "next week / next level",
    "article": "",
    "type": "phrase",
    "example": "Nächstes Level: A1.2."
   },
   {
    "id": "d30_v13",
    "de": "sich freuen auf",
    "en": "to look forward to",
    "article": "",
    "type": "verb",
    "example": "Ich freue mich auf A1.2."
   },
   {
    "id": "d30_v14",
    "de": "weiter so!",
    "en": "keep it up!",
    "article": "",
    "type": "phrase",
    "example": "Weiter so, du schaffst das!"
   }
  ],
  "chunks": [
   {
    "de": "Ich heiße … und komme aus …",
    "en": "I'm … and come from …"
   },
   {
    "de": "Ich bin seit … in …",
    "en": "I've been in … for …"
   },
   {
    "de": "Ich arbeite als …",
    "en": "I work as a …"
   },
   {
    "de": "Ich mag … sehr.",
    "en": "I like … a lot."
   },
   {
    "de": "Ich bin bereit für …",
    "en": "I'm ready for …"
   }
  ],
  "outputTask": {
   "prompt": "FINAL TASK: Give a 60–90 second self-introduction in German covering: name, origin, family, job/studies, apartment, hobbies, daily routine, weekend plans, and your opinion of Berlin. Record yourself!",
   "model": "Hallo! Ich heiße Mia López. Ich komme aus Madrid und bin seit einem Monat in Berlin. Ich bin Designerin und mache ein Praktikum in Kreuzberg. Ich wohne in einer kleinen Wohnung mit Balkon. Ich habe einen Bruder und eine Schwester. In meiner Freizeit lese und koche ich gern. Am Wochenende treffe ich mich mit Freunden. Ich mag Berlin sehr — es ist lebendig. Ich bin bereit für A1.2!"
  }
 }
];
