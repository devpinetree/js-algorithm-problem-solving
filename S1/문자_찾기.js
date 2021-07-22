/**
 * 한 개의 문자열(<=100)을 입력받고,
 * 특정 문자를 입력받아
 * 해당 특정문자가 입력받은 문자열에 몇 개인가
 */

const solution = (str, c) => {
  let result = 0;
  for (let s of str) {
    if (s === c) result++;
  }
  console.log(result);
  return result;
};

solution('COMPUTERPROGRAMMINGRR', 'R'); // 5
