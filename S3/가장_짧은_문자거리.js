/**
 * 한 개의 문자열 s(<100)와 문자 t가 주어지면 (소문자)
 * 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 순서대로 출력
 */

const solution = (str) => {
  let result = [];
  let p = 100;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') p = 0;
    else p++;
    result[i] = p;
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === 'e') p = 0;
    else p++;
    result[i] = result[i] > p ? p : result[i];
  }
  console.log(result);
  return result;
};

solution('teachermode', 'e'); // 1 0 1 2 1 0 1 2 2 1 0
