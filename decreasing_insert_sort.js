var A = [3, 1, 2, 9, 1, 7, 2, 0, 4, 5, 7]

for (let j = 2; j < A.length; j++) {
    var key = A[j];
    var i = j - 1;

    while (i > 0 && A[i] < key) {
        A[i + 1] = A[i];
        i = i - 1;
    }
    A[i + 1] = key;
}

console.log("Decreasing insert sort algorithm");
console.log(A);