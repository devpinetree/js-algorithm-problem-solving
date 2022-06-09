/**
 * 6월 1일부터 자동차 10부제 시행
 * 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지
 * 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력
 */

const solution = (day, carNumbers) => {
  let result = 0;
  for (let car of carNumbers) {
    if (car % 10 === day) result++;
  }
  return result;
};

solution(3, [25, 23, 11, 47, 53, 17, 33]); // 3
solution(0, [12, 20, 54, 30, 87, 91, 30]); // 3
