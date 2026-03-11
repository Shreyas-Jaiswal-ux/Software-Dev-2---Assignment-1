# StudyFlow — User & System Requirements

## User Requirements (User Stories)

User stories are prioritised using the **MoSCoW method**:

- **Must Have (M)** — Essential for the app to function; without these, the product has no value.
- **Should Have (S)** — Important features that add significant value but aren't critical for launch.
- **Could Have (C)** — Nice-to-have features that improve the experience but can be deferred.
- **Won't Have (W)** — Out of scope for this version but considered for future development.

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
| NFR-08 | The codebase shall be modular, with separate files or clearly separated sections for HTML structure, CSS styling, and JavaScript logic. | Maintainability |
