/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSdCard = (function (_React$Component) {
    _inherits(MdSdCard, _React$Component);

    function MdSdCard() {
        _classCallCheck(this, MdSdCard);

        _React$Component.apply(this, arguments);
    }

    MdSdCard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 13.360000000000001v-6.716666666666668h-3.3599999999999994v6.716666666666668h3.3599999999999994z m-5 0v-6.716666666666668h-3.3599999999999994v6.716666666666668h3.3599999999999994z m-5 0v-6.716666666666668h-3.3599999999999994v6.716666666666668h3.3599999999999994z m10-10q1.3283333333333331 0 2.3433333333333337 0.9766666666666666t1.0166666666666657 2.3049999999999997v26.71666666666667q0 1.3299999999999983-1.0166666666666657 2.306666666666665t-2.3433333333333337 0.9750000000000085h-20q-1.3283333333333331 0-2.3433333333333337-0.9766666666666666t-1.0166666666666666-2.306666666666665l0.08000000000000007-20 9.921666666666667-10h13.358333333333334z' })
            )
        );
    };

    return MdSdCard;
})(React.Component);

exports['default'] = MdSdCard;
module.exports = exports['default'];