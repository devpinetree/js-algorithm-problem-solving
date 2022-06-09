/**
 * 자신의 바로 앞 수보다 큰 수만 출력
 * 첫 번째 수는 무조건 출력
 */

const solution = (numList) => {
  let result = [numList[0]];
  for (let i = 1; i < numList.length; i++) {
    if (numList[i] > numList[i - 1]) {
      result.push(numList[i]);
    }
  }
  return result;
};

solution([7, 3, 9, 5, 6, 12]); // 7 9 6 12
