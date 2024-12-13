// Get form elements
const studentForm = document.getElementById('student-form'); // The form
const studentList = document.getElementById('students'); // The list of students
const resetButton = document.getElementById('reset-list'); // The reset button

// Array to store student data
let students = [];

// **1. Function to render the student list**
function renderStudentList() {
    // Clear the list
    studentList.innerHTML = '';

    // Loop through the array of students and create list items
    students.forEach((student, index) => {
        const li = document.createElement('li'); // Create a new list item
        // Create the base info for each student (always include full name, email, phone number)
        let studentInfo = `Full Name: ${student.fullName}, Email: ${student.email}, Phone Number: ${student.phoneNumber}`;

        // Add the extra fields if they are filled
        if (student.dateOfBirth) studentInfo += `, Date of Birth: ${student.dateOfBirth}`;
        if (student.program && student.program !== 'none') studentInfo += `, Program: ${student.program}`;
        if (student.yearOfStudy && student.yearOfStudy !== 'Not Selected') studentInfo += `, Year: ${student.yearOfStudy}`;
        if (student.skills && student.skills.length > 0) studentInfo += `, Skills: ${student.skills.join(', ')}`;

        // Set the text content of the list item
        li.textContent = studentInfo + '\n';        
        // Add delete button for each student
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px'; 
        deleteButton.addEventListener('click', () => deleteStudent(index)); // Attach event listener
        li.appendChild(deleteButton); // Add delete button to the list item

        studentList.appendChild(li); // Add the list item to the student list
    });
}

// **2. Function to add a new student**
function addStudent(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get input values from the form
    const fullName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('pnumber').value;
    const dateOfBirth = document.getElementById('dob').value;
    const program = document.getElementById('program').value;
    
    // Get the year of study (only one radio button will be checked)
    const year = document.querySelector('input[name="year"]:checked');
    const yearOfStudy = year ? year.value : 'Not Selected';

    // Get all checked skills (use querySelectorAll for multiple checkboxes)
    const skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                        .map(skill => skill.value); 

    // Create a student object
    const student = {
        fullName,
        email,
        phoneNumber,
        dateOfBirth,
        program,
        yearOfStudy,
        skills
    };

    // Add student to the students array
    students.push(student);

    // Clear the form after submission
    studentForm.reset();

    // Update the list of students
    renderStudentList();
}

// **3. Function to delete a student from the list**
function deleteStudent(index) {
    students.splice(index, 1); // Remove the student from the array
    renderStudentList(); // Re-render the list
}

// **4. Function to reset the entire student list**
function resetStudentList() {
    students = []; // Clear the array
    renderStudentList(); // Clear the displayed list
}

// Add event listeners
studentForm.addEventListener('submit', addStudent); // When the form is submitted, add the student
resetButton.addEventListener('click', resetStudentList); // When the reset button is clicked, reset the list
