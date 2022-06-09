/**
 * 소문자로 된 단어(문자열)가 입력되면
 * 그 단어의 가운데 문자를 출력
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
 */

const solution = (str) => {
  let result = '';
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 !== 0) result = str.substring(mid, mid + 1);
  else result = str.substring(mid - 1, mid + 1);

  return result;
};

solution('study'); // u
solution('good'); // oo
