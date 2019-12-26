'use strict'

class FullStack {
    constructor(backend, frontend) {
        this.backend = backend
        this.frontend = frontend
    }

    getBackend () {
        return this.backend
    }



    getFrontend () {
        return this.frontend
    }

    setBackend (backend) {
        this.backend = backend
    }

    setFrontend (frontend) {
        this.frontend = frontend
    }
}