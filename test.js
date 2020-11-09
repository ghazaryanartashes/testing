function bLog(matrix) {
    for(let i = 0; i < matrix.length; ++i) {
        console.log(matrix[i]);
    }
}


function sum(A, B) {
    // let blank = ...
    for (let i = 0; i < A.length; ++i) {
        for (let j = 0; j < A[i].length; ++j) {
            B[i][j] += A[i][j]
        }   
    }
    return B;
}

let M = [
    [1,2],
    [3,4]
]

let H = [
    [5,6],
    [7,8]
]


module.exports = {
    sum,
    bLog
}
