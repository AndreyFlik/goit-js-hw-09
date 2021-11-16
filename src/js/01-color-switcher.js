const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const body = document.querySelector('body');

// let timerId = null;
let isActive = false;

startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;
  timerId = setInterval(() => {
    return (body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  isActive = false;
});
