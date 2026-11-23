const secondaryStylesheet = document.getElementById('secondary-stylesheet');

const mainContent = document.getElementById('main-content');

window.addEventListener('DOMContentLoaded', async() => {
  document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Home";
  const response = await fetch('components/index.html');
  const newHtml = await response.text();
  mainContent.innerHTML = newHtml;
  secondaryStylesheet.setAttribute('href', '');
});

const updatePageTitle = (destination) => {
  switch(destination) {
    case 'components/index.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Home";
      break;
    case 'components/introduction.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Introduction";
      break;
    case 'components/about.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; About";
      break;
    case 'components/contract.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Contract";
      break;
    case 'components/brandboard.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Brand Board";
      break;
    case 'components/fccfsjs.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; FCC JS Outline";
      break;
    case 'components/intro_form.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Introduction Form";
      break;
    case 'components/fizzbuzz0.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Fizz Buzz 0";
      break;
    case 'components/fizzbuzz1.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Fizz Buzz 1";
      break;
    case 'components/fizzbuzz2.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Fizz Buzz 2";
      break;
    case 'components/fizzbuzz3.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Fizz Buzz 3";
      break;
    case 'components/fizzbuzz4.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Fizz Buzz 4";
      break;
    default:
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat &#10051; WEB115 &#10051; Home";
  }
};

const updateSecondaryStylesheet = (destination) => {
  switch(destination) {
    case 'components/brandboard.html':
      secondaryStylesheet.setAttribute('href', 'styles/brandStyles.css');
      break;
    case 'components/intro_form.html':
      secondaryStylesheet.setAttribute('href', 'styles/formStyles.css');
      break;
    case 'components/fizzbuzz0.html':
    case 'components/fizzbuzz1.html':
    case 'components/fizzbuzz2.html':
    case 'components/fizzbuzz3.html':
    case 'components/fizzbuzz4.html':
      secondaryStylesheet.setAttribute('href', 'styles/fizzbuzzStyles.css');
      break;
    case 'components/fccfsjs.html':
      secondaryStylesheet.setAttribute('href', 'styles/fccjsStyles.css');
      break;
    default:
      secondaryStylesheet.setAttribute('href', '');
  }
};

const handleNavigation = async (event) => {
  event.preventDefault();
  const destination = event.currentTarget.getAttribute('data-destination');
  const response = await fetch(destination);
  const newHtml = await response.text();
  mainContent.innerHTML = newHtml;
  updatePageTitle(destination);
  updateSecondaryStylesheet(destination);
}

document.querySelectorAll('nav [role="button"]').forEach(link => {
  link.addEventListener('click', handleNavigation);
});
