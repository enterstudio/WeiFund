/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaEraser = (function (_React$Component) {
    _inherits(FaEraser, _React$Component);

    function FaEraser() {
        _classCallCheck(this, FaEraser);

        _React$Component.apply(this, arguments);
    }

    FaEraser.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.666666666666664 30.666666666666664l7-8h-16l-6.999999999999998 8h16z m21.104-22.43733333333333q0.3119999999999976 0.706666666666667 0.19733333333333292 1.4893333333333327t-0.6346666666666678 1.3613333333333326l-18.666666666666664 21.33333333333333q-0.7946666666666644 0.9200000000000017-2 0.9200000000000017h-15.999999999999998q-0.7933333333333328 0-1.4493333333333327-0.4266666666666694t-0.9893333333333333-1.1359999999999992q-0.31066666666666665-0.706666666666667-0.19599999999999998-1.4893333333333345t0.6346666666666665-1.3613333333333237l18.666666666666664-21.333333333333332q0.791999999999998-0.9200000000000035 2-0.9200000000000035h15.999999999999996q0.7920000000000016 0 1.4480000000000004 0.42666666666666675t0.9893333333333345 1.1360000000000001z' })
            )
        );
    };

    return FaEraser;
})(React.Component);

exports['default'] = FaEraser;
module.exports = exports['default'];