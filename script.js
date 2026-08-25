// Dados do Quiz de Agro Sustentável
const quizQuestions = [
  {
    question: "Qual o principal objetivo do manejo consciente da água na agricultura?",
    options: [
      "Aumentar a erosão do solo",
      "Evitar o desperdício dos recursos hídricos e garantir a irrigação eficiente",
      "Eliminar totalmente a necessidade de chuvas",
      "Utilizar apenas água do mar"
    ],
    correct: 1
  },
  {
    question: "Como o uso de esterco e resíduos orgânicos ajuda a lavoura?",
    options: [
      "Substitui a luz do sol",
      "Polui o lençol freático",
      "Enriquece a microbiota do solo e fornece nutrientes naturais",
      "Impede o crescimento das plantas"
    ],
    correct: 2
  },
  {
    question: "Por que a preservação da biodiversidade é importante nas fazendas?",
    options: [
      "Auxilia no controle biológico de pragas e melhora a polinização",
      "Ocupa espaço que deveria ser concretado",
      "Reduz drasticamente a qualidade do ar",
      "Aumenta a necessidade de agrotóxicos"
    ],
    correct: 0
  },
  {
    question: "Qual a vantagem de integrar energia renovável (como a solar) no agronegócio?",
    options: [
      "Aumentar a emissão de carbono",
      "Diminuir os custos operacionais e reduzir impactos ambientais",
      "Impossibilitar o trabalho noturno",
      "Diminuir a produtividade das plantas"
    ],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Elementos do DOM
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const quizScreenEl = document.getElementById("quiz-screen");
const resultScreenEl = document.getElementById("result-screen");
const scoreTextEl = document.getElementById("score-text");
const feedbackTextEl = document.getElementById("feedback-text");
const btnRestart = document.getElementById("btn-restart");

// Inicialização do Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  totalQuestionsEl.textContent = quizQuestions.length;
  quizScreenEl.classList.remove("hidden");
  resultScreenEl.classList.add("hidden");
  loadQuestion();
}

// Carrega a pergunta atual
function loadQuestion() {
  const currentQuiz = quizQuestions[currentQuestionIndex];
  currentQuestionEl.textContent = currentQuestionIndex + 1;
  questionTextEl.textContent = currentQuiz.question;

  optionsContainerEl.innerHTML = "";

  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionsContainerEl.appendChild(button);
  });
}

// Lógica de seleção da resposta
function selectOption(selectedIndex) {
  const correctIndex = quizQuestions[currentQuestionIndex].correct;
  
  if (selectedIndex === correctIndex) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// Exibe o resultado final
function showResults() {
  quizScreenEl.classList.add("hidden");
  resultScreenEl.classList.remove("hidden");

  scoreTextEl.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas.`;

  if (score === quizQuestions.length) {
    feedbackTextEl.textContent = "Excelente! Você é um verdadeiro mestre do Agro Sustentável!";
  } else if (score >= quizQuestions.length / 2) {
    feedbackTextEl.textContent = "Muito bem! Você entende bastante sobre práticas sustentáveis no campo.";
  } else {
    feedbackTextEl.textContent = "Continue lendo o site e tente novamente para expandir seus conhecimentos!";
  }
}

// Evento do botão de reiniciar
btnRestart.addEventListener("click", startQuiz);

// Inicializar ao carregar o documento
document.addEventListener("DOMContentLoaded", () => {
  startQuiz();
  console.log("Site do Agro Sustentável pronto!");
});