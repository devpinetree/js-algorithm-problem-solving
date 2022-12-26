function solution(nums) {
  let result = 0,
    monCnt = nums.length / 2;
  const set = new Set(nums);
  const uniqueMon = [...set];
  result = uniqueMon.length < monCnt ? uniqueMon.length : monCnt;
  return result;
}
