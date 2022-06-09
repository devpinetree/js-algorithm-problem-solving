/**
 * 100 이하 자연수 3개 입력받아 각 막대로 삼각형을 만들 수 있는지
 */
const solution = (a, b, c) => {
  let result = 'NO';
  let max;

  // 최대값
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  // max = Math.max(a, b, c);

  if (c * c === a * a + b * b) result = 'YES';
  return result;
};

solution(6, 7, 11);
solution(3, 4, 5);
