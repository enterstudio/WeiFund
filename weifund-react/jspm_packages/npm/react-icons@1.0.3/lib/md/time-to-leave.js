/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdTimeToLeave = (function (_React$Component) {
    _inherits(MdTimeToLeave, _React$Component);

    function MdTimeToLeave() {
        _classCallCheck(this, MdTimeToLeave);

        _React$Component.apply(this, arguments);
    }

    MdTimeToLeave.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.5 8.3c-0.3-0.9-1.2-1.6-2.3-1.6h-18.4c-1.1 0-2 0.7-2.3 1.6l-3.5 10v13.4c0 0.9 0.8 1.6 1.7 1.6h1.6c1 0 1.7-0.7 1.7-1.6v-1.7h20v1.7c0 0.9 0.8 1.6 1.7 1.6h1.6c1 0 1.7-0.7 1.7-1.6v-13.4l-3.5-9.9z m-20.7 16.7c-1.3 0-2.5-1.1-2.5-2.5s1.2-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z m18.4 0c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z m-20.9-8.3l2.5-7.5h18.4l2.5 7.5h-23.4z' })
            )
        );
    };

    return MdTimeToLeave;
})(React.Component);

exports['default'] = MdTimeToLeave;
module.exports = exports['default'];