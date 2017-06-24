const readline = require('readline');
var colors = require('colors');

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Type exit to leave:")

inp.setPrompt("who are you? ")

inp.question("who are you? ", ask); 

function ask(txt) {
  if (txt === "Mark") {
    console.log("good!".green)
  } else if (txt === "exit") {
    inp.close();
    process.exit();
  } else {
    console.log("not good!".red)
  }
  inp.question("who are you? ", ask); 
};