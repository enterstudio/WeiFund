/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoClippy = (function (_React$Component) {
    _inherits(GoClippy, _React$Component);

    function GoClippy() {
        _classCallCheck(this, GoClippy);

        _React$Component.apply(this, arguments);
    }

    GoClippy.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.3674999999999997-1.1325000000000003-2.5-2.5-2.5h-7.5c0-2.7750000000000004-2.2250000000000014-5-5-5s-5 2.225-5 5h-7.5c-1.3674999999999997 0-2.5 1.1324999999999994-2.5 2.5v27.5c0 1.3674999999999997 1.1325000000000003 2.5 2.5 2.5h25c1.3674999999999997 0 2.5-1.1325000000000003 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1325000000000003 2.5-2.5 1.1325000000000003-2.5 2.5-2.5 2.5 1.1325000000000003 2.5 2.5 1.25 2.5 2.5 2.5h2.5s2.5 1.1325000000000003 2.5 2.5h-20c0-1.5250000000000004 1.09375-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z' })
            )
        );
    };

    return GoClippy;
})(React.Component);

exports['default'] = GoClippy;
module.exports = exports['default'];