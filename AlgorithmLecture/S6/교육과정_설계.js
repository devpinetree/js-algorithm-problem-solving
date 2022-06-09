/**
 * 총 과목이 A, B, C, D, E, F, G가 있고,
 * 여기서 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며
 * 이 순서대로 꼭 수업계획을 짜야 합니다.
 * 큐
 */

function solution(compulsory, subjects) {
  let queue = compulsory.split('');

  for (let subject of subjects) {
    if (queue.includes(subject)) {
      if (subject !== queue.shift()) return false;
    }
  }
  if (queue.length > 0) return false;
  return true;
}

solution('CBA', 'CBDAGE'); // true
