'use strict'

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