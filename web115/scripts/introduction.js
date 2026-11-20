const form = document.getElementById('intro-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const dividerInput = document.getElementById('divider');
const nicknameAdjectiveInput = document.getElementById('nickname-adj');
const nicknameAnimalInput = document.getElementById('nickname-animal');
const imageInput = document.getElementById('image');
const imageAltInput = document.getElementById('image-alt');
const captionInput = document.getElementById('image-caption');
const bioInput = document.getElementById('bio');
const personalBackgroundInput = document.getElementById('personal-background');
const professionalBackgroundInput = document.getElementById('professional-background');
const academicBackgroundInput = document.getElementById('academic-background');
const primaryComputerInput = document.getElementById('primary-computer');
const primaryLocationInput = document.getElementById('primary-location');
const alternateComputerInput = document.getElementById('alternate-computer');
const codeInput = document.getElementById('itemCode');
const itemInput = document.getElementById('itemInput');
const reasonInput = document.getElementById('reasonInput');
const itemList = document.getElementById('itemList');
const itemsHidden = document.getElementById('itemsHidden');
const quoteInput = document.getElementById('quote');
const authorInput = document.getElementById('author');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const output = document.getElementById('formOutput');
const tryAgain = document.getElementById('tryAgain');
const resetAfterButton = document.getElementById('resetAfterButton');
let items = [];

function verifyNickname() {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  if (firstName === "" || lastName === "") {
    alert("Please fill in both first and last name fields.");
    return false;
  }
  const nicknameAdj = nicknameAdjectiveInput.value.trim();
  const nicknameAnimal = nicknameAnimalInput.value.trim();
  if (nicknameAdj === "" || nicknameAnimal === "") {
    alert("Please fill in both nickname fields.");
    return false;
  }
  if (nicknameAdj.toLowerCase() === firstName.toLowerCase() || nicknameAdj.toLowerCase() === lastName.toLowerCase()) {
    alert("Nickname adjective cannot be the same as your first or last name.");
    return false;
  }
  if (nicknameAnimal.toLowerCase() === firstName.toLowerCase() || nicknameAnimal.toLowerCase() === lastName.toLowerCase()) {
    alert("Nickname animal cannot be the same as your first or last name.");
    return false;
  }
  if (nicknameAdj.toLowerCase()[0] !== firstName.toLowerCase()[0]) {
    alert("Nickname adjective must start with the same letter as your first name.");
    return false;
  }
  if (nicknameAnimal.toLowerCase()[0] !== lastName.toLowerCase()[0]) {
    alert("Nickname animal must start with the same letter as your last name.");
    return false;
  }
  return true;
}

document.getElementById('nickname-adj').addEventListener('change', verifyNickname);
document.getElementById('nickname-animal').addEventListener('change', verifyNickname);

document.getElementById('image').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    // Reset to default if no file selected
    document.getElementById('preview').src = "./images/angela-headshot-square.jpg";
  }
});

function loadImage(e) {
  const [imageInputFromEvent] = Object.values(e.target).filter((el) => el.id === 'image');
  const file = imageInputFromEvent?.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    console.log("url", url);
    imageInput.src = url;
  } else {
    // Reset to default if no file selected
    imageInput.src = "./images/angela-headshot.jpg";
  }
}

// Add course to list
function addItem() {
  const codeValue = codeInput.value.trim();
  const itemValue = itemInput.value.trim();
  const reasonValue = reasonInput.value.trim();
  if (codeValue === "" || itemValue === "" || reasonValue === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Add to array
  const itemObj = { codeValue, itemValue, reasonValue };
  items.push(itemObj);

  // Update visible list
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.classList.add("flex");
  span.className = "item-text";
  span.textContent = `${codeValue} - ${itemValue}: ${reasonValue}`;

  // Add remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove (-)";
  removeBtn.type = "button";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => {
    items = items.filter(i => !(i.codeValue === codeValue && i.itemValue === itemValue && i.reasonValue === reasonValue));
    itemList.removeChild(li);
    updateHiddenInput();
  };
  li.appendChild(span);
  li.appendChild(removeBtn);

  itemList.appendChild(li);

  // Update hidden input for form submission
  updateHiddenInput();

  // Clear input
  codeInput.value = "";
  itemInput.value = "";
  reasonInput.value = "";
}

// Update hidden input with comma-separated items
function updateHiddenInput() {
  itemsHidden.value = JSON.stringify(items);
}


form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  form.style.display = 'none'; // Hide the form
  loadImage(event);
  const name = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
  const nickname = `${nicknameAdjectiveInput.value.trim()} ${nicknameAnimalInput.value.trim()}`;
  const quoteTrim = quoteInput.value.trim().replace(/^['"]+|['"]+$/g, '');;
  
  // Display form data in the output div
  output.innerHTML = `
    <h6>${name} <span class="flower">${dividerInput.value}</span> ${nickname}</h6>

      <figure>
        <img src="${imageInput.src}" alt="${imageAltInput.value.trim()}">
        <figcaption>${captionInput.value.trim()}</figcaption>
      </figure>
    <p>${bioInput.value.trim()}</p>

      <ul>
        <li><strong>Personal Background:</strong> ${personalBackgroundInput.value.trim()}</li>
        <li><strong>Professional Background:</strong> ${professionalBackgroundInput.value.trim()}</li>
        <li><strong>Academic Background:</strong> ${academicBackgroundInput.value.trim()}</li>
        <li><strong>Primary Work Computer (Type, OS, and Version):</strong> ${primaryComputerInput.value.trim()}</li>
        <li><strong>Primary Work Location:</strong> ${primaryLocationInput.value.trim()}</li>
        <li><strong>Alternate Computer & Location:</strong> ${alternateComputerInput.value.trim()}</li>
        <li><strong>Courses I'm Taking & Why:</strong>
          <ol>
          ${items.map((item) => `<li><strong>${item.codeValue} - ${item.itemValue}:</strong> ${item.reasonValue}</li>`).join('')}       
          </ol>
        </li>
      </ul>
      <blockquote>
        <p>"${quoteTrim}"</p>
        <p><cite>- ${authorInput.value.trim()}</cite></p>
      </blockquote>
  `;
  output.style.display = 'block';
  tryAgain.style.display = 'block';
});

resetButton.addEventListener('click', function() {
  items = [];
  itemList.innerHTML = '';
  document.getElementById('preview').src = "./images/angela-headshot-square.jpg";
});

resetAfterButton.addEventListener('click', function() {
  form.reset();
  items = [];
  itemList.innerHTML = '';
  document.getElementById('preview').src = "./images/angela-headshot-square.jpg";
  output.style.display = 'none';
  tryAgain.style.display = 'none';
  form.style.display = 'block';
});