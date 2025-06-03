const btn = document.querySelector(".btn");
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#input").value;
  const email = document.querySelector("#Email").value;
  const feedback = document.querySelector("#feedback").value;

  if (!name || !email || !feedback) {
    alert("Please fill all fields.");
    return;
  }

  if (name && email && feedback) {
    alert("Form submitted successfully");
    return;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  };

});