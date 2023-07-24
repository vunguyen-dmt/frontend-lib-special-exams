"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
var _paragon = require("@edx/paragon");
var _context = _interopRequireDefault(require("../../context"));
var _Footer = _interopRequireDefault(require("./Footer"));
var _transTime = _interopRequireDefault(require("../transTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReadyToStartProctoredExamInstructions = function ReadyToStartProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context["default"]);
  var exam = state.exam,
    getExamReviewPolicy = state.getExamReviewPolicy,
    startProctoredExam = state.startProctoredExam;
  var attempt = exam.attempt,
    reviewPolicy = exam.reviewPolicy;
  var examDuration = attempt.total_time ? (0, _transTime["default"])(attempt.total_time) : exam.total_time;
  var platformName = (0, _frontendPlatform.getConfig)().SITE_NAME;
  var rulesUrl = (0, _frontendPlatform.getConfig)().PROCTORED_EXAM_RULES_URL;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    beginExamClicked = _useState2[0],
    setBeginExamClicked = _useState2[1];
  (0, _react.useEffect)(function () {
    getExamReviewPolicy();
  }, []);
  var handleStart = function handleStart() {
    setBeginExamClicked(true);
    startProctoredExam();
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.title1",
    defaultMessage: "Important"
  })), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", {
    "data-testid": "duration-text"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text1",
    defaultMessage: 'You have {examDuration} to complete this exam.',
    values: {
      examDuration: examDuration
    }
  })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text2",
    defaultMessage: "Once you start the exam, you cannot stop the timer."
  })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text3",
    defaultMessage: "For all question types, you must click \"submit\" to complete your answer."
  })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text4",
    defaultMessage: "If time expires before you click \"End My Exam\", only your submitted answers will be graded."
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h3"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.title2",
    defaultMessage: "Proctored Exam Rules"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text5",
    defaultMessage: "You must adhere to the following rules while you complete this exam."
  }), "\xA0", /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text6",
    defaultMessage: 'If you violate these rules, you will receive a score of 0 ' + 'on the exam, and you will not be eligible for academic course credit.'
  })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_paragon.Button, {
    variant: "link",
    target: "_blank",
    href: rulesUrl,
    "data-testid": "proctored-exam-instructions-rulesLink"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.rulesLink",
    defaultMessage: '{platformName} Rules for Online Proctored Exams',
    values: {
      platformName: platformName
    }
  }))), reviewPolicy && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h3"
  }, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.title3",
    defaultMessage: "Additional Exam Rules"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text7",
    defaultMessage: 'The following additional rules apply to this exam. ' + 'These rules take precedence over the Rules for Online Proctored Exams.'
  })), /*#__PURE__*/_react["default"].createElement("p", null, reviewPolicy)), /*#__PURE__*/_react["default"].createElement(_paragon.Button, {
    "data-testid": "start-exam-button",
    variant: "primary",
    onClick: handleStart,
    disabled: beginExamClicked
  }, beginExamClicked && /*#__PURE__*/_react["default"].createElement(_paragon.Spinner, {
    "data-testid": "exam-loading-spinner",
    animation: "border"
  }), /*#__PURE__*/_react["default"].createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.startExamButtonText",
    defaultMessage: "Start exam"
  }))), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
};
var _default = ReadyToStartProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=ReadyToStartProctoredExamInstructions.js.map