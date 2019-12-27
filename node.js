const co = require("co");

co(
  function*() {
    const a = Promise.resolve(1);
    const b = Promise.resolve(2);
    const c = Promise.resolve(3);
    Promise.all([a, b, c]);

    const res = yield [a, b, c];
  }.catch(err)
);

co(function*() {
  try {
    Promise.reject(new Error("Error "));
  } catch (err) {
    console.log(err);
  }
});
