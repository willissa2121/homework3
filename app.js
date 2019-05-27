let loseGuess= document.getElementById("lose-text")
let guessAmount=document.getElementById("guess-text")
let winGuess=document.getElementById("win-text")

let randomNum= Math.floor((Math.random()*10) +1)
console.log(randomNum)
let win = 0
let lose = 0
let loseAmount = 0
let button = document.getElementById("button")
let input = document.getElementById("input")


let runEvent=() => {

  console.log(document.getElementById("input").value)
  let input = document.getElementById("input").value
  if (input == randomNum){
    button.innerHTML="Correct!"
    win ++
    winGuess.innerHTML = win;
    lose = 0;
    guessAmount.innerHTML = 10-lose
    button.className= "btn btn-outline-success"
  }
  else if (10 - lose == 1){
    button.innerHTML="Wrong!"
    loseAmount ++;
    loseGuess.innerHTML = loseAmount;
    guessAmount.innerHTML = 10
    lose = 0;
    button.className = "btn btn-outline-primary"
  }
  else{
    button.innerHTML="Wrong!"
    lose ++;
    guessAmount.innerHTML = 10-lose;
    button.className = "btn btn-outline-danger"
    
  }
}

console.log(document.getElementById("input").value)

input.addEventListener("keyup", function(event){
  if (event.keyCode=== 13 || event.keyCode === 32){
    runEvent()
  }
  
})