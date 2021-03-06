/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCastConnected = (function (_React$Component) {
    _inherits(MdCastConnected, _React$Component);

    function MdCastConnected() {
        _classCallCheck(this, MdCastConnected);

        _React$Component.apply(this, arguments);
    }

    MdCastConnected.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 5q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3416666666666677v23.283333333333335q0 1.3266666666666644-1.0166666666666657 2.341666666666665t-2.3433333333333337 1.0166666666666657h-11.64v-3.361666666666668h11.64v-23.28333333333333h-30v5h-3.36v-5q0-1.326666666666667 1.0166666666666666-2.341666666666667t2.3416666666666663-1.0166666666666666h30z m-33.36 11.64q7.578333333333333 0 12.966666666666667 5.390000000000001t5.393333333333333 12.966666666666669h-3.3633333333333333q0-6.25-4.413333333333334-10.623333333333335t-10.584999999999999-4.373333333333335v-3.3633333333333333z m30-5v16.716666666666665h-9.373333333333335q-1.5666666666666664-4.919999999999998-5.274999999999999-8.669999999999998t-8.633333333333333-5.313333333333333v-2.7333333333333343h23.283333333333335z m-30 11.719999999999999q4.843333333333334 0 8.283333333333333 3.3999999999999986t3.4350000000000005 8.240000000000002h-3.3583333333333343q0-3.4383333333333326-2.461666666666667-5.899999999999999t-5.9-2.460000000000001v-3.2833333333333314z m0 6.640000000000001q2.033333333333333 0 3.5166666666666666 1.4833333333333343t1.4833333333333334 3.5166666666666657h-5v-5z' })
            )
        );
    };

    return MdCastConnected;
})(React.Component);

exports['default'] = MdCastConnected;
module.exports = exports['default'];