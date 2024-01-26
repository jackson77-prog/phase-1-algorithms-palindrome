// Write your algorithm here
const isPalindrome = (str) => {
  // Convert the string to lowercase to handle case-insensitivity
  const lowerStr = str.toLowerCase();

  // Reverse the string
  const reversedStr = lowerStr.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  return lowerStr === reversedStr;
}

/* 
  Add your pseudocode here
  1. Convert the input string to lowercase (handle case-insensitivity).
  2. Reverse the string.
  3. Check if the reversed string is equal to the original string.
  4. Return the result (true if it's a palindrome, false otherwise).
*/

/*
  Add written explanation of your solution here
  The function converts the input string to lowercase to ensure case-insensitivity.
  It then reverses the string using split, reverse, and join methods.
  Finally, it compares the reversed string with the original string and returns true if they are equal (a palindrome), or false if they are not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
