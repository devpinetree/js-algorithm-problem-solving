/**
 * 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때,
 * 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수
 * 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.
 */

const solution = (students) => {
  let result = 1,
    max = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i] > max) {
      result++;
      max = students[i];
    }
  }
  return result;
};

solution([130, 135, 148, 140, 145, 150, 150, 153]); // 5
