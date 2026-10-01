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
  
  const countValue = 140;
  document.getElementById("results").style.display = "block";
  document.getElementById("results-message").textContent = `Counting to ${countValue}...`;

  for (let i = 1; i <= countValue; i++) {
    let output = `${i}. `;
    if (i % 3 === 0) {
      output += "McRoffizz ";
    }
    if (i % 5 === 0) {
      output += "McRoffbuzz ";
    } 
    if (i % 7 === 0) {
      output += "McRoffbang ";
    }
    output = output.trim(); // Remove any trailing space
    document.getElementById("output").innerHTML += `<p>${output}</p>`;
  }

  const reset = addEventListener("click", function () {
    location.reload();
  });
});
