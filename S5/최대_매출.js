/**
 * 연속된 K일 동안의 최대 매출액 출력
 * 매출기록 12 15 11 20 25 10 20 19 13 15
 * 연속된 3일간의 최대 매출액은 11 + 20 + 25 = 56만원
 * 슬라이딩 윈도우 기법
 */

function solution(k, arr) {
  let answer = 0,
    sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
