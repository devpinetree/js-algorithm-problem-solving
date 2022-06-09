/**
 * 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다.
 * 같은 숫자의 카드가 여러장 있을 수 있습니다.
 * 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록,
 * 기록한 값 중 K번째로 큰 수를 출력
 * 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력
 */

const solution = (N, K, card) => {
  let tmp_max = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let x = j + 1; x < N; x++) {
        tmp_max.add(card[i] + card[j] + card[x]);
      }
    }
  }
  let sort_max = Array.from(tmp_max).sort((a, b) => b - a);
  return sort_max[K - 1];
};

solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]); // 143
