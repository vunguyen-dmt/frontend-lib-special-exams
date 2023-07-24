"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _context = _interopRequireDefault(require("../../context"));
var _transTime = require("../transTime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StartTimedExamInstructions = function StartTimedExamInstructions() {
  var state = (0, _react.useContext)(_context["default"]);
  var exam = state.exam,
    startTimedExam = state.startTimedExam;
  var examDuration = (0, _transTime.transTime)(exam.total_time);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.title",
    defaultMessage: "Subsection is a Timed Exam ({examDuration})",
    values: {
      examDuration: examDuration
    }
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.text1",
    defaultMessage: "This exam has a time limit associated with it. "
  }), /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.text2",
    defaultMessage: "To pass this exam, you must complete the problems in the time allowed. "
  })), /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.text3",
    defaultMessage: 'After you select "I am ready to start this timed exam", ' + 'you will have {examDuration} to complete and submit the exam.',
    values: {
      examDuration: examDuration
    }
  })), /*#__PURE__*/_react["default"].createElement(_paragon.Alert, {
    variant: "danger",
    dismissible: false,
    icon: _icons.Info
  }, /*#__PURE__*/_react["default"].createElement(_paragon.Alert.Heading, null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.attention",
    defaultMessage: "Attention!"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.text4",
    defaultMessage: "You must click the 'Submit' button for each question or group of questions to be scored. Clicking the Save button does NOT count as having submitted an answer."
  }))), /*#__PURE__*/_react["default"].createElement(_paragon.Button, {
    "data-testid": "start-exam-button",
    variant: "outline-primary",
    onClick: startTimedExam
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.startExamButtonText",
    defaultMessage: "I am ready to start this timed exam."
  })));
};
var _default = StartTimedExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=StartTimedExamInstructions.js.map