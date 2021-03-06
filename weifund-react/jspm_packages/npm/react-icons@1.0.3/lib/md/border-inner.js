/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBorderInner = (function (_React$Component) {
    _inherits(MdBorderInner, _React$Component);

    function MdBorderInner() {
        _classCallCheck(this, MdBorderInner);

        _React$Component.apply(this, arguments);
    }

    MdBorderInner.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 28.36v-3.3599999999999994h3.359999999999996v3.3599999999999994h-3.3599999999999994z m0 6.640000000000001v-3.3599999999999994h3.359999999999996v3.3599999999999994h-3.3599999999999994z m-10-30v13.36h13.359999999999996v3.2833333333333314h-13.36v13.35666666666667h-3.2833333333333314v-13.358333333333334h-13.35666666666667v-3.2833333333333314h13.358333333333334v-13.358333333333334h3.2833333333333314z m3.359999999999996 30v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.640000000000001-30h3.3599999999999994v3.3599999999999994h-3.3599999999999994v-3.3599999999999994z m0 10v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m-3.280000000000001-10v3.3599999999999994h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z m-20 0v3.3599999999999994h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z m6.640000000000001 0v3.3599999999999994h-3.3599999999999994v-3.3599999999999994h3.3599999999999994z m-10 23.36v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m3.360000000000001-16.72v3.3599999999999994h-3.360000000000001v-3.3599999999999994h3.3599999999999994z m3.2799999999999994 23.36v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m-6.640000000000001 0v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z' })
            )
        );
    };

    return MdBorderInner;
})(React.Component);

exports['default'] = MdBorderInner;
module.exports = exports['default'];