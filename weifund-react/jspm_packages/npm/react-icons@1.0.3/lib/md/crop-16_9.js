/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCrop169 = (function (_React$Component) {
    _inherits(MdCrop169, _React$Component);

    function MdCrop169() {
        _classCallCheck(this, MdCrop169);

        _React$Component.apply(this, arguments);
    }

    MdCrop169.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 26.64v-13.283333333333333h-23.28333333333334v13.283333333333333h23.283333333333335z m0-16.64q1.3283333333333367 0 2.34333333333333 1.0166666666666657t1.0166666666666657 2.34v13.283333333333335q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-23.28333333333333q-1.3266666666666689 0-2.3416666666666686-1.0166666666666657t-1.0150000000000006-2.3416666666666686v-13.283333333333333q0-1.3266666666666662 1.0166666666666666-2.341666666666667t2.3400000000000007-1.0150000000000006h23.28333333333333z' })
            )
        );
    };

    return MdCrop169;
})(React.Component);

exports['default'] = MdCrop169;
module.exports = exports['default'];