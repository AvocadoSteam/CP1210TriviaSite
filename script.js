document.addEventListener("DOMContentLoaded", () => {

    console.log("Placeholder");
    // data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
    // data = JSON.parse("/answers.json");
    let q1 = '[{"a" : "Annie","b" : "Renekton","c": "Caitlyn","d": "Diana","answer": "a"}]';
    // console.log(q1)


    const testData = JSON.parse(icon_answers);
    for (let i = 0; i <= 10; i++) {
        console.log(testData[i]);
    };

})

const icon_answers = '[\n' +
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