/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonPaintcan = (function (_React$Component) {
    _inherits(GoOcticonPaintcan, _React$Component);

    function GoOcticonPaintcan() {
        _classCallCheck(this, GoOcticonPaintcan);

        _React$Component.apply(this, arguments);
    }

    GoOcticonPaintcan.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 0c-8.3 0-15 6.7-15 15v2.5c0 1.4 1.1 2.5 2.5 2.5v12.5c0 2.8 5.6 5 12.5 5s12.5-2.2 12.5-5v-12.5c1.4 0 2.5-1.1 2.5-2.5v-2.5c0-8.3-6.7-15-15-15z m7.5 25v1.2c0 0.7-0.6 1.3-1.3 1.3s-1.2-0.6-1.2-1.3v-1.2c0-0.7-0.6-1.3-1.3-1.3s-1.2 0.6-1.2 1.3v6.2c0 0.7-0.6 1.3-1.3 1.3s-1.2-0.6-1.2-1.3v-5c0-0.6-0.6-1.2-1.2-1.2s-1.3 0.6-1.3 1.2v1.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-2.5c-1.4 0-2.5-1.1-2.5-2.5v-4.5c2.3 1.2 5.9 2 10 2s7.7-0.8 10-2v4.5c0 1.4-1.1 2.5-2.5 2.5z m-7.5-7.5c-4.2 0-7.8-1-9.3-2.5 1.5-1.5 5.1-2.5 9.3-2.5s7.8 1 9.3 2.5c-1.5 1.5-5.1 2.5-9.3 2.5z m0-7.5c-6.9 0-12.5 2.2-12.5 5 0 0 0 0 0 0 0-6.9 5.6-12.5 12.5-12.5 6.9 0 12.5 5.6 12.5 12.5 0-2.8-5.6-5-12.5-5z' })
            )
        );
    };

    return GoOcticonPaintcan;
})(React.Component);

exports['default'] = GoOcticonPaintcan;
module.exports = exports['default'];