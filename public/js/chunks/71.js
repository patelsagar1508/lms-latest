(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./resources/lms/src/member/components/auth/registration/Registration.js":
/*!*******************************************************************************!*\
  !*** ./resources/lms/src/member/components/auth/registration/Registration.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _registrationFormValidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registrationFormValidate */ "./resources/lms/src/member/components/auth/registration/registrationFormValidate.js");
/* harmony import */ var _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/CustomInputGroup */ "./resources/lms/src/shared/components/CustomInputGroup.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/authAction */ "./resources/lms/src/member/store/actions/authAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















var MemberRegistration = function MemberRegistration(props) {
  var handleSubmit = props.handleSubmit,
      invalid = props.invalid,
      history = props.history,
      registration = props.registration;

  var onRegistration =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(formValues) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              registration(formValues, history);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onRegistration(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "app flex-row align-items-center"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Registration"
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_13__["default"], null),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      className: "justify-content-center"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      md: "4"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      className: "p-3"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      onSubmit: handleSubmit(onRegistration)
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('registration.title')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-muted"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('registration.note')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "first_name",
      type: "text",
      placeholder: "registration.input.first-name.label",
      required: true,
      groupText: "icon-user",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_8__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "last_name",
      type: "text",
      placeholder: "registration.input.last-name.label",
      required: true,
      groupText: "icon-user",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_8__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "email",
      type: "email",
      placeholder: "registration.input.email.label",
      groupText: "icon-envelope",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_8__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "password",
      type: "password",
      placeholder: "registration.input.password.label",
      groupText: "icon-lock",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_8__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "confirm_password",
      type: "password",
      placeholder: "registration.input.confirm-password.label",
      groupText: "icon-lock",
      component: _shared_components_CustomInputGroup__WEBPACK_IMPORTED_MODULE_8__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "d-flex justify-content-between"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      color: "primary",
      disabled: invalid,
      className: "px-4"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('registration.submit.title')),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: _constants__WEBPACK_IMPORTED_MODULE_12__["Routes"].MEMBER_LOGIN,
      color: "link",
      className: "px-0 mt-2 text-right"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('registration.link.login.title'))))))))))
  );
};

MemberRegistration.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  registration: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onRegistration: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
var form = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'registrationForm',
  validate: _registrationFormValidate__WEBPACK_IMPORTED_MODULE_7__["default"]
})(MemberRegistration);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  registration: _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__["registration"]
})(form));

/***/ }),

/***/ "./resources/lms/src/member/components/auth/registration/registrationFormValidate.js":
/*!*******************************************************************************************!*\
  !*** ./resources/lms/src/member/components/auth/registration/registrationFormValidate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ __webpack_exports__["default"] = (function (formValues) {
  var errors = {};

  if (!formValues.first_name) {
    errors.first_name = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('registration.input.first-name.validate.label');
  }

  if (!formValues.last_name) {
    errors.last_name = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('registration.input.last-name.validate.label');
  }

  if (!formValues.email) {
    errors.email = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('registration.input.email-required.validate.label');
  }

  if (!formValues.password) {
    errors.password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('registration.input.password-required.validate.label');
  }

  if (formValues.password && formValues.password.length < 6) {
    errors.password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('registration.input.password-invalid.validate.label');
  }

  if (formValues.confirm_password !== formValues.password) {
    errors.confirm_password = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('registration.input.confirm-password.validate.label');
  }

  return errors;
});

/***/ })

}]);