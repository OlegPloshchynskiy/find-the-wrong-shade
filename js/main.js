const getElem = (e) => document.querySelector(e);

const pageMode = getElem("#flexSwitchCheckDefault");
const pageModeIcon = getElem("#page-mode");
const title = getElem(".title");
const startBtn = getElem("#start");
const game = getElem("#game");
const box = getElem("#square-box");
const timerBox = getElem("#timer");
const scoreBox = getElem("#score-box");
let start = false;
let score = 0;

pageMode.addEventListener("change", () => {
  if (pageMode.checked) {
    document.body.setAttribute(
      "style",
      "background: linear-gradient(to right, #0f2027, #203a43, #2c5364);"
    );
    pageModeIcon.src = "./image/moon.png";
    title.setAttribute("style", "color: white");
  } else {
    document.body.setAttribute(
      "style",
      "background: linear-gradient(to right, #36d1dc, #5b86e5);"
    );
    pageModeIcon.src = "image/sun.png";
    title.setAttribute("style", "color: black");
  }
});

startBtn.addEventListener("click", () => {
  start = true;
  run();
});

const gameplay = () => {
  let squareCount = document.querySelectorAll(".square");

  for (let i = 0; i < squareCount.length; i++) {
    squareCount[i].addEventListener("click", () => {
      if (squareCount[i].value == 1) {
        renderTimer();
        run();
        clearTimer();
        score++;
        renderScore();
      } else {
        alert(`You loose! Score ${score}`);
        score = 0;
        gameCount = 4;
        scoreBox.textContent = `Score: ${score}`;
        clearTimer();
      }
    });
  }
};

function startTimer() {
  timer = setInterval(() => {
    timerBox.textContent = time--;
    if (time < 0) {
      clearTimer();
    }
  }, 1000);
}

const clearTimer = () => {
  clearInterval(timer);
  time = 20;
};

const run = () => {
  renderSquare(randomColor());
  gameplay();
  renderScore();
  startBtn.style.display = "none";
};

const looseGame = () => {
  alert(`You loose! Score ${score}`);
};
