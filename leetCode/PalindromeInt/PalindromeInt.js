var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;
    if(x % 10 === 0) return false; 
    
    let result = 0;
    while(result < x) {
        result *= 10;
        result += x % 10;
        x = Math.trunc(x / 10);
    }
    console.log(result)

    return result === x || Math.trunc(result / 10) === x;
};

/* 
This is similar to the ReverseInt problem, where we converted the int into a string
but this time we aren't able to conver it into a string. Negative numbers arent 
palindrome so we must create an edge case where negative numbers arent accepted
and single digits are palindrome numbers. The result is only true and false.
*/