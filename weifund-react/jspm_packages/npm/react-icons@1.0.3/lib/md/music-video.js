/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdMusicVideo = (function (_React$Component) {
    _inherits(MdMusicVideo, _React$Component);

    function MdMusicVideo() {
        _classCallCheck(this, MdMusicVideo);

        _React$Component.apply(this, arguments);
    }

    MdMusicVideo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.360000000000001 25q0-2.0333333333333314 1.4833333333333325-3.5166666666666657t3.5166666666666657-1.4833333333333343q0.5466666666666669 0 1.6400000000000006 0.3133333333333326v-10.313333333333333h8.36v3.3599999999999994h-5v11.716666666666669q0 2.0333333333333314-1.4833333333333343 3.4783333333333353t-3.5166666666666657 1.4450000000000003-3.5166666666666657-1.4833333333333343-1.4833333333333343-3.5166666666666657z m21.64 6.640000000000004v-23.28333333333334h-30v23.283333333333335h30z m0-26.640000000000004q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3416666666666677v23.283333333333335q0 1.3266666666666644-1.0166666666666657 2.341666666666665t-2.3433333333333337 1.0166666666666657h-30q-1.3283333333333331 0-2.3433333333333333-1.0166666666666657t-1.0166666666666666-2.3433333333333337v-23.28333333333333q0-1.3266666666666689 1.0166666666666666-2.3416666666666686t2.3433333333333333-1.0150000000000006h30z' })
            )
        );
    };

    return MdMusicVideo;
})(React.Component);

exports['default'] = MdMusicVideo;
module.exports = exports['default'];