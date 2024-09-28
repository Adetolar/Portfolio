// const form = document.getElementById("form");
// const Name = document.getElementById("name");
// const Email = document.getElementById("email");
// const MessageInput = document.getElementById('ClientMessage');
// const errorMessages = Array.from(document.querySelectorAll(".error"));

// // Regular Expressions for Validation
// const namePattern = /^[A-Z ]+$/; // Only capital letters and spaces
// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email format
// const messagePattern =/^[a-zA-Z0-9\s]*$/;

// form.addEventListener("submit", (e) => {
//     let isValid = true;
//   if (!namePattern.test(Name)) {
//     errorMessages[0].textContent = 'Sorry, invalid format here';
//     // isValid = false;
//   }

//   else if (!emailPattern.test(Email)) {
//     errorMessages[1].textContent = 'Sorry, invalid format here';
//     // isValid = false;
//   }

//   else if (!messagePattern.test(MessageInput)) {
//     errorMessages[2].textContent = 'Sorry, invalid format here';
//     // isValid = false;
//   }

//   // Prevent form submission only if there are validation errors
// //   if (!isValid) {
//     e.preventDefault();
// //   }
// });

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
