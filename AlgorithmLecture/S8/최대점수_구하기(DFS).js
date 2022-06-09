/**
 * 제한시간 M 안에 N개의 문제 중 최대 점수 구하기
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어짐
 */

function solution(m, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, score, time) {
    if (time > m) return;

    if (L === n) {
      answer = Math.max(answer, score);
    } else {
      DFS(L + 1, score + arr[L][0], time + arr[L][1]);
      DFS(L + 1, score, time);
    }
  }
  DFS(0, 0, 0);

  return answer;
}

solution(20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]); //41
