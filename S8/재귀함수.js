/**
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력
 * 재귀함수와 스택프레임
 */

function solution(n) {
  function DFS(l) {
    if (l === 0) return;
    else {
      DFS(l - 1);
      console.log(l);
    }
  }
  DFS(n);
}

solution(5);
