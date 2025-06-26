let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;
  let ms = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
  display.textContent = `${h}:${m}:${s}:${ms}`;
}

function stopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (interval !== null) return;
  interval = setInterval(stopwatch, 10);
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  updateDisplay();
  laps.innerHTML = '';
});

document.getElementById("lapBtn").addEventListener("click", () => {
  let lapTime = display.textContent;
  let li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  laps.appendChild(li);
});
