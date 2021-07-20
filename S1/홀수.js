/**
 * 7개의 자연수(<100) 중 홀수의 합, 홀수 중 최소값
 */
const solution = (numbers) => {
  let odd = [],
    min = 0,
    sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      odd.push(numbers[i]);
    }
  }
  min = Math.min.apply(null, odd);
  sum = odd.reduce((a, b) => a + b);

  console.log(sum, min);
  return;
};

solution([12, 77, 38, 41, 53, 92, 85]); // 256 41
