/**
 * 대문자로 이루어진 영어단어가 입력되면
 * 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력
 */

const solution = (str) => {
  let result = '';
  for (let s of str) {
    if (s === 'A') result += '#';
    else result += s;
  }
  return result;
};

solution('BANANA'); // B#N#N#
