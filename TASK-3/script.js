// ================= QUIZ =================

const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
        correct: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "Python"],
        correct: 1
    },
    {
        question: "Which language makes websites interactive?",
        options: ["Java", "JavaScript", "C++"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progressBar");

function updateProgressBar() {
    const progressPercent = (currentQuestion / quizData.length) * 100;
    progressBar.style.width = progressPercent + "%";
}

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        optionsEl.innerHTML += `
            <div>
                <input type="radio" name="option" value="${index}">
                ${option}
            </div>
        `;
    });

    updateProgressBar();
}

nextBtn.addEventListener("click", () => {

    const selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an answer");
        return;
    }

    if (parseInt(selected.value) === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        progressBar.style.width = "100%";
        questionEl.innerHTML = "🎉 Quiz Completed!";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerHTML = `Your Score: ${score}/${quizData.length}`;
    }
});

loadQuestion();


// ================= JOKE API =================

const jokeBtn = document.getElementById("jokeBtn");
const jokeEl = document.getElementById("joke");

jokeBtn.addEventListener("click", async () => {

    jokeEl.innerText = "Loading...";

    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");

        if (!response.ok) {
            throw new Error("Network response not ok");
        }

        const data = await response.json();
        jokeEl.innerText = data.value;

    } catch (error) {
        console.error(error);
        jokeEl.innerText = "Error loading joke. Check internet or console.";
    }

});
