function lengthOfLongestSubstring(s) {
    let i = 0;
    let j = 0;
    let maxLength = 0;
    let charSet = new Set();

    while (j < s.length) {
        if (!charSet.has(s[j])) {
            charSet.add(s[j++]);
            maxLength = Math.max(maxLength, j - i);
        } else {
            charSet.delete(s[i++]);
        }
    }

    return maxLength;
}
let s = "pwwkew"
console.log(lengthOfLongestSubstring(s)); // Output: 3