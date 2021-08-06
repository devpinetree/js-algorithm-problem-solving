/**
 * 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다.
 * 그리고 1번 왕자부터 N 번 왕자까지 순서대로 시계 방향으로 돌아가며
 * 1부터 시작하여 한 왕자가 K(특정숫자)를 외치면 그 왕자는 제외
 * 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
 * 이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.
 */

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

solution(8, 3); // 7
