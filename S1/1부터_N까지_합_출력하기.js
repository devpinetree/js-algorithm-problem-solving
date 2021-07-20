/**
 * 1부터 자연수 N(<20)까지의 합
 */

const solution = (N) => {
  let result = 0;

  for (let i = 1; i <= N; i++) {
    result += i;
  }

  return result;
};

solution(6); // 21
solution(10); // 55
