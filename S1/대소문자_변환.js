/**
 * 문자열(<=100)을 입력받아
 * 대문자는 소문자로, 소문자는 대문자로 변환하여 출력
 */

const solution = (str) => {
  let result = '';
  for (let s of str) {
    if (s === s.toUpperCase()) result += s.toLowerCase();
    else result += s.toUpperCase();
  }
  return result;
};

solution('StuDY'); // sTUdy
