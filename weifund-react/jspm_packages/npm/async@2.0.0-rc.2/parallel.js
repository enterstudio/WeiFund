/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _parallelLimit = require('./parallelLimit');
var _parallelLimit2 = _interopRequireDefault(_parallelLimit);
var _doLimit = require('./internal/doLimit');
var _doLimit2 = _interopRequireDefault(_doLimit);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.default = (0, _doLimit2.default)(_parallelLimit2.default, Infinity);
module.exports = exports['default'];
