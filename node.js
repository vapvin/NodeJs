"use strict";

class DbManager {
  constructor(settings) {
    this.settings = settings;
    this.init = init;
  }

  query() {
    // QUERY('') Agnostic
  }

  async init() {} // 최초 1회만 실행됩니다.

  async newMember() {
    await this.init;
  }

  async deleteMember() {
    await this.init;
  }
}
