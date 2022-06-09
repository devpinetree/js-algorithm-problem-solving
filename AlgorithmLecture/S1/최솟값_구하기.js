/**
 * 7개의 주어진 수 중 가장 작은 수
 */

const solution = (numbers) => {
  return Math.min.apply(null, numbers);
};

solution([5, 3, 7, 11, 2, 15, 17]);
