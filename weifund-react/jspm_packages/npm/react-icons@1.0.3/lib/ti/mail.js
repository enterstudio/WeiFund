/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiMail = (function (_React$Component) {
    _inherits(TiMail, _React$Component);

    function TiMail() {
        _classCallCheck(this, TiMail);

        _React$Component.apply(this, arguments);
    }

    TiMail.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.666666666666668 11.666666666666668h-23.333333333333336c-1.839999999999998 0-3.333333333333332 1.493333333333334-3.333333333333332 3.333333333333334v14.999999999999998c0 1.8399999999999999 1.4933333333333332 3.3333333333333357 3.333333333333334 3.3333333333333357h23.333333333333336c1.8400000000000034 0 3.3333333333333357-1.4933333333333323 3.3333333333333357-3.333333333333332v-15.000000000000004c0-1.8399999999999999-1.4933333333333323-3.333333333333334-3.333333333333332-3.333333333333334z m-16.14 12.193333333333332l2.6700000000000017 2.333333333333332c0.5083333333333329 0.4433333333333316 1.1499999999999986 0.663333333333334 1.8033333333333346 0.663333333333334s1.2950000000000017-0.22166666666666757 1.8033333333333346-0.663333333333334l2.6700000000000017-2.333333333333332-0.061666666666667425 0.061666666666667425 6.076666666666661 6.078333333333333h-20.976666666666667l6.076666666666668-6.078333333333333-0.061666666666667425-0.061666666666667425z m-7.193333333333333 4.961666666666666v-11.254999999999999l6.003333333333332 5.25-6.003333333333332 6.006666666666668z m17.33-6.003333333333334l6.003333333333334-5.251666666666665v11.25l-6.003333333333334-6z m6.003333333333334-7.818333333333332v0.34999999999999964l-10.959999999999997 9.589999999999998c-0.37833333333333385 0.3299999999999983-1.033333333333335 0.3299999999999983-1.413333333333334 0l-10.960000000000003-9.589999999999996v-0.3500000000000014h23.333333333333336z' })
            )
        );
    };

    return TiMail;
})(React.Component);

exports['default'] = TiMail;
module.exports = exports['default'];