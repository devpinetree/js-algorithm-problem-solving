/**
 * 친구들 N명의 결혼식 참석하는 시간정보 (몇 시에 도착해서 몇 시에 떠날 것인지)
 * 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수
 */

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];

  for (let x of arr) {
    timeLine.push([x[0], 's']);
    timeLine.push([x[1], 'e']);
  }
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let count = 0;
  for (let x of timeLine) {
    if (x[1] === 's') count++;
    else count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

solution([
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]); // 2
