/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSpeakerGroup = (function (_React$Component) {
    _inherits(MdSpeakerGroup, _React$Component);

    function MdSpeakerGroup() {
        _classCallCheck(this, MdSpeakerGroup);

        _React$Component.apply(this, arguments);
    }

    MdSpeakerGroup.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 8.360000000000001v26.64h16.64v3.3599999999999994h-16.64q-1.4066666666666663 0-2.383333333333333-1.0166666666666657t-0.9766666666666666-2.3416666666666686v-26.638333333333332h3.3599999999999994z m9.14 12.499999999999998q0-1.7166666666666686 1.25-2.9666666666666686t2.9666666666666686-1.25 2.9333333333333336 1.25 1.2100000000000009 2.9666666666666686-1.211666666666666 2.9299999999999997-2.9299999999999997 1.211666666666666-2.966666666666665-1.2100000000000009-1.25-2.9299999999999997z m4.219999999999999 6.640000000000001q2.7333333333333343 0 4.688333333333333-1.9533333333333331t1.951666666666668-4.688333333333333-1.9500000000000028-4.725000000000001-4.690000000000001-1.993333333333334-4.726666666666663 1.993333333333334-1.9916666666666671 4.725000000000001 1.9916666666666671 4.688333333333333 4.726666666666667 1.9533333333333331z m0-22.5q-1.3283333333333331 0-2.3433333333333337 0.9766666666666666t-1.0166666666666657 2.3833333333333346 0.9783333333333317 2.3433333333333337 2.383333333333333 0.9383333333333326q1.3283333333333331 0 2.3049999999999997-0.9383333333333326t0.9766666666666666-2.3433333333333337-0.9766666666666666-2.383333333333333-2.304999999999996-0.9766666666666683z m6.953333333333333-3.36q1.25 0 2.1499999999999986 0.8999999999999999t0.8966666666666683 2.1466666666666674v23.983333333333334q0 1.25-0.8999999999999986 2.111666666666668t-2.1466666666666683 0.8583333333333343h-13.983333333333334q-1.25 0-2.1116666666666664-0.8599999999999994t-0.8583333333333325-2.111666666666668v-23.980000000000004q0-1.2499999999999991 0.8599999999999994-2.1499999999999995t2.111666666666668-0.9000000000000001h13.983333333333334z' })
            )
        );
    };

    return MdSpeakerGroup;
})(React.Component);

exports['default'] = MdSpeakerGroup;
module.exports = exports['default'];