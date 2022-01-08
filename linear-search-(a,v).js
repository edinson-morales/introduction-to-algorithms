var v = 89;
var A = [1, 4, 2, 5, 6, 7, 89, 45, 45, 54, 3, 4];

var index = null;
for (let i = 0; i < A.length; i++) {
    if (A[i] == v) {
        index = i;
        break;
    }
}

console.log("Linear search in (A,v)", A, v);
console.log("The index value is:", index);