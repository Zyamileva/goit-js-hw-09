const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', onClickStart);
stop.addEventListener('click', onClickStop);

let intervalId = null;

function onClickStart() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.disabled = true;
}

function onClickStop() {
  clearInterval(intervalId);
  start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
