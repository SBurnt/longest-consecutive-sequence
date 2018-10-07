module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;

  array.sort((a, b) => a - b);
  let maxConsecutiveLength = 1;
  let count = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) continue;
    if ((array[i] + 1) == array[i + 1]) {
      count++;
    } else {
      if (count > maxConsecutiveLength) {
        maxConsecutiveLength = count;
      }
      count = 1;
    }
  }
  return maxConsecutiveLength;
}