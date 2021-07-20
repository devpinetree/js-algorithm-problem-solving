/**
 * 연필 1다스 = 12자루
 * 1000명 이하의 학생 N명이 1자루씩 연필을 받기 위한 다스 수
 */

const solution = (N) => {
  // 학생수 / 12자루 한 값을 올림
  return Math.ceil(N / 12);
};

solution(25);
solution(178);
