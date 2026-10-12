function checkDivision(divisor1, divisor2) {
  if (divisor1 % divisor2 === 0) {
    return true;
  } else {
    return false;
  }
}

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
    document.getElementById("start-message").textContent = `How high would you like to count, ${firstName}, what are your divisors, and what words would you like to use?`;
  } else {
    document.getElementById("start-message").textContent = `How high would you like to count, what are your divisors, and what words would you like to use?`;
  }

  const count = this.addEventListener("submit", function (event) {
    event.preventDefault();
    const countInput = document.getElementById("count");
    const countValue = parseInt(countInput.value.trim());

    const word0Input = document.getElementById("word0");
    const word0Value = word0Input.value.trim();

    const divisor1Input = document.getElementById("divisor1");
    const divisor1Value = parseInt(divisor1Input.value.trim());

    const word1Input = document.getElementById("word1");
    const word1Value = word1Input.value.trim();

    const divisor2Input = document.getElementById("divisor2");
    const divisor2Value = parseInt(divisor2Input.value.trim());

    const word2Input = document.getElementById("word2");
    const word2Value = word2Input.value.trim();

    const divisor3Input = document.getElementById("divisor3");
    const divisor3Value = parseInt(divisor3Input.value.trim());

    const word3Input = document.getElementById("word3");
    const word3Value = word3Input.value.trim();

    document.getElementById("number-entry").style.display = "none";
    document.getElementById("results").style.display = "block";

    document.getElementById("results-message").textContent = `Counting to ${countValue}...`;

    for (let i = 1; i <= countValue; i++) {
      let output = `${i}. `;
      if (checkDivision(i, divisor1Value)) {
        output += `${word1Value} `;
      }
      if (checkDivision(i, divisor2Value)) {
        output += `${word2Value} `;
      }
      if (checkDivision(i, divisor3Value)) {
        output += `${word3Value} `;
      }
      if (!checkDivision(i, divisor1Value) && !checkDivision(i, divisor2Value) && !checkDivision(i, divisor3Value)) {
        output += `${word0Value} `;
      }
      output = output.trim(); // Remove any trailing space
      document.getElementById("output").innerHTML += `<p>${output}</p>`;
    }
  });

  const reset = document.getElementById("reset");

  reset.addEventListener("click", function () {
    location.reload();
  });
});

