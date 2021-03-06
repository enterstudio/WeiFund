/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaCaretSquareODown = (function (_React$Component) {
    _inherits(FaCaretSquareODown, _React$Component);

    function FaCaretSquareODown() {
        _classCallCheck(this, FaCaretSquareODown);

        _React$Component.apply(this, arguments);
    }

    FaCaretSquareODown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.414285714285715 15.067142857142859q0.4028571428571439 0.781428571428572-0.10999999999999943 1.4714285714285715l-7.142857142857142 10q-0.42428571428571615 0.6042857142857123-1.1614285714285728 0.6042857142857123t-1.1571428571428584-0.6028571428571432l-7.142857142857142-10q-0.5142857142857142-0.6914285714285722-0.11428571428571388-1.4714285714285715 0.38142857142857167-0.7828571428571429 1.274285714285714-0.7828571428571429h14.285714285714285q0.8928571428571423 0 1.2714285714285722 0.781428571428572z m3.014285714285716 15.647142857142857v-21.42857142857143q0-0.28999999999999915-0.21142857142856997-0.5028571428571436t-0.5028571428571453-0.21142857142856997h-21.42857142857143q-0.28999999999999915 0-0.5028571428571436 0.21142857142857174t-0.21142857142856997 0.5028571428571436v21.42857142857143q0 0.28999999999999915 0.21142857142857174 0.5028571428571418t0.5028571428571436 0.21142857142857352h21.42857142857143q0.28999999999999915 0 0.5028571428571418-0.21142857142856997t0.21142857142857352-0.5028571428571453z m5.714285714285715-21.42857142857143v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
            )
        );
    };

    return FaCaretSquareODown;
})(React.Component);

exports['default'] = FaCaretSquareODown;
module.exports = exports['default'];