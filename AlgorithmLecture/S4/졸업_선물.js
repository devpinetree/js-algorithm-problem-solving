/**
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지
 * 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰 있음
 * 배송비는 할인에 포함되지 않습니다.
 * 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000) 상품의 가격과 배송비 입력
 * 상품가격은 짝수로만 입력됩니다.
 */

const solution = (N, M, gifts) => {
  let result = 0;

  gifts.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < N; i++) {
    let money = M - (gifts[i][0] / 2 + gifts[i][1]);
    let count = 1;

    for (let j = 0; j < N; j++) {
      let total = gifts[j][0] + gifts[j][1];
      if (j !== i && total > money) break;
      if (j !== i && total <= money) {
        money -= total;
        count++;
      }
    }
    result = Math.max(result, count);
  }
  return result;
};

solution(5, 28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]); // 4
