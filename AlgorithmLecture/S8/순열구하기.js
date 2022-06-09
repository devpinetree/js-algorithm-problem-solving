/**
 * 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아
 * 일렬로 나열하는 방법을 모두 출력
 * 일반 순열 (중복 X) - 체크 필요
 */

function solution(n, m, arr) {
  let answer = [];
  let check = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);
  console.log(answer);
  return answer;
}

solution(3, 2, [3, 6, 9]);
/**
출력 결과
3 6
3 9
6 3
6 9 
9 3 
9 6 
(6가지)
 */
