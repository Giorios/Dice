function rollDice() {
  var dice = Math.floor(Math.random() * 6) + 1;
   console.log('computer rolled: ' + dice);
   document.getElementById("output").innerHTML = dice
};


document.getElementById("button").addEventListener("click", function(){
  rollDice();
});
