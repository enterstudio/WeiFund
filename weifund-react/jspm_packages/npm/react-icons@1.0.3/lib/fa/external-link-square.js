/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaExternalLinkSquare = (function (_React$Component) {
    _inherits(FaExternalLinkSquare, _React$Component);

    function FaExternalLinkSquare() {
        _classCallCheck(this, FaExternalLinkSquare);

        _React$Component.apply(this, arguments);
    }

    FaExternalLinkSquare.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.42857142857143 20.714285714285715v-10.714285714285715q0-0.5800000000000001-0.4242857142857126-1.0042857142857144t-1.004285714285718-0.4242857142857144h-10.714285714285715q-0.937142857142856 0-1.3171428571428585 0.8714285714285719-0.379999999999999 0.9142857142857146 0.31428571428571317 1.5614285714285714l3.2142857142857153 3.2142857142857153-11.921428571428573 11.920000000000002q-0.4242857142857144 0.4242857142857126-0.4242857142857144 1.0042857142857144t0.4242857142857144 1.0042857142857144l2.2771428571428576 2.277142857142856q0.4242857142857144 0.4242857142857126 1.0042857142857144 0.4242857142857126t1.0042857142857144-0.4242857142857126l11.920000000000002-11.920000000000002 3.2142857142857153 3.2142857142857153q0.3999999999999986 0.4242857142857126 1.0042857142857144 0.4242857142857126 0.2671428571428578 0 0.5571428571428569-0.1114285714285721 0.8714285714285701-0.379999999999999 0.8714285714285701-1.3171428571428585z m5.714285714285715-11.428571428571429v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
            )
        );
    };

    return FaExternalLinkSquare;
})(React.Component);

exports['default'] = FaExternalLinkSquare;
module.exports = exports['default'];