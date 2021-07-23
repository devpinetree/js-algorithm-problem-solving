/**
 * 반 학생 수 N(1<=N<=20) 테스트 횟수 M(1<=M<=10)
 * M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다.
 * 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순
 * M번의 테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력
 */

const solution = (scoreRank) => {
  let result = 0;
  let n = scoreRank[0].length;
  let m = scoreRank.length;

  for (let i = 1; i <= n; i++) {
    // 멘토
    for (let j = 1; j <= n; j++) {
      // 멘티
      let count = 0;
      for (let k = 0; k < m; k++) {
        // 멘토 등수 위치, 멘티 등수 위치
        let pi = 0,
          pj = 0;

        for (let s = 0; s < n; s++) {
          // 각 등수
          if (scoreRank[k][s] === i) pi = s;
          if (scoreRank[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === m) result++;
    }
  }
  return result;
};

solution([
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]); // 3
