/**
 * N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬
 * 정렬기준은 먼저 x값의 의해서 정렬하고,
 * x값이 같을 경우 y값에 의해 정렬합니다.
 */

function solution(arr) {
  let answer = arr;

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}

solution([
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
]);

/**
 * 출력:
1 2
1 3
2 5
2 7 
3 6
 */
