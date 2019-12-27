"use strict";

class DbManager {
  constructor() {}

  static async BUILD(settings) {
    const config = await this.init(settings);
    // 수행하고자 하는 모든 비동기 작업
    return new DbManager(config);
  }
  query() {
    // QUERY('') Agnostic
  }

  async init(settings) {} // 최초 1회만 실행됩니다.

  async newMember() {}

  async deleteMember() {}
}

const manager = DbManager.BUILD(settings);
