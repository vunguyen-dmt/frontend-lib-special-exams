"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transTime = void 0;
var _frontendPlatform = require("@edx/frontend-platform");
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getCookie = function getCookie(cookieName) {
  var cookies = new _universalCookie["default"]();
  return cookies.get(cookieName);
};
var transTime = function transTime(time) {
  if (!time) {
    return time;
  }
  var lang = getCookie((0, _frontendPlatform.getConfig)().LANGUAGE_PREFERENCE_COOKIE_NAME);
  if (lang !== 'vi') {
    return time;
  }
  var transDict = {
    'second': 'giây',
    'seconds': 'giây',
    'minute': 'phút',
    'minutes': 'phút',
    'hour': 'giờ',
    'hours': 'giờ',
    'day': 'ngày',
    'days': 'ngày',
    'week': 'tuần',
    'weeks': 'tuần',
    'month': 'tháng',
    'months': 'tháng',
    'year': 'năm',
    'years': 'năm'
  };
  var splitted = time.split(' ');
  var out = [];
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i] in transDict) {
      out.push(transDict[splitted[i]]);
    } else {
      out.push(splitted[i]);
    }
  }
  return out.join(' ');
};
exports.transTime = transTime;
//# sourceMappingURL=transTime.js.map