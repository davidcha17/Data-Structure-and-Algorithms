// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(Number)
    process.exit();
}

function max(arr) {
    // write your code here
    let maxProduct = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // before i did j = 1 instead of initializing it after i
            console.log(arr[i], arr[j])
            let temp = arr[i] * arr[j]
            if(temp > maxProduct) {
                maxProduct = temp
            }
        }
    }
    return maxProduct
}
// is there a way to improve the time complextiy of max?

function max2(arr) {
    
}

module.exports = max;