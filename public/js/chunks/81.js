(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/admin/components/dashboard/Dashboard.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/lms/src/admin/components/dashboard/Dashboard.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 1280px) {\n  .dashboard__card-wrapper {\n    flex: 1;\n    max-width: 100%;\n  }\n}\n.dashboard__card-body:hover {\n  cursor: pointer;\n}\n.dashboard__card-count {\n  font-size: 22px;\n  font-weight: 600;\n}\n.dashboard__card-title {\n  margin-top: 18px;\n  font-size: 17px;\n  font-weight: 600;\n}\n.dashboard__card-icon {\n  float: right;\n  margin-top: -40px;\n  opacity: 0.7;\n}\n@media (max-width: 320px) {\n  .dashboard__card-icon {\n    margin-top: -25px !important;\n  }\n}\n\n.chart-wrapper-empty-component {\n  width: 100%;\n}\n\n.chart-wrapper-content {\n  height: 40vh;\n  display: flex;\n  align-items: center;\n}\n\nhtml[dir=rtl] .dashboard__card-icon {\n  float: left;\n}\n\n.card-header {\n  background-color: #f0f3f5;\n  color: #2d3236;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/admin/components/dashboard/charts/Chart.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/lms/src/admin/components/dashboard/charts/Chart.scss ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".charts__child-popover .popover {\n  min-width: 700px;\n}\n.charts .custom-input-search {\n  cursor: pointer;\n}\n\n.list-group {\n  cursor: pointer;\n}\n\n.bg-dark {\n  background-color: #8395fb !important;\n  border-color: #8395fb !important;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/lms/src/admin/components/dashboard/Dashboard.js":
/*!*******************************************************************!*\
  !*** ./resources/lms/src/admin/components/dashboard/Dashboard.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Dashboard_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dashboard.scss */ "./resources/lms/src/admin/components/dashboard/Dashboard.scss");
/* harmony import */ var _Dashboard_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _charts_Charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/Charts */ "./resources/lms/src/admin/components/dashboard/charts/Charts.js");
/* harmony import */ var _prepareChartData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prepareChartData */ "./resources/lms/src/admin/components/dashboard/prepareChartData.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _store_actions_dashBoardAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/dashBoardAction */ "./resources/lms/src/admin/store/actions/dashBoardAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/lms/src/shared/table/ReactDataTable.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../environment */ "./resources/lms/src/environment.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/lms/src/admin/store/actions/bookCirculationAction.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var Dashboard = function Dashboard(props) {
  var fetchDashBoardDetails = props.fetchDashBoardDetails,
      dashBoard = props.dashBoard,
      isLoading = props.isLoading,
      totalRecord = props.totalRecord,
      fetchBooksCirculation = props.fetchBooksCirculation,
      booksCirculation = props.booksCirculation;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('general'),
      _useState2 = _slicedToArray(_useState, 2),
      typeOfData = _useState2[0],
      setTypeOfData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('month').toDate()),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedMinDate = _useState4[0],
      setSelectedMinDate = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().endOf('month').toDate()),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedMaxDate = _useState6[0],
      setSelectedMaxDate = _useState6[1];

  var labels = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedOptions"])(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabels"]).map(function (_ref) {
    var name = _ref.name;
    return name;
  });

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchText = _useState8[0],
      setSearchValue = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      bookHistoryTableHeader = _useState10[0],
      setBookHistoryTableHeader = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      bookCirculation = _useState12[0],
      setBookCirculation = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchDashBoardDetails();
  }, []);

  if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(dashBoard) || !dashBoard.general) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }

  var general = dashBoard.general;
  var totalCard = Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareCards"])(general, labels);

  var renderChartData = function renderChartData(chartData, type) {
    var inputToady = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputNextWeek = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().add(1, 'week').format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputLastWeek = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'week').format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputStartMonth = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputNextMonth = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().endOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputStartOfLastMonth = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'months').startOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputEndOfLastMonth = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'months').endOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputInterStartMediateDate = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()(selectedMinDate).format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var inputInterMediateEndDate = moment_moment__WEBPACK_IMPORTED_MODULE_13___default()(selectedMaxDate).format(_constants__WEBPACK_IMPORTED_MODULE_14__["dateFormat"].CHART_CUSTOM_DATE);
    var general = chartData.general,
        today = chartData.today,
        currentWeek = chartData.currentWeek,
        lastWeek = chartData.lastWeek,
        currentMonth = chartData.currentMonth,
        lastMonth = chartData.lastMonth,
        interMonth = chartData.interMonth;

    if (type === _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].TODAY && today) {
      return Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareBarChart"])(today, labels, inputToady);
    } else if (type === _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_WEEK && currentWeek) {
      return Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareMonthlyBarChart"])(currentWeek, labels, inputToady, inputNextWeek);
    } else if (type === _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_WEEK && lastWeek) {
      return Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareMonthlyBarChart"])(lastWeek, labels, inputLastWeek, inputToady);
    } else if (type === _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_MONTH && currentMonth) {
      return Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareMonthlyBarChart"])(currentMonth, labels, inputStartMonth, inputNextMonth);
    } else if (type === _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_MONTH && lastMonth) {
      return Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareMonthlyBarChart"])(lastMonth, labels, inputStartOfLastMonth, inputEndOfLastMonth);
    } else if (type === _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].CUSTOM && interMonth) {
      return Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareMonthlyBarChart"])(interMonth, labels, inputInterStartMediateDate, inputInterMediateEndDate);
    } else {
      return Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareBarChart"])(general, labels);
    }
  };

  var onMonthSelector = function onMonthSelector() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    fetchDashBoardDetails(params);
  };

  var chartOptions = {
    general: general,
    chartData: renderChartData(dashBoard, typeOfData),
    onMonthSelector: onMonthSelector,
    setTypeOfData: setTypeOfData,
    selectedMinDate: selectedMinDate,
    setSelectedMinDate: setSelectedMinDate,
    selectedMaxDate: selectedMaxDate,
    setSelectedMaxDate: setSelectedMaxDate
  };

  var onChange = function onChange(filter) {
    if (!filter.search) {
      filter.search = searchText;
    }

    fetchBooksCirculation(filter, function () {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  };

  var onClickFetchBooksCirculation = function onClickFetchBooksCirculation(searchValues, index) {
    if (index === 1) {
      return window.location.href = _environment__WEBPACK_IMPORTED_MODULE_16__["environment"].URL + '/#' + _constants__WEBPACK_IMPORTED_MODULE_14__["Routes"].MEMBERS;
    } else if (index === 0) {
      return window.location.href = _environment__WEBPACK_IMPORTED_MODULE_16__["environment"].URL + '/#' + _constants__WEBPACK_IMPORTED_MODULE_14__["Routes"].BOOKS;
    } else if (searchValues.count > 0) {
      setBookHistoryTableHeader(searchValues.title);
      setBookCirculation(true);
      var filters = {
        order_By: _constants__WEBPACK_IMPORTED_MODULE_14__["Filters"].OBJ.order_By,
        limit: _constants__WEBPACK_IMPORTED_MODULE_14__["Filters"].OBJ.limit,
        skip: 0,
        direction: _constants__WEBPACK_IMPORTED_MODULE_14__["Filters"].OBJ.direction,
        search: index === 4 ? "overdue" : index === 3 ? "reserved" : index === 2 ? "issued" : null
      };
      setSearchValue(filters.search);
      fetchBooksCirculation(filters, function (res) {
        if (res.status) {
          window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      });
    }
  };

  var renderCards = function renderCards() {
    return totalCard.map(function (card, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        key: index,
        className: "dashboard__card-wrapper col-12 col-sm-6 col-lg-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "text-white ".concat(card.color)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
        onClick: function onClick() {
          return onClickFetchBooksCirculation(card, index);
        },
        className: "".concat(card.count > 0 ? "dashboard__card-body" : null)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard__card-count"
      }, card.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard__card-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: card.icon
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard__card-title text-nowrap"
      }, card.title))));
    });
  };

  var columns = [{
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('books-circulation.select.book.label'),
    selector: 'name',
    sortable: true,
    wrap: true,
    cell: function cell(row) {
      return row.name = row.book_item.book.name;
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('books-circulation.select.book-item.label'),
    selector: 'book_code',
    width: '140px',
    sortable: true,
    cell: function cell(row) {
      return row.book_code = row.book_item.book_code;
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('books-circulation.select.member.label'),
    selector: 'member_name',
    width: '140px',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.member.first_name + ' ' + row.member.last_name);
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('books-circulation.table.issue-date.column'),
    selector: 'issued_on',
    width: '160px',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.issued_on ? Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["dateFormatter"])(row.issued_on) : 'N/A');
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('books-circulation.table.return-date.column'),
    selector: 'return_due_date',
    width: '160px',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.return_due_date ? Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["dateFormatter"])(row.return_due_date) : 'N/A', " ");
    }
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: "mb-2"
  }, isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_9__["default"], null) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Dashboard"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('dashboard.title'))), renderCards()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_Charts__WEBPACK_IMPORTED_MODULE_6__["default"], chartOptions), bookCirculation ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, bookHistoryTableHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_15__["default"], {
    items: booksCirculation,
    emptyStateMessageId: "dashboard.empty-state.title",
    emptyNotFoundStateMessageId: "dashboard.not-found.empty-state.title",
    filterKeyName: _constants__WEBPACK_IMPORTED_MODULE_12__["storageKey"].BOOK_CIRCULATION,
    columns: columns,
    loading: isLoading,
    totalRows: totalRecord,
    onChange: onChange,
    icon: _constants__WEBPACK_IMPORTED_MODULE_14__["icon"].BOOK_CIRCULATION
  })))))) : null);
};

Dashboard.propTypes = {
  dashBoard: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  fetchDashBoardDetails: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  booksCirculation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  totalRecord: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  fetchBooksCirculation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  var booksCirculation = state.booksCirculation,
      dashBoard = state.dashBoard,
      isLoading = state.isLoading,
      totalRecord = state.totalRecord;
  return {
    booksCirculation: booksCirculation,
    dashBoard: dashBoard,
    isLoading: isLoading,
    totalRecord: totalRecord
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  fetchBooksCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_17__["fetchBooksCirculation"],
  fetchDashBoardDetails: _store_actions_dashBoardAction__WEBPACK_IMPORTED_MODULE_10__["fetchDashBoardDetails"]
})(Dashboard));

/***/ }),

/***/ "./resources/lms/src/admin/components/dashboard/Dashboard.scss":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/admin/components/dashboard/Dashboard.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./Dashboard.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/admin/components/dashboard/Dashboard.scss");

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

/***/ "./resources/lms/src/admin/components/dashboard/charts/Chart.scss":
/*!************************************************************************!*\
  !*** ./resources/lms/src/admin/components/dashboard/charts/Chart.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./Chart.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/lms/src/admin/components/dashboard/charts/Chart.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/lms/src/admin/components/dashboard/charts/Charts.js":
/*!***********************************************************************!*\
  !*** ./resources/lms/src/admin/components/dashboard/charts/Charts.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Chart_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chart.scss */ "./resources/lms/src/admin/components/dashboard/charts/Chart.scss");
/* harmony import */ var _Chart_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Chart_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _prepareChartData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../prepareChartData */ "./resources/lms/src/admin/components/dashboard/prepareChartData.js");
/* harmony import */ var _shared_empty_component_EmptyComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/empty-component/EmptyComponent */ "./resources/lms/src/shared/empty-component/EmptyComponent.js");
/* harmony import */ var _shared_components_CustomInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/CustomInput */ "./resources/lms/src/shared/components/CustomInput.js");
/* harmony import */ var _shared_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/DatePicker */ "./resources/lms/src/shared/components/DatePicker.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var Charts = function Charts(props) {
  var general = props.general,
      onMonthSelector = props.onMonthSelector,
      setTypeOfData = props.setTypeOfData,
      chartData = props.chartData,
      change = props.change,
      initialize = props.initialize,
      selectedMinDate = props.selectedMinDate,
      setSelectedMinDate = props.setSelectedMinDate,
      selectedMaxDate = props.selectedMaxDate,
      setSelectedMaxDate = props.setSelectedMaxDate;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      popoverOpen = _useState2[0],
      setPopoverOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      childPopoverOpen = _useState4[0],
      setChildPopoverOpen = _useState4[1];

  var toggle = function toggle() {
    return setPopoverOpen(!popoverOpen);
  };

  var toggleChild = function toggleChild() {
    return setChildPopoverOpen(!childPopoverOpen);
  };

  var labels = Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedOptions"])(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabels"]).map(function (_ref) {
    var name = _ref.name;
    return name;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initialize({
      date_selector: moment__WEBPACK_IMPORTED_MODULE_4___default()().format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE) + '-' + moment__WEBPACK_IMPORTED_MODULE_4___default()().format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE)
    });
  }, []);

  if (!general) {
    return null;
  }

  var doughnut = Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["prepareDougnutChart"])(general, labels);
  var pie = Object(_prepareChartData__WEBPACK_IMPORTED_MODULE_7__["preparePieChart"])(general);

  var renderEmptyDataSet = function renderEmptyDataSet(dataSet) {
    return dataSet[0].data.reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  var renderEmptyBarChart = function renderEmptyBarChart(dataSet) {
    var data = [];
    dataSet.forEach(function (d) {
      return data.push.apply(data, _toConsumableArray(d.data));
    });
    return data.reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  var renderMonthSelector = function renderMonthSelector() {
    var today = moment__WEBPACK_IMPORTED_MODULE_4___default()().format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var nextWeek = moment__WEBPACK_IMPORTED_MODULE_4___default()().add(1, 'week').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var lastWeek = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'week').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var startMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var nextMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().endOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var startOfLastMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'months').startOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var endOfLastMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'months').endOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var interStartMediateDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(selectedMinDate).format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var interMediateEndDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(selectedMaxDate).format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].DEFAULT_MOMENT);
    var inputToady = moment__WEBPACK_IMPORTED_MODULE_4___default()().format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputNextWeek = moment__WEBPACK_IMPORTED_MODULE_4___default()().add(1, 'week').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputLastWeek = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'week').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputStartMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputNextMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().endOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputStartOfLastMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'months').startOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputEndOfLastMonth = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'months').endOf('month').format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputInterStartMediateDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(selectedMinDate).format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var inputInterMediateEndDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(selectedMaxDate).format(_constants__WEBPACK_IMPORTED_MODULE_11__["dateFormat"].CHART_DATE);
    var todayParams = {
      type: _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].TODAY,
      params: {
        today: true
      }
    };
    var currentWeekParams = {
      type: _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_WEEK,
      params: {
        start_date: today,
        end_date: nextWeek
      }
    };
    var lastWeekParams = {
      type: _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_WEEK,
      params: {
        start_date: lastWeek,
        end_date: today
      }
    };
    var currentMonthParams = {
      type: _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_MONTH,
      params: {
        start_date: startMonth,
        end_date: nextMonth
      }
    };
    var lastMonthParams = {
      type: _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_MONTH,
      params: {
        start_date: startOfLastMonth,
        end_date: endOfLastMonth
      }
    };
    var interMediateParams = {
      type: _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].CUSTOM,
      params: {
        start_date: interStartMediateDate,
        end_date: interMediateEndDate
      }
    };

    var onSelectDate = function onSelectDate(type) {
      switch (type) {
        case _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].TODAY:
          onMonthSelector(todayParams);
          change('date_selector', inputToady + '-' + inputToady);
          setTypeOfData(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].TODAY);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_WEEK:
          change('date_selector', inputToady + '-' + inputNextWeek);
          setTypeOfData(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_WEEK);
          onMonthSelector(currentWeekParams);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_WEEK:
          change('date_selector', inputLastWeek + '-' + inputToady);
          setTypeOfData(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_WEEK);
          onMonthSelector(lastWeekParams);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_MONTH:
          change('date_selector', inputStartMonth + '-' + inputNextMonth);
          setTypeOfData(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_MONTH);
          onMonthSelector(currentMonthParams);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_MONTH:
          change('date_selector', inputStartOfLastMonth + '-' + inputEndOfLastMonth);
          setTypeOfData(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_MONTH);
          onMonthSelector(lastMonthParams);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].CUSTOM:
          change('date_selector', inputInterStartMediateDate + '-' + inputInterMediateEndDate);
          setTypeOfData(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].CUSTOM);
          onMonthSelector(interMediateParams);
          break;

        default:
          onMonthSelector();
          break;
      }
    };

    var onSelectMinDate = function onSelectMinDate(date) {
      setSelectedMinDate(date);
    };

    var onSelectMaxDate = function onSelectMaxDate(date) {
      setSelectedMaxDate(date);
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "Popover1",
      className: "float-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "date_selector",
      component: _shared_components_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"],
      isCustom: true,
      readOnly: true,
      groupText: "calendar-check-o"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      trigger: !childPopoverOpen ? 'legacy' : ' ',
      placement: "bottom",
      isOpen: popoverOpen,
      target: "Popover1",
      toggle: toggle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverHeader"], null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('global.input.filter-btn.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
      onClick: function onClick() {
        return onSelectDate(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].TODAY);
      }
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.filter.today.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
      onClick: function onClick() {
        return onSelectDate(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_WEEK);
      }
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.filter.this-week.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
      onClick: function onClick() {
        return onSelectDate(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_WEEK);
      }
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.filter.last-week.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
      onClick: function onClick() {
        return onSelectDate(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].THIS_MONTH);
      }
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.filter.this-month.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
      onClick: function onClick() {
        return onSelectDate(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].LAST_MONTH);
      }
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.filter.last-month.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "Popover2"
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.filter.custom.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      trigger: "legacy",
      className: "charts__child-popover",
      placement: "left",
      isOpen: childPopoverOpen,
      target: "Popover2",
      toggle: toggleChild
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverBody"], {
      className: "mt-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
      selected: selectedMinDate,
      onChange: onSelectMinDate,
      shouldCloseOnSelect: false,
      startOpen: true,
      placeHolder: "Click to select a date"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
      selected: selectedMaxDate,
      onChange: onSelectMaxDate,
      shouldCloseOnSelect: false,
      startOpen: true,
      placeHolder: "Click to select a date"
    })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      size: "sm",
      disabled: !childPopoverOpen,
      onClick: function onClick() {
        return onSelectDate(_constants__WEBPACK_IMPORTED_MODULE_12__["chartLabelSelector"].CUSTOM);
      }
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('global.input.apply-btn.label')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "ml-1",
      color: "secondary",
      size: "sm",
      onClick: function onClick() {
        return toggle();
      }
    }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('global.input.cancel-btn.label')))))));
  };

  var options = {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var count = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return ' ' + data.labels[tooltipItem.index] + ' : ' + count;
        }
      }
    }
  };
  var BookCirculationOptions = {
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var count = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return ' ' + data.labels[tooltipItem.index] + ' : ' + count;
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "charts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardColumns"], {
    className: "cols-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.circulation-report.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper chart-wrapper-content"
  }, renderEmptyDataSet(doughnut.datasets) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    data: doughnut,
    options: BookCirculationOptions
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper-empty-component"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_empty_component_EmptyComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isShort: true,
    title: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.empty-message.label'),
    icon: _constants__WEBPACK_IMPORTED_MODULE_11__["icon"].BOOK_CIRCULATION
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.book&member-report.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper chart-wrapper-content"
  }, renderEmptyDataSet(pie.datasets) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
    data: pie,
    options: options
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper-empty-component"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_empty_component_EmptyComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isShort: true,
    title: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__["getFormattedMessage"])('dashboard.chart.empty-message.label'),
    icon: _constants__WEBPACK_IMPORTED_MODULE_11__["icon"].BOOK
  }))))))))));
};

Charts.propTypes = {
  dashBoard: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  general: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  chartData: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  setSelectedMinDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setSelectedMaxDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setTypeOfData: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMonthSelector: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  change: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  initialize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'chart'
})(Charts));

/***/ }),

/***/ "./resources/lms/src/admin/components/dashboard/prepareChartData.js":
/*!**************************************************************************!*\
  !*** ./resources/lms/src/admin/components/dashboard/prepareChartData.js ***!
  \**************************************************************************/
/*! exports provided: prepareChartData, prepareCards, prepareBarChart, prepareMonthlyBarChart, barChartOptions, prepareDougnutChart, preparePieChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareChartData", function() { return prepareChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareCards", function() { return prepareCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareBarChart", function() { return prepareBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareMonthlyBarChart", function() { return prepareMonthlyBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartOptions", function() { return barChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareDougnutChart", function() { return prepareDougnutChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preparePieChart", function() { return preparePieChart; });
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__);


var brandPrimary = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__["getStyle"])('--primary');
var brandSuccess = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__["getStyle"])('--success');
var brandInfo = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__["getStyle"])('--info');
var brandWarning = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__["getStyle"])('--warning');
var brandDanger = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_0__["getStyle"])('--danger');
var chartColors = [brandInfo, brandSuccess, brandPrimary, brandWarning, brandDanger]; // Main Chart

var prepareChartData = function prepareChartData(chartData) {
  var total_books = chartData.total_books,
      total_members = chartData.total_members,
      total_issued_books = chartData.total_issued_books,
      total_reserved_books = chartData.total_reserved_books,
      total_overdue_books = chartData.total_overdue_books;
  return [total_books, total_members, total_issued_books, total_reserved_books, total_overdue_books];
};
var prepareCards = function prepareCards(chartData, labels) {
  var total_books = chartData.total_books,
      total_members = chartData.total_members,
      total_issued_books = chartData.total_issued_books,
      total_reserved_books = chartData.total_reserved_books,
      total_overdue_books = chartData.total_overdue_books;
  return [{
    title: labels[0],
    color: 'bg-dark',
    count: total_books,
    icon: 'fa fa-book fa-4x'
  }, {
    title: labels[1],
    color: 'bg-success',
    count: total_members,
    icon: 'fas fa-users fa-4x'
  }, {
    title: labels[2],
    color: 'bg-primary',
    count: total_issued_books,
    icon: 'fas fa-book-reader fa-4x'
  }, {
    title: labels[3],
    color: 'bg-warning',
    count: total_reserved_books,
    icon: 'fas fa-book-reader fa-4x'
  }, {
    type: 'bar',
    title: labels[4],
    color: 'bg-danger',
    count: total_overdue_books,
    icon: 'fas fa-book-reader fa-4x'
  }];
};
var prepareBarChart = function prepareBarChart(chartData, labels) {
  return {
    labels: labels,
    datasets: [{
      label: 'LMS',
      backgroundColor: chartColors,
      borderColor: chartColors,
      borderWidth: 1,
      hoverBackgroundColor: chartColors,
      hoverBorderColor: chartColors,
      data: prepareChartData(chartData),
      fill: false
    }]
  };
};

var getChartData = function getChartData(chartData, startDate, endDate) {
  var dates = chartData.dates,
      books = chartData.books,
      issued_books = chartData.issued_books,
      reserved_books = chartData.reserved_books,
      overdue_books = chartData.overdue_books,
      members = chartData.members;
  var data = [books[startDate], members[startDate], issued_books[startDate], reserved_books[startDate], overdue_books[startDate]];

  if (books[endDate]) {
    data = [books[startDate].concat(books[endDate]), books[startDate].concat(books[endDate]), books[startDate].concat(books[endDate]), books[startDate].concat(books[endDate]), books[startDate].concat(books[endDate])];
  }

  return {
    data: data,
    dates: dates
  };
};

var prepareMonthlyBarChart = function prepareMonthlyBarChart(chartData, labels, startDate) {
  var endDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var dataSet = [];

  var _getChartData = getChartData(chartData, startDate, endDate),
      data = _getChartData.data,
      dates = _getChartData.dates;

  labels.forEach(function (label, index) {
    dataSet.push({
      label: label,
      backgroundColor: chartColors[index],
      borderColor: chartColors[index],
      borderWidth: 1,
      hoverBackgroundColor: chartColors[index],
      hoverBorderColor: chartColors[index],
      data: data[index],
      fill: false
    });
  });
  return {
    labels: dates,
    datasets: dataSet
  };
};
var barChartOptions = {
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_1__["CustomTooltips"]
  },
  animation: {
    duration: 5000
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      barPercentage: 0.3,
      ticks: {
        fontSize: 14
      },
      stacked: true
    }],
    yAxes: [{
      display: true,
      ticks: {
        stepSize: 1,
        fontSize: 14,
        beginAtZero: true
      },
      stacked: true
    }]
  }
};
var prepareDougnutChart = function prepareDougnutChart(chartData, labels) {
  var chart = {
    labels: labels.slice(2, 5)
  };
  chart.datasets = [{
    data: prepareChartData(chartData).slice(2, 5),
    backgroundColor: chartColors.slice(2, 5),
    hoverBackgroundColor: chartColors.slice(2, 5)
  }];
  return chart;
};
var preparePieChart = function preparePieChart(chartData) {
  var chart = {
    labels: chartData.genres_with_books[0]
  };
  chart.datasets = [{
    data: chartData.genres_with_books[1],
    backgroundColor: chartData.genres_with_books[2],
    hoverBackgroundColor: chartData.genres_with_books[3]
  }];
  return chart;
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/dashBoardAction.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/dashBoardAction.js ***!
  \******************************************************************/
/*! exports provided: fetchDashBoardDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDashBoardDetails", function() { return fetchDashBoardDetails; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var renderAction = function renderAction(paramType, dispatch, data) {
  switch (paramType) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["chartLabelSelector"].TODAY:
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["dashBoardActionType"].FETCH_DASHBOARD_DETAILS_BY_TODAY,
        payload: data
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["chartLabelSelector"].THIS_WEEK:
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["dashBoardActionType"].FETCH_DASHBOARD_DETAILS_BY_CURRENT_WEEK,
        payload: data
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["chartLabelSelector"].LAST_WEEK:
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["dashBoardActionType"].FETCH_DASHBOARD_DETAILS_BY_LAST_WEEK,
        payload: data
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["chartLabelSelector"].THIS_MONTH:
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["dashBoardActionType"].FETCH_DASHBOARD_DETAILS_BY_CURRENT_MONTH,
        payload: data
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["chartLabelSelector"].LAST_MONTH:
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["dashBoardActionType"].FETCH_DASHBOARD_DETAILS_BY_LAST_MONTH,
        payload: data
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["chartLabelSelector"].CUSTOM:
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["dashBoardActionType"].FETCH_DASHBOARD_DETAILS_BETWEEN_MONTHS,
        payload: data
      });

    default:
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["dashBoardActionType"].FETCH_DASHBOARD_DETAILS,
        payload: data
      });
  }
};

var fetchDashBoardDetails = function fetchDashBoardDetails() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(true));
                _context.next = 3;
                return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_5__["apiBaseURL"].DASHBOARD_DETAILS, {
                  params: param.params
                }).then(function (response) {
                  renderAction(param.type, dispatch, response.data.data);
                  dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(false));
                })["catch"](function (_ref2) {
                  var response = _ref2.response;
                  dispatch(Object(_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__["addToast"])({
                    text: response.data.message,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["toastType"].ERROR
                  }));
                  dispatch(Object(_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__["setLoading"])(false));
                });

              case 3:
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

/***/ })

}]);