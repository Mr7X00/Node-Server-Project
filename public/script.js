const heading = document.getElementById("heading");
const button = document.getElementById("myButton");

if (heading && button) {
    button.addEventListener("click", () => {
        heading.textContent = "JavaScript Connected Successfully!";
        heading.style.color = "green";
    });
}
