/**
 * N개의 자연수(<=10,000,000)가 입력되면
 * 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 출력
 */
const digitSum = (num) => {
  numArr = [...String(num)];
  return numArr.reduce((a, b) => Number(a) + Number(b));
};

const solution = (numList) => {
  let result = 0,
    sum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numList.length; i++) {
    if (sum < digitSum(numList[i])) {
      sum = digitSum(numList[i]);
      result = numList[i];
    }
    if (sum === digitSum(numList[i])) {
      result = result > numList[i] ? result : numList[i];
    }
  }

  console.log(result);
  return result;
};

solution([128, 460, 603, 40, 521, 137, 123]); // 137
