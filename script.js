// State
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = []; // Store answers for review if needed

// DOM Elements
const homeView = document.getElementById('home-view');
const quizView = document.getElementById('quiz-view');
const resultsView = document.getElementById('results-view');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const procedureBox = document.getElementById('procedure-box');
const procedureText = document.getElementById('procedure-text');

const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const currentScoreSpan = document.getElementById('current-score');
const nextBtn = document.getElementById('next-btn');

const finalScoreCircle = document.getElementById('final-score-circle');
const finalStats = document.getElementById('final-stats');

/**
 * Start the quiz for a specific category
 */
function startQuiz(category) {
    // Filter questions
    currentQuestions = quizData.filter(q => q.category === category);

    if (currentQuestions.length === 0) {
        alert("No hay preguntas disponibles para esta sección aún.");
        return;
    }

    // Reset State
    currentIndex = 0;
    score = 0;
    userAnswers = [];

    // Update UI
    homeView.style.display = 'none';
    resultsView.style.display = 'none';
    quizView.style.display = 'flex';

    updateHeader();
    renderQuestion();
}

/**
 * Render the current question
 */
function renderQuestion() {
    const q = currentQuestions[currentIndex];

    // Animate question change
    questionText.classList.remove('animate-shake');
    void questionText.offsetWidth; // Trigger reflow

    questionText.textContent = q.question;
    currentQSpan.textContent = currentIndex + 1;
    totalQSpan.textContent = currentQuestions.length;

    // Reset Procedure
    procedureBox.style.display = 'none';

    // Render Options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="font-weight:700; margin-right:1rem; opacity:0.5;">${String.fromCharCode(65 + index)}</span> ${opt}`;
        btn.onclick = () => selectAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });

    // Hide Next Button initially
    nextBtn.style.visibility = 'hidden';
}

/**
 * Handle Answer Selection
 */
function selectAnswer(selectedIndex, btnElement) {
    const q = currentQuestions[currentIndex];
    const isCorrect = selectedIndex === q.correct;

    // Disable all buttons
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);

    // Highlight selected
    if (isCorrect) {
        btnElement.classList.add('correct');
        score += 10; // 10 points per correct answer
        playSound('success');
    } else {
        btnElement.classList.add('wrong');
        // Highlight correct one
        allBtns[q.correct].classList.add('correct');
        playSound('error');
    }

    updateHeader();
    showProcedure(q.procedure);

    // Show Next Button
    nextBtn.style.visibility = 'visible';
}

function showProcedure(text) {
    if (!text) return;
    procedureText.textContent = text;
    procedureBox.style.display = 'block';
}

function updateHeader() {
    currentScoreSpan.textContent = score;
}

/**
 * Navigation
 */
function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    quizView.style.display = 'none';
    resultsView.style.display = 'block';

    // Calculate Score Percentage
    const totalPoints = currentQuestions.length * 10;
    const percentage = Math.round((score / totalPoints) * 100);

    finalScoreCircle.textContent = `${percentage}%`;

    // Color coding
    finalScoreCircle.classList.remove('high', 'med', 'low');
    if (percentage >= 80) finalScoreCircle.classList.add('high');
    else if (percentage >= 60) finalScoreCircle.classList.add('med');
    else finalScoreCircle.classList.add('low');

    finalStats.textContent = `Puntaje final: ${score} / ${totalPoints}`;
}

function returnHome() {
    resultsView.style.display = 'none';
    quizView.style.display = 'none';
    homeView.style.display = 'block';
}

/**
 * Sound Effects (Optional placeholders)
 */
function playSound(type) {
    // Could add simple Audio objects here if requested
}
