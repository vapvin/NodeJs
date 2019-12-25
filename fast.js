'use strict'

// Curried Function

const getDiscount = rate => price => rate * price

const getTen = getDiscount(0.1)

getTen(price)
