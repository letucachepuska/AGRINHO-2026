// ========================================
// QUIZ - AGRO SUSTENTÁVEL
// ========================================

const questions = [
    {
        question: "O que significa agricultura sustentável?",
        answers: [
            "Produzir o máximo possível sem se preocupar com o meio ambiente.",
            "Produzir alimentos preservando os recursos naturais e pensando nas futuras gerações.",
            "Parar completamente de utilizar tecnologias no campo.",
            "Utilizar apenas produtos químicos nas plantações."
        ],
        correct: 1
    },

    {
        question: "Qual destas práticas ajuda a economizar água na agricultura?",
        answers: [
            "Deixar a irrigação ligada o dia inteiro.",
            "Aumentar o desperdício de água.",
            "Utilizar sistemas de irrigação eficientes.",
            "Retirar todas as plantas das áreas próximas aos rios."
        ],
        correct: 2
    },

    {
        question: "Por que a rotação de culturas é importante?",
        answers: [
            "Porque pode ajudar a preservar a qualidade do solo.",
            "Porque elimina a necessidade de água.",
            "Porque impede qualquer tipo de produção agrícola.",
            "Porque aumenta obrigatoriamente o uso de agrotóxicos."
        ],
        correct: 0
    },

    {
        question: "Qual recurso natural é fundamental para a agricultura?",
        answers: [
            "Somente o petróleo.",
            "Somente o plástico.",
            "Água e solo.",
            "Somente os combustíveis."
        ],
        correct: 2
    },

    {
        question: "Qual é um dos principais objetivos do agro sustentável?",
        answers: [
            "Produzir sem considerar as consequências ambientais.",
            "Equilibrar produção, preservação ambiental e qualidade de vida.",
            "Aumentar o desperdício de alimentos.",
            "Eliminar todas as áreas de preservação."
        ],
        correct: 1
    }
];


// ========================================
// ELEMENTOS
// ========================================

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const nextButton = document.getElementById("next-btn");

const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");

const resultElement = document.getElementById("result");
const resultText = document.getElementById("result-text");

const restartButton = document.getElementById("restart-btn");


// ========================================
// VARIÁVEIS
// ========================================

let currentQuestion = 0;
let score = 0;


// ========================================
// INICIAR QUIZ
// ========================================

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    resultElement.classList.add("hidden");

    nextButton.classList.remove("hidden");

    scoreElement.textContent = "Pontos: 0";

    showQuestion();
}


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function showQuestion() {

    resetAnswers();

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumber.textContent =
        `Questão ${currentQuestion + 1} de ${questions.length}`;


    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer");

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answersElement.appendChild(button);

    });
}


// ========================================
// LIMPAR RESPOSTAS
// ========================================

function resetAnswers() {

    answersElement.innerHTML = "";

    nextButton.disabled = true;

}


// ========================================
// SELECIONAR RESPOSTA
// ========================================

function selectAnswer(selectedIndex) {

    const correctIndex = questions[currentQuestion].correct;

    const buttons = document.querySelectorAll(".answer");


    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

        if (
            index === selectedIndex &&
            selectedIndex !== correctIndex
        ) {
            button.classList.add("wrong");
        }

    });


    if (selectedIndex === correctIndex) {

        score++;

        scoreElement.textContent = `Pontos: ${score}`;

    }


    nextButton.disabled = false;
}


// ========================================
// PRÓXIMA PERGUNTA
// ========================================

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// ========================================
// RESULTADO
// ========================================

function showResult() {

    questionElement.classList.add("hidden");

    answersElement.classList.add("hidden");

    nextButton.classList.add("hidden");

    questionNumber.classList.add("hidden");

    resultElement.classList.remove("hidden");


    let message = "";


    if (score === 5) {

        message =
            "🌱 Excelente! Você mostrou que entende muito sobre sustentabilidade no campo.";

    } else if (score >= 3) {

        message =
            "🌿 Muito bem! Você já conhece bastante sobre agro sustentável.";

    } else {

        message =
            "🌾 Você pode aprender ainda mais! Explore o site e tente novamente.";

    }


    resultText.textContent =
        `Você acertou ${score} de ${questions.length} perguntas. ${message}`;

}


// ========================================
// REINICIAR
// ========================================

restartButton.addEventListener("click", () => {

    questionElement.classList.remove("hidden");

    answersElement.classList.remove("hidden");

    nextButton.classList.remove("hidden");

    questionNumber.classList.remove("hidden");

    startQuiz();

});


// ========================================
// INICIAR
// ========================================

startQuiz();
