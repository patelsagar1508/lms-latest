(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./resources/lms/src/admin/components/book-requests/BookRequestForm.js":
/*!*****************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-requests/BookRequestForm.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _bookRequestValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookRequestValidate */ "./resources/lms/src/admin/components/book-requests/bookRequestValidate.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/lms/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/lms/src/shared/components/Select.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/lms/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













var BookRequestForm = function BookRequestForm(props) {
  var onSaveBookRequest = props.onSaveBookRequest,
      handleSubmit = props.handleSubmit,
      initialValues = props.initialValues;
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  var bookFormats = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedOptions"])(_admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookFormatOptions"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    inputRef.current.focus();
  }, []);

  var onSave = function onSave(formValues) {
    var status = formValues.status;
    onSaveBookRequest(status.id);
  }; // used for render a book request status options


  var renderBookStatusOption = function renderBookStatusOption() {
    var booKRequestStatus = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedOptions"])(_admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookRequestStatusOptions"]);

    switch (initialValues.status.id) {
      case _admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookRequestStatus"].APPROVED:
        // remove pending af request approved
        return booKRequestStatus.filter(function (bookStatus) {
          return bookStatus.id !== _admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookRequestStatus"].PENDING;
        });

      case _admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookRequestStatus"].AVAILABLE:
        // remove pending and approve option from dropdown af request approved and book available for use
        return booKRequestStatus.filter(function (bookStatus) {
          return bookStatus.id !== _admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookRequestStatus"].PENDING || bookStatus.id !== _admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookRequestStatus"].APPROVED;
        });

      case _admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookRequestStatus"].CANCEL:
        return booKRequestStatus.filter(function (bookStatus) {
          return bookStatus.id === _admin_constants__WEBPACK_IMPORTED_MODULE_5__["bookCirculationStatusConstant"].CANCEL;
        });

      default:
        return booKRequestStatus;
      // return all options
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "animated fadeIn m-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "book_name",
    label: "books.table.book.column",
    required: true,
    inputRef: inputRef,
    groupText: "book",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__["default"],
    readOnly: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "isbn",
    label: "book-request.input.isbn.label",
    required: true,
    groupText: "id-card",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__["default"],
    readOnly: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "edition",
    label: "book-request.input.edition.label",
    required: true,
    groupText: "file-text",
    component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__["default"],
    readOnly: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "format",
    label: "book-request.select.format.label",
    required: true,
    options: bookFormats,
    placeholder: "book-request.select.format.placeholder",
    groupText: "wpforms",
    component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_7__["default"],
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "status",
    label: "books-circulation.select.status.label",
    required: true,
    options: renderBookStatusOption(),
    groupText: "info-circle",
    placeholder: "books-circulation.select.status.placeholder",
    component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_7__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    onSave: handleSubmit(onSave)
  }, props))));
};

BookRequestForm.propTypes = {
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  onSaveBookRequest: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'bookRequestForm',
  validate: _bookRequestValidate__WEBPACK_IMPORTED_MODULE_4__["default"]
})(BookRequestForm));

/***/ }),

/***/ "./resources/lms/src/admin/components/book-requests/BookRequestModal.js":
/*!******************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-requests/BookRequestModal.js ***!
  \******************************************************************************/
/*! exports provided: BookRequestModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRequestModal", function() { return BookRequestModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateBookRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateBookRequest */ "./resources/lms/src/admin/components/book-requests/CreateBookRequest.js");
/* harmony import */ var _EditBookRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditBookRequest */ "./resources/lms/src/admin/components/book-requests/EditBookRequest.js");
/* harmony import */ var _DeleteBookRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteBookRequest */ "./resources/lms/src/admin/components/book-requests/DeleteBookRequest.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/lms/src/shared/modal-config/ModalConfig.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");







var BookRequestModal = function BookRequestModal(props) {
  var bookRequest = props.bookRequest,
      isCreate = props.isCreate,
      isEdit = props.isEdit,
      isDelete = props.isDelete;
  var editConfig = {
    bookRequest: bookRequest
  };
  var delConfig = {
    bookRequestId: bookRequest ? bookRequest.id : null
  };
  var modalOptions = {
    modalTitle: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__["getModalTitle"])(isCreate, isEdit, isDelete, 'book-request.input.new-btn.label', 'book-request.modal.edit.title', 'book-request.modal.delete.title'),
    NewComponent: _CreateBookRequest__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditComponent: _EditBookRequest__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteComponent: _DeleteBookRequest__WEBPACK_IMPORTED_MODULE_4__["default"],
    deleteKey: bookRequest ? bookRequest.book_name : null,
    editConfig: editConfig,
    delConfig: delConfig,
    props: props
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__["default"], modalOptions);
};
BookRequestModal.propTypes = {
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isCreate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (BookRequestModal);

/***/ }),

/***/ "./resources/lms/src/admin/components/book-requests/BookRequests.js":
/*!**************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-requests/BookRequests.js ***!
  \**************************************************************************/
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
/* harmony import */ var _BookRequestModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookRequestModal */ "./resources/lms/src/admin/components/book-requests/BookRequestModal.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/lms/src/shared/table/ReactDataTable.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/lms/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../admin/constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _shared_book_request_status_BookRequestStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/book-request-status/BookRequestStatus */ "./resources/lms/src/shared/book-request-status/BookRequestStatus.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/lms/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/lms/src/admin/store/actions/bookRequestAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var BookRequests = function BookRequests(props) {
  var bookRequests = props.bookRequests,
      toggleModal = props.toggleModal,
      totalRecord = props.totalRecord,
      isLoading = props.isLoading,
      fetchBookRequests = props.fetchBookRequests;

  var _openModal = Object(_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_12__["openModal"])(),
      _openModal2 = _slicedToArray(_openModal, 5),
      isCreate = _openModal2[0],
      isEdit = _openModal2[1],
      isDelete = _openModal2[2],
      bookRequest = _openModal2[3],
      onOpenModal = _openModal2[4];

  var cardModalProps = {
    bookRequest: bookRequest,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal
  };
  var bookFormats = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedOptions"])(_admin_constants__WEBPACK_IMPORTED_MODULE_9__["bookFormatOptions"]);

  var onChange = function onChange(filter) {
    fetchBookRequests(filter, true);
  };

  var onClickModal = function onClickModal(isEdit) {
    var bookRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, bookRequest, isDelete);
    toggleModal();
  };

  var columns = [{
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('book-request.input.isbn.label'),
    selector: 'isbn',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.isbn);
    },
    minWidth: '200px'
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('books.table.book.column'),
    selector: 'book_name',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.book_name);
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('book-request.input.edition.label'),
    selector: 'edition',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.edition);
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('book-request.select.format.label'),
    selector: 'format',
    sortable: true,
    cell: function cell(row) {
      var format = bookFormats.find(function (format) {
        return format.id === row.format;
      });

      if (format) {
        return format.name;
      }
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('book-request.count.label'),
    selector: 'request_count',
    sortable: true,
    center: true,
    cell: function cell(row) {
      return row.request_count;
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('react-data-table.status.column'),
    selector: 'status',
    sortable: true,
    center: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_book_request_status_BookRequestStatus__WEBPACK_IMPORTED_MODULE_10__["default"], {
        status: row.status
      });
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('react-data-table.action.column'),
    selector: 'id',
    right: true,
    cell: function cell(row) {
      return renderBookRequestAction(row);
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];

  var renderBookRequestAction = function renderBookRequestAction(row) {
    switch (row.status) {
      case _admin_constants__WEBPACK_IMPORTED_MODULE_9__["bookRequestStatus"].APPROVED:
      case _admin_constants__WEBPACK_IMPORTED_MODULE_9__["bookRequestStatus"].PENDING:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onOpenModal: onClickModal,
          item: row,
          isHideDeleteIcon: true
        });

      case _admin_constants__WEBPACK_IMPORTED_MODULE_9__["bookRequestStatus"].AVAILABLE:
      case _admin_constants__WEBPACK_IMPORTED_MODULE_9__["bookRequestStatus"].CANCEL:
      default:
        return '';
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Books Request"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('book-request.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: bookRequests,
    columns: columns,
    loading: isLoading,
    emptyStateMessageId: "book-request.empty-state.title",
    emptyNotFoundStateMessageId: "book-request.not-found.empty-state.title",
    totalRows: totalRecord,
    onChange: onChange,
    icon: _constants__WEBPACK_IMPORTED_MODULE_15__["icon"].BOOK_REQUEST
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookRequestModal__WEBPACK_IMPORTED_MODULE_4__["default"], cardModalProps))))));
};

BookRequests.propTypes = {
  adminBookRequests: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  totalRecord: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fetchBookRequests: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  var adminBookRequests = state.adminBookRequests,
      isLoading = state.isLoading,
      totalRecord = state.totalRecord;
  return {
    bookRequests: adminBookRequests,
    isLoading: isLoading,
    totalRecord: totalRecord
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  fetchBookRequests: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_14__["fetchBookRequests"],
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_13__["toggleModal"]
})(BookRequests));

/***/ }),

/***/ "./resources/lms/src/admin/components/book-requests/CreateBookRequest.js":
/*!*******************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-requests/CreateBookRequest.js ***!
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
/* harmony import */ var _BookRequestForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookRequestForm */ "./resources/lms/src/admin/components/book-requests/BookRequestForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/lms/src/admin/store/actions/bookRequestAction.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var CreateBookRequest = function CreateBookRequest(props) {
  var addBookRequest = props.addBookRequest,
      toggleModal = props.toggleModal;

  var onSaveBookRequest = function onSaveBookRequest(formValues) {
    addBookRequest(formValues);
  };

  var prepareFormOption = {
    onSaveBookRequest: onSaveBookRequest,
    onCancel: toggleModal
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookRequestForm__WEBPACK_IMPORTED_MODULE_3__["default"], prepareFormOption)
  }));
};

CreateBookRequest.propTypes = {
  addBookRequest: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  addBookRequest: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_5__["addBookRequest"]
})(CreateBookRequest));

/***/ }),

/***/ "./resources/lms/src/admin/components/book-requests/DeleteBookRequest.js":
/*!*******************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-requests/DeleteBookRequest.js ***!
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
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/lms/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/lms/src/admin/store/actions/bookRequestAction.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var DeleteBookRequest = function DeleteBookRequest(props) {
  var bookRequestId = props.bookRequestId,
      deleteBookRequest = props.deleteBookRequest,
      toggleModal = props.toggleModal;

  var onDeleteBookRequest = function onDeleteBookRequest() {
    deleteBookRequest(bookRequestId);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onDelete: onDeleteBookRequest,
      onCancel: toggleModal
    })
  }));
};

DeleteBookRequest.propTypes = {
  bookRequestId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  deleteBookRequest: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  deleteBookRequest: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_5__["deleteBookRequest"]
})(DeleteBookRequest));

/***/ }),

/***/ "./resources/lms/src/admin/components/book-requests/EditBookRequest.js":
/*!*****************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-requests/EditBookRequest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookRequestForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookRequestForm */ "./resources/lms/src/admin/components/book-requests/BookRequestForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/lms/src/admin/store/actions/bookRequestAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/constants */ "./resources/lms/src/admin/constants/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var EditBookRequest = function EditBookRequest(props) {
  var bookRequest = props.bookRequest,
      editBookRequest = props.editBookRequest,
      toggleModal = props.toggleModal;
  var bookFormats = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__["getFormattedOptions"])(_admin_constants__WEBPACK_IMPORTED_MODULE_7__["bookFormatOptions"]);
  var booRequestStatus = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__["getFormattedOptions"])(_admin_constants__WEBPACK_IMPORTED_MODULE_7__["bookRequestStatusOptions"]);

  var onSaveBookRequest = function onSaveBookRequest(status) {
    editBookRequest(bookRequest, status);
  };

  var prepareFormOption = {
    onSaveBookRequest: onSaveBookRequest,
    onCancel: toggleModal,
    initialValues: {
      book_name: bookRequest.book_name,
      isbn: bookRequest.isbn,
      edition: bookRequest.edition,
      format: bookFormats.find(function (format) {
        return format.id === +bookRequest.format;
      }),
      status: booRequestStatus.find(function (status) {
        return status.id === +bookRequest.status;
      })
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookRequestForm__WEBPACK_IMPORTED_MODULE_3__["default"], prepareFormOption)
  }));
};

EditBookRequest.propTypes = {
  bookRequest: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  editBookRequest: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  editBookRequest: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_5__["editBookRequest"]
})(EditBookRequest));

/***/ }),

/***/ "./resources/lms/src/admin/components/book-requests/bookRequestValidate.js":
/*!*********************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-requests/bookRequestValidate.js ***!
  \*********************************************************************************/
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

/***/ "./resources/lms/src/admin/store/actions/bookRequestAction.js":
/*!********************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/bookRequestAction.js ***!
  \********************************************************************/
/*! exports provided: fetchBookRequests, addBookRequest, editBookRequest, deleteBookRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBookRequests", function() { return fetchBookRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBookRequest", function() { return addBookRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editBookRequest", function() { return editBookRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBookRequest", function() { return deleteBookRequest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/lms/src/shared/requestParam.js");
/* harmony import */ var _admin_store_actions_totalRecordAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/store/actions/totalRecordAction */ "./resources/lms/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var fetchBookRequests = function fetchBookRequests() {
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
                url = _constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].BOOK_REQUEST;

                if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                  url += Object(_shared_requestParam__WEBPACK_IMPORTED_MODULE_6__["default"])(filter);
                }

                _context.next = 5;
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["bookRequestActionType"].FETCH_ADMIN_BOOKS_REQUEST,
                    payload: response.data.data
                  }); // dispatch(setTotalRecord(response.data.totalRecords));

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
var addBookRequest = function addBookRequest(bookRequest) {
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
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].BOOK_REQUEST, bookRequest).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["bookRequestActionType"].ADD_ADMIN_BOOK_REQUEST,
                    payload: response.data.data
                  });
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('book-request.success.create.message')
                  }));
                  dispatch(Object(_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__["toggleModal"])());
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
var editBookRequest = function editBookRequest(bookRequest, status) {
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
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].BOOK_REQUEST + '/' + bookRequest.id + '/status/' + status, {}).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["bookRequestActionType"].EDIT_ADMIN_BOOK_REQUEST,
                    payload: response.data.data
                  });
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('book-request.success.edit.message')
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
var deleteBookRequest = function deleteBookRequest(bookRequestId) {
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
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_10__["apiBaseURL"].BOOK_REQUEST + '/' + bookRequestId).then(function () {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["bookRequestActionType"].DELETE_ADMIN_BOOK_REQUEST,
                    payload: bookRequestId
                  });
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('book-request.success.delete.message')
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

/***/ }),

/***/ "./resources/lms/src/shared/book-request-status/BookRequestStatus.js":
/*!***************************************************************************!*\
  !*** ./resources/lms/src/shared/book-request-status/BookRequestStatus.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/index */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");





var BookRequestStatus = function BookRequestStatus(props) {
  var status = props.status;

  switch (status) {
    case _constants_index__WEBPACK_IMPORTED_MODULE_2__["bookRequestConstants"].PENDING:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-warning"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-request.filter.pending.label')));

    case _constants_index__WEBPACK_IMPORTED_MODULE_2__["bookRequestConstants"].APPROVED:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-success"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-request.filter.approved.label')));

    case _constants_index__WEBPACK_IMPORTED_MODULE_2__["bookRequestConstants"].AVAILABLE:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-request.filter.available.label')));

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-request.filter.cancel.label')));
  }
};

BookRequestStatus.propTypes = {
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (BookRequestStatus);

/***/ })

}]);