// Массив данных викторины:
// В этом массиве содержатся объекты, каждый из которых представляет один вопрос викторины, варианты ответов на этот вопрос и правильный ответ.
const quizData = [
    {
        question: "Какая столица Франции?",
        options: ["Париж", "Лондон", "Берлин", "Мадрид"],
        answer: "Париж"
    },
    {
        question: "Сколько будет 4 + 4?",
        options: ["8", "10", "12", "6"],
        answer: "8"
    },
    {
        question: "Какая планета известна как Красная планета?",
        options: ["Венера", "Марс", "Юпитер", "Сатурн"],
        answer: "Марс"
    }
];

// Эти строки выбирают элементы из HTML-разметки по их идентификаторам для последующего взаимодействия с ними в JavaScript.
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

// Инициализация переменных:
let currentQuestionIndex = 0; // currentQuestionIndex используется для отслеживания текущего индекса вопроса в массиве quizData.
let score = 0; // score используется для подсчета количества правильных ответов пользователя.

// Функция showQuestion():
// Эта функция отображает текущий вопрос и варианты ответов на странице.
// Она создает кнопки для каждого варианта ответа и добавляет обработчик событий на каждую кнопку, чтобы отслеживать выбор пользователя.
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.classList.add("option-btn");
        optionElement.addEventListener("click", () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionElement);
    });
}

// Функция checkAnswer():
// Эта функция проверяет ответ пользователя на текущий вопрос.
// Если ответ правильный, увеличивается счетчик score.
// Затем функция переходит к следующему вопросу или отображает результаты, если вопросы закончились.
function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Функция showResult():
// Эта функция отображает результаты викторины после того, как пользователь ответил на все вопросы.
// Она скрывает вопросы и варианты ответов, отображает сообщение с количеством правильных ответов и общим количеством вопросов.
function showResult() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    submitButton.style.display = "none";
    resultElement.textContent = `Вы набрали ${score} из ${quizData.length} баллов.`;
}

// Вызов функции showQuestion():
showQuestion(); // Этот вызов запускает викторину, отображая первый вопрос при загрузке страницы.
