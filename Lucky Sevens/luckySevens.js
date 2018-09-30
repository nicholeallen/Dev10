function game() {
  var startingBet = document.getElementById("startingBet").value;
  var money = startingBet; 
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var dice = die1 + die2;
  var playArray = [];

  if (startingBet <= 0) {
    alert("Starting bet must be greater than $0.00.");
    return false;
  }

while (money > 0) {
	if (dice == 7) {
      money += 4
    }
    else {
      money-=1
	} 
	playArray.push(money)
{
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var dice = die1 + die2;
}
}

var rolls = playArray.length;
var highestMoney = Math.max.apply(Math, playArray);
var highestPosition = playArray.indexOf(highestMoney);
var moneyRoll = rolls - highestPosition;



  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerHTML = "Play Again";
  document.getElementById("bet").innerText = "$" + startingBet +".00";
  document.getElementById("rolls").innerText = rolls;
  document.getElementById("highestMoney").innerText = "$" + highestMoney + ".00";
  document.getElementById("moneyRoll").innerText = moneyRoll;
  return false;
} 

