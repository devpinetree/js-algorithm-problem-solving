/**
 * N개의 마구간에 C마리의 말이 수직선상에 있습니다.
 * 각 마구간은 x1, x2, x3, ......, xN의 중복되지 않는 좌표를 가지며,
 * 각 마구간에는 한 마리의 말만 넣을 수 있고, C마리의 말을 N개의 마구간에 배치했을 때
 * 가장 가까운 두 말의 거리가 최대가 되는 최대값을 출력
 * 결정 알고리즘 이분 검색
 */
function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  console.log(answer);
  return answer;
}

solution(3, [1, 2, 4, 8, 9]); // 3
