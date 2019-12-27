"use strict";

class Sample {
  *[Symbol.iterator]() {
    let cnt = 0;
    yield ++cnt;
  }
}

console.log(Array.from(Sample));
