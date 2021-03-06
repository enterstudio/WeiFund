/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPhotoSizeSelectSmall = (function (_React$Component) {
    _inherits(MdPhotoSizeSelectSmall, _React$Component);

    function MdPhotoSizeSelectSmall() {
        _classCallCheck(this, MdPhotoSizeSelectSmall);

        _React$Component.apply(this, arguments);
    }

    MdPhotoSizeSelectSmall.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.64 5v3.3599999999999994h-3.283333333333333v-3.3599999999999994h3.283333333333333z m6.719999999999999 0v3.3599999999999994h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z m-13.36 13.36v3.2833333333333314h-3.36v-3.2833333333333314h3.36z m0-13.36v3.3599999999999994h-3.36q0-1.25 1.0550000000000002-2.3049999999999997t2.3049999999999997-1.0549999999999997z m26.64 26.64v3.3599999999999994h-3.2833333333333314v-3.3599999999999994h3.2833333333333314z m0-26.64v3.3599999999999994h-3.2833333333333314v-3.3599999999999994h3.2833333333333314z m-6.640000000000001 26.640000000000004v3.359999999999996h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z m-20-20v3.359999999999996h-3.36v-3.3599999999999994h3.36z m0 23.359999999999996q-1.3283333333333331 0-2.3433333333333333-1.0166666666666657t-1.0166666666666666-2.3416666666666686v-6.641666666666666h16.720000000000002v10h-13.360000000000003z m30-30q1.25 0 2.3049999999999997 1.0549999999999997t1.0549999999999997 2.3049999999999997h-3.3599999999999994v-3.3599999999999994z m3.3599999999999994 6.640000000000001v3.3599999999999994h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z m-13.36-6.640000000000001v3.3599999999999994h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z m13.36 26.64q0 1.25-1.0549999999999997 2.3049999999999997t-2.3049999999999997 1.0549999999999997v-3.3599999999999994h3.3599999999999994z m0-13.280000000000001v3.2833333333333314h-3.3599999999999994v-3.2833333333333314h3.3599999999999994z m0 6.640000000000001v3.3599999999999994h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z' })
            )
        );
    };

    return MdPhotoSizeSelectSmall;
})(React.Component);

exports['default'] = MdPhotoSizeSelectSmall;
module.exports = exports['default'];