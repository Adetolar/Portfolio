document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  // Select input fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("ClientMessage");

  // Select error messages (assuming they are in the correct order)
  const errorMessages = document.querySelectorAll(".error");

  // Define validation patterns for each field
  const namePattern = /^[A-Za-z\s]{2,}$/; // Allows letters and spaces, minimum of 2 characters
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email pattern
  const messagePattern = /^.{20,}$/; // Minimum of 20 characters for the message

  // Attach event listener to the form
  form.addEventListener("submit", function (e) {
    let isValid = true;

    // Validate Name
    if (!namePattern.test(nameInput.value)) {
      errorMessages[0].textContent = "Sorry, invalid format here";
      isValid = false;
    } else {
      errorMessages[0].textContent = ""; // Clear error message if valid
    }

    // Validate Email
    if (!emailPattern.test(emailInput.value)) {
      errorMessages[1].textContent = "Sorry, invalid format here";
      isValid = false;
    } else {
      errorMessages[1].textContent = ""; // Clear error message if valid
    }

    // Validate Message
    if (!messagePattern.test(messageInput.value)) {
      errorMessages[2].textContent = "Sorry, invalid format here";
      isValid = false;
    } else {
      errorMessages[2].textContent = ""; // Clear error message if valid
    }

    // Prevent form submission if any field is invalid
    if (!isValid) {
      e.preventDefault();
    }
  });
});

// Explanation of the Code
// HTML Element Selection:

// Use document.getElementById to select each form input (name, email, and ClientMessage).
// Use document.querySelectorAll('.error') to select all <p class="error"></p> elements. These are assumed to be in the correct order relative to the input fields.
// Regex Patterns for Validation:

// namePattern: Allows letters and spaces, with a minimum length of 2 characters.
// javascript
// Copy code
// const namePattern = /^[A-Za-z\s]{2,}$/;
// emailPattern: Standard email format pattern that ensures the presence of @ and a valid domain.
// javascript
// Copy code
// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// messagePattern: Requires at least 20 characters for the message content.
// javascript
// Copy code
// const messagePattern = /^.{20,}$/;
// Validation Logic on Form Submission:

// Attach an event listener to the submit event of the form.
// Check each input value against its corresponding pattern.
// If any value does not match the pattern, set the error message to "Sorry, invalid format here".
// If all values are valid, clear the error message for that field.
// Prevent Form Submission if Any Field is Invalid:

// If the isValid flag is set to false, call e.preventDefault() to stop the form from submitting.
