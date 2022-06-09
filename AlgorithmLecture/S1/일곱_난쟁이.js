/**
 * 일곱 난쟁이의 키의 합 = 100
 * 주어지는 키는 100을 넘지 않는 자연수
 * 아홉 난쟁이의 키는 모두 다르며,
 * 가능한 정답이 여러 가지인 경우에는 아무거나 출력
 */
const solution = (dwarfs) => {
  let answer = dwarfs;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
};

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]); // 20 7 23 19 10 8 13
