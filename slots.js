let generateButton = document.querySelector(".generate-button");
console.log(generateButton);
let win = false;
var audio = new Audio("Slotmachine.mp3");
generateButton.addEventListener("click", startAnimation);
let header = document.querySelector("h1")
let jackpot = false;
var winAudio = new Audio("Winneraudio.mp3")

let firstSlot = document.querySelector(".slot:first-child");
let middleSlot = document.querySelector(".slot:nth-child(2)");
let lastSlot = document.querySelector(".slot:last-child");

let playerMoney = document.querySelector("[data-money]");
updateMoney();

let playerBet = document.querySelector("[data-bet]");

let start = 0;
let currentFrame = 0;
function Win(){
  var resultBox = document.getElementById("resultBox");
  if(win === true){  // <= you can put your condition here
      resultBox.innerHTML="YOU WIN !!!";
  }else{
      resultBox.innerHTML=""; 
  }
 // OR you can use ternary operator
 // resultBox.innerHTML =  (textA) ? textA : textB;
}
function ResetWin(){
  var resultBox = document.getElementById("resultBox");
   
      resultBox.innerHTML="";
  
 // OR you can use ternary operator
 // resultBox.innerHTML =  (textA) ? textA : textB;
}
function Jackpot(){
  var resultBox = document.getElementById("jackpot");
  if(jackpot === true){  // <= you can put your condition here
      resultBox.innerHTML="JACKPOT!!!";
  }else{
      resultBox.innerHTML=""; 
  }
 // OR you can use ternary operator
 // resultBox.innerHTML =  (textA) ? textA : textB;
}
function ResetJackpot(){
  var resultBox = document.getElementById("jackpot");
   
      resultBox.innerHTML="";
  
 // OR you can use ternary operator
 // resultBox.innerHTML =  (textA) ? textA : textB;
}


function SetFalse(){
  win = false;
}
function SetFalseJ(){
  jackpot = false;
}

function ChangeToRed(){
  document.body.style.background = "#CF4449";
}
function ChangeToBlue(){
  document.body.style.background = "#AA11EE";
}
function ChangeToGreen(){
  document.body.style.background = "#00FF00";
}
function ChangeToOrange(){
  document.body.style.background = "##FFA500";
}
function ChangeToYellow(){
  document.body.style.background = "#F5D22E";
}
function ChangeToPurple(){
  document.body.style.background = "#5D3FD3";
}
function ChangeToPink(){
  document.body.style.background = "#EE11AA";
}
function ChangeBack(){
  document.body.style.background = "#FFFFFF";
}
/*function ChangeBackgroundOnWin(){
  ChangeToRed();
  setTimeout(ChangeToYellow, 592);
  setTimeout(ChangeToGreen, 592);
  setTimeout(ChangeToPurple, 592);
  setTimeout(ChangeToOrange, 592);
  setTimeout(ChangeToPink, 592);
  setTimeout(ChangeToBlue, 592);
  setTimeout(SetFalse, 30);
}*/


function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

function WinAudio(){
  winAudio.play();
  setTimeout(SetFalse,3557)

}

function startAnimation() {
  console.log("HELLO!!!");
  audio.play();
  setTimeout(generateSlots, 2005);
  currentFrame = 0;
  window.requestAnimationFrame(renderFrame);
}

function renderFrame(timestamp) {
  if (currentFrame === 0) {
    start = timestamp;
    firstFrame = false;
  }
  currentFrame++;
  const elapsed = Math.floor(timestamp - start);

  if (currentFrame % 4 === 0) {
    firstSlot.innerHTML = generateNumber();
    middleSlot.innerHTML = generateNumber();
    lastSlot.innerHTML = generateNumber();
  }

  //firstSlot.innerHTML = elapsed;

  if (elapsed <= 2000) {
    window.requestAnimationFrame(renderFrame);
  }
}

function generateNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function generateSlots() {
  let a = parseInt(playerMoney.getAttribute("data-money"));
  let currentBet = parseInt(playerBet.value);
  if (currentBet > a) {
    return;
  }
  let result = a - currentBet;
  if (result < 0) {
    result = 0;
    // warn player: there is no money!
    return;
  }
  playerMoney.setAttribute("data-money", result);
  updateMoney();
  playerBet.getAttribute("data-bet");
  firstSlot.innerHTML = generateNumber();
  middleSlot.innerHTML = generateNumber();
  lastSlot.innerHTML = generateNumber();

  if (
    parseInt(firstSlot.innerHTML) === parseInt(middleSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === parseInt(lastSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === 1
  ) {
    //vinst
    a += currentBet * 2;
    playerMoney.setAttribute("data-money", a);
    win = true;
    updateMoney();
  }
  //equal
  if (
    parseInt(firstSlot.innerHTML) === parseInt(middleSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === parseInt(lastSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === 2
  ) {
    //vinst
    a += currentBet * 5;
    playerMoney.setAttribute("data-money", a);
    win = true;
    updateMoney();
  }
  if (
    parseInt(firstSlot.innerHTML) === parseInt(middleSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === parseInt(lastSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === 3
  ) {
    //vinst
    a += currentBet * 10;
    playerMoney.setAttribute("data-money", a);
    win = true;
    jackpot = true;
    updateMoney();
  }
  // sequence 123
  if (
    parseInt(firstSlot.innerHTML) === 1 &&
    parseInt(middleSlot.innerHTML) === 2 &&
    parseInt(lastSlot.innerHTML) === 3
  ) {
    a += currentBet * 3;
    playerMoney.setAttribute("data-money", a);
    win = true;

    updateMoney();
  }
  // 321
  if (
    parseInt(firstSlot.innerHTML) === 3 &&
    parseInt(middleSlot.innerHTML) === 2 &&
    parseInt(lastSlot.innerHTML) === 1
  ) {
    a += currentBet * 3;
    playerMoney.setAttribute("data-money", a);
    win = true;

    updateMoney();
    
    }
    if (win === true) {
      WinAudio();
      Promise.resolve()
  .then(() => ChangeToRed())
  .then(() => delay(508))
  .then(() => ChangeToPurple())
  .then(() => delay(508))
  .then(() => ChangeToPink())
  .then(() => delay(508))
  .then(() => ChangeToOrange())
  .then(() => delay(508))
  .then(() => ChangeToYellow())
  .then(() => delay(508))
  .then(() => ChangeToGreen())
  .then(() => delay(508))
  .then(() => ChangeToBlue())
  .then(() => delay(508))
  .then(() => ChangeBack())
  ;
      Win();
      setTimeout(ResetWin, 3557)
      Jackpot();
      setTimeout(ResetJackpot, 3557)
      SetFalseJ();

  }
}

function updateMoney() {
  playerMoney.innerHTML = playerMoney.getAttribute("data-money");
}

