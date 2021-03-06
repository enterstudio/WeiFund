/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdGraphicEq = (function (_React$Component) {
    _inherits(MdGraphicEq, _React$Component);

    function MdGraphicEq() {
        _classCallCheck(this, MdGraphicEq);

        _React$Component.apply(this, arguments);
    }

    MdGraphicEq.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 16.64h3.359999999999996v6.716666666666669h-3.3599999999999994v-6.716666666666669z m-6.640000000000004 13.36v-20h3.3599999999999994v20h-3.3599999999999994z m-20-6.640000000000001v-6.716666666666669h3.3599999999999994v6.716666666666669h-3.3599999999999994z m13.36 13.280000000000001v-33.28333333333333h3.2833333333333314v33.28333333333333h-3.2833333333333314z m-6.719999999999999-6.640000000000001v-20h3.3599999999999994v20h-3.3599999999999994z' })
            )
        );
    };

    return MdGraphicEq;
})(React.Component);

exports['default'] = MdGraphicEq;
module.exports = exports['default'];