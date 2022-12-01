const $ = selector => document.querySelector(selector);

const CreatingQuestionListing = () => {
    let questionList = []; // place to add questions
    let count = 4; // 12 questions to choose
    let parsedIcons = JSON.parse(ICON_ANSWERS);
    let parsedVoicelines = JSON.parse(VOICELINE_ANSWERS);
    let parsedAbility = JSON.parse(ABILITY_ANSWERS);
    //TODO put values inside of VOICELINE and ABILITY answers

    for (let i = 0; i < count; i++) { // adds icon answers
        let randomSelection = Math.floor(Math.random() * 10) + 1; // select out of 10 questions
        questionList.push(Object.values(parsedIcons)[randomSelection]);
        delete parsedIcons[randomSelection];
    }
    count = 4;
    for (let i = 0; i < count; i++) { // adds voiceline answers
        let randomSelection = Math.floor(Math.random() * 10) + 1; // select out of 10 questions
        questionList.push(Object.values(parsedVoicelines)[randomSelection]);
        delete parsedVoicelines[randomSelection];
    }
    count = 4;
    for (let i = 0; i < count; i++) { // adds ability answers
        let randomSelection = Math.floor(Math.random() * 10) + 1; // select out of 10 questions
        questionList.push(Object.values(parsedAbility)[randomSelection]);
        delete parsedAbility[randomSelection];
    }
    return questionList;
}

const updateQuestion = () => {
    let questionList = firstQuestion;
    questionList.shift();
    console.log(firstQuestion);
    $("#A").textContent=firstQuestion[0][0];
    $("#B").textContent=firstQuestion[0][1];
    $("#C").textContent=firstQuestion[0][2];
    $("#D").textContent=firstQuestion[0][3];
    questionCount++;
    return questionList;
}

const keepScore = () => {
    if ($("#A").textContent == firstQuestion[questionCount][4]) {
        correctGuesses++;
    } else if ($("#B").textContent == firstQuestion[questionCount][4]) {
        correctGuesses++;
    } else if ($("#C").textContent == firstQuestion[questionCount][4]) {
        correctGuesses++;
    } else if ($("#D").textContent == firstQuestion[questionCount][4]) {
        correctGuesses++;
    }
    totalGuesses++;
    let updateContent = correctGuesses + " / " + totalGuesses;
    $("#score").textContent=updateContent;
}

/*

 */
const validateAnswer = () => {
    console.log("testing"); // test to see if clicking a button works
    const parsed = JSON.parse(ICON_ANSWERS);

    console.log(firstQuestion);
    updateQuestion();
    keepScore();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#question").textContent="What champ has this ability icon?";
    $("#A").textContent=firstQuestion[0][0];
    $("#B").textContent=firstQuestion[0][1];
    $("#C").textContent=firstQuestion[0][2];
    $("#D").textContent=firstQuestion[0][3];

    // $("button").addEventListener("click", validateAnswer);
    $("#A").addEventListener("click", (evt) => {
        console.log("a");
    });
    $("#B").addEventListener("click", (evt) => {
        console.log("b");
    });
    $("#C").addEventListener("click", (evt) => {
        console.log("a");
    });
    $("#D").addEventListener("click", (evt) => {
        console.log("d");
    });
})

const ICON_ANSWERS = '{' +
    '"question1": [' +
    '"Annie", "Renekton", "Caitlyn", "Diana", "Annie"],' +
    '"question2": [' +
    '"Skarner", "Darius", "Azir", "Thresh", "Azir"],' +
    '"question3": [' +
    '"Kai\'sa", "Zeri", "Nilah", "Gwen", "Nilah"],' +
    '"question4": [' +
    '"Rek\'sai", "Kassadin", "Cho\'gath", "Kha\'zix", "Rek\'sai"],' +
    '"question5": [' +
    '"Ivern", "Zyra", "Maokai", "Zac", "Zyra"],' +
    '"question6": [' +
    '"Thresh", "Mordekaiser", "Senna", "Yorick", "Yorick"],' +
    '"question7": [' +
    '"Lissandra", "Ashe", "Sejuani", "Trundle", "Trundle"],' +
    '"question8": [' +
    '"Zoe", "Soraka", "Seraphine", "Sona", "Soraka"],' +
    '"question9": [' +
    '"Sion", "Darius", "Ornn", "Garen", "Sion"],' +
    '"question10": [' +
    '"Rammus", "Malphite", "Gnar", "Taliyah", "Gnar"]' +
    '}';

const VOICELINE_ANSWERS = '{' +
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

const firstQuestion = CreatingQuestionListing();
let questionCount = 0;
let correctGuesses = 0;
let totalGuesses = 0;