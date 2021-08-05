/**
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M 이하가 되는 경우의 수
 * 만약 N=5, M=5이고 수열이 다음과 같다면
 * 1 3 1 2 3 합이 5 이하가 되는 연속부분수열은
 * {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.
 */

function solution(m, arr) {
  let answer = 0;
  let left = 0,
    sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > m) {
      sum -= arr[left++];
    }
    answer += right - left + 1;
  }
  return answer;
}

solution(5, [1, 3, 1, 2, 3]);
