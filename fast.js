'use strict'

const dns = require('dns')

const fs = require('fs')
const { promisify } = require('util')


const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)

const writeAndRead = async (data = '') => {

    try {
        await write('test.txt', data)
        const content = await read('test.txt')
        return content
    } catch (e) {
        console.error(e)
    }
} 

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
    
})

const content = 'Something to write'

fs.writeFile('fast.txt', content, err => {
    if(err) {
        console.error(err)
        return
    }

    console.log('Success')
})