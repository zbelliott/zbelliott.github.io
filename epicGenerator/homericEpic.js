var grammar = {
	"command": [
		"sing, #museEpithet# #muse.capitalize#, of",
		"tell me, #museEpithet# #muse.capitalize#, about",
		"tell us, #museEpithet# #muse.capitalize#, about",
        "recall, #museEpithet# #muse.capitalize#,",
        "recall for us, #museEpithet# #muse.capitalize#,",
        "relate, #museEpithet# #muse.capitalize#,",
        "relate to us, #museEpithet# #muse.capitalize#,",
        "narrate, #museEpithet# #muse.capitalize#,",
        "recite, #museEpithet# #muse.capitalize#,",
        "tell, #museEpithet# #muse.capitalize#, the tale of",
        "make known, #museEpithet# #muse.capitalize#,",
        "tell, #museEpithet# #muse.capitalize#, the story of",
        "chant, #museEpithet# #muse.capitalize#, about"
	],
    "museEpithet": [
        "sweet-voiced",
        "honey-tongued",
        "divine",
        ""
    ],
    "genericEpithet": [
        "shining",
        "god-like",
        "bold-hearted",
        "brilliant",
        "divine",
        "Zeus-loved",
        "Athena-loved",
        "Aphrodite-loved",
        "Hera-loved",
        "Ares-loved",
        "white-armed",
        "lovely-haired",
        "ox-eyed",
        "cow-eyed",
        "proud"
    ],
    
    "divineEpithet": [
        "shining",
        "bold-hearted",
        "brilliant",
        "divine",
        "white-armed",
        "lovely-haired",
        "ox-eyed",
        "cow-eyed",
        "proud",
        ""
    ],
    
	"muse": [
		"muse",
		"goddess",
		"divinity",
		"Calliope",
        "daughter of Zeus",
        "daughters of Zeus",
        "child of Zeus",
        "children of Zeus"
	],
    
    "achilles": [
        "#achEpithetPre# Achilles#achEpithetPost#",
        "#achEpithetPre# Achilles",
        "Achilles#achEpithetPost#",
        "Achilles"
    ],
    "agamemnon": [
        "#agaEpithetPre# Agamemnon",
        "Agamemnon"
    ],
    "hector": [
        "#hecEpithetPre# Hector#hecEpithetPost#",
        "#hecEpithetPre# Hector",
        "Hector#hecEpithetPost#",
        "Hector"
    ],
    "diomedes": [
        "#dioEpithet# Diomedes",
        "Diomedes"
    ],
    "odysseus": [
        "#odyEpithet# Odysseus",
        "Odysseus"
    ],
    "alexander": [
        "#parEpithetPre# #paris#",
        "#paris#"
    ],
	
	"topicIl": [
		"rage",
		"war",
		"power",
		"fight",
        "battle",
        "struggle",
        "contest",
        "quarrel",
        "falling out",
        "reconcilation",
        "friendship",
        "hospitality",
        "love",
        "strife"
	],
  
    "topicOd": [
        "the #genericEpithet# man",
        "the #genericEpithet# men",
        "the #genericEpithet# woman",
        "the #genericEpithet# women",
        "the man",
        "the men",
        "the woman",
        "the women",
        "the #genericEpithet# people",
        "the people",
        "the #genericEpithet# army",
        "the army",
        "the #genericEpithet# host",
        "the host",
        "the guest",
        "the wandering",
        "the life",
        "the death",
        "the life of #person#",
        "the death of #person#",
        "the tricks of #person#"
        
    ],
    
    "polu": [
        "much",
        "great",
        "constant"
    ],
    "prep": [
        "between",
        "among",
        "of"
    ],
    
    "greeks": [
        "#greEpithet# Greeks",
        "#greEpithet# Hellenes",
        "#greEpithet# Acheanes",
        "#greEpithet# Danaans",
        "#greEpithet# Agrives"
        
    ],
    
    "greEpithet": [
        "long-haired",
        "bronze-armored",
        "well-greaved",
        "glancing-eyed",
        "#genericEpithet#",
        ""
    ],
    
    "trojans": [
        "#troEpithet# Trojans",
        "#troEpithet# Ilians",
        "#troEpithet# sons of Priam"
    ],
    
    "troEpithet": [
        "bold",
        "horse-taming",
        "horse-brekaing",
        "#genericEpithet#",
        ""
    ],
    
    "agaEpithetPre": [
        "wide-ruling",
        "scepter-weilding",
        "lord of men",
        "proud-hearted",
        "mighty",
        "#genericEpithet#",
        ""
    ],
    
    "agaEpithetPost": [
        ", the son of Atreus,",
        ", the leader of the host,",
        ", the commander of the #greeks#,"
    ],
    
    "achEpithetPre": [
        "swift-footed",
        "#genericEpithet#",
        ""
    ],
    "achEpithetPost": [
        ", the first of the #greeks#",
        ", the best of the #greeks#",
        ", loved by Athena",
        ", the son of Peleus",
        ", foremost among the #greeks#"
    ],
    
    "odyEpithet": [
        "crafty",
        "decietful",
        "tricky",
        "much-suffering",
        "reckless",
        "daring",
        "many-minded",
        "much-wandering",
        "objectively-the-worst",
        "#genericEpithet#",
        ""
    ],
    
    "dioEpithet": [
        "powerful",
        "horse-taming",
        "horse-breaking",
        "#genericEpithet#",
        ""
    ],
    
    "hecEpithetPre": [
        "great",
        "mighty",
        "man-slaughtering",
        "man-killing",
        "#genericEpithet#",
        ""
    ],
    
    "hecEpithetPost": [
        ", the tamer of horses",
        " of the shinging helmet",
        ", son of Priam",
        ", leader of the #trojans#",
        ", the best of the #trojans#",
        ""
    ],
    
    "parEpithetPre": [
        "#genericEpithet#",
        "prince",
        "reckless",
        "daring",
        ""
    ],
  
    "paris": [
        "Paris",
        "Alexander"
    ],
    
    "parEpithetPost": [
        ", son of Priam,",
        ", good with the bow,",
        ", abducter of Helen,",
        ", bane of the Greeks,",
        ", loved by Aphrodite,",
        ""
    ],
    
	"qualityIl": [
		"#prep# the great heroes",
        "#prep# many swift ships",
        "#prep# the #greeks#",
        "#prep# the #trojans#",
        "#prep# the #greeks# and the #trojans#",
		"of #person#",
        "#prep# #agamemnon##agaEpithetPost# and #achilles#",
        "#prep# #odysseus# and #achilles#",
        "#prep# #diomedes# and #achilles#",
        "#prep# #agamemnon##agaEpithetPost# and #odysseus#",
        "#prep# #diomedes# and #odysseus#",
        "#prep# #agamemnon##agaEpithetPost# and #diomedes#",
        "#prep# #agamemnon##agaEpithetPost# and #hector#",
        "#prep# #achilles#, and #hector#",
        "#prep# #diomedes# and #hector#",
        "#prep# #odysseus# and #hector#",
        "#prep# #alexander##parEpithetPost# and #hector#",
        "#prep# #alexander##parEpithetPost# and #achilles#",
        "#prep# #alexander##parEpithetPost# and #odysseus#",
        "#prep# #alexander##parEpithetPost# and #diomedes#",
        "#prep# #person# and #person#"
        
    ],
   
    "qualityOd": [
        "of #polu# sorrow",
        "of #polu# suffering",
        "of #polu# pain",
        "of #polu# joy",
        "having #polu# victory",
        "suffering #polu# loss"
        
    ],
    
    "nostos": [
        "homecoming",
        "sea voyage",
        "land voyage",
        "journey",
        "travels",
        "wanderings"
    ],
    
    "duration": [
        ", finally,",
        ", at last,",
        ", after a long time,",
        ", after a short time,"

    ],
    
    "place": [
        "#placeEpithet# Pylos",
        "#placeEpithet# Ithaca",
        "#placeEpithet# Phaeicia",
        "#placeEpithet# Hades",
        "#placeEpithet# Mycenae",
        "#placeEpithet# Egypt",
        "#placeEpithet# Hyria",
        "#placeEpithet# Aulis",
        "#placeEpithet# Platea",
        "#placeEpithet# Argos",
        "#placeEpithet# Epidauros",
        "#placeEpithet# Corinth",
        "#placeEpithet# Crete",
        "#placeEpithet# Delphi",
        "#placeEpithet# Thebes",
        "#placeEpithet# Troy",
        "#placeEpithet# Ilium",
        "#placeEpithet# Latium",
        "#placeEpithet# Mount Pelion",
        "#placeEpithet# Phthia",
        "#placeEpithet# Mount Olympus"
        
    ],
    
    "placeEpithet": [
        "sandy",
        "rocky",
        "craggy",
        "far-off",
        "renowned",
        "famous",
        "longed-for",
        "wealthy",
        "gold-rich",
        "silver-rich",
        "desolate",
        "snowy",
        "rainy",
        "dry",
        "sea-girt",
        ""
    ],
    
    "pet": [
        "Barnabus",
        "Argos",
        "Dustyn",
        "Maggie",
        "Macy",
        "Elwood",
        "Rocket",
        "Psyche",
        "Thymus",
        "Porpax",
        "Styrax",
        "Lochus",
        "Taxis",
        "Aether",
        "Gnome",
        "Pluck",
        "Buckler",
        "Lance",
        "Furry",
        "Fury",
        "Dash",
        "Growler"
    ],
    
    "petAdj": [
        "loyal",
        "devout",
        "friendly",
        "loving",
        "old",
        "young",
        "kind",
        "faithful",
        "large",
        "small",
        "squishy"
    ],
    
    "animal": [
        "dog",
        "cat",
        "goldfish",
        "seagull",
        "parakeet",
        "mouse",
        "frog",
        "horse",
        "bull",
        "cow",
        "weasel",
        "ferret",
        "chinchilla"
    ],
    
    "frequency": [
        "once more",
        "again",
        "for a final time",
        "for the first time"
    ],
    
    "invocation": [
        "#command.capitalize# the #topicIl# #qualityIl# #result#.","#command.capitalize# #topicOd# #qualityOd# #result#.","#command.capitalize# the #adj# #nostos# of #person# until#duration# #place# and #pet# the #petAdj# #animal# were seen #frequency#."
    ],
    
    "caused": [
        "brought about #effect# for",
        "resulted in #effect# for",
        "caused #effect# for",
        "granted #effect# to",
        "gave #effect# to",
        "provided #effect# to"
        
    ],
    
    "adj": [
        "mournful",
        "blessed",
        "happy",
        "deserved",
        "undeserved",
        "obvious",
        "well-known",
        "unlikely",
        "suspicious",
        "immediate",
        "unhappy",
        "grim",
        "abnormal",
        "obscene",
        "marvelous",
        "miraculous",
        "deadly"
    ],
    
    "effect": [
        "#adj.a# life",
        "#adj.a# death",
        "#adj.a# homecoming",
        "#adj.a# victory",
        "#adj.a# defeat",
        "#adj.a# shipwreck",
        "#adj.a# raid",
        "#adj# booty",
        "#adj# armor",
        "#adj# weapons",
        "#adj# funeral games",
        "#adj.a# funeral pyre"
    ],
    
    "person": [
        "#achilles#",
        "#hector#",
        "#agamemnon#",
        "#diomedes#",
        "#odysseus#",
        "#alexander#",
        "#greeks#",
        "#trojans#",
        "many",
        "few",
        "no one",
        "#genericEpithet# Ajax",
        "#genericEpithet# Telamonian Ajax",
        "#genericEpithet# Thersites",
        "#genericEpithet# Antilochus",
        "#genericEpithet# Calchas",
        "#genericEpithet# Helen",
        "#genericEpithet# Idomeneus",
        "#genericEpithet# Menelaus",
        "#genericEpithet# Nestor",
        "#genericEpithet# Patroclus",
        "#genericEpithet# Teucer",
        "#genericEpithet# Aeneas",
        "#genericEpithet# Andromache",
        "#genericEpithet# Antenor",
        "#genericEpithet# Cassandra",
        "#genericEpithet# Glaucus",
        "#genericEpithet# Laodice",
        "#genericEpithet# Lycaon",
        "#genericEpithet# Pandarus",
        "#genericEpithet# Priam",
        "#genericEpithet# Sarpedon",
        "#genericEpithet# Theano",
        "#genericEpithet# Memnon",
        "#genericEpithet# Rhesus",
        "#genericEpithet# Penthesilea",
        "#genericEpithet# Laertes",
        "#genericEpithet# Penelope",
        "#genericEpithet# Telemachus",
        "#genericEpithet# Eumaeus",
        "#genericEpithet# Melantho",
        "#genericEpithet# Antinous",
        "#genericEpithet# Eurymachus",
        "#genericEpithet# Briseis",
        "#genericEpithet# Chryseis",
        "#divineEpithet# Aphrodite",
        "#divineEpithet# Apollo",
        "#divineEpithet# Ares",
        "#divineEpithet# Athena",
        "#divineEpithet# Eos",
        "#divineEpithet# Hephaestus",
        "#divineEpithet# Hera",
        "#divineEpithet# Hermes",
        "#divineEpithet# Iris",
        "#divineEpithet# Poseidon",
        "#divineEpithet# Scamander",
        "#divineEpithet# Thetis",
        "#divineEpithet# Zeus"
    ],
    
    "result": [
        "that #caused# #person#"
    ],
	
	"origin": [
		"#invocation#"
	]
}