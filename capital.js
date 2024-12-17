
//questions code from some random website named dev something and https://simplestepscode.com/javascript-quiz-tutorial/
const questions = [
    { country: "France", capital: "Paris", options: ["Paris", "Berlin", "Madrid", "Rome"] },
    { country: "Germany", capital: "Berlin", options: ["Paris", "Berlin", "Madrid", "Rome"] },
    { country: "Spain", capital: "Madrid", options: ["Paris", "Berlin", "Madrid", "Rome"] },
    { country: "Italy", capital: "Rome", options: ["Paris", "Berlin", "Madrid", "Rome"] },

];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('country-name').innerText = question.country;

    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button, index) => {
        button.innerText = question.options[index];
        button.classList.remove('correct', 'incorrect');
        button.disabled = false; 
    });

    document.getElementById('result-message').innerText = ""; 
}

function checkAnswer(button) {
    const question = questions[currentQuestionIndex];
    const selectedAnswer = button.innerText;
    const correctAnswer = question.capital;

    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        document.body.style.backgroundColor = 'green';  
        document.getElementById('result-message').innerText = "Correct!";
    } else {
        button.classList.add('incorrect');
        document.body.style.backgroundColor = 'red';  
        document.getElementById('result-message').innerText = "Incorrect. Try again!";
    }

    
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => button.disabled = true);


    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        document.body.style.backgroundColor = '#f0f0f0';  
        displayQuestion();
    }, 1000);  
}

displayQuestion();
