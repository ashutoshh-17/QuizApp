const questions = [
    {
        question: "Which of the following is not a primitive data type in Java?",
        answers: [
            { text: "int", correct: false },
            { text: "boolean", correct: false },
            { text: "String", correct: true },
            { text: "char", correct: false },
        ]
    },
    {
        question: "What is the default value of a local variable in Java?",
        answers: [
            { text: "null", correct: false },
            { text: "0", correct: false },
            { text: "Depends on the data type", correct: false },
            { text: "No default value", correct: true },
        ]
    },
    {
        question: "Which of the following is a marker interface?",
        answers: [
            { text: "Cloneable", correct: true },
            { text: "Serializable", correct: false },
            { text: "EventListener", correct: false },
            { text: "Remote", correct: false },
        ]
    },
    {
        question: "Which method must be implemented by all threads in Java?",
        answers: [
            { text: "start()", correct: false },
            { text: "run()", correct: true },
            { text: "stop()", correct: false },
            { text: "sleep()", correct: false },
        ]
    },
    {
        question: "Which keyword is used to prevent a method from being overridden?",
        answers: [
            { text: "static", correct: false },
            { text: "abstract", correct: false },
            { text: "final", correct: true },
            { text: "protected", correct: false },
        ]
    },
    {
        question: "What is the output of the following code?\n\n" +
                  "String s = \"Hello World\";\n" +
                  "System.out.println(s.substring(6));",
        answers: [
            { text: "Hello", correct: false },
            { text: "World", correct: true },
            { text: "Hello World", correct: false },
            { text: "World Hello", correct: false },
        ]
    },
    {
        question: "What does the 'super' keyword do?",
        answers: [
            { text: "Calls the superclass constructor", correct: true },
            { text: "Returns the superclass object", correct: false },
            { text: "Accesses a superclass method", correct: false },
            { text: "Calls the superclass method", correct: false },
        ]
    },
    {
        question: "Which exception is thrown when an array is accessed with an illegal index?",
        answers: [
            { text: "ArrayStoreException", correct: false },
            { text: "NullPointerException", correct: false },
            { text: "IndexOutOfBoundsException", correct: true },
            { text: "IllegalArgumentException", correct: false },
        ]
    },
    {
        question: "Which of the following is not a valid Java keyword?",
        answers: [
            { text: "volatile", correct: false },
            { text: "strictfp", correct: false },
            { text: "static", correct: false },
            { text: "include", correct: true },
        ]
    },
    {
        question: "What is the size of an int in Java?",
        answers: [
            { text: "8 bits", correct: false },
            { text: "16 bits", correct: false },
            { text: "32 bits", correct: true },
            { text: "64 bits", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();