/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = function(worker, concurrency) {
  function _compareTasks(a, b) {
    return a.priority - b.priority;
  }
  function _binarySearch(sequence, item, compare) {
    var beg = -1,
        end = sequence.length - 1;
    while (beg < end) {
      var mid = beg + (end - beg + 1 >>> 1);
      if (compare(item, sequence[mid]) >= 0) {
        beg = mid;
      } else {
        end = mid - 1;
      }
    }
    return beg;
  }
  function _insert(q, data, priority, callback) {
    if (callback != null && typeof callback !== 'function') {
      throw new Error('task callback must be a function');
    }
    q.started = true;
    if (!(0, _isArray2.default)(data)) {
      data = [data];
    }
    if (data.length === 0) {
      return (0, _setImmediate2.default)(function() {
        q.drain();
      });
    }
    (0, _arrayEach2.default)(data, function(task) {
      var item = {
        data: task,
        priority: priority,
        callback: typeof callback === 'function' ? callback : _noop2.default
      };
      q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
      if (q.tasks.length === q.concurrency) {
        q.saturated();
      }
      if (q.tasks.length <= q.concurrency - q.buffer) {
        q.unsaturated();
      }
      (0, _setImmediate2.default)(q.process);
    });
  }
  var q = (0, _queue2.default)(worker, concurrency);
  q.push = function(data, priority, callback) {
    _insert(q, data, priority, callback);
  };
  delete q.unshift;
  return q;
};
var _arrayEach = require('lodash/_arrayEach');
var _arrayEach2 = _interopRequireDefault(_arrayEach);
var _isArray = require('lodash/isArray');
var _isArray2 = _interopRequireDefault(_isArray);
var _noop = require('lodash/noop');
var _noop2 = _interopRequireDefault(_noop);
var _setImmediate = require('./setImmediate');
var _setImmediate2 = _interopRequireDefault(_setImmediate);
var _queue = require('./queue');
var _queue2 = _interopRequireDefault(_queue);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
module.exports = exports['default'];
