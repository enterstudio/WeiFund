/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAudiotrack = (function (_React$Component) {
    _inherits(MdAudiotrack, _React$Component);

    function MdAudiotrack() {
        _classCallCheck(this, MdAudiotrack);

        _React$Component.apply(this, arguments);
    }

    MdAudiotrack.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 5h11.64v5h-6.640000000000001v18.36h-0.07833333333333314q-0.3133333333333326 2.8133333333333326-2.421666666666667 4.726666666666667t-5 1.913333333333334q-3.125 0-5.313333333333333-2.1883333333333326t-2.1866666666666674-5.311666666666667 2.1866666666666674-5.316666666666666 5.313333333333333-2.1833333333333336q1.3283333333333331 0 2.5 0.466666666666665v-15.466666666666665z' })
            )
        );
    };

    return MdAudiotrack;
})(React.Component);

exports['default'] = MdAudiotrack;
module.exports = exports['default'];