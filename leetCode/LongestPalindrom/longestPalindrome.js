var longestPalindrome = function(s) {
    if(s.length <= 1) return s;

//     2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
	
    let lps = '';
//     One letter
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }
//     Two letter
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) dp[i][i+1] = true;
        if(dp[i][i+1]) lps = s.substring(i, i + 2);
    }
// Three letter
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    
    return lps;
};

/*
This is with dynamic programming, we created a 2D array in order to obtain the previous
results because we only want to compute it once. 
*/

var longestPalindrome2 = function(s) {
  
    // Manacher's Algorithm
    
    // Justify if {string} s is totally palindrome string
    var i
      , len = Math.floor(s.length / 2) + 1
      , isTotalPalindrome = true
  
    for (i = 0; i < len; i++) {
      if (s[i] != s[s.length - i - 1]) {
        isTotalPalindrome = false
        break;
      }
    }
    
    if (isTotalPalindrome) return s;
    
    // preprocess, make {string} s must contain a palindrome of odd length
    s = [].join.call(s, '#')
    s = '$#' + s + '#$'
  
    var p = []
      , C = 1
      , R = 1
      , iMirror
      , max = 0
      , maxIndex
    
    for (i = 1; i < s.length - 1; i++) {
      iMirror = 2 * C - i
      p[i] = (R > i) ? Math.min(R - i, p[iMirror]) : 1
  
      while (s[i - p[i]] == s[i + p[i]]) p[i]++
  
      if (i + p[i] > R) {
        R = i + p[i]
        C = i
      }
  
      if (p[i] > max) {
        max = p[i]
        maxIndex = i
      }
    }
  
    return s.substr(maxIndex - max + 1, 2 * max - 1).replace(/[$#]/g, '')
  }