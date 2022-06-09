/**
 * 회문 문자열: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열
 * 회문 문자열이면 "YES", 아니면 “NO"를 출력
 * 단 대소문자를 구분하지 않음 (<100)
 */

const solution = (str) => {
  let result = 'YES';
  str = str.toLowerCase();
  let len = str.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) result = 'NO';
  }
  return result;
};

// solution('gooG'); // YES
solution('goaoG'); // YES
