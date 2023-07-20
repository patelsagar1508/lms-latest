(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/shared/action-buttons/ActionButtons.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/lms/src/shared/action-buttons/ActionButtons.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html[dir=rtl] .save-action__save-btn {\n  float: left;\n  margin-left: 0;\n}\nhtml[dir=rtl] .save-action__cancel-btn {\n  float: left;\n  margin-left: 0;\n  margin-right: 10px;\n}\n\n.save-action {\n  margin-top: 10px;\n}\n.save-action__save-btn {\n  float: right;\n  margin-left: 10px;\n}\n.save-action__cancel-btn {\n  float: right;\n  margin-left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/lms/src/shared/action-buttons/ActionButtons.scss":
/*!********************************************************************!*\
  !*** ./resources/lms/src/shared/action-buttons/ActionButtons.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./ActionButtons.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/shared/action-buttons/ActionButtons.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/lms/src/shared/action-buttons/SaveAction.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/shared/action-buttons/SaveAction.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _ActionButtons_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButtons.scss */ "./resources/lms/src/shared/action-buttons/ActionButtons.scss");
/* harmony import */ var _ActionButtons_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ActionButtons_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");






var SaveAction = function SaveAction(_ref) {
  var onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      invalid = _ref.invalid,
      isHideCancel = _ref.isHideCancel,
      pristine = _ref.pristine,
      _ref$isDisableSubmit = _ref.isDisableSubmit,
      isDisableSubmit = _ref$isDisableSubmit === void 0 ? false : _ref$isDisableSubmit,
      newBookItem = _ref.newBookItem;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "save-action"
  }, !isHideCancel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onCancel,
    color: "secondary",
    className: "save-action__cancel-btn",
    size: "md"
  }, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('global.input.cancel-btn.label')) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onSave,
    disabled: invalid || pristine || isDisableSubmit,
    color: "primary",
    size: "md",
    className: "save-action__save-btn text-white"
  }, newBookItem ? Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('books.items.input.add-item-btn.label') : Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('global.input.save-btn.label')));
};

SaveAction.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SaveAction);

/***/ }),

/***/ "./resources/lms/src/shared/components/InputGroup.js":
/*!***********************************************************!*\
  !*** ./resources/lms/src/shared/components/InputGroup.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component.scss */ "./resources/lms/src/shared/components/Component.scss");
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Component_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var ReactInputGroup = function ReactInputGroup(props) {
  var input = props.input,
      label = props.label,
      _props$type = props.type,
      type = _props$type === void 0 ? "text" : _props$type,
      min = props.min,
      max = props.max,
      required = props.required,
      readOnly = props.readOnly,
      _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? "off" : _props$autoComplete,
      _onClick = props.onClick,
      inputRef = props.inputRef,
      groupText = props.groupText,
      _props$addOnType = props.addOnType,
      addOnType = _props$addOnType === void 0 ? 'prepend' : _props$addOnType,
      placeholder = props.placeholder,
      _props$meta = props.meta,
      touched = _props$meta.touched,
      error = _props$meta.error,
      isAppendIcon = props.isAppendIcon,
      appendGroupText = props.appendGroupText,
      className = props.className,
      _props$isDefaultCurre = props.isDefaultCurrency,
      isDefaultCurrency = _props$isDefaultCurre === void 0 ? false : _props$isDefaultCurre;
  var intl = new react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"]();
  var labelText = type !== 'hidden' ? intl.formatMessage({
    id: label ? label : placeholder
  }) : label;
  var inputClass = "".concat(touched && error ? "is-invalid ".concat(className) : className);
  var labelClass = required ? 'control-label' : '';
  var formClass = type === 'hidden' ? 'input-form-group' : '';
  var placeholderText = placeholder ? intl.formatMessage({
    id: placeholder
  }) : labelText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: formClass
  }, type !== 'hidden' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    className: labelClass
  }, labelText) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, type !== 'hidden' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
    addonType: addOnType
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupText"], null, isDefaultCurrency ? groupText : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-".concat(groupText)
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
    type: type
  }, input, {
    min: min,
    max: max,
    readOnly: readOnly,
    innerRef: inputRef,
    required: required,
    className: inputClass,
    placeholder: placeholderText,
    autoComplete: autoComplete
  })), isAppendIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupText"], {
    className: "cursor-pointer",
    onClick: function onClick() {
      return _onClick(input.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-".concat(appendGroupText)
  })) : null, touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormFeedback"], null, error)));
};

ReactInputGroup.propTypes = {
  input: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  groupText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  appendGroupText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  addOnType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isAppendIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ReactInputGroup);

/***/ }),

/***/ "./resources/lms/src/shared/custom-hooks/index.js":
/*!********************************************************!*\
  !*** ./resources/lms/src/shared/custom-hooks/index.js ***!
  \********************************************************/
/*! exports provided: openModal, imagePicker, bookCreationWarning, bookITemCreationWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagePicker", function() { return imagePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookCreationWarning", function() { return bookCreationWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookITemCreationWarning", function() { return bookITemCreationWarning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var openModal = function openModal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCreate = _useState2[0],
      setIsCreate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isEdit = _useState4[0],
      setIsEdit = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDelete = _useState6[0],
      setIsDelete = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      object = _useState8[0],
      setObject = _useState8[1];

  var onOpenModal = function onOpenModal(isEd) {
    var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    setIsCreate(!isEd);
    setIsEdit(isEd);
    setIsDelete(isDel);
    setObject(obj);
  };

  return [isCreate, isEdit, isDelete, object, onOpenModal];
};
var imagePicker = function imagePicker(change, newImage) {
  var defImage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isDefImage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var key = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'file_name';

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(newImage),
      _useState10 = _slicedToArray(_useState9, 2),
      image = _useState10[0],
      setImage = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isDefImage),
      _useState12 = _slicedToArray(_useState11, 2),
      isDefaultImage = _useState12[0],
      setIsDefaultImage = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState14 = _slicedToArray(_useState13, 2),
      file = _useState14[0],
      setFile = _useState14[1];

  var onFileChange = function onFileChange(event) {
    change(key, isDefImage);
    setFile(event.target.files[0]);
    setIsDefaultImage(false);
    var fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);

    fileReader.onloadend = function () {
      setImage(fileReader.result);
    };
  };

  var onRemovePhoto = function onRemovePhoto() {
    change(key, isDefImage);
    setFile(null);
    setImage(defImage);
    setIsDefaultImage(true);
  };

  return [image, isDefaultImage, file, onFileChange, onRemovePhoto];
};
var bookCreationWarning = function bookCreationWarning(change) {
  var onChangeValue = function onChangeValue(options, objArray, key) {
    if (options && options.length > 0) change(key, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.differenceWith(options, objArray, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual));
  };

  return [onChangeValue];
};
var bookITemCreationWarning = function bookITemCreationWarning(change) {
  var onChangeValue = function onChangeValue(option, objArray, key, item) {
    if (option) {
      change("".concat(item, ".").concat(key), lodash__WEBPACK_IMPORTED_MODULE_1___default.a.differenceWith([option], objArray, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual));
    } else {
      change("".concat(item, ".").concat(key), []);
    }
  };

  return [onChangeValue];
};

/***/ })

}]);