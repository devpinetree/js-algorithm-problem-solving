function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

function solution(nums) {
  let answer = 0;
  const set = new Set(nums);
  const uniqueNums = Array.from(set);
  const combiArr = getCombinations(uniqueNums, 3);

  for (let i = 0; i < combiArr.length; i++) {
    let sum = combiArr[i].reduce((a, b) => a + b);
    if (isPrime(sum)) answer++;
  }

  return answer;
}
