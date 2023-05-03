function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `background: rgb(${r}, ${g}, ${b})`;
}

const renderSquare = (color) => {
    box.innerHTML = ''
    gameCount = 4;

    if (score >= 5) {
        gameCount = 6;
        box.style.width = '350px'
    }

    if (score >= 15) {gameCount = 9}

    if (score >= 25) {
        gameCount = 16;
        box.style.width = '450px'
    }

    if (score >= 50) {
        gameCount = 25;
        box.style.width = '550px'
    }

    for (let i = 0; i < gameCount; i++) {
        square = document.createElement("button");
        square.classList.add("square"); 
        box.appendChild(square);
        square.setAttribute("style", color);    
    }

    let squareCount = document.querySelectorAll(".square")

    let randomSquare = Math.floor(Math.random() * gameCount);
    squareCount[randomSquare].style.opacity = 0.8;
    squareCount[randomSquare].value = 1;
}

let time = 10;


const renderScore = () => {
    scoreBox.textContent = `${score}`;
}


const renderAlert = () => {
    let alert = document.createElement("div");
    alert.classList.add("alert")
    let alertTitle = document.createElement("h2");
    alertTitle.textContent = "Shit...";
    let totalScore = document.createElement("p");
    totalScore.textContent = `Total: ${score}`;
    alert.appendChild(alertTitle);
    alert.appendChild(totalScore);

    document.body.appendChild(alert)

}