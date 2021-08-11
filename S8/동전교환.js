/**
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때
 * 거스름돈을 가장 적은 수의 동전으로 교환하고 동전 개수 출력
 * 각 단위의 동전 개수 제한은 없음
 * 중복순열
 */

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  // console.log(answer);
  return answer;
}

solution(15, [1, 2, 5]); // 3
