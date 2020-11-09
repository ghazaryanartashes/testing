const fs = require('./test.js')

const f1 = fs.sum;
const f2 = fs.bLog;


let M = [
    [1,2],
    [3,4]
]

let H = [
    [5,6],
    [7,8]
]


let result = fs.sum(M, H);

console.log('Hello');