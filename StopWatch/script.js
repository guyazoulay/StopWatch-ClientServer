
const display = document.getElementById("display");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let intervalId;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

/* startTimer:
    * 1. Check if timer is already running
    * 2. If not, start the timer
    * 3. Update the display every second
    * 4. If seconds reach 60, reset seconds to 0 and increment minutes by 1
    * 5. If minutes reach 60, reset minutes to 0
    * 6. If timer is already running, do nothing
*/
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

playBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

