"use strict";

const RedisCluster = require("redis-cluster");
const RedisClient = require("redis");
const config = require("./config");

let redis, redisSub;
let subCallbacks = new Map();

async function getRedisClient(sub) {
  const conf = await config.getConfig();

  if (sub && redisSub) return redisSub;
  if (!sub && redis) return redis;

  const options = {};
  let newClient;

  if (conf.redisUseCluster) {
    newClient = new RedisCluster({
      servers: [
        {
          host: conf.redisHost,
          port: conf.redisPort
        }
      ],
      createClient: (port, host) =>
        RedisClient.createClient(port, host, options)
    });
  }
}
