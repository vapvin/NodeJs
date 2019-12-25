'use strict'

class cacheManager {
    constructor() {
        this.config = []
    }

    addConfig (obj = {}) {
        this.config.push({
            obj
        })
    }
}

const CacheManager = new cacheManager()
CacheManager.addConfig({
    port: 8000
})