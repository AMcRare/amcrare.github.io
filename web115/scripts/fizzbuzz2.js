const fullName = addEventListener("submit", function (event) {
  event.preventDefault();
  const firstNameInput = document.getElementById("first-name");
  const middleInitialInput = document.getElementById("middle-initial");
  const lastNameInput = document.getElementById("last-name");
  const firstName = firstNameInput.value.trim();
  const middleInitial = middleInitialInput.value.trim();
  const lastName = lastNameInput.value.trim();
  var fullName = "";
  if (firstName !== "") {
    fullName += firstName;
  }
  if (middleInitial !== "") {
    fullName += " " + middleInitial + ".";
  }
  if (lastName !== "") {
    fullName += " " + lastName;
  }

  if (fullName === "") {
    fullName = "My dear Guest";
  }

  document.getElementById("greeting").textContent = `Welcome to McRoffis Designs, ${fullName}!`;
  document.getElementById("name-entry").style.display = "none";
  document.getElementById("number-entry").style.display = "block";
  if (firstName !== "") {
    document.getElementById("start-message").textContent = `How high would you like to count, ${firstName}, and what are your two divisors?`;
  } else {
    document.getElementById("start-message").textContent = `How high would you like to count, and what are your two divisors?`;
  }

  const count = this.addEventListener("submit", function (event) {
    event.preventDefault();
    const countInput = document.getElementById("count");
    const countValue = parseInt(countInput.value.trim());

    const divisor1Input = document.getElementById("divisor1");
    const divisor1Value = parseInt(divisor1Input.value.trim());

    const divisor2Input = document.getElementById("divisor2");
    const divisor2Value = parseInt(divisor2Input.value.trim());

    document.getElementById("number-entry").style.display = "none";
    document.getElementById("results").style.display = "block";

    document.getElementById("results-message").textContent = `Counting to ${countValue}...`;

    for (let i = 1; i <= countValue; i++) {
    let output = "";
    if (i % divisor1Value === 0 && i % divisor2Value === 0) {
      output += `\n${i}. McRoffizz McRofbuzz`;
    } else if (i % divisor1Value === 0) {
      output += `\n${i}. McRoffizz`;
    } else if (i % divisor2Value === 0) {
      output += `\n${i}. McRofbuzz`;
    } else {
      output += `\n${i}.`;
    }
    document.getElementById("output").innerHTML += `<p>${output}</p>`;
  }

    const reset = addEventListener("click", function () {
      location.reload();
    });
  });
});
