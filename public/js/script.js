
const heading = document.getElementById("heading");
const button = document.getElementById("myButton");

if (heading && button) {
    button.addEventListener("click", () => {
        heading.textContent = "JavaScript Connected Successfully!";
        heading.style.color = "#16a34a";
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const formMessage = document.getElementById("formMessage");

        formMessage.textContent = `Thank you, ${name}! Your form has been validated successfully.`;

        contactForm.reset();
    });
}
