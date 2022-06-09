/**
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력
 * 출력하는 문자열은 원래의 입력순서를 유지
 */

const solution = (strList) => {
  // const setStr = new Set(strList);
  // return [...setStr];

  let result = strList.filter((s, i) => {
    if (strList.indexOf(s) === i) return s;
  });
  return result;
};

solution(['good', 'time', 'good', 'time', 'student']); // good time student
