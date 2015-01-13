/*
 * CSP.JS
 *
 * A constraint satisfaction problem solver in Javascript.
 *
 *
 */

var util = require("./util");
var discrete_finite = require("./discrete_finite");

var ret = {
  version: "0.1",
}

util.mixin(ret, discrete_finite);

module.exports =  ret;
