const brandStylesheet = document.getElementById('brand-stylesheet');
const fccjsStylesheet = document.getElementById('fccjs-stylesheet');
const formStylesheet = document.getElementById('form-stylesheet');
const fizzbuzzStylesheet = document.getElementById('fizzbuzz-stylesheet');

const mainContent = document.getElementById('main-content');

const updatePageTitle = (destination) => {
  switch (destination) {
    case 'components/index.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Home";
      break;
    case 'components/introduction.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Introduction";
      break;
    case 'components/about.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} About";
      break;
    case 'components/contract.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Contract";
      break;
    case 'components/brandboard.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Brand Board";
      break;
    case 'components/fccfsjs_outline.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} FCC Full Stack JavaScript Outline";
      break;
    case 'components/intro_form.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Introduction Form";
      break;
    case 'components/fizzbuzz0.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Fizz Buzz 0";
      break;
    case 'components/fizzbuzz1.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Fizz Buzz 1";
      break;
    case 'components/fizzbuzz2.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Fizz Buzz 2";
      break;
    case 'components/fizzbuzz3.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Fizz Buzz 3";
      break;
    case 'components/fizzbuzz4.html':
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Fizz Buzz 4";
      break;
    default:
      document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Home";
  }
};

const updateSecondaryStylesheet = (destination) => {
  switch (destination) {
    case 'components/brandboard.html':
      brandStylesheet.disabled = false;
      fccjsStylesheet.disabled = true;
      formStylesheet.disabled = true;
      fizzbuzzStylesheet.disabled = true;
      break;
    case 'components/intro_form.html':
      brandStylesheet.disabled = true;
      fccjsStylesheet.disabled = true;
      formStylesheet.disabled = false;
      fizzbuzzStylesheet.disabled = true;
      break;
    case 'components/fizzbuzz0.html':
    case 'components/fizzbuzz1.html':
    case 'components/fizzbuzz2.html':
    case 'components/fizzbuzz3.html':
    case 'components/fizzbuzz4.html':
      brandStylesheet.disabled = true;
      fccjsStylesheet.disabled = true;
      formStylesheet.disabled = true;
      fizzbuzzStylesheet.disabled = false;
      break;
    case 'components/fccfsjs_outline.html':
      brandStylesheet.disabled = true;
      fccjsStylesheet.disabled = false;
      formStylesheet.disabled = true;
      fizzbuzzStylesheet.disabled = true;
      break;
    default:
      brandStylesheet.disabled = true;
      fccjsStylesheet.disabled = true;
      formStylesheet.disabled = true;
      fizzbuzzStylesheet.disabled = true;
  }
};

const updateSecondaryScript = (destination) => {
  const oldScript = document.getElementById('dynamic-script');
  const outputContent = document.getElementById("output");
  if (oldScript) {
    oldScript.remove();
  }
  if (outputContent) {
    outputContent.innerHTML = '';
  }
  const newScript = document.createElement('script');
  newScript.id = 'dynamic-script';
  switch (destination) {
    case 'components/fizzbuzz0.html':
      newScript.src = 'scripts/fizzbuzz0.js';
      break;
    case 'components/fizzbuzz1.html':
      newScript.src = 'scripts/fizzbuzz1.js';
      break;
    case 'components/fizzbuzz2.html':
      newScript.src = 'scripts/fizzbuzz2.js';
      break;
    case 'components/fizzbuzz3.html':
      newScript.src = 'scripts/fizzbuzz3.js';
      break;
    case 'components/fizzbuzz4.html':
      newScript.src = 'scripts/fizzbuzz4.js';
      break;
    case 'components/intro_form.html':
      newScript.src = 'scripts/introduction.js';
      break;
    default:
      break;
  }
  const scriptContainer = document.getElementById('dynamicScriptContainer');
  scriptContainer.appendChild(newScript);
};

const handleHTMLUpdate = async (destination) => {
  const response = await fetch(destination);
  const newHtml = await response.text();
  mainContent.innerHTML = newHtml;
  updatePageTitle(destination);
  updateSecondaryStylesheet(destination);
  if (
    destination === 'components/fizzbuzz0.html' || 
    destination === 'components/fizzbuzz1.html' || 
    destination === 'components/fizzbuzz2.html' || 
    destination === 'components/fizzbuzz3.html' ||
    destination === 'components/fizzbuzz4.html' ||
    destination === 'components/intro_form.html') {
      updateSecondaryScript(destination);
  }
};

const handleNavigation = async (event) => {
  console.log("Navigation event fired", event.currentTarget);
  event.preventDefault();
  const destination = event.currentTarget.getAttribute('data-destination');
  const hash = event.target.id;
  console.log(`Navigating to ${destination} with hash ${hash}`);
  await handleHTMLUpdate(destination);
  window.location.hash = hash;
};

document.querySelectorAll('nav [role="button"]').forEach((link) => {
  link.addEventListener('click', handleNavigation);
  console.log("fired1");
});

document.querySelectorAll('span [role="button"]').forEach((link) => {
  link.addEventListener('click', handleNavigation);
  console.log("fired2");
});

window.addEventListener('DOMContentLoaded', async() => {
  const hash = window.location.hash;
  if (hash === '#home' || hash === '') {
    document.title = "Angela McCrary-Roffis's Adventurous Musk Rat \u{2743} WEB115 \u{2743} Home";
    const response = await fetch('components/index.html');
    window.location.hash = '#home';
    const newHtml = await response.text();
    mainContent.innerHTML = newHtml;
  } else {
    const destination = `components/${hash.substring(1)}.html`;
    handleHTMLUpdate(destination);
  }
});
