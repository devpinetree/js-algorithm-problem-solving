/**
 * N개의 문자열이 입력되면
 * 그 중 가장 긴 문자열(<=100)을 출력
 */

const solution = (strList) => {
  let result = '',
    max = Number.MIN_SAFE_INTEGER;
  for (let str of strList) {
    if (str.length > max) {
      max = str.length;
      result = str;
    }
  }
  return result;
};

solution(['teacher', 'time', 'student', 'beautiful', 'good']); // beautiful
