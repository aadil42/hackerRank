function getIndividualHourGlassSum(arr, r, c) {

    let currSum = 0;
    const skipIndices = new Set([
        `${r+1}-${c}`,
        `${r+1}-${c+2}`
    ]);

    for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
            if (skipIndices.has(`i-j`)) continue;
            currSum += arr[i][j];
        }
    }

    return currSum;
}
/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let max = -Infinity;
    const ROW = arr.length - 2;
    const COL = arr[0].length - 2;
    alert("haha");
    debugger;
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            max = Math.max(max, getIndividualHourGlassSum(arr, r,c));
        }
    }
    return max;
}

// src/hourglass.ts
const grid = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];
const result = hourglassSum(grid);
