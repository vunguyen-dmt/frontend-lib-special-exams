"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RejectedProctoredExamInstructions = function RejectedProctoredExamInstructions() {
  var platformName = (0, _frontendPlatform.getConfig)().SITE_NAME;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "h3",
    "data-testid": "proctored-exam-instructions-title"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.RejectedProctoredExamInstructions.title",
    defaultMessage: "Your proctoring session was reviewed, but did not pass all requirements"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.RejectedProctoredExamInstructions.description",
    defaultMessage: 'If you have questions about the status of ' + 'your proctoring session results, contact {platformName} Support.',
    values: {
      platformName: platformName
    }
  })));
};
var _default = RejectedProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=RejectedProctoredExamInstructions.js.map