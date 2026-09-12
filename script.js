const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("visitorName");
const greetOutput = document.getElementById("greetOutput");

function buildGreeting(rawName) {
  const trimmedName = rawName.trim();
  let message;

  if (trimmedName === "") {
    message = "Type a name above and I'll say hello!";
  } else {
    message = `Hi ${trimmedName}, thanks for visiting my page!`;
  }

  return message;
}

function updateGreeting() {
  const greeting = buildGreeting(nameInput.value);
  greetOutput.textContent = greeting;
  greetOutput.classList.add("active");
}

greetBtn.addEventListener("click", function () {
  updateGreeting();
});

nameInput.addEventListener("input", function () {
  updateGreeting();
});

nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    greetBtn.click();
  }
});

const contactForm = document.querySelector(".contact-form");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();

  if (fullName === "") {
    formNote.textContent = "Please enter your full name.";
  } else {
    formNote.textContent = `Thanks, ${fullName} — your message has been noted.`;
    formNote.classList.add("active");
  }
});
