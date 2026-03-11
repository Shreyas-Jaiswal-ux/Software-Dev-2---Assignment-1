# StudyFlow - User & System Requirements

## User Requirements (User Stories)

User stories are prioritised using the **MoSCoW method**:

- **Must Have (M)** - Essential for the app to function; without these, the product has no value.
- **Should Have (S)** - Important features that add significant value but aren't critical for launch.
- **Could Have (C)** - Nice-to-have features that improve the experience but can be deferred.
- **Won't Have (W)** - Out of scope for this version but considered for future development.

---

### Must Have

| ID | User Story | Priority |
|----|-----------|----------|
| US-01 | As a student, I want to create a task with a title and deadline, so that I can record upcoming coursework in one place. | Must |
| US-02 | As a student, I want to assign a priority level (Low, Medium, High) to each task, so that I can focus on the most urgent work first. | Must |
| US-03 | As a student, I want to tag each task with a module name, so that I can organise my workload by subject. | Must |
| US-04 | As a student, I want to mark a task as complete, so that I can track my progress and see what I've finished. | Must |
| US-05 | As a student, I want to view all my tasks for today, so that I can see what needs my attention right now. | Must |
| US-06 | As a student, I want to edit an existing task, so that I can update details if a deadline or priority changes. | Must |
| US-07 | As a student, I want to delete a task, so that I can remove items that are no longer relevant. | Must |

### Should Have

| ID | User Story | Priority |
|----|-----------|----------|
| US-08 | As a student, I want to view my tasks for the current week, so that I can plan ahead and manage my time across multiple days. | Should |
| US-09 | As a student, I want to receive a reminder notification before a deadline, so that I don't forget about upcoming submissions. | Should |
| US-10 | As a student, I want to filter my task list by module, so that I can focus on one subject at a time when studying. | Should |
| US-11 | As a student, I want to filter my task list by priority level, so that I can quickly find my most urgent tasks. | Should |

### Could Have

| ID | User Story | Priority |
|----|-----------|----------|
| US-12 | As a student, I want to see a progress summary (e.g. tasks completed vs. remaining), so that I feel motivated and can gauge how much work is left. | Could |
| US-13 | As a student, I want to sort tasks by deadline or priority, so that I can view my workload in the order that suits me best. | Could |
| US-14 | As a student, I want my tasks to be saved when I close the browser, so that I don't lose my data between sessions. | Could |
| US-15 | As a student, I want a colour-coded visual indicator for priority levels, so that I can scan my task list quickly at a glance. | Could |

### Won't Have (This Version)

| ID | User Story | Priority |
|----|-----------|----------|
| US-16 | As a student, I want to sync my tasks across multiple devices, so that I can access them from my phone and laptop. | Won't |
| US-17 | As a student, I want to share tasks or deadlines with classmates, so that we can coordinate on group work. | Won't |
| US-18 | As a student, I want to import deadlines from my university timetable automatically, so that I don't have to enter them manually. | Won't |

---

## System Requirements

System requirements define what the application must do technically to support the user stories above.

### Functional System Requirements

| ID | Requirement | Related User Stories |
|----|------------|---------------------|
| SR-01 | The system shall allow the user to create, read, update, and delete (CRUD) tasks. Each task must store: title (text), deadline (date), priority level (Low/Medium/High), module name (text), and completion status (boolean). | US-01, US-02, US-03, US-04, US-06, US-07 |
| SR-02 | The system shall display tasks in a daily view, showing only tasks with deadlines matching the current date. | US-05 |
| SR-03 | The system shall display tasks in a weekly view, showing tasks with deadlines falling within the current Monday–Sunday period. | US-08 |
| SR-04 | The system shall allow the user to filter tasks by module name and/or priority level. | US-10, US-11 |
| SR-05 | The system shall provide visual distinction between priority levels using colour coding (e.g. green for Low, amber for Medium, red for High). | US-15 |
| SR-06 | The system shall trigger a browser notification or on-screen alert before a task's deadline (e.g. 24 hours or 1 hour before). | US-09 |
| SR-07 | The system shall persist task data using browser localStorage, so that data is retained between sessions without requiring a backend server. | US-14 |
| SR-08 | The system shall display a progress summary showing the number of tasks completed and tasks remaining. | US-12 |

### Non-Functional System Requirements

| ID | Requirement | Category |
|----|------------|----------|
| NFR-01 | The application shall be built using HTML, CSS, and JavaScript with no backend server required. | Technology |
| NFR-02 | The application shall be responsive and optimised for mobile screen sizes (360px–428px width) as the primary viewport, while remaining usable on desktop. | Usability |
| NFR-03 | The application shall load within 3 seconds on a standard mobile connection. | Performance |
| NFR-04 | The user interface shall follow a minimalist design with a calm colour palette (blues and neutrals) to reduce cognitive load. | Usability |
| NFR-05 | The application shall use clear, legible typography with a minimum font size of 16px for body text to ensure readability on small screens. | Accessibility |
| NFR-06 | All interactive elements (buttons, inputs) shall have a minimum tap target size of 44×44px to meet mobile accessibility standards. | Accessibility |
| NFR-07 | The system shall validate user input (e.g. prevent empty task titles, ensure deadlines are not in the past) and display clear error messages. | Robustness |






# StudyFlow - Product Backlog

## Sprint Overview

| Sprint | Duration | Focus | Goal |
|--------|----------|-------|------|
| Sprint 1 | Week 1 (10–16 Mar) | Core functionality | Deliver a working task manager with full CRUD operations, priority levels, module tagging, and daily view. The app should be usable end-to-end by the end of this sprint. |
| Sprint 2 | Week 2 (17–20 Mar) | Enhancements, polish & testing | Add weekly view, filtering, localStorage persistence, reminders, progress summary, and visual polish. Complete all testing and finalise documentation. |

**Estimation Scale (Story Points):**
- 1 = Trivial (under 1 hour, e.g. small UI tweak)
- 2 = Small (1–2 hours, e.g. a simple feature)
- 3 = Medium (2–4 hours, e.g. a feature with some logic)
- 5 = Large (4–8 hours, e.g. a complex feature with multiple parts)
- 8 = Complex (8+ hours, e.g. a major feature requiring research and iteration)

---

## Sprint 1 — Core Functionality

### BL-01: Project setup and HTML structure
- **Related Stories:** NFR-01, NFR-08
- **Description:** Set up the project folder structure with separate HTML, CSS, and JS files. Create the base HTML page with semantic structure including a header, main content area, task list container, and a form/modal area for adding tasks.
- **Acceptance Criteria:**
  - [ ] Project contains index.html, style.css, and app.js as separate files
  - [ ] HTML uses semantic elements (header, main, section, form)
  - [ ] Page loads in a browser without errors
  - [ ] Basic layout structure is visible (header, content area, empty task list)
- **Story Points:** 2
- **Sprint:** 1

---

### BL-02: Task creation form
- **Related Stories:** US-01, US-02, US-03, SR-01
- **Description:** Build a form that allows the user to create a new task by entering a title, selecting a deadline (date picker), choosing a priority level (Low/Medium/High), and entering a module name. On submission, the task should be added to the task list displayed on the page.
- **Acceptance Criteria:**
  - [ ] Form includes fields for: title (text input), deadline (date input), priority (dropdown with Low/Medium/High), and module name (text input)
  - [ ] Clicking "Add Task" creates a new task and displays it in the task list
  - [ ] The form clears after successful submission
  - [ ] Each task is stored as a JavaScript object with properties: id, title, deadline, priority, module, and completed (default: false)
- **Story Points:** 3
- **Sprint:** 1

---

### BL-03: Input validation
- **Related Stories:** NFR-07
- **Description:** Add validation to the task creation form to prevent invalid or incomplete data from being submitted. Display clear, user-friendly error messages when validation fails.
- **Acceptance Criteria:**
  - [ ] The form does not submit if the title field is empty
  - [ ] The form does not submit if no deadline is selected
  - [ ] The form does not accept a deadline date in the past
  - [ ] An error message is displayed next to or below the relevant field when validation fails
  - [ ] Error messages disappear once the user corrects the input
- **Story Points:** 2
- **Sprint:** 1

---

### BL-04: Task list display
- **Related Stories:** US-05, SR-02, SR-05
- **Description:** Display all tasks in a list/card layout. Each task card should show the title, deadline, module name, and priority level. Priority should be visually distinguished using colour coding (e.g. green for Low, amber for Medium, red for High).
- **Acceptance Criteria:**
  - [ ] All tasks currently in the array are rendered on the page
  - [ ] Each task card displays: title, deadline (formatted as a readable date), module name, and priority level
  - [ ] Priority levels are colour-coded: green (Low), amber/orange (Medium), red (High)
  - [ ] Completed tasks are visually distinct (e.g. strikethrough text or faded appearance)
  - [ ] The task list updates immediately when a new task is added
- **Story Points:** 3
- **Sprint:** 1

---

### BL-05: Mark task as complete
- **Related Stories:** US-04, SR-01
- **Description:** Add a checkbox or button to each task card that allows the user to toggle the task's completion status. The visual appearance of the task should change to reflect whether it is complete or incomplete.
- **Acceptance Criteria:**
  - [ ] Each task has a clickable checkbox or "Complete" button
  - [ ] Clicking the checkbox toggles the task's completed status (true/false)
  - [ ] Completed tasks show a visual change (e.g. strikethrough, greyed out, or moved to a "Completed" section)
  - [ ] The user can un-complete a task by clicking the checkbox again
- **Story Points:** 2
- **Sprint:** 1

---

### BL-06: Edit task
- **Related Stories:** US-06, SR-01
- **Description:** Allow the user to edit an existing task's details (title, deadline, priority, module). This could be implemented as an inline edit, a pre-filled form, or a modal that opens with the task's current values.
- **Acceptance Criteria:**
  - [ ] Each task has an "Edit" button
  - [ ] Clicking "Edit" opens the task's details in an editable form pre-filled with current values
  - [ ] The user can change any field (title, deadline, priority, module) and save
  - [ ] The updated task is immediately reflected in the task list
  - [ ] Cancelling an edit does not change the task
- **Story Points:** 3
- **Sprint:** 1

---

### BL-07: Delete task
- **Related Stories:** US-07, SR-01
- **Description:** Allow the user to delete a task from the list. Include a confirmation step to prevent accidental deletion.
- **Acceptance Criteria:**
  - [ ] Each task has a "Delete" button
  - [ ] Clicking "Delete" shows a confirmation prompt (e.g. "Are you sure?")
  - [ ] Confirming the prompt removes the task from the list and from the data array
  - [ ] The task list re-renders immediately after deletion
  - [ ] Cancelling the prompt keeps the task unchanged
- **Story Points:** 2
- **Sprint:** 1

---

### BL-08: Mobile-first responsive CSS
- **Related Stories:** NFR-02, NFR-04, NFR-05, NFR-06
- **Description:** Style the application with a mobile-first approach. Use a calm blue/neutral colour palette, ensure minimum font sizes and tap target sizes are met, and add media queries for larger screens.
- **Acceptance Criteria:**
  - [ ] The layout is designed for mobile viewports (360–428px) first
  - [ ] Body text is a minimum of 16px
  - [ ] All buttons and interactive elements have a minimum tap target of 44×44px
  - [ ] Colour palette uses blues and neutrals as defined in the pitch
  - [ ] A media query adjusts the layout for desktop screens (768px+)
  - [ ] No horizontal scrolling on mobile viewports
- **Story Points:** 5
- **Sprint:** 1

---

**Sprint 1 Total: 22 story points**

---

## Sprint 2 — Enhancements, Polish & Testing

### BL-09: Daily view filter
- **Related Stories:** US-05, SR-02
- **Description:** Implement a "Today" view that filters the task list to only show tasks with a deadline matching the current date. This should be a selectable view mode (e.g. a tab or toggle button).
- **Acceptance Criteria:**
  - [ ] A "Today" button/tab is visible in the navigation or header
  - [ ] Clicking "Today" filters the task list to show only tasks due today
  - [ ] If no tasks are due today, a message is displayed (e.g. "No tasks due today")
  - [ ] The user can switch back to the full "All Tasks" view
- **Story Points:** 3
- **Sprint:** 2

---

### BL-10: Weekly view
- **Related Stories:** US-08, SR-03
- **Description:** Implement a "This Week" view that shows all tasks with deadlines falling within the current Monday–Sunday period. Tasks should be displayed in chronological order.
- **Acceptance Criteria:**
  - [ ] A "This Week" button/tab is visible in the navigation
  - [ ] Clicking "This Week" filters to tasks due within the current Monday–Sunday
  - [ ] Tasks in the weekly view are sorted by deadline (earliest first)
  - [ ] If no tasks are due this week, a message is displayed
- **Story Points:** 3
- **Sprint:** 2

---

### BL-11: Filter by module and priority
- **Related Stories:** US-10, US-11, SR-04
- **Description:** Add dropdown filters that allow the user to filter the task list by module name and/or priority level. Filters should work in combination (e.g. show only "High" priority tasks for "Software Development 2").
- **Acceptance Criteria:**
  - [ ] A module filter dropdown is populated dynamically from existing task modules
  - [ ] A priority filter dropdown offers: All, Low, Medium, High
  - [ ] Selecting a filter immediately updates the displayed task list
  - [ ] Both filters can be applied simultaneously
  - [ ] An "All" or "Clear filters" option resets the view
- **Story Points:** 3
- **Sprint:** 2

---

### BL-12: Sort tasks by deadline or priority
- **Related Stories:** US-13
- **Description:** Allow the user to sort the displayed task list by deadline (nearest first) or by priority (High → Medium → Low).
- **Acceptance Criteria:**
  - [ ] A sort control is available (e.g. dropdown: "Sort by Deadline" / "Sort by Priority")
  - [ ] Sorting by deadline orders tasks from soonest to latest
  - [ ] Sorting by priority orders tasks High → Medium → Low
  - [ ] Sorting is applied immediately on selection
- **Story Points:** 2
- **Sprint:** 2

---

### BL-13: localStorage persistence
- **Related Stories:** US-14, SR-07
- **Description:** Save the task array to the browser's localStorage whenever a task is added, edited, deleted, or marked as complete. On page load, retrieve and display any previously saved tasks.
- **Acceptance Criteria:**
  - [ ] Tasks are saved to localStorage after every change (add, edit, delete, complete)
  - [ ] On page load, the app reads from localStorage and displays saved tasks
  - [ ] If localStorage is empty (first visit), the app starts with an empty task list
  - [ ] Data persists after closing and reopening the browser tab
- **Story Points:** 3
- **Sprint:** 2

---

### BL-14: Reminder notifications
- **Related Stories:** US-09, SR-06
- **Description:** Implement a notification system that alerts the user when a task's deadline is approaching. Use the browser Notification API (with permission request) or an in-app alert/banner as a fallback.
- **Acceptance Criteria:**
  - [ ] The app checks for upcoming deadlines at regular intervals (e.g. every minute)
  - [ ] A notification or on-screen alert is triggered when a task is due within 24 hours
  - [ ] The notification displays the task title and deadline
  - [ ] If browser notifications are denied, a visible in-app banner is shown instead
  - [ ] Each task only triggers one reminder (no repeated alerts for the same task)
- **Story Points:** 5
- **Sprint:** 2

---

### BL-15: Progress summary
- **Related Stories:** US-12, SR-08
- **Description:** Display a summary section (e.g. at the top of the dashboard) showing how many tasks are completed vs. remaining. Optionally include a simple progress bar.
- **Acceptance Criteria:**
  - [ ] A summary section displays: "X of Y tasks completed"
  - [ ] The summary updates dynamically when tasks are completed or added
  - [ ] A visual progress bar or percentage indicator is shown
  - [ ] If there are no tasks, the summary displays an appropriate message
- **Story Points:** 2
- **Sprint:** 2

---

### BL-16: Final testing and bug fixes
- **Related Stories:** All
- **Description:** Perform a complete round of testing against all acceptance criteria above. Document test results in a test log. Fix any bugs discovered during testing.
- **Acceptance Criteria:**
  - [ ] Every backlog item's acceptance criteria has been tested and documented
  - [ ] All critical and high-priority bugs are resolved
  - [ ] The app works without JavaScript errors in the browser console
  - [ ] The app has been tested on at least one mobile browser and one desktop browser
- **Story Points:** 5
- **Sprint:** 2

---

**Sprint 2 Total: 26 story points**

---

## Backlog Summary

| Sprint | Items | Total Story Points | Focus |
|--------|-------|--------------------|-------|
| Sprint 1 | BL-01 to BL-08 | 22 | Core CRUD, UI, mobile-first styling |
| Sprint 2 | BL-09 to BL-16 | 26 | Views, filters, persistence, notifications, testing |
| **Total** | **16 items** | **48** | |

### Prioritisation Rationale

Sprint 1 focuses entirely on the "Must Have" features that form the minimum viable product. Without task creation, display, editing, deletion, and completion tracking, the app cannot function at all. Mobile-first styling is also included in Sprint 1 because the pitch defines StudyFlow as a mobile-first application, so the UI must reflect this from the start.

Sprint 2 builds on the working core by adding features that improve usability and user experience: views and filters help students navigate their tasks more efficiently, localStorage ensures data is not lost between sessions, and reminders address the core problem identified in the pitch — missed deadlines. Final testing is scheduled at the end of Sprint 2 to ensure the complete product meets all requirements before the demo.
| NFR-08 | The codebase shall be modular, with separate files or clearly separated sections for HTML structure, CSS styling, and JavaScript logic. | Maintainability |
