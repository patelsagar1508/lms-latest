(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/member/components/book-history/BookHistory.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/lms/src/member/components/book-history/BookHistory.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".book-name {\n  max-width: 650px;\n}\n.book-action {\n  width: 90px;\n}\n.book-return-date {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/lms/src/member/components/book-history/BookHistory.js":
/*!*************************************************************************!*\
  !*** ./resources/lms/src/member/components/book-history/BookHistory.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BookHistoryTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookHistoryTable */ "./resources/lms/src/member/components/book-history/BookHistoryTable.js");
/* harmony import */ var _UnReserveBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UnReserveBook */ "./resources/lms/src/member/components/book-history/UnReserveBook.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_bookHistoryAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/bookHistoryAction */ "./resources/lms/src/member/store/actions/bookHistoryAction.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var BookHistory = function BookHistory(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      history = _useState2[0],
      setHistory = _useState2[1];

  var bookHistory = props.bookHistory,
      fetchBooksHistory = props.fetchBooksHistory,
      isLoading = props.isLoading,
      toggleModal = props.toggleModal,
      totalRecordMember = props.totalRecordMember;
  var cardModalProps = {
    bookHistory: history,
    toggleModal: toggleModal
  };

  var onChangeFilter = function onChangeFilter(filter) {
    fetchBooksHistory(filter);
  };

  var onOpenModal = function onOpenModal() {
    var bookItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    setHistory(bookItem);
    toggleModal();
  };

  var cardBodyProps = {
    bookHistory: bookHistory,
    onOpenModal: onOpenModal,
    onChangeFilter: onChangeFilter,
    totalRecordMember: totalRecordMember,
    isLoading: isLoading
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Book History"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__["getFormattedMessage"])('book-history.title'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookHistoryTable__WEBPACK_IMPORTED_MODULE_4__["default"], cardBodyProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UnReserveBook__WEBPACK_IMPORTED_MODULE_5__["default"], cardModalProps))))));
};

BookHistory.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  bookHistory: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  totalRecordMember: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fetchBooksHistory: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  var bookHistory = state.bookHistory,
      isLoading = state.isLoading,
      totalRecordMember = state.totalRecordMember;
  return {
    bookHistory: bookHistory,
    isLoading: isLoading,
    totalRecordMember: totalRecordMember
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchBooksHistory: _store_actions_bookHistoryAction__WEBPACK_IMPORTED_MODULE_10__["fetchBooksHistory"],
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_9__["toggleModal"]
})(BookHistory));

/***/ }),

/***/ "./resources/lms/src/member/components/book-history/BookHistory.scss":
/*!***************************************************************************!*\
  !*** ./resources/lms/src/member/components/book-history/BookHistory.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./BookHistory.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/member/components/book-history/BookHistory.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/lms/src/member/components/book-history/BookHistoryTable.js":
/*!******************************************************************************!*\
  !*** ./resources/lms/src/member/components/book-history/BookHistoryTable.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookHistory_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookHistory.scss */ "./resources/lms/src/member/components/book-history/BookHistory.scss");
/* harmony import */ var _BookHistory_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BookHistory_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/book-status/book-status */ "./resources/lms/src/shared/book-status/book-status.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/lms/src/shared/table/ReactDataTable.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var BookHistoryTable = function BookHistoryTable(props) {
  var bookHistory = props.bookHistory,
      onOpenModal = props.onOpenModal,
      onChangeFilter = props.onChangeFilter,
      totalRecordMember = props.totalRecordMember,
      isLoading = props.isLoading;
  var columns = [{
    sortable: true,
    wrap: true,
    selector: 'name',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('books.select.book.label'),
    cell: function cell(row) {
      return row.book_item.book.name;
    }
  }, {
    sortable: true,
    selector: 'book_code',
    width: '150px',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.table.book-code.column'),
    cell: function cell(row) {
      return row.book_item.book_code;
    }
  }, {
    sortable: true,
    selector: 'issued_on',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.table.issue-date.column'),
    width: '160px',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.issued_on ? renderDate(row.issued_on) : 'N/A');
    }
  }, {
    sortable: true,
    selector: 'issue_due_date ',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.table.issue-due-date.column'),
    width: '180px',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.issue_due_date ? renderDate(row.issue_due_date) : 'N/A');
    }
  }, {
    sortable: true,
    selector: 'reserved_on',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.table.reserve-date.column'),
    width: '180px',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.reserve_date ? renderDate(row.reserve_date) : 'N/A');
    }
  }, {
    sortable: true,
    selector: 'return_due_date',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.table.return-due-date.column'),
    width: '180px',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.return_due_date ? renderDate(row.return_due_date) : 'N/A');
    }
  }, {
    sortable: true,
    selector: 'return_date',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.table.return-date.column'),
    width: '150px',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.return_date ? renderDate(row.return_date) : 'N/A');
    }
  }, {
    sortable: true,
    selector: 'status',
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('react-data-table.status.column'),
    width: '100px',
    cell: function cell(row) {
      return renderBookStatus(row);
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('react-data-table.action.column'),
    selector: 'id',
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    center: true,
    width: '90px',
    cell: function cell(row) {
      return renderAction(row);
    }
  }];

  var renderBookStatus = function renderBookStatus(bookHistory) {
    var statusProps = {
      status: bookHistory.status,
      item: bookHistory
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, statusProps, {
      item: bookHistory
    }));
  };

  var renderAction = function renderAction(bookHistory) {
    if (bookHistory.status === _constants__WEBPACK_IMPORTED_MODULE_4__["bookCirculationStatusConstant"].BOOK_RESERVED) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        color: "danger",
        onClick: function onClick(e) {
          e.stopPropagation();
          onOpenModal(bookHistory);
        }
      }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.input.unreserve-btn.label'));
    }

    return '';
  };

  var renderDate = function renderDate(date) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, date ? Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["dateFormatter"])(date) : '');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    items: bookHistory,
    columns: columns,
    emptyStateMessageId: "books-history.empty-state.title",
    emptyNotFoundStateMessageId: "books-history.not-found.empty-state.title",
    loading: isLoading,
    totalRows: totalRecordMember,
    onChange: onChangeFilter,
    icon: _constants__WEBPACK_IMPORTED_MODULE_8__["icon"].BOOK_CIRCULATION
  });
};

BookHistoryTable.propTypes = {
  bookHistory: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  totalRecordMember: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onOpenModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onChangeFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (BookHistoryTable);

/***/ }),

/***/ "./resources/lms/src/member/components/book-history/UnReserveBook.js":
/*!***************************************************************************!*\
  !*** ./resources/lms/src/member/components/book-history/UnReserveBook.js ***!
  \***************************************************************************/
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
/* harmony import */ var _shared_action_buttons_ConfirmAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/ConfirmAction */ "./resources/lms/src/shared/action-buttons/ConfirmAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_bookHistoryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/bookHistoryAction */ "./resources/lms/src/member/store/actions/bookHistoryAction.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var UnReserveBook = function UnReserveBook(props) {
  var bookHistory = props.bookHistory,
      unReserveBook = props.unReserveBook,
      toggleModal = props.toggleModal;
  var name = bookHistory ? bookHistory.book_item.book.name : '';
  var code = bookHistory ? bookHistory.book_item.book_code : '';
  var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.modal.message'), " \"", "".concat(name, " (").concat(code, ")"), "\"");
  var title = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getFormattedMessage"])('book-history.modal.title');

  var onUnReserveBook = function onUnReserveBook() {
    unReserveBook(bookHistory.book_item.id);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_ConfirmAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onConfirm: onUnReserveBook,
      onCancel: toggleModal
    }),
    content: content,
    title: title
  }));
};

UnReserveBook.propTypes = {
  bookHistory: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  unReserveBook: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  unReserveBook: _store_actions_bookHistoryAction__WEBPACK_IMPORTED_MODULE_6__["unReserveBook"]
})(UnReserveBook));

/***/ }),

/***/ "./resources/lms/src/member/store/actions/bookHistoryAction.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/bookHistoryAction.js ***!
  \*********************************************************************/
/*! exports provided: fetchBooksHistory, unReserveBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBooksHistory", function() { return fetchBooksHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unReserveBook", function() { return unReserveBook; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/member/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _admin_store_actions_totalRecordAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../admin/store/actions/totalRecordAction */ "./resources/lms/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/lms/src/shared/requestParam.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var fetchBooksHistory = function fetchBooksHistory(filter) {
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
                dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__["setLoading"])(true));
                url = _constants__WEBPACK_IMPORTED_MODULE_8__["apiBaseURL"].BOOK_HISTORY;

                if (filter.limit || filter.order_By || filter.search) {
                  url += Object(_shared_requestParam__WEBPACK_IMPORTED_MODULE_7__["default"])(filter);
                }

                _context.next = 5;
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["bookHistoryActionType"].FETCH_MEMBER_BOOK_HISTORY,
                    payload: response.data.data
                  });
                  dispatch(Object(_admin_store_actions_totalRecordAction__WEBPACK_IMPORTED_MODULE_6__["setTotalRecord"])(response.data.totalRecords));
                  dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__["setLoading"])(false));
                })["catch"](function (_ref2) {
                  var response = _ref2.response;
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__["addToast"])({
                    text: response.data.message,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                  }));
                  dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__["setLoading"])(false));
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
var unReserveBook = function unReserveBook(bookItemId) {
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
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_8__["apiBaseURL"].BOOK + '/' + bookItemId + '/un-reserve-book', {}).then(function (response) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["bookHistoryActionType"].BOOK_UN_RESERVED,
                    payload: response.data.data
                  });
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__["addToast"])({
                    text: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('books.success.unreserve.message')
                  }));
                  dispatch(Object(_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__["toggleModal"])());
                })["catch"](function (_ref4) {
                  var response = _ref4.response;
                  dispatch(Object(_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__["toggleModal"])());
                  Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__["addToast"])({
                    text: response.data.message,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                  });
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

/***/ }),

/***/ "./resources/lms/src/shared/action-buttons/ConfirmAction.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/shared/action-buttons/ConfirmAction.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");





var ConfirmAction = function ConfirmAction(props) {
  var onConfirm = props.onConfirm,
      onCancel = props.onCancel;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "success",
    onClick: onConfirm
  }, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('global.input.yes-btn.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: onCancel
  }, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('global.input.no-btn.label')));
};

ConfirmAction.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmAction);

/***/ }),

/***/ "./resources/lms/src/shared/book-status/book-status.js":
/*!*************************************************************!*\
  !*** ./resources/lms/src/shared/book-status/book-status.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");





var BookStatus = function BookStatus(props) {
  var status = props.status,
      item = props.item;

  switch (status) {
    case _admin_constants__WEBPACK_IMPORTED_MODULE_2__["bookCirculationStatusConstant"].BOOK_ISSUED:
      item.status_name = Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.issued.label');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-success"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.issued.label')));

    case _admin_constants__WEBPACK_IMPORTED_MODULE_2__["bookCirculationStatusConstant"].BOOK_AVAILABLE:
      item.status_name = Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.available.label');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-success"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.available.label')));

    case _admin_constants__WEBPACK_IMPORTED_MODULE_2__["bookCirculationStatusConstant"].BOOK_RETURNED:
      item.status_name = Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.returned.label');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-dark"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.returned.label')));

    case _admin_constants__WEBPACK_IMPORTED_MODULE_2__["bookCirculationStatusConstant"].BOOK_LOST:
      item.status_name = Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.lost.label');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.lost.label')));

    case _admin_constants__WEBPACK_IMPORTED_MODULE_2__["bookCirculationStatusConstant"].BOOK_DAMAGED:
      item.status_name = Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.damaged.label');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-warning"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.damaged.label')));

    case _admin_constants__WEBPACK_IMPORTED_MODULE_2__["bookCirculationStatusConstant"].BOOK_UN_RESERVED:
      item.status_name = Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.unreserved.label');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.unreserved.label')));

    default:
      item.status_name = Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.reserved.label');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-primary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('book-history.filter.reserved.label')));
  }
};

BookStatus.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (BookStatus);

/***/ })

}]);