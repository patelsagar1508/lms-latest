(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".book-history-detail__modal {\n  max-width: 700px;\n}\n.book-history-detail__item-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 660px) {\n  .book-history-detail__item-container {\n    width: 100%;\n    flex-flow: column;\n  }\n}\n.book-history-detail__item {\n  display: flex;\n  margin-bottom: 25px;\n  width: 40%;\n}\n@media (max-width: 660px) {\n  .book-history-detail__item {\n    width: 100%;\n  }\n}\n.book-history-detail__item-heading {\n  width: 120px;\n  font-weight: 700;\n}\n.book-history-detail__item-name {\n  display: flex;\n  margin-bottom: 25px;\n  width: 100%;\n}\n.book-history-detail__item-name-heading {\n  min-width: 120px;\n  font-weight: 700;\n}\n.book-history-detail__item-note {\n  display: flex;\n  margin-bottom: 25px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.js":
/*!***********************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BookCirculationDetails_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BookCirculationDetails.scss */ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss");
/* harmony import */ var _BookCirculationDetails_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_BookCirculationDetails_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BookCirculationDetailsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BookCirculationDetailsModal */ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetailsModal.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/book-status/book-status */ "./resources/lms/src/shared/book-status/book-status.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/lms/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var BookCirculationDetail = function BookCirculationDetail(props) {
  var bookHistory = props.bookHistory,
      fetchBookCirculation = props.fetchBookCirculation,
      toggleModal = props.toggleModal,
      history = props.history,
      match = props.match;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isToggle = _useState2[0],
      setIsToggle = _useState2[1];

  var booksFormatOptions = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedOptions"])(_constants__WEBPACK_IMPORTED_MODULE_7__["bookFormatOptions"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchBookCirculation(+match.params.id);
  }, []);

  if (!bookHistory) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }

  var onOpenModal = function onOpenModal() {
    setIsToggle(true);
    toggleModal();
  };

  var goBack = function goBack() {
    history.goBack();
  };

  var renderBookStatus = function renderBookStatus(bookHistory) {
    var statusProps = {
      status: bookHistory.status,
      item: bookHistory
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, statusProps, {
      item: bookHistory
    }));
  };

  var cardModalProps = {
    isToggle: isToggle,
    toggleModal: toggleModal,
    bookHistory: bookHistory
  };
  var book_item = bookHistory.book_item;
  var book = book_item.book;
  var bookItemFormat = booksFormatOptions.find(function (bookFormat) {
    return bookFormat.id === +book_item.format;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Book Circulation Details"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 12,
    className: "mb-2 d-block d-sm-flex justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading w-100"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('book-circulation-details.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-block d-sm-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mr-2",
    color: "primary",
    onClick: function onClick() {
      return onOpenModal();
    }
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.modal.edit.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "float-right",
    onClick: function onClick() {
      return goBack();
    }
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('global.input.back-btn.label')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "no-gutters"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item-name"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-name-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.select.book.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["Routes"].BOOKS + book.id, "/details")
  }, book.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books.items.input.book-code.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, book_item.book_code)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.select.member.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["Routes"].MEMBERS + bookHistory.member_id, "/details")
  }, bookHistory.member.first_name + ' ' + bookHistory.member.last_name))), book_item.language ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books.items.select.language.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, book_item.language.language_name)) : null, book_item.publisher ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books.items.select.publisher.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, book_item.publisher.name)) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books.items.select.format.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, bookItemFormat ? bookItemFormat.name : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books.items.input.edition.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, book_item.edition)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.select.status.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", renderBookStatus(bookHistory))), bookHistory.issuer_name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.table.issuer.column')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["Routes"].USERS + bookHistory.issuer_id, "/details")
  }, bookHistory.issuer_name))) : null, bookHistory.returner_name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.table.returner.column')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["Routes"].USERS + bookHistory.returner_id, "/details")
  }, bookHistory.returner_name))) : null, bookHistory.issued_on ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.table.issue-date.column')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["dateFormatter"])(bookHistory.issued_on))) : null, bookHistory.issue_due_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.table.issue-due-date.column')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["dateFormatter"])(bookHistory.issue_due_date))) : null, bookHistory.return_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.table.return-date.column')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["dateFormatter"])(bookHistory.return_date))) : null, bookHistory.return_due_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.table.return-due-date.column')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["dateFormatter"])(bookHistory.return_due_date))) : null, bookHistory.note ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-history-detail__item-note"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "book-history-detail__item-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getFormattedMessage"])('books-circulation.input.note.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, bookHistory.note)) : null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookCirculationDetailsModal__WEBPACK_IMPORTED_MODULE_6__["default"], cardModalProps)))))));
};

BookCirculationDetail.propTypes = {
  bookHistory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  match: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  fetchBookCirculation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

var mapStateToProps = function mapStateToProps(state, ownProp) {
  var booksCirculation = state.booksCirculation;
  return {
    bookHistory: booksCirculation.find(function (bookCirculation) {
      return bookCirculation.id === +ownProp.match.params.id;
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchBookCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_13__["fetchBookCirculation"],
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_14__["toggleModal"]
})(BookCirculationDetail));

/***/ }),

/***/ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss":
/*!*************************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./BookCirculationDetails.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss");

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

/***/ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetailsModal.js":
/*!****************************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetailsModal.js ***!
  \****************************************************************************************************/
/*! exports provided: BookCirculationDetailsModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCirculationDetailsModal", function() { return BookCirculationDetailsModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _books_circulation_EditBookCirculation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../books-circulation/EditBookCirculation */ "./resources/lms/src/admin/components/books-circulation/EditBookCirculation.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var BookCirculationDetailsModal = function BookCirculationDetailsModal(props) {
  var bookHistory = props.bookHistory,
      isToggle = props.isToggle,
      toggleModal = props.toggleModal;

  if (isToggle) {
    var prepareModalOption = {
      toggleModal: toggleModal,
      className: 'book-history-detail__modal',
      title: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__["getFormattedMessage"])('books-circulation.modal.edit.title')
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_books_circulation_EditBookCirculation__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, prepareModalOption, {
      bookCirculation: bookHistory
    }));
  }

  return null;
};
BookCirculationDetailsModal.propTypes = {
  bookHistory: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (BookCirculationDetailsModal);

/***/ })

}]);