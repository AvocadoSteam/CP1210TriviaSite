"use strict";
const $ = selector => document.querySelector(selector);

const CreatingQuestionListing = () => {
    let questionList = []; // place to add questions
    let count = 4; // 12 questions to choose
    //TODO put values inside of VOICELINE and ABILITY answers

    for (let i = 0; i < count; i++) { // adds icon answers
        let randomSelection = Math.floor(Math.random() * 10); // select out of 10 questions
        if (Object.values(ICON_ANSWERS)[randomSelection] !== 1) {
            questionList.push(Object.values(ICON_ANSWERS)[randomSelection]);
            ICON_ANSWERS[randomSelection] = 1;
        } else {
            i--;
        }
    }
    for (let i = 0; i < count; i++)


    count = 4;
    for (let i = 0; i < count; i++) { // adds voiceline answers
        let randomSelection = Math.floor(Math.random() * 10); // select out of 10 questions
        if (Object.values(VOICELINE_ANSWERS)[randomSelection] !== 1) {
            questionList.push(Object.values(VOICELINE_ANSWERS)[randomSelection]);
            VOICELINE_ANSWERS[randomSelection] = 1;
        } else {
            i--;
        }
    }
    /*
    count = 4;
    for (let i = 0; i < count; i++) { // adds ability answers
        let randomSelection = Math.floor(Math.random() * 10); // select out of 10 questions
        questionList.push(Object.values(ABILITY_ANSWERS)[randomSelection]);
       ABILITY_ANSWERS[randomSelection] = 1;
    }
    */
    return questionList;
}

const updateQuestion = () => {
    questionList.shift();
    $("#A").textContent=questionList[0].answers.a;
    $("#B").textContent=questionList[0].answers.b;
    $("#C").textContent=questionList[0].answers.c;
    $("#D").textContent=questionList[0].answers.d;
    questionCount++;
    return questionList;
}

/*
Adds +1 to number of guesses
 */
const keepScore = () => {
    totalGuesses++;
    $("#score").textContent=correctGuesses + " / " + totalGuesses;
}

/*
Runs once a button is clicked
 */
const validateAnswer = () => {
    if (questionCount !== 8) {
        if ($("#A").textContent === questionList[0].answers.answer.a) {
            correctGuesses++;
        } else if ($("#B").textContent === questionList[0].answers.answer.b) {
            correctGuesses++;
        } else if ($("#C").textContent === questionList[0].answers.answer.c) {
            correctGuesses++;
        } else if ($("#D").textContent === questionList[0].answers.answer.d) {
            correctGuesses++;
        }

        updateQuestion();
        keepScore();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    $("#question").textContent="What champ has this ability icon?";
    $("#A").textContent=questionList[0].answers.a;
    $("#B").textContent=questionList[0].answers.b;
    $("#C").textContent=questionList[0].answers.c;
    $("#D").textContent=questionList[0].answers.d;

    $("#choices").addEventListener("click", validateAnswer);


    $("#A").addEventListener("click", (evt) => { // these are tests
        console.log("a");
        if ($("#A").textContent === questionList[0].answers.answer) {
            correctGuesses++;
        }
    });

    $("#B").addEventListener("click", (evt) => {
        console.log("b");
        if ($("#B").textContent === questionList[0].answers.answer) {
            correctGuesses++;
        }
    });

    $("#C").addEventListener("click", (evt) => {
        console.log("c");
        if ($("#C").textContent === questionList[0].answers.answer) {
            correctGuesses++;
        }
    });

    $("#D").addEventListener("click", (evt) => {
        console.log("d");
        if ($("#D").textContent === questionList[0].answers.answer) {
            correctGuesses++;
        }
    });


    console.log(Object.values(questionList));
    console.log(Object.values(ICON_ANSWERS));
    console.log(questionList[0].answers)
})

const ICON_ANSWERS = [
    {question: 1,
    answers: {
        a        : "Annie",
        b        : "Renekton",
        c        : "Caitlyn",
        d        : "Diana",
        answer   : "Annie"
        }
    },
    {question: 2,
    answers: {
        a        : "Skarner",
        b        : "Darius",
        c        : "Azir",
        d        : "Thresh",
        answer   : "Azir"
        }
    },
    {question: 3,
    answers: {
        a        : "Kaisa",
        b        : "Zeri",
        c        : "Nilah",
        d        : "Gwen",
        answer   : "Nilah"
        }
    },
    {question: 4,
    answers: {
        a        : "Rek'sai",
        b        : "Kassadin",
        c        : "Chogath",
        d        : "Kha'zix",
        answer   : "Rek'sai"
        }
    },
    {question: 5,
    answers: {
        a        : "Ivern",
        b        : "Zyra",
        c        : "Maokai",
        d        : "Zac",
        answer   : "Zyra"
        }
    },
    {question: 6,
    answers: {
        a        : "Thresh",
        b        : "Mordekaiser",
        c        : "Senna",
        d        : "Yorick",
        answer   : "Yorick"
        }
    },
    {question: 7,
    answers: {
        a        : "Lissandra",
        b        : "Ashe",
        c        : "Sejuani",
        d        : "Trundle",
        answer   : "Trundle"
        }
    },
    {question: 8,
    answers: {
        a        : "Zoe",
        b        : "Soraka",
        c        : "Seraphine",
        d        : "Sona",
        answer   : "Soraka"
        }
    },
    {question: 9,
    answers: {
        a        : "Sion",
        b        : "Darius",
        c        : "Ornn",
        d        : "Garen",
        answer   : "Sion"
        }
    },
    {question: 10,
    answers: {
        a        : "Rammus",
        b        : "Malphite",
        c        : "Gnar",
        d        : "Taliyah",
        answer   : "Gnar"
        }
    }
]

const VOICELINE_ANSWERS = [
    {question: 1,
        answers: {
            a        : "Thresh",
            b        : "Volibear",
            c        : "Vladimir",
            d        : "Aatrox",
            answer   : "Aatrox"
        }
    },
    {question: 2,
        answers: {
            a        : "Camille",
            b        : "Caitlyn",
            c        : "Fiora",
            d        : "Evelynn",
            answer   : "Camille"
        }
    },
    {question: 3,
        answers: {
            a        : "Hecarim",
            b        : "Thresh",
            c        : "Yorick",
            d        : "Mordekaiser",
            answer   : "Hecarim"
        }
    },
    {question: 4,
        answers: {
            a        : "Pyke",
            b        : "Shaco",
            c        : "Jayce",
            d        : "Jhin",
            answer   : "Jhin"
        }
    },
    {question: 5,
        answers: {
            a        : "Xayah",
            b        : "Sejuani",
            c        : "Katarina",
            d        : "Leona",
            answer   : "Katarina"
        }
    },
    {question: 6,
        answers: {
            a        : "Samira",
            b        : "Nilah",
            c        : "Soraka",
            d        : "Zoe",
            answer   : "Nilah"
        }
    },
    {question: 7,
        answers: {
            a        : "Rell",
            b        : "Poppy",
            c        : "Qiyana",
            d        : "Morgana",
            answer   : "Rell"
        }
    },
    {question: 8,
        answers: {
            a        : "Graves",
            b        : "Malphite",
            c        : "Rammus",
            d        : "Galio",
            answer   : "Malphite"
        }
    },
    {question: 9,
        answers: {
            a        : "Thresh",
            b        : "Veigar",
            c        : "Sion",
            d        : "Xerath",
            answer   : "Xerath"
        }
    },
    {question: 10,
        answers: {
            a        : "Trundle",
            b        : "Draven",
            c        : "Tryndamere",
            d        : "Renekton",
            answer   : "Tryndamere"
        }
    }
]

const ABILITY_ANSWERS = '{' +
    '"question1": [' +
    '],' +
    '"question2": [' +
    '],' +
    '"question3": [' +
    '],' +
    '"question4": [' +
    '],' +
    '"question5": [' +
    '],' +
    '"question6": [' +
    '],' +
    '"question7": [' +
    '],' +
    '"question8": [' +
    '],' +
    '"question9": [' +
    '],' +
    '"question10": [' +
    ']' +
    '}';

const questionList = CreatingQuestionListing();
let questionCount = 0;
let correctGuesses = 0;
let totalGuesses = 0;