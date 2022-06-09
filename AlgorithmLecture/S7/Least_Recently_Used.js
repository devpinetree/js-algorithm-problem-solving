/**
 * 캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면
 * N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하시오.
 * LRU 알고리즘: 가장 오랫동안 사용하지 않은 것을 제거
 * 1) Cache Miss : 해야할 작업이 캐시에 없는 상태로 작업이 들어오면 가장 뒤에 있는 것을 제거
 * 2) Cache Hit : 해야할 작업이 캐시에 있는 상태로 작업이 들어오면 그 작업을 맨 앞으로 오고, 그 앞에 있었던 작업들은 한 칸 씩 밀린다.
 */

function solution(cacheSize, arr) {
  let answer = new Array(cacheSize).fill(0);

  arr.forEach((x) => {
    let pos = -1;

    for (let i = 0; i < cacheSize; i++) {
      if (x === answer[i]) pos = i;
    }

    if (pos === -1) {
      for (let i = cacheSize - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]); // [7, 5, 3, 2, 6]
