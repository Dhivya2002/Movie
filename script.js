const quotes = [
    "I am Iron Man.",
    "With great power comes great responsibility.",
    "Hulk smash!",
    "I can do this all day."
    
];

// Function to get a random quote
function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

// Display a random quote
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("quote-text").textContent = getRandomQuote();
});

// Trivia questions and answers
const triviaQuestions = [
    {
        question: "What is Tony Stark's superhero name?",
        answers: {
            A: "Iron Man",
            B: "Captain America",
            C: "Thor",
            D: "Hulk"
        },
        correctAnswer: "A"
    },
    {
        question: "Which stone does Thanos seek to complete the Infinity Gauntlet?",
        answers: {
            A: "Time Stone",
            B: "Mind Stone",
            C: "Space Stone",
            D: "Reality Stone"
        },
        correctAnswer: "B"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;

// Display the current question
function displayQuestion() {
    const question = triviaQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const buttons = document.querySelectorAll("#quiz-container button");
    buttons.forEach((button, index) => {
        const answerKey = String.fromCharCode(65 + index);
        button.textContent = question.answers[answerKey];
    });
}

// Check answer
function checkAnswer(selectedAnswer) {
    const question = triviaQuestions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");
    if (selectedAnswer === question.correctAnswer) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect. Try again!";
    }
    // Move to the next question or reset
    currentQuestionIndex = (currentQuestionIndex + 1) % triviaQuestions.length;
    displayQuestion();
}

// Initial call
displayQuestion();

