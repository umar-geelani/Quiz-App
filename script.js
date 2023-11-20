const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const option = document.createElement("button");
        option.textContent = question.options[i];
        option.classList.add("option");
        option.addEventListener("click", () => checkAnswer(i));
        optionsElement.appendChild(option);
    }
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (question.correctIndex === selectedIndex) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    scoreElement.textContent = "Your Score: " + score + " out of " + questions.length;
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => loadQuestion());

loadQuestion();
