(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

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

/***/ "./resources/lms/src/member/components/change-language/ChangeLanguage.js":
/*!*******************************************************************************!*\
  !*** ./resources/lms/src/member/components/change-language/ChangeLanguage.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_changeLanguageAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/changeLanguageAction */ "./resources/lms/src/member/store/actions/changeLanguageAction.js");
/* harmony import */ var _ChangeLanguageForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChangeLanguageForm */ "./resources/lms/src/member/components/change-language/ChangeLanguageForm.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_actions_getLanguageAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/getLanguageAction */ "./resources/lms/src/member/store/actions/getLanguageAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");










var ChangeLanguage = function ChangeLanguage(props) {
  var postSettings = props.postSettings,
      toggleChangeLanguageModal = props.toggleChangeLanguageModal,
      isChangeLanguageModelToggle = props.isChangeLanguageModelToggle,
      fetchSettings = props.fetchSettings,
      settings = props.settings,
      selectedLanguage = props.selectedLanguage;
  var bookLanguagesOptions = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedOptions"])(_constants__WEBPACK_IMPORTED_MODULE_8__["languageOptions"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchSettings(true);
  }, []);

  var onSaveChangeLanguage = function onSaveChangeLanguage(language) {
    postSettings(language);
  };

  var prepareFormOption = {
    onSaveChangeLanguage: onSaveChangeLanguage,
    initialValues: {
      language: bookLanguagesOptions.find(function (lang) {
        return lang.id === selectedLanguage.id;
      })
    },
    onCancel: toggleChangeLanguageModal
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    isOpen: isChangeLanguageModelToggle,
    toggle: toggleChangeLanguageModal,
    className: 'modal-primary primary modal-config--small'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalHeader"], {
    toggle: toggleChangeLanguageModal
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('change-language.model.header-title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChangeLanguageForm__WEBPACK_IMPORTED_MODULE_4__["default"], prepareFormOption)));
};

ChangeLanguage.propTypes = {
  postSettings: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleChangeLanguageModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  fetchSettings: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  settings: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  selectedLanguage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

var prepareSelectedSetting = function prepareSelectedSetting(settings, filterKey) {
  if (settings.length > 0) {
    return {
      id: settings[0].value,
      key: settings[0].key
    };
  }
};

var mapStateToProps = function mapStateToProps(state) {
  var settings = state.settings;
  var settingsArray = Object.values(settings);

  var settingsArr = _.mapKeys(settingsArray, 'key');

  return {
    isChangeLanguageModelToggle: state.isChangeLanguageModelToggle,
    settings: settingsArr,
    selectedLanguage: prepareSelectedSetting(settingsArray, _constants__WEBPACK_IMPORTED_MODULE_8__["settingsKey"].LANGUAGE)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchSettings: _store_actions_getLanguageAction__WEBPACK_IMPORTED_MODULE_7__["fetchSettings"],
  postSettings: _store_actions_changeLanguageAction__WEBPACK_IMPORTED_MODULE_3__["postSettings"]
})(ChangeLanguage));

/***/ }),

/***/ "./resources/lms/src/member/components/change-language/ChangeLanguageForm.js":
/*!***********************************************************************************!*\
  !*** ./resources/lms/src/member/components/change-language/ChangeLanguageForm.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/lms/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/lms/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/lms/src/shared/components/Select.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var ChangeLanguageForm = function ChangeLanguageForm(props) {
  var onSaveChangeLanguage = props.onSaveChangeLanguage,
      handleSubmit = props.handleSubmit,
      settings = props.settings;
  var inputRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  var bookLanguagesOptions = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__["getFormattedOptions"])(_constants__WEBPACK_IMPORTED_MODULE_6__["languageOptions"]);

  var prepareFormData = function prepareFormData(key, value, display_name) {
    return {
      key: key,
      value: value,
      display_name: display_name
    };
  };

  var onSave = function onSave(formValues) {
    var language = formValues.language;
    var settings = [prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_6__["settingsKey"].LANGUAGE, language.id, language.name)];
    onSaveChangeLanguage(settings);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "animated fadeIn m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "language",
    label: "member.select.language.label",
    required: true,
    groupText: "language",
    options: bookLanguagesOptions,
    placeholder: "member.select.language.placeholder",
    component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_8__["default"],
    isSearchable: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    onSave: handleSubmit(onSave)
  }, props))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'changeLanguageForm'
})(ChangeLanguageForm));

/***/ }),

/***/ "./resources/lms/src/member/components/change-password/ChangePassword.js":
/*!*******************************************************************************!*\
  !*** ./resources/lms/src/member/components/change-password/ChangePassword.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_changePasswordAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/changePasswordAction */ "./resources/lms/src/member/store/actions/changePasswordAction.js");
/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChangePasswordForm */ "./resources/lms/src/member/components/change-password/ChangePasswordForm.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");








var ChangePassword = function ChangePassword(props) {
  var onChangePassword = props.onChangePassword,
      toggleChangePasswordModal = props.toggleChangePasswordModal,
      isChangePasswordModelToggle = props.isChangePasswordModelToggle;

  var onSaveChangePassword = function onSaveChangePassword(formValues) {
    onChangePassword(formValues);
  };

  var prepareFormOption = {
    onSaveChangePassword: onSaveChangePassword,
    onCancel: toggleChangePasswordModal
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    isOpen: isChangePasswordModelToggle,
    toggle: toggleChangePasswordModal,
    className: 'modal-primary primary modal-config--small'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalHeader"], {
    toggle: toggleChangePasswordModal
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('change-password.model.header-title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__["default"], prepareFormOption)));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isChangePasswordModelToggle: state.isChangePasswordModelToggle
  };
};

ChangePassword.propTypes = {
  onChangePassword: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleChangePasswordModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  onChangePassword: _store_actions_changePasswordAction__WEBPACK_IMPORTED_MODULE_3__["onChangePassword"]
})(ChangePassword));

/***/ }),

/***/ "./resources/lms/src/member/components/change-password/ChangePasswordForm.js":
/*!***********************************************************************************!*\
  !*** ./resources/lms/src/member/components/change-password/ChangePasswordForm.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/lms/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/lms/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _changePasswordValidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changePasswordValidate */ "./resources/lms/src/member/components/change-password/changePasswordValidate.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ChangePasswordForm = function ChangePasswordForm(props) {
  var onSaveChangePassword = props.onSaveChangePassword,
      handleSubmit = props.handleSubmit;
  var inputRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      isPassword = _useState2[0],
      setIsPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isConfirmPassword = _useState4[0],
      setIsConfirmPassword = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    inputRef.current.focus();
  }, []);

  var onSave = function onSave(formValues) {
    onSaveChangePassword(formValues);
  };

  var onClickShowPassword = function onClickShowPassword() {
    setIsPassword(!isPassword);
  };

  var onClickShowConfirmPassword = function onClickShowConfirmPassword() {
    setIsConfirmPassword(!isConfirmPassword);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "animated fadeIn m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: 'current_password',
    type: "password",
    label: "change-password.input.old_password.label",
    required: true,
    autoComplete: 'off',
    inputRef: inputRef,
    groupText: "lock",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: 'password',
    type: isPassword ? "password" : "text",
    label: "change-password.input.password.label",
    required: true,
    autoComplete: 'off',
    groupText: "lock",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
    appendGroupText: isPassword ? "eye-slash" : "eye",
    isAppendIcon: true,
    onClick: function onClick() {
      return onClickShowPassword();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: 'confirm_password',
    type: isConfirmPassword ? "password" : "text",
    label: "change-password.input.confirm-password.label",
    autoComplete: 'off',
    required: true,
    groupText: "lock",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
    appendGroupText: isConfirmPassword ? "eye-slash" : "eye",
    isAppendIcon: true,
    onClick: function onClick() {
      return onClickShowConfirmPassword();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    onSave: handleSubmit(onSave)
  }, props))));
};

ChangePasswordForm.propTypes = {
  onSaveChangePassword: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'changePasswordForm',
  validate: _changePasswordValidate__WEBPACK_IMPORTED_MODULE_6__["default"]
})(ChangePasswordForm));

/***/ }),

/***/ "./resources/lms/src/member/components/change-password/changePasswordValidate.js":
/*!***************************************************************************************!*\
  !*** ./resources/lms/src/member/components/change-password/changePasswordValidate.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ __webpack_exports__["default"] = (function (formValues) {
  var errors = {};

  if (!formValues.current_password) {
    errors.name = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('change-password.old_password.input.validate.msg');
  }

  if (!formValues.password) {
    errors.password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('change-password.password.input.validate.msg');
  }

  if (formValues.password && formValues.password.length < 6) {
    errors.password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('change-password.input.password-length.validate.label');
  }

  if (!formValues.confirm_password) {
    errors.confirm_password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('change-password.confirm_password.input.validate.msg');
  }

  if (formValues.password !== formValues.confirm_password) {
    errors.confirm_password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('change-password.match_password.input.validate.msg');
  }

  return errors;
});

/***/ }),

/***/ "./resources/lms/src/member/components/layout/Header.js":
/*!**************************************************************!*\
  !*** ./resources/lms/src/member/components/layout/Header.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _change_password_ChangePassword_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change-password/ChangePassword.js */ "./resources/lms/src/member/components/change-password/ChangePassword.js");
/* harmony import */ var _change_language_ChangeLanguage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../change-language/ChangeLanguage */ "./resources/lms/src/member/components/change-language/ChangeLanguage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_action_changePasswordModalAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/action/changePasswordModalAction */ "./resources/lms/src/store/action/changePasswordModalAction.js");
/* harmony import */ var _store_action_changeLanguageModalAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/action/changeLanguageModalAction */ "./resources/lms/src/store/action/changeLanguageModalAction.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/js/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var MemberHeader = function MemberHeader(props) {
  var member = props.member,
      history = props.history,
      appName = props.appName,
      appLogo = props.appLogo,
      toggleChangePasswordModal = props.toggleChangePasswordModal,
      toggleChangeLanguageModal = props.toggleChangeLanguageModal;
  var cardModalProps = {
    toggleChangePasswordModal: toggleChangePasswordModal
  };
  var languageModalProps = {
    toggleChangeLanguageModal: toggleChangeLanguageModal
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      toggleOpen = _useState2[0],
      setToggle = _useState2[1];

  var imageUrl = null;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var sidebarShow = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.sidebarReducer.sidebarShow;
  });

  if (member) {
    member.name = member.first_name;

    if (member.last_name) {
      member.name += ' ' + member.last_name;
    }

    if (member.image_path) {
      imageUrl = member.image_path;
    }
  }

  var goToMemberProfile = function goToMemberProfile() {
    history.push(_constants__WEBPACK_IMPORTED_MODULE_3__["Routes"].MEMBER_PROFILE);
  };

  var toggle = function toggle() {
    setToggle(true);
    toggleChangePasswordModal();
  };

  var languageToggle = function languageToggle() {
    setToggle(false);
    toggleChangeLanguageModal();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CHeaderToggler"], {
    className: "ps-1",
    onClick: function onClick() {
      return dispatch({
        type: 'SET',
        sidebarShow: !sidebarShow
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_11__["cilMenu"],
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CSidebarBrand"], {
    className: "header__sidebar-logo d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "header__app-logo",
    src: appLogo,
    alt: appLogo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-2 header__app-name"
  }, appName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CHeaderNav"], {
    className: "ml-auto header__margin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
    variant: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Toggle, {
    placement: "bottom-end",
    caret: false,
    className: " py-0 shadow-none header__dropdown"
  }, imageUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageUrl,
    className: "img-avatar header__img",
    alt: "user-avatar"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__avatar img-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header__avatar-text"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getAvatarName"])(member ? member.name : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr-1 header__user-name text-dark"
  }, member ? member.name : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Menu, {
    placement: "bottom-end",
    className: "header__user-name pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
    onClick: goToMemberProfile,
    className: "header__border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-cog header__user-icon"
  }), Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('profile.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
    onClick: toggle,
    className: "header__border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-lock header__user-icon"
  }), Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('change-password.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
    onClick: languageToggle,
    className: "header__border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-language header__user-icon"
  }), Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('change-language.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
    onClick: function onClick(e) {
      return props.onLogout(e);
    },
    className: "header__border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-lock header__user-icon"
  }), Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('header.logout.title'))), toggleOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_change_password_ChangePassword_js__WEBPACK_IMPORTED_MODULE_5__["default"], cardModalProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_change_language_ChangeLanguage__WEBPACK_IMPORTED_MODULE_6__["default"], languageModalProps))));
};

MemberHeader.propTypes = {
  member: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  appName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  appLogo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, {
  toggleChangePasswordModal: _store_action_changePasswordModalAction__WEBPACK_IMPORTED_MODULE_8__["toggleChangePasswordModal"],
  toggleChangeLanguageModal: _store_action_changeLanguageModalAction__WEBPACK_IMPORTED_MODULE_9__["toggleChangeLanguageModal"]
})(MemberHeader));

/***/ }),

/***/ "./resources/lms/src/member/config/apiConfigWthFormData.js":
/*!*****************************************************************!*\
  !*** ./resources/lms/src/member/config/apiConfigWthFormData.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosInterceptor */ "./resources/lms/src/member/config/axiosInterceptor.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environment */ "./resources/lms/src/environment.js");



var wampServer = _environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + '/api/v1/';
var axiosApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: wampServer
});
_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__["default"].setupInterceptors(axiosApi, false, true);
/* harmony default export */ __webpack_exports__["default"] = (axiosApi);

/***/ }),

/***/ "./resources/lms/src/member/store/actions/changeLanguageAction.js":
/*!************************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/changeLanguageAction.js ***!
  \************************************************************************/
/*! exports provided: postSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSettings", function() { return postSettings; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/member/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _store_action_changeLanguageModalAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/action/changeLanguageModalAction */ "./resources/lms/src/store/action/changeLanguageModalAction.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var postSettings = function postSettings(language) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_5__["apiBaseURL"].UPDATE_SETTINGS, language).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["settingActionType"].POST_SETTINGS,
                  payload: response.data.data
                });
                dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__["addToast"])({
                  text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('change-language.success.message')
                }));
                dispatch(Object(_store_action_changeLanguageModalAction__WEBPACK_IMPORTED_MODULE_6__["toggleChangeLanguageModal"])());
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__["addToast"])({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                }));
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/member/store/actions/changePasswordAction.js":
/*!************************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/changePasswordAction.js ***!
  \************************************************************************/
/*! exports provided: onChangePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangePassword", function() { return onChangePassword; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/member/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _store_action_changePasswordModalAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/action/changePasswordModalAction */ "./resources/lms/src/store/action/changePasswordModalAction.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var onChangePassword = function onChangePassword(passwords) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_5__["apiBaseURL"].CHANGE_PASSWORD, passwords).then(function (response) {
                dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__["addToast"])({
                  text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__["getFormattedMessage"])('change-password.success.message')
                }));
                dispatch(Object(_store_action_changePasswordModalAction__WEBPACK_IMPORTED_MODULE_6__["toggleChangePasswordModal"])());
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__["addToast"])({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                }));
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/member/store/actions/getLanguageAction.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/getLanguageAction.js ***!
  \*********************************************************************/
/*! exports provided: fetchSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSettings", function() { return fetchSettings; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/member/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_currencyAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/currencyAction */ "./resources/lms/src/store/action/currencyAction.js");
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/lms/src/member/config/apiConfigWthFormData.js");
/* harmony import */ var _store_action_appSettingAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/action/appSettingAction */ "./resources/lms/src/store/action/appSettingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var fetchSettings = function fetchSettings() {
  var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isLoading ? dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(true)) : null;
              _context.next = 3;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_9__["apiBaseURL"].MY_SETTINGS).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["settingActionType"].FETCH_SETTING,
                  payload: response.data.data
                });
                isLoading ? dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(false)) : null;
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                isLoading ? dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(false)) : null;
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

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

/***/ "./resources/lms/src/store/action/changeLanguageModalAction.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/store/action/changeLanguageModalAction.js ***!
  \*********************************************************************/
/*! exports provided: toggleChangeLanguageModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleChangeLanguageModal", function() { return toggleChangeLanguageModal; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/constants/index.js");

var toggleChangeLanguageModal = function toggleChangeLanguageModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].CHANGE_LANGUAGE_MODAL_ACTION
  };
};

/***/ }),

/***/ "./resources/lms/src/store/action/changePasswordModalAction.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/store/action/changePasswordModalAction.js ***!
  \*********************************************************************/
/*! exports provided: toggleChangePasswordModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleChangePasswordModal", function() { return toggleChangePasswordModal; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/constants/index.js");

var toggleChangePasswordModal = function toggleChangePasswordModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].CHANGE_PASSWORD_MODEL_ACTION
  };
};

/***/ })

}]);