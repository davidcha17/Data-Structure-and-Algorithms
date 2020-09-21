let arr = [2, 3, 4, 2]

console.log(arr)

function findDuplicates(arr) {

    for(let i = 0; i < arr.length; i++) {
        let arrIndex1 = arr[i]
        let arrIndex2 = arr[i + 1]
        
        if(arrIndex1 > arrIndex2) {
            // let greaterValue = arr.splice(0, 1)
            // console.log(greaterValue)
            // arr.push(greaterValue)
            // console.log(arr)
        }
        
    }
    return false
    
}

function sortArr(arr) {
    arr.sort((a, b) => a - b)
    console.log(arr)
    // I can sort the array without creating a new array so it is still O(1) space
    // but the time complexity becomes O(n^2)
    for(let i = 0; i < arr.length; i++) {
        let arrIndex1 = arr[i]
        let arrIndex2 = arr[i + 1]
        if(arrIndex1 === arrIndex2) {
            return arrIndex1 + " is the duplicate"
        }
        if(arrIndex1 !== arr[i] + 1) {
            console.log(arr[i] + 1)
            return arr[i] + 1 + " is the missing number"
        }
    }
    // this would only work if the numbers in the array started at 0, I have to figure 
    // out how to take a look of the array without changing the order. Doing to once
    // the array is sorted, but the question is how to I sort the array to O(N) space and
    // searching for the missing number with O(1) time?

}

// findDuplicates(arr)
// sortArr(arr)

function XOR(arr) {
    console.log(arr)

    for(let i = 0; i < arr.length; i++) {
        let index1 = arr[i]
        let index2 = arr[1 + 1]
        if( ( index1 < index2 && ) || ( index1 > index2 ) ) {
            // [ 2, 1, 2, 4]
            // one side of the operator should return if the array isnt sorted
            // the other side should return the duplicated index in the array
        }
    }
}


// if( ( foo && !bar ) || ( !foo && bar ) ) {
//     ...
//   }

//   if( ( foo || bar ) && !( foo && bar ) ) {
//     ...
//   }

//   if( foo ? !bar : bar ) {
//     ...
//   }

// these are example of XOR (EXCLUSIVE OR) operators: a boolean operator
//   It is successful if the expression on either side is true (like ||), 
// but not if both sides are true (like !( x && y )).