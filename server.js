"use strict";

const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;
    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stopping = false;
  }

  async start() {
    this.app.use((req, res, next) => {
      this.busy.add(req.socket);
      res.on("finish", () => {
        if (this.stopping) req.socket.end();
        this.busy.delete(req.socket);
      });
      next();
    });
    this.app.use(cookieParser());

    this.app.get("/_health", (req, res) => {
      res.sendStatus(200);
    });

    this.app.use((err, req, res, next) => {
      res.status(500).send(geerateApiError("Api::Error"));
    });

    this.on("connection", c => {
      this.currentConns.add(c);
      c.on("close", () => this.currentConns.delete(c));
    });

    return this;
  }

  shutdown() {
    if (this.stopping) return;
    this.stopping = true;
    this.close(() => {
      process.exit(0);
    });

    setTimeout(() => {
      console.error("비정상적인 종료 (강제종료)");
      process.exit(1);
    }, this.config.shutdownTimeout).unref();

    if (this.currentConns.size > 0) {
      console.log(
        `현재 동시접속중인 연결(${this.currentConns.size})을 대기중입니다. `
      );

      for (const con of this.currentConns) {
        if (!this.busy.has(con)) {
          con.end();
        }
      }
    }
  }
}

const init = async (config = {}) => {
  const server = new ApiServer(config);
  return await server.start();
};

module.exports = {
  init
};
