/* */ 
(function(Buffer) {
  'use strict';
  const internals = {};
  exports.escapeJavaScript = function(input) {
    if (!input) {
      return '';
    }
    let escaped = '';
    for (let i = 0; i < input.length; ++i) {
      const charCode = input.charCodeAt(i);
      if (internals.isSafe(charCode)) {
        escaped += input[i];
      } else {
        escaped += internals.escapeJavaScriptChar(charCode);
      }
    }
    return escaped;
  };
  exports.escapeHtml = function(input) {
    if (!input) {
      return '';
    }
    let escaped = '';
    for (let i = 0; i < input.length; ++i) {
      const charCode = input.charCodeAt(i);
      if (internals.isSafe(charCode)) {
        escaped += input[i];
      } else {
        escaped += internals.escapeHtmlChar(charCode);
      }
    }
    return escaped;
  };
  internals.escapeJavaScriptChar = function(charCode) {
    if (charCode >= 256) {
      return '\\u' + internals.padLeft('' + charCode, 4);
    }
    const hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
    return '\\x' + internals.padLeft(hexValue, 2);
  };
  internals.escapeHtmlChar = function(charCode) {
    const namedEscape = internals.namedHtml[charCode];
    if (typeof namedEscape !== 'undefined') {
      return namedEscape;
    }
    if (charCode >= 256) {
      return '&#' + charCode + ';';
    }
    const hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
    return '&#x' + internals.padLeft(hexValue, 2) + ';';
  };
  internals.padLeft = function(str, len) {
    while (str.length < len) {
      str = '0' + str;
    }
    return str;
  };
  internals.isSafe = function(charCode) {
    return (typeof internals.safeCharCodes[charCode] !== 'undefined');
  };
  internals.namedHtml = {
    '38': '&amp;',
    '60': '&lt;',
    '62': '&gt;',
    '34': '&quot;',
    '160': '&nbsp;',
    '162': '&cent;',
    '163': '&pound;',
    '164': '&curren;',
    '169': '&copy;',
    '174': '&reg;'
  };
  internals.safeCharCodes = (function() {
    const safe = {};
    for (let i = 32; i < 123; ++i) {
      if ((i >= 97) || (i >= 65 && i <= 90) || (i >= 48 && i <= 57) || i === 32 || i === 46 || i === 44 || i === 45 || i === 58 || i === 95) {
        safe[i] = null;
      }
    }
    return safe;
  }());
})(require('buffer').Buffer);
