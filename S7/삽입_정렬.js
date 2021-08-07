/**
 * 오름차순 삽입 정렬
 */

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  console.log(answer);
  return answer;
}

solution([11, 7, 5, 6, 10, 9]);
