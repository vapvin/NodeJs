'use strict'

const CustomError = message => {
    this.message = message
    this.type = 'NotImageFileException'
}

try {
    const imgTypes = ['.jpg', '.png', '.gif']
    const filename = 'fast.doc'

    const isImageFile = imgTypes.find(ext => filename.endsWith(item))

    if(!isImageFile) {
        throw new CustomError("This is not an image file")
    }

} catch (e) {
    console.error(e)
}