/**
 * 재귀를 이용해 조합수를 구해주는 프로그램을 작성
 * 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
 */

function solution(n, r) {
  let answer;

  function DFS(n, r) {
    if (r === 0 || n === r) {
      return 1;
    } else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  answer = DFS(n, r);
  //   console.log(answer);
  return answer;
}

solution(5, 3); // 10
