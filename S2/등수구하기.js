/**
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면
 * 각 학생의 등수를 입력된 순서대로 출력
 * 같은 점수가 입력될 경우 높은 등수로 동일 처리
 */

const solution = (scores) => {
  let len = scores.length;
  let result = Array.from({ length: len }, () => 1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (scores[j] > scores[i]) result[i]++;
    }
  }
  return result;
};

solution([87, 89, 92, 100, 76]); // 4 3 2 1 5
