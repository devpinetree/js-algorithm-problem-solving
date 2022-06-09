/**
 * 기호 A, B, C, D, E 후보
 * 투표용지 개표 후 어떤 기호의 후보가 학급 회장이 되었는지 출력
 * 해쉬 알고리즘
 */

function solution(str) {
  let answer;
  let strHash = new Map();
  for (let s of str) {
    if (strHash.has(s)) {
      strHash.set(s, strHash.get(s) + 1);
    } else {
      strHash.set(s, 1);
    }
    // console.log(strHash);
    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, val] of strHash) {
      if (val > max) {
        max = val;
        answer = key;
      }
    }
  }
  //   console.log(answer);

  return answer;
}

solution('BACBACCACCBDEDE');
