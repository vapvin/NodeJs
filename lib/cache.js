"use strict";

const RedisCluster = require("redis-cluster");
const RedisClient = require("redis");
const config = require("./config");
const { promisify } = require("util");

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
  } else {
    newClient = RedisClient.createClient(
      conf.redisHost,
      conf.redisPort,
      options
    );
  }

  if (sub) {
    redisSub = newClient;
    newClient.on("message", (topic, message) => {
      if (subCallbacks.has(topic)) {
        const callback = subCallbacks.get(topic);
        callback(message);
      }
    });

    newClient.on("error", err => {
      console.error(err);
      newClient.end();
    });
  } else {
    newClient = redis;
  }

  newClient.on("connect", () => {
    console.log(`${sub} connected`);
  });

  newClient.on("reconnect", () => {
    console.log(`Redis ${sub} reconnected`);
  });

  promisifyClient(newClient);
  return newClient;
}

function promisifyClient(redis) {
  redis.get = util.promisify(redis.get.bind(redis));
}
