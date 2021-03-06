/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdModeComment = (function (_React$Component) {
    _inherits(MdModeComment, _React$Component);

    function MdModeComment() {
        _classCallCheck(this, MdModeComment);

        _React$Component.apply(this, arguments);
    }

    MdModeComment.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.64000000000001 6.640000000000001v30l-6.640000000000008-6.640000000000001h-23.36q-1.3283333333333331 0-2.3049999999999997-1.0166666666666657t-0.9750000000000001-2.3416666666666686v-20q0-1.3283333333333331 0.976666666666667-2.3049999999999997t2.3066666666666666-0.9766666666666666h26.716666666666665q1.3299999999999983 0 2.306666666666665 0.9766666666666666t0.9766666666666666 2.3049999999999997z' })
            )
        );
    };

    return MdModeComment;
})(React.Component);

exports['default'] = MdModeComment;
module.exports = exports['default'];