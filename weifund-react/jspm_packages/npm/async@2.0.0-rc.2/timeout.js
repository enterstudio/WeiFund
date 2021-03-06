/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = timeout;
var _initialParams = require('./internal/initialParams');
var _initialParams2 = _interopRequireDefault(_initialParams);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function timeout(asyncFn, miliseconds) {
  var originalCallback,
      timer;
  var timedOut = false;
  function injectedCallback() {
    if (!timedOut) {
      originalCallback.apply(null, arguments);
      clearTimeout(timer);
    }
  }
  function timeoutCallback() {
    var error = new Error('Callback function timed out.');
    error.code = 'ETIMEDOUT';
    timedOut = true;
    originalCallback(error);
  }
  return (0, _initialParams2.default)(function(args, origCallback) {
    originalCallback = origCallback;
    timer = setTimeout(timeoutCallback, miliseconds);
    asyncFn.apply(null, args.concat(injectedCallback));
  });
}
module.exports = exports['default'];
