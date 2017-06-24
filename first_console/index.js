const readline = require('readline');
var colors = require('colors');

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Type exit to leave:")

inp.question("who are you? ", (txt) => {
  if (txt === "Mark") {
    console.log("good!".green)
  } else if (txt === "exit") {
    inp.close();
  } else {
    console.log("not good!".red)
  }
}); 