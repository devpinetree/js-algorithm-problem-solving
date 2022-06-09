/**
 * 오름차순으로 정렬이 된 두 배열이 주어지면
 * 두 배열을 오름차순으로 합쳐 출력
 * 투 포인터 알고리즘 사용
 */

function solution(arr1, arr2) {
  let answer = [];
  let arr1Length = arr1.length,
    arr2Length = arr2.length;
  let p1 = 0,
    p2 = 0;
  while (p1 < arr1Length && p2 < arr2Length) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < arr1Length) answer.push(arr1[p1++]);
  while (p2 < arr2Length) answer.push(arr2[p2++]);

  return answer;
}

solution([1, 3, 5], [2, 3, 6, 7, 9]);
