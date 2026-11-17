const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const dividerInput = document.getElementById('divider');
const nicknameInput = document.getElementById('nickname');
const imageInput = document.getElementById('image');
const captionInput = document.getElementById('image-caption');
const bioInput = document.getElementById('bio');
const personalBackgroundInput = document.getElementById('personal-background');
const professionalBackgroundInput = document.getElementById('professional-background');
const academicBackgroundInput = document.getElementById('academic-background');
const primaryComputerInput = document.getElementById('primary-computer');
const primaryLocationInput = document.getElementById('primary-location');
const alternateComputerInput = document.getElementById('alternate-computer');
const itemInput = document.getElementById('itemInput');
const reasonInput = document.getElementById('reasonInput');
const itemList = document.getElementById('itemList');
const itemsHidden = document.getElementById('itemsHidden');
const quoteInput = document.getElementById('quote');
const authorInput = document.getElementById('author');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
let items = [];

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

// Add course to list
function addItem() {
  const itemValue = itemInput.value.trim();
  const reasonValue = reasonInput.value.trim();
  if (itemValue === "") {
    alert("Please enter a course name.");
    return;
  }
  if (reasonValue === "") {
    alert("Please enter a reason.");
    return;
  }
  
  // Add to array
  const itemObj = { itemValue, reasonValue };
  items.push(itemObj);

  // Update visible list
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = "item-text";
  span.textContent = `${itemValue}: ${reasonValue}`;

  // Add remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove (-)";
  removeBtn.type = "button";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => {
    items = items.filter(i => !(i.itemValue === itemValue && i.reasonValue === reasonValue));
    itemList.removeChild(li);
    updateHiddenInput();
  };
  li.appendChild(span);
  li.appendChild(removeBtn);

  itemList.appendChild(li);

  // Update hidden input for form submission
  updateHiddenInput();

  // Clear input
  itemInput.value = "";
  reasonInput.value = "";
}

// Update hidden input with comma-separated items
function updateHiddenInput() {
  itemsHidden.value = JSON.stringify(items);
}

