/**
 * A, B 두 사람이 N번 가위바위보 게임
 * A가 이기면 A를 출력하고, B가 이기면 B를 출력
 * 비길 경우에는 D를 출력
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보
 */

const solution = (a, b) => {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) result += 'D';
    else if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    )
      result += 'A';
    else result += 'B';
  }
  return result;
};

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]); // ABABD
