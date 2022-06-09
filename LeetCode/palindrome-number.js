/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  // 1. Change x into Array
  const arr = [...String(x)];

  // 2. Check if first char and last char is same (while loop)
  while (arr.length > 1) {
    if (arr[0] === arr[arr.length - 1]) {
      arr.pop();
      arr.shift();
    } else {
      return false;
    }
  }

  return true;
};

// isPalindrome(1000021);
