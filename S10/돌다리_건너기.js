/**
 * 개울에 N(3≤N≤45)개의 돌로 돌다리가 있습니다.
 * 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건널 수 있습니다.
 * 철수가 개울을 건너는 방법은 몇 가지일까요?
 * 주의! 개울을 건너야 하므로 n+1로 풀어야 한다.
 */

function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  (dy[1] = 1), (dy[2] = 2);

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  answer = dy[n + 1];
  return answer;
}

solution(7); // 34
