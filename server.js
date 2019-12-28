'use strict'

const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const http = require('http')
const helmet = require('helmet')
const static = require('serve-static')

class ApiServer extends http.Server {
    constructor (config) {
        const app = express()
        super(app)
        this.config = config
        this.app = app
        this.currentConns = new Set()
        this.busy = new WeakSet()
        this.stopping = false
        this.app.static = static
    }

    async start() {
        this.app.use(helmet())
        this.app.use(cookieParser())
        this.app.use(bodyParser())

        this.app.use(this.app.static(path.join(__dirname, 'dist'), {
            setHeaders: (res, path) => {
                res.setHeaders('Access-Control-Allow-Origin', '*')
                res.setHeaders('Access-Control-Allow-Headers', '*')
                res.setHeaders('Access-Control-Allow-Methods', 'GET')
            }
        }))
    }
}

const init = async (config = {}) => {
    const server = new ApiServer(config)
    return server.start()
}