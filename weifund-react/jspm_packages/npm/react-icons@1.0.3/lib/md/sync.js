/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSync = (function (_React$Component) {
    _inherits(MdSync, _React$Component);

    function MdSync() {
        _classCallCheck(this, MdSync);

        _React$Component.apply(this, arguments);
    }

    MdSync.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 30v-5l6.640000000000001 6.640000000000001-6.640000000000001 6.716666666666669v-5q-5.466666666666667 0-9.413333333333334-3.943333333333335t-3.9449999999999994-9.413333333333334q0-3.9066666666666663 2.1100000000000003-7.109999999999999l2.423333333333334 2.421666666666667q-1.1750000000000007 2.1099999999999994-1.1750000000000007 4.688333333333333 0 4.140000000000001 2.9333333333333336 7.07t7.066666666666666 2.9299999999999997z m0-23.36q5.466666666666669 0 9.413333333333334 3.9450000000000003t3.9450000000000003 9.415q0 3.905000000000001-2.1099999999999994 7.108333333333334l-2.423333333333332-2.421666666666667q1.1749999999999972-2.1099999999999994 1.1749999999999972-4.686666666666667 0-4.141666666666666-2.9333333333333336-7.071666666666667t-7.066666666666666-2.928333333333333v5l-6.643333333333334-6.643333333333333 6.643333333333334-6.715000000000001v5z' })
            )
        );
    };

    return MdSync;
})(React.Component);

exports['default'] = MdSync;
module.exports = exports['default'];