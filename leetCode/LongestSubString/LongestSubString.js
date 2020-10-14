function longestSubString(str) {
    let seen = {};
    let start = 0;
    let longest = 0;
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    return longest;
}

let lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let set = new Set();
    let maxSubstringLength = 0;
    
    while (right < s.length) {
        if (!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
            right++;
        } else {
            set.delete(s.charAt(left));
            left++;
        }
    }
    
    return maxSubstringLength;
};

// the first function is a frequency counter and it is 52% faster with about 50% memory
// the second function is a sliding window and it is 61% faster with about 42% memory