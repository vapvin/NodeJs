'use strict'

const RedisCluster = require('redis-cluster')
const RedisClient = require('redis')

let redis, redisSub
let subCallbacks = new Map()

async function getRedisClient(sub) {
    const conf = await
}