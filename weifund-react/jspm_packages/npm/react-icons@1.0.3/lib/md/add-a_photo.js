/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAddAPhoto = (function (_React$Component) {
    _inherits(MdAddAPhoto, _React$Component);

    function MdAddAPhoto() {
        _classCallCheck(this, MdAddAPhoto);

        _React$Component.apply(this, arguments);
    }

    MdAddAPhoto.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.328333333333337 23.36q0-2.2666666666666657 1.5633333333333326-3.828333333333333t3.75-1.5666666666666664q2.2666666666666657 0 3.828333333333333 1.5666666666666664t1.5633333333333326 3.826666666666668q0 2.1883333333333326-1.5633333333333326 3.75t-3.828333333333333 1.5633333333333326-3.788333333333334-1.5233333333333334-1.5233333333333334-3.788333333333334z m5.311666666666667 8.280000000000001q3.4383333333333326 0 5.900000000000002-2.421666666666667t2.4599999999999937-5.858333333333334-2.461666666666666-5.899999999999999-5.899999999999999-2.460000000000001-5.855 2.458333333333332-2.421666666666667 5.900000000000002 2.421666666666667 5.858333333333334 5.859999999999999 2.423333333333332z m-11.640000000000004-15v-5h5v-5h11.64l3.0466666666666704 3.3599999999999994h5.313333333333329q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.341666666666667v20q0 1.3283333333333331-1.0166666666666657 2.3049999999999997t-2.3433333333333337 0.9766666666666737h-26.64q-1.3283333333333314 0-2.343333333333332-0.9766666666666666t-1.0166666666666675-2.305000000000007v-16.71666666666667h5z m-5-10v-5h3.3599999999999994v5h5v3.3599999999999994h-5v5h-3.3599999999999994v-5h-5v-3.3599999999999994h5z' })
            )
        );
    };

    return MdAddAPhoto;
})(React.Component);

exports['default'] = MdAddAPhoto;
module.exports = exports['default'];