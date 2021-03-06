/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaArrowCircleORight = (function (_React$Component) {
    _inherits(FaArrowCircleORight, _React$Component);

    function FaArrowCircleORight() {
        _classCallCheck(this, FaArrowCircleORight);

        _React$Component.apply(this, arguments);
    }

    FaArrowCircleORight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.571428571428573 20q0 0.31428571428571317-0.1999999999999993 0.5142857142857125l-7.142857142857142 7.142857142857142q-0.20285714285714462 0.1999999999999993-0.514285714285716 0.1999999999999993-0.28999999999999915 0-0.5028571428571418-0.21142857142856997t-0.21142857142857352-0.5028571428571418v-4.285714285714285h-7.857142857142858q-0.28999999999999915 0-0.5028571428571436-0.21142857142856997t-0.21142857142856997-0.5028571428571453v-4.285714285714285q0-0.28999999999999915 0.21142857142857174-0.5028571428571418t0.5028571428571418-0.21142857142857352h7.857142857142858v-4.285714285714285q0-0.31428571428571495 0.1999999999999993-0.5142857142857142t0.514285714285716-0.1999999999999993q0.2671428571428578 0 0.5357142857142847 0.22285714285714242l7.120000000000001 7.120000000000001q0.1999999999999993 0.1999999999999993 0.1999999999999993 0.5142857142857125z m3.571428571428573 0q0-3.3028571428571425-1.62857142857143-6.094285714285714t-4.4228571428571435-4.42-6.0914285714285725-1.6285714285714281-6.097142857142858 1.6285714285714281-4.417142857142856 4.42-1.6328571428571426 6.094285714285714 1.6285714285714281 6.094285714285714 4.421428571428573 4.419999999999998 6.097142857142856 1.6285714285714334 6.092857142857142-1.62857142857143 4.420000000000002-4.419999999999998 1.6300000000000026-6.094285714285718z m5 0q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
            )
        );
    };

    return FaArrowCircleORight;
})(React.Component);

exports['default'] = FaArrowCircleORight;
module.exports = exports['default'];