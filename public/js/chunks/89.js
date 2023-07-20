(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./resources/lms/src/admin/components/members/EditMember.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/admin/components/members/EditMember.js ***!
  \******************************************************************/
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
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");











var EditMember = function EditMember(props) {
  var member = props.member,
      match = props.match,
      editMember = props.editMember,
      history = props.history,
      fetchMember = props.fetchMember,
      isLoading = props.isLoading;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchMember(+match.params.id, true);
  }, []);

  if (!member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }

  var onSaveMember = function onSaveMember(formValues) {
    formValues.roles = [];
    editMember(member.id, Object(_shared_prepareUserFormData__WEBPACK_IMPORTED_MODULE_4__["default"])(formValues), history);
  };

  var goBack = function goBack() {
    history.goBack();
  };

  var prepareFormOption = {
    onSaveMember: onSaveMember,
    onCancel: goBack,
    initialValues: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__["prepareProfileData"])(member)
  };

  if (isLoading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: 12,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Members"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__["getFormattedMessage"])('members.modal.edit.title'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MemberForm__WEBPACK_IMPORTED_MODULE_3__["default"], prepareFormOption))))));
};

EditMember.propTypes = {
  member: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  editMember: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  fetchMember: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

var mapStateToProps = function mapStateToProps(state, ownProp) {
  var members = state.members,
      isLoading = state.isLoading;
  return {
    member: members.find(function (member) {
      return member.id === +ownProp.match.params.id;
    }),
    isLoading: isLoading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  editMember: _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_5__["editMember"],
  fetchMember: _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_5__["fetchMember"]
})(EditMember));

/***/ })

}]);