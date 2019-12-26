'use strict'

const dns = require('dns')

const fs = require('fs')
const { promisify } = require('util')


const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)

const writeAndRead = async (data = '') => {

    try {
        await write('test.txt', data)
        return (await read('test.txt'))
    } catch (e) {
        console.error(e)
    }
} 

writeAndRead('Something to write')