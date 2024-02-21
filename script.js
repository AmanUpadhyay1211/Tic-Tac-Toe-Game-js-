let grid = document.querySelector(".grid");   
let btns = document.querySelectorAll(".btn");
let winMsg = document.querySelector(`.msg`);
let winSec = document.querySelector(`.newGame`);
let mode = document.querySelector(`#mode`);
let currMode = `light`;
let clickSound = new Audio(`clickSound.mp3`);
let winSound = new Audio(`winSound.mp3`);
let newGame = document.querySelector(`#restart`);
let resetBtn = document.querySelector(`#reset`);
let xTurn = true;
let click = 0;
let pX = 0;
let pY = 0;
let pxScore = document.querySelector(`.x`);
let pyScore = document.querySelector(`.y`);

let winCnd = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6], 
];

// What will happen when you click a box of zero katta game
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (xTurn === true) {
      btn.textContent = `X`;
      console.log(`X-turn`);
      xTurn = false;
    } else {
      btn.textContent = `O`;
      console.log(`O-turn`);
      xTurn = true;
    }

    clickSound.play();
    btn.disabled = true;
    click++;
    //   console.log(click);
    cheakWin();
  });
});

// Cheaking the winning condition and declaring winner when ones win
let cheakWin = () => {
  for (const cnd of winCnd) {
    // console.log(cnd[0],cnd[1],cnd[2]);
    // console.log(btns[cnd[0]],btns[cnd[1]],btns[cnd[2]]);
    let pos1 = btns[cnd[0]].textContent;
    let pos2 = btns[cnd[1]].textContent;
    let pos3 = btns[cnd[2]].textContent;
    //  console.log(pos1 , pos2,  pos3);

    if (pos1 != `` && pos2 != `` && pos3 != ``) {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(`winner is ${pos1}`);
        winMsg.textContent = `CONGRATULATION TO OUR WINNER ${pos1}`;

        // Counting the Score
        if(pos1 === `X`){
          pX++;
          console.log(pX);
          pxScore.textContent = `PlayerX: ${pX}`
        }
        else{
          pY++;
          console.log(pY);
          pyScore.textContent = `PlayerY: ${pY}`
        }
        winSound.play();
        gameEnd();
      }
    }
  }
};

// What will happen when game end and we gotour winner
let gameEnd = () => {
   for (const btn of btns) {
     btn.disabled = true;
     winSec.classList.remove(`vNone`);
   }
};

// NewGame button
newGame.addEventListener (`click`, () => {
  for (const btn of btns) {
    btn.disabled = false;
    btn.textContent = ``;
    winSec.classList.add(`vNone`);
    winSound.pause();
  }
})


// Reset button
resetBtn.addEventListener (`click`, () => {
  for (const btn of btns) {
    btn.disabled = false;
    btn.textContent = ``;
    winSec.classList.add(`vNone`);
    winSound.pause();
  }
})


// Toggle button for changing the mode (dark or light)
mode.addEventListener(`click`, () => { 
  if (currMode === `light`) {
    currMode = `dark`;
    document.body.style.backgroundColor = `black`;
    document.body.style.color = `white`;
    mode.innerHTML = ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  <p>Dark</p>`
}
else  {
currMode = `light`;
    document.body.style.backgroundColor = `white`;
    document.body.style.color = `black`;
    mode.innerHTML = ` <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
      stroke="#141B34"
      stroke-width="1.5"
    />
    <path
      d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
      stroke="#141B34"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
    <p>Light</p>`
}

})