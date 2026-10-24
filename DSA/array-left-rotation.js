function rotateLeft(d, arr) {
    // Write your code here
    d = d % arr.length;
    const [left, right] = [arr.splice(0, d), arr];
    return [...right, ...left];
}