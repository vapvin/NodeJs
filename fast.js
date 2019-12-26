'use strict'

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2000), 2000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('즉시'), 0)
})

Promise.race([ promise1, promise2]).then(value => console.log(value))