/**
 * 중복 순열
 * 1부터 N까지 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력
 */

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ legnth: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  console.log(answer);
  return answer;
}

solution(3, 2);
