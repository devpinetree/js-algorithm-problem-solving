/**
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수
 * 아나그램 판별시 대소문자가 구분됩니다.
 * 부분문자열은 연속된 문자열이어야 합니다.
 * 해쉬, 투포인터, 슬라이딩 윈도우
 */
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sHash = new Map();
  let tHash = new Map();

  for (let x of t) {
    if (tHash.has(x)) tHash.set(x, tHash.get(x) + 1);
    else tHash.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sHash.has(s[i])) sHash.set(s[i], sHash.get(s[i]) + 1);
    else sHash.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // 슬라이딩 윈도우
    if (sHash.has(s[rt])) {
      sHash.set(s[rt], sHash.get(s[rt]) + 1);
    } else {
      sHash.set(s[rt], 1);
    }
    if (compareMaps(sHash, tHash)) answer++;
    sHash.set(s[lt], sHash.get(s[lt]) - 1);
    if (sHash.get(s[lt]) === 0) sHash.delete(s[lt]);
    lt++;
  }
  console.log(answer);

  return answer;
}

solution('bacaAacba', 'abc');
