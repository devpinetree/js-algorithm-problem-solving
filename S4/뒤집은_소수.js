/**
 * N개의 자연수(<=100,000)가 입력되면 각 자연수를 뒤집은 후
 * 그 뒤집은 수가 소수이면 그 소수를 출력
 * 첫 자리부터의 연속된 0은 무시한다.
 */

const isPrime = (num) => {
  // 소수 판별
  if (num === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (numList) => {
  let result = [];

  for (let num of numList) {
    num = Number([...String(num)].reverse().join(''));
    if (isPrime(num)) {
      result.push(num);
    }
  }
  return result;
};

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]); // 23 2 73 2 3
