# Exercise 1: Creating a Student Registration using HTML

### Exercise: Build a Student Registration Form in HTML

In this exercise, you will create a **student registration form** using HTML. The form should include various input fields to capture essential student information. The goal is to practice creating forms with input validation, proper structure, and accessibility.

---

### Instructions:

1. **Set Up Your HTML Document:**
   - Create a new HTML file called `student_registration.html`.

2. **Design the Form Layout:**
   - Add a `<form>` element 
   - Use the `<fieldset>` and `<legend>` elements to group and label the form.

3. **Form Inputs:**
   Add the following input fields:
   
   **a. Student Information:**
   - **Full Name** (text input, required)
   - **Email Address** (email input, required)
   - **Phone Number** (tel input, required)
   - **Date of Birth** (date input)

   **b. Academic Details:**
   - **Select Program** (dropdown with options like "Computer Science," "Engineering," "Mathematics")
   - **Year of Study** (radio buttons for "First Year," "Second Year," "Third Year," "Fourth Year")
   - **Skills** (checkboxes for "Programming," "Data Analysis," "Design," "Communication")
   
4. **Submit Button:**
   - Add a `Submit` button to submit the form.

5. **Enhance Accessibility and Usability:**
   - Include `<label>` elements for each input for better accessibility.
   - Use placeholder text where necessary.
   - Group related inputs with `<fieldset>` for a logical structure.


### Example:

```html
<form>
    <fieldset>
        <legend>Student Information</legend>
        <label for="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required><br><br>
        
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>
        
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required><br><br>
        
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob"><br><br>
    </fieldset>

    <button type="submit">Submit</button>
</form>
```
---
