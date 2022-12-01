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
    couint = 4;
    for (let i = 0; i < count; i++) { // adds ability answers
        let randomSelection = Math.floor(Math.random() * 11) + 1; // select out of 10 questions
        questionList.push(Object.values(parsedAbility)[randomSelection]);
        delete parsedAbility[randomSelection];
    }
    return questionList;
}

const updateQuestion = () => {
    let questionList = CreatingQuestionListing();
    questionList.shift();
    return questionList;
}

const keepScore = () => {
    let correctGuesses = 0;
    let totalGuesses = 0;
    // if (guess = true) {
    //     correctGuesses++;
    // }
    totalGuesses++;
    let updateContent = correctGuesses + " / " + totalGuesses;
    $("#score").textContent=updateContent;
}

const validateAnswer = () => {
    console.log("testing"); // test to see if clicking a button works
    const parsed = JSON.parse(ICON_ANSWERS);

    keepScore();
    updateQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    let firstQuestion = CreatingQuestionListing();

    $("#question").textContent="What champ has this ability?";
    $("#A").textContent=firstQuestion[0][0];
    $("#B").textContent=firstQuestion[0][1];
    $("#C").textContent=firstQuestion[0][2];
    $("#D").textContent=firstQuestion[0][3];

    $(".selections").addEventListener("click", validateAnswer);

})

const ICON_ANSWERS = '{' +
    '"question1": [' +
    '"Annie", "Renekton", "Caitlyn", "Diana", "a"],' +
    '"question2": [' +
    '"Skarner", "Darius", "Azir", "Thresh", "c"],' +
    '"question3": [' +
    '"Kai\'sa", "Zeri", "Nilah", "Gwen", "c"],' +
    '"question4": [' +
    '"Rek\'sai", "Kassadin", "Cho\'gath", "Kha\'zix", "a"],' +
    '"question5": [' +
    '"Ivern", "Zyra", "Maokai", "Zac", "b"],' +
    '"question6": [' +
    '"Thresh", "Mordekaiser", "Senna", "Yorick", "d"],' +
    '"question7": [' +
    '"Lissandra", "Ashe", "Sejuani", "Trundle", "d"],' +
    '"question8": [' +
    '"Zoe", "Soraka", "Seraphine", "Sona", "b"],' +
    '"question9": [' +
    '"Sion", "Darius", "Ornn", "Garen", "a"],' +
    '"question10": [' +
    '"Rammus", "Malphite", "Gnar", "Taliyah", "c"]' +
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