function solution(numbers) {
  let answer = [];
  let sumSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumSet.add(numbers[i] + numbers[j]);
    }
  }

  answer = Array.from(sumSet).sort((a, b) => a - b);
  return answer;
}
