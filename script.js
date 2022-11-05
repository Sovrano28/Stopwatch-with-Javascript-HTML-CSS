let seconds = 00;
let tens = 00;

let stopwatchSeconds = document.querySelector('.seconds');
let stopwatchTens = document.querySelector('.tens');
const startBtn = document.querySelector('.btn-start');
const stoptBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');

startBtn.addEventListener('click', () => {
  tens++;

  if(tens <= 9) {
    stopwatchTens.innerHTML = '0' + tens;
  }

  if(tens > 9) {
    stopwatchTens.innerHTML = tens;
  }

  if(tens > 99) {
    stopwatchSeconds.innerHTML = '0' + seconds;
    tens = 0;
    stopwatchTens.innerHTML = '0' + 0;
  }

  if(seconds > 9) {
    stopwatchSeconds.innerHTML = seconds;
  }
})