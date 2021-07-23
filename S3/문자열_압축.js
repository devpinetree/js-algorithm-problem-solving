/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우,
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하여 문자열을 압축
 * 단 반복횟수가 1인 경우 생략
 */

const solution = (str) => {
  let result = '';
  let count = 1;
  str = str + ' ';

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      result += str[i] + (count > 1 ? String(count) : '');
      count = 1;
    }
  }
  return result;
};

solution('KKHSSSSSSSE'); // K2HS7E
