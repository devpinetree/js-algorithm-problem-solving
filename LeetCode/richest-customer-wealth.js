/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  let arr = [];
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    arr.push(sum);
  }
  return Math.max(...arr);
};

maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
