/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = retry;
var _series = require('./series');
var _series2 = _interopRequireDefault(_series);
var _noop = require('lodash/noop');
var _noop2 = _interopRequireDefault(_noop);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function retry(times, task, callback) {
  var DEFAULT_TIMES = 5;
  var DEFAULT_INTERVAL = 0;
  var opts = {
    times: DEFAULT_TIMES,
    interval: DEFAULT_INTERVAL
  };
  function parseTimes(acc, t) {
    if (typeof t === 'object') {
      acc.times = +t.times || DEFAULT_TIMES;
      acc.interval = +t.interval || DEFAULT_INTERVAL;
    } else if (typeof t === 'number' || typeof t === 'string') {
      acc.times = +t || DEFAULT_TIMES;
    } else {
      throw new Error("Invalid arguments for async.retry");
    }
  }
  if (arguments.length < 3 && typeof times === 'function') {
    callback = task || _noop2.default;
    task = times;
  } else {
    parseTimes(opts, times);
    callback = callback || _noop2.default;
  }
  if (typeof task !== 'function') {
    throw new Error("Invalid arguments for async.retry");
  }
  var attempts = [];
  while (opts.times) {
    var isFinalAttempt = !(opts.times -= 1);
    attempts.push(retryAttempt(isFinalAttempt));
    if (!isFinalAttempt && opts.interval > 0) {
      attempts.push(retryInterval(opts.interval));
    }
  }
  (0, _series2.default)(attempts, function(done, data) {
    data = data[data.length - 1];
    callback(data.err, data.result);
  });
  function retryAttempt(isFinalAttempt) {
    return function(seriesCallback) {
      task(function(err, result) {
        seriesCallback(!err || isFinalAttempt, {
          err: err,
          result: result
        });
      });
    };
  }
  function retryInterval(interval) {
    return function(seriesCallback) {
      setTimeout(function() {
        seriesCallback(null);
      }, interval);
    };
  }
}
module.exports = exports['default'];
