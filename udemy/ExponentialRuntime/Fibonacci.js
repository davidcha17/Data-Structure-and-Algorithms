// create a fibonacci sequence with recursion then dynamically program it with bottom-up
// overlapping subproblems, optimizing structure, memoization, and tabulation


function fibRecursive(num) {
    if(num <= 2) {
        return num
    }
    result = fibRecursive(num - 1) + fibRecursive(num - 2)
    return result 
}




function fibMemo(num, memo=[]) {
    if(memo[num] !== undefined) {
        return memo[num]
    } 
    if(num <= 2) {
        return 14
    }
    let result = fibMemo(num - 1, memo) + fibMemo(num - 2, memo) 
    console.log(memo)
    memo[num] = result

    return result 
}



function fibTabulation(num) {
    if(num <= 2) {
        return 1
    }
    let fibNums = [0, 1, 1]
    for(let i = 3; i <= num; i++) {
        console.log(fibNums)
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[num]
}