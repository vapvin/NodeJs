'use strict'

let string = 'node.js 올인원 패키지'

let isStartWith = string.startsWith('n')

let isIncludes = string.includes(',')

let isisEndsWith = string.endsWith('지')


const checkIfContains = () => {
    if((isIncludes || isStartWith) && isisEndsWith ) {
        return true;
    }
}

const res = checkIfContains()

console.log(res)