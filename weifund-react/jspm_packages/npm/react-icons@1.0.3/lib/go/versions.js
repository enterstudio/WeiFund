/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoVersions = (function (_React$Component) {
    _inherits(GoVersions, _React$Component);

    function GoVersions() {
        _classCallCheck(this, GoVersions);

        _React$Component.apply(this, arguments);
    }

    GoVersions.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm2.5 27.5h5v-2.5h-2.5v-10h2.5v-2.5h-5v15z m15-20v25h20v-25h-20z m15 20h-10v-15h10v15z m-22.5 2.5h5v-2.5h-2.5v-15h2.5v-2.5h-5v20z' })
            )
        );
    };

    return GoVersions;
})(React.Component);

exports['default'] = GoVersions;
module.exports = exports['default'];