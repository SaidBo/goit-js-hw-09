const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
  bodyBackgroundColor: document.querySelector('body'),
};

let timerId = null;

refs.stopButton.disabled = true;
refs.startButton.addEventListener('click', changeColor);
refs.stopButton.addEventListener('click', stopChangeColor);

function changeColor() {
  refs.startButton.disabled = true;
  refs.stopButton.disabled = false;
  timerId = setInterval(() => {
    refs.bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  clearTimeout(timerId);
  refs.startButton.disabled = false;
  refs.stopButton.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
