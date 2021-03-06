/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPhotoLibrary = (function (_React$Component) {
    _inherits(MdPhotoLibrary, _React$Component);

    function MdPhotoLibrary() {
        _classCallCheck(this, MdPhotoLibrary);

        _React$Component.apply(this, arguments);
    }

    MdPhotoLibrary.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3600000000000003 10h3.283333333333333v23.36h23.356666666666666v3.2833333333333314h-23.356666666666666q-1.328333333333334 0-2.3050000000000015-0.9783333333333317t-0.9766666666666666-2.306666666666665v-23.358333333333334z m15 10l-5 6.640000000000001h20l-6.716666666666669-8.283333333333331-4.923333333333332 6.173333333333332z m18.28 6.640000000000001q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.3049999999999997 1.0166666666666657h-20q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0150000000000006-2.3433333333333337v-20q0-1.3283333333333331 1.0166666666666657-2.3049999999999997t2.341666666666667-0.9750000000000001h20q1.3283333333333331 0 2.3049999999999997 0.976666666666667t0.9766666666666666 2.3066666666666666v20z' })
            )
        );
    };

    return MdPhotoLibrary;
})(React.Component);

exports['default'] = MdPhotoLibrary;
module.exports = exports['default'];