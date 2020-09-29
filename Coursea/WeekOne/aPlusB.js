// the task is to create a program that takes in two digits and adds the sum from the 
// standard input

var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);
    console.log(a + b);
    process.exit();
  }
}

function aPlusB(a, b) {
    return a + b
}

aPlusB(2, 4)