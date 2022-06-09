/**
 * 문자와 숫자가 섞여있는 문자열이 주어지면
 * 그 중 숫자만 추출하여 그 순서대로 자연수 출력(<100,000,000)
 */

const solution = (str) => {
  let result = '';

  for (let s of str) {
    if (!isNaN(s)) {
      result = result * 10 + Number(s);
    }
  }
  return result;
};

solution('g0en2T0s8eSoft'); // 208
