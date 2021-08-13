/**
 * 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어진다.
 * 현수는 현재 위치에서 송아지의 위치까지 이동한다.
 * 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
 * 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 출력
 * 최소/최단 거리는 BFS
 */

function solution(hyunsoo, cow) {
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  ch[hyunsoo] = 1;
  queue.push(hyunsoo);
  dis[hyunsoo] = 0;

  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === cow) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

console.log(solution(5, 14)); // 3
// console.log(solution(8, 3)); // 5
