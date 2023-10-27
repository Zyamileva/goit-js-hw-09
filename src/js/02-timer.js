import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const selector = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const btn = document.querySelector('[data-start');
const timer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const spans = document.querySelectorAll('span');

let selectedDate = null;
let idSet = null;
btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectData(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

btn.addEventListener('click', () => {
  btn.disabled = true;
  selector.disabled = true;
  return (idSet = setInterval(updateDiff, 1000));
});

function selectData(date) {
  let nowDate = new Date();
  selectedDate = date;
  if (date.getTime() < nowDate.getTime()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  btn.disabled = false;
}

function updateDiff() {
  let diff = selectedDate.getTime() - new Date().getTime();
  if (diff <= 0) {
    return clearInterval(idSet);
  }
  let { days, hours, minutes, seconds } = convertMs(diff);
  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

document.body.style.backgroundColor = 'rgb(255, 250, 250)';
selector.style.boxShadow = ' 0 2px 4px rgba(0, 0, 0, .25)';
btn.style.boxShadow = ' 0 2px 4px rgba(0, 0, 0, .25)';
timer.style.display = 'flex';

fields.forEach(element => {
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.justifyContent = 'space-between';
  selector.style.margin = '30px';
  element.style.margin = '30px';
  element.style.fontSize = '20px';
});

spans.forEach(element => {
  element.style.display = 'block';
  element.style.textAlign = 'center';
  element.style.fontWeight = '500';
});
