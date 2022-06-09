/**
 * 7*7 격자판 미로를 탈출하는 경로의 수를 출력
 * 출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다.
 * 격자판의 1은 벽 / 0은 통로이고, 상하좌우로만 움직인다.
 */

function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0],
    dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);

  console.log(answer);
  return answer;
}

solution([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
]); // 8
