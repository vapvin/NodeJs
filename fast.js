'use strict'

const arr = [1,2,3]
const brr = [4,5,6]

const crr = [
    ...arr,
    ...brr
]



console.log(arr)
console.log(brr)
console.log(crr)


const abj = {
    name: "block",
    age: 31
}

const bbj = {
    nick: "inline",
    num: 7
}

const cbj = {
    ...abj,
    ...bbj
}

console.log(abj)
console.log(bbj)
console.log(cbj)

// Hoisting

console.log(a)
var a = 1;

//console.log(b)
//let b = 3;

fc()

function fc() {
    console.log("Hello World")
}