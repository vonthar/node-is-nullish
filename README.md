node-is-nullish
==========================================================================================
[![NPM Package](https://img.shields.io/npm/v/is-nullish.svg)](https://www.npmjs.org/package/is-nullish)
[![Build Status](https://travis-ci.org/vonthar/node-is-nullish.svg?branch=master)](https://travis-ci.org/vonthar/node-is-nullish/branches)
[![Coverage Status](https://coveralls.io/repos/github/vonthar/node-is-nullish/badge.svg?branch=master)](https://coveralls.io/github/vonthar/node-is-nullish?branch=master)
[![Dependency Status](https://david-dm.org/vonthar/node-is-nullish.svg)](https://david-dm.org/vonthar/node-is-nullish)

**Example**  
```js
var isNull = require("is-nullish");
isNull("");
//true
isNull(0);
//false
```
Installation
------------
`npm i is-nullish`

Usage
-----
### Differences between falsy, is-nullish, and [is-empty](https://www.npmjs.com/package/is-empty):
| value             | typeof value  | Boolean(value) | isNull(value) | isEmpty(value) |
| ----------------- | ------------- | -------------- | ------------- | -------------- |
| *not defined*     | "undefined"   | false          | true          | true           |
| undefined         | "undefined"   | false          | true          | true           |
| null              | "object"      | false          | true          | true           |
| ""                | "string"      | false          | true          | true           |
| NaN               | "number"      | false          | true          | false          |
| 0                 | "number"      | false          | false         | true           |
| false             | "boolean"     | false          | false         | false          |
| {}                | "object"      | true           | true\*        | true           |
| []                | "object"      | true           | true\*        | true           |
| function () {}    | "function"    | true           | true\*        | true           |
\*Objects and functions are nullish unless they have non-nullish enumerable properties.


API Reference
-------------
<a name="exp_module_is-nullish--isNull"></a>

### isNull(value) ⇒ <code>boolean</code> ⏏
**Kind**: Exported function  
**Params**

- value <code>\*</code>

**Example**  
```js
var f = function (x) { return x; };
isNull(f);
//true
f.objective = "objectify";
isNull(f);
//false
```


License
-------
MPL 2.0
