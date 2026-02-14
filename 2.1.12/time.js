const timeViwer = document.querySelector("#time");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resertBtn = document.querySelector(".resert");

let interval = null;
let seconds = 0;

timeViwer.textContent;
pauseBtn.style.display = "none";

startBtn.addEventListener("click", startFn);
pauseBtn.addEventListener("click", pauseFn);
resertBtn.addEventListener("click", resertFn);

function updateTime() {
  seconds++;
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  timeViwer.textContent = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function startFn() {
  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
  interval = setInterval(updateTime, 1000);
}

function pauseFn() {
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  clearInterval(interval);
}

function resertFn() {
  pauseFn();
  seconds = 0;
  timeViwer.textContent = "00:00";
}
