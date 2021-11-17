import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  let delayInput = Number(evt.target.delay.value);
  const stepInput = Number(evt.target.step.value);
  const amountInput = Number(evt.target.amount.value);

  for (let i = 0; i < amountInput; i += 1) {
    createPromise(i + 1, delayInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayInput += stepInput;
  }
}

// Notiflix.Notify.success
// Notiflix.Notify.failure
