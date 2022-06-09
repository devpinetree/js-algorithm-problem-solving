/**
 * 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력
 */

function solution(n) {
  let answer = [];
  let check = new Array(n + 1).fill(0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + '';
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  console.log(answer);
  return answer;
}

solution(3);
/** 출력
123
12
13
1 23 2
3
 */
