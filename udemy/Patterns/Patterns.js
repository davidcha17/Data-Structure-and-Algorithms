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
