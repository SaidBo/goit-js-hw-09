import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateInputField: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;

let deltaTime = 0;
let selectedDate = 0;
let timerID = 0;

function deltaData() {
  deltaTime = selectedDate - Date.now();
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate < Date.now()) {
        Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.dateInputField, options);

refs.startBtn.addEventListener('click', startCountdownTimer);

function startCountdownTimer() {
  refs.startBtn.disabled = true;
  deltaData();

  timerId = setInterval(() => {
    if (deltaTime <= 1000) {
      updateTime(deltaTime);
      clearInterval(timerID);
      return;
    }
    updateTime(deltaTime);
    deltaTime -= 1000;
  }, 1000);
}

function updateTime(diffTime) {
  refs.days.textContent = String(convertMs(deltaTime).days).padStart(2, 0);
  refs.hours.textContent = String(convertMs(deltaTime).hours).padStart(2, 0);
  refs.minutes.textContent = String(convertMs(deltaTime).minutes).padStart(
    2,
    0
  );
  refs.seconds.textContent = String(convertMs(deltaTime).seconds).padStart(
    2,
    0
  );
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
