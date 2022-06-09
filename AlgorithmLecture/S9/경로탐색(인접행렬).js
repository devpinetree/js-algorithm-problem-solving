/**
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는
 * 모든 경로의 가지 수를 출력
 * 입력: 정점의 수 N(1<=N<=20), M줄에 걸쳐 연결정보
 */

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && check[i] === 0) {
          check[i] = 1;
          DFS(i);
          check[i] = 0;
        }
      }
    }
  }
  check[1] = 1;
  DFS(1);
  return answer;
}

solution(5, [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]); // 6
