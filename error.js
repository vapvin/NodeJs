'use strict'

const CustomError = (message, type) => {
    message: `Error: ${message}`
    type: `API::${type}`
}

const whitelist = ['.gif', '.jpg', '.png']

const data = []

const isValidFiles = data => {
    data.forEach(item => {
        const ret = whitelist.find(_item => item.endsWith(_item))

        if (ret) return true
        return false
    })
} 

if (!isValidFiles(['filename.pptx'])) {

    throw new CustomError('isValidImageFiles', 'invalidRequest')
}