/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaAngleLeft = (function (_React$Component) {
    _inherits(FaAngleLeft, _React$Component);

    function FaAngleLeft() {
        _classCallCheck(this, FaAngleLeft);

        _React$Component.apply(this, arguments);
    }

    FaAngleLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.13857142857143 12.142857142857142q0 0.28999999999999915-0.2228571428571442 0.5142857142857142l-8.772857142857145 8.771428571428574 8.771428571428569 8.771428571428572q0.2242857142857133 0.2242857142857133 0.2242857142857133 0.5142857142857125t-0.2228571428571442 0.5142857142857125l-1.1142857142857139 1.1142857142857139q-0.2228571428571442 0.2228571428571442-0.5142857142857125 0.2228571428571442t-0.5114285714285707-0.2228571428571442l-10.4-10.399999999999999q-0.22714285714285332-0.22571428571428598-0.22714285714285332-0.5142857142857125t0.22285714285714242-0.5142857142857125l10.402857142857146-10.4q0.2228571428571442-0.22285714285714242 0.5142857142857125-0.22285714285714242t0.5114285714285707 0.22285714285714242l1.1142857142857139 1.1142857142857139q0.2242857142857133 0.2242857142857151 0.2242857142857133 0.5142857142857142z' })
            )
        );
    };

    return FaAngleLeft;
})(React.Component);

exports['default'] = FaAngleLeft;
module.exports = exports['default'];