const $ = selector => document.querySelector(selector);

const validateAnswer = () => {
    console.log("testing"); // test to see if clicking a button works
    console.log(JSON.parse(ICON_TEST));
}


document.addEventListener("DOMContentLoaded", () => {

    $(".selections").addEventListener("click", validateAnswer);

    // all icon answers
    const iconAnswers = JSON.parse(ICON_ANSWERS);
    for (let i = 0; i < 10; i++) {
        console.log(iconAnswers[i]);
    };

    // all voiceline answers
    const voicelineAnswers = JSON.parse(VOICELINE_ANSWERS);
    for (let i = 0; i < 10; i++) {
        console.log(voicelineAnswers[i]);
    }

})

const ICON_TEST = '{' +
    '"question1": [' +
    '"Annie", "Renekton", "Caitlyn", "Diana", "a"]' +
    '}'

const ICON_ANSWERS = '[\n' +
    '  {"question": 1,\n' +
    '  "a"        : "Annie",\n' +
    '  "b"        : "Renekton",\n' +
    '  "c"        : "Caitlyn",\n' +
    '  "d"        : "Diana",\n' +
    '  "answer"   : "a"\n' +
    '  },\n' +
    '  {"question": 2,\n' +
    '  "a"        : "Skarner",\n' +
    '  "b"        : "Darius",\n' +
    '  "c"        : "Azir",\n' +
    '  "d"        : "Thresh",\n' +
    '  "answer"   : "c"\n' +
    '  },\n' +
    '  {"question": 3,\n' +
    '  "a"        : "Kaisa",\n' +
    '  "b"        : "Zeri",\n' +
    '  "c"        : "Nilah",\n' +
    '  "d"        : "Gwen",\n' +
    '  "answer"   : "c"\n' +
    '  },\n' +
    '  {"question": 4,\n' +
    '  "a"        : "Rek\'sai",\n' +
    '  "b"        : "Kassadin",\n' +
    '  "c"        : "Chogath",\n' +
    '  "d"        : "Kha\'zix",\n' +
    '  "answer"   : "a"\n' +
    '  },\n' +
    '  {"question": 5,\n' +
    '  "a"        : "Ivern",\n' +
    '  "b"        : "Zyra",\n' +
    '  "c"        : "Maokai",\n' +
    '  "d"        : "Zac",\n' +
    '  "answer"   : "b"\n' +
    '  },\n' +
    '  {"question": 6,\n' +
    '  "a"        : "Thresh",\n' +
    '  "b"        : "Mordekaiser",\n' +
    '  "c"        : "Senna",\n' +
    '  "d"        : "Yorick",\n' +
    '  "answer"   : "d"\n' +
    '  },\n' +
    '  {"question": 7,\n' +
    '  "a"        : "Lissandra",\n' +
    '  "b"        : "Ashe",\n' +
    '  "c"        : "Sejuani",\n' +
    '  "d"        : "Trundle",\n' +
    '  "answer"   : "d"\n' +
    '  },\n' +
    '  {"question": 8,\n' +
    '  "a"        : "Zoe",\n' +
    '  "b"        : "Soraka",\n' +
    '  "c"        : "Seraphine",\n' +
    '  "d"        : "Sona",\n' +
    '  "answer"   : "b"\n' +
    '  },\n' +
    '  {"question": 9,\n' +
    '  "a"        : "Sion",\n' +
    '  "b"        : "Darius",\n' +
    '  "c"        : "Ornn",\n' +
    '  "d"        : "Garen",\n' +
    '  "answer"   : "a"\n' +
    '  },\n' +
    '  {"question": 10,\n' +
    '  "a"        : "Rammus",\n' +
    '  "b"        : "Malphite",\n' +
    '  "c"        : "Gnar",\n' +
    '  "d"        : "Taliyah",\n' +
    '  "answer"   : "c"\n' +
    '  }\n' +
    ']';

const VOICELINE_ANSWERS = '[\n' +
    '  {"question": 1,\n' +
    '  "a"        : "Thresh",\n' +
    '  "b"        : "Volibear",\n' +
    '  "c"        : "Vladimir",\n' +
    '  "d"        : "Aatrox",\n' +
    '  "answer"   : "d"\n' +
    '  },\n' +
    '  {"question2":2,\n' +
    '  "a"         : "Camille",\n' +
    '  "b"         : "Caitlyn",\n' +
    '  "c"         : "Fiora",\n' +
    '  "d"         : "Evelynn",\n' +
    '  "answer"    : "a"\n' +
    '  },\n' +
    '  {"question": 3,\n' +
    '  "a"        : "Hecarim",\n' +
    '  "b"        : "Thresh",\n' +
    '  "c"        : "Yorick",\n' +
    '  "d"        : "Mordekaiser",\n' +
    '  "answer"   : "a"\n' +
    '  },\n' +
    '  {"question": 4,\n' +
    '  "a"        : "Pyke",\n' +
    '  "b"        : "Shaco",\n' +
    '  "c"        : "Jayce",\n' +
    '  "d"        : "Jhin",\n' +
    '  "answer"   : "d"\n' +
    '  },\n' +
    '  {"question": 5,\n' +
    '  "a"        : "Xayah",\n' +
    '  "b"        : "Sejuani",\n' +
    '  "c"        : "Katarina",\n' +
    '  "d"        : "Leona",\n' +
    '  "answer"   : "c"\n' +
    '  },\n' +
    '  {"question": 6,\n' +
    '  "a"        : "Samira",\n' +
    '  "b"        : "Nilah",\n' +
    '  "c"        : "Soraka",\n' +
    '  "d"        : "Zoe",\n' +
    '  "answer"   : "b"\n' +
    '  },\n' +
    '  {"question":7,\n' +
    '  "a"        : "Rell",\n' +
    '  "b"        : "Poppy",\n' +
    '  "c"        : "Qiyana",\n' +
    '  "d"        : "Morgana",\n' +
    '  "answer"   : "a"\n' +
    '  },\n' +
    '  {"question": 8,\n' +
    '  "a"        : "Graves",\n' +
    '  "b"        : "Malphite",\n' +
    '  "c"        : "Rammus",\n' +
    '  "d"        : "Galio",\n' +
    '  "answer"   : "b"\n' +
    '  },\n' +
    '  {"question": 9,\n' +
    '  "a"        : "Thresh",\n' +
    '  "b"        : "Veigar",\n' +
    '  "c"        : "Sion",\n' +
    '  "d"        : "Xerath",\n' +
    '  "answer"   : "d"\n' +
    '  },\n' +
    '  {"question": 10,\n' +
    '  "a"        : "Trundle",\n' +
    '  "b"        : "Draven",\n' +
    '  "c"        : "Tryndamere",\n' +
    '  "d"        : "Renekton",\n' +
    '  "answer"   : "c"\n' +
    '  }\n' +
    ']'