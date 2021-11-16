import Notiflix from 'notiflix';

const formEl = document.querySelector('.form ');
// [(type = 'submit')];

const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
// console.log(delayInput.name);

formEl.addEventListener('click', () => {
  console.log('Button was clicked');
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(position);
  } else {
    // Reject
    console.log(delay);
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
