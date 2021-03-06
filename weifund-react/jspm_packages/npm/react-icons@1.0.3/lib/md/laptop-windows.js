/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLaptopWindows = (function (_React$Component) {
    _inherits(MdLaptopWindows, _React$Component);

    function MdLaptopWindows() {
        _classCallCheck(this, MdLaptopWindows);

        _React$Component.apply(this, arguments);
    }

    MdLaptopWindows.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.640000000000001 8.360000000000001v16.64h26.71666666666667v-16.64h-26.715000000000003z m26.72 21.64h6.640000000000001v3.3599999999999994h-40v-3.3599999999999994h6.640000000000001v-1.6400000000000006q-1.3283333333333331 0-2.3049999999999997-1.0166666666666657t-0.9750000000000001-2.3416666666666686v-16.638333333333332q0-1.3283333333333331 0.976666666666667-2.3433333333333337t2.3066666666666666-1.0133333333333336h26.716666666666665q1.3299999999999983 0 2.306666666666665 1.0166666666666666t0.9766666666666666 2.341666666666666v16.635q0 1.3299999999999983-0.9766666666666666 2.344999999999999t-2.3049999999999997 1.0166666666666657v1.6383333333333354z' })
            )
        );
    };

    return MdLaptopWindows;
})(React.Component);

exports['default'] = MdLaptopWindows;
module.exports = exports['default'];