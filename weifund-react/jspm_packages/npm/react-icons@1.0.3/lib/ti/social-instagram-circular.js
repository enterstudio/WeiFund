/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiSocialInstagramCircular = (function (_React$Component) {
    _inherits(TiSocialInstagramCircular, _React$Component);

    function TiSocialInstagramCircular() {
        _classCallCheck(this, TiSocialInstagramCircular);

        _React$Component.apply(this, arguments);
    }

    TiSocialInstagramCircular.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 5c-8.3 0-15 6.699999999999999-15 15s6.699999999999999 15 15 15 15-6.699999999999999 15-15-6.699999999999999-15-15-15z m0 11.7c1.8000000000000007 0 3.3000000000000007 1.5 3.3000000000000007 3.3000000000000007s-1.5 3.3000000000000007-3.3000000000000007 3.3000000000000007-3.3000000000000007-1.5-3.3000000000000007-3.3000000000000007 1.5-3.3000000000000007 3.3000000000000007-3.3000000000000007z m4.699999999999999-3.4000000000000004c0-1.0999999999999996 1-2 2-2s2 1 2 2-0.8999999999999986 2-2 2-2-0.8000000000000007-2-2z m-4.699999999999999 18.4c-6.5 3.552713678800501e-15-11.7-5.199999999999996-11.7-11.699999999999996h5c0 3.6999999999999993 3 6.699999999999999 6.699999999999999 6.699999999999999s6.699999999999999-3 6.699999999999999-6.699999999999999h5c0 6.5-5.199999999999999 11.7-11.7 11.7z' })
            )
        );
    };

    return TiSocialInstagramCircular;
})(React.Component);

exports['default'] = TiSocialInstagramCircular;
module.exports = exports['default'];