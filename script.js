const $ = selector => document.querySelector(selector);

const validateAnswer = () => {
    console.log("testing"); // test to see if clicking a button works
    const parsed = JSON.parse(ICON_TEST);

    console.log(Object.values(parsed)[1]); // access second question answers
    console.log(parsed["question2"]); // same as above

}

const selectNextQuestion = () => {
    console.log("placeholder");
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
    '"question6: [' +
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