const body = document.body;
const textSection = document.getElementById('texts')

function siteTheme() {
  const theme = document.querySelectorAll('.theme');
  for (let button of theme) {
    button.addEventListener('click', function () {
      body.style.backgroundColor = button.innerText;
      localStorage.setItem('background-color', button.innerText);
    });
  }
}
siteTheme();

function setFont() {
  const fonts = document.querySelectorAll('.font');
  for (let button of fonts) {
    button.addEventListener('click', function () {
      body.style.fontFamily = button.innerText;
      localStorage.setItem('font-family', button.innerText);
    });
  }
}
setFont();

function fontColor() {
  const colors = document.querySelectorAll('.color');
  for (let button of colors) {
    button.addEventListener('click', function () {
      body.style.color = button.innerText;
      localStorage.setItem('font-color', button.innerText);
    });
  }
}
fontColor();

function fontSize() {
  const fontSizes = document.querySelectorAll('.font-size');
  for (let button of fontSizes) {
    button.addEventListener('click', function () {
      body.style.fontSize = button.innerText;
      localStorage.setItem('font-size', button.innerText);
    });
  }
}
fontSize();

function lineHeight() {
  const heights = document.querySelectorAll('.line-height');
  for (let button of heights) {
    button.addEventListener('click', function () {
      body.style.lineHeight = button.innerText;
      localStorage.setItem('line-height', button.innerText);
    });
  }
}
lineHeight();

const defaultFormat = document.getElementById('default');
defaultFormat.addEventListener('click', function() {
  body.style = null;
  localStorage.removeItem('background-color');
  localStorage.removeItem('font-family');
  localStorage.removeItem('font-color');
  localStorage.removeItem('font-size');
  localStorage.removeItem('line-height');
})

body.style.backgroundColor = localStorage.getItem('background-color');
body.style.fontFamily = localStorage.getItem('font-family');
body.style.color = localStorage.getItem('font-color');
body.style.fontSize = localStorage.getItem('font-size');
body.style.lineHeight = localStorage.getItem('line-height');
