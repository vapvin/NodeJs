'use strict'

const genObj {
    *gen() {
        //Lazy loading
        let cnt = 0
        yield ++cnt
    }
}

const gen = genObj.gen()

console.log(gen.next())
console.log(gen.next())