/**
 * 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)
 * 각 문제는 그것을 풀었을 때 얻는 점수, 푸는데 걸리는 시간이 주어짐
 * 제한시간 M안에 N개의 문제 중 최대점수 출력
 */
function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let iScore = arr[i][0];
    let iTime = arr[i][1];
    for (let j = m; j >= iTime; j--) {
      dy[j] = Math.max(dy[j], dy[j - iTime] + iScore);
    }
  }
  answer = dy[m];
  //   console.log(answer);
  return answer;
}

solution(20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]); // 41
