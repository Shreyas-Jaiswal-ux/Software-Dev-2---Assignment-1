
/* ========================================
   StudyFlow — app.js
   Application logic and behaviour
   ======================================== */

// ---- Utilities ----

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

function getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// ---- Task Manager ----

let tasks = [];
let editingTaskId = null;

function loadTasks() {
    const stored = localStorage.getItem('studyflow-tasks');
    if (stored) {
        tasks = JSON.parse(stored);
    }
}

function saveTasks() {
    localStorage.setItem('studyflow-tasks', JSON.stringify(tasks));
}

function addTask(title, deadline, priority, module) {
    const task = {
        id: generateId(),
        title: title,
        deadline: deadline,
        priority: priority,
        module: module,
        completed: false
    };
    tasks.push(task);
    saveTasks();
    return task;
}

function updateTask(id, title, deadline, priority, module) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks[index].title = title;
        tasks[index].deadline = deadline;
        tasks[index].priority = priority;
        tasks[index].module = module;
        saveTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
}

function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
    }
}

// ---- Validation ----

function validateForm(title, deadline) {
    let isValid = true;
    const titleError = document.getElementById('title-error');
    const deadlineError = document.getElementById('deadline-error');
    const titleInput = document.getElementById('task-title');
    const deadlineInput = document.getElementById('task-deadline');

    // Clear previous errors
    titleError.textContent = '';
    deadlineError.textContent = '';
    titleInput.classList.remove('form-input--error');
    deadlineInput.classList.remove('form-input--error');

    // Check title
    if (!title || title.trim() === '') {
        titleError.textContent = 'Please enter a task title.';
        titleInput.classList.add('form-input--error');
        isValid = false;
    }

    // Check deadline exists
    if (!deadline) {
        deadlineError.textContent = 'Please select a deadline.';
        deadlineInput.classList.add('form-input--error');
        isValid = false;
    }
    // Check deadline is not in the past
    else if (deadline < getTodayString()) {
        deadlineError.textContent = 'Deadline cannot be in the past.';
        deadlineInput.classList.add('form-input--error');
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    document.getElementById('title-error').textContent = '';
    document.getElementById('deadline-error').textContent = '';
    document.getElementById('task-title').classList.remove('form-input--error');
    document.getElementById('task-deadline').classList.remove('form-input--error');
}

// ---- Renderer ----

function renderTasks() {
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    const summary = document.getElementById('task-summary');

    // Clear task list (keep empty state element)
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-state" id="empty-state">No tasks yet — add one to get started!</p>';
        summary.textContent = 'No tasks yet';
        return;
    }

    // Update summary
    const completedCount = tasks.filter(t => t.completed).length;
    summary.textContent = `${completedCount} of ${tasks.length} tasks completed`;

    // Sort: incomplete first, then by deadline
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        return a.deadline.localeCompare(b.deadline);
    });

    // Render each task
    sortedTasks.forEach(task => {
        const card = createTaskCard(task);
        taskList.appendChild(card);
    });
}

function createTaskCard(task) {
    const card = document.createElement('div');
    card.className = `task-card task-card--${task.priority.toLowerCase()}${task.completed ? ' task-card--completed' : ''}`;
    card.dataset.id = task.id;

    const priorityClass = `task-card__badge--priority-${task.priority.toLowerCase()}`;

    card.innerHTML = `
        <div class="task-card__header">
            <input 
                type="checkbox" 
                class="task-card__checkbox" 
                ${task.completed ? 'checked' : ''}
                aria-label="Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}"
            >
            <span class="task-card__title">${escapeHtml(task.title)}</span>
        </div>
        <div class="task-card__details">
            <span class="task-card__badge task-card__badge--deadline">${formatDate(task.deadline)}</span>
            <span class="task-card__badge ${priorityClass}">${task.priority}</span>
            <span class="task-card__badge">${escapeHtml(task.module)}</span>
        </div>
        <div class="task-card__actions">
            <button class="btn btn--small btn--edit" data-action="edit">Edit</button>
            <button class="btn btn--small btn--delete" data-action="delete">Delete</button>
        </div>
    `;

    // Checkbox toggle
    const checkbox = card.querySelector('.task-card__checkbox');
    checkbox.addEventListener('change', () => {
        toggleComplete(task.id);
        renderTasks();
    });

    // Edit button
    const editBtn = card.querySelector('[data-action="edit"]');
    editBtn.addEventListener('click', () => {
        startEditing(task);
    });

    // Delete button
    const deleteBtn = card.querySelector('[data-action="delete"]');
    deleteBtn.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete "${task.title}"?`)) {
            deleteTask(task.id);
            renderTasks();
        }
    });

    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ---- Form Handling ----

function startEditing(task) {
    editingTaskId = task.id;
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-deadline').value = task.deadline;
    document.getElementById('task-priority').value = task.priority;
    document.getElementById('task-module').value = task.module;
    document.getElementById('form-title').textContent = 'Edit Task';
    document.getElementById('submit-btn').textContent = 'Save Changes';
    document.getElementById('cancel-btn').style.display = 'inline-flex';

    clearErrors();

    // Scroll to form on mobile
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

function cancelEditing() {
    editingTaskId = null;
    document.getElementById('task-form').reset();
    document.getElementById('form-title').textContent = 'Add New Task';
    document.getElementById('submit-btn').textContent = 'Add Task';
    document.getElementById('cancel-btn').style.display = 'none';
    clearErrors();
}

function handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('task-title').value.trim();
    const deadline = document.getElementById('task-deadline').value;
    const priority = document.getElementById('task-priority').value;
    const module = document.getElementById('task-module').value.trim();

    if (!validateForm(title, deadline)) {
        return;
    }

    if (editingTaskId) {
        updateTask(editingTaskId, title, deadline, priority, module);
        cancelEditing();
    } else {
        addTask(title, deadline, priority, module);
        document.getElementById('task-form').reset();
        clearErrors();
    }

    renderTasks();
}

// ---- Clear Errors on Input ----

function setupInputListeners() {
    document.getElementById('task-title').addEventListener('input', () => {
        document.getElementById('title-error').textContent = '';
        document.getElementById('task-title').classList.remove('form-input--error');
    });

    document.getElementById('task-deadline').addEventListener('input', () => {
        document.getElementById('deadline-error').textContent = '';
        document.getElementById('task-deadline').classList.remove('form-input--error');
    });
}

// ---- Initialise ----

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();

    document.getElementById('task-form').addEventListener('submit', handleSubmit);
    document.getElementById('cancel-btn').addEventListener('click', cancelEditing);

    setupInputListeners();
});
