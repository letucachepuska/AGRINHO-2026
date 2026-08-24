// ========================================
// INFORMAÇÕES DOS TÓPICOS
// ========================================

const topics = {

    agua: {

        icon: "💧",

        title: "Uso consciente da água",

        description:
            "A água é um dos recursos mais importantes para a agricultura. O uso consciente busca reduzir desperdícios e melhorar a eficiência da irrigação.",

        boxes: [

            {
                title: "Como fazer?",

                text:
                    "Utilizar sistemas de irrigação mais eficientes, acompanhar a necessidade de água das culturas, evitar desperdícios e proteger áreas próximas a rios e nascentes."
            },

            {
                title: "Por que é importante?",

                text:
                    "A agricultura depende da disponibilidade de água. Melhorar sua utilização ajuda a preservar os recursos hídricos e manter a produção agrícola."
            }

        ]

    },


    preservacao: {

        icon: "🌳",

        title: "Preservação ambiental",

        description:
            "A produção agrícola precisa estar relacionada à conservação do meio ambiente. Preservar florestas, rios, nascentes e o solo ajuda a manter o equilíbrio dos ecossistemas.",

        boxes: [

            {
                title: "Como fazer?",

                text:
                    "Preservar áreas de vegetação, proteger nascentes, conservar o solo e utilizar práticas agrícolas que reduzam erosão e degradação ambiental."
            },

            {
                title: "Benefício",

                text:
                    "A conservação dos recursos naturais contribui para a manutenção da produtividade agrícola e dos serviços oferecidos pelos ecossistemas."
            }

        ]

    },


    rotacao: {

        icon: "🌱",

        title: "Rotação de culturas",

        description:
            "A rotação de culturas consiste em alternar diferentes espécies vegetais em uma mesma área ao longo das safras.",

        boxes: [

            {
                title: "Exemplo",

                text:
                    "Uma área pode receber uma cultura em uma safra e outra espécie na safra seguinte, de acordo com o planejamento agrícola."
            },

            {
                title: "Benefícios",

                text:
                    "A rotação pode contribuir para melhorar características do solo, controlar pragas e doenças, aumentar a matéria orgânica e proteger o solo contra erosão."
            }

        ]

    },


    residuos: {

        icon: "♻️",

        title: "Redução de resíduos",

        description:
            "A sustentabilidade também envolve diminuir o desperdício e encontrar formas de reaproveitar resíduos gerados nas atividades agrícolas e agroindustriais.",

        boxes: [

            {
                title: "Como fazer?",

                text:
                    "Separar materiais, reutilizar recursos quando possível, reduzir perdas durante a produção e buscar alternativas para o aproveitamento de resíduos orgânicos."
            },

            {
                title: "Uma possibilidade",

                text:
                    "Alguns resíduos de atividades agropecuárias podem ser utilizados na produção de energia, fertilizantes ou outros produtos."
            }

        ]

    },


    biodiversidade: {

        icon: "🐝",

        title: "Proteção da biodiversidade",

        description:
            "A biodiversidade inclui a variedade de plantas, animais e outros organismos presentes nos ecossistemas. Ela possui papel importante no equilíbrio ambiental e na produção agrícola.",

        boxes: [

            {
                title: "Como proteger?",

                text:
                    "Conservar áreas naturais, proteger habitats, manter a diversidade de espécies e adotar práticas que diminuam impactos sobre os ecossistemas."
            },

            {
                title: "Por que importa?",

                text:
                    "A biodiversidade está relacionada a serviços ecossistêmicos importantes para a agricultura, como polinização, ciclagem de nutrientes e equilíbrio dos ecossistemas."
            }

        ]

    },


    energia: {

        icon: "☀️",

        title: "Energia renovável",

        description:
            "Fontes renováveis podem contribuir para uma agricultura mais sustentável. Entre elas estão a energia solar, eólica, hidráulica e a energia obtida a partir de biomassa.",

        boxes: [

            {
                title: "Exemplos",

                text:
                    "A energia solar pode ser utilizada em propriedades rurais, enquanto resíduos de atividades agropecuárias podem ser aproveitados em processos de geração de energia."
            },

            {
                title: "Benefício",

                text:
                    "O uso de fontes renováveis pode diminuir a dependência de combustíveis fósseis e aproveitar recursos disponíveis na própria atividade agrícola."
            }

        ]

    }

};


// ========================================
// FUNCIONAMENTO DOS CARDS
// ========================================

const cards = document.querySelectorAll(".card");

const topicInfo =
    document.getElementById("topic-info");

const topicIcon =
    document.getElementById("topic-icon");

const topicTitle =
    document.getElementById("topic-title");

const topicDescription =
    document.getElementById("topic-description");

const topicExtra =
    document.getElementById("topic-extra");

const closeTopic =
    document.getElementById("close-topic");


cards.forEach(card => {

    card.addEventListener("click", () => {

        const topicName =
            card.dataset.topic;

        const topic =
            topics[topicName];

        if (!topic) {
            return;
        }


        topicIcon.textContent =
            topic.icon;

        topicTitle.textContent =
            topic.title;

        topicDescription.textContent =
            topic.description;


        topicExtra.innerHTML = "";


        topic.boxes.forEach(box => {

            const boxElement =
                document.createElement("div");

            boxElement.classList.add("extra-box");


            const title =
                document.createElement("h4");

            title.textContent =
                box.title;


            const text =
                document.createElement("p");

            text.textContent =
                box.text;


            boxElement.appendChild(title);

            boxElement.appendChild(text);


            topicExtra.appendChild(boxElement);

        });


        topicInfo.classList.add("active");


        topicInfo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


// ========================================
// FECHAR TÓPICO
// ========================================

closeTopic.addEventListener("click", () => {

    topicInfo.classList.remove("active");

});


// ========================================
// QUIZ
// ========================================

const questions = [

    {
        question:
            "O que significa agricultura sustentável?",

        answers: [

            "Produzir o máximo possível sem considerar o meio ambiente.",

            "Produzir alimentos preservando recursos naturais e pensando nas futuras gerações.",

            "Parar completamente de utilizar tecnologia no campo.",

            "Utilizar apenas produtos químicos."

        ],

        correct: 1
    },


    {
        question:
            "Qual prática pode ajudar a reduzir o desperdício de água?",

        answers: [

            "Deixar a irrigação ligada o dia inteiro.",

            "Aumentar a quantidade de água utilizada.",

            "Utilizar sistemas de irrigação eficientes.",

            "Desperdiçar água durante a produção."

        ],

        correct: 2
    },


    {
        question:
            "O que é rotação de culturas?",

        answers: [

            "Plantar sempre a mesma cultura.",

            "Alternar diferentes culturas em uma mesma área.",

            "Parar de utilizar o solo.",

            "Retirar todas as plantas da propriedade."

        ],

        correct: 1
    },


    {
        question:
            "Qual atitude contribui para a proteção da biodiversidade?",

        answers: [

            "Destruir áreas naturais.",

            "Eliminar habitats.",

            "Preservar áreas naturais e diferentes espécies.",

            "Reduzir a diversidade de plantas."

        ],

        correct: 2
    },


    {
        question:
            "Qual é um exemplo de energia renovável que pode ser utilizada no campo?",

        answers: [

            "Carvão mineral.",

            "Petróleo.",

            "Energia solar.",

            "Gasolina."

        ],

        correct: 2
    }

];


let currentQuestion = 0;

let score = 0;


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next-btn");

const questionNumber =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const resultElement =
    document.getElementById("result");

const resultText =
    document.getElementById("result-text");

const restartButton =
    document.getElementById("restart-btn");


// ========================================
// INICIAR QUIZ
// ========================================

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    questionElement.classList.remove("hidden");

    answersElement.classList.remove("hidden");

    nextButton.classList.remove("hidden");

    questionNumber.classList.remove("hidden");

    resultElement.classList.add("hidden");

    scoreElement.textContent =
        "Pontos: 0";

    showQuestion();

}


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function showQuestion() {

    answersElement.innerHTML = "";

    nextButton.disabled = true;


    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumber.textContent =
        `Questão ${currentQuestion + 1} de ${questions.length}`;


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.textContent =
            answer;

        button.classList.add("answer");


        button.addEventListener("click", () => {

            selectAnswer(index);

        });


        answersElement.appendChild(button);

    });

}


// ========================================
// SELECIONAR RESPOSTA
// ========================================

function selectAnswer(selectedIndex) {

    const correctIndex =
        questions[currentQuestion].correct;


    const buttons =
        document.querySelectorAll(".answer");


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

        scoreElement.textContent =
            `Pontos: ${score}`;

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


    let message;


    if (score === 5) {

        message =
            "Excelente! Você entende muito sobre sustentabilidade no agro.";

    } else if (score >= 3) {

        message =
            "Muito bem! Você já conhece vários conceitos importantes.";

    } else {

        message =
            "Continue aprendendo! Revise os tópicos do site e tente novamente.";

    }


    resultText.textContent =
        `Você acertou ${score} de ${questions.length} perguntas. ${message}`;

}


// ========================================
// REINICIAR QUIZ
// ========================================

restartButton.addEventListener("click", () => {

    startQuiz();

});


// ========================================
// INICIAR
// ========================================

startQuiz();