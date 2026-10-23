// ===== КОНСТАНТЫ И ДАННЫЕ =====
const ARABIC_ALPHABET = [
    {
        letter: "ا",
        name: "Алиф",
        trans: "[aː]",
        type: "Лёгкая",
        makhraj: "Полость рта",
        desc: "Буква растяжения, произносится из глубины горла",
        forms: {
            isolated: "ا",
            initial: "ا",
            medial: "ـا",
            final: "ـا"
        },
        sunMoon: "lunar",
        category: "easy"
    },
    {
        letter: "ب",
        name: "Ба",
        trans: "[b]",
        type: "Тяжёлая",
        makhraj: "Губы",
        desc: "Произносится при смыкании губ",
        forms: {
            isolated: "ب",
            initial: "بـ",
            medial: "ـبـ",
            final: "ـب"
        },
        sunMoon: "lunar",
        category: "easy"
    },
    {
        letter: "ت",
        name: "Та",
        trans: "[t]",
        type: "Лёгкая",
        makhraj: "Кончик языка",
        desc: "Произносится кончиком языка",
        forms: {
            isolated: "ت",
            initial: "تـ",
            medial: "ـتـ",
            final: "ـت"
        },
        sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "ث",
        name: "Са",
        trans: "[θ]",
        type: "Лёгкая",
        makhraj: "Межзубная",
        desc: "Межзубный звук, как английское 'th'",
        forms: {
            isolated: "ث",
            initial: "ثـ",
            medial: "ـثـ",
            final: "ـث"
        },
        sunMoon: "solar",
        category: "medium"
    },
    {
        letter: "ج",
        name: "Джим",
        trans: "[ʤ]",
        type: "Тяжёлая",
        makhraj: "Середина языка",
        desc: "Произносится серединой языка",
        forms: {
            isolated: "ج",
            initial: "جـ",
            medial: "ـجـ",
            final: "ـج"
        },
        sunMoon: "lunar",
        category: "medium"
    },
    {
        letter: "ح",
        name: "Ха",
        trans: "[ħ]",
        type: "Лёгкая",
        makhraj: "Горло",
        desc: "Гортанный звук, мягкий 'х'",
        forms: {
            isolated: "ح",
            initial: "حـ",
            medial: "ـحـ",
            final: "ـح"
        },
        sunMoon: "lunar",
        category: "medium"
    },
    {
        letter: "خ",
        name: "Ха",
        trans: "[x]",
        type: "Тяжёлая",
        makhraj: "Горло",
        desc: "Глубокий гортанный 'х'",
        forms: {
            isolated: "خ",
            initial: "خـ",
            medial: "ـخـ",
            final: "ـخ"
        },
        sunMoon: "lunar",
        category: "hard"
    },
    {
        letter: "د",
        name: "Даль",
        trans: "[d]",
        type: "Лёгкая",
        makhraj: "Кончик языка",
        desc: "Произносится кончиком языка",
        forms: {
            isolated: "د",
            initial: "د",
            medial: "ـد",
            final: "ـد"
        },
        sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "ذ",
        name: "Заль",
        trans: "[ð]",
        type: "Лёгкая",
        makhraj: "Межзубная",
        desc: "Звонкий межзубный звук",
        forms: {
            isolated: "ذ",
            initial: "ذ",
            medial: "ـذ",
            final: "ـذ"
        },
        sunMoon: "solar",
        category: "hard"
    },
    {
        letter: "ر",
        name: "Ра",
        trans: "[r]",
        type: "Лёгкая",
        makhraj: "Кончик языка",
        desc: "Дрожащий звук",
        forms: {
            isolated: "ر",
            initial: "ر",
            medial: "ـر",
            final: "ـر"
        },
        sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "ز",
        name: "За",
        trans: "[z]",
        type: "Лёгкая",
        makhraj: "Кончик языка",
        desc: "Звонкий свистящий звук",
        forms: {
            isolated: "ز",
            initial: "ز",
            medial: "ـز",
            final: "ـز"
        },
        sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "س",
        name: "Син",
        trans: "[s]",type: "Лёгкая",
        makhraj: "Кончик языка",
        desc: "Глухой свистящий звук",
        forms: {
            isolated: "س",
            initial: "سـ",
            medial: "ـسـ",
            final: "ـس"
        },
        sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "ش",
        name: "Шин",
        trans: "[ʃ]",
        type: "Тяжёлая",
        makhraj: "Середина языка",
        desc: "Шипящий звук",
        forms: {
            isolated: "ش",
            initial: "شـ",
            medial: "ـشـ",
            final: "ـش"
        },
        sunMoon: "solar",
        category: "medium"
    },
    {
        letter: "ص",
        name: "Сад",
        trans: "[sˁ]",
        type: "Тяжёлая",
        makhraj: "Кончик языка",
        desc: "Тяжёлый свистящий звук",
        forms: {
            isolated: "ص",
            initial: "صـ",
            medial: "ـصـ",
            final: "ـص"
        },
        sunMoon: "solar",
        category: "hard"
    },
    {
        letter: "ض",
        name: "Дад",
        trans: "[dˁ]",
        type: "Тяжёлая",
        makhraj: "Бок языка",
        desc: "Самая тяжёлая буква",
        forms: {
            isolated: "ض",
            initial: "ضـ",
            medial: "ـضـ",
            final: "ـض"
        },
        sunMoon: "solar",
        category: "hard"
    },
    {
        letter: "ط",
        name: "Та",
        trans: "[tˁ]",
        type: "Тяжёлая",
        makhraj: "Задняя часть языка",
        desc: "Тяжёлый 'т'",
        forms: {
            isolated: "ط",
            initial: "طـ",
            medial: "ـطـ",
            final: "ـط"
        },
        sunMoon: "solar",
        category: "hard"
    },
    {
        letter: "ظ",
        name: "За",
        trans: "[ðˁ]",
        type: "Тяжёлая",
        makhraj: "Межзубная",
        desc: "Тяжёлый межзубный звук",
        forms: {
            isolated: "ظ",
            initial: "ظـ",
            medial: "ـظـ",
            final: "ـظ"
        },
        sunMoon: "solar",
        category: "hard"
    },
    {
        letter: "ع",
        name: "Айн",
        trans: "[ʕ]",
        type: "Лёгкая",
        makhraj: "Горло",
        desc: "Глубокий гортанный звук",
        forms: {
            isolated: "ع",
            initial: "عـ",
            medial: "ـعـ",
            final: "ـع"
        },
        sunMoon: "lunar",
        category: "hard"
    },
    {
        letter: "غ",
        name: "Гайн",
        trans: "[ɣ]",
        type: "Тяжёлая",
        makhraj: "Горло",
        desc: "Гортанный 'г'",
        forms: {
            isolated: "غ",
            initial: "غـ",
            medial: "ـغـ",
            final: "ـغ"
        },
        sunMoon: "lunar",
        category: "hard"
    },
    {
        letter: "ف",
        name: "Фа",
        trans: "[f]",
        type: "Лёгкая",
        makhraj: "Губы и зубы",
        desc: "Губно-зубной звук",
        forms: {
            isolated: "ف",
            initial: "فـ",
            medial: "ـفـ",
            final: "ـف"
        },
        sunMoon: "lunar",
        category: "easy"
    },
    {
        letter: "ق",
        name: "Каф",
        trans: "[q]",
        type: "Тяжёлая",
        makhraj: "Нёбо",
        desc: "Глубокий 'к'",
        forms: {
            isolated: "ق",
            initial: "قـ",
            medial: "ـقـ",
            final: "ـق"
        },
        sunMoon: "lunar",
        category: "hard"
    },
    {
        letter: "ك",
        name: "Каф",
        trans: "[k]",
        type: "Лёгкая",
        makhraj: "Нёбо",
        desc: "Обычный 'к'",
        forms: {
            isolated: "ك",
            initial: "كـ",
            medial: "ـكـ",
            final: "ـك"
        },
        sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "ل",
        name: "Лям",
        trans: "[l]",
        type: "Лёгкая",
        makhraj: "Кончик языка",
        desc: "Боковой звук",
        forms: {
            isolated: "ل",
            initial: "لـ",
            medial: "ـلـ",
            final: "ـل"
        },
        elements.hintContainer.classList.remove('active');
    };
    
    // Модальное окно
    elements.closeModal.addEventListener('click', closeResults);
    elements.playAgainBtn.addEventListener('click', () => {
        closeResults();
        startGame();
    });
    elements.shareBtn.addEventListener('click', shareResults);
    elements.studyBtn.addEventListener('click', () => {
        window.location.href = 'study.html';
    });
    
    // Клик вне модального окна
    elements.resultsModal.addEventListener('click', (e) => {
        if (e.target === elements.resultsModal) {
            closeResults();
        }
    });
    
    // Клавиши управления
    document.addEventListener('keydown', (e) => {
        if (!gameState.isPlaying) return;
        
        switch(e.key) {
            case '1':
            case '2':
            case '3':
            case '4':
                const index = parseInt(e.key) - 1;
                const answerBtns = document.querySelectorAll('.answer-btn');
                if (answerBtns[index]) {
                    answerBtns[index].click();
                }
                break;
            case ' ':
                if (elements.hintBtn.disabled) return;
                showHint();
                break;
            case 'Escape':
                if (elements.resultsModal.classList.contains('active')) {
                    closeResults();
                }
                break;
        }
    });
}

// ===== УПРАВЛЕНИЕ ИГРОЙ =====
function switchGameMode(modeId) {
    if (gameState.isPlaying) {
        if (!confirm('Сменить режим? Текущая игра будет завершена.')) {
            return;
        }
        endGame();
    }
    
    gameState.currentMode = modeId;
    
    // Обновляем активную карточку
    document.querySelectorAll('.mode-card').forEach(card => {
        card.classList.remove('active');
        if (card.dataset.mode === modeId) {
            card.classList.add('active');
        }
    });
    
    // Обновляем интерфейс для нового режима
    updateGameInterface();
    
    // Показываем описание режима
    const modeData = gameState.gameModes[modeId];
    showMessage(`Выбран режим: ${modeData.name}. ${modeData.desc}`, 'info');
}

function updateGameInterface() {
    const modeData = gameState.gameModes[gameState.currentMode];
    
    // Обновляем заголовок
    elements.gameContainer.innerHTML = `
        <div class="game-welcome">
            <div class="welcome-icon" style="background: linear-gradient(135deg, ${modeData.color}, ${darkenColor(modeData.color, 20)})">
                ${modeData.icon}
            </div>
            <h3>Режим: ${modeData.name}</h3>
            <p>${modeData.desc}</p>
            <p class="welcome-tip">
                <i class="fas fa-lightbulb"></i>
                Нажмите "Начать игру", чтобы начать
            </p>
        </div>
    `;
}

function darkenColor(color, percent) {
    // Упрощенная функция для затемнения цвета
    return color;
}

function startGame() {
    if (gameState.isPlaying) return;
    
    // Сброс состояния
    gameState.isPlaying = true;
    gameState.score = 0;
    gameState.correctCount = 0;
    gameState.wrongCount = 0;
    gameState.streak = 0;
    gameState.level = 1;
    gameState.hintsUsed = 0;
    gameState.startTime = Date.now();
    
    // Настройка таймера в зависимости от режима
    switch(gameState.currentMode) {
        case 'sprint':
            gameState.timer = 60;
            break;
        case 'errors':
        case 'pairs':
            gameState.timer = 45;
            break;
        default:
            gameState.timer = 30;
    }
    
    // Обновление UI
    updateUI();
    updateStats();
    updateProgress();
    startTimer();
    
    // Блокировка кнопок
    elements.startBtn.disabled = true;
    elements.startBtn.innerHTML = `
        <div class="btn-icon">
            <i class="fas fa-play"></i>
        </div>
        <div class="btn-text">
            <div class="btn-title">Игра идёт...</div>
            <div class="btn-sub">Остановить нельзя</div>
        </div>
    `;elements.hintBtn.disabled = false;
    elements.resultsBtn.disabled = false;
    
    // Запуск игры в зависимости от режима
    switch(gameState.currentMode) {
        case 'basic':
            startBasicMode();
            break;
        case 'forms':
            startFormsMode();
            break;
        case 'sunMoon':
            startSunMoonMode();
            break;
        case 'errors':
            startErrorsMode();
            break;
        case 'pairs':
            startPairsMode();
            break;
        case 'sprint':
            startSprintMode();
            break;
    }
    
    showMessage('Игра началась! Удачи!', 'success');
}

function endGame() {
    if (!gameState.isPlaying) return;
    
    gameState.isPlaying = false;
    clearInterval(gameState.timerInterval);
    
    // Отключение кнопок ответов
    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(btn => {
        btn.disabled = true;
    });
    
    // Разблокировка кнопки начала
    elements.startBtn.disabled = false;
    elements.startBtn.innerHTML = `
        <div class="btn-icon">
            <i class="fas fa-redo"></i>
        </div>
        <div class="btn-text">
            <div class="btn-title">Играть снова</div>
            <div class="btn-sub">Начать новую игру</div>
        </div>
    `;
    
    elements.hintBtn.disabled = true;
    elements.resultsBtn.disabled = true;
    
    // Сохранение прогресса
    saveProgress();
    
    // Показ результатов
    setTimeout(() => {
        showResults();
    }, 1000);
    
    showMessage(`Игра завершена! Вы изучили ${gameState.learnedLetters.size} из 28 букв`, 'warning');
}

// ===== РЕЖИМЫ ИГРЫ =====

// 1. Базовый режим
function startBasicMode() {
    generateBasicQuestion();
}

function generateBasicQuestion() {
    if (!gameState.isPlaying) return;
    
    // Выбираем случайную букву
    const letterIndex = Math.floor(Math.random() * ARABIC_ALPHABET.length);
    gameState.currentLetter = ARABIC_ALPHABET[letterIndex];
    
    // Создаем интерфейс вопроса
    elements.gameContainer.innerHTML = `
        <div class="basic-question">
            <div class="question-header">
                <h3><i class="fas fa-question-circle"></i> Как называется эта буква?</h3>
                <div class="question-progress">Вопрос ${gameState.correctCount + gameState.wrongCount + 1}</div>
            </div>
            
            <div class="letter-display">
                <div class="current-letter-arabic">${gameState.currentLetter.letter}</div>
                <div class="letter-info">
                    <div class="info-item">
                        <i class="fas fa-volume-up"></i>
                        <span>${gameState.currentLetter.trans}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-weight-hanging"></i>
                        <span>${gameState.currentLetter.type}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-microphone-alt"></i>
                        <span>${gameState.currentLetter.makhraj}</span>
                    </div>
                </div>
            </div>
            
            <div class="answers-grid" id="answersGrid"></div>
        </div>
    `;
    
    // Генерируем варианты ответов
    generateBasicAnswers();
}

function generateBasicAnswers() {
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';
    
    const correctAnswer = gameState.currentLetter.name;
    let answers = [correctAnswer];
    
    // Добавляем 3 неправильных ответа
    while (answers.length < 4) {
        const randomLetter = ARABIC_ALPHABET[Math.floor(Math.random() * ARABIC_ALPHABET.length)];
        if (!answers.includes(randomLetter.name)) {
            answers.push(randomLetter.name);
        }
    }
    
    // Перемешиваем
    answers = shuffleArray(answers);
    
    // Создаем кнопки
    answers.forEach((answer, index) => {
        const button = document.sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "م",
        name: "Мим",
        trans: "[m]",
        type: "Тяжёлая",
        makhraj: "Губы",
        desc: "Губной носовой звук",
        forms: {
            isolated: "م",
            initial: "مـ",
            medial: "ـمـ",
            final: "ـم"
        },
        sunMoon: "lunar",
        category: "easy"
    },
    {
        letter: "ن",
        name: "Нун",
        trans: "[n]",
        type: "Тяжёлая",
        makhraj: "Кончик языка",
        desc: "Носовой звук",
        forms: {
            isolated: "ن",
            initial: "نـ",
            medial: "ـنـ",
            final: "ـن"
        },
        sunMoon: "solar",
        category: "easy"
    },
    {
        letter: "ه",
        name: "Ха",
        trans: "[h]",
        type: "Лёгкая",
        makhraj: "Горло",
        desc: "Лёгкий гортанный звук",
        forms: {
            isolated: "ه",
            initial: "هـ",
            medial: "ـهـ",
            final: "ـه"
        },
        sunMoon: "lunar",
        category: "easy"
    },
    {
        letter: "و",
        name: "Вав",
        trans: "[w]",
        type: "Лёгкая",
        makhraj: "Губы",
        desc: "Губной звук",
        forms: {
            isolated: "و",
            initial: "و",
            medial: "ـو",
            final: "ـو"
        },
        sunMoon: "lunar",
        category: "easy"
    },
    {
        letter: "ي",
        name: "Йа",
        trans: "[j]",
        type: "Лёгкая",
        makhraj: "Середина языка",
        desc: "Палатальный звук",
        forms: {
            isolated: "ي",
            initial: "يـ",
            medial: "ـيـ",
            final: "ـي"
        },
        sunMoon: "lunar",
        category: "easy"
    }
];

// ===== СОСТОЯНИЕ ИГРЫ =====
const gameState = {
    isPlaying: false,
    currentMode: 'basic',
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    streak: 0,
    level: 1,
    currentLetter: null,
    learnedLetters: new Set(),
    timer: 30,
    timerInterval: null,
    startTime: null,
    soundEnabled: true,
    hintsUsed: 0,
    totalHints: 3,
    difficulty: 'easy',
    gameModes: {
        basic: { name: 'Базовый', icon: '🔤', desc: 'Угадай название буквы', color: '#8a4a5f' },
        forms: { name: 'Формы букв', icon: '🔄', desc: 'Начальная, серединная, конечная', color: '#2196F3' },
        sunMoon: { name: 'Солнечные/Лунные', icon: '☀️🌙', desc: 'Распредели буквы по типам', color: '#FF9800' },
        errors: { name: 'Найди ошибку', icon: '🔍', desc: 'Исправь неправильное написание', color: '#F44336' },
        pairs: { name: 'Пары букв', icon: '👯', desc: 'Найди похожие буквы', color: '#4CAF50' },
        sprint: { name: 'Спринт', icon: '⚡', desc: '60 секунд на максимум ответов', color: '#9C27B0' }
    },
    stats: {
        perLetter: {},
        gamesPlayed: 0,
        totalTime: 0,
        bestScore: 0,
        bestStreak: 0
    }
};

// ===== ЭЛЕМЕНТЫ DOM =====
const elements = {
    // Кнопки управления
    startBtn: document.getElementById('startGameBtn'),
    hintBtn: document.getElementById('hintBtn'),
    soundBtn: document.getElementById('soundBtn'),
    resultsBtn: document.getElementById('resultsBtn'),
    resetStatsBtn: document.getElementById('resetStats'),
    
    // Панель статистики
    statScore: document.getElementById('statScore'),
    statCorrect: document.getElementById('statCorrect'),
    statStreak: document.getElementById('statStreak'),
    statLearned: document.getElementById('statLearned'),
    
    // Прогресс
    globalProgressValue: document.getElementById('globalProgressValue'),
    globalProgressFill: document.getElementById('globalProgressFill'),
    
    // Таймер
    timerWrapper: document.getElementById('timerWrapper'),
    timerCircle: document.getElementById('timerCircle'),
    timerText: document.getElementById('timerText'),
    
    // Сообщения
    messageContainer: document.getElementById('messageContainer'),
    gameMessage: document.getElementById('gameMessage'),
    
    // ПодсказкиcreateElement('button');
        button.className = 'answer-btn';
        button.innerHTML = `
            <div class="answer-number">${index + 1}</div>
            <div class="answer-text">${answer}</div>
        `;
        button.onclick = () => checkBasicAnswer(answer === correctAnswer);
        answersGrid.appendChild(button);
    });
}

// 2. Режим форм букв
function startFormsMode() {
    generateFormsQuestion();
}

function generateFormsQuestion() {
    if (!gameState.isPlaying) return;
    
    const letterIndex = Math.floor(Math.random() * ARABIC_ALPHABET.length);
    gameState.currentLetter = ARABIC_ALPHABET[letterIndex];
    
    const formTypes = ['initial', 'medial', 'final', 'isolated'];
    const questionType = formTypes[Math.floor(Math.random() * formTypes.length)];
    const questionTexts = {
        initial: 'Как выглядит начальная форма буквы?',
        medial: 'Как выглядит серединная форма буквы?',
        final: 'Как выглядит конечная форма буквы?',
        isolated: 'Как выглядит изолированная форма буквы?'
    };
    
    elements.gameContainer.innerHTML = `
        <div class="forms-question">
            <div class="question-header">
                <h3><i class="fas fa-shapes"></i> ${questionTexts[questionType]}</h3>
                <div class="question-progress">Вопрос ${gameState.correctCount + gameState.wrongCount + 1}</div>
            </div>
            
            <div class="letter-display">
                <div class="current-letter-arabic" style="font-size: 5rem;">${gameState.currentLetter.letter}</div>
                <div class="letter-name">${gameState.currentLetter.name}</div>
            </div>
            
            <div class="forms-options" id="formsAnswers"></div>
            
            <div class="forms-hint">
                <i class="fas fa-info-circle"></i>
                Выберите правильную форму буквы "${gameState.currentLetter.name}"
            </div>
        </div>
    `;
    
    generateFormsAnswers(questionType);
}

function generateFormsAnswers(correctForm) {
    const formsAnswers = document.getElementById('formsAnswers');
    formsAnswers.innerHTML = '';
    
    const correctAnswer = gameState.currentLetter.forms[correctForm];
    let answers = [correctAnswer];
    
    // Добавляем формы других букв
    while (answers.length < 4) {
        const randomLetter = ARABIC_ALPHABET[Math.floor(Math.random() * ARABIC_ALPHABET.length)];
        const randomForm = Object.values(randomLetter.forms)[Math.floor(Math.random() * 4)];
        if (!answers.includes(randomForm)) {
            answers.push(randomForm);
        }
    }
    
    answers = shuffleArray(answers);
    
    answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'form-option-btn';
        button.innerHTML = `
            <div class="form-letter">${answer}</div>
            <div class="form-number">${index + 1}</div>
        `;
        button.onclick = () => checkFormsAnswer(answer === correctAnswer);
        formsAnswers.appendChild(button);
    });
}

// 3. Режим солнечные/лунные
function startSunMoonMode() {
    generateSunMoonQuestion();
}

function generateSunMoonQuestion() {
    if (!gameState.isPlaying) return;
    
    // Выбираем случайную букву
    const letterIndex = Math.floor(Math.random() * ARABIC_ALPHABET.length);
    gameState.currentLetter = ARABIC_ALPHABET[letterIndex];
    
    elements.gameContainer.innerHTML = `
        <div class="sunmoon-question">
            <div class="question-header">
                <h3><i class="fas fa-sun"></i><i class="fas fa-moon"></i> К какому типу относится эта буква?</h3>
                <div class="question-progress">Вопрос ${gameState.correctCount + gameState.wrongCount + 1}</div>
            </div>
            
            <div class="letter-display">
                <div class="current-letter-arabic" style="font-size: 6rem;">${gameState.currentLetter.letter}</div>
                <div class="letter-name">${gameState.currentLetter.name}</div>
            </div><div class="sunmoon-explanation">
                <p><strong>Солнечные буквы (14)</strong> — ассимилируются с определённым артиклем "аль"</p>
                <p><strong>Лунные буквы (14)</strong> — не ассимилируются с артиклем "аль"</p>
            </div>
            
            <div class="sunmoon-options" id="sunMoonAnswers">
                <button class="sunmoon-btn sun-btn" data-type="solar">
                    <div class="sunmoon-icon">☀️</div>
                    <div class="sunmoon-text">Солнечная</div>
                </button>
                <button class="sunmoon-btn moon-btn" data-type="lunar">
                    <div class="sunmoon-icon">🌙</div>
                    <div class="sunmoon-text">Лунная</div>
                </button>
            </div>
        </div>
    `;
    
    // Назначаем обработчики
    document.querySelectorAll('.sunmoon-btn').forEach(btn => {
        btn.onclick = () => {
            const isCorrect = btn.dataset.type === gameState.currentLetter.sunMoon;
            checkSunMoonAnswer(isCorrect);
        };
    });
}

// 4. Режим "Найди ошибку"
function startErrorsMode() {
    generateErrorQuestion();
}

function generateErrorQuestion() {
    if (!gameState.isPlaying) return;
    
    // Создаем примеры с ошибками
    const errorExamples = [
        {
            correct: "كِتَاب",
            wrong: "كِتْاب",
            hint: "Неправильная сукун вместо фатхи",
            letter: "ت"
        },
        {
            correct: "بَاب",
            wrong: "باب",
            hint: "Отсутствует харакат",
            letter: "ب"
        },
        {
            correct: "مَدْرَسَة",
            wrong: "مَدرَسَة",
            hint: "Неправильное соединение букв",
            letter: "د"
        },
        {
            correct: "قَلَم",
            wrong: "قَلْم",
            hint: "Пропущена буква",
            letter: "ا"
        }
    ];
    
    const example = errorExamples[Math.floor(Math.random() * errorExamples.length)];
    gameState.currentLetter = ARABIC_ALPHABET.find(l => l.letter === example.letter) || ARABIC_ALPHABET[0];
    
    elements.gameContainer.innerHTML = `
        <div class="error-question">
            <div class="question-header">
                <h3><i class="fas fa-search"></i> Найдите ошибку в написании</h3>
                <div class="question-progress">Вопрос ${gameState.correctCount + gameState.wrongCount + 1}</div>
            </div>
            
            <div class="error-display">
                <div class="word-comparison">
                    <div class="word-correct">
                        <div class="word-label">Правильно:</div>
                        <div class="arabic-word">${example.correct}</div>
                    </div>
                    <div class="word-wrong">
                        <div class="word-label">С ошибкой:</div>
                        <div class="arabic-word error">${example.wrong}</div>
                    </div>
                </div>
                
                <div class="error-hint">
                    <i class="fas fa-lightbulb"></i>
                    Найдите отличие в написании слов
                </div>
            </div>
            
            <div class="error-options" id="errorAnswers">
                <button class="error-option" data-error="harakat">Ошибка в харакате</button>
                <button class="error-option" data-error="letter">Пропущена буква</button>
                <button class="error-option" data-error="connection">Неправильное соединение</button>
                <button class="error-option" data-error="sukun">Неправильная сукун</button>
            </div>
        </div>
    `;
    
    // Определяем правильный тип ошибки
    let correctErrorType = 'harakat';
    if (example.hint.includes('пропущена')) correctErrorType = 'letter';
    if (example.hint.includes('соединение')) correctErrorType = 'connection';
    if (example.hint.includes('сукун')) correctErrorType = 'sukun';
    
    document.querySelectorAll('.error-option').forEach(btn => {
        btn.onclick = () => {
            const isCorrect = btn.dataset.error === correctErrorType;
            checkErrorAnswer(isCorrect, example.hint);
        };
    });
}

// 5. Режим "Пары букв"
function startPairsMode() {
    generatePairsQuestion();
}

function generatePairsMode() {
    generatePairsQuestion();
}

function generatePairsQuestion() {
    if (!gameState.isPlaying) return;
    
    // Пары похожих букв
    const letterPairs = [
        { letters: ['ب', 'ت', 'ث'], correct: 'ت', hint: 'Отличается количеством и расположением точек' },
        { letters: ['ج', 'ح', 'خ'], correct: 'ح', hint: 'Отличается наличием и расположением точки' },
        { letters: ['س', 'ش'], correct: 'ش', hint: 'Отличается дополнительными точками' },
        { letters: ['ص', 'ض'], correct: 'ض', hint: 'Отличается дополнительной точкой' },
        { letters: ['ط', 'ظ'], correct: 'ظ', hint: 'Отличается дополнительной точкой' }
    ];
    
    const pair = letterPairs[Math.floor(Math.random() * letterPairs.length)];
    gameState.currentLetter = ARABIC_ALPHABET.find(l => l.letter === pair.correct);
    
    // Создаем вопрос: "Какая буква лишняя?"
    elements.gameContainer.innerHTML = `
        <div class="pairs-question">
            <div class="question-header">
                <h3><i class="fas fa-object-group"></i> Найдите букву, отличающуюся от других</h3>
                <div class="question-progress">Вопрос ${gameState.correctCount + gameState.wrongCount + 1}</div>
            </div>
            
            <div class="pairs-display">
                <div class="letters-group">
                    ${pair.letters.map(letter => `
                        <div class="pair-letter" data-letter="${letter}">${letter}</div>
                    `).join('')}
                </div>
                
                <div class="pairs-hint">
                    <i class="fas fa-eye"></i>
                    Внимательно рассмотрите буквы
                </div>
            </div>
            
            <div class="pairs-options" id="pairsAnswers">
                ${pair.letters.map(letter => `
                    <button class="pair-option" data-letter="${letter}">
                        <div class="pair-letter-option">${letter}</div>
                        <div class="pair-letter-name">${ARABIC_ALPHABET.find(l => l.letter === letter).name}</div>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    document.querySelectorAll('.pair-option').forEach(btn => {
        btn.onclick = () => {
            const isCorrect = btn.dataset.letter === pair.correct;
            checkPairsAnswer(isCorrect, pair.hint);
        };
    });
}

// 6. Режим "Спринт"
function startSprintMode() {
    gameState.timer = 60; // 60 секунд на спринт
    updateTimerDisplay();
    generateSprintQuestion();
}

function generateSprintQuestion() {
    if (!gameState.isPlaying) return;
    
    // Быстрые вопросы в спринте
    const letterIndex = Math.floor(Math.random() * ARABIC_ALPHABET.length);
    gameState.currentLetter = ARABIC_ALPHABET[letterIndex];
    
    // Простые вопросы: только название буквы
    elements.gameContainer.innerHTML = `
        <div class="sprint-question">
            <div class="sprint-header">
                <div class="sprint-timer">
                    <i class="fas fa-bolt"></i>
                    <span id="sprintTime">${gameState.timer}</span> сек
                </div>
                <div class="sprint-score">
                    <i class="fas fa-tachometer-alt"></i>
                    ${gameState.score} очков
                </div>
            </div>
            
            <div class="sprint-letter">${gameState.currentLetter.letter}</div>
            
            <div class="sprint-instruction">
                <i class="fas fa-running"></i>
                Быстро! Какое название у этой буквы?
            </div>
            
            <div class="sprint-answers" id="sprintAnswers"></div>
        </div>
    `;
    
    generateSprintAnswers();
}

function generateSprintAnswers() {const sprintAnswers = document.getElementById('sprintAnswers');
    sprintAnswers.innerHTML = '';
    
    const correctAnswer = gameState.currentLetter.name;
    let answers = [correctAnswer];
    
    // Только 3 варианта для скорости
    while (answers.length < 3) {
        const randomLetter = ARABIC_ALPHABET[Math.floor(Math.random() * ARABIC_ALPHABET.length)];
        if (!answers.includes(randomLetter.name)) {
            answers.push(randomLetter.name);
        }
    }
    
    answers = shuffleArray(answers);
    
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'sprint-btn';
        button.textContent = answer;
        button.onclick = () => checkSprintAnswer(answer === correctAnswer);
        sprintAnswers.appendChild(button);
    });
}

// ===== ПРОВЕРКА ОТВЕТОВ =====
function checkBasicAnswer(isCorrect) {
    processAnswer(isCorrect, `Это буква "${gameState.currentLetter.name}"`);
}

function checkFormsAnswer(isCorrect) {
    processAnswer(isCorrect, `Правильная форма: ${gameState.currentLetter.letter}`);
}

function checkSunMoonAnswer(isCorrect) {
    const typeName = gameState.currentLetter.sunMoon === 'solar' ? 'солнечная' : 'лунная';
    processAnswer(isCorrect, `Эта буква — ${typeName}`);
}

function checkErrorAnswer(isCorrect, hint) {
    processAnswer(isCorrect, hint);
}

function checkPairsAnswer(isCorrect, hint) {
    processAnswer(isCorrect, hint);
}

function checkSprintAnswer(isCorrect) {
    // В спринте ускоренная обработка
    if (isCorrect) {
        gameState.score += 20; // Больше очков за скорость
        gameState.correctCount++;
        gameState.streak++;
        gameState.learnedLetters.add(gameState.currentLetter.letter);
        
        // Эффект правильного ответа
        document.querySelector('.sprint-letter').classList.add('correct');
        playSuccessSound();
    } else {
        gameState.wrongCount++;
        gameState.streak = 0;
        document.querySelector('.sprint-letter').classList.add('wrong');
        playErrorSound();
    }
    
    updateStats();
    updateAlphabetGrid();
    
    // Следующий вопрос без задержки в спринте
    setTimeout(() => {
        if (gameState.isPlaying) {
            generateSprintQuestion();
        }
    }, 300);
}

function processAnswer(isCorrect, message) {
    if (!gameState.isPlaying) return;
    
    // Отключаем все кнопки
    document.querySelectorAll('.answer-btn, .form-option-btn, .sunmoon-btn, .error-option, .pair-option, .sprint-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    if (isCorrect) {
        // Правильный ответ
        gameState.score += calculatePoints();
        gameState.correctCount++;
        gameState.streak++;
        gameState.learnedLetters.add(gameState.currentLetter.letter);
        
        // Проверка уровня
        if (gameState.correctCount % 5 === 0) {
            gameState.level++;
            showMessage(`Поздравляем! Вы достигли уровня ${gameState.level}!`, 'success');
        }
        
        // Визуальный эффект
        highlightCorrectAnswer();
        playSuccessSound();
        
        showMessage(`Правильно! +${calculatePoints()} очков (Серия: ${gameState.streak})`, 'success');
    } else {
        // Неправильный ответ
        gameState.wrongCount++;
        gameState.streak = 0;
        
        highlightWrongAnswer();
        playErrorSound();
        
        showMessage(`Неправильно! ${message}`, 'error');
    }
    
    // Обновление статистики
    updateStats();
    updateProgress();
    updateAlphabetGrid();
    saveProgress();
    
    // Следующий вопрос через 1.5 секунды
    setTimeout(() => {
        if (gameState.isPlaying) {
            // Генерируем следующий вопрос в зависимости от режима
            switch(gameState.currentMode) {
                case 'basic':
                    generateBasicQuestion();
                    break;
                case 'forms':
                    generateFormsQuestion();
                    break;
                case 'sunMoon':generateSunMoonQuestion();
                    break;
                case 'errors':
                    generateErrorQuestion();
                    break;
                case 'pairs':
                    generatePairsQuestion();
                    break;
                case 'sprint':
                    generateSprintQuestion();
                    break;
            }
        }
    }, 1500);
}

function calculatePoints() {
    let points = 10;
    
    // Модификаторы сложности
    switch(gameState.difficulty) {
        case 'easy':
            points *= 1;
            break;
        case 'medium':
            points *= 1.5;
            break;
        case 'hard':
            points *= 2;
            break;
    }
    
    // Бонус за серию
    if (gameState.streak > 3) {
        points += Math.floor(gameState.streak / 3) * 5;
    }
    
    // Бонус за уровень
    points += (gameState.level - 1) * 2;
    
    return Math.round(points);
}

function highlightCorrectAnswer() {
    const correctElements = document.querySelectorAll('.answer-btn, .form-option-btn, .sunmoon-btn, .error-option, .pair-option');
    correctElements.forEach(el => {
        // Здесь должна быть логика подсветки правильного ответа
        // В реальной реализации нужно определить, какой элемент правильный
    });
}

function highlightWrongAnswer() {
    // Аналогично для неправильного ответа
}

// ===== ТАЙМЕР =====
function startTimer() {
    clearInterval(gameState.timerInterval);
    
    const circumference = 2 * Math.PI * 45; // Радиус круга
    const totalTime = gameState.timer;
    
    gameState.timerInterval = setInterval(() => {
        if (!gameState.isPlaying) return;
        
        gameState.timer--;
        updateTimerDisplay();
        
        // Обновляем круговой прогресс
        const offset = circumference - (gameState.timer / totalTime) * circumference;
        elements.timerCircle.style.strokeDashoffset = offset;
        
        // Изменяем цвет при низком времени
        if (gameState.timer <= 10) {
            elements.timerCircle.style.stroke = '#F44336';
            elements.timerText.style.color = '#F44336';
            elements.timerText.classList.add('timer-warning');
        } else if (gameState.timer <= 20) {
            elements.timerCircle.style.stroke = '#FF9800';
            elements.timerText.style.color = '#FF9800';
            elements.timerText.classList.remove('timer-warning');
        } else {
            elements.timerCircle.style.stroke = '#d4a574';
            elements.timerText.style.color = '#8a4a5f';
            elements.timerText.classList.remove('timer-warning');
        }
        
        // Конец игры
        if (gameState.timer <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.timerText.textContent = gameState.timer;
}

// ===== ИНТЕРФЕЙС =====
function updateUI() {
    // Обновляем кнопку звука
    elements.soundBtn.innerHTML = `
        <div class="btn-icon">
            <i class="fas fa-${gameState.soundEnabled ? 'volume-up' : 'volume-mute'}"></i>
        </div>
        <div class="btn-text">
            <div class="btn-title">Звуки</div>
            <div class="btn-sub">${gameState.soundEnabled ? 'Включены' : 'Выключены'}</div>
        </div>
    `;
    
    // Обновляем счетчик подсказок
    elements.hintCounter.textContent = gameState.totalHints - gameState.hintsUsed;
}

function updateStats() {
    elements.statScore.textContent = gameState.score;
    elements.statCorrect.textContent = gameState.correctCount;
    elements.statStreak.textContent = gameState.streak;
    elements.statLearned.textContent = ${gameState.learnedLetters.size}/28;
}

function updateProgress() {
    const totalQuestions = gameState.correctCount + gameState.wrongCount;
    const gameProgress = totalQuestions > 0 ? Math.min((totalQuestions / 20) * 100, 100) : 0;
    const alphabetProgress = (gameState.learnedLetters.size / ARABIC_ALPHABET.length) * 100;
    
    elements.globalProgressFill.style.width = ${gameProgress}%;
    elements.globalProgressValue.textContent = ${Math.round(alphabetProgress)}%;
    
    // Обновляем счетчики
    const learnedCount = gameState.learnedLetters.size;
    const practicingCount = Math.min(5, ARABIC_ALPHABET.length - learnedCount);
    const newCount = ARABIC_ALPHABET.length - learnedCount - practicingCount;
    
    elements.countMastered.textContent = learnedCount;
    elements.countLearning.textContent = practicingCount;
    elements.countNew.textContent = newCount;
}

function updateAlphabetGrid() {
    const letterElements = document.querySelectorAll('.alphabet-letter');
    
    letterElements.forEach((element, index) => {
        element.classList.remove('learned', 'current', 'favorite');
        
        const letter = ARABIC_ALPHABET[index].letter;
        if (gameState.learnedLetters.has(letter)) {
            element.classList.add('learned');
        }
        
        if (gameState.currentLetter && letter === gameState.currentLetter.letter) {
            element.classList.add('current');
        }
    });
}

function showLetterInfo(letterData) {
    elements.hintContent.innerHTML = `
        <div class="letter-detail-modal">
            <div class="modal-letter">${letterData.letter}</div>
            <div class="modal-name">${letterData.name}</div>
            
            <div class="modal-info-grid">
                <div class="info-item">
                    <div class="info-label">Транскрипция</div>
                    <div class="info-value">${letterData.trans}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Тип</div>
                    <div class="info-value">${letterData.type}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Махрадж</div>
                    <div class="info-value">${letterData.makhraj}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Солнце/Луна</div>
                    <div class="info-value">${letterData.sunMoon === 'solar' ? 'Солнечная' : 'Лунная'}</div>
                </div>
            </div>
            
            <div class="modal-forms">
                <div class="forms-title">Формы буквы:</div>
                <div class="forms-grid">
                    <div class="form-item">
                        <div class="form-label">Изолированная</div>
                        <div class="form-value">${letterData.forms.isolated}</div>
                    </div>
                    <div class="form-item">
                        <div class="form-label">Начальная</div>
                        <div class="form-value">${letterData.forms.initial}</div>
                    </div>
                    <div class="form-item">
                        <div class="form-label">Серединная</div>
                        <div class="form-value">${letterData.forms.medial}</div>
                    </div>
                    <div class="form-item">
                        <div class="form-label">Конечная</div>
                        <div class="form-value">${letterData.forms.final}</div>
                    </div>
                </div>
            </div>
            
            <div class="modal-description">
                <p>${letterData.desc}</p>
            </div>
        </div>
    `;
    
    elements.hintContainer.classList.add('active');
}

function showMessage(text, type) {
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-times-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    elements.gameMessage.className = game-message ${type};
    elements.gameMessage.innerHTML = `
        <div class="message-icon">
            <i class="${icons[type]}"></i>
        </div>
        <div class="message-text">${text}</div>
    `;
    
    // Автоскрытие для информационных сообщений
    if (type === 'info') {
        setTimeout(() => {
            if (elements.gameMessage.textContent.includes(text)) {elements.gameMessage.textContent = '';
                elements.gameMessage.className = 'game-message';
            }
        }, 4000);
    }
}

// ===== ПОДСКАЗКИ =====
function showHint() {
    if (!gameState.isPlaying || gameState.hintsUsed >= gameState.totalHints) return;
    
    gameState.hintsUsed++;
    elements.hintCounter.textContent = gameState.totalHints - gameState.hintsUsed;
    
    if (gameState.currentLetter) {
        showLetterInfo(gameState.currentLetter);
    }
    
    if (gameState.hintsUsed >= gameState.totalHints) {
        elements.hintBtn.disabled = true;
    }
}

function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    updateUI();
    
    showMessage(`Звуки ${gameState.soundEnabled ? 'включены' : 'выключены'}`, 'info');
}

// ===== РЕЗУЛЬТАТЫ =====
function showResults() {
    const totalTime = gameState.startTime ? Math.floor((Date.now() - gameState.startTime) / 1000) : 0;
    const totalQuestions = gameState.correctCount + gameState.wrongCount;
    const accuracy = totalQuestions > 0 ? Math.round((gameState.correctCount / totalQuestions) * 100) : 0;
    
    // Сохраняем лучшие результаты
    if (gameState.score > gameState.stats.bestScore) {
        gameState.stats.bestScore = gameState.score;
    }
    if (gameState.streak > gameState.stats.bestStreak) {
        gameState.stats.bestStreak = gameState.streak;
    }
    
    // Формируем статистику
    elements.resultStats.innerHTML = `
        <div class="result-stat">
            <div class="result-value">${gameState.score}</div>
            <div class="result-label">Очки</div>
        </div>
        <div class="result-stat">
            <div class="result-value">${accuracy}%</div>
            <div class="result-label">Точность</div>
        </div>
        <div class="result-stat">
            <div class="result-value">${gameState.correctCount}</div>
            <div class="result-label">Правильно</div>
        </div>
        <div class="result-stat">
            <div class="result-value">${totalTime}с</div>
            <div class="result-label">Время</div>
        </div>
    `;
    
    // Формируем сообщение
    let message = '';
    let messageType = 'success';
    
    if (accuracy === 100 && gameState.correctCount > 5) {
        message = 'Великолепно! Идеальный результат! 🌟';
    } else if (accuracy >= 80) {
        message = 'Отличная работа! Вы хорошо знаете алфавит! ✨';
    } else if (accuracy >= 60) {
        message = 'Хороший результат! Продолжайте практиковаться! 👍';
        messageType = 'warning';
    } else {
        message = 'Практика ведёт к совершенству! Попробуйте ещё раз! 💪';
        messageType = 'error';
    }
    
    elements.resultMessage.className = result-message ${messageType};
    elements.resultMessage.innerHTML = `
        <div class="message-icon">
            <i class="fas fa-${messageType === 'success' ? 'trophy' : messageType === 'warning' ? 'exclamation-triangle' : 'redo'}"></i>
        </div>
        <div class="message-text">${message}</div>
    `;
    
    // Показываем модальное окно
    elements.resultsModal.classList.add('active');
}

function closeResults() {
    elements.resultsModal.classList.remove('active');
}

function shareResults() {
    const text = `🎮 Я сыграл в игру "Арабский алфавит" на MA'RIFA!
🏆 Очки: ${gameState.score} | ✅ Правильно: ${gameState.correctCount}
🎯 Точность: ${Math.round((gameState.correctCount / (gameState.correctCount + gameState.wrongCount)) * 100)}%
📚 Изучено букв: ${gameState.learnedLetters.size}/28
#Маърифа #АрабскийАлфавит #ИзучениеЯзыка`;

    if (navigator.share) {
        navigator.share({
            title: 'Мои результаты в игре "Арабский алфавит"',
            text: text,
            url: window.location.href,
        });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            showMessage('Результаты скопированы в буфер обмена!', 'success');
        });
    }
}

// ===== ХРАНЕНИЕ ДАННЫХ =====
function loadProgress() {
    try {
        const savedProgress = JSON.parse(localStorage.getItem('marifa_alphabet_game_progress')) || {};
        
        if (savedProgress.learnedLetters) {
            gameState.learnedLetters = new Set(savedProgress.learnedLetters);
        }
        
        if (savedProgress.stats) {
            gameState.stats = { ...gameState.stats, ...savedProgress.stats };
        }
        
        if (savedProgress.soundEnabled !== undefined) {
            gameState.soundEnabled = savedProgress.soundEnabled;
        }
        
        updateUI();
        updateProgress();
        updateAlphabetGrid();
        
        console.log('✅ Прогресс загружен');
    } catch (e) {
        console.log('Ошибка загрузки прогресса:', e);
    }
}

function saveProgress() {
    try {
        const progress = {
            learnedLetters: Array.from(gameState.learnedLetters),
            stats: gameState.stats,
            soundEnabled: gameState.soundEnabled,
            lastPlayed: new Date().toISOString(),
        };
        
        localStorage.setItem('marifa_alphabet_game_progress', JSON.stringify(progress));
        console.log('✅ Прогресс сохранен');
    } catch (e) {
        console.log('Ошибка сохранения прогресса:', e);
    }
}

function resetStatistics() {
    if (confirm('Вы уверены, что хотите сбросить всю статистику? Это действие нельзя отменить.')) {
        localStorage.removeItem('marifa_alphabet_game_progress');
        
        // Сброс состояния
        gameState.learnedLetters.clear();
        gameState.stats = {
            perLetter: {},
            gamesPlayed: 0,
            totalTime: 0,
            bestScore: 0,
            bestStreak: 0
        };
        
        updateUI();
        updateStats();
        updateProgress();
        updateAlphabetGrid();
        
        showMessage('Статистика сброшена!', 'info');
    }
}

// ===== ЗВУКИ =====
function playSuccessSound() {
    if (!gameState.soundEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1046.5, audioContext.currentTime + 0.3);
        
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Аудио не поддерживается');
    }
}

function playErrorSound() {
    if (!gameState.soundEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(392.0, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(196.0, audioContext.currentTime + 0.3);
        
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Аудио не поддерживается');
    }
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ===== ДОПОЛНИТЕЛЬНЫЕ СТИЛИ ДЛЯ РЕЖИМОВ =====
function addModeStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Стили для режимов */
        .basic-question, .forms-question, .sunmoon-question,
        .error-question, .pairs-question, .sprint-question {
            width: 100%;
        }
        
        .question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(138, 74, 95, 0.1);
        }
        
        .question-header h3 {
            font-size: 1.4rem;
            color: var(--primary-dark);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .question-progress {
            background: rgba(138, 74, 95, 0.1);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--primary-color);
        }
        
        .letter-display {
            text-align: center;
            margin: 40px 0;
        }
        
        .current-letter-arabic {
            font-family: 'Amiri', serif;
            font-size: 8rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
        }
        
        .letter-name {
            font-size: 2rem;
            color: var(--primary-dark);
            font-weight: 600;
        }
        
        .letter-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        
        .info-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(138, 74, 95, 0.05);
            padding: 10px 20px;
            border-radius: var(--border-radius-md);
        }
        
        .info-item i {
            color: var(--secondary-color);
        }
        
        /* Ответы */
        .answers-grid, .forms-options, .sunmoon-options,
        .error-options, .pairs-options, .sprint-answers {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 30px;
        }
        
        @media (max-width: 768px) {
            .answers-grid, .forms-options, .sunmoon-options,
            .error-options, .pairs-options, .sprint-answers {
                grid-template-columns: 1fr;
            }
        }
        
        .answer-btn, .form-option-btn, .sunmoon-btn,
        .error-option, .pair-option, .sprint-btn {
            background: white;
            border: 3px solid rgba(138, 74, 95, 0.1);
            border-radius: var(--border-radius-md);
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            font-size: 1.1rem;
            font-weight: 500;
            color: var(--text-dark);
        }
        
        .answer-btn:hover:not(:disabled),
        .form-option-btn:hover:not(:disabled),
        .sunmoon-btn:hover:not(:disabled),
        .error-option:hover:not(:disabled),
        .pair-option:hover:not(:disabled),
        .sprint-btn:hover:not(:disabled) {
            transform: translateY(-5px);
            border-color: var(--secondary-color);
            box-shadow: var(--shadow-light);
        }
        
        .answer-btn:disabled,
        .form-option-btn:disabled,
        .sunmoon-btn:disabled,
        .error-option:disabled,
        .pair-option:disabled,
        .sprint-btn:disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }
        
        .answer-number, .form-number {
            width: 30px;
            height: 30px;background: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 0.9rem;
        }
        
        .form-letter {
            font-family: 'Amiri', serif;
            font-size: 2.5rem;
        }
        
        .sunmoon-icon {
            font-size: 2rem;
        }
        
        .sunmoon-text {
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        .sun-btn {
            background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
            border-color: #FFB74D;
        }
        
        .moon-btn {
            background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
            border-color: #64B5F6;
        }
        
        /* Спринт */
        .sprint-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
            padding: 15px 25px;
            border-radius: var(--border-radius-md);
            color: white;
        }
        
        .sprint-timer, .sprint-score {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.2rem;
            font-weight: 600;
        }
        
        .sprint-letter {
            font-family: 'Amiri', serif;
            font-size: 10rem;
            text-align: center;
            margin: 40px 0;
            color: var(--primary-color);
            animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .sprint-instruction {
            text-align: center;
            background: rgba(212, 165, 116, 0.1);
            padding: 15px;
            border-radius: var(--border-radius-md);
            margin-bottom: 30px;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--primary-dark);
        }
        
        .sprint-btn {
            background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
            color: white;
            border: none;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 25px;
        }
        
        /* Правильный/неправильный ответ */
        .answer-btn.correct,
        .form-option-btn.correct,
        .sunmoon-btn.correct,
        .error-option.correct,
        .pair-option.correct,
        .sprint-btn.correct {
            background: linear-gradient(135deg, #C8E6C9, #A5D6A7);
            border-color: #4CAF50;
            color: #2E7D32;
            animation: pulse 0.5s;
        }
        
        .answer-btn.wrong,
        .form-option-btn.wrong,
        .sunmoon-btn.wrong,
        .error-option.wrong,
        .pair-option.wrong {
            background: linear-gradient(135deg, #FFEBEE, #FFCDD2);
            border-color: #F44336;
            color: #C62828;
            animation: shake 0.5s;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        /* Игра "Найди ошибку" */
        .word-comparison {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin: 40px 0;
            flex-wrap: wrap;
        }
        
        .word-correct, .word-wrong {
            text-align: center;
            padding: 20px;
            border-radius: var(--border-radius-md);
            min-width: 200px;
        }
        
        .word-correct {
            background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
            border: 2px solid #4CAF50;
        }
        
        .word-wrong {
            background: linear-gradient(135deg, #FFEBEE, #FFCDD2);
            border: 2px solid #F44336;
        }
        
        .word-label {
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--text-medium);
        }
        
        .arabic-word {
            font-family: 'Amiri', serif;
            font-size: 2.5rem;
            color: var(--text-dark);
        }
        
        .arabic-word.error {
            color: #F44336;
            position: relative;
        }
        
        .arabic-word.error::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #F44336;
            animation: errorLine 1s infinite;
        }
        
        @keyframes errorLine {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        
        .error-hint {
            text-align: center;
            background: rgba(255, 152, 0, 0.1);
            padding: 15px;
            border-radius: var(--border-radius-md);
            margin: 20px 0;
            font-size: 1rem;
            color: #F57C00;
        }
        
        /* Игра "Пары букв" */
        .letters-group {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 40px 0;
            flex-wrap: wrap;
        }
        
        .pair-letter {
            width: 100px;
            height: 100px;
            background: white;
            border-radius: var(--border-radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Amiri', serif;
            font-size: 4rem;
            color: var(--primary-color);
            border: 4px solid rgba(138, 74, 95, 0.2);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .pair-letter:hover {
            transform: scale(1.1);
            border-color: var(--secondary-color);
            box-shadow: var(--shadow-light);
        }
        
        .pair-letter.selected {
            background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
            color: white;
            border-color: var(--primary-color);
        }
        
        .pairs-hint {
            text-align: center;
            background: rgba(156, 39, 176, 0.1);
            padding: 15px;
            border-radius: var(--border-radius-md);
            margin: 20px 0;
            font-size: 1rem;
            color: #7B1FA2;
        }
        
        .pair-letter-option {
            font-family: 'Amiri', serif;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .pair-letter-name {
            font-size: 0.9rem;
            color: var(--text-medium);
        }
        
        /* Обучение */
        .sunmoon-explanation, .forms-hint {
            background: rgba(33, 150, 243, 0.1);
            padding: 20px;border-radius: var(--border-radius-md);
            margin: 30px 0;
            border-left: 4px solid #2196F3;
        }
        
        .sunmoon-explanation p, .forms-hint {
            margin: 10px 0;
            color: #1565C0;
            font-size: 1rem;
            line-height: 1.5;
        }
        
        /* Модальное окно информации о букве */
        .letter-detail-modal {
            padding: 20px;
        }
        
        .modal-letter {
            font-family: 'Amiri', serif;
            font-size: 5rem;
            text-align: center;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .modal-name {
            font-size: 2rem;
            text-align: center;
            color: var(--primary-dark);
            font-weight: 600;
            margin-bottom: 30px;
        }
        
        .modal-info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .info-item {
            background: white;
            padding: 15px;
            border-radius: var(--border-radius-md);
            border: 2px solid rgba(138, 74, 95, 0.1);
        }
        
        .info-label {
            font-size: 0.8rem;
            color: var(--text-medium);
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .info-value {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--primary-dark);
        }
        
        .modal-forms {
            margin-bottom: 30px;
        }
        
        .forms-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-dark);
            margin-bottom: 15px;
        }
        
        .forms-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        
        .form-item {
            background: rgba(138, 74, 95, 0.05);
            padding: 15px;
            border-radius: var(--border-radius-md);
            text-align: center;
        }
        
        .form-label {
            font-size: 0.8rem;
            color: var(--text-medium);
            margin-bottom: 10px;
        }
        
        .form-value {
            font-family: 'Amiri', serif;
            font-size: 1.8rem;
            color: var(--primary-color);
        }
        
        .modal-description {
            background: rgba(212, 165, 116, 0.1);
            padding: 20px;
            border-radius: var(--border-radius-md);
            border-left: 4px solid var(--secondary-color);
        }
        
        .modal-description p {
            color: var(--text-dark);
            line-height: 1.6;
            font-size: 1.1rem;
        }
    `;
    document.head.appendChild(style);
}

// Добавляем стили при загрузке
addModeStyles();

// ===== ЗАВЕРШАЮЩИЕ ФУНКЦИИ =====

// Инициализация игры после загрузки страницы
window.addEventListener('load', function() {
    // Добавляем анимацию загрузки
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 300);
    }, 800);
    
    // Показываем обновленный интерфейс
    updateUI();
    updateAlphabetGrid();
    updateProgress();
    
    // Добавляем плавающие буквы на фон
    addFloatingLetters();
    
    console.log('🎉 Игра полностью загружена и готова!');
});

function addFloatingLetters() {
    const container = document.querySelector('.floating-letters');
    if (!container) return;
    
    const arabicLetters = ARABIC_ALPHABET.map(l => l.letter);
    
    // Очищаем старые буквы
    container.innerHTML = '';
    
    // Добавляем 25 плавающих букв
    for (let i = 0; i < 25; i++) {
        const letter = document.createElement('div');
        letter.className = 'floating-letter';
        letter.textContent = arabicLetters[Math.floor(Math.random() * arabicLetters.length)];
        letter.style.left = ${Math.random() * 100}%;
        letter.style.top = ${Math.random() * 100}%;
        letter.style.animationDelay = ${Math.random() * 5}s;
        letter.style.fontSize = ${1 + Math.random() * 2}rem;
        letter.style.opacity = ${0.05 + Math.random() * 0.1};
        
        // Разные скорости анимации
        const duration = 20 + Math.random() * 30;
        letter.style.animationDuration = ${duration}s;
        
        container.appendChild(letter);
    }
}

// ===== ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ РЕЖИМОВ =====

// Функция для режима Спринт (дополнительная логика)
function updateSprintTimer() {
    if (gameState.currentMode !== 'sprint' || !gameState.isPlaying) return;
    
    // В спринте показываем отдельный таймер
    const sprintTimeElement = document.getElementById('sprintTime');
    if (sprintTimeElement) {
        sprintTimeElement.textContent = gameState.timer;
        
        // Анимация мигания при низком времени
        if (gameState.timer <= 10) {
            sprintTimeElement.style.animation = 'pulse 0.5s infinite';
            sprintTimeElement.style.color = '#F44336';
        } else if (gameState.timer <= 30) {
            sprintTimeElement.style.animation = 'none';
            sprintTimeElement.style.color = '#FF9800';
        } else {
            sprintTimeElement.style.animation = 'none';
            sprintTimeElement.style.color = '#4CAF50';
        }
    }
}

// Функция для создания эффектов при правильном ответе
function createConfetti(letter) {
    if (!gameState.soundEnabled) return;
    
    try {
        // Создаем визуальный эффект конфетти
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '9998';
        
        // Цвета для конфетти
        const colors = ['#8a4a5f', '#d4a574', '#4CAF50', '#2196F3', '#FF9800'];
        
        // Создаем 50 частиц конфетти
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-particle';
            confetti.textContent = Math.random() > 0.7 ? letter : '✦';
            confetti.style.position = 'absolute';
            confetti.style.top = '50%';
            confetti.style.left = '50%';
            confetti.style.fontFamily = 'Amiri, serif';
            confetti.style.fontSize = ${1 + Math.random() * 1.5}rem;
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.opacity = '0.8';
            confetti.style.transform = 'translate(-50%, -50%)';
            confetti.style.zIndex = '9999';
            confetti.style.animation = confettiFall ${1 + Math.random() * 2}s ease-out forwards;
            
            // Случайные начальные координаты и угол
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 200;
            const endX = Math.cos(angle) * distance;
            const endY = 100 + Math.random() * 100;
            
            confetti.style.setProperty('--end-x', `${endX}px`);
            confetti.style.setProperty('--end-y', `${endY}px`);
            confetti.style.setProperty('--rotation', `${Math.random() * 720 - 360}deg`);
            
            confettiContainer.appendChild(confetti);
        }
        
        document.body.appendChild(confettiContainer);
        
        // Удаляем конфетти через 2 секунды
        setTimeout(() => {
            confettiContainer.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(confettiContainer);
            }, 300);
        }, 2000);
        
    } catch (e) {
        console.log('Ошибка создания конфетти:', e);
    }
}

// Добавляем стили для конфетти
const confettiStyles = document.createElement('style');
confettiStyles.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) rotate(var(--rotation));
            opacity: 0;
        }
    }
    
    .confetti-particle {
        animation: confettiFall 2s ease-out forwards;
    }
`;
document.head.appendChild(confettiStyles);

// Функция для вибрации (на мобильных)
function vibrate(pattern = [100, 50, 100]) {
    if (!gameState.soundEnabled) return;
    
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

// ===== АНИМАЦИИ И ЭФФЕКТЫ =====

// Эффект "изучения" буквы
function animateLetterLearning(letterElement) {
    if (!letterElement) return;
    
    letterElement.style.animation = 'learnedPulse 2s ease';
    
    // Добавляем эффект свечения
    const glow = document.createElement('div');
    glow.className = 'letter-glow';
    glow.style.position = 'absolute';
    glow.style.top = '0';
    glow.style.left = '0';
    glow.style.width = '100%';
    glow.style.height = '100%';
    glow.style.borderRadius = 'inherit';
    glow.style.background = 'radial-gradient(circle, rgba(76, 175, 80, 0.3) 0%, transparent 70%)';
    glow.style.opacity = '0';
    glow.style.animation = 'glowPulse 1s ease-in-out';
    
    letterElement.appendChild(glow);
    
    setTimeout(() => {
        if (glow.parentNode === letterElement) {
            letterElement.removeChild(glow);
        }
    }, 1000);
}

// Стили для анимаций
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes glowPulse {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
    }
    
    @keyframes learnedPulse {
        0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 rgba(76, 175, 80, 0);
        }
        50% { 
            transform: scale(1.15);
            box-shadow: 0 0 30px rgba(76, 175, 80, 0.4);
        }
    }
    
    @keyframes currentGlow {
        0%, 100% { 
            box-shadow: 0 0 10px rgba(212, 165, 116, 0.3);
        }
        50% { 
            box-shadow: 0 0 25px rgba(212, 165, 116, 0.5);
        }
    }
    
    @keyframes floatLetter {
        0% {
            transform: translateY(100vh) rotate(0deg) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 0.1;
        }
        90% {
            opacity: 0.1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg) scale(1.2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(animationStyles);

// ===== ИНТЕРАКТИВНЫЕ ФУНКЦИИ =====

// Переключение сложности
function setDifficulty(level) {
    gameState.difficulty = level;
    
    // Обновляем таймер в зависимости от сложности
    switch(level) {
        case 'easy':
            gameState.timer = 45;
            break;
        case 'medium':
            gameState.timer = 30;
            break;
        case 'hard':
            gameState.timer = 15;
            break;
    }
    
    // Обновляем отображение
    updateTimerDisplay();
    
    showMessage(`Установлена сложность: ${getDifficultyText(level)}`, 'info');
    saveProgress();
}

// Получение текста сложности
function getDifficultyText(level) {
    const texts = {
        easy: 'Легкий (45 сек)',
        medium: 'Средний (30 сек)',
        hard: 'Сложный (15 сек)'
    };
    return texts[level] || 'Легкий';
}

// ===== УПРАВЛЕНИЕ КЛАВИШАМИ =====

// Расширяем обработку клавиш
document.addEventListener('keydown', function(e) {
    // Пауза игры на пробел
    if (e.key === ' ' && gameState.isPlaying) {
        e.preventDefault();
        
        if (!gameState.paused) {
            // Пауза игры
            gameState.paused = true;
            clearInterval(gameState.timerInterval);// Показываем окно паузы
            const pauseModal = document.createElement('div');
            pauseModal.className = 'pause-overlay';
            pauseModal.innerHTML = `
                <div class="pause-modal">
                    <h3><i class="fas fa-pause"></i> Игра на паузе</h3>
                    <p>Нажмите пробел или кликните, чтобы продолжить</p>
                    <div class="pause-stats">
                        <div>Очки: ${gameState.score}</div>
                        <div>Время: ${gameState.timer} сек</div>
                        <div>Серия: ${gameState.streak}</div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(pauseModal);
            
            // Возобновление по клику или пробелу
            const resumeGame = () => {
                if (gameState.paused) {
                    gameState.paused = false;
                    startTimer();
                    if (pauseModal.parentNode) {
                        document.body.removeChild(pauseModal);
                    }
                    document.removeEventListener('keydown', resumeKeyHandler);
                    pauseModal.removeEventListener('click', resumeGame);
                }
            };
            
            const resumeKeyHandler = (e) => {
                if (e.key === ' ') {
                    resumeGame();
                }
            };
            
            document.addEventListener('keydown', resumeKeyHandler);
            pauseModal.addEventListener('click', resumeGame);
        }
    }
    
    // Быстрые ответы цифрами 1-4
    if (e.key >= '1' && e.key <= '4' && gameState.isPlaying && !gameState.paused) {
        const index = parseInt(e.key) - 1;
        const answerButtons = document.querySelectorAll('.answer-btn, .form-option-btn, .sprint-btn');
        if (answerButtons[index] && !answerButtons[index].disabled) {
            answerButtons[index].click();
        }
    }
    
    // Переключение режимов клавишами F1-F6
    if (e.key >= 'F1' && e.key <= 'F6' && !gameState.isPlaying) {
        e.preventDefault();
        const modeKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'];
        const modeIds = ['basic', 'forms', 'sunMoon', 'errors', 'pairs', 'sprint'];
        const index = modeKeys.indexOf(e.key);
        if (index !== -1) {
            switchGameMode(modeIds[index]);
        }
    }
});

// ===== ДОПОЛНИТЕЛЬНЫЙ UI =====

// Создаем кнопки сложности
function createDifficultyButtons() {
    const difficultyContainer = document.createElement('div');
    difficultyContainer.className = 'difficulty-selector';
    difficultyContainer.innerHTML = `
        <div class="difficulty-title">
            <i class="fas fa-sliders-h"></i> Уровень сложности
        </div>
        <div class="difficulty-buttons">
            <button class="difficulty-btn easy ${gameState.difficulty === 'easy' ? 'active' : ''}" data-level="easy">
                <i class="fas fa-seedling"></i> Легкий
            </button>
            <button class="difficulty-btn medium ${gameState.difficulty === 'medium' ? 'active' : ''}" data-level="medium">
                <i class="fas fa-mountain"></i> Средний
            </button>
            <button class="difficulty-btn hard ${gameState.difficulty === 'hard' ? 'active' : ''}" data-level="hard">
                <i class="fas fa-fire"></i> Сложный
            </button>
        </div>
    `;
    
    // Добавляем в интерфейс
    const gameTitleSection = document.querySelector('.game-title-section');
    if (gameTitleSection) {
        gameTitleSection.appendChild(difficultyContainer);
    }
    
    // Назначаем обработчики
    difficultyContainer.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const level = this.dataset.level;
            setDifficulty(level);
            
            // Обновляем активную кнопку
            difficultyContainer.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.remove('active');});
            this.classList.add('active');
        });
    });
}

// Стили для кнопок сложности
const difficultyStyles = document.createElement('style');
difficultyStyles.textContent = `
    .difficulty-selector {
        margin-top: 30px;
        text-align: center;
    }
    
    .difficulty-title {
        font-size: 1.1rem;
        color: var(--text-medium);
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .difficulty-buttons {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    .difficulty-btn {
        padding: 10px 25px;
        border: 2px solid;
        border-radius: var(--border-radius-xl);
        background: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .difficulty-btn.easy {
        border-color: #4CAF50;
        color: #2E7D32;
    }
    
    .difficulty-btn.medium {
        border-color: #FF9800;
        color: #F57C00;
    }
    
    .difficulty-btn.hard {
        border-color: #F44336;
        color: #C62828;
    }
    
    .difficulty-btn.active {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .difficulty-btn:hover:not(.active) {
        transform: translateY(-2px);
    }
    
    .difficulty-btn.active.easy {
        background: #4CAF50;
        color: white;
    }
    
    .difficulty-btn.active.medium {
        background: #FF9800;
        color: white;
    }
    
    .difficulty-btn.active.hard {
        background: #F44336;
        color: white;
    }
`;
document.head.appendChild(difficultyStyles);

// Создаем кнопки сложности при загрузке
setTimeout(() => {
    createDifficultyButtons();
}, 100);

// ===== ФИНАЛЬНАЯ ИНИЦИАЛИЗАЦИЯ =====

// Добавляем глобальный объект для отладки
window.AlphabetGame = {
    version: '2.0.0',
    state: gameState,
    data: ARABIC_ALPHABET,
    functions: {
        startGame,
        endGame,
        showResults,
        resetStatistics,
        switchGameMode,
        setDifficulty,
        saveProgress,
        loadProgress
    },
    debug: function() {
        console.log('🎮 Состояние игры:', gameState);
        console.log('📊 Прогресс:', {
            learned: gameState.learnedLetters.size,
            score: gameState.score,
            stats: gameState.stats
        });
    }
};

// Выводим информацию в консоль
console.log(`
╔══════════════════════════════════════════╗
║    🎮 ARABIC ALPHABET GAME v2.0.0        ║
║    🚀 6 режимов • Стеклянный дизайн      ║
║    📚 28 букв • Сохранение прогресса     ║
║    ✨ Готов к использованию!             ║
╚══════════════════════════════════════════╝

Доступные команды:
• AlphabetGame.debug() - отладка
• Алгоритм.v1.startGame() - начать игру
• Алгоритм.v1.switchGameMode('sprint') - сменить режим

Управление:
• F1-F6 - выбор режима
• 1-4 - быстрые ответы
• Пробел - пауза/подсказка
`);

// Запускаем начальную анимацию
setTimeout(() => {
    // Показываем приветственное сообщение
    showMessage('Добро пожаловать в игру "Арабский алфавит"! Выберите режим и начните обучение.', 'info');
    
    // Анимация появления элементов
    document.querySelectorAll('.mode-card, .stat-item, .control-btn').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 100);
    });
}, 1500);

// Стили для анимации появления
const fadeInStyles = document.createElement('style');
fadeInStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .mode-card, .stat-item, .control-btn, .alphabet-letter {
        opacity: 0;animation: fadeInUp 0.5s ease forwards;
    }
    
    /* Задержки для плавного появления */
    .mode-card:nth-child(1) { animation-delay: 0.1s; }
    .mode-card:nth-child(2) { animation-delay: 0.2s; }
    .mode-card:nth-child(3) { animation-delay: 0.3s; }
    .mode-card:nth-child(4) { animation-delay: 0.4s; }
    .mode-card:nth-child(5) { animation-delay: 0.5s; }
    .mode-card:nth-child(6) { animation-delay: 0.6s; }
    
    .stat-item:nth-child(1) { animation-delay: 0.7s; }
    .stat-item:nth-child(2) { animation-delay: 0.8s; }
    .stat-item:nth-child(3) { animation-delay: 0.9s; }
    .stat-item:nth-child(4) { animation-delay: 1.0s; }
`;
document.head.appendChild(fadeInStyles);

// ===== ЭКСПОРТ ФУНКЦИЙ ДЛЯ ГЛОБАЛЬНОГО ИСПОЛЬЗОВАНИЯ =====
window.startArabicAlphabetGame = startGame;
window.showArabicAlphabetResults = showResults;
window.resetArabicAlphabetStats = resetStatistics;

console.log('✅ Игра полностью инициализирована! Наслаждайтесь!');