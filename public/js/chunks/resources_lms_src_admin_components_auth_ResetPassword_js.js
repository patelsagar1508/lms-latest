(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_lms_src_admin_components_auth_ResetPassword_js"],{

/***/ "./resources/lms/src/admin/components/auth/ResetPassword.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/admin/components/auth/ResetPassword.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Container.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Form.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _loginFormValidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginFormValidate */ "./resources/lms/src/admin/components/auth/loginFormValidate.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/CustomInputGroup */ "./resources/lms/src/shared/components/CustomInputGroup.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_authAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/authAction */ "./resources/lms/src/admin/store/actions/authAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














var ResetPassword = function ResetPassword(props) {
  var handleSubmit = props.handleSubmit,
    history = props.history,
    invalid = props.invalid,
    location = props.location,
    resetPassword = props.resetPassword;
  var params = new URLSearchParams(location.search);
  var onSubmit = function onSubmit(formValues) {
    delete formValues.confirm_password;
    formValues.token = params.get('token');
    resetPassword(formValues, history);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "c-app flex-row align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Reset Password"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
          md: "4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
            className: "p-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
                onSubmit: handleSubmit(onSubmit),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('reset-password.title')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                  className: "text-muted",
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('reset-password.note')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_15__["default"], {
                  name: "password",
                  type: "password",
                  placeholder: "profile.input.password.label",
                  groupText: "icon-lock",
                  component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_15__["default"], {
                  name: "confirm_password",
                  type: "password",
                  placeholder: "profile.input.confirm-password.label",
                  groupText: "icon-lock",
                  component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    className: "mt-2 d-flex justify-content-end",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                      color: "primary",
                      disabled: invalid,
                      className: "px-4",
                      children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('global.input.reset-btn.label')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
                      to: _constants__WEBPACK_IMPORTED_MODULE_3__.Routes.ADMIN_FORGOT_PASSWORD,
                      className: "btn btn-secondary ml-2",
                      children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('global.input.back-btn.label')
                    })]
                  })
                })]
              })
            })
          })
        })
      })
    })]
  });
};
ResetPassword.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  invalid: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  resetPassword: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func)
};
var form = (0,redux_form__WEBPACK_IMPORTED_MODULE_19__["default"])({
  form: 'resetPasswordForm',
  validate: _loginFormValidate__WEBPACK_IMPORTED_MODULE_2__["default"]
})(ResetPassword);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  resetPassword: _store_actions_authAction__WEBPACK_IMPORTED_MODULE_7__.resetPassword
})(form));

/***/ }),

/***/ "./resources/lms/src/admin/components/auth/loginFormValidate.js":
/*!**********************************************************************!*\
  !*** ./resources/lms/src/admin/components/auth/loginFormValidate.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.email) {
    errors.email = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.email-required.validate.label');
  }
  var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(formValues.email)) {
    // errors.email = 'Invalid email address !'
  }
  if (!formValues.password) {
    errors.password = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.password-required.validate.label');
  }
  if (formValues.password && formValues.password.length < 6) {
    errors.password = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.password-invalid.validate.label');
  }
  if (formValues.confirm_password !== formValues.password) {
    errors.confirm_password = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.confirm-password.validate.label');
  }
  return errors;
});

/***/ }),

/***/ "./resources/lms/src/admin/config/apiConfigWithoutToken.js":
/*!*****************************************************************!*\
  !*** ./resources/lms/src/admin/config/apiConfigWithoutToken.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosInterceptor */ "./resources/lms/src/admin/config/axiosInterceptor.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environment */ "./resources/lms/src/environment.js");



var wampServer = _environment__WEBPACK_IMPORTED_MODULE_2__.environment.URL + '/api/';
var axiosApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: wampServer
});
_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__["default"].setupInterceptors(axiosApi, true, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosApi);

/***/ }),

/***/ "./resources/lms/src/admin/config/apiConfigwithoutTokenWithRoot.js":
/*!*************************************************************************!*\
  !*** ./resources/lms/src/admin/config/apiConfigwithoutTokenWithRoot.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosInterceptor */ "./resources/lms/src/admin/config/axiosInterceptor.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environment */ "./resources/lms/src/environment.js");



var wampServer = _environment__WEBPACK_IMPORTED_MODULE_2__.environment.URL + '/api/b1';
var axiosApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: wampServer
});
_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__["default"].setupInterceptors(axiosApi, true, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosApi);

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/authAction.js":
/*!*************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/authAction.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "forgotPassword": () => (/* binding */ forgotPassword),
/* harmony export */   "resetPassword": () => (/* binding */ resetPassword)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfigWithoutToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfigWithoutToken */ "./resources/lms/src/admin/config/apiConfigWithoutToken.js");
/* harmony import */ var _config_apiConfigwithoutTokenWithRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/apiConfigwithoutTokenWithRoot */ "./resources/lms/src/admin/config/apiConfigwithoutTokenWithRoot.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _store_action_localStorageAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/action/localStorageAction */ "./resources/lms/src/store/action/localStorageAction.js");
/* harmony import */ var _configAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configAction */ "./resources/lms/src/admin/store/actions/configAction.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var login = function login(user, history) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var email, password;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            email = user.email, password = user.password;
            _context.next = 3;
            return _config_apiConfigWithoutToken__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_6__.apiBaseURL.USER_LOGIN, {
              email: email,
              password: password
            }).then(function (response) {
              if (user.remember_me) {
                localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
              } else {
                if ((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getLocalStorageDataByEncryptKey)('currentUser')) {
                  localStorage.removeItem('currentUser');
                }
              }
              localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.Tokens.ADMIN, response.data.data.token);
              localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_6__.loggedConstant.IS_USER_LOGOUT);
              dispatch((0,_store_action_localStorageAction__WEBPACK_IMPORTED_MODULE_7__.setUserProfile)(_constants__WEBPACK_IMPORTED_MODULE_6__.LocalStorageKey.USER, response.data.data.user));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.authActionType.LOGIN,
                payload: response.data.data
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('login.success.logged.message')
              }));
              dispatch((0,_configAction__WEBPACK_IMPORTED_MODULE_8__.fetchConfig)());
              if (sessionStorage.getItem('prevAdminPrevUrl')) {
                window.location.href = sessionStorage.getItem('prevAdminPrevUrl');
              } else {
                history.push(_constants__WEBPACK_IMPORTED_MODULE_6__.Routes.ADMIN_DEFAULT);
              }
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var forgotPassword = function forgotPassword(user) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _config_apiConfigwithoutTokenWithRoot__WEBPACK_IMPORTED_MODULE_3__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_6__.apiBaseURL.ADMIN_FORGOT_PASSWORD, user).then(function () {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.authActionType.ADMIN_FORGOT_PASSWORD,
                payload: true
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('forgot-password.success.message')
              }));
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var resetPassword = function resetPassword(user, history) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _config_apiConfigwithoutTokenWithRoot__WEBPACK_IMPORTED_MODULE_3__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_6__.apiBaseURL.ADMIN_RESET_PASSWORD, user).then(function () {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.authActionType.ADMIN_RESET_PASSWORD,
                payload: user
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('reset-password.success.message')
              }));
              history.push(_constants__WEBPACK_IMPORTED_MODULE_6__.Routes.ADMIN_LOGIN);
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/shared/components/CustomInputGroup.js":
/*!*****************************************************************!*\
  !*** ./resources/lms/src/shared/components/CustomInputGroup.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupAddon.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupText.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Input.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormFeedback.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CustomInputGroup = function CustomInputGroup(props) {
  var input = props.input,
    _props$type = props.type,
    type = _props$type === void 0 ? "text" : _props$type,
    groupText = props.groupText,
    placeholder = props.placeholder,
    _props$meta = props.meta,
    touched = _props$meta.touched,
    error = _props$meta.error;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var className = "".concat(touched && error ? 'is-invalid' : '');
  var placeholderText = placeholder ? intl.formatMessage({
    id: placeholder
  }) : placeholder;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        addonType: "prepend",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
            className: groupText
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({
        type: type
      }, input), {}, {
        placeholder: placeholderText,
        autoComplete: "off",
        className: className
      })), touched && error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: error
      })]
    })
  });
};
CustomInputGroup.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  meta: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  groupText: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomInputGroup);

/***/ }),

/***/ "./resources/lms/src/shared/header-title/HeaderTitle.js":
/*!**************************************************************!*\
  !*** ./resources/lms/src/shared/header-title/HeaderTitle.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appConstant */ "./resources/lms/src/appConstant.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin/constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ReactHelmet = function ReactHelmet(props) {
  var title = props.title,
    settings = props.settings;
  var appName = settings[_admin_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_NAME] ? settings[_admin_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_NAME].value : null;
  var appLogo = settings[_admin_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON] ? settings[_admin_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON].logo_url : _appConstant__WEBPACK_IMPORTED_MODULE_3__.publicImagePath.APP_FAVICON;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    onChangeClientState: function onChangeClientState() {
      try {
        var existingIcons = document.querySelectorAll("link[rel=\"icon\"],link[rel=\"apple-touch-icon\"], link[rel=\"shortcut icon\"]");
        existingIcons.forEach(function (e) {
          return e.parentNode.removeChild(e);
        });
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.sizes = '16*16';
        link.href = appLogo;
        document.getElementsByTagName('head')[0].appendChild(link);
      } catch (e) {}
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
      children: "".concat(title, " | ").concat(appName)
    })
  });
};
ReactHelmet.propTypes = {
  settings: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.appSetting
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ReactHelmet));

/***/ }),

/***/ "./node_modules/es6-error/es6/index.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-error/es6/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var ExtendableError = function (_extendableBuiltin2) {
  _inherits(ExtendableError, _extendableBuiltin2);

  function ExtendableError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, ExtendableError);

    // extending Error is weird and does not propagate `message`
    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

    Object.defineProperty(_this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true
    });

    Object.defineProperty(_this, 'name', {
      configurable: true,
      enumerable: false,
      value: _this.constructor.name,
      writable: true
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(_this, _this.constructor);
      return _possibleConstructorReturn(_this);
    }

    Object.defineProperty(_this, 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true
    });
    return _this;
  }

  return ExtendableError;
}(_extendableBuiltin(Error));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtendableError);


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/is-promise/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-promise/index.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = isPromise;
module.exports["default"] = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/mapValues.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _reactFastCompare = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ "./node_modules/react-helmet/lib/HelmetUtils.js");

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _reactFastCompare2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports["default"] = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetConstants.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetUtils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : __webpack_require__.g.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : __webpack_require__.g.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./node_modules/reactstrap/es/Button.js":
/*!**********************************************!*\
  !*** ./node_modules/reactstrap/es/Button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];




var propTypes = {
  active: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  block: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  outline: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
var defaultProps = {
  color: 'secondary',
  tag: 'button'
};

var Button = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      return this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    if (close && typeof attributes.children === 'undefined') {
      attributes.children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        "aria-hidden": true
      }, "\xD7");
    }

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, {
      close: close
    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./node_modules/reactstrap/es/Card.js":
/*!********************************************!*\
  !*** ./node_modules/reactstrap/es/Card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  outline: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardBody.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/CardBody.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "innerRef", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'card-body'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBody);

/***/ }),

/***/ "./node_modules/reactstrap/es/Col.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Col.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "widths", "tag"];




var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]);
var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  widths: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};
var defaultProps = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_5__.isObject)(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, colClasses), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ "./node_modules/reactstrap/es/Container.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/Container.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "fluid", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var containerClass = 'container';

  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = "container-" + fluid;
  }

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, containerClass), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./node_modules/reactstrap/es/Form.js":
/*!********************************************!*\
  !*** ./node_modules/reactstrap/es/Form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "inline", "tag", "innerRef"];




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
var defaultProps = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submit = _this.submit.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, inline ? 'form-inline' : false), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./node_modules/reactstrap/es/FormFeedback.js":
/*!****************************************************!*\
  !*** ./node_modules/reactstrap/es/FormFeedback.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "valid", "tooltip", "tag"];




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  valid: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  tooltip: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
var defaultProps = {
  tag: 'div',
  valid: undefined
};

var FormFeedback = function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFeedback);

/***/ }),

/***/ "./node_modules/reactstrap/es/FormGroup.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/FormGroup.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "row", "disabled", "check", "inline", "tag"];




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  row: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  check: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
var defaultProps = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);

/***/ }),

/***/ "./node_modules/reactstrap/es/Input.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Input.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];

/* eslint react/prefer-stateless-function: 0 */




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
  bsSize: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  valid: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  invalid: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
  plaintext: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  addon: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
var defaultProps = {
  type: 'text'
};

var Input = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.focus = _this.focus.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var rangeInput = type === 'range';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (rangeInput) {
      formControlClass = formControlClass + "-range";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_7__.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_7__.warnOnce)("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  };

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./node_modules/reactstrap/es/InputGroup.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/InputGroup.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tag", "size"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  size: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'input-group', size ? "input-group-" + size : null), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);

/***/ }),

/***/ "./node_modules/reactstrap/es/InputGroupAddon.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactstrap/es/InputGroupAddon.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");
/* harmony import */ var _InputGroupText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputGroupText */ "./node_modules/reactstrap/es/InputGroupText.js");


var _excluded = ["className", "cssModule", "tag", "addonType", "children"];





var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['prepend', 'append']).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

  if (typeof children === 'string') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: classes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputGroupText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: children
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    children: children
  }));
};

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroupAddon);

/***/ }),

/***/ "./node_modules/reactstrap/es/InputGroupText.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/InputGroupText.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'input-group-text'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

InputGroupText.propTypes = propTypes;
InputGroupText.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroupText);

/***/ }),

/***/ "./node_modules/reactstrap/es/Row.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Row.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "noGutters", "tag", "form", "widths"];




var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var rowColsPropType = prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]);
var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  noGutters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType
};
var defaultProps = {
  tag: 'div',
  widths: rowColWidths
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      widths = props.widths,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row', colClasses), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./node_modules/reactstrap/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScrollbarWidth": () => (/* binding */ getScrollbarWidth),
/* harmony export */   "setScrollbarWidth": () => (/* binding */ setScrollbarWidth),
/* harmony export */   "isBodyOverflowing": () => (/* binding */ isBodyOverflowing),
/* harmony export */   "getOriginalBodyPadding": () => (/* binding */ getOriginalBodyPadding),
/* harmony export */   "conditionallyUpdateScrollbar": () => (/* binding */ conditionallyUpdateScrollbar),
/* harmony export */   "setGlobalCssModule": () => (/* binding */ setGlobalCssModule),
/* harmony export */   "mapToCssModules": () => (/* binding */ mapToCssModules),
/* harmony export */   "omit": () => (/* binding */ omit),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce),
/* harmony export */   "deprecated": () => (/* binding */ deprecated),
/* harmony export */   "DOMElement": () => (/* binding */ DOMElement),
/* harmony export */   "targetPropType": () => (/* binding */ targetPropType),
/* harmony export */   "tagPropType": () => (/* binding */ tagPropType),
/* harmony export */   "TransitionTimeouts": () => (/* binding */ TransitionTimeouts),
/* harmony export */   "TransitionPropTypeKeys": () => (/* binding */ TransitionPropTypeKeys),
/* harmony export */   "TransitionStatuses": () => (/* binding */ TransitionStatuses),
/* harmony export */   "keyCodes": () => (/* binding */ keyCodes),
/* harmony export */   "PopperPlacements": () => (/* binding */ PopperPlacements),
/* harmony export */   "canUseDOM": () => (/* binding */ canUseDOM),
/* harmony export */   "isReactRefObj": () => (/* binding */ isReactRefObj),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "findDOMElements": () => (/* binding */ findDOMElements),
/* harmony export */   "isArrayOrNodeList": () => (/* binding */ isArrayOrNodeList),
/* harmony export */   "getTarget": () => (/* binding */ getTarget),
/* harmony export */   "defaultToggleEvents": () => (/* binding */ defaultToggleEvents),
/* harmony export */   "addMultipleEventListeners": () => (/* binding */ addMultipleEventListeners),
/* harmony export */   "focusableElements": () => (/* binding */ focusableElements)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
 // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
} // Shim Element if needed (e.g. in Node environment)

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), DOMElement, prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  current: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any)
})]);
var tagPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  $$typeof: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().symbol),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  $$typeof: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().symbol),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function toNumber(value) {
  var type = typeof value;
  var NAN = 0 / 0;

  if (type === 'number') {
    return value;
  }

  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? "" + other : other;
  }

  if (type !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, '');
  var isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }

    return els;
  }
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

/***/ }),

/***/ "./node_modules/redux-form/es/ConnectedField.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-form/es/ConnectedField.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _createFieldProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createFieldProps */ "./node_modules/redux-form/es/createFieldProps.js");
/* harmony import */ var _events_onChangeValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/onChangeValue */ "./node_modules/redux-form/es/events/onChangeValue.js");
/* harmony import */ var _util_eventConsts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/eventConsts */ "./node_modules/redux-form/es/util/eventConsts.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");
/* harmony import */ var _isReactNative__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isReactNative */ "./node_modules/redux-form/es/isReactNative.js");
/* harmony import */ var _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/validateComponentProp */ "./node_modules/redux-form/es/util/validateComponentProp.js");
/* harmony import */ var _events_isEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/isEvent */ "./node_modules/redux-form/es/events/isEvent.js");













var propsToNotUpdateFor = ['_reduxForm'];

var isObject = function isObject(entity) {
  return entity && typeof entity === 'object';
};

var isFunction = function isFunction(entity) {
  return entity && typeof entity === 'function';
};

var eventPreventDefault = function eventPreventDefault(event) {
  if (isObject(event) && isFunction(event.preventDefault)) {
    event.preventDefault();
  }
};

var eventDataTransferGetData = function eventDataTransferGetData(event, key) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.getData)) {
    return event.dataTransfer.getData(key);
  }
};

var eventDataTransferSetData = function eventDataTransferSetData(event, key, value) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.setData)) {
    event.dataTransfer.setData(key, value);
  }
};

function createConnectedField(structure) {
  var deepEqual = structure.deepEqual,
      getIn = structure.getIn;

  var getSyncError = function getSyncError(syncErrors, name) {
    var error = _structure_plain__WEBPACK_IMPORTED_MODULE_5__["default"].getIn(syncErrors, name); // Because the error for this field might not be at a level in the error structure where
    // it can be set directly, it might need to be unwrapped from the _error property

    return error && error._error ? error._error : error;
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name); // Because the warning for this field might not be at a level in the warning structure where
    // it can be set directly, it might need to be unwrapped from the _warning property

    return warning && warning._warning ? warning._warning : warning;
  };

  var ConnectedField = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ConnectedField, _Component);

    function ConnectedField() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.ref = react__WEBPACK_IMPORTED_MODULE_3__.createRef();

      _this.isPristine = function () {
        return _this.props.pristine;
      };

      _this.getValue = function () {
        return _this.props.value;
      };

      _this.handleChange = function (event) {
        var _this$props = _this.props,
            name = _this$props.name,
            dispatch = _this$props.dispatch,
            parse = _this$props.parse,
            normalize = _this$props.normalize,
            onChange = _this$props.onChange,
            _reduxForm = _this$props._reduxForm,
            previousValue = _this$props.value;
        var newValue = (0,_events_onChangeValue__WEBPACK_IMPORTED_MODULE_6__["default"])(event, {
          name: name,
          parse: parse,
          normalize: normalize
        });
        var defaultPrevented = false;

        if (onChange) {
          // Can't seem to find a way to extend Event in React Native,
          // thus I simply avoid adding preventDefault() in a RN environment
          // to prevent the following error:
          // `One of the sources for assign has an enumerable key on the prototype chain`
          // Reference: https://github.com/facebook/react-native/issues/5507
          if (!_isReactNative__WEBPACK_IMPORTED_MODULE_7__["default"] && (0,_events_isEvent__WEBPACK_IMPORTED_MODULE_8__["default"])(event)) {
            onChange((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event, {
              preventDefault: function preventDefault() {
                defaultPrevented = true;
                return eventPreventDefault(event);
              }
            }), newValue, previousValue, name);
          } else {
            var onChangeResult = onChange(event, newValue, previousValue, name); // Return value of change handler affecting preventDefault is RN
            // specific behavior.

            if (_isReactNative__WEBPACK_IMPORTED_MODULE_7__["default"]) {
              defaultPrevented = onChangeResult;
            }
          }
        }

        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue)); // call post-change callback

          if (_reduxForm.asyncValidate) {
            _reduxForm.asyncValidate(name, newValue, 'change');
          }
        }
      };

      _this.handleFocus = function (event) {
        var _this$props2 = _this.props,
            name = _this$props2.name,
            dispatch = _this$props2.dispatch,
            onFocus = _this$props2.onFocus,
            _reduxForm = _this$props2._reduxForm;
        var defaultPrevented = false;

        if (onFocus) {
          if (!_isReactNative__WEBPACK_IMPORTED_MODULE_7__["default"]) {
            onFocus((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event, {
              preventDefault: function preventDefault() {
                defaultPrevented = true;
                return eventPreventDefault(event);
              }
            }), name);
          } else {
            defaultPrevented = onFocus(event, name);
          }
        }

        if (!defaultPrevented) {
          dispatch(_reduxForm.focus(name));
        }
      };

      _this.handleBlur = function (event) {
        var _this$props3 = _this.props,
            name = _this$props3.name,
            dispatch = _this$props3.dispatch,
            parse = _this$props3.parse,
            normalize = _this$props3.normalize,
            onBlur = _this$props3.onBlur,
            _reduxForm = _this$props3._reduxForm,
            _value = _this$props3._value,
            previousValue = _this$props3.value;
        var newValue = (0,_events_onChangeValue__WEBPACK_IMPORTED_MODULE_6__["default"])(event, {
          name: name,
          parse: parse,
          normalize: normalize
        }); // for checkbox and radio, if the value property of checkbox or radio equals
        // the value passed by blur event, then fire blur action with previousValue.

        if (newValue === _value && _value !== undefined) {
          newValue = previousValue;
        }

        var defaultPrevented = false;

        if (onBlur) {
          if (!_isReactNative__WEBPACK_IMPORTED_MODULE_7__["default"]) {
            onBlur((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event, {
              preventDefault: function preventDefault() {
                defaultPrevented = true;
                return eventPreventDefault(event);
              }
            }), newValue, previousValue, name);
          } else {
            defaultPrevented = onBlur(event, newValue, previousValue, name);
          }
        }

        if (!defaultPrevented) {
          // dispatch blur action
          dispatch(_reduxForm.blur(name, newValue)); // call post-blur callback

          if (_reduxForm.asyncValidate) {
            _reduxForm.asyncValidate(name, newValue, 'blur');
          }
        }
      };

      _this.handleDragStart = function (event) {
        var _this$props4 = _this.props,
            name = _this$props4.name,
            onDragStart = _this$props4.onDragStart,
            value = _this$props4.value;
        eventDataTransferSetData(event, _util_eventConsts__WEBPACK_IMPORTED_MODULE_9__.dataKey, value == null ? '' : value);

        if (onDragStart) {
          onDragStart(event, name);
        }
      };

      _this.handleDrop = function (event) {
        var _this$props5 = _this.props,
            name = _this$props5.name,
            dispatch = _this$props5.dispatch,
            onDrop = _this$props5.onDrop,
            _reduxForm = _this$props5._reduxForm,
            previousValue = _this$props5.value;
        var newValue = eventDataTransferGetData(event, _util_eventConsts__WEBPACK_IMPORTED_MODULE_9__.dataKey);
        var defaultPrevented = false;

        if (onDrop) {
          onDrop((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue, name);
        }

        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue));
          eventPreventDefault(event);
        }
      };

      return _this;
    }

    var _proto = ConnectedField.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var nextPropsKeys = Object.keys(nextProps);
      var thisPropsKeys = Object.keys(this.props); // if we have children, we MUST update in React 16
      // https://twitter.com/erikras/status/915866544558788608

      return !!(this.props.children || nextProps.children || nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
        if (~(nextProps.immutableProps || []).indexOf(prop)) {
          return _this2.props[prop] !== nextProps[prop];
        }

        return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
      }));
    };

    _proto.getRenderedComponent = function getRenderedComponent() {
      return this.ref.current;
    };

    _proto.render = function render() {
      var _this$props6 = this.props,
          component = _this$props6.component,
          forwardRef = _this$props6.forwardRef,
          name = _this$props6.name,
          _reduxForm = _this$props6._reduxForm,
          normalize = _this$props6.normalize,
          onBlur = _this$props6.onBlur,
          onChange = _this$props6.onChange,
          onFocus = _this$props6.onFocus,
          onDragStart = _this$props6.onDragStart,
          onDrop = _this$props6.onDrop,
          immutableProps = _this$props6.immutableProps,
          rest = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props6, ["component", "forwardRef", "name", "_reduxForm", "normalize", "onBlur", "onChange", "onFocus", "onDragStart", "onDrop", "immutableProps"]);

      var _createFieldProps = (0,_createFieldProps__WEBPACK_IMPORTED_MODULE_10__["default"])(structure, name, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest, {
        form: _reduxForm.form,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onDrop: this.handleDrop,
        onDragStart: this.handleDragStart,
        onFocus: this.handleFocus
      })),
          custom = _createFieldProps.custom,
          props = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_createFieldProps, ["custom"]);

      if (forwardRef) {
        custom.ref = this.ref;
      }

      if (typeof component === 'string') {
        var input = props.input,
            meta = props.meta; // eslint-disable-line no-unused-vars
        // flatten input into other props

        return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, input, {}, custom));
      } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {}, custom));
      }
    };

    return ConnectedField;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component);

  ConnectedField.propTypes = {
    component: _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_11__["default"],
    props: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)
  };
  var connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;
    var formState = getFormState(state);
    var initialState = getIn(formState, "initial." + name);
    var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
    var value = getIn(formState, "values." + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, "asyncErrors." + name),
      asyncValidating: getIn(formState, 'asyncValidating') === name,
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, "fields." + name),
      submitError: getIn(formState, "submitErrors." + name),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      initial: initial,
      value: value,
      _value: ownProps.value // save value passed in (for radios)

    };
  }, undefined, undefined, {
    forwardRef: true
  });
  return connector(ConnectedField);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createConnectedField);

/***/ }),

/***/ "./node_modules/redux-form/es/Field.js":
/*!*********************************************!*\
  !*** ./node_modules/redux-form/es/Field.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createField */ "./node_modules/redux-form/es/createField.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createField__WEBPACK_IMPORTED_MODULE_0__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/redux-form/es/ReduxFormContext.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-form/es/ReduxFormContext.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReduxFormContext": () => (/* binding */ ReduxFormContext),
/* harmony export */   "renderChildren": () => (/* binding */ renderChildren),
/* harmony export */   "withReduxForm": () => (/* binding */ withReduxForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var ReduxFormContext = react__WEBPACK_IMPORTED_MODULE_3__.createContext(null);
var renderChildren = function renderChildren(Component, _ref) {
  var forwardedRef = _ref.forwardedRef,
      rest = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["forwardedRef"]);

  return function (_reduxForm) {
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest, {
      _reduxForm: _reduxForm,
      ref: forwardedRef
    }));
  };
};
var withReduxForm = function withReduxForm(Component) {
  var Hoc = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Hoc, _React$Component);

    function Hoc() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Hoc.prototype;

    _proto.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(ReduxFormContext.Consumer, {
        children: renderChildren(Component, this.props)
      });
    };

    return Hoc;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component);

  var ref = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Hoc, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      forwardedRef: ref
    }));
  });
  ref.displayName = Component.displayName || Component.name || 'Component';
  return ref;
};

/***/ }),

/***/ "./node_modules/redux-form/es/SubmissionError.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-form/es/SubmissionError.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmissionError": () => (/* binding */ SubmissionError),
/* harmony export */   "isSubmissionError": () => (/* binding */ isSubmissionError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var es6_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-error */ "./node_modules/es6-error/es6/index.js");


var __FLAG__ = '@@redux-form/submission-error-flag';
var SubmissionError = /*#__PURE__*/function (_ExtendableError) {
  (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SubmissionError, _ExtendableError);

  /** @private */
  function SubmissionError(errors) {
    var _this;

    _this = _ExtendableError.call(this, 'Submit Validation Failed') || this;
    _this.errors = errors;
    return _this;
  }

  return SubmissionError;
}(es6_error__WEBPACK_IMPORTED_MODULE_1__["default"]);
SubmissionError.__FLAG__ = __FLAG__;
function isSubmissionError(error) {
  return (error && error.constructor && error.constructor.__FLAG__ === __FLAG__) === true;
}

/***/ }),

/***/ "./node_modules/redux-form/es/actions.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-form/es/actions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./node_modules/redux-form/es/actionTypes.js");



var arrayInsert = function arrayInsert(form, field, index, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_INSERT,
    meta: {
      form: form,
      field: field,
      index: index
    },
    payload: value
  };
};

var arrayMove = function arrayMove(form, field, from, to) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_MOVE,
    meta: {
      form: form,
      field: field,
      from: from,
      to: to
    }
  };
};

var arrayPop = function arrayPop(form, field) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_POP,
    meta: {
      form: form,
      field: field
    }
  };
};

var arrayPush = function arrayPush(form, field, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_PUSH,
    meta: {
      form: form,
      field: field
    },
    payload: value
  };
};

var arrayRemove = function arrayRemove(form, field, index) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_REMOVE,
    meta: {
      form: form,
      field: field,
      index: index
    }
  };
};

var arrayRemoveAll = function arrayRemoveAll(form, field) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_REMOVE_ALL,
    meta: {
      form: form,
      field: field
    }
  };
};

var arrayShift = function arrayShift(form, field) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_SHIFT,
    meta: {
      form: form,
      field: field
    }
  };
};

var arraySplice = function arraySplice(form, field, index, removeNum, value) {
  var action = {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_SPLICE,
    meta: {
      form: form,
      field: field,
      index: index,
      removeNum: removeNum
    }
  };

  if (value !== undefined) {
    action.payload = value;
  }

  return action;
};

var arraySwap = function arraySwap(form, field, indexA, indexB) {
  if (indexA === indexB) {
    throw new Error('Swap indices cannot be equal');
  }

  if (indexA < 0 || indexB < 0) {
    throw new Error('Swap indices cannot be negative');
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_SWAP,
    meta: {
      form: form,
      field: field,
      indexA: indexA,
      indexB: indexB
    }
  };
};

var arrayUnshift = function arrayUnshift(form, field, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.ARRAY_UNSHIFT,
    meta: {
      form: form,
      field: field
    },
    payload: value
  };
};

var autofill = function autofill(form, field, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.AUTOFILL,
    meta: {
      form: form,
      field: field
    },
    payload: value
  };
};

var blur = function blur(form, field, value, touch) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.BLUR,
    meta: {
      form: form,
      field: field,
      touch: touch
    },
    payload: value
  };
};

var change = function change(form, field, value, touch, persistentSubmitErrors) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CHANGE,
    meta: {
      form: form,
      field: field,
      touch: touch,
      persistentSubmitErrors: persistentSubmitErrors
    },
    payload: value
  };
};

var clearSubmit = function clearSubmit(form) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CLEAR_SUBMIT,
    meta: {
      form: form
    }
  };
};

var clearSubmitErrors = function clearSubmitErrors(form) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CLEAR_SUBMIT_ERRORS,
    meta: {
      form: form
    }
  };
};

var clearAsyncError = function clearAsyncError(form, field) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CLEAR_ASYNC_ERROR,
    meta: {
      form: form,
      field: field
    }
  };
};

var clearFields = function clearFields(form, keepTouched, persistentSubmitErrors) {
  for (var _len = arguments.length, fields = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    fields[_key - 3] = arguments[_key];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CLEAR_FIELDS,
    meta: {
      form: form,
      keepTouched: keepTouched,
      persistentSubmitErrors: persistentSubmitErrors,
      fields: fields
    }
  };
};

var destroy = function destroy() {
  for (var _len2 = arguments.length, form = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    form[_key2] = arguments[_key2];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.DESTROY,
    meta: {
      form: form
    }
  };
};

var focus = function focus(form, field) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.FOCUS,
    meta: {
      form: form,
      field: field
    }
  };
};

var initialize = function initialize(form, values, keepDirty, otherMeta) {
  if (otherMeta === void 0) {
    otherMeta = {};
  }

  if (keepDirty instanceof Object) {
    otherMeta = keepDirty;
    keepDirty = false;
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.INITIALIZE,
    meta: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      form: form,
      keepDirty: keepDirty
    }, otherMeta),
    payload: values
  };
};

var registerField = function registerField(form, name, type) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.REGISTER_FIELD,
    meta: {
      form: form
    },
    payload: {
      name: name,
      type: type
    }
  };
};

var reset = function reset(form) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.RESET,
    meta: {
      form: form
    }
  };
};

var resetSection = function resetSection(form) {
  for (var _len3 = arguments.length, sections = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    sections[_key3 - 1] = arguments[_key3];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.RESET_SECTION,
    meta: {
      form: form,
      sections: sections
    }
  };
};

var startAsyncValidation = function startAsyncValidation(form, field) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.START_ASYNC_VALIDATION,
    meta: {
      form: form,
      field: field
    }
  };
};

var startSubmit = function startSubmit(form) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.START_SUBMIT,
    meta: {
      form: form
    }
  };
};

var stopAsyncValidation = function stopAsyncValidation(form, errors) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.STOP_ASYNC_VALIDATION,
    meta: {
      form: form
    },
    payload: errors,
    error: !!(errors && Object.keys(errors).length)
  };
};

var stopSubmit = function stopSubmit(form, errors) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.STOP_SUBMIT,
    meta: {
      form: form
    },
    payload: errors,
    error: !!(errors && Object.keys(errors).length)
  };
};

var submit = function submit(form) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.SUBMIT,
    meta: {
      form: form
    }
  };
};

var setSubmitFailed = function setSubmitFailed(form) {
  for (var _len4 = arguments.length, fields = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    fields[_key4 - 1] = arguments[_key4];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_SUBMIT_FAILED,
    meta: {
      form: form,
      fields: fields
    },
    error: true
  };
};

var setSubmitSucceeded = function setSubmitSucceeded(form) {
  for (var _len5 = arguments.length, fields = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    fields[_key5 - 1] = arguments[_key5];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_SUBMIT_SUCCEEDED,
    meta: {
      form: form,
      fields: fields
    },
    error: false
  };
};

var touch = function touch(form) {
  for (var _len6 = arguments.length, fields = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    fields[_key6 - 1] = arguments[_key6];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.TOUCH,
    meta: {
      form: form,
      fields: fields
    }
  };
};

var unregisterField = function unregisterField(form, name, destroyOnUnmount) {
  if (destroyOnUnmount === void 0) {
    destroyOnUnmount = true;
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.UNREGISTER_FIELD,
    meta: {
      form: form
    },
    payload: {
      name: name,
      destroyOnUnmount: destroyOnUnmount
    }
  };
};

var untouch = function untouch(form) {
  for (var _len7 = arguments.length, fields = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    fields[_key7 - 1] = arguments[_key7];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.UNTOUCH,
    meta: {
      form: form,
      fields: fields
    }
  };
};

var updateSyncErrors = function updateSyncErrors(form, syncErrors, error) {
  if (syncErrors === void 0) {
    syncErrors = {};
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.UPDATE_SYNC_ERRORS,
    meta: {
      form: form
    },
    payload: {
      syncErrors: syncErrors,
      error: error
    }
  };
};

var updateSyncWarnings = function updateSyncWarnings(form, syncWarnings, warning) {
  if (syncWarnings === void 0) {
    syncWarnings = {};
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.UPDATE_SYNC_WARNINGS,
    meta: {
      form: form
    },
    payload: {
      syncWarnings: syncWarnings,
      warning: warning
    }
  };
};

var actions = {
  arrayInsert: arrayInsert,
  arrayMove: arrayMove,
  arrayPop: arrayPop,
  arrayPush: arrayPush,
  arrayRemove: arrayRemove,
  arrayRemoveAll: arrayRemoveAll,
  arrayShift: arrayShift,
  arraySplice: arraySplice,
  arraySwap: arraySwap,
  arrayUnshift: arrayUnshift,
  autofill: autofill,
  blur: blur,
  change: change,
  clearFields: clearFields,
  clearSubmit: clearSubmit,
  clearSubmitErrors: clearSubmitErrors,
  clearAsyncError: clearAsyncError,
  destroy: destroy,
  focus: focus,
  initialize: initialize,
  registerField: registerField,
  reset: reset,
  resetSection: resetSection,
  startAsyncValidation: startAsyncValidation,
  startSubmit: startSubmit,
  stopAsyncValidation: stopAsyncValidation,
  stopSubmit: stopSubmit,
  submit: submit,
  setSubmitFailed: setSubmitFailed,
  setSubmitSucceeded: setSubmitSucceeded,
  touch: touch,
  unregisterField: unregisterField,
  untouch: untouch,
  updateSyncErrors: updateSyncErrors,
  updateSyncWarnings: updateSyncWarnings
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actions);

/***/ }),

/***/ "./node_modules/redux-form/es/asyncValidation.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-form/es/asyncValidation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_promise__WEBPACK_IMPORTED_MODULE_0__);


var asyncValidation = function asyncValidation(fn, start, stop, field) {
  start(field);
  var promise = fn();

  if (!is_promise__WEBPACK_IMPORTED_MODULE_0___default()(promise)) {
    throw new Error('asyncValidate function passed to reduxForm must return a promise');
  }

  var handleErrors = function handleErrors(rejected) {
    return function (errors) {
      if (rejected) {
        if (errors && Object.keys(errors).length) {
          stop(errors);
          return errors;
        } else {
          stop();
          throw new Error('Asynchronous validation promise was rejected without errors.');
        }
      }

      stop();
      return Promise.resolve();
    };
  };

  return promise.then(handleErrors(false), handleErrors(true));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asyncValidation);

/***/ }),

/***/ "./node_modules/redux-form/es/createField.js":
/*!***************************************************!*\
  !*** ./node_modules/redux-form/es/createField.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ConnectedField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConnectedField */ "./node_modules/redux-form/es/ConnectedField.js");
/* harmony import */ var _util_shallowCompare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/shallowCompare */ "./node_modules/redux-form/es/util/shallowCompare.js");
/* harmony import */ var _util_prefixName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/prefixName */ "./node_modules/redux-form/es/util/prefixName.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");
/* harmony import */ var _ReduxFormContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReduxFormContext */ "./node_modules/redux-form/es/ReduxFormContext.js");
/* harmony import */ var _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/validateComponentProp */ "./node_modules/redux-form/es/util/validateComponentProp.js");













function createField(structure) {
  var ConnectedField = (0,_ConnectedField__WEBPACK_IMPORTED_MODULE_5__["default"])(structure);
  var setIn = structure.setIn;

  var Field = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Field, _Component);

    function Field(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.ref = react__WEBPACK_IMPORTED_MODULE_3__.createRef();

      _this.normalize = function (name, value) {
        var normalize = _this.props.normalize;

        if (!normalize) {
          return value;
        }

        var previousValues = _this.props._reduxForm.getValues();

        var previousValue = _this.value;
        var nextValues = setIn(previousValues, name, value);
        return normalize(value, previousValue, nextValues, previousValues, name);
      };

      if (!props._reduxForm) {
        throw new Error('Field must be inside a component decorated with reduxForm()');
      }

      return _this;
    }

    var _proto = Field.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      this.props._reduxForm.register(this.name, 'Field', function () {
        return _this2.props.validate;
      }, function () {
        return _this2.props.warn;
      });
    };

    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      return (0,_util_shallowCompare__WEBPACK_IMPORTED_MODULE_6__["default"])(this, nextProps, nextState);
    };

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      var oldName = (0,_util_prefixName__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props, this.props.name);
      var newName = (0,_util_prefixName__WEBPACK_IMPORTED_MODULE_7__["default"])(nextProps, nextProps.name);

      if (oldName !== newName || // use deepEqual here because they could be a function or an array of functions
      !_structure_plain__WEBPACK_IMPORTED_MODULE_8__["default"].deepEqual(this.props.validate, nextProps.validate) || !_structure_plain__WEBPACK_IMPORTED_MODULE_8__["default"].deepEqual(this.props.warn, nextProps.warn)) {
        // unregister old name
        this.props._reduxForm.unregister(oldName); // register new name


        this.props._reduxForm.register(newName, 'Field', function () {
          return nextProps.validate;
        }, function () {
          return nextProps.warn;
        });
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.props._reduxForm.unregister(this.name);
    };

    _proto.getRenderedComponent = function getRenderedComponent() {
      invariant__WEBPACK_IMPORTED_MODULE_4___default()(this.props.forwardRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a forwardRef prop to Field');
      return this.ref.current ? this.ref.current.getRenderedComponent() : undefined;
    };

    _proto.render = function render() {
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(ConnectedField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        name: this.name,
        normalize: this.normalize,
        ref: this.ref
      }));
    };

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Field, [{
      key: "name",
      get: function get() {
        return (0,_util_prefixName__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props, this.props.name);
      }
    }, {
      key: "dirty",
      get: function get() {
        return !this.pristine;
      }
    }, {
      key: "pristine",
      get: function get() {
        return !!(this.ref.current && this.ref.current.isPristine());
      }
    }, {
      key: "value",
      get: function get() {
        return this.ref.current && this.ref.current.getValue();
      }
    }]);

    return Field;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component);

  Field.propTypes = {
    name: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired),
    component: _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_10__["default"],
    format: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    normalize: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    onDrop: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    parse: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    props: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
    validate: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().func))]),
    warn: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().func))]),
    forwardRef: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    immutableProps: prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)),
    _reduxForm: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
  };
  return (0,_ReduxFormContext__WEBPACK_IMPORTED_MODULE_11__.withReduxForm)(Field);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createField);

/***/ }),

/***/ "./node_modules/redux-form/es/createFieldProps.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-form/es/createFieldProps.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFieldProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");



var processProps = function processProps(type, props, _value, deepEqual) {
  var value = props.value;

  if (type === 'checkbox') {
    return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      checked: !!value
    });
  }

  if (type === 'radio') {
    return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      checked: deepEqual(value, _value),
      value: _value
    });
  }

  if (type === 'select-multiple') {
    return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      value: value || []
    });
  }

  if (type === 'file') {
    return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      value: value || undefined
    });
  }

  return props;
};

function createFieldProps(_ref, name, _ref2) {
  var getIn = _ref.getIn,
      toJS = _ref.toJS,
      deepEqual = _ref.deepEqual;

  var asyncError = _ref2.asyncError,
      asyncValidating = _ref2.asyncValidating,
      onBlur = _ref2.onBlur,
      onChange = _ref2.onChange,
      onDrop = _ref2.onDrop,
      onDragStart = _ref2.onDragStart,
      dirty = _ref2.dirty,
      dispatch = _ref2.dispatch,
      onFocus = _ref2.onFocus,
      form = _ref2.form,
      format = _ref2.format,
      initial = _ref2.initial,
      parse = _ref2.parse,
      pristine = _ref2.pristine,
      props = _ref2.props,
      state = _ref2.state,
      submitError = _ref2.submitError,
      submitFailed = _ref2.submitFailed,
      submitting = _ref2.submitting,
      syncError = _ref2.syncError,
      syncWarning = _ref2.syncWarning,
      validate = _ref2.validate,
      value = _ref2.value,
      _value = _ref2._value,
      warn = _ref2.warn,
      custom = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["asyncError", "asyncValidating", "onBlur", "onChange", "onDrop", "onDragStart", "dirty", "dispatch", "onFocus", "form", "format", "initial", "parse", "pristine", "props", "state", "submitError", "submitFailed", "submitting", "syncError", "syncWarning", "validate", "value", "_value", "warn"]);

  var error = syncError || asyncError || submitError;
  var warning = syncWarning;

  var formatFieldValue = function formatFieldValue(value, format) {
    if (format === null) {
      return value;
    }

    var defaultFormattedValue = value == null ? '' : value;
    return format ? format(value, name) : defaultFormattedValue;
  };

  var formattedFieldValue = formatFieldValue(value, format);
  return {
    input: processProps(custom.type, {
      name: name,
      onBlur: onBlur,
      onChange: onChange,
      onDragStart: onDragStart,
      onDrop: onDrop,
      onFocus: onFocus,
      value: formattedFieldValue
    }, _value, deepEqual),
    meta: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, toJS(state), {
      active: !!(state && getIn(state, 'active')),
      asyncValidating: asyncValidating,
      autofilled: !!(state && getIn(state, 'autofilled')),
      dirty: dirty,
      dispatch: dispatch,
      error: error,
      form: form,
      initial: initial,
      warning: warning,
      invalid: !!error,
      pristine: pristine,
      submitting: !!submitting,
      submitFailed: !!submitFailed,
      touched: !!(state && getIn(state, 'touched')),
      valid: !error,
      visited: !!(state && getIn(state, 'visited'))
    }),
    custom: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, custom, {}, props)
  };
}

/***/ }),

/***/ "./node_modules/redux-form/es/createReduxForm.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-form/es/createReduxForm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createReduxForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions */ "./node_modules/redux-form/es/actions.js");
/* harmony import */ var _asyncValidation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./asyncValidation */ "./node_modules/redux-form/es/asyncValidation.js");
/* harmony import */ var _defaultShouldAsyncValidate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultShouldAsyncValidate */ "./node_modules/redux-form/es/defaultShouldAsyncValidate.js");
/* harmony import */ var _defaultShouldValidate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultShouldValidate */ "./node_modules/redux-form/es/defaultShouldValidate.js");
/* harmony import */ var _defaultShouldError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./defaultShouldError */ "./node_modules/redux-form/es/defaultShouldError.js");
/* harmony import */ var _defaultShouldWarn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./defaultShouldWarn */ "./node_modules/redux-form/es/defaultShouldWarn.js");
/* harmony import */ var _events_silenceEvent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./events/silenceEvent */ "./node_modules/redux-form/es/events/silenceEvent.js");
/* harmony import */ var _events_silenceEvents__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./events/silenceEvents */ "./node_modules/redux-form/es/events/silenceEvents.js");
/* harmony import */ var _generateValidator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./generateValidator */ "./node_modules/redux-form/es/generateValidator.js");
/* harmony import */ var _handleSubmit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./handleSubmit */ "./node_modules/redux-form/es/handleSubmit.js");
/* harmony import */ var _selectors_isValid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectors/isValid */ "./node_modules/redux-form/es/selectors/isValid.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");
/* harmony import */ var _util_getDisplayName__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./util/getDisplayName */ "./node_modules/redux-form/es/util/getDisplayName.js");
/* harmony import */ var _util_isHotReloading__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./util/isHotReloading */ "./node_modules/redux-form/es/util/isHotReloading.js");
/* harmony import */ var _ReduxFormContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ReduxFormContext */ "./node_modules/redux-form/es/ReduxFormContext.js");





























var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
}; // extract field-specific actions


var arrayInsert = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayInsert,
    arrayMove = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayMove,
    arrayPop = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayPop,
    arrayPush = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayPush,
    arrayRemove = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayRemove,
    arrayRemoveAll = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayRemoveAll,
    arrayShift = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayShift,
    arraySplice = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arraySplice,
    arraySwap = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arraySwap,
    arrayUnshift = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].arrayUnshift,
    blur = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].blur,
    change = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].change,
    focus = _actions__WEBPACK_IMPORTED_MODULE_11__["default"].focus,
    formActions = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_actions__WEBPACK_IMPORTED_MODULE_11__["default"], ["arrayInsert", "arrayMove", "arrayPop", "arrayPush", "arrayRemove", "arrayRemoveAll", "arrayShift", "arraySplice", "arraySwap", "arrayUnshift", "blur", "change", "focus"]);

var arrayActions = {
  arrayInsert: arrayInsert,
  arrayMove: arrayMove,
  arrayPop: arrayPop,
  arrayPush: arrayPush,
  arrayRemove: arrayRemove,
  arrayRemoveAll: arrayRemoveAll,
  arrayShift: arrayShift,
  arraySplice: arraySplice,
  arraySwap: arraySwap,
  arrayUnshift: arrayUnshift
};
var propsToNotUpdateFor = [].concat(Object.keys(_actions__WEBPACK_IMPORTED_MODULE_11__["default"]), ['array', 'asyncErrors', 'initialValues', 'syncErrors', 'syncWarnings', 'values', 'registeredFields']);

var checkSubmit = function checkSubmit(submit) {
  if (!submit || typeof submit !== 'function') {
    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
  }

  return submit;
};

/**
 * The decorator that is the main API to redux-form
 */
function createReduxForm(structure) {
  var deepEqual = structure.deepEqual,
      empty = structure.empty,
      getIn = structure.getIn,
      setIn = structure.setIn,
      keys = structure.keys,
      fromJS = structure.fromJS,
      toJS = structure.toJS;
  var isValid = (0,_selectors_isValid__WEBPACK_IMPORTED_MODULE_12__["default"])(structure);
  return function (initialConfig) {
    var config = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      touchOnBlur: true,
      touchOnChange: false,
      persistentSubmitErrors: false,
      destroyOnUnmount: true,
      shouldAsyncValidate: _defaultShouldAsyncValidate__WEBPACK_IMPORTED_MODULE_13__["default"],
      shouldValidate: _defaultShouldValidate__WEBPACK_IMPORTED_MODULE_14__["default"],
      shouldError: _defaultShouldError__WEBPACK_IMPORTED_MODULE_15__["default"],
      shouldWarn: _defaultShouldWarn__WEBPACK_IMPORTED_MODULE_16__["default"],
      enableReinitialize: false,
      keepDirtyOnReinitialize: false,
      updateUnregisteredFields: false,
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      },
      pure: true,
      forceUnregisterOnUnmount: false,
      submitAsSideEffect: false
    }, initialConfig);

    return function (WrappedComponent) {
      var Form = /*#__PURE__*/function (_React$Component) {
        (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, _React$Component);

        function Form() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
          _this.wrapped = react__WEBPACK_IMPORTED_MODULE_9__.createRef();
          _this.destroyed = false;
          _this.fieldCounts = {};
          _this.fieldValidators = {};
          _this.lastFieldValidatorKeys = [];
          _this.fieldWarners = {};
          _this.lastFieldWarnerKeys = [];
          _this.innerOnSubmit = undefined;
          _this.submitPromise = undefined;

          _this.initIfNeeded = function (nextProps) {
            var enableReinitialize = _this.props.enableReinitialize;

            if (nextProps) {
              if ((enableReinitialize || !nextProps.initialized) && !deepEqual(_this.props.initialValues, nextProps.initialValues)) {
                var _keepDirty = nextProps.initialized && _this.props.keepDirtyOnReinitialize;

                _this.props.initialize(nextProps.initialValues, _keepDirty, {
                  keepValues: nextProps.keepValues,
                  lastInitialValues: _this.props.initialValues,
                  updateUnregisteredFields: nextProps.updateUnregisteredFields
                });
              }
            } else if (_this.props.initialValues && (!_this.props.initialized || enableReinitialize)) {
              _this.props.initialize(_this.props.initialValues, _this.props.keepDirtyOnReinitialize, {
                keepValues: _this.props.keepValues,
                updateUnregisteredFields: _this.props.updateUnregisteredFields
              });
            }
          };

          _this.updateSyncErrorsIfNeeded = function (nextSyncErrors, nextError, lastSyncErrors) {
            var _this$props = _this.props,
                error = _this$props.error,
                updateSyncErrors = _this$props.updateSyncErrors;
            var noErrors = (!lastSyncErrors || !Object.keys(lastSyncErrors).length) && !error;
            var nextNoErrors = (!nextSyncErrors || !Object.keys(nextSyncErrors).length) && !nextError;

            if (!(noErrors && nextNoErrors) && (!_structure_plain__WEBPACK_IMPORTED_MODULE_17__["default"].deepEqual(lastSyncErrors, nextSyncErrors) || !_structure_plain__WEBPACK_IMPORTED_MODULE_17__["default"].deepEqual(error, nextError))) {
              updateSyncErrors(nextSyncErrors, nextError);
            }
          };

          _this.clearSubmitPromiseIfNeeded = function (nextProps) {
            var submitting = _this.props.submitting;

            if (_this.submitPromise && submitting && !nextProps.submitting) {
              delete _this.submitPromise;
            }
          };

          _this.submitIfNeeded = function (nextProps) {
            var _this$props2 = _this.props,
                clearSubmit = _this$props2.clearSubmit,
                triggerSubmit = _this$props2.triggerSubmit;

            if (!triggerSubmit && nextProps.triggerSubmit) {
              clearSubmit();

              _this.submit();
            }
          };

          _this.shouldErrorFunction = function () {
            var _this$props3 = _this.props,
                shouldValidate = _this$props3.shouldValidate,
                shouldError = _this$props3.shouldError;
            var shouldValidateOverridden = shouldValidate !== _defaultShouldValidate__WEBPACK_IMPORTED_MODULE_14__["default"];
            var shouldErrorOverridden = shouldError !== _defaultShouldError__WEBPACK_IMPORTED_MODULE_15__["default"];
            return shouldValidateOverridden && !shouldErrorOverridden ? shouldValidate : shouldError;
          };

          _this.validateIfNeeded = function (nextProps) {
            var _this$props4 = _this.props,
                validate = _this$props4.validate,
                values = _this$props4.values;

            var shouldError = _this.shouldErrorFunction();

            var fieldLevelValidate = _this.generateValidator();

            if (validate || fieldLevelValidate) {
              var initialRender = nextProps === undefined;
              var fieldValidatorKeys = Object.keys(_this.getValidators());
              var validateParams = {
                values: values,
                nextProps: nextProps,
                props: _this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: _this.lastFieldValidatorKeys,
                fieldValidatorKeys: fieldValidatorKeys,
                structure: structure
              };

              if (shouldError(validateParams)) {
                var propsToValidate = initialRender || !nextProps ? _this.props : nextProps;

                var _merge2 = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(validate ? validate(propsToValidate.values, propsToValidate) || {} : {}, fieldLevelValidate ? fieldLevelValidate(propsToValidate.values, propsToValidate) || {} : {}),
                    _error = _merge2._error,
                    nextSyncErrors = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_merge2, ["_error"]);

                _this.lastFieldValidatorKeys = fieldValidatorKeys;

                _this.updateSyncErrorsIfNeeded(nextSyncErrors, _error, propsToValidate.syncErrors);
              }
            } else {
              _this.lastFieldValidatorKeys = [];
            }
          };

          _this.updateSyncWarningsIfNeeded = function (nextSyncWarnings, nextWarning, lastSyncWarnings) {
            var _this$props5 = _this.props,
                warning = _this$props5.warning,
                updateSyncWarnings = _this$props5.updateSyncWarnings;
            var noWarnings = (!lastSyncWarnings || !Object.keys(lastSyncWarnings).length) && !warning;
            var nextNoWarnings = (!nextSyncWarnings || !Object.keys(nextSyncWarnings).length) && !nextWarning;

            if (!(noWarnings && nextNoWarnings) && (!_structure_plain__WEBPACK_IMPORTED_MODULE_17__["default"].deepEqual(lastSyncWarnings, nextSyncWarnings) || !_structure_plain__WEBPACK_IMPORTED_MODULE_17__["default"].deepEqual(warning, nextWarning))) {
              updateSyncWarnings(nextSyncWarnings, nextWarning);
            }
          };

          _this.shouldWarnFunction = function () {
            var _this$props6 = _this.props,
                shouldValidate = _this$props6.shouldValidate,
                shouldWarn = _this$props6.shouldWarn;
            var shouldValidateOverridden = shouldValidate !== _defaultShouldValidate__WEBPACK_IMPORTED_MODULE_14__["default"];
            var shouldWarnOverridden = shouldWarn !== _defaultShouldWarn__WEBPACK_IMPORTED_MODULE_16__["default"];
            return shouldValidateOverridden && !shouldWarnOverridden ? shouldValidate : shouldWarn;
          };

          _this.warnIfNeeded = function (nextProps) {
            var _this$props7 = _this.props,
                warn = _this$props7.warn,
                values = _this$props7.values;

            var shouldWarn = _this.shouldWarnFunction();

            var fieldLevelWarn = _this.generateWarner();

            if (warn || fieldLevelWarn) {
              var initialRender = nextProps === undefined;
              var fieldWarnerKeys = Object.keys(_this.getWarners());
              var validateParams = {
                values: values,
                nextProps: nextProps,
                props: _this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: _this.lastFieldWarnerKeys,
                fieldValidatorKeys: fieldWarnerKeys,
                structure: structure
              };

              if (shouldWarn(validateParams)) {
                var propsToWarn = initialRender || !nextProps ? _this.props : nextProps;

                var _merge3 = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(warn ? warn(propsToWarn.values, propsToWarn) : {}, fieldLevelWarn ? fieldLevelWarn(propsToWarn.values, propsToWarn) : {}),
                    _warning = _merge3._warning,
                    nextSyncWarnings = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_merge3, ["_warning"]);

                _this.lastFieldWarnerKeys = fieldWarnerKeys;

                _this.updateSyncWarningsIfNeeded(nextSyncWarnings, _warning, propsToWarn.syncWarnings);
              }
            }
          };

          _this.getValues = function () {
            return _this.props.values;
          };

          _this.isValid = function () {
            return _this.props.valid;
          };

          _this.isPristine = function () {
            return _this.props.pristine;
          };

          _this.register = function (name, type, getValidator, getWarner) {
            var lastCount = _this.fieldCounts[name];
            var nextCount = (lastCount || 0) + 1;
            _this.fieldCounts[name] = nextCount;

            _this.props.registerField(name, type);

            if (getValidator) {
              _this.fieldValidators[name] = getValidator;
            }

            if (getWarner) {
              _this.fieldWarners[name] = getWarner;
            }
          };

          _this.unregister = function (name) {
            var lastCount = _this.fieldCounts[name];
            if (lastCount === 1) delete _this.fieldCounts[name];else if (lastCount != null) _this.fieldCounts[name] = lastCount - 1;

            if (!_this.destroyed) {
              var _this$props8 = _this.props,
                  _destroyOnUnmount = _this$props8.destroyOnUnmount,
                  forceUnregisterOnUnmount = _this$props8.forceUnregisterOnUnmount,
                  unregisterField = _this$props8.unregisterField;

              if (_destroyOnUnmount || forceUnregisterOnUnmount) {
                unregisterField(name, _destroyOnUnmount);

                if (!_this.fieldCounts[name]) {
                  delete _this.fieldValidators[name];
                  delete _this.fieldWarners[name];
                  _this.lastFieldValidatorKeys = _this.lastFieldValidatorKeys.filter(function (key) {
                    return key !== name;
                  });
                }
              } else {
                unregisterField(name, false);
              }
            }
          };

          _this.getFieldList = function (options) {
            var registeredFields = _this.props.registeredFields;

            if (!registeredFields) {
              return [];
            }

            var keySeq = keys(registeredFields);

            if (options) {
              if (options.excludeFieldArray) {
                keySeq = keySeq.filter(function (name) {
                  return getIn(registeredFields, "['" + name + "'].type") !== 'FieldArray';
                });
              }

              if (options.excludeUnregistered) {
                keySeq = keySeq.filter(function (name) {
                  return getIn(registeredFields, "['" + name + "'].count") !== 0;
                });
              }
            }

            return toJS(keySeq);
          };

          _this.getValidators = function () {
            var validators = {};
            Object.keys(_this.fieldValidators).forEach(function (name) {
              var validator = _this.fieldValidators[name]();

              if (validator) {
                validators[name] = validator;
              }
            });
            return validators;
          };

          _this.generateValidator = function () {
            var validators = _this.getValidators();

            return Object.keys(validators).length ? (0,_generateValidator__WEBPACK_IMPORTED_MODULE_18__["default"])(validators, structure) : undefined;
          };

          _this.getWarners = function () {
            var warners = {};
            Object.keys(_this.fieldWarners).forEach(function (name) {
              var warner = _this.fieldWarners[name]();

              if (warner) {
                warners[name] = warner;
              }
            });
            return warners;
          };

          _this.generateWarner = function () {
            var warners = _this.getWarners();

            return Object.keys(warners).length ? (0,_generateValidator__WEBPACK_IMPORTED_MODULE_18__["default"])(warners, structure) : undefined;
          };

          _this.asyncValidate = function (name, value, trigger) {
            var _this$props9 = _this.props,
                asyncBlurFields = _this$props9.asyncBlurFields,
                asyncChangeFields = _this$props9.asyncChangeFields,
                asyncErrors = _this$props9.asyncErrors,
                asyncValidate = _this$props9.asyncValidate,
                dispatch = _this$props9.dispatch,
                initialized = _this$props9.initialized,
                pristine = _this$props9.pristine,
                shouldAsyncValidate = _this$props9.shouldAsyncValidate,
                startAsyncValidation = _this$props9.startAsyncValidation,
                stopAsyncValidation = _this$props9.stopAsyncValidation,
                syncErrors = _this$props9.syncErrors,
                values = _this$props9.values;
            var submitting = !name;

            var fieldNeedsValidation = function fieldNeedsValidation() {
              var fieldNeedsValidationForBlur = asyncBlurFields && name && ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+]/g, '[]'));
              var fieldNeedsValidationForChange = asyncChangeFields && name && ~asyncChangeFields.indexOf(name.replace(/\[[0-9]+]/g, '[]'));
              var asyncValidateByDefault = !(asyncBlurFields || asyncChangeFields);
              return submitting || asyncValidateByDefault || (trigger === 'blur' ? fieldNeedsValidationForBlur : fieldNeedsValidationForChange);
            };

            if (asyncValidate) {
              var valuesToValidate = submitting ? values : setIn(values, name, value);
              var syncValidationPasses = submitting || !getIn(syncErrors, name);

              if (fieldNeedsValidation() && shouldAsyncValidate({
                asyncErrors: asyncErrors,
                initialized: initialized,
                trigger: submitting ? 'submit' : trigger,
                blurredField: name,
                pristine: pristine,
                syncValidationPasses: syncValidationPasses
              })) {
                return (0,_asyncValidation__WEBPACK_IMPORTED_MODULE_19__["default"])(function () {
                  return asyncValidate(valuesToValidate, dispatch, _this.props, name);
                }, startAsyncValidation, stopAsyncValidation, name);
              }
            }
          };

          _this.submitCompleted = function (result) {
            delete _this.submitPromise;
            return result;
          };

          _this.submitFailed = function (error) {
            delete _this.submitPromise;
            throw error;
          };

          _this.listenToSubmit = function (promise) {
            if (!is_promise__WEBPACK_IMPORTED_MODULE_8___default()(promise)) {
              return promise;
            }

            _this.submitPromise = promise;
            return promise.then(_this.submitCompleted, _this.submitFailed);
          };

          _this.submit = function (submitOrEvent) {
            var _this$props10 = _this.props,
                onSubmit = _this$props10.onSubmit,
                blur = _this$props10.blur,
                change = _this$props10.change,
                dispatch = _this$props10.dispatch;

            if (!submitOrEvent || (0,_events_silenceEvent__WEBPACK_IMPORTED_MODULE_20__["default"])(submitOrEvent)) {
              // submitOrEvent is an event: fire submit if not already submitting
              if (!_this.submitPromise) {
                // avoid recursive stack trace if use Form with onSubmit as handleSubmit
                if (_this.innerOnSubmit && _this.innerOnSubmit !== _this.submit) {
                  // will call "submitOrEvent is the submit function" block below
                  return _this.innerOnSubmit();
                } else {
                  return _this.listenToSubmit((0,_handleSubmit__WEBPACK_IMPORTED_MODULE_21__["default"])(checkSubmit(onSubmit), (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.props, {}, (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)({
                    blur: blur,
                    change: change
                  }, dispatch)), // TODO: fix type, should be `Props`
                  _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({
                    excludeFieldArray: true,
                    excludeUnregistered: true
                  })));
                }
              }
            } else {
              // submitOrEvent is the submit function: return deferred submit thunk
              return (0,_events_silenceEvents__WEBPACK_IMPORTED_MODULE_23__["default"])(function () {
                return !_this.submitPromise && _this.listenToSubmit((0,_handleSubmit__WEBPACK_IMPORTED_MODULE_21__["default"])(checkSubmit(submitOrEvent), (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.props, {}, (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)({
                  blur: blur,
                  change: change
                }, dispatch)), // TODO: fix type, should be `Props`
                _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({
                  excludeFieldArray: true,
                  excludeUnregistered: true
                })));
              });
            }
          };

          _this.reset = function () {
            return _this.props.reset();
          };

          return _this;
        }

        var _proto = Form.prototype;

        _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
          if (!(0,_util_isHotReloading__WEBPACK_IMPORTED_MODULE_24__["default"])()) {
            this.initIfNeeded();
            this.validateIfNeeded();
            this.warnIfNeeded();
          }

          invariant__WEBPACK_IMPORTED_MODULE_7___default()(this.props.shouldValidate, 'shouldValidate() is deprecated and will be removed in v9.0.0. Use shouldWarn() or shouldError() instead.');
        };

        _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
          this.initIfNeeded(nextProps);
          this.validateIfNeeded(nextProps);
          this.warnIfNeeded(nextProps);
          this.clearSubmitPromiseIfNeeded(nextProps);
          this.submitIfNeeded(nextProps);
          var onChange = nextProps.onChange,
              values = nextProps.values,
              dispatch = nextProps.dispatch;

          if (onChange && !deepEqual(values, this.props.values)) {
            onChange(values, dispatch, nextProps, this.props.values);
          }
        };

        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
          var _this2 = this;

          if (!this.props.pure) return true;
          var _config$immutableProp = config.immutableProps,
              immutableProps = _config$immutableProp === void 0 ? [] : _config$immutableProp; // if we have children, we MUST update in React 16
          // https://twitter.com/erikras/status/915866544558788608

          return !!(this.props.children || nextProps.children || Object.keys(nextProps).some(function (prop) {
            // useful to debug rerenders
            // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
            //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
            // }
            if (~immutableProps.indexOf(prop)) {
              return _this2.props[prop] !== nextProps[prop];
            }

            return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
          }));
        };

        _proto.componentDidMount = function componentDidMount() {
          if (!(0,_util_isHotReloading__WEBPACK_IMPORTED_MODULE_24__["default"])()) {
            this.initIfNeeded(this.props);
            this.validateIfNeeded();
            this.warnIfNeeded();
          }

          invariant__WEBPACK_IMPORTED_MODULE_7___default()(this.props.shouldValidate, 'shouldValidate() is deprecated and will be removed in v9.0.0. Use shouldWarn() or shouldError() instead.');
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          var _this$props11 = this.props,
              destroyOnUnmount = _this$props11.destroyOnUnmount,
              destroy = _this$props11.destroy;

          if (destroyOnUnmount && !(0,_util_isHotReloading__WEBPACK_IMPORTED_MODULE_24__["default"])()) {
            this.destroyed = true;
            destroy();
          }
        };

        _proto.render = function render() {
          var _ref,
              _this3 = this;

          // remove some redux-form config-only props

          /* eslint-disable no-unused-vars */
          var _this$props12 = this.props,
              anyTouched = _this$props12.anyTouched,
              array = _this$props12.array,
              arrayInsert = _this$props12.arrayInsert,
              arrayMove = _this$props12.arrayMove,
              arrayPop = _this$props12.arrayPop,
              arrayPush = _this$props12.arrayPush,
              arrayRemove = _this$props12.arrayRemove,
              arrayRemoveAll = _this$props12.arrayRemoveAll,
              arrayShift = _this$props12.arrayShift,
              arraySplice = _this$props12.arraySplice,
              arraySwap = _this$props12.arraySwap,
              arrayUnshift = _this$props12.arrayUnshift,
              asyncErrors = _this$props12.asyncErrors,
              asyncValidate = _this$props12.asyncValidate,
              asyncValidating = _this$props12.asyncValidating,
              blur = _this$props12.blur,
              change = _this$props12.change,
              clearSubmit = _this$props12.clearSubmit,
              destroy = _this$props12.destroy,
              destroyOnUnmount = _this$props12.destroyOnUnmount,
              forceUnregisterOnUnmount = _this$props12.forceUnregisterOnUnmount,
              dirty = _this$props12.dirty,
              dispatch = _this$props12.dispatch,
              enableReinitialize = _this$props12.enableReinitialize,
              error = _this$props12.error,
              focus = _this$props12.focus,
              form = _this$props12.form,
              getFormState = _this$props12.getFormState,
              immutableProps = _this$props12.immutableProps,
              initialize = _this$props12.initialize,
              initialized = _this$props12.initialized,
              initialValues = _this$props12.initialValues,
              invalid = _this$props12.invalid,
              keepDirtyOnReinitialize = _this$props12.keepDirtyOnReinitialize,
              keepValues = _this$props12.keepValues,
              updateUnregisteredFields = _this$props12.updateUnregisteredFields,
              pristine = _this$props12.pristine,
              propNamespace = _this$props12.propNamespace,
              registeredFields = _this$props12.registeredFields,
              registerField = _this$props12.registerField,
              reset = _this$props12.reset,
              resetSection = _this$props12.resetSection,
              setSubmitFailed = _this$props12.setSubmitFailed,
              setSubmitSucceeded = _this$props12.setSubmitSucceeded,
              shouldAsyncValidate = _this$props12.shouldAsyncValidate,
              shouldValidate = _this$props12.shouldValidate,
              shouldError = _this$props12.shouldError,
              shouldWarn = _this$props12.shouldWarn,
              startAsyncValidation = _this$props12.startAsyncValidation,
              startSubmit = _this$props12.startSubmit,
              stopAsyncValidation = _this$props12.stopAsyncValidation,
              stopSubmit = _this$props12.stopSubmit,
              submitAsSideEffect = _this$props12.submitAsSideEffect,
              submitting = _this$props12.submitting,
              submitFailed = _this$props12.submitFailed,
              submitSucceeded = _this$props12.submitSucceeded,
              touch = _this$props12.touch,
              touchOnBlur = _this$props12.touchOnBlur,
              touchOnChange = _this$props12.touchOnChange,
              persistentSubmitErrors = _this$props12.persistentSubmitErrors,
              syncErrors = _this$props12.syncErrors,
              syncWarnings = _this$props12.syncWarnings,
              unregisterField = _this$props12.unregisterField,
              untouch = _this$props12.untouch,
              updateSyncErrors = _this$props12.updateSyncErrors,
              updateSyncWarnings = _this$props12.updateSyncWarnings,
              valid = _this$props12.valid,
              validExceptSubmit = _this$props12.validExceptSubmit,
              values = _this$props12.values,
              warning = _this$props12.warning,
              rest = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props12, ["anyTouched", "array", "arrayInsert", "arrayMove", "arrayPop", "arrayPush", "arrayRemove", "arrayRemoveAll", "arrayShift", "arraySplice", "arraySwap", "arrayUnshift", "asyncErrors", "asyncValidate", "asyncValidating", "blur", "change", "clearSubmit", "destroy", "destroyOnUnmount", "forceUnregisterOnUnmount", "dirty", "dispatch", "enableReinitialize", "error", "focus", "form", "getFormState", "immutableProps", "initialize", "initialized", "initialValues", "invalid", "keepDirtyOnReinitialize", "keepValues", "updateUnregisteredFields", "pristine", "propNamespace", "registeredFields", "registerField", "reset", "resetSection", "setSubmitFailed", "setSubmitSucceeded", "shouldAsyncValidate", "shouldValidate", "shouldError", "shouldWarn", "startAsyncValidation", "startSubmit", "stopAsyncValidation", "stopSubmit", "submitAsSideEffect", "submitting", "submitFailed", "submitSucceeded", "touch", "touchOnBlur", "touchOnChange", "persistentSubmitErrors", "syncErrors", "syncWarnings", "unregisterField", "untouch", "updateSyncErrors", "updateSyncWarnings", "valid", "validExceptSubmit", "values", "warning"]);
          /* eslint-enable no-unused-vars */


          var reduxFormProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
            array: array,
            anyTouched: anyTouched,
            asyncValidate: this.asyncValidate,
            asyncValidating: asyncValidating
          }, (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)({
            blur: blur,
            change: change
          }, dispatch), {
            clearSubmit: clearSubmit,
            destroy: destroy,
            dirty: dirty,
            dispatch: dispatch,
            error: error,
            form: form,
            handleSubmit: this.submit,
            initialize: initialize,
            initialized: initialized,
            initialValues: initialValues,
            invalid: invalid,
            pristine: pristine,
            reset: reset,
            resetSection: resetSection,
            submitting: submitting,
            submitAsSideEffect: submitAsSideEffect,
            submitFailed: submitFailed,
            submitSucceeded: submitSucceeded,
            touch: touch,
            untouch: untouch,
            valid: valid,
            warning: warning
          });

          var propsToPass = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, propNamespace ? (_ref = {}, _ref[propNamespace] = reduxFormProps, _ref) : reduxFormProps, {}, rest);

          if (isClassComponent(WrappedComponent)) {
            ;
            propsToPass.ref = this.wrapped;
          }

          var _reduxForm = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props, {
            getFormState: function getFormState(state) {
              return getIn(_this3.props.getFormState(state), _this3.props.form);
            },
            asyncValidate: this.asyncValidate,
            getValues: this.getValues,
            sectionPrefix: undefined,
            register: this.register,
            unregister: this.unregister,
            registerInnerOnSubmit: function registerInnerOnSubmit(innerOnSubmit) {
              return _this3.innerOnSubmit = innerOnSubmit;
            }
          });

          return (0,react__WEBPACK_IMPORTED_MODULE_9__.createElement)(_ReduxFormContext__WEBPACK_IMPORTED_MODULE_25__.ReduxFormContext.Provider, {
            value: _reduxForm,
            children: (0,react__WEBPACK_IMPORTED_MODULE_9__.createElement)(WrappedComponent, propsToPass)
          });
        };

        return Form;
      }(react__WEBPACK_IMPORTED_MODULE_9__.Component);

      Form.displayName = "Form(" + (0,_util_getDisplayName__WEBPACK_IMPORTED_MODULE_26__["default"])(WrappedComponent) + ")";
      Form.WrappedComponent = WrappedComponent;
      Form.propTypes = {
        destroyOnUnmount: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool),
        forceUnregisterOnUnmount: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool),
        form: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().string.isRequired),
        immutableProps: prop_types__WEBPACK_IMPORTED_MODULE_27___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_27___default().string)),
        initialValues: prop_types__WEBPACK_IMPORTED_MODULE_27___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_27___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_27___default().object)]),
        getFormState: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().func),
        onSubmitFail: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().func),
        onSubmitSuccess: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().func),
        propNamespace: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().string),
        validate: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().func),
        warn: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().func),
        touchOnBlur: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool),
        touchOnChange: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool),
        triggerSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool),
        persistentSubmitErrors: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().bool),
        registeredFields: (prop_types__WEBPACK_IMPORTED_MODULE_27___default().any)
      };
      var connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.connect)(function (state, props) {
        var form = props.form,
            getFormState = props.getFormState,
            initialValues = props.initialValues,
            enableReinitialize = props.enableReinitialize,
            keepDirtyOnReinitialize = props.keepDirtyOnReinitialize;
        var formState = getIn(getFormState(state) || empty, form) || empty;
        var stateInitial = getIn(formState, 'initial');
        var initialized = !!stateInitial;
        var shouldUpdateInitialValues = enableReinitialize && initialized && !deepEqual(initialValues, stateInitial);
        var shouldResetValues = shouldUpdateInitialValues && !keepDirtyOnReinitialize;
        var initial = initialValues || stateInitial || empty;

        if (!shouldUpdateInitialValues) {
          initial = stateInitial || empty;
        }

        var values = getIn(formState, 'values') || initial;

        if (shouldResetValues) {
          values = initial;
        }

        var pristine = shouldResetValues || deepEqual(initial, values);
        var asyncErrors = getIn(formState, 'asyncErrors');
        var syncErrors = getIn(formState, 'syncErrors') || _structure_plain__WEBPACK_IMPORTED_MODULE_17__["default"].empty;
        var syncWarnings = getIn(formState, 'syncWarnings') || _structure_plain__WEBPACK_IMPORTED_MODULE_17__["default"].empty;
        var registeredFields = getIn(formState, 'registeredFields');
        var valid = isValid(form, getFormState, false)(state);
        var validExceptSubmit = isValid(form, getFormState, true)(state);
        var anyTouched = !!getIn(formState, 'anyTouched');
        var submitting = !!getIn(formState, 'submitting');
        var submitFailed = !!getIn(formState, 'submitFailed');
        var submitSucceeded = !!getIn(formState, 'submitSucceeded');
        var error = getIn(formState, 'error');
        var warning = getIn(formState, 'warning');
        var triggerSubmit = getIn(formState, 'triggerSubmit');
        return {
          anyTouched: anyTouched,
          asyncErrors: asyncErrors,
          asyncValidating: getIn(formState, 'asyncValidating') || false,
          dirty: !pristine,
          error: error,
          initialized: initialized,
          invalid: !valid,
          pristine: pristine,
          registeredFields: registeredFields,
          submitting: submitting,
          submitFailed: submitFailed,
          submitSucceeded: submitSucceeded,
          syncErrors: syncErrors,
          syncWarnings: syncWarnings,
          triggerSubmit: triggerSubmit,
          values: values,
          valid: valid,
          validExceptSubmit: validExceptSubmit,
          warning: warning
        };
      }, function (dispatch, initialProps) {
        var bindForm = function bindForm(actionCreator) {
          return actionCreator.bind(null, initialProps.form);
        }; // Bind the first parameter on `props.form`


        var boundFormACs = lodash_mapValues__WEBPACK_IMPORTED_MODULE_5___default()(formActions, bindForm);

        var boundArrayACs = lodash_mapValues__WEBPACK_IMPORTED_MODULE_5___default()(arrayActions, bindForm);

        var boundBlur = function boundBlur(field, value) {
          return blur(initialProps.form, field, value, !!initialProps.touchOnBlur);
        };

        var boundChange = function boundChange(field, value) {
          return change(initialProps.form, field, value, !!initialProps.touchOnChange, !!initialProps.persistentSubmitErrors);
        };

        var boundFocus = bindForm(focus); // Wrap action creators with `dispatch`

        var connectedFormACs = (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundFormACs, dispatch);
        var connectedArrayACs = {
          insert: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayInsert, dispatch),
          move: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayMove, dispatch),
          pop: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayPop, dispatch),
          push: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayPush, dispatch),
          remove: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayRemove, dispatch),
          removeAll: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayRemoveAll, dispatch),
          shift: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayShift, dispatch),
          splice: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arraySplice, dispatch),
          swap: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arraySwap, dispatch),
          unshift: (0,redux__WEBPACK_IMPORTED_MODULE_22__.bindActionCreators)(boundArrayACs.arrayUnshift, dispatch)
        };
        return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectedFormACs, {}, boundArrayACs, {
          blur: boundBlur,
          change: boundChange,
          array: connectedArrayACs,
          focus: boundFocus,
          dispatch: dispatch
        });
      }, undefined, {
        forwardRef: true
      });
      var ConnectedForm = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(connector(Form), WrappedComponent);
      ConnectedForm.defaultProps = config; // build outer component to expose instance api

      var ReduxForm = /*#__PURE__*/function (_React$Component2) {
        (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReduxForm, _React$Component2);

        function ReduxForm() {
          var _this4;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this4 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
          _this4.ref = react__WEBPACK_IMPORTED_MODULE_9__.createRef();
          return _this4;
        }

        var _proto2 = ReduxForm.prototype;

        _proto2.submit = function submit() {
          return this.ref.current && this.ref.current.submit();
        };

        _proto2.reset = function reset() {
          if (this.ref) {
            this.ref.current.reset();
          }
        };

        _proto2.render = function render() {
          var _this$props13 = this.props,
              initialValues = _this$props13.initialValues,
              rest = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props13, ["initialValues"]);

          return (0,react__WEBPACK_IMPORTED_MODULE_9__.createElement)(ConnectedForm, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, rest, {
            ref: this.ref,
            // convert initialValues if need to
            initialValues: fromJS(initialValues)
          }));
        };

        (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ReduxForm, [{
          key: "valid",
          get: function get() {
            return !!(this.ref.current && this.ref.current.isValid());
          }
        }, {
          key: "invalid",
          get: function get() {
            return !this.valid;
          }
        }, {
          key: "pristine",
          get: function get() {
            return !!(this.ref.current && this.ref.current.isPristine());
          }
        }, {
          key: "dirty",
          get: function get() {
            return !this.pristine;
          }
        }, {
          key: "values",
          get: function get() {
            return this.ref.current ? this.ref.current.getValues() : empty;
          }
        }, {
          key: "fieldList",
          get: function get() {
            // mainly provided for testing
            return this.ref.current ? this.ref.current.getFieldList() : [];
          }
        }, {
          key: "wrappedInstance",
          get: function get() {
            // for testing
            return this.ref.current && this.ref.current.wrapped.current;
          }
        }]);

        return ReduxForm;
      }(react__WEBPACK_IMPORTED_MODULE_9__.Component);

      var WithContext = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()((0,_ReduxFormContext__WEBPACK_IMPORTED_MODULE_25__.withReduxForm)(ReduxForm), WrappedComponent);
      WithContext.defaultProps = config;
      return WithContext;
    };
  };
}

/***/ }),

/***/ "./node_modules/redux-form/es/defaultShouldAsyncValidate.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-form/es/defaultShouldAsyncValidate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var defaultShouldAsyncValidate = function defaultShouldAsyncValidate(_ref) {
  var initialized = _ref.initialized,
      trigger = _ref.trigger,
      pristine = _ref.pristine,
      syncValidationPasses = _ref.syncValidationPasses;

  if (!syncValidationPasses) {
    return false;
  }

  switch (trigger) {
    case 'blur':
    case 'change':
      // blurring
      return true;

    case 'submit':
      // submitting, so only async validate if form is dirty or was never initialized
      // conversely, DON'T async validate if the form is pristine just as it was initialized
      return !pristine || !initialized;

    default:
      return false;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultShouldAsyncValidate);

/***/ }),

/***/ "./node_modules/redux-form/es/defaultShouldError.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-form/es/defaultShouldError.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var defaultShouldError = function defaultShouldError(_ref) {
  var values = _ref.values,
      nextProps = _ref.nextProps,
      initialRender = _ref.initialRender,
      lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
      fieldValidatorKeys = _ref.fieldValidatorKeys,
      structure = _ref.structure;

  if (initialRender) {
    return true;
  }

  return !structure.deepEqual(values, nextProps && nextProps.values) || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultShouldError);

/***/ }),

/***/ "./node_modules/redux-form/es/defaultShouldValidate.js":
/*!*************************************************************!*\
  !*** ./node_modules/redux-form/es/defaultShouldValidate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var defaultShouldValidate = function defaultShouldValidate(_ref) {
  var values = _ref.values,
      nextProps = _ref.nextProps,
      initialRender = _ref.initialRender,
      lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
      fieldValidatorKeys = _ref.fieldValidatorKeys,
      structure = _ref.structure;

  if (initialRender) {
    return true;
  }

  return !structure.deepEqual(values, nextProps && nextProps.values) || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultShouldValidate);

/***/ }),

/***/ "./node_modules/redux-form/es/defaultShouldWarn.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-form/es/defaultShouldWarn.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var defaultShouldWarn = function defaultShouldWarn(_ref) {
  var values = _ref.values,
      nextProps = _ref.nextProps,
      initialRender = _ref.initialRender,
      lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
      fieldValidatorKeys = _ref.fieldValidatorKeys,
      structure = _ref.structure;

  if (initialRender) {
    return true;
  }

  return !structure.deepEqual(values, nextProps && nextProps.values) || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultShouldWarn);

/***/ }),

/***/ "./node_modules/redux-form/es/events/getValue.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-form/es/events/getValue.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEvent */ "./node_modules/redux-form/es/events/isEvent.js");


var getSelectedValues = function getSelectedValues(options) {
  var result = [];

  if (options) {
    for (var index = 0; index < options.length; index++) {
      var option = options[index];

      if (option.selected) {
        result.push(option.value);
      }
    }
  }

  return result;
};

var getValue = function getValue(event, isReactNative) {
  if ((0,_isEvent__WEBPACK_IMPORTED_MODULE_0__["default"])(event)) {
    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
      return event.nativeEvent.text;
    }

    if (isReactNative && event.nativeEvent !== undefined) {
      return event.nativeEvent.text;
    }

    var detypedEvent = event;
    var _detypedEvent$target = detypedEvent.target,
        type = _detypedEvent$target.type,
        value = _detypedEvent$target.value,
        checked = _detypedEvent$target.checked,
        files = _detypedEvent$target.files,
        dataTransfer = detypedEvent.dataTransfer;

    if (type === 'checkbox') {
      return !!checked;
    }

    if (type === 'file') {
      return files || dataTransfer && dataTransfer.files;
    }

    if (type === 'select-multiple') {
      return getSelectedValues(event.target.options);
    }

    return value;
  }

  return event;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);

/***/ }),

/***/ "./node_modules/redux-form/es/events/isEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-form/es/events/isEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isEvent = function isEvent(candidate) {
  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEvent);

/***/ }),

/***/ "./node_modules/redux-form/es/events/onChangeValue.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-form/es/events/onChangeValue.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValue */ "./node_modules/redux-form/es/events/getValue.js");
/* harmony import */ var _isReactNative__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isReactNative */ "./node_modules/redux-form/es/isReactNative.js");



var onChangeValue = function onChangeValue(event, _ref) {
  var name = _ref.name,
      parse = _ref.parse,
      normalize = _ref.normalize;
  // read value from input
  var value = (0,_getValue__WEBPACK_IMPORTED_MODULE_0__["default"])(event, _isReactNative__WEBPACK_IMPORTED_MODULE_1__["default"]); // parse value if we have a parser

  if (parse) {
    value = parse(value, name);
  } // normalize value


  if (normalize) {
    value = normalize(name, value);
  }

  return value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onChangeValue);

/***/ }),

/***/ "./node_modules/redux-form/es/events/silenceEvent.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-form/es/events/silenceEvent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEvent */ "./node_modules/redux-form/es/events/isEvent.js");


var silenceEvent = function silenceEvent(event) {
  var is = (0,_isEvent__WEBPACK_IMPORTED_MODULE_0__["default"])(event);

  if (is) {
    event.preventDefault();
  }

  return is;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (silenceEvent);

/***/ }),

/***/ "./node_modules/redux-form/es/events/silenceEvents.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-form/es/events/silenceEvents.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _silenceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./silenceEvent */ "./node_modules/redux-form/es/events/silenceEvent.js");


var silenceEvents = function silenceEvents(fn) {
  return function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0,_silenceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])(event) ? fn.apply(void 0, args) : fn.apply(void 0, [event].concat(args));
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (silenceEvents);

/***/ }),

/***/ "./node_modules/redux-form/es/generateValidator.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-form/es/generateValidator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateValidator)
/* harmony export */ });
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


var toArray = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};

var getError = function getError(value, values, props, validators, name) {
  var array = toArray(validators);

  for (var i = 0; i < array.length; i++) {
    var error = array[i](value, values, props, name);

    if (error) {
      return error;
    }
  }
};

function generateValidator(validators, _ref) {
  var getIn = _ref.getIn;
  return function (values, props) {
    var errors = {};
    Object.keys(validators).forEach(function (name) {
      var value = getIn(values, name);
      var error = getError(value, values, props, validators[name], name);

      if (error) {
        errors = _structure_plain__WEBPACK_IMPORTED_MODULE_0__["default"].setIn(errors, name, error);
      }
    });
    return errors;
  };
}

/***/ }),

/***/ "./node_modules/redux-form/es/handleSubmit.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-form/es/handleSubmit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SubmissionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmissionError */ "./node_modules/redux-form/es/SubmissionError.js");




var mergeErrors = function mergeErrors(_ref) {
  var asyncErrors = _ref.asyncErrors,
      syncErrors = _ref.syncErrors;
  return asyncErrors && typeof asyncErrors.merge === 'function' ? asyncErrors.merge(syncErrors).toJS() : (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, asyncErrors, {}, syncErrors);
};

var executeSubmit = function executeSubmit(submit, fields, props) {
  var dispatch = props.dispatch,
      submitAsSideEffect = props.submitAsSideEffect,
      onSubmitFail = props.onSubmitFail,
      onSubmitSuccess = props.onSubmitSuccess,
      startSubmit = props.startSubmit,
      stopSubmit = props.stopSubmit,
      setSubmitFailed = props.setSubmitFailed,
      setSubmitSucceeded = props.setSubmitSucceeded,
      values = props.values;
  var result;

  try {
    result = submit(values, dispatch, props);
  } catch (submitError) {
    var error = (0,_SubmissionError__WEBPACK_IMPORTED_MODULE_2__.isSubmissionError)(submitError) ? submitError.errors : undefined;
    stopSubmit(error);
    setSubmitFailed.apply(void 0, fields);

    if (onSubmitFail) {
      onSubmitFail(error, dispatch, submitError, props);
    }

    if (error || onSubmitFail) {
      // if you've provided an onSubmitFail callback, don't re-throw the error
      return error;
    } else {
      throw submitError;
    }
  }

  if (submitAsSideEffect) {
    if (result) {
      dispatch(result);
    }
  } else {
    if (is_promise__WEBPACK_IMPORTED_MODULE_1___default()(result)) {
      startSubmit();
      return result.then(function (submitResult) {
        stopSubmit();
        setSubmitSucceeded();

        if (onSubmitSuccess) {
          onSubmitSuccess(submitResult, dispatch, props);
        }

        return submitResult;
      }, function (submitError) {
        var error = (0,_SubmissionError__WEBPACK_IMPORTED_MODULE_2__.isSubmissionError)(submitError) ? submitError.errors : undefined;
        stopSubmit(error);
        setSubmitFailed.apply(void 0, fields);

        if (onSubmitFail) {
          onSubmitFail(error, dispatch, submitError, props);
        }

        if (error || onSubmitFail) {
          // if you've provided an onSubmitFail callback, don't re-throw the error
          return error;
        } else {
          throw submitError;
        }
      });
    } else {
      setSubmitSucceeded();

      if (onSubmitSuccess) {
        onSubmitSuccess(result, dispatch, props);
      }
    }
  }

  return result;
};

var handleSubmit = function handleSubmit(submit, props, valid, asyncValidate, fields) {
  var dispatch = props.dispatch,
      onSubmitFail = props.onSubmitFail,
      setSubmitFailed = props.setSubmitFailed,
      syncErrors = props.syncErrors,
      asyncErrors = props.asyncErrors,
      touch = props.touch,
      persistentSubmitErrors = props.persistentSubmitErrors;
  touch.apply(void 0, fields);

  if (valid || persistentSubmitErrors) {
    var asyncValidateResult = asyncValidate && asyncValidate();

    if (asyncValidateResult) {
      return asyncValidateResult.then(function (asyncErrors) {
        if (asyncErrors) {
          throw asyncErrors;
        }

        return executeSubmit(submit, fields, props);
      })["catch"](function (asyncErrors) {
        setSubmitFailed.apply(void 0, fields);

        if (onSubmitFail) {
          onSubmitFail(asyncErrors, dispatch, null, props);
        }

        return Promise.reject(asyncErrors);
      });
    } else {
      return executeSubmit(submit, fields, props);
    }
  } else {
    setSubmitFailed.apply(void 0, fields);
    var errors = mergeErrors({
      asyncErrors: asyncErrors,
      syncErrors: syncErrors
    });

    if (onSubmitFail) {
      onSubmitFail(errors, dispatch, null, props);
    }

    return errors;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleSubmit);

/***/ }),

/***/ "./node_modules/redux-form/es/hasError.js":
/*!************************************************!*\
  !*** ./node_modules/redux-form/es/hasError.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHasError)
/* harmony export */ });
var getErrorKeys = function getErrorKeys(name, type) {
  switch (type) {
    case 'Field':
      return [name, name + "._error"];

    case 'FieldArray':
      return [name + "._error"];

    default:
      throw new Error('Unknown field type');
  }
};

function createHasError(_ref) {
  var getIn = _ref.getIn;
  return function (field, syncErrors, asyncErrors, submitErrors) {
    if (!syncErrors && !asyncErrors && !submitErrors) {
      return false;
    }

    var name = getIn(field, 'name');
    var type = getIn(field, 'type');
    return getErrorKeys(name, type).some(function (key) {
      return getIn(syncErrors, key) || getIn(asyncErrors, key) || getIn(submitErrors, key);
    });
  };
}

/***/ }),

/***/ "./node_modules/redux-form/es/isReactNative.js":
/*!*****************************************************!*\
  !*** ./node_modules/redux-form/es/isReactNative.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isReactNative);

/***/ }),

/***/ "./node_modules/redux-form/es/reduxForm.js":
/*!*************************************************!*\
  !*** ./node_modules/redux-form/es/reduxForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createReduxForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReduxForm */ "./node_modules/redux-form/es/createReduxForm.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createReduxForm__WEBPACK_IMPORTED_MODULE_0__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/redux-form/es/selectors/isValid.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-form/es/selectors/isValid.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createIsValid)
/* harmony export */ });
/* harmony import */ var _hasError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hasError */ "./node_modules/redux-form/es/hasError.js");

function createIsValid(structure) {
  var getIn = structure.getIn,
      keys = structure.keys;
  var hasError = (0,_hasError__WEBPACK_IMPORTED_MODULE_0__["default"])(structure);
  return function (form, getFormState, ignoreSubmitErrors) {
    if (ignoreSubmitErrors === void 0) {
      ignoreSubmitErrors = false;
    }

    return function (state) {
      var nonNullGetFormState = getFormState || function (state) {
        return getIn(state, 'form');
      };

      var formState = nonNullGetFormState(state);
      var syncError = getIn(formState, form + ".syncError");

      if (syncError) {
        return false;
      }

      if (!ignoreSubmitErrors) {
        var error = getIn(formState, form + ".error");

        if (error) {
          return false;
        }
      }

      var syncErrors = getIn(formState, form + ".syncErrors");
      var asyncErrors = getIn(formState, form + ".asyncErrors");
      var submitErrors = ignoreSubmitErrors ? undefined : getIn(formState, form + ".submitErrors");

      if (!syncErrors && !asyncErrors && !submitErrors) {
        return true;
      }

      var registeredFields = getIn(formState, form + ".registeredFields");

      if (!registeredFields) {
        return true;
      }

      return !keys(registeredFields).filter(function (name) {
        return getIn(registeredFields, "['" + name + "'].count") > 0;
      }).some(function (name) {
        return hasError(getIn(registeredFields, "['" + name + "']"), syncErrors, asyncErrors, submitErrors);
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux-form/es/util/eventConsts.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-form/es/util/eventConsts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataKey": () => (/* binding */ dataKey)
/* harmony export */ });
var dataKey = 'text';

/***/ }),

/***/ "./node_modules/redux-form/es/util/getDisplayName.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-form/es/util/getDisplayName.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getDisplayName = function getDisplayName(Comp) {
  return Comp.displayName || Comp.name || 'Component';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDisplayName);

/***/ }),

/***/ "./node_modules/redux-form/es/util/isHotReloading.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-form/es/util/isHotReloading.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var isHotReloading = function isHotReloading() {
  var castModule = module;
  return !!(typeof castModule !== 'undefined' && castModule.hot && typeof castModule.hot.status === 'function' && castModule.hot.status() === 'apply');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isHotReloading);

/***/ }),

/***/ "./node_modules/redux-form/es/util/prefixName.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-form/es/util/prefixName.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatName = function formatName(_ref, name) {
  var sectionPrefix = _ref._reduxForm.sectionPrefix;
  return sectionPrefix ? sectionPrefix + "." + name : name;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatName);

/***/ }),

/***/ "./node_modules/redux-form/es/util/shallowCompare.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-form/es/util/shallowCompare.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEqualWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqualWith */ "./node_modules/lodash/isEqualWith.js");
/* harmony import */ var lodash_isEqualWith__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqualWith__WEBPACK_IMPORTED_MODULE_0__);


var customizer = function customizer(objectValue, otherValue, indexOrkey, object, other, stack) {
  // https://lodash.com/docs/4.17.4#isEqualWith
  if (stack) {
    // Shallow compares
    // For 1st level, stack === undefined.
    //   -> Do nothing (and implicitly return undefined so that it goes to compare 2nd level)
    // For 2nd level and up, stack !== undefined.
    //   -> Compare by === operator
    return objectValue === otherValue;
  }
};

var shallowCompare = function shallowCompare(instance, nextProps, nextState) {
  var propsEqual = lodash_isEqualWith__WEBPACK_IMPORTED_MODULE_0___default()(instance.props, nextProps, customizer);

  var stateEqual = lodash_isEqualWith__WEBPACK_IMPORTED_MODULE_0___default()(instance.state, nextState, customizer);

  return !propsEqual || !stateEqual;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shallowCompare);

/***/ }),

/***/ "./node_modules/redux-form/es/util/validateComponentProp.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-form/es/util/validateComponentProp.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");


var validateComponentProp = function validateComponentProp(props, propName, componentName) {
  if (!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(props[propName])) {
    return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`.');
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateComponentProp);

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ })

}]);