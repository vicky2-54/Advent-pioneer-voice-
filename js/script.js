document.getElementById("askBtn").addEventListener("click", () => {
    let question = document.getElementById("question").value;
    let answerDiv = document.getElementById("answer");

    // For now, just echo the question
    answerDiv.innerText = "You asked: " + question + "\nAnswer will come soon!";
});
