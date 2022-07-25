let playerDice = Math.floor(6*Math.random())+1;
let computerDice = Math.floor(6*Math.random())+1;
console.log ("player dice: "+ playerDice);
console.log("computer dice: "+ computerDice);
if(playerDice>computerDice) {
    console.log("You win");
}else if(playerDice<computerDice){
    console.log("You lose");
}else{
    console.log("tie");
}