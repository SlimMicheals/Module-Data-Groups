let timer = null;
let totalSeconds = 0;

function setAlarm() {
  clearInterval(timer);

  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

 totalSeconds = Number(input.value);

 function updateHeading() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

   heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }


  updateHeading();

  timer = setInterval(() => {
    totalSeconds--;

    updateHeading();

    if (totalSeconds <= 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

