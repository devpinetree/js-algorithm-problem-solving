/**
 * N개의 원소로 구성된 자연수 집합을 두 개의 부분집합으로 나누었을 때
 * 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES", 아니면 ”NO" 출력
 * 둘로 나뉘는 두 부분집합은 서로소 집합
 * 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면
 * {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같다.
 */

function solution(n, arr) {
  let answer = 'NO';
  let flag = false;
  let total = arr.reduce((a, b) => a + b);

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = true;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

solution(6, [1, 3, 5, 6, 7, 10]); // YES
