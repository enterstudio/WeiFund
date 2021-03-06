/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaBehance = (function (_React$Component) {
    _inherits(FaBehance, _React$Component);

    function FaBehance() {
        _classCallCheck(this, FaBehance);

        _React$Component.apply(this, arguments);
    }

    FaBehance.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.09375 9.12125h-9.98125v2.4212500000000006h9.98125v-2.4212500000000006z m-4.921250000000001 8.32q-1.7575000000000003 0-2.8500000000000014 1.0249999999999986t-1.2137499999999974 2.7837500000000013h7.96875q-0.3500000000000014-3.80875-3.90625-3.80875z m0.3125 11.425q1.2299999999999969 0 2.3825000000000003-0.625t1.4849999999999994-1.6975000000000016h4.316250000000004q-1.9537499999999994 5.99625-8.34 5.99625-4.18 0-6.650000000000002-2.5787499999999994t-2.4712500000000013-6.778750000000002q0-4.0625 2.5500000000000007-6.747499999999999t6.57-2.6849999999999987q2.6950000000000003 0 4.697499999999998 1.3287499999999994t2.990000000000002 3.49625 0.9874999999999972 4.84375q0 0.3324999999999996-0.03999999999999915 0.9175000000000004h-12.849999999999998q0 2.1662500000000016 1.1212499999999999 3.3500000000000014t3.2525000000000013 1.1799999999999997z m-26.075-0.9750000000000014h5.78125q4.00375 0 4.00375-3.2624999999999993 0-3.5150000000000006-3.8874999999999993-3.5150000000000006h-5.895000000000001v6.778749999999999z m0-10.4875h5.487500000000001q1.5250000000000004 0 2.4124999999999996-0.7124999999999986t0.8900000000000006-2.217500000000001q0-2.8125-3.7125000000000004-2.8125h-5.075000000000001v5.741250000000001z m-5.41-9.943749999999998h11.6q1.700000000000001-8.881784197001252e-16 3.0287500000000005 0.2724999999999991t2.4712500000000013 0.9275000000000002 1.7575000000000003 1.8849999999999998 0.6149999999999984 3.0075000000000003q0 3.5349999999999984-3.3599999999999994 5.137500000000001 2.2250000000000014 0.625 3.3599999999999994 2.245000000000001t1.1325000000000003 3.9837500000000006q0 1.4649999999999999-0.47875000000000156 2.666249999999998t-1.2875000000000014 2.021250000000002-1.9250000000000007 1.3874999999999993-2.3625000000000007 0.8187500000000014-2.6174999999999997 0.25375000000000014h-11.933749999999996v-24.6075z' })
            )
        );
    };

    return FaBehance;
})(React.Component);

exports['default'] = FaBehance;
module.exports = exports['default'];