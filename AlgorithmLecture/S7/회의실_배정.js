/**
 * 한 개의 회의실, n개의 회의들
 * 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고,
 * 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의
 */

function solution(meeting) {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
}

solution([
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]); // 3

solution([
  [3, 3],
  [1, 3],
  [2, 3],
]); // 2
