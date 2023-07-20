(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./resources/lms/src/admin/components/members/CreateMember.js":
/*!********************************************************************!*\
  !*** ./resources/lms/src/admin/components/members/CreateMember.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MemberForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MemberForm */ "./resources/lms/src/admin/components/members/MemberForm.js");
/* harmony import */ var _shared_prepareUserFormData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/prepareUserFormData */ "./resources/lms/src/admin/shared/prepareUserFormData.js");
/* harmony import */ var _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/memberAction */ "./resources/lms/src/admin/store/actions/memberAction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");











var CreateMember = function CreateMember(props) {
  var addMember = props.addMember,
      history = props.history;

  var onSaveMember = function onSaveMember(formValues) {
    addMember(Object(_shared_prepareUserFormData__WEBPACK_IMPORTED_MODULE_4__["default"])(formValues), history);
  };

  var goBack = function goBack() {
    history.goBack();
  };

  var prepareFormOption = {
    initialValues: {
      is_active: true,
      isCreate: true
    },
    onSaveMember: onSaveMember,
    onCancel: goBack
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "animated fadeIn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Members"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('members.modal.add.title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MemberForm__WEBPACK_IMPORTED_MODULE_3__["default"], prepareFormOption))))));
};

CreateMember.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  addMember: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  addMember: _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_5__["addMember"]
})(CreateMember));

/***/ })

}]);