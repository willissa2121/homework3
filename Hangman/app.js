let loseGuess= document.getElementById("lose-text")
let guessAmount=document.getElementById("guess-text")
let winGuess=document.getElementById("win-text")

let randomNum=7
let win = 0
let lose = 0
let loseAmount = 0

let runEvent=() => {

  console.log(document.getElementById("input").value)
  let input = document.getElementById("input").value
  if (input == randomNum){
    win ++
    winGuess.innerHTML = win;
    lose = 0;
    guessAmount.innerHTML = 10-lose
  }
  else if (10 - lose == 1){
    loseAmount ++;
    loseGuess.innerHTML = loseAmount;
    guessAmount.innerHTML = 10
    lose = 0;
  }
  else{
    lose ++;
    guessAmount.innerHTML = 10-lose;
  }
}

console.log(document.getElementById("input").value)