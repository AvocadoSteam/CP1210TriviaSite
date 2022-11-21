document.addEventListener("DOMContentLoaded", () => {

    console.log("Placeholder");
    // data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
    // data = JSON.parse("/answers.json");
    let q1 = '[{"a" : "Annie","b" : "Renekton","c": "Caitlyn","d": "Diana","answer": "a"}]';
    // console.log(q1)


    const testData = JSON.parse(q1);
    for (let i = 0; i <= 10; i++) {
        console.log(testData[i]);
    };

    // i cannot figure out how to parse json

})