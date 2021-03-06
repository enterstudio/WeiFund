/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBrightness4 = (function (_React$Component) {
    _inherits(MdBrightness4, _React$Component);

    function MdBrightness4() {
        _classCallCheck(this, MdBrightness4);

        _React$Component.apply(this, arguments);
    }

    MdBrightness4.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 30q4.140000000000001 0 7.07-2.9299999999999997t2.9299999999999997-7.07-2.9299999999999997-7.07-7.07-2.9299999999999997q-2.0333333333333314 0-4.140000000000001 0.9383333333333326 2.578333333333333 1.1716666666666669 4.18 3.633333333333333t1.6000000000000014 5.43-1.6000000000000014 5.433333333333334-4.18 3.633333333333333q2.110000000000003 0.9316666666666684 4.140000000000001 0.9316666666666684z m13.36-15.546666666666667l5.466666666666669 5.546666666666667-5.466666666666669 5.546666666666667v7.813333333333333h-7.813333333333333l-5.546666666666667 5.466666666666669-5.546666666666667-5.466666666666669h-7.813333333333333v-7.813333333333333l-5.466666666666667-5.546666666666667 5.466666666666667-5.546666666666667v-7.813333333333333h7.813333333333333l5.546666666666667-5.466666666666667 5.546666666666667 5.466666666666667h7.813333333333333v7.813333333333333z' })
            )
        );
    };

    return MdBrightness4;
})(React.Component);

exports['default'] = MdBrightness4;
module.exports = exports['default'];