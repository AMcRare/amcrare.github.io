const welcomeButton = document.querySelector("#welcomeButton");
const message = document.querySelector("#message");

welcomeButton.addEventListener("click", function () {
    message.textContent = "Hello to you as well!";
});