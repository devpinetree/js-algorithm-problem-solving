/**
 * DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지
 * 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는
 * 1번과 5번 사이의 모든 노래(2, 3, 4)도 같은 DVD에 녹화해야 한다.
 * 또한 한 노래를 쪼개서 두 개의 DVD에 녹화할 수 없다.
 * 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다.
 * 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
 * 그리고 M개의 DVD는 모두 같은 크기여야 한다.
 * 이분검색 사용
 */

function countDVD(songs, capacity) {
  let count = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      count++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return count;
}

function solution(m, arr) {
  let answer = 0;

  let left = Math.max(...arr),
    right = arr.reduce((a, b) => a + b, 0);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (countDVD(arr, mid) <= m) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(answer);
  return answer;
}

solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // 17

// 설명 : 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다.
// 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.
