/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFlame = (function (_React$Component) {
    _inherits(GoFlame, _React$Component);

    function GoFlame() {
        _classCallCheck(this, GoFlame);

        _React$Component.apply(this, arguments);
    }

    GoFlame.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.912499999999998 1.7574999999999998c1.9550000000000018 5.234999999999999 0.9375 8.0875-1.25 10.35-2.3812499999999996 2.5-6.092499999999999 4.375000000000002-8.71 8.049999999999999-3.4749999999999996 4.881250000000001-4.0625 15.625 8.475 18.4375-5.272499999999999-2.7749999999999986-6.404999999999999-10.82125-0.7025000000000006-15.862499999999997-1.4849999999999994 4.883749999999999 1.25 8.00875 4.65 6.875 3.318749999999998-1.1312500000000014 5.506250000000001 1.25 5.428750000000001 3.987499999999997-0.03750000000000142 1.875-0.78125 3.4750000000000014-2.6950000000000003 4.375 8.162499999999998-1.4462499999999991 11.444999999999997-8.204999999999998 11.444999999999997-13.362499999999997 0-6.796250000000001-6.055-7.733750000000001-3.0075000000000003-13.4375-3.6325000000000003 0.3125-4.8825 2.696249999999999-4.53125 6.602499999999999 0.23499999999999943 2.5787499999999994-2.4624999999999986 4.337499999999999-4.453749999999999 3.1625000000000014-1.6024999999999991-0.9750000000000014-1.5625-2.8500000000000014-0.15749999999999886-4.256250000000001 3.0087500000000063-2.96875 4.181250000000006-9.80375-4.491249999999997-14.922500000000001z' })
            )
        );
    };

    return GoFlame;
})(React.Component);

exports['default'] = GoFlame;
module.exports = exports['default'];