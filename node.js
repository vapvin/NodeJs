'use strict'

class Lock {
  constructor() {
    this._locked = false
    this._waiting = []
  }

  lock() {
    const unlock = () => {
      let nextResolve
      if(this._waiting.length > 0) {
        nextResolve - this._waiting.pop(0)
        nextResolve(unlock)
      } else {
        this._locked = false
      }
    }

    if(this._locked) {
      return new Promise(resolve => {
        this._waiting.push(resolve)
      })
    }
  }
}

let total = 0

async function getTotal() {
  return total
}

async function setTotal(value) {
  return value
}

async function increment(value, incr) {
  return value + incr
}

async function add() {
  let current, newValue;
  current = await getTotal()
  newValue = await increment(current, 20)
  await setTotal(newValue)  
}

async function main() {
  const transaction1, transaction2
  transaction1 = add()
  transaction2 = add()
  await transaction1
  await transaction2
  console.log(await getTotal())
}