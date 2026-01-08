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
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

/**
 * Start the quiz for a specific category
 */
function startQuiz(category) {
    // Filter questions
    let filtered = quizData.filter(q => q.category === category);

    if (filtered.length === 0) {
        alert("No hay preguntas disponibles para esta sección aún.");
        return;
    }

    // Use questions in original order
    currentQuestions = filtered;

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

    // Render Reading Passage (if any)
    let readingContainer = document.getElementById('reading-container');
    if (!readingContainer) {
        readingContainer = document.createElement('div');
        readingContainer.id = 'reading-container';
        readingContainer.style.background = 'rgba(255,255,255,0.05)';
        readingContainer.style.padding = '1.5rem';
        readingContainer.style.borderRadius = '8px';
        readingContainer.style.marginBottom = '2rem';
        readingContainer.style.borderLeft = '4px solid var(--accent)';
        readingContainer.style.fontSize = '1rem';
        readingContainer.style.lineHeight = '1.6';
        readingContainer.style.textAlign = 'justify';
        // Insert before question text
        questionText.parentNode.insertBefore(readingContainer, questionText);
    }

    if (q.reading) {
        readingContainer.innerHTML = `<h4 style="margin-bottom:0.5rem; color:var(--text-muted); text-transform:uppercase; font-size:0.8rem;">Lectura de Referencia</h4>${q.reading}`;
        readingContainer.style.display = 'block';
    } else {
        readingContainer.style.display = 'none';
        readingContainer.innerHTML = '';
    }

    // Render Image or Visual
    const qImg = document.getElementById('question-image');
    // Create or select a container for visual HTML if not acts as image
    let visualContainer = document.getElementById('visual-container');
    if (!visualContainer) {
        visualContainer = document.createElement('div');
        visualContainer.id = 'visual-container';
        visualContainer.style.marginBottom = '1.5rem';
        // Insert after image
        qImg.parentNode.insertBefore(visualContainer, qImg.nextSibling);
    }

    if (q.visual) {
        // Show custom SVG/HTML Visual
        visualContainer.innerHTML = q.visual;
        visualContainer.style.display = 'block';
        qImg.style.display = 'none';
    } else if (q.image) {
        // Show Image
        visualContainer.style.display = 'none';
        qImg.src = q.image;
        qImg.style.display = 'block';
    } else {
        // Hide both
        visualContainer.style.display = 'none';
        qImg.style.display = 'none';
        qImg.src = '';
    }

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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Personalization for Carolina ---

const phrases = [
    "¡Tú puedes con esto y más, Carolina!",
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "Visualiza tu nombre en la lista de aceptados.",
    "Estás a un paso de cumplir tus sueños universitarios.",
    "Confía en tu preparación y en tu inteligencia.",
    "Cada respuesta correcta te acerca más a tu meta.",
    "La disciplina es el puente entre tus metas y tus logros.",
    "¡Vamos Carolina! Tu futuro brillante te espera.",
    "Hoy es un excelente día para aprender algo nuevo.",
    "Respira profundo y confía en ti misma."
];

function updateGreeting() {
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting = "Hola";

    if (hour >= 5 && hour < 12) {
        greeting = "Buenos días";
    } else if (hour >= 12 && hour < 20) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }

    if (greetingEl) {
        greetingEl.textContent = `${greeting} Carolina`;
    }
}

function startMotivationRotator() {
    const motivationEl = document.getElementById('motivation');
    if (!motivationEl) return;

    // Initial set
    motivationEl.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    // Rotate every minute (60000 ms)
    setInterval(() => {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        // Simple fade out/in effect
        motivationEl.style.transition = "opacity 0.5s ease";
        motivationEl.style.opacity = 0;

        setTimeout(() => {
            motivationEl.textContent = randomPhrase;
            motivationEl.style.opacity = 1;
        }, 500);

    }, 60000);
}

// Initialize Personalization
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    startMotivationRotator();
    // Re-check greeting every minute
    setInterval(updateGreeting, 60000);
});
