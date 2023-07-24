"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UnknownAttemptStatusError = function UnknownAttemptStatusError() {
  return /*#__PURE__*/_react["default"].createElement(_paragon.Alert, {
    variant: "danger",
    "data-testid": "unknown-status-error"
  }, /*#__PURE__*/_react["default"].createElement(_paragon.Alert.Heading, null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.defaultError",
    defaultMessage: "A system error has occurred with your exam. Please reach out to support for assistance."
  })));
};
var _default = UnknownAttemptStatusError;
exports["default"] = _default;
//# sourceMappingURL=UnknownAttemptStatusError.js.map