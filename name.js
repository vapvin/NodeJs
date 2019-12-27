"use strict";

const arr = ["html", "pdf", "pdf", "gif", "gif", "gif"];
const res = arr.reduce((count, type) => {
  count[type] = (count[type] || 0) + 1;
  return count;
}, {});

console.log(res);
