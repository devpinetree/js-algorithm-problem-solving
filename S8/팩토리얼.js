/**
 * 자연수 N을 입력하면 N!값을 구하세요.
 * N! = n*(n-1)*(n-2)*.....*2*1입니다.
 */

function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * DFS(n - 1);
    }
  }
  answer = DFS(n);
  return answer;
}

solution(5); // 120
