/**
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력
 * 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
 */

const solution = (str) => {
  // const setStr = new Set(str);
  // return [...setStr].join('');

  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) result += str[i];
  }
  return result;
};

solution('ksekkset'); // kset
