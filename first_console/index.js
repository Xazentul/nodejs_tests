const readline = require('readline');
var colors = require('colors');

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Type " +  "exit".bold.bgYellow + " to leave! \n\n");

inp.setPrompt("who are you? ")
inp.prompt();
inp.on('line', ask);

function ask(txt) {
  if (txt === "Mark") {
    console.log("good!".green)
  } else if (txt === "exit") {
    inp.close();
    process.exit();
  } else {
    console.log("not good!".red)
  }
  this.prompt(); 
};