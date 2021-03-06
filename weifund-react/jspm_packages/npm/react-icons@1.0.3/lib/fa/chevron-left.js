/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaChevronLeft = (function (_React$Component) {
    _inherits(FaChevronLeft, _React$Component);

    function FaChevronLeft() {
        _classCallCheck(this, FaChevronLeft);

        _React$Component.apply(this, arguments);
    }

    FaChevronLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.13857142857143 6.718571428571429l-11.852857142857147 11.852857142857143 11.852857142857143 11.852857142857143q0.4242857142857126 0.4242857142857126 0.4242857142857126 1.0042857142857144t-0.4242857142857126 1.0042857142857144l-3.7057142857142864 3.7057142857142864q-0.4242857142857126 0.42428571428571615-1.0042857142857144 0.42428571428571615t-1.0042857142857144-0.42428571428571615l-16.56285714285714-16.562857142857148q-0.42428571428571615-0.4242857142857126-0.42428571428571615-1.0042857142857144t0.4242857142857144-1.0042857142857144l16.562857142857148-16.56285714285714q0.4242857142857126-0.4242857142857145 1.0042857142857144-0.4242857142857145t1.0042857142857144 0.42428571428571427l3.7057142857142864 3.7057142857142855q0.4242857142857126 0.4242857142857144 0.4242857142857126 1.0042857142857144t-0.4242857142857126 1.0042857142857144z' })
            )
        );
    };

    return FaChevronLeft;
})(React.Component);

exports['default'] = FaChevronLeft;
module.exports = exports['default'];