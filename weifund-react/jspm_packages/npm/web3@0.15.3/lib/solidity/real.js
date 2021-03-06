/* */ 
var f = require('./formatters');
var SolidityType = require('./type');
var SolidityTypeReal = function() {
  this._inputFormatter = f.formatInputReal;
  this._outputFormatter = f.formatOutputReal;
};
SolidityTypeReal.prototype = new SolidityType({});
SolidityTypeReal.prototype.constructor = SolidityTypeReal;
SolidityTypeReal.prototype.isType = function(name) {
  return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);
};
SolidityTypeReal.prototype.staticPartLength = function(name) {
  return 32 * this.staticArrayLength(name);
};
module.exports = SolidityTypeReal;
