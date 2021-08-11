/**
 * 1부터 N까지 번호가 적힌 구슬 중 M개를 뽑는 방법의 수를 출력
 */

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    if (L === m) answer.push(tmp.slice());
    else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  console.log(answer);
  return answer;
}

solution(4, 2);
/**
출력 결과
1 2
1 3
1 4
2 3 
2 4 
3 4 
(6가지)
 */
