"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Footer = function Footer() {
  var faqUrl = (0, _frontendPlatform.getConfig)().PROCTORED_EXAM_FAQ_URL;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-sequence"
  }, faqUrl && /*#__PURE__*/_react["default"].createElement(_paragon.Button, {
    "data-testid": "request-exam-time-button",
    variant: "link",
    href: faqUrl,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.footerButton",
    defaultMessage: "About Proctored Exams"
  })));
};
var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=Footer.js.map