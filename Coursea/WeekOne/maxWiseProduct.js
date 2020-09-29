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

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    let maxProduct = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            let temp = arr[i] * arr[j]
            if(temp > maxProduct) {
                maxProduct = temp
            }
        }
    }
    return maxProduct
}


module.exports = max;