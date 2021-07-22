/**
 * OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다.
 * 1번 문제가 맞는 경우에는 1점으로 계산한다.
 * 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산
 * 또한, 연속으로 문제의 답이 맞는 경우 두 번째 문제는 2점, ..., K번째 문제는 K점으로 계산
 * 틀린 문제는 0점으로 계산
 */

const solution = (scores) => {
  let result = 0,
    combo = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
      combo = 0;
    } else {
      combo++;
      result += combo;
    }
  }
  return result;
};

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]); // 10
