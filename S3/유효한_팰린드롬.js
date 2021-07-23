/**
 * 팰린드롬: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열
 * 팰린드롬이면 "YES", 아니면 “NO"를 출력
 * 단 알파벳 이외의 문자는 무시합니다.
 */

const solution = (str) => {
  let result = 'YES';
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str !== str.split('').reverse().join('')) result = 'NO';
  return result;
};

solution('found7, time: study; Yduts; emit, 7Dnuof'); // YES
