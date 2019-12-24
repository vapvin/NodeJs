'use strict'

const arr = [ 1, 2, 0, -1, -2]

const res = arr.some(key => key < 0 )
const res2 = arr.every(key => key > 0)

console.log(res)
console.log(res2)
