'use strict'

const expess = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const http = require('http')
const helmet = require('helmet')

class ApiServer extends http.Server {
    constructor (config) {
        const app = express()
        super(app)
        this.config = config
        this.app = app
        this.currentConns = new Set()
        this.busy = new WeakSet()
        this.stopping = false
    }

    async start() {
        this.app.use(helmet())
        this.app.use(cookieParser())
        this.app.use(bodyParser())
    }
}

const init = async (config = {}) => {
    const server = new ApiServer(config)
    return server.start()
}