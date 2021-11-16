import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const inputBtn = document.querySelector('#datetime-picker');

const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', true);

const dataDays = document.querySelector('.value[data-days]');
const dataHours = document.querySelector('.value[data-hours]');
const dataMinutes = document.querySelector('.value[data-minutes]');
const dataSeconds = document.querySelector('.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      return (
        Notiflix.Notify.failure('Please choose a date in the future'),
        btnStart.setAttribute('disabled', true)
      );
    }
    btnStart.removeAttribute('disabled');
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

// Please choose a date in the future

btnStart.addEventListener('click', () => {
  const date = new Date(inputBtn.value);
  console.log(date);
  let timerId = 0;
  timerId = setInterval(() => {
    if (new Date(Date.now()) >= new Date(date)) {
      return clearInterval(timerId);
    }
    console.log(convertMs(new Date(date) - new Date(Date.now())));
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  dataDays.textContent = addLeadingZero(days);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  dataHours.textContent = addLeadingZero(hours);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  dataMinutes.textContent = addLeadingZero(minutes);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  dataSeconds.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
