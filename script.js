let time = 60 * 60;
let timer = null;

function updateDisplay() {

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("timer").innerText =
    minutes + ":" + seconds;
}

function startTimer() {

  if (timer !== null) return;

  timer = setInterval(function () {

    if (time <= 0) {
      clearInterval(timer);
      timer = null;
      document.getElementById("message").innerText =
        "Time is up!";
      return;
    }

    time--;
    updateDisplay();

  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {

  clearInterval(timer);
  timer = null;

  time = 60 * 60;
  updateDisplay();

  document.getElementById("message").innerText = "";
}

updateDisplay();