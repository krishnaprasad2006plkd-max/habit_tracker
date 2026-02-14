// ==================== 
// HINDU SCRIPTURE QUOTES
// ==================== 

const hinduQuotes = [
    { text: "You have the right to work, but never to the fruit of work.", source: "Bhagavad Gita 2.47", sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।" },
    { text: "The mind is restless and difficult to restrain, but it is subdued by practice.", source: "Bhagavad Gita 6.35", sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।" },
    { text: "When meditation is mastered, the mind is unwavering like a flame in a windless place.", source: "Bhagavad Gita 6.19", sanskrit: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता।" },
    { text: "A person can rise through the efforts of their own mind.", source: "Bhagavad Gita 6.5", sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।" },
    { text: "Whatever happened, happened for the good.", source: "Bhagavad Gita", sanskrit: "जो हुआ वह अच्छे के लिए हुआ।" },
    { text: "Arise, awake, and stop not until the goal is achieved.", source: "Katha Upanishad", sanskrit: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।" },
    { text: "Truth alone triumphs, not falsehood.", source: "Mundaka Upanishad", sanskrit: "सत्यमेव जयते नानृतं।" },
    { text: "From the unreal lead me to the real, from darkness lead me to light.", source: "Brihadaranyaka Upanishad", sanskrit: "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय।" },
    { text: "May all beings be happy. May all beings be healthy.", source: "Upanishads", sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।" },
    { text: "Let noble thoughts come to us from all directions.", source: "Rig Veda", sanskrit: "आ नो भद्राः क्रतवो यन्तु विश्वतः।" },
    { text: "Dharma protects those who protect Dharma.", source: "Mahabharata", sanskrit: "धर्मो रक्षति रक्षितः।" },
    { text: "The one who has conquered the mind has already won the world.", source: "Bhagavad Gita 6.7", sanskrit: "जितात्मनः प्रशान्तस्य परमात्मा समाहितः।" }
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

// Habit Modal Elements
const editHabitModal = document.getElementById('editHabitModal');
const editHabitInput = document.getElementById('editHabitInput');
const closeHabitModalBtn = document.getElementById('closeHabitModalBtn');
const cancelHabitEditBtn = document.getElementById('cancelHabitEditBtn');
const saveHabitEditBtn = document.getElementById('saveHabitEditBtn');
const habitCreatedDate = document.getElementById('habitCreatedDate');
const habitCurrentStreak = document.getElementById('habitCurrentStreak');
const habitTotalCompletions = document.getElementById('habitTotalCompletions');

// To-Do Elements
const addTaskForm = document.getElementById('addTaskForm');
const taskInput = document.getElementById('taskInput');
const taskPriority = document.getElementById('taskPriority');
const taskList = document.getElementById('taskList');
const todoPrevDateBtn = document.getElementById('todoPrevDateBtn');
const todoNextDateBtn = document.getElementById('todoNextDateBtn');
const todoDateLabel = document.getElementById('todoDateLabel');
const todoDateFull = document.getElementById('todoDateFull');
const taskProgressText = document.getElementById('taskProgressText');
const taskProgressPercent = document.getElementById('taskProgressPercent');
const taskProgressFill = document.getElementById('taskProgressFill');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// Task Modal Elements
const editTaskModal = document.getElementById('editTaskModal');
const editTaskInput = document.getElementById('editTaskInput');
const editTaskPriority = document.getElementById('editTaskPriority');
const editTaskNotes = document.getElementById('editTaskNotes');
const closeTaskModalBtn = document.getElementById('closeTaskModalBtn');
const cancelTaskEditBtn = document.getElementById('cancelTaskEditBtn');
const saveTaskEditBtn = document.getElementById('saveTaskEditBtn');

// ==================== 
// DATA & STATE
// ==================== 

let habits = JSON.parse(localStorage.getItem('habits')) || [];
let reflections = JSON.parse(localStorage.getItem('reflections')) || {};
let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
let currentReflectionDate = new Date();
let currentTodoDate = new Date();
let saveTimeout = null;
let historyExpanded = false;
let editingHabitIndex = null;
let editingTaskId = null;
let currentTaskFilter = 'all';

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
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (formatDateKey(date) === formatDateKey(today)) return 'Today';
    if (formatDateKey(date) === formatDateKey(yesterday)) return 'Yesterday';
    if (formatDateKey(date) === formatDateKey(tomorrow)) return 'Tomorrow';
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function formatDateFull(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function countWords(text) {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
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
    const actionsSpan = document.createElement('span');
    actionsSpan.textContent = 'Actions';
    daysHeader.appendChild(actionsSpan);
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
            <div class="habit-info" data-index="${index}" title="Click to edit">
                <h3>${escapeHTML(habit.name)}</h3>
                <div class="streak">${streak > 0 ? `<span class="fire">🔥</span> ${streak} day streak` : 'Start your streak!'}</div>
                <div class="habit-weekly-progress">${weeklyProgress.completed}/7 this week</div>
            </div>
            ${checksHTML}
            <div class="habit-actions">
                <button class="edit-btn" data-index="${index}" title="Edit">✏️</button>
                <button class="delete-btn" data-index="${index}" title="Delete">🗑️</button>
            </div>
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
                <p>Add your first habit above!</p>
            </div>
        `;
        updateProgress();
        return;
    }

    habitList.innerHTML = habits.map((habit, index) => createHabitHTML(habit, index)).join('');

    document.querySelectorAll('.day-check').forEach(check => {
        check.addEventListener('click', toggleHabit);
    });

    document.querySelectorAll('.habit-item .edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openHabitEditModal(parseInt(btn.dataset.index));
        });
    });

    document.querySelectorAll('.habit-item .delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteHabit(parseInt(btn.dataset.index));
        });
    });

    document.querySelectorAll('.habit-info').forEach(info => {
        info.addEventListener('click', () => {
            openHabitEditModal(parseInt(info.dataset.index));
        });
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
        const exists = habits.some(h => h.name.toLowerCase() === name.toLowerCase());
        if (exists) {
            alert('This habit already exists!');
            return;
        }

        habits.push({
            id: generateId(),
            name: name,
            completedDates: [],
            createdAt: new Date().toISOString()
        });

        saveHabits();
        renderHabits();
        habitInput.value = '';
    }
}

function addQuickHabit(habitName) {
    const exists = habits.some(h => h.name.toLowerCase() === habitName.toLowerCase());
    if (exists) {
        alert('This habit already exists!');
        return;
    }

    habits.push({
        id: generateId(),
        name: habitName,
        completedDates: [],
        createdAt: new Date().toISOString()
    });

    saveHabits();
    renderHabits();
}

function deleteHabit(index) {
    if (confirm(`Delete "${habits[index].name}"?`)) {
        habits.splice(index, 1);
        saveHabits();
        renderHabits();
    }
}

function saveHabits() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Habit Modal
function openHabitEditModal(index) {
    editingHabitIndex = index;
    const habit = habits[index];
    
    editHabitInput.value = habit.name;
    habitCreatedDate.textContent = new Date(habit.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    const streak = calculateStreak(habit);
    habitCurrentStreak.innerHTML = streak > 0 ? `🔥 ${streak} days` : '0 days';
    habitTotalCompletions.textContent = habit.completedDates.length;
    
    editHabitModal.classList.add('active');
    editHabitInput.focus();
    editHabitInput.select();
}

function closeHabitEditModal() {
    editHabitModal.classList.remove('active');
    editingHabitIndex = null;
}

function saveHabitEdit() {
    if (editingHabitIndex === null) return;
    
    const newName = editHabitInput.value.trim();
    if (!newName) {
        alert('Please enter a habit name.');
        return;
    }
    
    const exists = habits.some((h, i) => i !== editingHabitIndex && h.name.toLowerCase() === newName.toLowerCase());
    if (exists) {
        alert('A habit with this name already exists!');
        return;
    }
    
    habits[editingHabitIndex].name = newName;
    saveHabits();
    renderHabits();
    closeHabitEditModal();
}

// ==================== 
// TO-DO FUNCTIONS
// ==================== 

function getTasksForDate(date) {
    const key = formatDateKey(date);
    return tasks[key] || [];
}

function saveTasksForDate(date, taskList) {
    const key = formatDateKey(date);
    if (taskList.length === 0) {
        delete tasks[key];
    } else {
        tasks[key] = taskList;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const currentTasks = getTasksForDate(currentTodoDate);
    
    // Filter tasks
    let filteredTasks = currentTasks;
    if (currentTaskFilter === 'active') {
        filteredTasks = currentTasks.filter(t => !t.completed);
    } else if (currentTaskFilter === 'completed') {
        filteredTasks = currentTasks.filter(t => t.completed);
    }
    
    // Sort by priority only - completed tasks stay in place
    filteredTasks.sort((a, b) => {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    if (filteredTasks.length === 0) {
        const message = currentTaskFilter === 'all' ? 'No tasks for this day' : `No ${currentTaskFilter} tasks`;
        taskList.innerHTML = `
            <div class="empty-tasks">
                <div class="icon">✅</div>
                <p>${message}</p>
            </div>
        `;
    } else {
        taskList.innerHTML = filteredTasks.map(task => createTaskHTML(task)).join('');
        
        // Add event listeners
        document.querySelectorAll('.task-checkbox').forEach(cb => {
            cb.addEventListener('click', () => toggleTask(cb.dataset.id));
        });
        
        document.querySelectorAll('.task-edit-btn').forEach(btn => {
            btn.addEventListener('click', () => openTaskEditModal(btn.dataset.id));
        });
        
        document.querySelectorAll('.task-delete-btn').forEach(btn => {
            btn.addEventListener('click', () => deleteTask(btn.dataset.id));
        });
    }
    
    updateTaskProgress();
    updateTodoDateDisplay();
}

function createTaskHTML(task) {
    return `
        <div class="task-item ${task.completed ? 'completed' : ''}">
            <div class="task-checkbox ${task.completed ? 'checked' : ''}" data-id="${task.id}"></div>
            <div class="task-content">
                <div class="task-text">${escapeHTML(task.text)}</div>
                <div class="task-meta">
                    <span class="task-priority ${task.priority}">${task.priority}</span>
                    ${task.notes ? '<span class="task-notes-indicator">📝 Note</span>' : ''}
                </div>
            </div>
            <div class="task-actions">
                <button class="task-edit-btn" data-id="${task.id}" title="Edit">✏️</button>
                <button class="task-delete-btn" data-id="${task.id}" title="Delete">🗑️</button>
            </div>
        </div>
    `;
}

function addTask(e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    
    if (text) {
        const currentTasks = getTasksForDate(currentTodoDate);
        currentTasks.push({
            id: generateId(),
            text: text,
            priority: taskPriority.value,
            completed: false,
            notes: '',
            createdAt: new Date().toISOString()
        });
        
        saveTasksForDate(currentTodoDate, currentTasks);
        renderTasks();
        taskInput.value = '';
        taskPriority.value = 'medium';
    }
}

function toggleTask(taskId) {
    const currentTasks = getTasksForDate(currentTodoDate);
    const task = currentTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasksForDate(currentTodoDate, currentTasks);
        renderTasks();
    }
}

function deleteTask(taskId) {
    const currentTasks = getTasksForDate(currentTodoDate);
    const index = currentTasks.findIndex(t => t.id === taskId);
    if (index > -1) {
        currentTasks.splice(index, 1);
        saveTasksForDate(currentTodoDate, currentTasks);
        renderTasks();
    }
}

function clearCompletedTasks() {
    const currentTasks = getTasksForDate(currentTodoDate);
    const activeTasks = currentTasks.filter(t => !t.completed);
    const completedCount = currentTasks.length - activeTasks.length;
    
    if (completedCount === 0) {
        alert('No completed tasks to clear!');
        return;
    }
    
    if (confirm(`Clear ${completedCount} completed task(s)?`)) {
        saveTasksForDate(currentTodoDate, activeTasks);
        renderTasks();
    }
}

function updateTaskProgress() {
    const currentTasks = getTasksForDate(currentTodoDate);
    const total = currentTasks.length;
    const completed = currentTasks.filter(t => t.completed).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    taskProgressText.textContent = `${completed} of ${total} tasks completed`;
    taskProgressPercent.textContent = `${percent}%`;
    taskProgressFill.style.width = `${percent}%`;
}

function updateTodoDateDisplay() {
    todoDateLabel.textContent = formatDateLabel(currentTodoDate);
    todoDateFull.textContent = formatDateFull(currentTodoDate);
}

function navigateTodoDate(direction) {
    currentTodoDate.setDate(currentTodoDate.getDate() + direction);
    renderTasks();
}

// Task Modal
function openTaskEditModal(taskId) {
    const currentTasks = getTasksForDate(currentTodoDate);
    const task = currentTasks.find(t => t.id === taskId);
    
    if (task) {
        editingTaskId = taskId;
        editTaskInput.value = task.text;
        editTaskPriority.value = task.priority;
        editTaskNotes.value = task.notes || '';
        
        editTaskModal.classList.add('active');
        editTaskInput.focus();
        editTaskInput.select();
    }
}

function closeTaskEditModal() {
    editTaskModal.classList.remove('active');
    editingTaskId = null;
}

function saveTaskEdit() {
    if (!editingTaskId) return;
    
    const newText = editTaskInput.value.trim();
    if (!newText) {
        alert('Please enter a task.');
        return;
    }
    
    const currentTasks = getTasksForDate(currentTodoDate);
    const task = currentTasks.find(t => t.id === editingTaskId);
    
    if (task) {
        task.text = newText;
        task.priority = editTaskPriority.value;
        task.notes = editTaskNotes.value.trim();
        
        saveTasksForDate(currentTodoDate, currentTasks);
        renderTasks();
        closeTaskEditModal();
    }
}

function setTaskFilter(filter) {
    currentTaskFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderTasks();
}

// ==================== 
// PROGRESS FUNCTIONS
// ==================== 

function setProgress(ring, percentage, radius = 38) {
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = offset;
}

function updateProgress() {
    const today = new Date().toISOString().split('T')[0];
    const totalHabits = habits.length;

    const completedTodayCount = habits.filter(h => h.completedDates.includes(today)).length;
    const todayPercent = totalHabits > 0 ? Math.round((completedTodayCount / totalHabits) * 100) : 0;
    setProgress(todayProgressRing, todayPercent);
    todayPercentage.textContent = `${todayPercent}%`;
    todayCompleted.textContent = completedTodayCount;
    todayTotal.textContent = totalHabits;

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

    const bestStreak = habits.reduce((max, habit) => Math.max(max, calculateStreak(habit)), 0);
    setProgress(streakProgressRing, Math.min((bestStreak / 30) * 100, 100));
    streakDays.textContent = bestStreak;

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
    updateReflectionDateDisplay();
    updateReflectionNavButtons();
    renderReflectionHistory();
}

function updateReflectionDateDisplay() {
    reflectionDateLabel.textContent = formatDateLabel(currentReflectionDate);
    reflectionDateFull.textContent = formatDateFull(currentReflectionDate);
}

function updateReflectionNavButtons() {
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

function navigateReflectionDate(direction) {
    currentReflectionDate.setDate(currentReflectionDate.getDate() + direction);
    loadReflection(currentReflectionDate);
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
    handleReflectionInput();
}

function renderReflectionHistory() {
    const sortedDates = Object.keys(reflections).sort((a, b) => new Date(b) - new Date(a));
    const displayDates = historyExpanded ? sortedDates : sortedDates.slice(0, 3);

    if (sortedDates.length === 0) {
        historyList.innerHTML = `<div class="empty-history"><div class="icon">📖</div><p>No reflections yet</p></div>`;
        toggleHistoryBtn.style.display = 'none';
        return;
    }

    toggleHistoryBtn.style.display = sortedDates.length > 3 ? 'block' : 'none';
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

    digitalTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    dateDisplay.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
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
    renderTasks();
    startClock();
    displayDailyQuote();
    loadReflection(currentReflectionDate);
}

// ==================== 
// EVENT LISTENERS
// ==================== 

// Habits
addHabitForm.addEventListener('submit', addHabit);
document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', () => addQuickHabit(btn.dataset.habit));
});

// Habit Modal
closeHabitModalBtn.addEventListener('click', closeHabitEditModal);
cancelHabitEditBtn.addEventListener('click', closeHabitEditModal);
saveHabitEditBtn.addEventListener('click', saveHabitEdit);
editHabitModal.addEventListener('click', (e) => { if (e.target === editHabitModal) closeHabitEditModal(); });
editHabitInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); saveHabitEdit(); }
    if (e.key === 'Escape') closeHabitEditModal();
});

// Tasks
addTaskForm.addEventListener('submit', addTask);
todoPrevDateBtn.addEventListener('click', () => navigateTodoDate(-1));
todoNextDateBtn.addEventListener('click', () => navigateTodoDate(1));
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setTaskFilter(btn.dataset.filter));
});

// Task Modal
closeTaskModalBtn.addEventListener('click', closeTaskEditModal);
cancelTaskEditBtn.addEventListener('click', closeTaskEditModal);
saveTaskEditBtn.addEventListener('click', saveTaskEdit);
editTaskModal.addEventListener('click', (e) => { if (e.target === editTaskModal) closeTaskEditModal(); });
editTaskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); saveTaskEdit(); }
    if (e.key === 'Escape') closeTaskEditModal();
});

// Reflection
reflectionTextarea.addEventListener('input', handleReflectionInput);
prevDateBtn.addEventListener('click', () => navigateReflectionDate(-1));
nextDateBtn.addEventListener('click', () => navigateReflectionDate(1));
clearReflectionBtn.addEventListener('click', clearReflection);
toggleHistoryBtn.addEventListener('click', toggleHistory);
document.querySelectorAll('.prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => insertPrompt(btn.dataset.prompt));
});

// Start
init();
