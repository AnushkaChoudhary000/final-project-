// Flag quiz data a little help in adding the question code from dev website
const questions = [
    {
        flag: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg", // USA Flag URL
        correctAnswer: "United States",
        options: ["United States", "Canada", "Mexico", "Brazil"]
    },
    {
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png", // Germany Flag URL
        correctAnswer: "Germany",
        options: ["Germany", "France", "Italy", "Spain"]
    },
    {
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png", // Japan Flag URL
        correctAnswer: "Japan",
        options: ["South Korea", "China", "Japan", "India"]
    }
];

let currentQuestionIndex = 0;


function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];


    const flagContainer = document.getElementById('flag-container');
    flagContainer.innerHTML = `<img src="${currentQuestion.flag}" alt="Flag">`;


    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });

  
    document.getElementById('feedback').innerText = '';
}


function selectOption(option) {
    const currentQuestion = questions[currentQuestionIndex];

   
    if (option === currentQuestion.correctAnswer) {
        document.getElementById('feedback').innerText = "Correct! Moving to next question...";
        document.getElementById('feedback').style.color = "#4CAF50"; 

       
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                showResult();
            }
        }, 1000); 
    } else {
        document.getElementById('feedback').innerText = "Try again!";
        document.getElementById('feedback').style.color = "#f44336"; 
    }
}


function showResult() {
    const feedback = document.getElementById('feedback');
    feedback.innerText = "Congratulations! You've completed the quiz.";
    feedback.style.color = "#4CAF50";
}

displayQuestion();
