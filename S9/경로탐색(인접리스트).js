/**
 * 인접리스트: 노드 개수가 많을 때 적용
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 수를 출력
 * 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
 * 1 2 3 4 5
 * 1 2 5
 * 1 3 4 2 5
 * 1 3 4 5
 * 1 4 2 5
 * 1 4 5
 * 총 6가지
 */

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1;
          DFS(graph[v][i]);
          check[graph[v][i]] = 0;
        }
      }
    }
  }
  check[1] = 1;
  DFS(1);
  console.log(answer);
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
