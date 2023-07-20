(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./resources/lms/src/admin/components/authors/AuthorForm.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/admin/components/authors/AuthorForm.js ***!
  \******************************************************************/
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
/* harmony import */ var _authorValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorValidate */ "./resources/lms/src/admin/components/authors/authorValidate.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/lms/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/lms/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/TextArea */ "./resources/lms/src/shared/components/TextArea.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var AuthorForm = function AuthorForm(props) {
  var onSaveAuthor = props.onSaveAuthor,
      handleSubmit = props.handleSubmit;
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    inputRef.current.focus();
  }, []);

  var onSave = function onSave(formValues) {
    onSaveAuthor(formValues);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "animated fadeIn m-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "first_name",
    label: "profile.input.first-name.label",
    required: true,
    inputRef: inputRef,
    groupText: "user-circle-o",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "last_name",
    label: "profile.input.last-name.label",
    groupText: "user",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "description",
    label: "authors.input.description.label",
    component: _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_7__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    onSave: handleSubmit(onSave)
  }, props))));
};

AuthorForm.propTypes = {
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  onSaveAuthor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'authorForm',
  validate: _authorValidate__WEBPACK_IMPORTED_MODULE_4__["default"]
})(AuthorForm));

/***/ }),

/***/ "./resources/lms/src/admin/components/authors/AuthorModal.js":
/*!*******************************************************************!*\
  !*** ./resources/lms/src/admin/components/authors/AuthorModal.js ***!
  \*******************************************************************/
/*! exports provided: AuthorModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorModal", function() { return AuthorModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateAuthor */ "./resources/lms/src/admin/components/authors/CreateAuthor.js");
/* harmony import */ var _EditAuthor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditAuthor */ "./resources/lms/src/admin/components/authors/EditAuthor.js");
/* harmony import */ var _DeleteAuthor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteAuthor */ "./resources/lms/src/admin/components/authors/DeleteAuthor.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/lms/src/shared/modal-config/ModalConfig.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");







var AuthorModal = function AuthorModal(props) {
  var author = props.author,
      isCreate = props.isCreate,
      isEdit = props.isEdit,
      isDelete = props.isDelete;
  var editConfig = {
    author: author
  };
  var delConfig = {
    authorId: author ? author.id : null
  };
  var modalOptions = {
    modalTitle: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__["getModalTitle"])(isCreate, isEdit, isDelete, 'authors.input.new-btn.label', 'authors.modal.edit.title', 'authors.modal.delete.title'),
    NewComponent: _CreateAuthor__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditComponent: _EditAuthor__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteComponent: _DeleteAuthor__WEBPACK_IMPORTED_MODULE_4__["default"],
    deleteKey: author ? author.last_name ? author.first_name + ' ' + author.last_name : author.first_name : null,
    editConfig: editConfig,
    delConfig: delConfig,
    props: props
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__["default"], modalOptions);
};
AuthorModal.propTypes = {
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isCreate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (AuthorModal);

/***/ }),

/***/ "./resources/lms/src/admin/components/authors/Authors.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/admin/components/authors/Authors.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthorModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthorModal */ "./resources/lms/src/admin/components/authors/AuthorModal.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/lms/src/shared/table/ReactDataTable.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/lms/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/lms/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/authorAction */ "./resources/lms/src/admin/store/actions/authorAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var Authors = function Authors(props) {
  var authors = props.authors,
      toggleModal = props.toggleModal,
      totalRecord = props.totalRecord,
      isLoading = props.isLoading,
      fetchAuthors = props.fetchAuthors;

  var _openModal = Object(_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_10__["openModal"])(),
      _openModal2 = _slicedToArray(_openModal, 5),
      isCreate = _openModal2[0],
      isEdit = _openModal2[1],
      isDelete = _openModal2[2],
      author = _openModal2[3],
      onOpenModal = _openModal2[4];

  var cardModalProps = {
    author: author,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal
  };

  var onChange = function onChange(filter) {
    fetchAuthors(filter, true);
  };

  var onClickModal = function onClickModal(isEdit) {
    var author = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, author, isDelete);
    toggleModal();
  };

  var columns = [{
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('react-data-table.name.column'),
    selector: 'first_name',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.first_name, " ", row.last_name);
    },
    minWidth: '400px'
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('react-data-table.action.column'),
    selector: 'id',
    right: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onOpenModal: onClickModal,
        item: row
      });
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Authors"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('authors.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return onClickModal(false);
    },
    size: "md",
    color: "primary ml-2"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('authors.input.new-btn.label')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: authors,
    columns: columns,
    loading: isLoading,
    emptyStateMessageId: "authors.empty-state.title",
    emptyNotFoundStateMessageId: "authors.not-found.empty-state.title",
    totalRows: totalRecord,
    onChange: onChange,
    icon: _constants__WEBPACK_IMPORTED_MODULE_13__["icon"].AUTHORS
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthorModal__WEBPACK_IMPORTED_MODULE_4__["default"], cardModalProps))))));
};

Authors.propTypes = {
  authors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  totalRecord: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fetchAuthors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  var authors = state.authors,
      isLoading = state.isLoading,
      totalRecord = state.totalRecord;
  return {
    authors: authors,
    isLoading: isLoading,
    totalRecord: totalRecord
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  fetchAuthors: _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_12__["fetchAuthors"],
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__["toggleModal"]
})(Authors));

/***/ }),

/***/ "./resources/lms/src/admin/components/authors/CreateAuthor.js":
/*!********************************************************************!*\
  !*** ./resources/lms/src/admin/components/authors/CreateAuthor.js ***!
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
/* harmony import */ var _AuthorForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorForm */ "./resources/lms/src/admin/components/authors/AuthorForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/authorAction */ "./resources/lms/src/admin/store/actions/authorAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var CreateAuthor = function CreateAuthor(props) {
  var addAuthor = props.addAuthor,
      toggleModal = props.toggleModal;

  var onSaveAuthor = function onSaveAuthor(formValues) {
    addAuthor(formValues, _constants__WEBPACK_IMPORTED_MODULE_6__["Filters"].OBJ);
  };

  var prepareFormOption = {
    onSaveAuthor: onSaveAuthor,
    onCancel: toggleModal
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthorForm__WEBPACK_IMPORTED_MODULE_3__["default"], prepareFormOption)
  }));
};

CreateAuthor.propTypes = {
  addAuthor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  addAuthor: _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_5__["addAuthor"]
})(CreateAuthor));

/***/ }),

/***/ "./resources/lms/src/admin/components/authors/DeleteAuthor.js":
/*!********************************************************************!*\
  !*** ./resources/lms/src/admin/components/authors/DeleteAuthor.js ***!
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
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/lms/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/authorAction */ "./resources/lms/src/admin/store/actions/authorAction.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var DeleteAuthor = function DeleteAuthor(props) {
  var authorId = props.authorId,
      deleteAuthor = props.deleteAuthor,
      toggleModal = props.toggleModal;

  var onDeleteAuthor = function onDeleteAuthor() {
    deleteAuthor(authorId);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onDelete: onDeleteAuthor,
      onCancel: toggleModal
    })
  }));
};

DeleteAuthor.propTypes = {
  authorId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  deleteAuthor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  deleteAuthor: _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_5__["deleteAuthor"]
})(DeleteAuthor));

/***/ }),

/***/ "./resources/lms/src/admin/components/authors/EditAuthor.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/admin/components/authors/EditAuthor.js ***!
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
/* harmony import */ var _AuthorForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorForm */ "./resources/lms/src/admin/components/authors/AuthorForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/authorAction */ "./resources/lms/src/admin/store/actions/authorAction.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var EditAuthor = function EditAuthor(props) {
  var author = props.author,
      editAuthor = props.editAuthor,
      toggleModal = props.toggleModal;

  var onSaveAuthor = function onSaveAuthor(formValues) {
    editAuthor(author.id, formValues);
  };

  var prepareFormOption = {
    onSaveAuthor: onSaveAuthor,
    onCancel: toggleModal,
    initialValues: {
      first_name: author.first_name,
      last_name: author.last_name,
      description: author.description
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthorForm__WEBPACK_IMPORTED_MODULE_3__["default"], prepareFormOption)
  }));
};

EditAuthor.propTypes = {
  author: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  editAuthor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  editAuthor: _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_5__["editAuthor"]
})(EditAuthor));

/***/ }),

/***/ "./resources/lms/src/admin/components/authors/authorValidate.js":
/*!**********************************************************************!*\
  !*** ./resources/lms/src/admin/components/authors/authorValidate.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ __webpack_exports__["default"] = (function (formValues) {
  var errors = {};

  if (!formValues.first_name) {
    errors.first_name = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__["getFormattedMessage"])('profile.input.first-name.validate.label');
  }

  return errors;
});

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/authorAction.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/authorAction.js ***!
  \***************************************************************/
/*! exports provided: fetchAuthors, addAuthor, editAuthor, deleteAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthors", function() { return fetchAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAuthor", function() { return addAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editAuthor", function() { return editAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAuthor", function() { return deleteAuthor; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/lms/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/lms/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var fetchAuthors = function fetchAuthors() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isLoading ? dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(true)) : null;
                url = _constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].AUTHOR;

                if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                  url += Object(_shared_requestParam__WEBPACK_IMPORTED_MODULE_6__["default"])(filter);
                }

                _context.next = 5;
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["authorActionType"].FETCH_AUTHORS,
                    payload: response.data.data
                  });
                  dispatch(Object(_totalRecordAction__WEBPACK_IMPORTED_MODULE_7__["setTotalRecord"])(response.data.totalRecords));
                  isLoading ? dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(false)) : null;
                })["catch"](function (_ref2) {
                  var response = _ref2.response;
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: response.data.message,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                  }));
                  isLoading ? dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(false)) : null;
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var addAuthor = function addAuthor(author) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].AUTHOR, author).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["authorActionType"].ADD_AUTHOR,
                    payload: response.data.data
                  });
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('authors.success.create.message')
                  }));
                  dispatch(Object(_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__["toggleModal"])());
                  dispatch(fetchAuthors(filterObj));
                })["catch"](function (_ref4) {
                  var response = _ref4.response;
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: response.data.message,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                  }));
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var editAuthor = function editAuthor(authorId, author) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].AUTHOR + '/' + authorId, author).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["authorActionType"].EDIT_AUTHOR,
                    payload: response.data.data
                  });
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('authors.success.edit.message')
                  }));
                  dispatch(Object(_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__["toggleModal"])());
                })["catch"](function (_ref6) {
                  var response = _ref6.response;
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: response.data.message,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                  }));
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var deleteAuthor = function deleteAuthor(authorId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].AUTHOR + '/' + authorId).then(function () {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["authorActionType"].DELETE_AUTHOR,
                    payload: authorId
                  });
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('authors.success.delete.message')
                  }));
                  dispatch(Object(_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__["toggleModal"])());
                })["catch"](function (_ref8) {
                  var response = _ref8.response;
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: response.data.message,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                  }));
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

/***/ })

}]);