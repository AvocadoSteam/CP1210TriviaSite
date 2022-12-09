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

    count = 4;
    for (let i = 0; i < count; i++) { // adds ability answers
        let randomSelection = Math.floor(Math.random() * 10); // select out of 10 questions
        if (Object.values(ABILITY_ANSWERS)[randomSelection] !== 1) {
            questionList.push(Object.values(ABILITY_ANSWERS)[randomSelection]);
            ABILITY_ANSWERS[randomSelection] = 1;
        } else {
            i--;
        }

    }

    return questionList;
}

const updateQuestionImage = () => {
    questionList.shift();
    document.getElementById("sourceImage").src=questionList[0].source;
    $("#A").textContent=questionList[0].answers.a;
    $("#B").textContent=questionList[0].answers.b;
    $("#C").textContent=questionList[0].answers.c;
    $("#D").textContent=questionList[0].answers.d;
    return questionList;
}

// used to update the champion voicelines
const updateQuestionVoiceline = () => {
    questionList.shift();
    document.getElementById("question").textContent="What champion has this voiceline?";
    document.getElementById("sourceVoiceline").src=questionList[0].source;
    $("#A").textContent=questionList[0].answers.a;
    $("#B").textContent=questionList[0].answers.b;
    $("#C").textContent=questionList[0].answers.c;
    $("#D").textContent=questionList[0].answers.d;
    return questionList;
}

// used to update Ability Name text
const updateQuestionAbility = () => {
    questionList.shift();
    document.getElementById("question").textContent="What champion has this ability name?";
    document.getElementById("sourceAbility").textContent=questionList[0].source;
    $("#A").textContent=questionList[0].answers.a;
    $("#B").textContent=questionList[0].answers.b;
    $("#C").textContent=questionList[0].answers.c;
    $("#D").textContent=questionList[0].answers.d;
    return questionList;
}

/*
Adds +1 to number of guesses
 */
const keepScore = () => {
    if (questionCount === 12) {
        console.log("Finish")
    } else {
        questionCount++;
        $("#score").textContent=correctGuesses + " / " + questionCount;
    }
}

/*
Runs once a button is clicked
 */
const validateAnswer = () => {
    if (questionCount < 4) {
        updateQuestionImage();
    }
    if (questionCount < 8 && 4 <= questionCount ) {
        document.getElementById("sourceImage").classList.add("hidden");
        document.getElementById("sourceVoiceline").classList.remove("hidden");
        updateQuestionVoiceline();
    }
    if (questionCount < 12 && 8 <= questionCount) {
        document.getElementById("sourceVoiceline").classList.add("hidden");
        document.getElementById("sourceAbility").classList.remove("hidden");
        updateQuestionAbility();
    }
    keepScore();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sourceImage").src=questionList[0].source;
    $("#question").textContent="What champion has this ability icon?";
    $("#A").textContent=questionList[0].answers.a;
    $("#B").textContent=questionList[0].answers.b;
    $("#C").textContent=questionList[0].answers.c;
    $("#D").textContent=questionList[0].answers.d;
    $("#score").textContent=correctGuesses + " / " + questionCount;

    $("#choices").addEventListener("click", validateAnswer);


    $("#A").addEventListener("click", (evt) => { // these are tests
        if ($("#A").textContent === questionList[0].answers.answer) {
            correctGuesses++;
        }
    });

    $("#B").addEventListener("click", (evt) => {
        if ($("#B").textContent === questionList[0].answers.answer) {
            correctGuesses++;
        }
    });

    $("#C").addEventListener("click", (evt) => {
        if ($("#C").textContent === questionList[0].answers.answer) {
            correctGuesses++;
        }
    });

    $("#D").addEventListener("click", (evt) => {
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
        source: "media/icons/q1.webp",
        answers: {
        a        : "Annie",
        b        : "Renekton",
        c        : "Caitlyn",
        d        : "Diana",
        answer   : "Annie"
        }
    },
    {question: 2,
        source: "media/icons/q2.webp",
        answers: {
        a        : "Skarner",
        b        : "Darius",
        c        : "Azir",
        d        : "Thresh",
        answer   : "Azir"
        }
    },
    {question: 3,
        source: "media/icons/q3.webp",
        answers: {
        a        : "Kaisa",
        b        : "Zeri",
        c        : "Nilah",
        d        : "Gwen",
        answer   : "Nilah"
        }
    },
    {question: 4,
        source: "media/icons/q4.webp",
        answers: {
        a        : "Rek'sai",
        b        : "Kassadin",
        c        : "Chogath",
        d        : "Kha'zix",
        answer   : "Rek'sai"
        }
    },
    {question: 5,
        source: "media/icons/q5.webp",
        answers: {
        a        : "Ivern",
        b        : "Zyra",
        c        : "Maokai",
        d        : "Zac",
        answer   : "Zyra"
        }
    },
    {question: 6,
        source: "media/icons/q6.webp",
        answers: {
        a        : "Thresh",
        b        : "Mordekaiser",
        c        : "Senna",
        d        : "Yorick",
        answer   : "Yorick"
        }
    },
    {question: 7,
        source: "media/icons/q7.webp",
        answers: {
        a        : "Lissandra",
        b        : "Ashe",
        c        : "Sejuani",
        d        : "Trundle",
        answer   : "Trundle"
        }
    },
    {question: 8,
        source: "media/icons/q8.webp",
        answers: {
        a        : "Zoe",
        b        : "Soraka",
        c        : "Seraphine",
        d        : "Sona",
        answer   : "Soraka"
        }
    },
    {question: 9,
        source: "media/icons/q9.webp",
        answers: {
        a        : "Sion",
        b        : "Darius",
        c        : "Ornn",
        d        : "Garen",
        answer   : "Sion"
        }
    },
    {question: 10,
        source: "media/icons/q10.webp",
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
        source: "media/voiceline/q1.ogg",
        answers: {
            a        : "Thresh",
            b        : "Volibear",
            c        : "Vladimir",
            d        : "Aatrox",
            answer   : "Aatrox"
        }
    },
    {question: 2,
        source: "media/voiceline/q2.ogg",
        answers: {
            a        : "Camille",
            b        : "Caitlyn",
            c        : "Fiora",
            d        : "Evelynn",
            answer   : "Camille"
        }
    },
    {question: 3,
        source: "media/voiceline/q3.ogg",
        answers: {
            a        : "Hecarim",
            b        : "Thresh",
            c        : "Yorick",
            d        : "Mordekaiser",
            answer   : "Hecarim"
        }
    },
    {question: 4,
        source: "media/voiceline/q4.ogg",
        answers: {
            a        : "Pyke",
            b        : "Shaco",
            c        : "Jayce",
            d        : "Jhin",
            answer   : "Jhin"
        }
    },
    {question: 5,
        source: "media/voiceline/q5.ogg",
        answers: {
            a        : "Xayah",
            b        : "Sejuani",
            c        : "Katarina",
            d        : "Leona",
            answer   : "Katarina"
        }
    },
    {question: 6,
        source: "media/voiceline/q6.ogg",
        answers: {
            a        : "Samira",
            b        : "Nilah",
            c        : "Soraka",
            d        : "Zoe",
            answer   : "Nilah"
        }
    },
    {question: 7,
        source: "media/voiceline/q7.ogg",
        answers: {
            a        : "Rell",
            b        : "Poppy",
            c        : "Qiyana",
            d        : "Morgana",
            answer   : "Rell"
        }
    },
    {question: 8,
        source: "media/voiceline/q8.ogg",
        answers: {
            a        : "Graves",
            b        : "Malphite",
            c        : "Rammus",
            d        : "Galio",
            answer   : "Malphite"
        }
    },
    {question: 9,
        source: "media/voiceline/q9.ogg",
        answers: {
            a        : "Thresh",
            b        : "Veigar",
            c        : "Sion",
            d        : "Xerath",
            answer   : "Xerath"
        }
    },
    {question: 10,
        source: "media/voiceline/q10.ogg",
        answers: {
            a        : "Trundle",
            b        : "Draven",
            c        : "Tryndamere",
            d        : "Renekton",
            answer   : "Tryndamere"
        }
    }
]

const ABILITY_ANSWERS = [
    {question: 1,
        source: "Feast",
        answers: {
            a        : "Cho'gath",
            b        : "Dr. Mundo",
            c        : "Vladimir",
            d        : "Aatrox",
            answer   : "Cho'gath"
        }
    },
    {question: 2,
        source: "Neurotoxin",
        answers: {
            a        : "Teemo",
            b        : "Singed",
            c        : "Elise",
            d        : "Casseopia",
            answer   : "Elise"
        }
    },
    {question: 3,
        source: "Prophet of an Elder God",
        answers: {
            a        : "Anivia",
            b        : "Illaoi",
            c        : "Ornn",
            d        : "Volibear",
            answer   : "Illaoi"
        }
    },
    {question: 4,
        source: "Eye of the Storm",
        answers: {
            a        : "Kayn",
            b        : "Kalista",
            c        : "Jinx",
            d        : "Janna",
            answer   : "Janna"
        }
    },
    {question: 5,
        source: "Lilting Lullaby",
        answers: {
            a        : "Xayah",
            b        : "Zoe",
            c        : "Lulu",
            d        : "Lillia",
            answer   : "Lillia"
        }
    },
    {question: 6,
        source: "Wither",
        answers: {
            a        : "Ryze",
            b        : "Nasus",
            c        : "Rammus",
            d        : "Mordekaiser",
            answer   : "Nasus"
        }
    },
    {question: 7,
        source: "Heroic Charge",
        answers: {
            a        : "Kled",
            b        : "Sion",
            c        : "Poppy",
            d        : "Shen",
            answer   : "Poppy"
        }
    },
    {question: 8,
        source: "Break the Mold",
        answers: {
            a        : "Ivern",
            b        : "Leona",
            c        : "Rell",
            d        : "Diana",
            answer   : "Rell"
        }
    },
    {question: 9,
        source: "The Equalizer",
        answers: {
            a        : "Rumble",
            b        : "Sett",
            c        : "Shaco",
            d        : "Skarner",
            answer   : "Rumble"
        }
    },
    {question: 10,
        source: "Time Warp",
        answers: {
            a        : "Ekko",
            b        : "Zilean",
            c        : "Xerath",
            d        : "Veigar",
            answer   : "Zilean"
        }
    }
]

const questionList = CreatingQuestionListing();
let questionCount = 1;
let correctGuesses = 0;