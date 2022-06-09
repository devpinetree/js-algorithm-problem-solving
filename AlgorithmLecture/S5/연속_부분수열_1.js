/**
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우의 수
 * 만약 N=8, M=6이고 수열이 다음과 같다면
 * 1 2 1 3 1 1 1 2
 * 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
 */

function solution(m, arr) {
  let answer = 0;
  let left = 0,
    sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[left++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

solution(6, [1, 2, 1, 3, 1, 1, 1, 2]);
