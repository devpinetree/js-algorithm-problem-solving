/**
 * 두 단어가 아나그램인지 판별
 * Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만
 * 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
 * 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만
 * 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치
 */

function solution(str1, str2) {
  let answer = true;
  let str1Hash = new Map();

  for (let s of str1) {
    if (str1Hash.has(s)) {
      str1Hash.set(s, str1Hash.get(s) + 1);
    } else {
      str1Hash.set(s, 1);
    }
  }
  for (let s of str2) {
    if (!str1Hash.has(s) || str1Hash.get(s) === 0) {
      return false;
    }
    str1Hash.set(s, str1Hash.get(s) - 1);
  }
  return answer;
}

solution('AbaAeCe', 'baeeACA');
