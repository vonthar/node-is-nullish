"use strict";

var tape = require("tape");
var isNull = require("..");

tape("truth", function (assert) {
  assert.equal(isNull(), true);
  assert.equal(isNull(this.isDumb), true);
  assert.equal(isNull(undefined), true);
  var test;
  assert.equal(isNull(test), true);
  assert.equal(isNull(null), true);
  assert.equal(isNull(""), true);
  assert.equal(isNull(NaN), true);
  assert.equal(isNull({}), true);
  assert.equal(isNull([]), true);
  assert.equal(isNull({ "empty": {}, "test": null }), true);
  assert.equal(isNull([ null, NaN, "" ]), true);
  assert.equal(isNull(0), false);
  assert.equal(isNull("0"), false);
  assert.equal(isNull(false), false);
  assert.equal(isNull([ 0 ]), false);
  assert.equal(isNull({ "test": 0 }), false);
  test = function () {};
  assert.equal(isNull(test), true);
  test.prop = "notempty";
  assert.equal(isNull(test), false);
  assert.end();
});


