/**
 * 철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다.
 * 만약 총 4계단을 오른다면 그 방법의 수는 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2로 5가지이다.
 * 총 N(3≤N≤45)계단일 때 철수가 올라갈 수 있는 방법의 수 출력
 * 아주 작은 단위로 나누어 풀이 (점화식 만들기)
 */

function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  answer = dy[n];
  return answer;
}

solution(7); // 21
