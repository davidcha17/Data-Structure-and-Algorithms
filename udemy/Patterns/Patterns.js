// frequency counter 

function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
// checking to see if the two string's length match
    const lookup = {};
// created an object that we will later use to collect the characters 
// from the string
   for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
// ternary statement; if letter exists, increment, otherwise set to 1
       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
// can't find letter or letter is zero, then it is not an anagram        
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

function properSame(arr1, arr2) {
    if( arr1.length !== arr2.length ) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for( let val of arr1 ) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for( let val of arr2 ) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for( let key in frequencyCounter1 ) {
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        } else {
            return true;
        }
    }
}

// multiple pointers 

function isZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    // creating pointers for the first and last index of the array
    while( left < right ) {
        let sum = arr[left] + arr[right]; 
    //  iterating the array with a while loop and adding the indexs from 
    // both sides of the array
    if(sum === 0) {
        return arr[left], arr[right]
    //  if the array is 0, return the elements that made sum 0 
    } else if(sum > 0) {
      right --;
    } else {
        left++;
    // if the sum is greater than 0 we go down 1 from the right
    // else we will go up 1 from the left 
    }
   }
}

// Sliding Window

function maxSubArraySum(arr, num) {
    let tempSum = 0;
    let maxSum = 0;
    // creating a place holder for the max sum and a sum
    // that will constantly change during the iteration
    if(arr.length < num) return null
    // edge case
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
        // console.log("maxSum", maxSum)
    // we start at index 0 and up to the num 
    // this is our window an we will keep adding on
    // to the maxSum think of this as initial window
    }
        tempSum = maxSum
        // giving the tempSum a value so we can compare other 
        // sums throughout the iteration
    for(let i = num; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - num];
        // starting from the num (start of the window) 
        // we will keep adding on to the variable
        maxSum = Math.max(maxSum, tempSum);
        // comparing which variable is greater
    }
    return maxSum 
}

// Divide and Conquer 

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    // Variables for the start and end of the array
    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currElement = arr[middle];
    // We are creating the middle index by dividing the start 
    // and end of the array. Once we get the middle index
    // we assign the index value to the variable 
    console.log("before condition", middle)
        if(arr[middle] < val) {
            min = middle + 1;
        } else if(arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
        console.log("after condition", middle)
    }
    return -1;
}

