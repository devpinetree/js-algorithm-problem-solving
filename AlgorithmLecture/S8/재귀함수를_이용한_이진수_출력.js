/**
 * 10진수 N이 입력되면 2진수로 변환하여 출력
 * 단 재귀함수를 이용
 */

function solution(n) {
  let answer = '';

  function DFS(l) {
    if (l === 0) return;
    else {
      DFS(parseInt(l / 2));
      answer += String(l % 2);
    }
  }
  DFS(n);

  return answer;
}

solution(11); // 1011
