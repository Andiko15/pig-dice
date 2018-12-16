var player1 =""
var player2 =""

var diceGame = function (){
  return Math.floor(6*Math.random())+1
}

function player(round){
  this.roll = 0
  this.tempscore = 0
  this.totalscore = 0
  this.turn = turn
  this.playerName;
}
player.prototype.rollone = function(){
  if (this.roll === 1){
    this.tempscore = 0
    alert ("Sorry" + this.playerName + "you rolled a 1! Your turn is over!")

  }else {
    this.tempscore += this.roll
  }
}
player.prototype.hold = function (){
  this.totalscore += this.tempscore
  this.tempscore = 0
  alert (this.playerName + ",Your turn is over. Pass to the next player")
}
player.prototype.newGame = function (){
  this.roll = 0
  this.tempscore = 0
  
}
