let currentQuestionIndex = 0;
let selectedAnswers = [];

const questions = [
    {
        question: "What is your favorite activity?",
        options: [
            { text: "Exploring the world", princess: "Moana" },
            { text: "Reading books", princess: "Belle" },
            { text: "Dancing and singing", princess: "Ariel" },
            { text: "Fighting for justice", princess: "Mulan" }
        ]
    },
    {
        question: "How would you describe yourself?",
        options: [
            { text: "Adventurous", princess: "Moana" },
            { text: "Intelligent", princess: "Belle" },
            { text: "Creative", princess: "Ariel" },
            { text: "Brave", princess: "Mulan" }
        ]
    },
    {
        question: "What is your ideal location?",
        options: [
            { text: "A tropical island", princess: "Moana" },
            { text: "A small town", princess: "Belle" },
            { text: "Underwater", princess: "Ariel" },
            { text: "A battlefield", princess: "Mulan" }
        ]
    }
];

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');

    questionContainer.textContent = question.question;

    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {
    selectedAnswers.push(option.princess);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
    }

function showResult() {
    const princessCount = {};
    selectedAnswers.forEach(princess => {
        princessCount[princess] = (princessCount[princess] || 0) + 1;
    });

    const mostSelectedPrincess = Object.keys(princessCount).reduce((a, b) => 
        princessCount[a] > princessCount[b] ? a : b
    );

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result').textContent = mostSelectedPrincess;
}

function startOver() {
    currentQuestionIndex = 0;
    selectedAnswers = [];
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    showQuestion();
}


window.onload = showQuestion;
