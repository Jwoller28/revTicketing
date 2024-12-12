# Exercise 3 - Typescript Student Management App

Student Management System: HTML + TypeScript + DOM Integration
This enhanced project will link the Student Management System to a web-based interface. You’ll use an HTML form to capture student input and display the registered students dynamically on the webpage using TypeScript and DOM manipulation.

## Step-by-Step Guide
1. Setup the Project

- Create a new project folder:

```bash
mkdir student-management-system
cd student-management-system
npm init -y
npm install typescript --save-dev
npm install lite-server --save-dev
npx tsc --init
```

- Update tsconfig.json to output JavaScript in a dist folder:

```json
"outDir": "./dist",
"rootDir": "./src",
```

- Create the following file structure:

```css
student-management-system/
├── src/
│   └── index.ts
├── index.html
├── style.css
└── dist/
```

- Add the following scripts to package.json:

```json
"scripts": {
    "start": "lite-server",
    "build": "tsc"
}
```

2. HTML Structure
- Use the student registration form you created in the previous exercises

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Student Management System</h1>

    <!-- Student Registration Form -->
    <form id="student-form">

    </form>

    <!-- Student List -->
    <h2>Registered Students</h2>

    <!-- Connecting scripts -->
    <script src="dist/index.js" defer></script>
</body>
</html>
```

3. TypeScript Logic
- In the src/index.ts file, implement the TypeScript code:

```typescript
// Enum for Student Roles
enum StudentRole {

}

// Interface for Student data
interface Student {

}

// Student Manager Class
class StudentManager {
    private students: Student[] = [];
    private nextId: number = 1;

    addStudent(student: Omit<Student, "id">): Student {
    }

    getStudents(): Student[] {
    }
}

// DOM Elements
const studentForm = document.getElementById("student-form") as HTMLFormElement;
const studentList = document.getElementById("student-list") as HTMLUListElement;

// Student Manager Instance
const manager = new StudentManager();

// Function to Render Students
function renderStudents() {
}

// Handle Form Submission
studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get Form Values

    // Add Student

    // Reset Form

    // Render Students
});

```
4. Add Basic Styling

5. Compile and Run
- Compile the TypeScript code:

```bash
npm run build
```

- Start the development server:

```bash
npm start
```

- Open http://localhost:3000 in your browser.
