var A = [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0];
var B = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
var C = new Array(A.length + 1).fill(0);

/*
 * My first brute force solution, I use it over conditional statemets
 * with that I undertand the correct solutions... also I had other ideas
 * that I used.
 */
var carry = 0;
for (let i = A.length - 1; i >= 0; i--) {
    var plus = A[i] + B[i] + carry;
    if (plus == 3) {
        C[i] = 1;
        C[i + 1] = 1;
    } else if (plus == 2) {
        carry = 1;
        C[i + 1] = 0;
    } else {
        carry = 0;
        C[i + 1] = plus;
    }
}
console.log(C);

/*
 * Implementing cormen solutions to Introduction to algorithms.
 */
carry = 0;
C = new Array(A.length + 1).fill(0);
for (let i = A.length - 1; i >= 0; i--) {
    C[i + 1] = (A[i] + B[i] + carry) % 2;;
    if (A[i] + B[i] + carry >= 2) {
        carry = 1;
    } else {
        carry = 0;
    }
}
C[0] = carry;
console.log(C);