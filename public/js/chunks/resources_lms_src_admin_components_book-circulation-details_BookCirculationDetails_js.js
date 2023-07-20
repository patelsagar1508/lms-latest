"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_lms_src_admin_components_book-circulation-details_BookCirculationDetails_js"],{

/***/ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.js":
/*!***********************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _BookCirculationDetails_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCirculationDetails.scss */ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss");
/* harmony import */ var _BookCirculationDetailsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookCirculationDetailsModal */ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetailsModal.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/book-status/book-status */ "./resources/lms/src/shared/book-status/book-status.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/lms/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var BookCirculationDetail = function BookCirculationDetail(props) {
  var bookHistory = props.bookHistory,
    fetchBookCirculation = props.fetchBookCirculation,
    toggleModal = props.toggleModal,
    history = props.history,
    match = props.match;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isToggle = _useState2[0],
    setIsToggle = _useState2[1];
  var booksFormatOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_4__.bookFormatOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchBookCirculation(+match.params.id);
  }, []);
  if (!bookHistory) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {});
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, statusProps), {}, {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Book Circulation Details"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sm: 12,
        className: "mb-2 d-block d-sm-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h5", {
          className: "page-heading w-100",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('book-circulation-details.title')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "d-block d-sm-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "mr-2",
            color: "primary text-white",
            onClick: function onClick() {
              return onOpenModal();
            },
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.modal.edit.title')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "float-right",
            onClick: function onClick() {
              return goBack();
            },
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('global.input.back-btn.label')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "sticky-table-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
                className: "no-gutters",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: "book-history-detail",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                    className: "book-history-detail__item-container",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item-name",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-name-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.select.book.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
                          to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.Routes.BOOKS + book.id, "/details"),
                          children: book.name
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                    className: "book-history-detail__item-container",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books.items.input.book-code.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: book_item.book_code
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.select.member.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
                          to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.Routes.MEMBERS + bookHistory.member_id, "/details"),
                          children: bookHistory.member.first_name + ' ' + bookHistory.member.last_name
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books.items.select.language.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: book_item.language ? book_item.language.language_name : 'N/A'
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books.items.select.publisher.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: book_item.publisher ? book_item.publisher.name : 'N/A'
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books.items.select.format.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: bookItemFormat ? bookItemFormat.name : null
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books.items.input.edition.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: book_item.edition
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.select.status.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
                        children: [" ", renderBookStatus(bookHistory)]
                      })]
                    }), bookHistory.issuer_name ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.issuer.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
                          to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.Routes.USERS + bookHistory.issuer_id, "/details"),
                          children: bookHistory.issuer_name
                        })
                      })]
                    }) : null, bookHistory.returner_name ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.returner.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
                          to: "".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.Routes.USERS + bookHistory.returner_id, "/details"),
                          children: bookHistory.returner_name
                        })
                      })]
                    }) : null, bookHistory.issued_on ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.issue-date.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.dateFormatter)(bookHistory.issued_on)
                      })]
                    }) : null, bookHistory.issue_due_date ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.issue-due-date.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.dateFormatter)(bookHistory.issue_due_date)
                      })]
                    }) : null, bookHistory.return_date ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.return-date.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.dateFormatter)(bookHistory.return_date)
                      })]
                    }) : null, bookHistory.return_due_date ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.return-due-date.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.dateFormatter)(bookHistory.return_due_date)
                      })]
                    }) : null, bookHistory.note ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-history-detail__item-note",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-history-detail__item-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.input.note.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: bookHistory.note
                      })]
                    }) : null]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_BookCirculationDetailsModal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, cardModalProps))]
            })
          })
        })
      })]
    })]
  });
};
BookCirculationDetail.propTypes = {
  bookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),
  match: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),
  fetchBookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func)
};
var mapStateToProps = function mapStateToProps(state, ownProp) {
  var booksCirculation = state.booksCirculation;
  return {
    bookHistory: booksCirculation.find(function (bookCirculation) {
      return bookCirculation.id === +ownProp.match.params.id;
    })
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchBookCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_10__.fetchBookCirculation,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__.toggleModal
})(BookCirculationDetail));

/***/ }),

/***/ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetailsModal.js":
/*!****************************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetailsModal.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookCirculationDetailsModal": () => (/* binding */ BookCirculationDetailsModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _books_circulation_EditBookCirculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books-circulation/EditBookCirculation */ "./resources/lms/src/admin/components/books-circulation/EditBookCirculation.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BookCirculationDetailsModal = function BookCirculationDetailsModal(props) {
  var bookHistory = props.bookHistory,
    isToggle = props.isToggle,
    toggleModal = props.toggleModal;
  if (isToggle) {
    var prepareModalOption = {
      toggleModal: toggleModal,
      className: 'book-history-detail__modal',
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-circulation.modal.edit.title')
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_books_circulation_EditBookCirculation__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, prepareModalOption), {}, {
      bookCirculation: bookHistory
    }));
  }
  return null;
};
BookCirculationDetailsModal.propTypes = {
  bookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  isToggle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookCirculationDetailsModal);

/***/ }),

/***/ "./resources/lms/src/admin/components/books-circulation/BookCirculationForm.js":
/*!*************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/books-circulation/BookCirculationForm.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/formValueSelector.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bookCirculationValidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookCirculationValidate */ "./resources/lms/src/admin/components/books-circulation/bookCirculationValidate.js");
/* harmony import */ var _BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BooksCirculation.scss */ "./resources/lms/src/admin/components/books-circulation/BooksCirculation.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/lms/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/lms/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/TextArea */ "./resources/lms/src/shared/components/TextArea.js");
/* harmony import */ var _shared_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/DatePicker */ "./resources/lms/src/shared/components/DatePicker.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/lms/src/shared/components/Select.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/bookAction */ "./resources/lms/src/admin/store/actions/bookAction.js");
/* harmony import */ var _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/memberAction */ "./resources/lms/src/admin/store/actions/memberAction.js");
/* harmony import */ var _store_actions_availableBooksAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/availableBooksAction */ "./resources/lms/src/admin/store/actions/availableBooksAction.js");
/* harmony import */ var _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/actions/availableBookLimitAction */ "./resources/lms/src/admin/store/actions/availableBookLimitAction.js");
/* harmony import */ var _PenaltyWarningModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PenaltyWarningModal */ "./resources/lms/src/admin/components/books-circulation/PenaltyWarningModal.js");
/* harmony import */ var _store_actions_toggleDueBookModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions/toggleDueBookModal */ "./resources/lms/src/admin/store/actions/toggleDueBookModal.js");
/* harmony import */ var _shared_components_CheckBox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/CheckBox */ "./resources/lms/src/shared/components/CheckBox.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


























var bookId = null;
var memberId = null;
var BookCirculationForm = function BookCirculationForm(props) {
  var initialValues = props.initialValues,
    books = props.books,
    members = props.members,
    change = props.change,
    bookItems = props.bookItems,
    fetchBooks = props.fetchBooks,
    fetchMembers = props.fetchMembers,
    fetchAvailableBooks = props.fetchAvailableBooks,
    onSaveBookCirculation = props.onSaveBookCirculation,
    handleSubmit = props.handleSubmit,
    fetchAvailableBookLimit = props.fetchAvailableBookLimit,
    clearAvailableBookLimit = props.clearAvailableBookLimit,
    toggleDueBookModal = props.toggleDueBookModal,
    hasPenaltyCollected = props.hasPenaltyCollected,
    penaltyPreDays = props.penaltyPreDays,
    selectedCurrency = props.selectedCurrency;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isDisabledItem = _useState2[0],
    setDisabledItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedDate = _useState6[0],
    setSelectedDate = _useState6[1];
  var bookItemRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var isDisabledStatus = initialValues && initialValues.status && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED;
  var bookCirculationStatusOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.bookStatusOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    prepareInitialValues();
    fetchBooks();
    fetchMembers();
    prepareInitialValues();
    clearAvailableBookLimit();
  }, []);
  var prepareInitialValues = function prepareInitialValues() {
    bookId = null;
    memberId = null;
    if (initialValues) {
      setStatus(initialValues.status.id);
      memberId = initialValues.member.id;
      if (initialValues.reserve_date && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED) {
        setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.reserve_date).toDate());
        props.change('reserve_date', initialValues.reserve_date);
      } else if (initialValues.issued_on && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED) {
        setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.issued_on).toDate());
        props.change('issued_on', initialValues.issued_on);
      } else if (initialValues.return_date && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
        setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.return_date).toDate());
        props.change('return_date', initialValues.return_date);
      }
    } else {
      bookItemRef.current.select.focus();
    }
  };
  var prepareFormValues = function prepareFormValues(formValues) {
    var book = formValues.book,
      book_item = formValues.book_item,
      member = formValues.member,
      note = formValues.note,
      collected_penalty = formValues.collected_penalty,
      penalty_collected = formValues.penalty_collected;
    var formData = {
      book_id: book.id,
      book_item_id: book_item.id,
      member_id: member.id,
      note: note,
      status: formValues.status.id,
      collected_penalty: collected_penalty,
      penalty_collected: penalty_collected
    };
    switch (status) {
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED:
        formData.reserve_date = selectedDate ? moment__WEBPACK_IMPORTED_MODULE_2___default()(selectedDate).format(_constants__WEBPACK_IMPORTED_MODULE_6__.dateFormat.DEFAULT_MOMENT) : '';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED:
        formData.issued_on = selectedDate ? moment__WEBPACK_IMPORTED_MODULE_2___default()(selectedDate).format(_constants__WEBPACK_IMPORTED_MODULE_6__.dateFormat.DEFAULT_MOMENT) : '';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED:
        formData.return_date = selectedDate ? moment__WEBPACK_IMPORTED_MODULE_2___default()(selectedDate).format(_constants__WEBPACK_IMPORTED_MODULE_6__.dateFormat.DEFAULT_MOMENT) : '';
        break;
      default:
        break;
    }
    return formData;
  };
  var onSave = function onSave(formValues) {
    onSaveBookCirculation(prepareFormValues(formValues));
  };
  var getBooks = function getBooks() {
    if (bookId && memberId) {
      setDisabledItem(false);
      fetchAvailableBooks(bookId, memberId);
    } else {
      setDisabledItem(true);
      change('book_item', null);
    }
  };
  var checkBookLimits = function checkBookLimits(status) {
    if (memberId && status) {
      if (status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED || status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED) {
        fetchAvailableBookLimit(memberId, status);
      } else {
        clearAvailableBookLimit();
      }
    }
  };
  var onSelectBook = function onSelectBook(option) {
    props.change('book_item', null);
    bookId = option ? option.id : null;
    getBooks();
    checkBookLimits(status);
  };
  var onSelectMember = function onSelectMember(option) {
    props.change('book_item', null);
    memberId = option ? option.id : null;
    getBooks();
    checkBookLimits(status);
  };
  var getDaysFromDueDate = function getDaysFromDueDate(returnDueDate) {
    return moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(returnDueDate, 'YYYY-MM-DD hh:mm:ss'), 'days');
  };
  var onSelectBookStatus = function onSelectBookStatus(option) {
    if (option) {
      setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate());
      setStatus(option.id);
      checkBookLimits(option.id);
      if (option.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
        var days = getDaysFromDueDate(initialValues.return_due_date);
        if (days > 0) {
          props.change('penalty_collected', true);
          props.change('collected_penalty', days * penaltyPreDays);
          toggleDueBookModal();
        }
      }
    } else {
      setStatus(null);
    }
  };
  var onSelectDate = function onSelectDate(date) {
    setSelectedDate(date);
    if (status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
      var returnDue = moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.return_due_date, 'YYYY-MM-DD hh:mm:ss');
      var days = moment__WEBPACK_IMPORTED_MODULE_2___default()(date, 'dddd MM, YYYY hh:mm:s').diff(returnDue, 'days');
      if (days > 0) {
        props.change('collected_penalty', days * penaltyPreDays);
      } else {
        props.change('collected_penalty', 0);
      }
    }
  };
  var renderDatePicker = function renderDatePicker(status) {
    if (!status) {
      return null;
    }
    var field = '';
    var label = '';
    var maxDate = '';
    var minDate = '';
    switch (status) {
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED:
        minDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate();
        label = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.table.reserve-date.column');
        field = 'reserve_date';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED:
        maxDate = initialValues && initialValues.reserve_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.reserve_date), 'days') - 1, 'days').toDate() : moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate();
        minDate = initialValues && initialValues.reserve_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate() : '';
        label = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.table.issue-date.column');
        field = 'issued_on';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED:
        minDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.issued_on), 'days'), 'days').toDate();
        maxDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate();
        label = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.table.return-date.column');
        field = 'return_date';
        break;
      default:
        return null;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_shared_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: label,
        selected: selectedDate,
        disabled: isDisabledStatus,
        maxDate: maxDate,
        minDate: minDate,
        onChange: onSelectDate,
        placeHolder: "Click to select a date"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
        name: field,
        type: "hidden",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
      })]
    });
  };
  var renderLateFeeInputs = function renderLateFeeInputs(status) {
    if (!status || status !== _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
      return null;
    }
    var days = getDaysFromDueDate(initialValues.return_due_date);
    if (days <= 0) {
      return null;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
        xs: 12,
        sm: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
          name: "penalty_collected",
          label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.checkbox.pay-amount.label'),
          component: _shared_components_CheckBox__WEBPACK_IMPORTED_MODULE_19__["default"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
        xs: 12,
        sm: 6,
        children: hasPenaltyCollected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
          name: "collected_penalty",
          type: "number",
          isDefaultCurrency: true,
          label: "books-circulation.input.amount.label",
          min: "0",
          groupText: selectedCurrency,
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
        }) : ''
      })]
    });
  };
  var renderBookStatusOption = function renderBookStatusOption() {
    if (initialValues) {
      switch (initialValues.status.id) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_UN_RESERVED;
          });
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_UN_RESERVED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED;
          });
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED;
          });
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST:
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED;
          });
        default:
          return [];
      }
    } else {
      return bookCirculationStatusOptions.filter(function (bookStatus) {
        return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED;
      });
    }
  };
  var penaltyWarningModelProps = {
    toggleDueBookModal: toggleDueBookModal,
    collectedPenalty: initialValues ? getDaysFromDueDate(initialValues.return_due_date) * penaltyPreDays : 0,
    lateDays: initialValues ? getDaysFromDueDate(initialValues.return_due_date) : 0
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: "animated fadeIn m-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "book",
            label: "books-circulation.select.book.label",
            required: true,
            options: books,
            placeholder: "books-circulation.select.book.placeholder",
            onChange: onSelectBook,
            groupText: "book",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            isSearchable: true,
            innerRef: bookItemRef,
            disabled: initialValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "member",
            label: "books-circulation.select.member.label",
            required: true,
            options: members,
            placeholder: "books-circulation.select.member.placeholder",
            onChange: onSelectMember,
            groupText: "user-circle-o",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            isSearchable: true,
            disabled: initialValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "book_item",
            label: "books-circulation.select.book-item.label",
            required: true,
            options: bookItems,
            placeholder: "books-circulation.select.book-item.placeholder",
            groupText: "object-group",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            isSearchable: true,
            disabled: isDisabledItem || initialValues
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
        name: "note",
        rows: "10",
        label: "books-circulation.input.note.label",
        component: _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_9__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "status",
            label: "books-circulation.select.status.label",
            required: true,
            options: renderBookStatusOption(),
            placeholder: "books-circulation.select.status.placeholder",
            onChange: onSelectBookStatus,
            groupText: "info-circle",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            disabled: isDisabledStatus
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          sm: 6,
          children: renderDatePicker(status)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_PenaltyWarningModal__WEBPACK_IMPORTED_MODULE_17__["default"], _objectSpread({}, penaltyWarningModelProps)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      children: renderLateFeeInputs(status)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
        onSave: handleSubmit(onSave)
      }, props))
    })]
  });
};
BookCirculationForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().object),
  books: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().array),
  bookItems: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().array),
  members: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().array),
  onSaveBookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  change: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchBooks: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchMembers: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchAvailableBooks: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchAvailableBookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  clearAvailableBookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func)
};
var prepareBookItems = function prepareBookItems(books) {
  var bookArray = [];
  books.forEach(function (book) {
    bookArray.push({
      id: +book.id,
      name: book.edition + " (".concat(book.book_code, ")")
    });
  });
  return bookArray;
};
var bookCirculationForm = (0,redux_form__WEBPACK_IMPORTED_MODULE_25__["default"])({
  form: 'bookCirculationForm',
  validate: _bookCirculationValidate__WEBPACK_IMPORTED_MODULE_3__["default"]
})(BookCirculationForm);
var selector = (0,redux_form__WEBPACK_IMPORTED_MODULE_26__["default"])('bookCirculationForm');
var mapStateToProps = function mapStateToProps(state) {
  var books = state.books,
    members = state.members,
    availableBooks = state.availableBooks,
    settings = state.settings;
  var hasPenaltyCollected = selector(state, 'penalty_collected');
  return {
    books: books,
    members: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.prepareFullNames)(members),
    bookItems: prepareBookItems(availableBooks),
    hasPenaltyCollected: hasPenaltyCollected,
    penaltyPreDays: settings.penalty_per_day.value,
    selectedCurrency: state.currency
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchAvailableBooks: _store_actions_availableBooksAction__WEBPACK_IMPORTED_MODULE_15__.fetchAvailableBooks,
  fetchBooks: _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_13__.fetchBooks,
  fetchMembers: _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_14__.fetchMembers,
  fetchAvailableBookLimit: _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_16__.fetchAvailableBookLimit,
  clearAvailableBookLimit: _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_16__.clearAvailableBookLimit,
  toggleDueBookModal: _store_actions_toggleDueBookModal__WEBPACK_IMPORTED_MODULE_18__.toggleDueBookModal
})(bookCirculationForm));

/***/ }),

/***/ "./resources/lms/src/admin/components/books-circulation/EditBookCirculation.js":
/*!*************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/books-circulation/EditBookCirculation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookCirculationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookCirculationForm */ "./resources/lms/src/admin/components/books-circulation/BookCirculationForm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/lms/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _store_actions_memberBookHistoryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/memberBookHistoryAction */ "./resources/lms/src/admin/store/actions/memberBookHistoryAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/availableBookLimitAction */ "./resources/lms/src/admin/store/actions/availableBookLimitAction.js");
/* harmony import */ var _member_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../member/constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var EditBookCirculation = function EditBookCirculation(props) {
  var toggleModal = props.toggleModal,
    className = props.className,
    editBookCirculationStatus = props.editBookCirculationStatus,
    editBookCirculation = props.editBookCirculation,
    editMemberBookHistoryStatus = props.editMemberBookHistoryStatus,
    editMemberBookHistory = props.editMemberBookHistory,
    title = props.title,
    bookCirculation = props.bookCirculation,
    onSelectBook = props.onSelectBook,
    bookId = props.bookId,
    isMemberBookHistory = props.isMemberBookHistory,
    filterObject = props.filterObject,
    addToast = props.addToast,
    bookLimit = props.bookLimit,
    clearAvailableBookLimit = props.clearAvailableBookLimit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDisableSubmit = _useState2[0],
    setDisableSubmit = _useState2[1];
  var modalOption = {
    toggleModal: toggleModal,
    className: className,
    title: title
  };
  var formOption = {
    onSelectBook: onSelectBook,
    bookId: bookId
  };
  var bookCirculationStatusOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.bookStatusOptions);
  var note = bookCirculation.note,
    reserve_date = bookCirculation.reserve_date,
    issued_on = bookCirculation.issued_on,
    return_date = bookCirculation.return_date,
    member = bookCirculation.member,
    return_due_date = bookCirculation.return_due_date;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    displayLimitMessage(bookLimit);
  }, [bookLimit]);
  var displayLimitMessage = function displayLimitMessage(bookLimit) {
    if (!!bookLimit.isIssueLimitExceed && !bookLimit.isIssueLimitExceed.isExceed) {
      addToast({
        text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('books-circulation.issue.book-limit.message'),
        type: _member_constants__WEBPACK_IMPORTED_MODULE_12__.toastType.ERROR
      });
      setDisableSubmit(true);
    } else if (!!bookLimit.isReserveLimitExceed && !bookLimit.isReserveLimitExceed.isExceed) {
      addToast({
        text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('books-circulation.reserve.book-limit.message'),
        type: _member_constants__WEBPACK_IMPORTED_MODULE_12__.toastType.ERROR
      });
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  };
  var changeAbleFields = {
    book: bookCirculation.book_item.book,
    note: note,
    reserve_date: reserve_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()(reserve_date, _constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.DEFAULT_MOMENT).format(_constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.NATIVE) : '',
    issued_on: issued_on ? moment__WEBPACK_IMPORTED_MODULE_2___default()(issued_on, _constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.DEFAULT_MOMENT).format(_constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.NATIVE) : '',
    return_date: return_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()(return_date, _constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.DEFAULT_MOMENT).format(_constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.NATIVE) : '',
    book_item: {
      id: bookCirculation.book_item.id,
      name: bookCirculation.book_item.edition + " (".concat(bookCirculation.book_item.book_code, ")")
    },
    member: member ? {
      id: member.id,
      name: member.first_name + ' ' + member.last_name
    } : null,
    return_due_date: return_due_date,
    status: bookCirculationStatusOptions.find(function (bookCirculationStatus) {
      return bookCirculationStatus.id === +bookCirculation.status;
    }),
    penalty_collected: false,
    collected_penalty: 0
  };
  var onSaveBookCirculation = function onSaveBookCirculation(formValues) {
    if (!isMemberBookHistory) {
      switch (formValues.status) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST:
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED:
          editBookCirculationStatus(formValues, filterObject);
          break;
        default:
          editBookCirculation(formValues, filterObject);
          break;
      }
    } else {
      switch (formValues.status) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST:
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED:
          editMemberBookHistoryStatus(formValues);
          break;
        default:
          editMemberBookHistory(formValues);
          break;
      }
    }
    clearAvailableBookLimit();
  };
  var onCancel = function onCancel() {
    clearAvailableBookLimit();
    toggleModal();
  };
  var prepareFormOption = {
    onSaveBookCirculation: onSaveBookCirculation,
    onCancel: onCancel,
    initialValues: changeAbleFields,
    isDisableSubmit: isDisableSubmit
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, modalOption), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_BookCirculationForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, prepareFormOption), formOption))
  }));
};
EditBookCirculation.propTypes = {
  bookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  bookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  filterObject: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  books: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().array),
  members: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().array),
  bookId: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  isMemberBookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  editBookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  editMemberBookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  editMemberBookHistoryStatus: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  editBookCirculationStatus: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  fetchBooks: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  fetchMembers: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSelectBook: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  clearAvailableBookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  addToast: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    bookLimit: state.bookLimit
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  editBookCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_7__.editBookCirculation,
  editMemberBookHistory: _store_actions_memberBookHistoryAction__WEBPACK_IMPORTED_MODULE_8__.editMemberBookHistory,
  editMemberBookHistoryStatus: _store_actions_memberBookHistoryAction__WEBPACK_IMPORTED_MODULE_8__.editMemberBookHistoryStatus,
  editBookCirculationStatus: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_7__.editBookCirculationStatus,
  clearAvailableBookLimit: _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_11__.clearAvailableBookLimit,
  addToast: _store_action_toastAction__WEBPACK_IMPORTED_MODULE_10__.addToast
})(EditBookCirculation));

/***/ }),

/***/ "./resources/lms/src/admin/components/books-circulation/PenaltyWarningModal.js":
/*!*************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/books-circulation/PenaltyWarningModal.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var _shared_action_buttons_ActionButtons_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/action-buttons/ActionButtons.scss */ "./resources/lms/src/shared/action-buttons/ActionButtons.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var PenaltyWarningModal = function PenaltyWarningModal(props) {
  var lateDays = props.lateDays,
    collectedPenalty = props.collectedPenalty,
    isReturnDueDateModal = props.isReturnDueDateModal,
    toggleDueBookModal = props.toggleDueBookModal,
    currency = props.currency;
  var renderMessage = function renderMessage() {
    var amount = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.priceFormatter)(collectedPenalty, currency);
    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getDynamicFormattedMessage)('books-circulation.penalties.customer-return-book.message', {
      lateDays: lateDays,
      amount: amount
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isReturnDueDateModal,
    toggle: toggleDueBookModal,
    className: 'modal-primary modal-config--small',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      toggle: toggleDueBookModal,
      children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-circulation.return.modal.penalties-warning.label')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          xs: 12,
          children: renderMessage()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onClick: toggleDueBookModal,
            color: "primary",
            size: "md",
            className: "save-action__save-btn text-white",
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('global.input.ok-btn.label')
          })
        })]
      })
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var isReturnDueDateModal = state.isReturnDueDateModal,
    settings = state.settings;
  return {
    currency: settings.currency.value.toLowerCase(),
    isReturnDueDateModal: isReturnDueDateModal
  };
};
var penaltyWarningModal = (0,redux_form__WEBPACK_IMPORTED_MODULE_11__["default"])({
  form: 'penaltiesWarningForms'
})(PenaltyWarningModal);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(penaltyWarningModal));

/***/ }),

/***/ "./resources/lms/src/admin/components/books-circulation/bookCirculationValidate.js":
/*!*****************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/books-circulation/bookCirculationValidate.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.book) {
    errors.book = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.book.validate.label');
  }
  if (!formValues.book_item) {
    errors.book_item = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.book-item.validate.label');
  }
  if (!formValues.member) {
    errors.member = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.member.validate.label');
  }
  if (!formValues.status) {
    errors.status = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.status.validate.label');
  }
  return errors;
});

/***/ }),

/***/ "./resources/lms/src/admin/shared/sharedMethod.js":
/*!********************************************************!*\
  !*** ./resources/lms/src/admin/shared/sharedMethod.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentUser": () => (/* binding */ getCurrentUser),
/* harmony export */   "getCurrentMember": () => (/* binding */ getCurrentMember),
/* harmony export */   "getApiRouteForBookCirculation": () => (/* binding */ getApiRouteForBookCirculation),
/* harmony export */   "getBookCirculationSuccessMessage": () => (/* binding */ getBookCirculationSuccessMessage)
/* harmony export */ });
/* harmony import */ var _member_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../member/constants */ "./resources/lms/src/member/constants/index.js");

var getCurrentUser = function getCurrentUser() {
  return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
};
var getCurrentMember = function getCurrentMember() {
  return localStorage.getItem('member') ? JSON.parse(atob(localStorage.getItem('member'))) : null;
};
var getApiRouteForBookCirculation = function getApiRouteForBookCirculation(status) {
  switch (status) {
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RESERVED:
      return 'reserve-book';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_ISSUED:
      return 'issue-book';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RETURNED:
      return 'return-book';
    default:
      return 'un-reserve-book';
  }
};
var getBookCirculationSuccessMessage = function getBookCirculationSuccessMessage(status) {
  switch (status) {
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RESERVED:
      return 'books-circulation.success.reserve.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_ISSUED:
      return 'books-circulation.success.issue.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RETURNED:
      return 'books-circulation.success.return.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_LOST:
      return 'books-circulation.success.lost.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_DAMAGED:
      return 'books-circulation.success.damage.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_UN_RESERVED:
      return 'books-circulation.success.unreserve.message';
    default:
      return 'books-circulation.success.reserve.message';
  }
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/availableBookLimitAction.js":
/*!***************************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/availableBookLimitAction.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAvailableBookLimit": () => (/* binding */ fetchAvailableBookLimit),
/* harmony export */   "clearAvailableBookLimit": () => (/* binding */ clearAvailableBookLimit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var fetchAvailableBookLimit = function fetchAvailableBookLimit(memberId, status) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.apiBaseURL.MEMBER, "/").concat(memberId, "/status/").concat(status)).then(function (response) {
              if (status === _constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_ISSUED) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.availableBookLimitActionType.FETCH_AVAILABLE_ISSUE_BOOK_LIMIT,
                  payload: {
                    isExceed: response.data.data,
                    status: status
                  }
                });
              } else {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.availableBookLimitActionType.FETCH_AVAILABLE_RESERVE_BOOK_LIMIT,
                  payload: {
                    isExceed: response.data.data,
                    status: status
                  }
                });
              }
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
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
var clearAvailableBookLimit = function clearAvailableBookLimit() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.availableBookLimitActionType.CLEAR_AVAILABLE_RESERVE_BOOK_LIMIT
  };
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/availableBooksAction.js":
/*!***********************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/availableBooksAction.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAvailableBooks": () => (/* binding */ fetchAvailableBooks)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var fetchAvailableBooks = function fetchAvailableBooks(bookId, memberId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.apiBaseURL.BOOK, "/").concat(bookId, "/available-books?member_id=").concat(memberId)).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.availableBookActionType.FETCH_AVAILABLE_BOOKS,
                payload: response.data.data
              });
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
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

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/bookAction.js":
/*!*************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/bookAction.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchBooks": () => (/* binding */ fetchBooks),
/* harmony export */   "fetchBook": () => (/* binding */ fetchBook),
/* harmony export */   "addBook": () => (/* binding */ addBook),
/* harmony export */   "editBook": () => (/* binding */ editBook),
/* harmony export */   "deleteBook": () => (/* binding */ deleteBook),
/* harmony export */   "exportBook": () => (/* binding */ exportBook)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/lms/src/admin/config/apiConfigWthFormData.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/lms/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/lms/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var fetchBooks = function fetchBooks() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var history = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true)) : null;
            url = _constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK;
            if (!lodash__WEBPACK_IMPORTED_MODULE_9___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_7__["default"])(filter);
            }
            _context.next = 5;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_BOOKS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_8__.setTotalRecord)(response.data.totalRecords));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
            });
          case 5:
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
var fetchBook = function fetchBook(bookId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(isLoading));
            _context2.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK + '/' + bookId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_BOOK,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            });
          case 3:
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
var addBook = function addBook(book, history) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            _context3.next = 3;
            return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_3__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK, book).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.ADD_BOOK,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__.getFormattedMessage)('books.success.create.message')
              }));
              history.push(_constants__WEBPACK_IMPORTED_MODULE_10__.Routes.BOOKS);
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            });
          case 3:
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
var editBook = function editBook(bookId, book) {
  var history = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            _context4.next = 3;
            return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_3__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK + '/' + bookId, book).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.EDIT_BOOK,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__.getFormattedMessage)('books.success.edit.message')
              }));
              if (history) {
                history.push(_constants__WEBPACK_IMPORTED_MODULE_10__.Routes.BOOKS);
              } else {
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_6__.toggleModal)());
              }
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            });
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var deleteBook = function deleteBook(bookId) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK + '/' + bookId).then(function () {
              dispatch(fetchBooks(filterObj));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.DELETE_BOOK,
                payload: bookId
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__.getFormattedMessage)('books.success.delete.message')
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_6__.toggleModal)());
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var exportBook = function exportBook(cb) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(dispatch) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true)) : null;
            url = _constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOKS_EXPORT;
            _context6.next = 4;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.EXPORT_BOOK,
                payload: response.data.data
              });
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message
              }));
              cb({
                url: response.data.data
              });
            })["catch"](function (_ref12) {
              var response = _ref12.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
            });
          case 4:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/bookCirculationAction.js":
/*!************************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/bookCirculationAction.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchBooksCirculation": () => (/* binding */ fetchBooksCirculation),
/* harmony export */   "fetchBookCirculation": () => (/* binding */ fetchBookCirculation),
/* harmony export */   "addBookCirculation": () => (/* binding */ addBookCirculation),
/* harmony export */   "editBookCirculation": () => (/* binding */ editBookCirculation),
/* harmony export */   "editBookCirculationStatus": () => (/* binding */ editBookCirculationStatus),
/* harmony export */   "deleteBookCirculation": () => (/* binding */ deleteBookCirculation),
/* harmony export */   "sendMail": () => (/* binding */ sendMail),
/* harmony export */   "excelFile": () => (/* binding */ excelFile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/lms/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/lms/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/lms/src/admin/shared/sharedMethod.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var fetchBooksCirculation = function fetchBooksCirculation() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments.length > 1 ? arguments[1] : undefined;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true));
            url = _constants__WEBPACK_IMPORTED_MODULE_11__.apiBaseURL.BOOK_HISTORY;
            if (!lodash__WEBPACK_IMPORTED_MODULE_9___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_6__["default"])(filter);
            }
            _context.next = 5;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationActionType.FETCH_BOOKS_CIRCULATION,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_7__.setTotalRecord)(response.data.totalRecords));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
              cb({
                status: response.data.success
              });
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
            });
          case 5:
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
var fetchBookCirculation = function fetchBookCirculation(bookCirculationId) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true));
            _context2.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_11__.apiBaseURL.ISSUED_BOOK + '/' + bookCirculationId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationActionType.FETCH_BOOK_CIRCULATION,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
            });
          case 3:
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
var addBookCirculation = function addBookCirculation(book) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post("".concat(_constants__WEBPACK_IMPORTED_MODULE_11__.apiBaseURL.BOOK, "/").concat(book.book_item_id, "/").concat((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getApiRouteForBookCirculation)(book.status)), book).then(function () {
              dispatch(fetchBooksCirculation(filterObj, function () {}));
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getBookCirculationSuccessMessage)(book.status))
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
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
var editBookCirculation = function editBookCirculation(book) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post("".concat(_constants__WEBPACK_IMPORTED_MODULE_11__.apiBaseURL.BOOK, "/").concat(book.book_item_id, "/").concat((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getApiRouteForBookCirculation)(book.status)), book).then(function () {
              dispatch(fetchBooksCirculation(filterObj, function () {}));
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getBookCirculationSuccessMessage)(book.status))
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var editBookCirculationStatus = function editBookCirculationStatus(book) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].put("".concat(_constants__WEBPACK_IMPORTED_MODULE_11__.apiBaseURL.BOOK, "/").concat(book.book_item_id, "/update-issued-book-status"), {
              status: book.status
            }).then(function () {
              dispatch(fetchBooksCirculation(filterObj, function () {}));
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getBookCirculationSuccessMessage)(book.status))
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var deleteBookCirculation = function deleteBookCirculation(bookId) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_11__.apiBaseURL.BOOK_HISTORY + '/' + bookId).then(function (response) {
              dispatch(fetchBooksCirculation(filterObj, function () {}));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationActionType.DELETE_BOOK_CIRCULATION,
                payload: bookId
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
            })["catch"](function (_ref12) {
              var response = _ref12.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }();
};
var sendMail = function sendMail(id, cb) {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post("book-history/".concat(id, "/send-book-due-mail"), null).then(function (response) {
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('books-circulation.success.reminder.message')
              }));
              cb({});
            })["catch"](function (_ref14) {
              var response = _ref14.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              cb({});
            });
          case 2:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref13.apply(this, arguments);
    };
  }();
};
var excelFile = function excelFile() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments.length > 1 ? arguments[1] : undefined;
  var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(dispatch) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true)) : null;
            url = _constants__WEBPACK_IMPORTED_MODULE_11__.apiBaseURL.EXPORT_BOOKS_CIRCULATION;
            if (!lodash__WEBPACK_IMPORTED_MODULE_9___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_6__["default"])(filter);
            }
            _context8.next = 5;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationActionType.EXCEL_FILE_CIRCULATION,
                payload: response.data.data
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message
              }));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
              cb({
                url: response.data.data
              });
            })["catch"](function (_ref16) {
              var response = _ref16.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
            });
          case 5:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x8) {
      return _ref15.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/memberAction.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/memberAction.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchMembers": () => (/* binding */ fetchMembers),
/* harmony export */   "fetchMember": () => (/* binding */ fetchMember),
/* harmony export */   "addMember": () => (/* binding */ addMember),
/* harmony export */   "editMember": () => (/* binding */ editMember),
/* harmony export */   "deleteMember": () => (/* binding */ deleteMember),
/* harmony export */   "activeInactiveMember": () => (/* binding */ activeInactiveMember),
/* harmony export */   "meberSendMail": () => (/* binding */ meberSendMail)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/lms/src/admin/config/apiConfigWthFormData.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/lms/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/lms/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var fetchMembers = function fetchMembers() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true)) : null;
            url = _constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.MEMBER;
            if (filter.limit || filter.order_By || filter.search) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_7__["default"])(filter);
            }
            _context.next = 5;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberActionType.FETCH_MEMBERS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_8__.setTotalRecord)(response.data.totalRecords));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
            });
          case 5:
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
var fetchMember = function fetchMember(memberId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true)) : null;
            _context2.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.MEMBER + '/' + memberId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberActionType.FETCH_MEMBER,
                payload: response.data.data
              });
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false)) : null;
            });
          case 3:
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
var addMember = function addMember(member, history) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_3__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.MEMBER, member).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberActionType.ADD_MEMBER,
                payload: response.data.data
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('members.success.create.message')
              }));
              history.push(_constants__WEBPACK_IMPORTED_MODULE_10__.Routes.MEMBERS);
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
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
var editMember = function editMember(memberId, member, history) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_3__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.MEMBER + '/' + memberId, member).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberActionType.EDIT_MEMBER,
                payload: response.data.data
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message
              }));
              history.push(_constants__WEBPACK_IMPORTED_MODULE_10__.Routes.MEMBERS);
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var deleteMember = function deleteMember(memberId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.MEMBER + '/' + memberId).then(function () {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberActionType.DELETE_MEMBER,
                payload: memberId
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('members.success.delete.message')
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_6__.toggleModal)());
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var activeInactiveMember = function activeInactiveMember(memberId, isActive) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.MEMBER + '/' + memberId + '/update-status').then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberActionType.SET_ACTIVE_DE_ACTIVE,
                payload: response.data.data
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)(!isActive ? 'members.success.active-account.message' : 'members.success.inactive-account.message')
              }));
            })["catch"](function (_ref12) {
              var response = _ref12.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }();
};
var meberSendMail = function meberSendMail(id) {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.MEMBER + '/' + id + '/re-activation').then(function (response) {
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message
              }));
            })["catch"](function (_ref14) {
              var response = _ref14.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 2:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref13.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/memberBookHistoryAction.js":
/*!**************************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/memberBookHistoryAction.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchMemberBooksHistory": () => (/* binding */ fetchMemberBooksHistory),
/* harmony export */   "editMemberBookHistory": () => (/* binding */ editMemberBookHistory),
/* harmony export */   "editMemberBookHistoryStatus": () => (/* binding */ editMemberBookHistoryStatus)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/lms/src/admin/shared/sharedMethod.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/lms/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/lms/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var fetchMemberBooksHistory = function fetchMemberBooksHistory(memberId) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_6__.setLoading)(true));
            url = "members/".concat(memberId, "/books-history");
            if (filter.limit || filter.order_By || filter.search) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_7__["default"])(filter);
            }
            _context.next = 5;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberBookHistoryActionType.FETCH_MEMBER_BOOK_HISTORY,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_8__.setTotalRecord)(response.data.totalRecords));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_6__.setLoading)(false));
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_6__.setLoading)(false));
            });
          case 5:
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
var editMemberBookHistory = function editMemberBookHistory(book) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post("books/".concat(book.book_item_id, "/").concat((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getApiRouteForBookCirculation)(book.status)), book).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberBookHistoryActionType.EDIT_MEMBER_BOOK_HISTORY,
                payload: response.data.data
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getBookCirculationSuccessMessage)(book.status))
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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
var editMemberBookHistoryStatus = function editMemberBookHistoryStatus(book) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].put("books/".concat(book.book_item_id, "/update-issued-book-status"), {
              status: book.status
            }).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.memberBookHistoryActionType.EDIT_MEMBER_BOOK_HISTORY,
                payload: response.data.data
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getBookCirculationSuccessMessage)(book.status))
              }));
              dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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

/***/ "./resources/lms/src/admin/store/actions/toggleDueBookModal.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/toggleDueBookModal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleDueBookModal": () => (/* binding */ toggleDueBookModal)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");

var toggleDueBookModal = function toggleDueBookModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.PENALTIY_MODAL_ACTION
  };
};

/***/ }),

/***/ "./resources/lms/src/shared/book-status/book-status.js":
/*!*************************************************************!*\
  !*** ./resources/lms/src/shared/book-status/book-status.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BookStatus = function BookStatus(props) {
  var status = props.status,
    item = props.item;
  switch (status) {
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_ISSUED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.issued.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.issued.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_AVAILABLE:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.available.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.available.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_RETURNED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.returned.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-dark",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.returned.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_LOST:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.lost.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-danger",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.lost.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_DAMAGED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.damaged.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.damaged.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_UN_RESERVED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.unreserved.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.unreserved.label')
        })
      });
    default:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.reserved.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-primary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.reserved.label')
        })
      });
  }
};
BookStatus.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  status: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookStatus);

/***/ }),

/***/ "./resources/lms/src/shared/components/CheckBox.js":
/*!*********************************************************!*\
  !*** ./resources/lms/src/shared/components/CheckBox.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.scss */ "./resources/lms/src/shared/components/Component.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CheckBox = function CheckBox(props) {
  var input = props.input,
    label = props.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: "control control--checkbox",
    children: [label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", _objectSpread({
      type: "checkbox",
      checked: !!input.value,
      onChange: function onChange(e, _ref) {
        var checked = _ref.checked;
        return input.onChange(checked);
      }
    }, input)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "control__indicator"
    })]
  });
};
CheckBox.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".book-history-detail__modal {\n  max-width: 700px;\n}\n.book-history-detail__item-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 660px) {\n  .book-history-detail__item-container {\n    width: 100%;\n    flex-flow: column;\n  }\n}\n.book-history-detail__item {\n  display: flex;\n  margin-bottom: 25px;\n  width: 40%;\n  margin-right: 20px;\n}\n@media (max-width: 660px) {\n  .book-history-detail__item {\n    width: 100%;\n  }\n}\n.book-history-detail__item-heading {\n  width: 120px;\n  font-weight: 700;\n}\n.book-history-detail__item-name {\n  display: flex;\n  margin-bottom: 25px;\n  width: 100%;\n}\n.book-history-detail__item-name-heading {\n  min-width: 120px;\n  font-weight: 700;\n}\n.book-history-detail__item-note {\n  display: flex;\n  margin-bottom: 25px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/books-circulation/BooksCirculation.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/books-circulation/BooksCirculation.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".books-circulation-table-row {\n  cursor: pointer;\n}\n\n.header__border {\n  border-bottom: 1px solid #c8ced3;\n}\n\n@media (max-width: 355px) {\n  .react-datepicker {\n    margin-left: -55px;\n  }\n}\n\n.css-4ljt47-MenuList {\n  scroll-behavior: smooth;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss":
/*!*************************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookCirculationDetails_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./BookCirculationDetails.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/book-circulation-details/BookCirculationDetails.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookCirculationDetails_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookCirculationDetails_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/lms/src/admin/components/books-circulation/BooksCirculation.scss":
/*!************************************************************************************!*\
  !*** ./resources/lms/src/admin/components/books-circulation/BooksCirculation.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./BooksCirculation.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/books-circulation/BooksCirculation.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/redux-form/es/createFormValueSelector.js":
/*!***************************************************************!*\
  !*** ./node_modules/redux-form/es/createFormValueSelector.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFormValueSelector)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


function createFormValueSelector(_ref) {
  var getIn = _ref.getIn;
  return function (form, getFormState) {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(form, 'Form value must be specified');

    var nonNullGetFormState = getFormState || function (state) {
      return getIn(state, 'form');
    };

    return function (state) {
      for (var _len = arguments.length, fields = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        fields[_key - 1] = arguments[_key];
      }

      invariant__WEBPACK_IMPORTED_MODULE_0___default()(fields.length, 'No fields specified');
      return fields.length === 1 ? // only selecting one field, so return its value
      getIn(nonNullGetFormState(state), form + ".values." + fields[0]) : // selecting many fields, so return an object of field values
      fields.reduce(function (accumulator, field) {
        var value = getIn(nonNullGetFormState(state), form + ".values." + field);
        return value === undefined ? accumulator : _structure_plain__WEBPACK_IMPORTED_MODULE_1__["default"].setIn(accumulator, field, value);
      }, {});
    };
  };
}

/***/ }),

/***/ "./node_modules/redux-form/es/formValueSelector.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-form/es/formValueSelector.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createFormValueSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFormValueSelector */ "./node_modules/redux-form/es/createFormValueSelector.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createFormValueSelector__WEBPACK_IMPORTED_MODULE_0__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);