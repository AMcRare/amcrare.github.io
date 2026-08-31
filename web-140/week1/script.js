let score = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("correct")) {
      score++;
      button.disabled = true; 
      alert("Correct!");
    }
    else if (button.classList.contains("incorrect")) {
      button.disabled = true;
      alert("Incorrect! Try Again.");
    }
  });
});



const scoreButton = document.getElementById("score");
scoreButton.addEventListener("click", () => {
  alert("Your score is: ${score} out of 5");
});
