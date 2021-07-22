/**
 * 한 개의 문자열을 입력
 * 알파벳 대문자 개수
 */

const solution = (str) => {
  let result = 0;
  for (let s of str) {
    if (s === s.toUpperCase()) result++;
  }
  return result;
};

solution('KoreaTimeGood'); // 3
