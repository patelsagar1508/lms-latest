(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./resources/lms/src/member/components/auth/ResetPassword.js":
/*!*******************************************************************!*\
  !*** ./resources/lms/src/member/components/auth/ResetPassword.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _loginFormValidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginFormValidate */ "./resources/lms/src/member/components/auth/loginFormValidate.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/CustomInputGroup */ "./resources/lms/src/shared/components/CustomInputGroup.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/authAction */ "./resources/lms/src/member/store/actions/authAction.js");













var MemberResetPassword = function MemberResetPassword(props) {
  var handleSubmit = props.handleSubmit,
      invalid = props.invalid,
      history = props.history,
      location = props.location,
      resetPassword = props.resetPassword;
  var params = new URLSearchParams(location.search);

  var onSubmit = function onSubmit(formValues) {
    delete formValues.confirm_password;
    formValues.token = params.get('token');
    resetPassword(formValues, history);
  };

  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app flex-row align-items-center"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "Reset Password"
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: "justify-content-center"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: "4"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      className: "p-3"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: handleSubmit(onSubmit)
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('reset-password.title')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-muted"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('reset-password.note')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "password",
      type: "password",
      placeholder: "profile.input.password.label",
      groupText: "icon-lock",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_9__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "confirm_password",
      type: "password",
      placeholder: "profile.input.confirm-password.label",
      groupText: "icon-lock",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_9__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      className: "mt-2 d-flex justify-content-end"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "primary",
      disabled: invalid,
      className: "px-4"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('global.input.reset-btn.label')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: _constants__WEBPACK_IMPORTED_MODULE_7__["Routes"].MEMBER_FORGOT_PASSWORD,
      className: "btn btn-secondary ml-2"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('global.input.back-btn.label')))))))))))
  );
};

MemberResetPassword.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  resetPassword: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
var form = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'resetPasswordForm',
  validate: _loginFormValidate__WEBPACK_IMPORTED_MODULE_6__["default"]
})(MemberResetPassword);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  resetPassword: _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__["resetPassword"]
})(form));

/***/ }),

/***/ "./resources/lms/src/member/components/auth/loginFormValidate.js":
/*!***********************************************************************!*\
  !*** ./resources/lms/src/member/components/auth/loginFormValidate.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ __webpack_exports__["default"] = (function (formValues) {
  var errors = {};

  if (!formValues.email) {
    errors.email = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('profile.input.email-required.validate.label');
  }

  var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!regex.test(formValues.email)) {// errors.email = 'Invalid email address !'
  }

  if (!formValues.password) {
    errors.password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('profile.input.password-required.validate.label');
  }

  if (formValues.password && formValues.password.length < 6) {
    errors.password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('profile.input.password-invalid.validate.label');
  }

  if (formValues.confirm_password !== formValues.password) {
    errors.confirm_password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('profile.input.confirm-password.validate.label');
  }

  return errors;
});

/***/ })

}]);