const questions = [
    {
        question: "How are you feeling today?",
        options: ["Happy", "Sad", "Angry", "Relaxed"],
        result: {
            "Happy": "You should listen to 'Happy' by Pharrell Williams!",
            "Sad": "You should listen to 'Someone Like You' by Adele!",
            "Angry": "You should listen to 'Stronger' by Kanye West!",
            "Relaxed": "You should listen to 'Weightless' by Marconi Union!"
        }
    },
    {
        question: "What kind of vibe are you in?",
        options: ["Energetic", "Chill", "Romantic", "Focused"],
        result: {
            "Energetic": "You should listen to 'Uptown Funk' by Mark Ronson ft. Bruno Mars!",
            "Chill": "You should listen to 'Sunflower' by Post Malone & Swae Lee!",
            "Romantic": "You should listen to 'Perfect' by Ed Sheeran!",
            "Focused": "You should listen to 'Lose Yourself' by Eminem!"
        }
    },
    {
        question: "What's the weather like outside?",
        options: ["Sunny", "Rainy", "Cloudy", "Windy"],
        result: {
            "Sunny": "You should listen to 'Walking on Sunshine' by Katrina and the Waves!",
            "Rainy": "You should listen to 'The Sound of Silence' by Simon & Garfunkel!",
            "Cloudy": "You should listen to 'Bohemian Rhapsody' by Queen!",
            "Windy": "You should listen to 'Here Comes the Sun' by The Beatles!"
        }
    }
];

let currentQuestionIndex = 0;
let userResponses = [];

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
 
    document.getElementById('question').innerText = currentQuestion.question;
    

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';


    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });


    document.getElementById('result').innerText = '';
}

function selectOption(option) {

    userResponses[currentQuestionIndex] = option;

   
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => button.disabled = true);


    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    
    let recommendedSong = '';
    questions.forEach((question, index) => {
        const response = userResponses[index];
        if (response) {
            recommendedSong += question.result[response] + '\n';
        }
    });

    
    document.getElementById('result').innerText = recommendedSong;
}

displayQuestion();

