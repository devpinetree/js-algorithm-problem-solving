/**
 * N개의 정수들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수 출력
 * 예를 들면 5개의 숫자 [2, 4, 5, 8, 12]가 주어지고,
 * 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면
 * (4 + 8 + 12), (2 + 4 + 12)로 2가지가 있습니다.
 */

function solution(n, r, arr, mulNum) {
  let answer = 0;

  function DFS(L, s, sum) {
    if (L === r) {
      if (sum % mulNum === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  console.log(answer);
  return answer;
}

solution(5, 3, [2, 4, 5, 8, 12], 6); // 2
