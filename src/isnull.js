"use strict";

/**
 * @module is-nullish
 * @example
 * ```js
 * var isNull = require("is-nullish");
 * isNull("");
 * //true
 * isNull(0);
 * //false
 * ```
 * @description
 * ### Differences between falsy, is-nullish, and [is-empty](https://www.npmjs.com/package/is-empty):
 * | value             | typeof value  | Boolean(value) | isNull(value) | isEmpty(value) |
 * | ----------------- | ------------- | -------------- | ------------- | -------------- |
 * | *not defined*     | "undefined"   | false          | true          | true           |
 * | undefined         | "undefined"   | false          | true          | true           |
 * | null              | "object"      | false          | true          | true           |
 * | ""                | "string"      | false          | true          | true           |
 * | NaN               | "number"      | false          | true          | false          |
 * | 0                 | "number"      | false          | false         | true           |
 * | false             | "boolean"     | false          | false         | false          |
 * | {}                | "object"      | true           | true\*        | true           |
 * | []                | "object"      | true           | true\*        | true           |
 * | function () {}    | "function"    | true           | true\*        | true           |
 * \*Objects and functions are nullish unless they have non-nullish enumerable properties.
 */
module.exports = isNull;


/**
 * @alias module:is-nullish
 * @param {*} value
 * @returns {boolean}
 * @example
 * ```js
 * var f = function (x) { return x; };
 * isNull(f);
 * //true
 * f.objective = "objectify";
 * isNull(f);
 * //false
 * ```
 */
function isNull(value) {
  switch (typeof value) {
    case "undefined":
      return true;
    case "object":
    case "function":
      for (var key in value) {
        if (!isNull(value[key])) {
          return false;
        }
      }
      return true;
    case "string":
      return value === "";
    case "number":
      return Number.isNaN(value);
    default:
      return false;
  }
}

