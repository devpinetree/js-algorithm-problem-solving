/**
 * - 100 이하 자연수 3개 입력받아 가장 작은 값 구하기
 * - 정렬 사용 X
 */

const solution = (a, b, c) => {
  let result = 0;

  if (a < b) result = a;
  else result = b;
  if (c < result) result = c;

  return result;
};

solution(6, 5, 11); // 5
