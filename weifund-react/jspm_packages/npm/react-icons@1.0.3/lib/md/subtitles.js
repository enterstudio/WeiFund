/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSubtitles = (function (_React$Component) {
    _inherits(MdSubtitles, _React$Component);

    function MdSubtitles() {
        _classCallCheck(this, MdSubtitles);

        _React$Component.apply(this, arguments);
    }

    MdSubtitles.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.36 23.36v-3.3599999999999994h-16.716666666666665v3.3599999999999994h16.716666666666665z m0 6.640000000000001v-3.3599999999999994h-6.716666666666669v3.3599999999999994h6.716666666666669z m-10 0v-3.3599999999999994h-16.716666666666665v3.3599999999999994h16.716666666666665z m-16.72-10v3.3599999999999994h6.716666666666669v-3.3599999999999994h-6.716666666666668z m26.72-13.360000000000001q1.3283333333333331 0 2.3049999999999997 1.0166666666666666t0.9750000000000014 2.341666666666666v20q0 1.326666666666668-0.9766666666666666 2.341666666666665t-2.306666666666665 1.0166666666666657h-26.713333333333335q-1.330000000000001 0-2.3066666666666675-1.0166666666666657t-0.9766666666666666-2.3399999999999963v-20q0-1.33 0.9766666666666666-2.3450000000000006t2.3050000000000006-1.0166666666666666h26.71666666666667z' })
            )
        );
    };

    return MdSubtitles;
})(React.Component);

exports['default'] = MdSubtitles;
module.exports = exports['default'];