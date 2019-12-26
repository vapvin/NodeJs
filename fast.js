'use strict'

const timeout = setTimeout(()=>{
    console.log('first')
}, 0)

const immediate = setImmediate(()=>{
    console.log('second')
})

const interval = setInterval(()=>{
    console.log('third')
}, 1000)

clearTimeout(timeout)
clearImmediate(immediate)
clearInterval(interval)