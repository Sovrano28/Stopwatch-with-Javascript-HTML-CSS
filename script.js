let seconds = 0;
let tens = 0;

let stopwatchSeconds = document.querySelector('.seconds');
let stopwatchTens = document.querySelector('.tens');
const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');

let watchInterval; // creating a variable so as to be able to clear it.

function startTimer() {
  tens++;

  if(tens <= 9) {
    stopwatchTens.innerHTML = '0' + tens;
  }

  if(tens > 9) {
    stopwatchTens.innerHTML = tens;
  }

  if(tens > 99) {
    seconds++;
    stopwatchSeconds.innerHTML = '0' + seconds;
    tens = 0;
    stopwatchTens.innerHTML = '0' + 0;
  }

  if(seconds > 9) {
    stopwatchSeconds.innerHTML = seconds;
  }
}

// since we need to hit the(previous) start button continually for the tens to increase at all, this function will help us run thefunction startTimer() above continually.
startBtn.addEventListener('click', () => {
  watchInterval = setInterval(startTimer, 10);
});

// this is the pause button
stopBtn.addEventListener('click', () => {
  clearInterval(watchInterval);

  startBtn.innerHTML = 'Continue';
});

// the reset button
resetBtn.addEventListener('click', () => {
  clearInterval(watchInterval);

  tens = '00';
  seconds = '00';
  stopwatchSeconds.innerHTML = seconds;
  stopwatchTens.innerHTML = tens;

  startBtn.innerHTML = 'Start';
});

// theme change buttons
const theme2Btn = document.querySelector('.theme-2-btn');

theme2Btn.addEventListener('click', () => {
  document.querySelector('.container').style.backgroundColor = '#FBEAFF';
  document.querySelector('h1').style.color = '#7C7484';
  document.querySelector('.change span').style.color = '#7C7484';
  document.querySelector('.wrapper p').style.color = '#FBEAFF';
  document.querySelector('.wrapper p').style.setProperty('--before-background', '#7C7484'); // this solution was massive.
  // document.getElementsByClassName('.watchBtn .btn').style.backgroundColor = '#7C7484';
});