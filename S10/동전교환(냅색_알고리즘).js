/**
 * 여러 단위의 동전들이 주어져 있을때 거스름돈을
 * 가장 적은 수의 동전으로 교환, 각 단위의 동전은 무한정 쓸 수 있다.
 * 동전의 종류가 100개라거나 금액이 10만원 등... DFS로 오래 걸리는 문제는 재귀가 아니라 다이나믹으로 판단
 * 거슬러 줄 금액 M(1<=M<=500), 각 동전의 종류는 100원을 넘지 않는다.
 */

function solution(coins, m) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 500); // 거슬러 주는 데 사용될 최소 개수
  dy[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= m; i++) {
      dy[i] = Math.min(dy[i], dy[i - coin] + 1);
    }
  }
  answer = dy[m];
  //   console.log(answer);
  return answer;
}

solution([1, 2, 5], 15); // 3
