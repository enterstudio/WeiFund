/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaVolumeOff = (function (_React$Component) {
    _inherits(FaVolumeOff, _React$Component);

    function FaVolumeOff() {
        _classCallCheck(this, FaVolumeOff);

        _React$Component.apply(this, arguments);
    }

    FaVolumeOff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.571428571428573 7.857142857142858v24.28571428571428q0 0.5799999999999983-0.4242857142857126 1.0042857142857144t-1.004285714285718 0.42428571428571615-1.0042857142857144-0.42428571428571615l-7.4328571428571415-7.432857142857138h-5.848571428571429q-0.5800000000000001 0-1.0042857142857144-0.4242857142857126t-0.4242857142857144-1.004285714285718v-8.571428571428571q0-0.5800000000000001 0.4242857142857144-1.0042857142857144t1.0042857142857144-0.4242857142857126h5.848571428571429l7.432857142857145-7.432857142857143q0.4242857142857126-0.4242857142857144 1.004285714285711-0.4242857142857144t1.0042857142857144 0.4242857142857144 0.42428571428571615 1.0042857142857144z' })
            )
        );
    };

    return FaVolumeOff;
})(React.Component);

exports['default'] = FaVolumeOff;
module.exports = exports['default'];