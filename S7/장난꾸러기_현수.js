/**
 * 제일 앞에 키가 가장 작은 학생부터 반 번호를 1번부터 N번까지 부여
 * 현수는 짝꿍보다 키가 큽니다.
 * 그런데 현수가 앞 번호를 받고 싶어 짝꿍과 자리를 바꿨습니다.
 * 현수와 짝꿍이 자리를 바꾼 반 학생들의 일렬로 서있는 키 정보가 주어질 때
 * 현수가 받은 번호와 현수 짝꿍이 받은 번호를 차례로 출력
 */

function solution(students) {
  let answer = [];
  let sortArr = students.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < students.length; i++) {
    if (students[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

solution([120, 125, 152, 130, 135, 135, 143, 127, 160]); // 3 8
// 출력해설 : 키 정보 152가 현수이고, 127이 현수 짝꿍입니다.
solution([120, 130, 150, 150, 130, 150]); // 3 5
