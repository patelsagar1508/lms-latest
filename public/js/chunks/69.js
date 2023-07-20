(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./resources/lms/src/member/components/auth/ForgotPassword.js":
/*!********************************************************************!*\
  !*** ./resources/lms/src/member/components/auth/ForgotPassword.js ***!
  \********************************************************************/
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
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environment */ "./resources/lms/src/environment.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/CustomInputGroup */ "./resources/lms/src/shared/components/CustomInputGroup.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_authAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/authAction */ "./resources/lms/src/member/store/actions/authAction.js");














var MemberForgotPassword = function MemberForgotPassword(props) {
  var handleSubmit = props.handleSubmit,
      invalid = props.invalid,
      isSubmitted = props.isSubmitted,
      forgotPassword = props.forgotPassword;

  var onSubmit = function onSubmit(formValues) {
    formValues.url = _environment__WEBPACK_IMPORTED_MODULE_7__["environment"].URL + '/#' + _constants__WEBPACK_IMPORTED_MODULE_8__["Routes"].MEMBER_RESET_PASSWORD;
    forgotPassword(formValues);
  };

  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app flex-row align-items-center"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Forgot Password"
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
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, !isSubmitted ?
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: handleSubmit(onSubmit)
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('forgot-password.title')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-muted"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('forgot-password.note')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "email",
      type: "email",
      placeholder: "profile.input.email.label",
      groupText: "icon-envelope",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_10__["default"]
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
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('global.input.submit-btn.label')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: _constants__WEBPACK_IMPORTED_MODULE_8__["Routes"].MEMBER_LOGIN,
      className: "btn btn-secondary ml-2"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('global.input.cancel-btn.label'))))) :
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('forgot-password.email.note')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: _constants__WEBPACK_IMPORTED_MODULE_8__["Routes"].MEMBER_LOGIN,
      color: "link"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('forgot-password.link.go-back.title'))))))))))
  );
};

MemberForgotPassword.propTypes = {
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isSubmitted: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  forgotPassword: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
var form = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'forgotPasswordForm',
  validate: _loginFormValidate__WEBPACK_IMPORTED_MODULE_6__["default"]
})(MemberForgotPassword);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSubmitted: !!state.auth.isSubmitted
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  forgotPassword: _store_actions_authAction__WEBPACK_IMPORTED_MODULE_12__["forgotPassword"]
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