// ==================== 
// HINDU SCRIPTURE QUOTES
// ==================== 

const hinduQuotes = [
    {
        text: "You have the right to work, but never to the fruit of work.",
        source: "Bhagavad Gita 2.47",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"
    },
    {
        text: "The mind is restless and difficult to restrain, but it is subdued by practice.",
        source: "Bhagavad Gita 6.35",
        sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।"
    },
    {
        text: "When meditation is mastered, the mind is unwavering like a flame in a windless place.",
        source: "Bhagavad Gita 6.19",
        sanskrit: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता।"
    },
    {
        text: "A person can rise through the efforts of their own mind.",
        source: "Bhagavad Gita 6.5",
        sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।"
    },
    {
        text: "Whatever happened, happened for the good. Whatever is happening, is happening for the good.",
        source: "Bhagavad Gita",
        sanskrit: "जो हुआ वह अच्छे के लिए हुआ।"
    },
    {
        text: "Arise, awake, and stop not until the goal is achieved.",
        source: "Katha Upanishad",
        sanskrit: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।"
    },
    {
        text: "Truth alone triumphs, not falsehood.",
        source: "Mundaka Upanishad 3.1.6",
        sanskrit: "सत्यमेव जयते नानृतं।"
    },
    {
        text: "From the unreal lead me to the real, from darkness lead me to light.",
        source: "Brihadaranyaka Upanishad",
        sanskrit: "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय।"
    },
    {
        text: "May all beings be happy. May all beings be healthy.",
        source: "Upanishads",
        sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"
    },
    {
        text: "Let noble thoughts come to us from all directions.",
        source: "Rig Veda 1.89.1",
        sanskrit: "आ नो भद्राः क्रतवो यन्तु विश्वतः।"
    },
    {
        text: "Dharma protects those who protect Dharma.",
        source: "Mahabharata",
        sanskrit: "धर्मो रक्षति रक्षितः।"
    },
    {
        text: "The one who has conquered the mind has already won the world.",
        source: "Bhagavad Gita 6.7",
        sanskrit: "जितात्मनः प्रशान्तस्य परमात्मा समाहितः।"
    },
    {
        text: "Perform your duty with a calm mind, without attachment to success or failure.",
        source: "Bhagavad Gita 2.48",
        sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।"
    },
    {
        text: "He who sees inaction in action and action in inaction is wise.",
        source: "Bhagavad Gita 4.18",
        sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।"
    },
    {
        text: "There is nothing lost or wasted in this life.",
        source: "Bhagavad Gita 2.40",
        sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।"
    },
    {
        text: "Even as a tortoise draws in its limbs, the wise can draw in their senses at will.",
        source: "Bhagavad Gita 2.58",
        sanskrit: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः।"
    },
    {
        text: "The soul is neither born, nor does it ever die.",
        source: "Bhagavad Gita 2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्।"
    },
    {
        text: "Hell has three gates: lust, anger, and greed.",
        source: "Bhagavad Gita 16.21",
        sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।"
    },
    {
        text: "Change is the law of the universe.",
        source: "Bhagavad Gita",
        sanskrit: "परिवर्तनं संसारस्य नियमः।"
    },
    {
        text: "Fear not what is not real. What is real, always was and cannot be destroyed.",
        source: "Bhagavad Gita 2.16",
        sanskrit: "नासतो विद्यते भावो नाभावो विद्यते सतः।"
    }
];

// ==================== 
// DOM ELEMENTS
// ==================== 

// Habit Elements
const addHabitForm = document.getElementById('addHabitForm');
const habitInput = document.getElementById('habitInput');
const daysHeader = document.getElementById('daysHeader');
const habitList = document.getElementById('habitList');

// Clock Elements
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');
const digitalTime = document.getElementById('digitalTime');
const dateDisplay = document.getElementById('dateDisplay');

// Quote Elements
const quoteText = document.getElementById('quoteText');
const quoteSource = document.getElementById('quoteSource');
const quoteSanskrit = document.getElementById('quoteSanskrit');

// Progress Elements
const todayProgressRing = document.getElementById('todayProgressRing');
const todayPercentage = document.getElementById('todayPercentage');
const todayCompleted = document.getElementById('todayCompleted');
const todayTotal = document.getElementById('todayTotal');
const weeklyProgressRing = document.getElementById('weeklyProgressRing');
const weeklyPercentage = document.getElementById('weeklyPercentage');
const weeklyCompleted = document.getElementById('weeklyCompleted');
const weeklyTotal = document.getElementById('weeklyTotal');
const streakProgressRing = document.getElementById('streakProgressRing');
const streakDays = document.getElementById('streakDays');
const overallProgressFill = document.getElementById('overallProgressFill');
const overallPercentageText = document.getElementById('overallPercentageText');

// Reflection Elements
const reflectionTextarea = document.getElementById('reflectionTextarea');
const reflectionDateLabel = document.getElementById('reflectionDateLabel');
const reflectionDateFull = document.getElementById('reflectionDateFull');
const prevDateBtn = document.getElementById('prevDateBtn');
const nextDateBtn = document.getElementById('nextDateBtn');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const saveStatus = document.getElementById('saveStatus');
const clearReflectionBtn = document.getElementById('clearReflectionBtn');
const historyList = document.getElementById('historyList');
const toggleHistoryBtn = document.getElementById('toggleHistoryBtn');

// ==================== 
// DATA & STATE
// ==================== 

let habits = JSON.parse(localStorage.getItem('habits')) || [];
let reflections = JSON.parse(localStorage.getItem('reflections')) || {};
let currentReflectionDate = new Date();
let saveTimeout = null;
let historyExpanded = false;

// ==================== 
// UTILITY FUNCTIONS
// ==================== 

function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        days.push({
            date: date.toISOString().split('T')[0],
            dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
            isToday: i === 0
        });
    }
    return days;
}

const days = getLast7Days();

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function formatDateKey(date) {
    return date.toISOString().split('T')[0];
}

function formatDateLabel(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (formatDateKey(date) === formatDateKey(today)) return 'Today';
    if (formatDateKey(date) === formatDateKey(yesterday)) return 'Yesterday';
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function formatDateFull(date) {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function countWords(text) {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
}

// ==================== 
// HABIT FUNCTIONS
// ==================== 

function renderDaysHeader() {
    daysHeader.innerHTML = '<span>Habit</span>';
    days.forEach(day => {
        const span = document.createElement('span');
        span.textContent = day.dayName;
        if (day.isToday) span.classList.add('today');
        daysHeader.appendChild(span);
    });
    daysHeader.appendChild(document.createElement('span'));
}

function calculateStreak(habit) {
    let streak = 0;
    const today = new Date().toISOString().split('T')[0];
    let checkDate = new Date();
    
    if (!habit.completedDates.includes(today)) {
        checkDate.setDate(checkDate.getDate() - 1);
    }
    
    while (true) {
        const dateStr = checkDate.toISOString().split('T')[0];
        if (habit.completedDates.includes(dateStr)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    return streak;
}

function calculateWeeklyProgress(habit) {
    let completed = 0;
    days.forEach(day => {
        if (habit.completedDates.includes(day.date)) completed++;
    });
    return { completed, total: 7, percentage: Math.round((completed / 7) * 100) };
}

function createHabitHTML(habit, index) {
    const streak = calculateStreak(habit);
    const weeklyProgress = calculateWeeklyProgress(habit);
    
    const checksHTML = days.map(day => {
        const isChecked = habit.completedDates.includes(day.date);
        return `<div class="day-check ${isChecked ? 'checked' : ''}" data-habit-index="${index}" data-date="${day.date}"></div>`;
    }).join('');

    return `
        <div class="habit-item">
            <div class="habit-info">
                <h3>${escapeHTML(habit.name)}</h3>
                <div class="streak">${streak > 0 ? `<span class="fire">🔥</span> ${streak} day streak` : 'Start your streak today!'}</div>
                <div class="habit-weekly-progress">${weeklyProgress.completed}/7 this week (${weeklyProgress.percentage}%)</div>
            </div>
            ${checksHTML}
            <button class="delete-btn" data-index="${index}" title="Delete">×</button>
            <div class="habit-progress-bar" style="width: calc((100% - 30px) * ${weeklyProgress.percentage / 100})"></div>
        </div>
    `;
}

function renderHabits() {
    if (habits.length === 0) {
        habitList.innerHTML = `
            <div class="empty-state">
                <div class="icon">📝</div>
                <h3>No habits yet</h3>
                <p>Add your first habit above to get started!</p>
            </div>
        `;
        updateProgress();
        return;
    }

    habitList.innerHTML = habits.map((habit, index) => createHabitHTML(habit, index)).join('');

    document.querySelectorAll('.day-check').forEach(check => {
        check.addEventListener('click', toggleHabit);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', deleteHabit);
    });

    updateProgress();
}

function toggleHabit(e) {
    const habitIndex = parseInt(e.target.dataset.habitIndex);
    const date = e.target.dataset.date;
    const habit = habits[habitIndex];

    if (habit.completedDates.includes(date)) {
        habit.completedDates = habit.completedDates.filter(d => d !== date);
    } else {
        habit.completedDates.push(date);
    }

    saveHabits();
    renderHabits();
}

function addHabit(e) {
    e.preventDefault();
    const name = habitInput.value.trim();

    if (name) {
        // Check for duplicates
        const exists = habits.some(h => h.name.toLowerCase() === name.toLowerCase());
        if (exists) {
            alert('This habit already exists!');
            return;
        }

        habits.push({
            id: Date.now(),
            name: name,
            completedDates: [],
            createdAt: new Date().toISOString()
        });

        saveHabits();
        renderHabits();
        habitInput.value = '';
        habitInput.focus();
    }
}

function addQuickHabit(habitName) {
    const exists = habits.some(h => h.name.toLowerCase() === habitName.toLowerCase());
    if (exists) {
        alert('This habit already exists!');
        return;
    }

    habits.push({
        id: Date.now(),
        name: habitName,
        completedDates: [],
        createdAt: new Date().toISOString()
    });

    saveHabits();
    renderHabits();
}

function deleteHabit(e) {
    const index = parseInt(e.target.dataset.index);
    const habitName = habits[index].name;

    if (confirm(`Delete "${habitName}"?`)) {
        habits.splice(index, 1);
        saveHabits();
        renderHabits();
    }
}

function saveHabits() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// ==================== 
// PROGRESS FUNCTIONS
// ==================== 

function setProgress(ring, percentage, radius = 42) {
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = offset;
}

function updateProgress() {
    const today = new Date().toISOString().split('T')[0];
    const totalHabits = habits.length;

    // Today's Progress
    const completedTodayCount = habits.filter(h => h.completedDates.includes(today)).length;
    const todayPercent = totalHabits > 0 ? Math.round((completedTodayCount / totalHabits) * 100) : 0;
    setProgress(todayProgressRing, todayPercent);
    todayPercentage.textContent = `${todayPercent}%`;
    todayCompleted.textContent = completedTodayCount;
    todayTotal.textContent = totalHabits;

    // Weekly Progress
    let weeklyCompletedCount = 0;
    habits.forEach(habit => {
        days.forEach(day => {
            if (habit.completedDates.includes(day.date)) weeklyCompletedCount++;
        });
    });
    const weeklyTotalCount = totalHabits * 7;
    const weeklyPercent = weeklyTotalCount > 0 ? Math.round((weeklyCompletedCount / weeklyTotalCount) * 100) : 0;
    setProgress(weeklyProgressRing, weeklyPercent);
    weeklyPercentage.textContent = `${weeklyPercent}%`;
    weeklyCompleted.textContent = weeklyCompletedCount;
    weeklyTotal.textContent = weeklyTotalCount;

    // Best Streak
    const bestStreak = habits.reduce((max, habit) => Math.max(max, calculateStreak(habit)), 0);
    setProgress(streakProgressRing, Math.min((bestStreak / 30) * 100, 100));
    streakDays.textContent = bestStreak;

    // Overall Progress Bar
    overallProgressFill.style.width = `${weeklyPercent}%`;
    overallPercentageText.textContent = `${weeklyPercent}%`;
}

// ==================== 
// REFLECTION FUNCTIONS
// ==================== 

function loadReflection(date) {
    const key = formatDateKey(date);
    const reflection = reflections[key];
    reflectionTextarea.value = reflection ? reflection.text : '';
    updateTextStats();
    updateDateDisplay();
    updateNavigationButtons();
    renderReflectionHistory();
}

function updateDateDisplay() {
    reflectionDateLabel.textContent = formatDateLabel(currentReflectionDate);
    reflectionDateFull.textContent = formatDateFull(currentReflectionDate);
}

function updateNavigationButtons() {
    const today = new Date();
    nextDateBtn.disabled = formatDateKey(currentReflectionDate) === formatDateKey(today);
}

function saveReflection() {
    const key = formatDateKey(currentReflectionDate);
    const text = reflectionTextarea.value.trim();

    if (text) {
        reflections[key] = {
            text,
            updatedAt: new Date().toISOString(),
            wordCount: countWords(text),
            charCount: text.length
        };
    } else {
        delete reflections[key];
    }

    localStorage.setItem('reflections', JSON.stringify(reflections));
    showSaveStatus('saved');
    renderReflectionHistory();
}

function showSaveStatus(status) {
    const statusIcon = saveStatus.querySelector('.status-icon');
    const statusText = saveStatus.querySelector('.status-text');

    saveStatus.classList.remove('saving', 'saved');

    if (status === 'saving') {
        saveStatus.classList.add('saving');
        statusIcon.textContent = '⏳';
        statusText.textContent = 'Saving...';
    } else if (status === 'saved') {
        saveStatus.classList.add('saved');
        statusIcon.textContent = '✓';
        statusText.textContent = 'Saved';
        setTimeout(() => {
            statusIcon.textContent = '💾';
            statusText.textContent = 'Auto-saved';
            saveStatus.classList.remove('saved');
        }, 2000);
    }
}

function updateTextStats() {
    const text = reflectionTextarea.value;
    wordCount.textContent = `${countWords(text)} words`;
    charCount.textContent = `${text.length} characters`;
}

function handleReflectionInput() {
    updateTextStats();
    showSaveStatus('saving');

    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveReflection, 1000);
}

function navigateDate(direction) {
    const newDate = new Date(currentReflectionDate);
    newDate.setDate(newDate.getDate() + direction);

    const today = new Date();
    if (newDate <= today) {
        currentReflectionDate = newDate;
        loadReflection(currentReflectionDate);
    }
}

function clearReflection() {
    if (reflectionTextarea.value.trim() && confirm('Clear this reflection?')) {
        reflectionTextarea.value = '';
        handleReflectionInput();
    }
}

function insertPrompt(prompt) {
    const currentText = reflectionTextarea.value;
    const newText = currentText ? `${currentText}\n\n${prompt}\n` : `${prompt}\n`;
    reflectionTextarea.value = newText;
    reflectionTextarea.focus();
    reflectionTextarea.setSelectionRange(newText.length, newText.length);
    handleReflectionInput();
}

function renderReflectionHistory() {
    const sortedDates = Object.keys(reflections).sort((a, b) => new Date(b) - new Date(a));
    const displayDates = historyExpanded ? sortedDates : sortedDates.slice(0, 5);

    if (sortedDates.length === 0) {
        historyList.innerHTML = `
            <div class="empty-history">
                <div class="icon">📖</div>
                <p>No reflections yet. Start writing today!</p>
            </div>
        `;
        toggleHistoryBtn.style.display = 'none';
        return;
    }

    toggleHistoryBtn.style.display = sortedDates.length > 5 ? 'block' : 'none';
    toggleHistoryBtn.textContent = historyExpanded ? 'Show Less' : 'Show All';

    historyList.innerHTML = displayDates.map(dateKey => {
        const reflection = reflections[dateKey];
        const date = new Date(dateKey + 'T00:00:00');
        const isActive = formatDateKey(currentReflectionDate) === dateKey;

        return `
            <div class="history-item ${isActive ? 'active' : ''}" data-date="${dateKey}">
                <div class="history-date">
                    <span class="day">${date.getDate()}</span>
                    <span class="month">${date.toLocaleDateString('en-US', { month: 'short' })}</span>
                </div>
                <div class="history-preview">
                    <div class="preview-text">${escapeHTML(reflection.text)}</div>
                    <div class="preview-stats">${reflection.wordCount} words</div>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.history-item').forEach(item => {
        item.addEventListener('click', () => {
            currentReflectionDate = new Date(item.dataset.date + 'T00:00:00');
            loadReflection(currentReflectionDate);
        });
    });
}

function toggleHistory() {
    historyExpanded = !historyExpanded;
    historyList.classList.toggle('expanded', historyExpanded);
    renderReflectionHistory();
}

// ==================== 
// CLOCK FUNCTIONS
// ==================== 

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ms = now.getMilliseconds();

    const secondRotation = ((seconds + ms / 1000) / 60) * 360;
    const minuteRotation = ((minutes + seconds / 60) / 60) * 360;
    const hourRotation = ((hours % 12 + minutes / 60) / 12) * 360;

    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    digitalTime.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    dateDisplay.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function startClock() {
    updateClock();
    requestAnimationFrame(startClock);
}

// ==================== 
// QUOTE FUNCTIONS
// ==================== 

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / (1000 * 60 * 60 * 24));
}

function displayDailyQuote() {
    const quote = hinduQuotes[getDayOfYear() % hinduQuotes.length];
    quoteText.textContent = `"${quote.text}"`;
    quoteSource.textContent = `— ${quote.source}`;
    
    if (quote.sanskrit) {
        quoteSanskrit.textContent = quote.sanskrit;
        quoteSanskrit.style.display = 'block';
    } else {
        quoteSanskrit.style.display = 'none';
    }
}

// ==================== 
// INITIALIZATION
// ==================== 

function init() {
    renderDaysHeader();
    renderHabits();
    startClock();
    displayDailyQuote();
    loadReflection(currentReflectionDate);
}

// ==================== 
// EVENT LISTENERS
// ==================== 

// Habit form
addHabitForm.addEventListener('submit', addHabit);

// Quick add buttons
document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', () => addQuickHabit(btn.dataset.habit));
});

// Reflection
reflectionTextarea.addEventListener('input', handleReflectionInput);
prevDateBtn.addEventListener('click', () => navigateDate(-1));
nextDateBtn.addEventListener('click', () => navigateDate(1));
clearReflectionBtn.addEventListener('click', clearReflection);
toggleHistoryBtn.addEventListener('click', toggleHistory);

// Prompts
document.querySelectorAll('.prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => insertPrompt(btn.dataset.prompt));
});

// Keyboard navigation for reflection dates
document.addEventListener('keydown', (e) => {
    if (e.target === reflectionTextarea) return;
    if (e.key === 'ArrowLeft') navigateDate(-1);
    if (e.key === 'ArrowRight') navigateDate(1);
});

// Start the app
init();