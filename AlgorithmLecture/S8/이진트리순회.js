/**
 * 이진트리를 전위순회와 후위순회를 연습해보세요.
 * 전위순회 출력 : 1 2 4 5 3 6 7 (부 왼 오)
 * 중위순회 출력 : 4 2 5 1 6 3 7 (왼 부 오)
 * 후위순회 출력 : 4 5 2 6 7 3 1 (왼 오 부)
 */

function solution(n) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + ' ';
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  console.log(answer);
  return answer;
}

solution(1);
