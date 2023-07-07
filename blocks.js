function solution(blocks) {
    let longestDistance = 0;
    for (let i = 0; i < blocks.length; i++) {
      let currentDistance = 0;
      for (let j = i + 1; j < blocks.length; j++) {
        if (blocks[j] > blocks[i]) {
          currentDistance = j - i;
        }
      }
      for (let j = i - 1; j >= 0; j--) {
        if (blocks[j] > blocks[i]) {
          currentDistance = Math.max(currentDistance, i - j);
        }
      }
      longestDistance = Math.max(longestDistance, currentDistance);
    }
    return longestDistance;
  }