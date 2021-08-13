/**
 * N개의 자연수로 이루어진 수열이 주어졌을 때,
 * 그 중에서 가장 길게 증가하는(작은 수에서 큰 수로) 원소들의 집합을 찾아 부분증가수열의 최대 길이를 출력
 * 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3 이면 가장 길게 증가하도록 원소들을 차례대로 뽑아내면
 * 2, 5, 6, 7, 12를 뽑아내어 길이가 5인 최대 부분증가수열을 만들 수 있다.
 * LIS
 */

function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    // console.log(dy);
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  //   console.log(answer);
  return answer;
}

// solution([2, 7, 5, 8, 6, 4, 7, 12, 3]); // 5
solution([5, 3, 7, 8, 6, 2, 9, 4]); // 4
