# Exercise 2: List Registered Students with JavaScript

In this exercise, you will build functionality to display a list of registered students dynamically using JavaScript. This will help you practice working with arrays, DOM manipulation, and event handling in JavaScript.

---

### Instructions:

1. **Set Up Your HTML File:**
   - Build on the previous exercise
   - Include a separate script file that connects to html file with the `<script>` tag

2. **Design the Interface:**
   - Create a section to display the list of registered students dynamically.

3. **JavaScript Logic:**
   - Capture student details from the form using JavaScript.
   - Use an array to store the student objects.
   - Dynamically update the student list whenever a new student is added.
   - Allow resetting the list to clear all registered students.

---

### Example Output:

```html
<!-- Form to Add Students -->
<form id="student-form">
    <!-- FROM PREVIOUS EXERCISE -->

    <button type="submit">Add Student</button>
    <button type="button" id="reset-list">Reset List</button>
</form>

<!-- Section to Display Student List -->
<div class="student-list">
    <h2>Student List</h2>
    <ul id="students">
        <!-- List of students will be dynamically added here -->
    </ul>
</div>

<script src="script.js"></script>
```

```javascript
// JavaScript Code
const studentForm = document.getElementById('student-form');
const studentList = document.getElementById('students');
const resetButton = document.getElementById('reset-list');

let students = [];

// Function to render the student list
function renderStudentList() {
// Clear list
// Add student per student in array
// add delete student event to each student
}

// Function to add a new student
function addStudent(event) {
// prevent form submission
// add student to array
// reset the form
// render student list
}

// Function to delete a student
function deleteStudent(index) {
// splice the index of the array to remove the student
// re render the student list
}

// Function to reset the student list
function resetStudentList() {
// clear the array
// re render the student list
}

// Add event listeners
studentForm.addEventListener('submit', addStudent);
resetButton.addEventListener('click', resetStudentList);
```

---

### Exercise Goals:
1. **Form Handling:** Learn how to capture form input and process it in JavaScript.
2. **DOM Manipulation:** Practice creating and removing elements dynamically.
3. **Event Handling:** Understand how to attach and manage event listeners.
4. **Arrays and Objects:** Work with arrays to store and manage data.

---