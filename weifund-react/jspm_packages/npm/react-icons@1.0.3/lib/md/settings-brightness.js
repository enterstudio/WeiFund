/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSettingsBrightness = (function (_React$Component) {
    _inherits(MdSettingsBrightness, _React$Component);

    function MdSettingsBrightness() {
        _classCallCheck(this, MdSettingsBrightness);

        _React$Component.apply(this, arguments);
    }

    MdSettingsBrightness.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 15v10q2.0333333333333314 0 3.5166666666666657-1.4833333333333343t1.4833333333333343-3.5166666666666657-1.4833333333333343-3.5166666666666657-3.5166666666666657-1.4833333333333343z m-6.640000000000001 11.64v-4.140000000000001l-2.5-2.5 2.5-2.5v-4.139999999999999h4.140000000000001l2.5-2.5 2.5 2.5h4.140000000000001v4.139999999999999l2.5 2.5-2.5 2.5v4.140000000000001h-4.140000000000001l-2.5 2.5-2.5-2.5h-4.139999999999999z m21.64 5.076666666666668v-23.433333333333337h-30v23.433333333333337h30z m0-26.71666666666667q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3416666666666677v23.283333333333335q0 1.3266666666666644-1.0166666666666657 2.341666666666665t-2.3433333333333337 1.0166666666666657h-30q-1.3283333333333331 0-2.3433333333333333-1.0166666666666657t-1.0166666666666666-2.3433333333333337v-23.28333333333333q0-1.3266666666666689 1.0166666666666666-2.3416666666666686t2.3433333333333333-1.0150000000000006h30z' })
            )
        );
    };

    return MdSettingsBrightness;
})(React.Component);

exports['default'] = MdSettingsBrightness;
module.exports = exports['default'];