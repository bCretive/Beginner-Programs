const tttGame = document.getElementById("ttt");
const resetBtn = document.getElementById("reset");
const newGame = document.getElementById('newGame')
let msg = document.querySelector('#msg')
let gameWonBy = document.getElementById('gameWonBy')
let btnCount = 0;
let turnO = false;

// Generate buttons dynamically
for (let i = 0; i < 9; i++) {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    tttGame.appendChild(btn);
}

const btns = document.querySelectorAll(".btn");

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Function to check win
const checkWin = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (btns[a].innerText && btns[a].innerText === btns[b].innerText && btns[a].innerText === btns[c].innerText) {
            disableAll();
            msg.classList.replace('hidden', 'show')
            gameWonBy.innerText = `Game won by player ${btns[a].innerText}`
            return;
          
        }
    }
  if (btnCount === 9){
    msg.classList.replace('hidden', 'show')
    gameWonBy.innerText = `It's a draw`
  }
}

// Disable all buttons when the game ends
const disableAll = () => btns.forEach(btn => btn.disabled = true);

// Reset the game
const resetGame = () => {
    btns.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
    turnO = false;
    btnCount = 0
    msg.classList.replace('show', 'hidden')
};

// Button click event listener
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btnCount++
        if (turnO){
          btn.innerText = 'O'
          btn.style.color = "red"
        }
        else{
          btn.innerText = 'X'
          btn.style.color = 'black'
        }
        btn.disabled = true;
        turnO = !turnO;
       checkWin();
    });
});

// Reset button event listener
resetBtn.addEventListener("click", resetGame);
newGame.addEventListener('click', resetGame)