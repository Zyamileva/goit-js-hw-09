import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let {
    elements: { delay, step, amount },
  } = event.currentTarget;
  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);
  for (let element = 0; element < amount; element++) {
    createPromise(element, delay)
      .then(({ position, delay }) => {
        setTimeout(
          () =>
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delay}ms`
            ),
          delay
        );
      })
      .catch(({ position, delay }) => {
        setTimeout(
          () =>
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            ),
          delay
        );
      });
    delay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
