'use strict'

// Curried Function

const getDiscount = ( price, rate=0.1 ) => price * rate


const res = getDiscount(10000)
const res2 = getDiscount(20000)
const res3 = getDiscount(40000)
const res4 = getDiscount(50000)
const res5 = getDiscount(60000)

console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)