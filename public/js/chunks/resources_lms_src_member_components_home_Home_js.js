(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_lms_src_member_components_home_Home_js"],{

/***/ "./resources/lms/src/admin/shared/sharedMethod.js":
/*!********************************************************!*\
  !*** ./resources/lms/src/admin/shared/sharedMethod.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/lms/src/member/components/home/Home.js":
/*!**********************************************************!*\
  !*** ./resources/lms/src/member/components/home/Home.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.scss */ "./resources/lms/src/member/components/home/Home.scss");
/* harmony import */ var _HomeTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeTab */ "./resources/lms/src/member/components/home/HomeTab.js");
/* harmony import */ var _HomeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeModal */ "./resources/lms/src/member/components/home/HomeModal.js");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../appConstant */ "./resources/lms/src/appConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _admin_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../admin/shared/sharedMethod */ "./resources/lms/src/admin/shared/sharedMethod.js");
/* harmony import */ var _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/bookAction */ "./resources/lms/src/member/store/actions/bookAction.js");
/* harmony import */ var _store_actions_tooalBookAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/tooalBookAction */ "./resources/lms/src/member/store/actions/tooalBookAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/umd/OwlCarousel.js");
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.theme.default.css */ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css");
/* harmony import */ var _store_actions_bookSearchAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/bookSearchAction */ "./resources/lms/src/member/store/actions/bookSearchAction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_Truncate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/Truncate */ "./resources/lms/src/shared/Truncate.js");
/* harmony import */ var _store_actions_homeSettingAction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions/homeSettingAction */ "./resources/lms/src/member/store/actions/homeSettingAction.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../store/actions/testimonialAction */ "./resources/lms/src/member/store/actions/testimonialAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




























var Home = function Home(props) {
  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var appSetting = props.appSetting,
    books = props.books,
    genres = props.genres,
    aboutUsCard = props.aboutUsCard,
    searchBooks = props.searchBooks,
    totalRecordMember = props.totalRecordMember,
    totalBooks = props.totalBooks,
    resetSearchBooks = props.resetSearchBooks,
    fetchTotalBooks = props.fetchTotalBooks,
    fetchFeaturedBooks = props.fetchFeaturedBooks,
    fetchBooksByNameOrAuthors = props.fetchBooksByNameOrAuthors,
    fetchTestimonials = props.fetchTestimonials,
    toggleModal = props.toggleModal,
    fetchHomeSettings = props.fetchHomeSettings,
    homeSettings = props.homeSettings,
    isLoading = props.isLoading,
    testimonials = props.testimonials;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('book'),
    _useState6 = _slicedToArray(_useState5, 2),
    searchBy = _useState6[0],
    setSearchBy = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    book = _useState8[0],
    setBook = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isToggle = _useState10[0],
    setToggle = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isSearch = _useState12[0],
    setIsSearch = _useState12[1];
  var appName = ''; //appSetting[appSettingsKey.LIBRARY_NAME] ? appSetting[appSettingsKey.LIBRARY_NAME].value : null;
  var appLogo = '/public/images/logo.png'; //appSetting[appSettingsKey.LIBRARY_LOGO] ? appSetting[appSettingsKey.LIBRARY_LOGO].logo_url : publicImagePath.APP_LOGO;
  var about = undefined;
  var modalOptions = {
    toggleModal: toggleModal,
    isToggle: isToggle,
    book: book
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    resetSearchBooks();
    fetchTotalBooks();
    fetchFeaturedBooks();
    fetchHomeSettings();
    fetchTestimonials();
    onSearchByApi();
  }, []);
  var openModal = function openModal(book) {
    setToggle(true);
    toggleModal();
    setBook(book);
  };

  /**
   * Search books
   * @param searchBy
   * @param page
   */
  var onSearch = function onSearch() {
    var searchBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'book';
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    setIsSearch(true);
    onSearchByApi();
  };
  var onSearchByApi = function onSearchByApi() {
    var searchBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'book';
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    setSearchBy(searchBy);
    var skip = 4 * page;
    var param = '?search=' + search + '&limit=4&by_books=1&skip=' + skip;
    if (searchBy === 'author') {
      param = '?search=' + search + '&limit=4&by_authors=1&skip=' + skip;
    }
    fetchBooksByNameOrAuthors(param);
  };
  var onPrev = function onPrev(e) {
    e.preventDefault();
    var prevPage = page - 1;
    setPage(prevPage);
    onSearch(searchBy, prevPage);
  };
  var onNext = function onNext(e) {
    e.preventDefault();
    var nextPage = page + 1;
    setPage(nextPage);
    onSearch(searchBy, nextPage);
  };

  /**
   *  render pagination
   * @returns {string|*}
   */
  var renderPagination = function renderPagination() {
    if (!totalRecordMember || totalRecordMember < 5) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {});
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
      className: "row justify-content-center no-gutters",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("nav", {
        "aria-label": "Page navigation",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("ul", {
          className: "pagination mb-0 mt-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
            className: "page-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              disabled: page === 0,
              className: "page-link",
              onClick: function onClick(e) {
                return onPrev(e);
              },
              children: "Previous"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
            className: "page-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              disabled: totalRecordMember <= page * 4 + 4,
              className: "page-link",
              onClick: function onClick(e) {
                return onNext(e);
              },
              children: "Next"
            })
          })]
        })
      })
    });
  };

  // set search value while search
  var onChangeInput = function onChangeInput(event) {
    setSearch(event.target.value);
    resetSearchBooks();
  };
  var inputHandleKeyPress = function inputHandleKeyPress(event) {
    if (event.key == 'Enter') {
      onSearch();
    }
  };

  // featured books slider options
  var bookSliderOption = {
    nav: true,
    rewind: true,
    autoplay: true,
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  };

  // featured books slider options
  var mainSliderOption = {
    items: 1,
    nav: true,
    autoplay: true,
    margin: 10,
    loop: true
  };

  /**
   *  Render Featured Books
   * @returns {*}
   */
  var renderFeaturedBooks = function renderFeaturedBooks() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)((react_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default()), _objectSpread(_objectSpread({
      className: "owl-theme"
    }, bookSliderOption), {}, {
      children: books.map(function (item, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
            className: "popular-book__item-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
              alt: item.image_path,
              src: item.image_path ? item.image_path : _appConstant__WEBPACK_IMPORTED_MODULE_5__.publicImagePath.BOOK_AVATAR
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
              className: 'book-name',
              children: item.name
            })]
          })
        }, i);
      })
    }));
  };
  var getRandomColor = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  var renderGenres = function renderGenres() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("section", {
      className: "".concat(genres.length === 0 ? 'section-spacing--no-item' : 'section-spacing--top section-spacing--bottom', " category"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h3", {
          className: "text-center",
          children: homeSettings.genres_text ? homeSettings.genres_text.display_name : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
          className: "".concat(genres.length === 0 ? 'm-0' : 'section-header-row-spacing', " text-center text-description--white-section text-description section-width mx-auto"),
          children: homeSettings.genres_text ? homeSettings.genres_text.value : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "row",
          children: genres.map(function (genre, index) {
            var colorCode = getRandomColor();
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "col-12 col-sm-6 col-lg-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
                style: {
                  borderColor: colorCode
                },
                className: "category__box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
                  style: {
                    backgroundColor: colorCode
                  },
                  className: "category__box-icon-wrapper position-relative",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
                    className: "category__box-icon position-absolute",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                      className: "fa fa-book"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
                  className: "text-center category__box-title",
                  children: genre.name
                })]
              })
            }, index);
          })
        })]
      })
    });
  };

  /**
   * Render Popular Books Section
   * @returns {string|*}
   */
  var renderPopularSection = function renderPopularSection() {
    if (books.length < 1) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {});
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("section", {
      className: "popular-book section-spacing--top section-spacing--bottom position-relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
        className: "popular-book__bg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: "container-fluid popular-book__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h3", {
          className: "text-center",
          children: homeSettings.popular_books_text ? homeSettings.popular_books_text.display_name : ''
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
          className: "section-header-row-spacing text-center w-75 ml-auto mr-auto",
          children: homeSettings.popular_books_text ? homeSettings.popular_books_text.value : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "popular-book__book-item-slider-wrapper",
          children: renderFeaturedBooks()
        })]
      })]
    });
  };

  /**
   * Render Book Card
   * @param book
   * @returns {*}
   */
  var renderBook = function renderBook(book) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
      className: "card book-search-card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: "row no-gutters",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "book-search-card__col-left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
            alt: book === null || book === void 0 ? void 0 : book.image_path,
            src: book !== null && book !== void 0 && book.image_path ? book === null || book === void 0 ? void 0 : book.image_path : _appConstant__WEBPACK_IMPORTED_MODULE_5__.publicImagePath.BOOK_AVATAR,
            className: "card-img"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "book-search-card__col-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h5", {
              className: "card-title",
              children: (book === null || book === void 0 ? void 0 : book.name) || ''
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("p", {
              className: "card-text text-muted",
              children: ["By ", book.authors_name]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
              className: "card-text",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_shared_Truncate__WEBPACK_IMPORTED_MODULE_17__["default"], {
                text: (book === null || book === void 0 ? void 0 : book.description) || '',
                textLength: 243
              })
            })]
          })
        })]
      })
    });
  };

  /**
   * Render searched books
   * @returns {string|*}
   */
  var renderSearchedBooks = function renderSearchedBooks() {
    if (searchBooks.length < 1) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {});
    }
    if (isSearch) {
      setTimeout(function () {
        if (about) {
          about.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 400);
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("section", {
      className: "book-search section-spacing--top section-spacing--bottom",
      ref: function ref(el) {
        about = el;
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: "container",
        children: [isSearch ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h2", {
          className: "book-search__result-heading text-description text-center",
          children: "Result for"
        }) : null, isSearch ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("h1", {
          className: "book-search__book-name text-center mb-5",
          children: ["\"", search, "\""]
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "row book-search-card-row",
          children: searchBooks.map(function (item, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "col-12 col-xl-6 book-search-card-container",
              onClick: function onClick() {
                return openModal(item);
              },
              children: renderBook(item)
            }, i);
          })
        }), renderPagination()]
      })
    });
  };
  var tabOptions = {
    onChangeInput: onChangeInput,
    onSearch: onSearch,
    inputHandleKeyPress: inputHandleKeyPress
  };
  /**
   * Render Footer
   * @returns {*}
   */
  var renderFooter = function renderFooter() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("footer", {
      className: "footer section-spacing--bottom section-spacing--top",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
            className: "col-12 col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
                src: appLogo,
                alt: "library",
                height: "50"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
              className: "mt-3",
              children: homeSettings.company_description ? homeSettings.company_description.value : null
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "space-10"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("ul", {
              className: "list-inline list-unstyled social-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                className: "list-inline-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
                  href: homeSettings.facebook ? homeSettings.facebook.value : null,
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                    className: "fa fa-facebook",
                    "aria-hidden": "true"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                className: "list-inline-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
                  href: homeSettings.twitter ? homeSettings.twitter.value : null,
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                    className: "fa fa-twitter",
                    "aria-hidden": "true"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                className: "list-inline-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
                  href: homeSettings.linkedin ? homeSettings.linkedin.value : null,
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                    className: "fa fa-linkedin",
                    "aria-hidden": "true"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                className: "list-inline-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
                  href: homeSettings.github ? homeSettings.github.value : null,
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                    className: "fa fa-github"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("ul", {
              className: "list-inline tip yellow",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                  className: "icofont icofont-square"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                  className: "icofont icofont-square"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                  className: "icofont icofont-square"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
            className: "col-12 col-md-4 ml-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h4", {
              children: "Contact Us"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("table", {
              className: "table borderless addr-dt",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                      className: "fa fa-map-marker"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("address", {
                      className: "mb-0",
                      children: appName
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                      className: "fa fa-envelope"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
                      href: "mailto: ".concat(homeSettings.contact_email ? homeSettings.contact_email.value : null),
                      target: "",
                      className: "footer__link",
                      children: homeSettings.contact_email ? homeSettings.contact_email.value : null
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                      className: "fa fa-phone"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
                      href: "tel:+91 ".concat(homeSettings.contact_phone ? homeSettings.contact_phone.value : null),
                      target: "",
                      className: "footer__link",
                      children: homeSettings.contact_phone ? homeSettings.contact_phone.value : null
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                      className: "fa fa-globe"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("a", {
                      href: homeSettings.website ? homeSettings.website.value : null,
                      target: "",
                      className: "footer__link",
                      children: homeSettings.website ? homeSettings.website.value.replace('https://', '') : null
                    })
                  })]
                })]
              })
            })]
          })]
        })
      })
    });
  };

  /**
   *  Render what people says section
   * @returns {*}
   */
  var renderWhatPeopleSays = function renderWhatPeopleSays() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("section", {
      className: "what-people-say position-relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
        className: "what-people-say__bg position-absolute",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
          src: "img/user/user-slider-bg.jpg",
          alt: "what people say",
          className: "img-fluid"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
        className: "what-people-say__content section-spacing--top section-spacing--bottom",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h3", {
            className: "text-center",
            children: "What People Say"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)((react_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default()), _objectSpread(_objectSpread({
            className: "what-people-say__owl-slider owl-theme"
          }, mainSliderOption), {}, {
            children: testimonials.map(function (people, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
                className: "item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
                  className: "what-people-say__slider-section text-center mx-auto",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
                    className: "mt-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h6", {
                      className: "text-uppercase",
                      children: people.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h6", {
                      className: "text-uppercase",
                      children: people.occupation
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
                      className: "text-center text-description--landing w-75 mx-auto section-header-row-spacing",
                      children: people.description
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
                      className: "what-people-say__slider-avatar",
                      children: people.image_path !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
                        src: people.image_path,
                        alt: ""
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_21__.getAvatarName)(people.name)
                      })
                    })]
                  })
                })
              }, i);
            })
          }))]
        })
      })]
    });
  };

  /**
   *  Render About us Section
   * @returns {*}
   */
  var renderAboutUs = function renderAboutUs() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("section", {
      className: "".concat(aboutUsCard.length === 0 ? 'section-spacing--no-item' : 'section-spacing--top section-spacing--bottom', " about-us"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h3", {
          className: "text-center",
          children: homeSettings.about_us_text ? homeSettings.about_us_text.display_name : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
          className: "".concat(aboutUsCard.length === 0 ? 'm-0' : 'section-header-row-spacing', " text-center text-description section-width mx-auto"),
          children: homeSettings.about_us_text ? homeSettings.about_us_text.value : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "row",
          children: aboutUsCard && aboutUsCard.map(function (card, i) {
            var colorCode = getRandomColor();
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "col-12 col-sm-6 col-lg-4 about-us__box-col",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
                className: "about-us__box mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                  style: {
                    color: colorCode
                  },
                  className: "fa fa-book"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h4", {
                  className: "mt-4",
                  children: card.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
                  children: card.description
                })]
              })
            }, i);
          })
        })]
      })
    });
  };
  var onToggleSidebar = function onToggleSidebar() {
    var element = document.getElementById('navbarSupportedContent');
    if (element) {
      element.classList.toggle('show');
    }
  };
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_16__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
      className: "animated fadeIn main-landing-page",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("header", {
        className: "header position-fixed",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Landing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("nav", {
            className: "navbar navbar-expand-lg w-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("a", {
              className: "navbar-brand d-flex align-items-center",
              href: "#",
              onClick: function onClick(e) {
                return e.preventDefault();
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
                src: appLogo,
                alt: "logo",
                className: "header__logo"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
                className: "pl-3",
                children: appName
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("button", {
              className: "navbar-toggler",
              type: "button",
              "data-toggle": "collapse",
              onClick: function onClick() {
                return onToggleSidebar();
              },
              "data-target": "#navbarSupportedContent",
              "aria-controls": "navbarSupportedContent",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("i", {
                className: "fa fa-bars"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "collapse navbar-collapse",
              id: "navbarSupportedContent",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("ul", {
                className: "navbar-nav ms-auto text-uppercase",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {
                    to: (0,_admin_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getCurrentMember)() ? _constants__WEBPACK_IMPORTED_MODULE_6__.Routes.MEMBER_DEFAULT : _constants__WEBPACK_IMPORTED_MODULE_6__.Routes.MEMBER_LOGIN,
                    className: "nav-link",
                    children: (0,_admin_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getCurrentMember)() ? 'Books' : 'Login'
                  })
                }), (0,_admin_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getCurrentMember)() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {
                    to: _constants__WEBPACK_IMPORTED_MODULE_6__.Routes.MEMBER_REGISTRATION,
                    className: "nav-link",
                    children: "Registration"
                  })
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("section", {
        className: "landing position-relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "position-absolute landing__slider",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)((react_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default()), _objectSpread(_objectSpread({
            className: "owl-theme"
          }, mainSliderOption), {}, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
                src: "img/landing-slider/landing_slider-1.jpg",
                alt: "slide one",
                className: "img-fluid landing__slider-img"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
                src: "img/landing-slider/landing_slider-2.jpg",
                alt: "slide two",
                className: "img-fluid landing__slider-img"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
                src: "img/landing-slider/landing_slider-3.jpg",
                alt: "slide three",
                className: "img-fluid landing__slider-img"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("img", {
                src: "img/landing-slider/landing_slider-4.jpg",
                alt: "slide three",
                className: "img-fluid landing__slider-img"
              })
            })]
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
            className: "landing__text-block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h1", {
              className: "landing__text-block-title",
              children: homeSettings.hero_image_title ? homeSettings.hero_image_title.value : ''
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
              className: "landing__text-block-desc text-description--landing",
              children: homeSettings.hero_image_description ? homeSettings.hero_image_description.value : ''
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
              className: "landing-search-box mt-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_HomeTab__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, tabOptions))
            })]
          })
        })]
      }), renderSearchedBooks(), renderAboutUs(), renderGenres(), renderPopularSection(), renderWhatPeopleSays(), renderFooter()]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_HomeModal__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, modalOptions))]
  });
};
Home.propTypes = {
  appSetting: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().object),
  books: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().array),
  searchBooks: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().array),
  totalRecordMember: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().number),
  totalBooks: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().number),
  fetchFeaturedBooks: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().func),
  resetSearchBooks: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().func),
  testimonials: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().array)
};
var mapStateToProps = function mapStateToProps(state) {
  var appSetting = state.appSetting,
    books = state.books,
    searchBooks = state.searchBooks,
    totalRecordMember = state.totalRecordMember,
    totalBooks = state.totalBooks,
    isLoading = state.isLoading,
    homeSettings = state.homeSettings,
    testimonials = state.testimonials,
    genres = state.genres,
    aboutUsCard = state.aboutUsCard;
  var settingsArray = Object.values(homeSettings);
  var settingsArr = lodash__WEBPACK_IMPORTED_MODULE_19___default().mapKeys(settingsArray, 'key');
  return {
    appSetting: appSetting,
    books: books,
    genres: genres,
    aboutUsCard: aboutUsCard,
    searchBooks: searchBooks,
    totalRecordMember: totalRecordMember,
    totalBooks: totalBooks,
    isLoading: isLoading,
    homeSettings: settingsArr,
    testimonials: testimonials
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchFeaturedBooks: _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_9__.fetchFeaturedBooks,
  fetchHomeSettings: _store_actions_homeSettingAction__WEBPACK_IMPORTED_MODULE_18__.fetchHomeSettings,
  fetchTestimonials: _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_20__.fetchTestimonials,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__.toggleModal,
  fetchBooksByNameOrAuthors: _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_9__.fetchBooksByNameOrAuthors,
  resetSearchBooks: _store_actions_bookSearchAction__WEBPACK_IMPORTED_MODULE_15__.resetSearchBooks,
  fetchTotalBooks: _store_actions_tooalBookAction__WEBPACK_IMPORTED_MODULE_10__.fetchTotalBooks
})(Home));

/***/ }),

/***/ "./resources/lms/src/member/components/home/HomeModal.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/member/components/home/HomeModal.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../appConstant */ "./resources/lms/src/appConstant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HomeModal = function HomeModal(props) {
  var toggleModal = props.toggleModal,
    isToggle = props.isToggle,
    book = props.book;
  if (book === null) {
    return '';
  }
  var content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "d-flex flex-column flex-lg-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "book-detail-modal__media",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          alt: book.image_path,
          src: book.image_path ? book.image_path : _appConstant__WEBPACK_IMPORTED_MODULE_2__.publicImagePath.BOOK_AVATAR,
          className: "card-img"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "pl-0 pl-lg-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "book-detail-modal__detail-title",
            children: "Description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-description",
            children: book.description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "book-detail-modal__detail-title",
            children: "Authors"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-description",
            children: book.authors_name
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "book-detail-modal__detail-title",
            children: "Genres"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-description",
            children: book.genres_name
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "book-detail-modal__detail-title",
            children: "ISBN"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-description",
            children: book.isbn
          })]
        }), book.url !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "book-detail-modal__detail-title",
            children: "URL"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-description",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              target: "_blank",
              href: book.url,
              children: "more detail..."
            })
          })]
        }) : '']
      })]
    })
  });
  var modalOptions = {
    title: book ? book.name : '',
    content: content,
    className: 'book-detail-modal modal-lg',
    toggleModal: toggleModal
  };
  return isToggle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, modalOptions)) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeModal);

/***/ }),

/***/ "./resources/lms/src/member/components/home/HomeTab.js":
/*!*************************************************************!*\
  !*** ./resources/lms/src/member/components/home/HomeTab.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Nav.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavLink.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabContent.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabPane.js");
/* harmony import */ var _shared_components_Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/Radio */ "./resources/lms/src/shared/components/Radio.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var HomeTab = function HomeTab(props) {
  var onChangeInput = props.onChangeInput,
    onSearch = props.onSearch,
    inputHandleKeyPress = props.inputHandleKeyPress;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('bookTab'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isBookChecked = _useState4[0],
    setIsBookChecked = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAuthorChecked = _useState6[0],
    setIsAuthorChecked = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    inputValue = _useState8[0],
    setInputValue = _useState8[1];
  var onCheckedBook = function onCheckedBook() {
    setActiveTab('bookTab');
    setIsBookChecked(!isBookChecked);
    setIsAuthorChecked(false);
    setInputValue('');
  };
  var onCheckedAuthor = function onCheckedAuthor() {
    setActiveTab('authorTab');
    setIsAuthorChecked(!isAuthorChecked);
    setIsBookChecked(false);
    setInputValue('');
  };
  var onChangeInputData = function onChangeInputData(event) {
    onChangeInput(event);
    setInputValue(event.target.value);
  };
  var handleKeyPress = function handleKeyPress(event) {
    inputHandleKeyPress(event);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tabs: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          active: activeTab === 'bookTab',
          onClick: function onClick() {
            return onCheckedBook();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "book-form__filter-by",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
              name: "filter_by",
              label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books.radio.book.label'),
              checked: isBookChecked,
              component: _shared_components_Radio__WEBPACK_IMPORTED_MODULE_1__["default"]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          active: activeTab === 'authorTab',
          onClick: function onClick() {
            return onCheckedAuthor();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
              name: "filter_by",
              label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books.radio.author.label'),
              checked: isAuthorChecked,
              component: _shared_components_Radio__WEBPACK_IMPORTED_MODULE_1__["default"]
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      activeTab: activeTab,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        tabId: "bookTab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "text",
            placeholder: "Book Name",
            value: inputValue,
            onChange: function onChange(e) {
              return onChangeInputData(e);
            },
            onKeyPress: handleKeyPress
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "landing-search-box__search-icon d-flex justify-content-center align-items-center",
            onClick: function onClick() {
              return onSearch();
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              className: "fa fa-search"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        tabId: "authorTab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "text",
            placeholder: "Author Name",
            value: inputValue,
            onChange: function onChange(e) {
              return onChangeInputData(e);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "landing-search-box__search-icon d-flex justify-content-center align-items-center",
            onClick: function onClick() {
              return onSearch('author');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              className: "fa fa-search"
            })
          })]
        })
      })]
    })]
  });
};
HomeTab.propTypes = {
  onChangeInput: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  inputHandleKeyPress: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  onSearch: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_11__["default"])({
  form: 'bookSearchForm'
})(HomeTab));

/***/ }),

/***/ "./resources/lms/src/member/store/actions/bookAction.js":
/*!**************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/bookAction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchBooks": () => (/* binding */ fetchBooks),
/* harmony export */   "fetchAllBooks": () => (/* binding */ fetchAllBooks),
/* harmony export */   "fetchHomeBooks": () => (/* binding */ fetchHomeBooks),
/* harmony export */   "fetchFeaturedBooks": () => (/* binding */ fetchFeaturedBooks),
/* harmony export */   "fetchBooksByNameOrAuthors": () => (/* binding */ fetchBooksByNameOrAuthors)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/member/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environment */ "./resources/lms/src/environment.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/lms/src/member/store/actions/totalRecordAction.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var fetchBooks = function fetchBooks() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            _context.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.BOOK).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_BOOKS,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
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
var fetchAllBooks = function fetchAllBooks(param) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            _context2.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.SEARCH_BOOK_ALL + '?limit=20').then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_DEFAULT_BOOKS,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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
var fetchHomeBooks = function fetchHomeBooks(param) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            _context3.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.SEARCH_BOOK_ALL + '?limit=4').then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_HOME_SETTINGS,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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
var fetchFeaturedBooks = function fetchFeaturedBooks() {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(_environment__WEBPACK_IMPORTED_MODULE_7__.environment.URL + '/api/' + _constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.BOOK + '?is_featured=1').then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_FEATURED_BOOKS,
                payload: response.data.data.books
              });
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_FEATURED_GENRES,
                payload: response.data.data.genres
              });
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_FEATURED_CARDS,
                payload: response.data.data.aboutUsCard
              });
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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
var fetchBooksByNameOrAuthors = function fetchBooksByNameOrAuthors(param) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(_environment__WEBPACK_IMPORTED_MODULE_7__.environment.URL + '/api/' + _constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.BOOK + param).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.SEARCH_BOOKS,
                payload: response.data.data.books
              });
              if (response.data.totalRecords === 0) {
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: 'Sorry!! Books not found.',
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.WARNING
                }));
              }
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_8__.setTotalRecord)(response.data.totalRecords));
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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

/***/ }),

/***/ "./resources/lms/src/member/store/actions/bookSearchAction.js":
/*!********************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/bookSearchAction.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findBooks": () => (/* binding */ findBooks),
/* harmony export */   "resetSearchBooks": () => (/* binding */ resetSearchBooks),
/* harmony export */   "resetAllSearchBooks": () => (/* binding */ resetAllSearchBooks),
/* harmony export */   "reserveBook": () => (/* binding */ reserveBook)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/member/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var findBooks = function findBooks(params) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            _context.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.SEARCH_BOOK, "?").concat(params)).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.SEARCH_BOOKS,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
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
var resetSearchBooks = function resetSearchBooks() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.RESET_SEARCH_BOOKS
    });
  };
};
var resetAllSearchBooks = function resetAllSearchBooks() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.ALL_RESET_SEARCH_BOOKS
    });
  };
};
var reserveBook = function reserveBook(bookItemId, index) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.BOOK + '/' + bookItemId + '/reserve-book ', {}).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.RESERVE_BOOK,
                payload: {
                  status: response.data.data.book_item.status,
                  index: index,
                  expectedAvailableDate: response.data.data.expected_available_date
                }
              });
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books.success.reserve.message')
              }));
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
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

/***/ }),

/***/ "./resources/lms/src/member/store/actions/homeSettingAction.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/homeSettingAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchHomeSettings": () => (/* binding */ fetchHomeSettings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/apiConfig */ "./resources/lms/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var fetchHomeSettings = function fetchHomeSettings() {
  var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true)) : null;
            _context.next = 3;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_2__.apiBaseURL.HOME_SETTING).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__.homeSettingsActionsType.FETCH_HOME_SETTINGS,
                payload: response.data.data
              });
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
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

/***/ }),

/***/ "./resources/lms/src/member/store/actions/testimonialAction.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/testimonialAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTestimonials": () => (/* binding */ fetchTestimonials)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/apiConfig */ "./resources/lms/src/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var fetchTestimonials = function fetchTestimonials() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true));
            url = _constants__WEBPACK_IMPORTED_MODULE_4__.apiBaseURL.TESTIMONIAL;
            _context.next = 4;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
              dispatch({
                type: _admin_constants__WEBPACK_IMPORTED_MODULE_5__.testimonialActionType.FETCH_TESTIMONIALS,
                payload: response.data.data
              });
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_6__.toastType.ERROR
              }));
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
            });
          case 4:
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

/***/ "./resources/lms/src/member/store/actions/tooalBookAction.js":
/*!*******************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/tooalBookAction.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTotalBooks": () => (/* binding */ fetchTotalBooks)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environment */ "./resources/lms/src/environment.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var fetchTotalBooks = function fetchTotalBooks() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(_environment__WEBPACK_IMPORTED_MODULE_5__.environment.URL + '/api/' + _constants__WEBPACK_IMPORTED_MODULE_3__.apiBaseURL.TOTAL_BOOKS).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.bookActionType.FETCH_TOTAL_BOOKS,
                payload: response.data.data
              });
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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

/***/ "./resources/lms/src/member/store/actions/totalRecordAction.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/member/store/actions/totalRecordAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTotalRecord": () => (/* binding */ setTotalRecord)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/member/constants/index.js");

var setTotalRecord = function setTotalRecord(totalRecord) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.SET_TOTAL_RECORD,
    payload: totalRecord
  };
};

/***/ }),

/***/ "./resources/lms/src/shared/Truncate.js":
/*!**********************************************!*\
  !*** ./resources/lms/src/shared/Truncate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var text = _ref.text,
    _ref$textLength = _ref.textLength,
    textLength = _ref$textLength === void 0 ? 20 : _ref$textLength;
  var truncate = function truncate() {
    if (text && text.length > textLength) {
      return text.slice(0, textLength) + '...';
    }
    return text;
  };
  return truncate(text);
});

/***/ }),

/***/ "./resources/lms/src/shared/components/Modal.js":
/*!******************************************************!*\
  !*** ./resources/lms/src/shared/components/Modal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalFooter.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var GlobalModal = function GlobalModal(props) {
  var className = props.className,
    isToggle = props.isToggle,
    toggleModal = props.toggleModal,
    actions = props.actions,
    title = props.title,
    content = props.content;
  var modalClassName = "modal-primary primary ".concat(className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: isToggle,
    toggle: toggleModal,
    centered: !!actions,
    className: modalClassName,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      toggle: toggleModal,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: content
    }), actions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: actions
    }) : null]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    isToggle: state.isToggle
  };
};
GlobalModal.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)]),
  actions: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element),
  content: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  isToggle: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(GlobalModal));

/***/ }),

/***/ "./resources/lms/src/shared/components/Radio.js":
/*!******************************************************!*\
  !*** ./resources/lms/src/shared/components/Radio.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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






var Radio = function Radio(props) {
  var input = props.input,
    label = props.label,
    _props$checked = props.checked,
    checked = _props$checked === void 0 ? false : _props$checked,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", _objectSpread(_objectSpread({
      type: "radio",
      name: "radio",
      className: "form__radio",
      checked: checked
    }, input), {}, {
      disabled: disabled
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      className: "form__label",
      children: label
    })]
  });
};
Radio.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  checked: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);

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

/***/ "./resources/lms/src/store/action/modalAction.js":
/*!*******************************************************!*\
  !*** ./resources/lms/src/store/action/modalAction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleModal": () => (/* binding */ toggleModal)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/constants/index.js");

var toggleModal = function toggleModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.TOGGLE_ACTION
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/owl.carousel/dist/assets/owl.carousel.css":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/owl.carousel/dist/assets/owl.carousel.css ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _owl_video_play_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owl.video.play.png */ "./node_modules/owl.carousel/dist/assets/owl.video.play.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_owl_video_play_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Owl Carousel v2.3.4\n * Copyright 2013-2018 David Deutsch\n * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE\n */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1; }\n  .owl-carousel .owl-stage {\n    position: relative;\n    touch-action: manipulation;\n    -moz-backface-visibility: hidden;\n    /* fix firefox animation glitch */ }\n  .owl-carousel .owl-stage:after {\n    content: \".\";\n    display: block;\n    clear: both;\n    visibility: hidden;\n    line-height: 0;\n    height: 0; }\n  .owl-carousel .owl-stage-outer {\n    position: relative;\n    overflow: hidden;\n    /* fix for flashing background */\n    -webkit-transform: translate3d(0px, 0px, 0px); }\n  .owl-carousel .owl-wrapper,\n  .owl-carousel .owl-item {\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -ms-backface-visibility: hidden;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0); }\n  .owl-carousel .owl-item {\n    position: relative;\n    min-height: 1px;\n    float: left;\n    -webkit-backface-visibility: hidden;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none; }\n  .owl-carousel .owl-item img {\n    display: block;\n    width: 100%; }\n  .owl-carousel .owl-nav.disabled,\n  .owl-carousel .owl-dots.disabled {\n    display: none; }\n  .owl-carousel .owl-nav .owl-prev,\n  .owl-carousel .owl-nav .owl-next,\n  .owl-carousel .owl-dot {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none; }\n  .owl-carousel .owl-nav button.owl-prev,\n  .owl-carousel .owl-nav button.owl-next,\n  .owl-carousel button.owl-dot {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0 !important;\n    font: inherit; }\n  .owl-carousel.owl-loaded {\n    display: block; }\n  .owl-carousel.owl-loading {\n    opacity: 0;\n    display: block; }\n  .owl-carousel.owl-hidden {\n    opacity: 0; }\n  .owl-carousel.owl-refresh .owl-item {\n    visibility: hidden; }\n  .owl-carousel.owl-drag .owl-item {\n    touch-action: pan-y;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none; }\n  .owl-carousel.owl-grab {\n    cursor: move;\n    cursor: grab; }\n  .owl-carousel.owl-rtl {\n    direction: rtl; }\n  .owl-carousel.owl-rtl .owl-item {\n    float: right; }\n\n/* No Js */\n.no-js .owl-carousel {\n  display: block; }\n\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  animation-duration: 1000ms;\n  animation-fill-mode: both; }\n\n.owl-carousel .owl-animated-in {\n  z-index: 0; }\n\n.owl-carousel .owl-animated-out {\n  z-index: 1; }\n\n.owl-carousel .fadeOut {\n  animation-name: fadeOut; }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out; }\n\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item {\n  /**\n\t\t\tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\n\t\t\tcalculation of the height of the owl-item that breaks page layouts\n\t\t */ }\n  .owl-carousel .owl-item .owl-lazy {\n    opacity: 0;\n    transition: opacity 400ms ease; }\n  .owl-carousel .owl-item .owl-lazy[src^=\"\"], .owl-carousel .owl-item .owl-lazy:not([src]) {\n    max-height: 0; }\n  .owl-carousel .owl-item img.owl-lazy {\n    transform-style: preserve-3d; }\n\n/*\n * \tOwl Carousel - Video Plugin\n */\n.owl-carousel .owl-video-wrapper {\n  position: relative;\n  height: 100%;\n  background: #000; }\n\n.owl-carousel .owl-video-play-icon {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  margin-top: -40px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  cursor: pointer;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  transition: transform 100ms ease; }\n\n.owl-carousel .owl-video-play-icon:hover {\n  transform: scale(1.3, 1.3); }\n\n.owl-carousel .owl-video-playing .owl-video-tn,\n.owl-carousel .owl-video-playing .owl-video-play-icon {\n  display: none; }\n\n.owl-carousel .owl-video-tn {\n  opacity: 0;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: opacity 400ms ease; }\n\n.owl-carousel .owl-video-frame {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  width: 100%; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/owl.carousel/dist/assets/owl.theme.default.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/owl.carousel/dist/assets/owl.theme.default.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Owl Carousel v2.3.4\n * Copyright 2013-2018 David Deutsch\n * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE\n */\n/*\n * \tDefault theme - Owl Carousel CSS File\n */\n.owl-theme .owl-nav {\n  margin-top: 10px;\n  text-align: center;\n  -webkit-tap-highlight-color: transparent; }\n  .owl-theme .owl-nav [class*='owl-'] {\n    color: #FFF;\n    font-size: 14px;\n    margin: 5px;\n    padding: 4px 7px;\n    background: #D6D6D6;\n    display: inline-block;\n    cursor: pointer;\n    border-radius: 3px; }\n    .owl-theme .owl-nav [class*='owl-']:hover {\n      background: #869791;\n      color: #FFF;\n      text-decoration: none; }\n  .owl-theme .owl-nav .disabled {\n    opacity: 0.5;\n    cursor: default; }\n\n.owl-theme .owl-nav.disabled + .owl-dots {\n  margin-top: 10px; }\n\n.owl-theme .owl-dots {\n  text-align: center;\n  -webkit-tap-highlight-color: transparent; }\n  .owl-theme .owl-dots .owl-dot {\n    display: inline-block;\n    zoom: 1;\n    *display: inline; }\n    .owl-theme .owl-dots .owl-dot span {\n      width: 10px;\n      height: 10px;\n      margin: 5px 7px;\n      background: #D6D6D6;\n      display: block;\n      -webkit-backface-visibility: visible;\n      transition: opacity 200ms ease;\n      border-radius: 30px; }\n    .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {\n      background: #869791; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/member/components/home/Home.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/member/components/home/Home.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_assets_css_poppins_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../assets/css/poppins.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./resources/assets/css/poppins.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_sky_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/img/sky-bg.jpg */ "./resources/assets/img/sky-bg.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_assets_css_poppins_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_sky_bg_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-landing-page {\n  font-family: Poppins, sans-serif;\n}\n\nsection {\n  z-index: 1;\n  position: relative;\n}\n\n.section-spacing--top {\n  padding-top: 100px;\n}\n\n.section-spacing--bottom {\n  padding-bottom: 100px;\n}\n\n.section-spacing--no-item {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.section-header-row-spacing {\n  margin-bottom: 28px;\n}\n\n.section-width {\n  width: 75%;\n}\n@media (max-width: 992px) {\n  .section-width {\n    width: 100%;\n  }\n}\n\n.bg-light-section, .about-us, .popular-book, .upcoming-event {\n  background-color: #e8e8e8;\n}\n\n.text-description {\n  color: #828282;\n}\n\n.text-description--landing {\n  color: #eceaea;\n}\n\n.h-100 {\n  height: 100%;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n/*\n*-----------\nheader style\n------------*\n*/\n.header {\n  left: 0;\n  right: 0;\n  z-index: 5;\n  background-color: #151515;\n}\n\n.header__logo {\n  max-height: 70px;\n}\n\n.header .navbar-brand {\n  color: #ffffff;\n}\n\n.header .nav-link {\n  color: #858694;\n  transition: all 0.3s ease;\n}\n\n.header .nav-link:hover {\n  color: #ffffff;\n}\n\n.header .navbar-toggler i {\n  color: #f0f8ff;\n}\n\n/*\n*-----------\nlanding style\n------------*\n*/\n.landing {\n  height: 100vh;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  background: #808080;\n}\n\n.landing__img-overlay {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n}\n\n.landing .owl-carousel__img-box {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n\n.landing .owl-carousel .owl-item .item {\n  position: relative;\n  text-align: center;\n  height: 100vh;\n}\n\n.landing__slider {\n  left: 0;\n  right: 0;\n}\n\n.landing__slider:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 2;\n}\n\n.landing__slider-img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.landing__text-block {\n  padding-top: 50vh;\n  text-align: center;\n  color: white;\n  position: relative;\n  z-index: 4;\n}\n\n@media (max-width: 992px) {\n  .landing__text-block {\n    padding-top: 20vh;\n  }\n}\n@media (min-width: 993px) and (max-width: 1900px) {\n  .landing__text-block {\n    padding-top: 40vh;\n  }\n}\n.landing__text-block-title {\n  font-size: 52px;\n  font-weight: 700;\n}\n\n@media (max-width: 575px) {\n  .landing__text-block-title {\n    font-size: 32px;\n  }\n}\n.landing__text-block-desc {\n  max-width: 500px;\n  font-size: 18px;\n  margin: auto;\n}\n\n.landing__text-block .nav-tabs .nav-link {\n  color: #656b71;\n}\n\n.landing__text-block .nav-tabs .nav-link.active {\n  border: 0;\n  border-bottom: 1px solid #00c6ff;\n}\n\n.landing__text-block .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-bottom-color: transparent;\n}\n\n.landing__text-block .nav-tabs .nav-item.show .nav-link,\n.landing__text-block .nav-tabs .nav-link.active {\n  color: #00c6ff;\n  border-bottom-color: #00c6ff;\n}\n\n.landing-search-box {\n  max-width: 500px;\n  margin: auto;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 4px;\n}\n.landing-search-box .nav-link {\n  height: 56px;\n}\n.landing-search-box .form__label {\n  vertical-align: initial;\n  position: relative;\n  top: 4px;\n}\n\n.landing-search-box .tab-pane.fade.active {\n  opacity: 1;\n}\n\n.landing-search-box .nav.nav-tabs a:hover {\n  text-decoration: none;\n}\n\n.landing-search-box .tab-content {\n  padding: 15px;\n}\n\n.landing-search-box .tab-content input {\n  height: 40px !important;\n  border: 1px solid #00c6ff;\n  width: 100%;\n  padding-left: 10px;\n  border-radius: 4px 0 0 4px;\n  outline: none;\n}\n\n.landing-search-box__search-icon {\n  box-shadow: 0 0 0 0 #aaaaaa;\n  color: white;\n  cursor: pointer;\n  height: 40px;\n  min-width: 80px;\n  width: 80px;\n  background: #00c6ff;\n  border-radius: 0 4px 4px 0;\n  padding: 5px;\n}\n\n.landing-search-box__search-icon i {\n  vertical-align: middle;\n}\n\n/*\n*---------\nBook search page style\n----------\n*/\n.book-search {\n  background: #ffffff;\n}\n.book-search .page-link {\n  color: #000000;\n}\n.book-search__result-heading {\n  font-size: 15px;\n}\n.book-search__book-name {\n  font-size: 18px;\n}\n.book-search .book-search-card-container:nth-child(2n+1) .book-search-card:hover {\n  box-shadow: 0 0 20px rgba(93, 216, 211, 0.5);\n}\n.book-search .book-search-card-container:nth-child(2n+2) .book-search-card:hover {\n  box-shadow: 0 0 20px rgba(147, 100, 212, 0.5);\n}\n@media (max-width: 575px) {\n  .book-search .book-search-card-row {\n    flex-flow: column;\n  }\n}\n.book-search .book-search-card {\n  margin-bottom: 30px;\n  border: 0;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n.book-search .book-search-card:hover {\n  transform: translateY(-10px);\n}\n.book-search .book-search-card .card-text {\n  font-size: 15px;\n}\n.book-search .book-search-card__publisher.card-text {\n  font-size: 13px;\n}\n.book-search .book-search-card__col-left {\n  width: 100%;\n  max-width: 153px;\n}\n@media (max-width: 575px) {\n  .book-search .book-search-card__col-left {\n    max-width: initial;\n    padding: 20px;\n  }\n  .book-search .book-search-card__col-left img {\n    width: initial;\n    display: block;\n    margin: auto;\n  }\n}\n.book-search .book-search-card__col-right {\n  max-width: calc(100% - 153px);\n  width: 100%;\n}\n.book-search .book-search-card__col-right .card-body {\n  padding: 1.25rem 1.25rem 0 1.25rem;\n}\n@media (max-width: 575px) {\n  .book-search .book-search-card__col-right {\n    max-width: initial;\n  }\n}\n\n.book-detail-modal .modal-header .close {\n  color: #000000;\n}\n.book-detail-modal__media {\n  min-width: 157px;\n}\n@media (max-width: 991px) {\n  .book-detail-modal__media {\n    margin-bottom: 24px;\n  }\n  .book-detail-modal__media img {\n    display: block;\n    margin: auto;\n  }\n}\n.book-detail-modal__media img {\n  width: initial;\n}\n.book-detail-modal__detail-title {\n  min-width: 110px;\n}\n\n/*\n*------------\nabout us style\n------------*\n*/\n.about-us__box-col:nth-child(1) i {\n  color: #5dd8d3;\n}\n\n.about-us__box-col:nth-child(2) i {\n  color: #9364D4;\n}\n\n.about-us__box-col:nth-child(3) i {\n  color: #EE539B;\n}\n\n.about-us__box-col:nth-child(4) i {\n  color: #FDDD6E;\n}\n\n.about-us__box-col:nth-child(5) i {\n  color: #5dd8d3;\n}\n\n.about-us__box-col:nth-child(6) i {\n  color: #9364D4;\n}\n\n.about-us__box {\n  background-color: white;\n  padding: 24px;\n  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.01);\n}\n\n.about-us__box h4 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.about-us__box p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.about-us__box .fa {\n  font-size: 43px;\n}\n\n/*\n*-------------\ncategory  style\n-------------*\n*/\n.category {\n  background-color: white;\n}\n\n.category__box {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d3d3d3;\n  border-radius: 4px;\n  padding-top: 30px;\n  margin-bottom: 30px;\n}\n\n.category__box-icon-wrapper {\n  transform: rotate(45deg);\n  width: 70px;\n  height: 70px;\n  background-color: gray;\n  margin: auto;\n  border-radius: 8px;\n}\n\n.category__box-icon {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.category__box-icon i {\n  font-size: 27px;\n  color: #ffffff;\n}\n\n.category__box hr {\n  margin: 30px 0 0;\n}\n\n.category__box-title {\n  padding: 25px 0;\n}\n\n/*\n*-----------------\npopular book style\n-----------------*\n*/\n.popular-book {\n  color: white;\n}\n.popular-book__item-box {\n  background-color: #545454;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  text-transform: uppercase;\n  height: 350px;\n  position: relative;\n}\n.popular-book__item-box .book-name {\n  height: 51px;\n  position: fixed;\n  font-size: 14px;\n  background: #aba9a9f0;\n  color: black;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding-top: 3px;\n  font-weight: bold;\n}\n\n.popular-book__container {\n  position: relative;\n  z-index: 3;\n}\n\n.popular-book__bg {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  position: absolute;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.popular-book__bg:before {\n  position: absolute;\n  content: \"\";\n  background-color: rgba(0, 0, 255, 0.3);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n\n.popular-book__title {\n  letter-spacing: 5px;\n  word-spacing: 10px;\n}\n\n.popular-book__book-item-slider-wrapper {\n  min-width: 0;\n}\n\n.popular-book .owl-nav {\n  display: none;\n}\n\n/*\n*------------------\nmeet our staff style\n------------------*\n*/\n.meet-out-staff {\n  background: white;\n}\n\n.meet-out-staff .owl-item:nth-child(even) img {\n  order: 2;\n}\n\n.meet-out-staff .owl-item:nth-child(even) hr {\n  order: 1;\n  margin-top: 0;\n}\n\n.meet-out-staff .owl-item:nth-child(even) p {\n  margin-bottom: 32px;\n}\n\n/*\n*-------------------\nupcoming event style\n-------------------*\n*/\n.upcoming-event .media {\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n}\n\n/*\n*--------------------\nwhat people say style\n--------------------*\n*/\n.what-people-say__bg {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n\n.what-people-say__bg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.what-people-say__bg:before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.what-people-say__content {\n  position: relative;\n  color: white;\n  z-index: 4;\n}\n\n.what-people-say__slider-section {\n  max-width: 700px;\n}\n\n.what-people-say__slider-avatar {\n  width: 100px;\n  height: 100px;\n  border: 2px solid white;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  background: #7d68f0;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n}\n.what-people-say__slider-avatar span {\n  font-size: 25px;\n  color: #FFF;\n}\n\n.what-people-say__slider-avatar img {\n  height: 100%;\n  overflow: hidden;\n  width: auto !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n}\n\n/*\n*-----------\nfooter style\n------------\n*/\n.footer {\n  position: sticky;\n  bottom: 0;\n  z-index: 0;\n  font-size: 17px;\n}\n.footer__link {\n  text-decoration: none;\n}\n.footer__link:hover {\n  text-decoration: underline;\n}\n\n.footer a {\n  color: black !important;\n}\n\n.footer .borderless td, .footer .borderless th {\n  border: none;\n}\n.card-img {\n  height: 231px;\n}\n\n.book-form__filter-by {\n  display: flex;\n  align-items: baseline;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/components/Component.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/components/Component.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.control {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n\n.control input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.control__indicator {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n}\n\n.control:hover input ~ .control__indicator,\n.control input:focus ~ .control__indicator {\n  background: #ccc;\n}\n\n.control input:checked ~ .control__indicator {\n  background: #00C6FF;\n}\n\n.control:hover input:not([disabled]):checked ~ .control__indicator,\n.control input:checked:focus ~ .control__indicator {\n  background: #00C6FF;\n}\n\n.control input:disabled ~ .control__indicator {\n  background: #e6e6e6;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.control__indicator:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.control input:checked ~ .control__indicator:after {\n  display: block;\n}\n\n.control--checkbox .control__indicator:after {\n  left: 7px;\n  top: 4px;\n  width: 5px;\n  height: 10px;\n  border: solid #FFF;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.control--checkbox input:disabled ~ .control__indicator:after {\n  border-color: #7b7b7b;\n}\n\n.toggle-label {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 5px;\n  margin-right: 24px;\n}\n@media (max-width: 330px) {\n  .toggle-label {\n    margin-right: 17px;\n  }\n}\n\n.rbt-input-multi .rbt-input-hint-container {\n  display: inline-block !important;\n}\n\n.rbt-input-multi .rbt-input-wrapper {\n  margin-top: 5px !important;\n}\n\n.rbt-input {\n  height: auto;\n  min-height: 45px;\n}\n\n.input-form-group {\n  margin-bottom: 0 !important;\n}\n\n.rbt-input-hint {\n  top: 5px !important;\n}\n\n.react-datepicker-wrapper {\n  width: 86%;\n}\n\n.react-datepicker__input-container {\n  width: 100%;\n}\n.react-datepicker__input-container input {\n  width: 108%;\n  text-indent: 12px;\n  border-radius: unset !important;\n  border: 1px solid #e4e7ea;\n}\n\n.form__radio {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  display: inline-block;\n  position: relative;\n  background-color: #f1f1f1;\n  color: #666;\n  top: 10px;\n  height: 22px;\n  width: 22px;\n  border: 0;\n  border-radius: 50px;\n  cursor: pointer;\n  margin-right: 7px;\n  outline: none;\n}\n.form__label {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  vertical-align: sub;\n}\n\n.form__radio:checked::before {\n  position: absolute;\n  font: 12px/1 \"Open Sans\", sans-serif;\n  left: 7px;\n  top: 4px;\n  content: \"⅃\";\n  color: #FFF;\n  transform: rotate(40deg);\n}\n\n.form__radio:hover {\n  background-color: #f7f7f7;\n}\n\n.form__radio:checked {\n  background-color: #00C6FF;\n}\n\n.react-select .input-group-text {\n  width: 38px;\n}\n.react-select__input {\n  width: calc(100% - 38px);\n}\n.react-select__input input {\n  height: auto;\n}\n.react-select__input--primary {\n  min-height: 43px;\n}\n.react-select__input--primary .css-1hwfws3,\n.react-select__input--primary .css-1fhf3k1-control,\n.react-select__input--primary .css-yk16xz-control {\n  min-height: 43px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.react-select__input--secondary {\n  min-height: 38px;\n}\n.react-select__input--secondary .css-1hwfws3,\n.react-select__input--secondary .css-1fhf3k1-control,\n.react-select__input--secondary .css-yk16xz-control {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.react-select__input .css-1ml51p6-MenuList div {\n  cursor: pointer;\n}\n.react-select__input .css-26l3qy-menu, .react-select__input .css-1w9j89e-menu {\n  z-index: 1234;\n}\n\n.custom-input-search input {\n  height: 38px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.react-img-cropper__img {\n  max-width: 100%;\n}\n\nhtml[dir=rtl] .modal-header .close {\n  margin: 0;\n  padding: 0;\n}\nhtml[dir=rtl] .modal-footer > :not(:last-child) {\n  margin-left: 10px;\n}\n\n@media (max-width: 400px) {\n  .date-picker-input {\n    flex-wrap: unset;\n  }\n}\n\n@media (max-width: 400px) {\n  .react-datepicker__input-container input {\n    width: 100%;\n  }\n}\n\n.byOelf div:first-child {\n  overflow: visible !important;\n}\n\n.byOelf {\n  padding-left: 32px !important;\n}\n\n.form-switch-lg .form-check-input {\n  width: 3em;\n  height: 1.75em;\n  margin-left: -3.25em;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./resources/assets/css/poppins.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./resources/assets/css/poppins.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_poppins_poppins_v9_latin_regular_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-regular.eot */ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.eot");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-regular.woff2 */ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.woff2");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_regular_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-regular.woff */ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.woff");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-regular.ttf */ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.ttf");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_regular_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-regular.svg */ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.svg");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_500_eot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-500.eot */ "./resources/assets/fonts/poppins/poppins-v9-latin-500.eot");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_500_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-500.woff2 */ "./resources/assets/fonts/poppins/poppins-v9-latin-500.woff2");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_500_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-500.woff */ "./resources/assets/fonts/poppins/poppins-v9-latin-500.woff");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_500_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-500.ttf */ "./resources/assets/fonts/poppins/poppins-v9-latin-500.ttf");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_500_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-500.svg */ "./resources/assets/fonts/poppins/poppins-v9-latin-500.svg");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_700_eot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-700.eot */ "./resources/assets/fonts/poppins/poppins-v9-latin-700.eot");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_700_woff2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-700.woff2 */ "./resources/assets/fonts/poppins/poppins-v9-latin-700.woff2");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_700_woff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-700.woff */ "./resources/assets/fonts/poppins/poppins-v9-latin-700.woff");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_700_ttf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-700.ttf */ "./resources/assets/fonts/poppins/poppins-v9-latin-700.ttf");
/* harmony import */ var _fonts_poppins_poppins_v9_latin_700_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fonts/poppins/poppins-v9-latin-700.svg */ "./resources/assets/fonts/poppins/poppins-v9-latin-700.svg");
// Imports

















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_regular_eot__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_regular_eot__WEBPACK_IMPORTED_MODULE_2__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_regular_woff2__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_regular_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_regular_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_regular_svg__WEBPACK_IMPORTED_MODULE_6__["default"], { hash: "#Poppins" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_500_eot__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_500_eot__WEBPACK_IMPORTED_MODULE_7__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_500_woff2__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_500_ttf__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_500_svg__WEBPACK_IMPORTED_MODULE_11__["default"], { hash: "#Poppins" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_700_eot__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_700_eot__WEBPACK_IMPORTED_MODULE_12__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_700_woff2__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_700_woff__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_700_ttf__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_poppins_poppins_v9_latin_700_svg__WEBPACK_IMPORTED_MODULE_16__["default"], { hash: "#Poppins" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* poppins-regular - latin */\n@font-face {\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local('Poppins Regular'), local('Poppins-Regular'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n}\n/* poppins-500 - latin */\n@font-face {\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 500;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n    src: local('Poppins Medium'), local('Poppins-Medium'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('embedded-opentype'), /* IE6-IE8 */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'), /* Super Modern Browsers */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff'), /* Modern Browsers */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('truetype'), /* Safari, Android, iOS */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n}\n/* poppins-700 - latin */\n@font-face {\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 700;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE9 Compat Modes */\n    src: local('Poppins Bold'), local('Poppins-Bold'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'), /* IE6-IE8 */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'), /* Super Modern Browsers */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format('woff'), /* Modern Browsers */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format('truetype'), /* Safari, Android, iOS */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format('svg'); /* Legacy iOS */\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/owl.carousel/dist/assets/owl.video.play.png":
/*!******************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.video.play.png ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/vendor/owl.carousel/dist/owl.video.play.png?7f01b07148f205f6e8258e92bbf652d9");

/***/ }),

/***/ "./resources/assets/img/sky-bg.jpg":
/*!*****************************************!*\
  !*** ./resources/assets/img/sky-bg.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/sky-bg.jpg?c80e48af80b85506281a34e2c09ed494");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-500.eot":
/*!*****************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-500.eot ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-500.eot?cf75a7f143e2e2c582c125840a660ba7");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-500.svg":
/*!*****************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-500.svg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-500.svg?59cbebb515fdae18edff05b4db9426e3");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-500.ttf":
/*!*****************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-500.ttf ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-500.ttf?a12ca12bb6f61a241fb1de3fcae3cb8e");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-500.woff":
/*!******************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-500.woff ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-500.woff?9cce51605ae9e0a9357a6e0c822f38c6");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-500.woff2":
/*!*******************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-500.woff2 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-500.woff2?b79065b4eb96ef52df7c12db0c2ae3f5");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-700.eot":
/*!*****************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-700.eot ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-700.eot?cdf90dba3593d39f61d394b42b2eab52");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-700.svg":
/*!*****************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-700.svg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-700.svg?e45393831e7425a232ec91cd2e23cfc3");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-700.ttf":
/*!*****************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-700.ttf ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-700.ttf?5e64a197e9ef7e18e0ae09b2331f9d58");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-700.woff":
/*!******************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-700.woff ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-700.woff?f4b97733bc584fb5cfba39be5aa76342");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-700.woff2":
/*!*******************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-700.woff2 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-700.woff2?c42d83a607aac6b2d4225ae46ea33599");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.eot":
/*!*********************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-regular.eot ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-regular.eot?4747bd2214b475fbb299cc0a8eceeb6b");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.svg":
/*!*********************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-regular.svg ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-regular.svg?6ac2478e09848662914bf8178f25afdf");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.ttf":
/*!*********************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-regular.ttf ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-regular.ttf?12a774c768b48a28e8707d618822aa3e");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.woff":
/*!**********************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-regular.woff ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-regular.woff?e78693354999fe502e16d2a47bf68e1d");

/***/ }),

/***/ "./resources/assets/fonts/poppins/poppins-v9-latin-regular.woff2":
/*!***********************************************************************!*\
  !*** ./resources/assets/fonts/poppins/poppins-v9-latin-regular.woff2 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/poppins-v9-latin-regular.woff2?5224cd4c8d93efc4fd95dfdeb613ab05");

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

/***/ "./node_modules/owl.carousel/dist/assets/owl.carousel.css":
/*!****************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.carousel.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_owl_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!../../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./owl.carousel.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/owl.carousel/dist/assets/owl.carousel.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_owl_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_owl_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css":
/*!*********************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.theme.default.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!../../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./owl.theme.default.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/owl.carousel/dist/assets/owl.theme.default.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/lms/src/member/components/home/Home.scss":
/*!************************************************************!*\
  !*** ./resources/lms/src/member/components/home/Home.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./Home.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/member/components/home/Home.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Home_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Home_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/lms/src/shared/components/Component.scss":
/*!************************************************************!*\
  !*** ./resources/lms/src/shared/components/Component.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./Component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/components/Component.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Component_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Component_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/cjs/react.development.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-owl-carousel/node_modules/react/cjs/react.development.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-owl-carousel/node_modules/react/index.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react-owl-carousel/node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react-owl-carousel/umd/OwlCarousel.js":
/*!************************************************************!*\
  !*** ./node_modules/react-owl-carousel/umd/OwlCarousel.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
     true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react-owl-carousel/node_modules/react/index.js")) :
    0;
}(this, (function (React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    /**
     * Owl Carousel v2.3.4
     * Copyright 2013-2018 David Deutsch
     * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
     */
    (function($, window, document, undefined) {

    	/**
    	 * Creates a carousel.
    	 * @class The Owl Carousel.
    	 * @public
    	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
    	 * @param {Object} [options] - The options
    	 */
    	function Owl(element, options) {

    		/**
    		 * Current settings for the carousel.
    		 * @public
    		 */
    		this.settings = null;

    		/**
    		 * Current options set by the caller including defaults.
    		 * @public
    		 */
    		this.options = $.extend({}, Owl.Defaults, options);

    		/**
    		 * Plugin element.
    		 * @public
    		 */
    		this.$element = $(element);

    		/**
    		 * Proxied event handlers.
    		 * @protected
    		 */
    		this._handlers = {};

    		/**
    		 * References to the running plugins of this carousel.
    		 * @protected
    		 */
    		this._plugins = {};

    		/**
    		 * Currently suppressed events to prevent them from being retriggered.
    		 * @protected
    		 */
    		this._supress = {};

    		/**
    		 * Absolute current position.
    		 * @protected
    		 */
    		this._current = null;

    		/**
    		 * Animation speed in milliseconds.
    		 * @protected
    		 */
    		this._speed = null;

    		/**
    		 * Coordinates of all items in pixel.
    		 * @todo The name of this member is missleading.
    		 * @protected
    		 */
    		this._coordinates = [];

    		/**
    		 * Current breakpoint.
    		 * @todo Real media queries would be nice.
    		 * @protected
    		 */
    		this._breakpoint = null;

    		/**
    		 * Current width of the plugin element.
    		 */
    		this._width = null;

    		/**
    		 * All real items.
    		 * @protected
    		 */
    		this._items = [];

    		/**
    		 * All cloned items.
    		 * @protected
    		 */
    		this._clones = [];

    		/**
    		 * Merge values of all items.
    		 * @todo Maybe this could be part of a plugin.
    		 * @protected
    		 */
    		this._mergers = [];

    		/**
    		 * Widths of all items.
    		 */
    		this._widths = [];

    		/**
    		 * Invalidated parts within the update process.
    		 * @protected
    		 */
    		this._invalidated = {};

    		/**
    		 * Ordered list of workers for the update process.
    		 * @protected
    		 */
    		this._pipe = [];

    		/**
    		 * Current state information for the drag operation.
    		 * @todo #261
    		 * @protected
    		 */
    		this._drag = {
    			time: null,
    			target: null,
    			pointer: null,
    			stage: {
    				start: null,
    				current: null
    			},
    			direction: null
    		};

    		/**
    		 * Current state information and their tags.
    		 * @type {Object}
    		 * @protected
    		 */
    		this._states = {
    			current: {},
    			tags: {
    				'initializing': [ 'busy' ],
    				'animating': [ 'busy' ],
    				'dragging': [ 'interacting' ]
    			}
    		};

    		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
    			this._handlers[handler] = $.proxy(this[handler], this);
    		}, this));

    		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
    			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
    				= new plugin(this);
    		}, this));

    		$.each(Owl.Workers, $.proxy(function(priority, worker) {
    			this._pipe.push({
    				'filter': worker.filter,
    				'run': $.proxy(worker.run, this)
    			});
    		}, this));

    		this.setup();
    		this.initialize();
    	}

    	/**
    	 * Default options for the carousel.
    	 * @public
    	 */
    	Owl.Defaults = {
    		items: 3,
    		loop: false,
    		center: false,
    		rewind: false,
    		checkVisibility: true,

    		mouseDrag: true,
    		touchDrag: true,
    		pullDrag: true,
    		freeDrag: false,

    		margin: 0,
    		stagePadding: 0,

    		merge: false,
    		mergeFit: true,
    		autoWidth: false,

    		startPosition: 0,
    		rtl: false,

    		smartSpeed: 250,
    		fluidSpeed: false,
    		dragEndSpeed: false,

    		responsive: {},
    		responsiveRefreshRate: 200,
    		responsiveBaseElement: window,

    		fallbackEasing: 'swing',
    		slideTransition: '',

    		info: false,

    		nestedItemSelector: false,
    		itemElement: 'div',
    		stageElement: 'div',

    		refreshClass: 'owl-refresh',
    		loadedClass: 'owl-loaded',
    		loadingClass: 'owl-loading',
    		rtlClass: 'owl-rtl',
    		responsiveClass: 'owl-responsive',
    		dragClass: 'owl-drag',
    		itemClass: 'owl-item',
    		stageClass: 'owl-stage',
    		stageOuterClass: 'owl-stage-outer',
    		grabClass: 'owl-grab'
    	};

    	/**
    	 * Enumeration for width.
    	 * @public
    	 * @readonly
    	 * @enum {String}
    	 */
    	Owl.Width = {
    		Default: 'default',
    		Inner: 'inner',
    		Outer: 'outer'
    	};

    	/**
    	 * Enumeration for types.
    	 * @public
    	 * @readonly
    	 * @enum {String}
    	 */
    	Owl.Type = {
    		Event: 'event',
    		State: 'state'
    	};

    	/**
    	 * Contains all registered plugins.
    	 * @public
    	 */
    	Owl.Plugins = {};

    	/**
    	 * List of workers involved in the update process.
    	 */
    	Owl.Workers = [ {
    		filter: [ 'width', 'settings' ],
    		run: function() {
    			this._width = this.$element.width();
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			cache.current = this._items && this._items[this.relative(this._current)];
    		}
    	}, {
    		filter: [ 'items', 'settings' ],
    		run: function() {
    			this.$stage.children('.cloned').remove();
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var margin = this.settings.margin || '',
    				grid = !this.settings.autoWidth,
    				rtl = this.settings.rtl,
    				css = {
    					'width': 'auto',
    					'margin-left': rtl ? margin : '',
    					'margin-right': rtl ? '' : margin
    				};

    			!grid && this.$stage.children().css(css);

    			cache.css = css;
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
    				merge = null,
    				iterator = this._items.length,
    				grid = !this.settings.autoWidth,
    				widths = [];

    			cache.items = {
    				merge: false,
    				width: width
    			};

    			while (iterator--) {
    				merge = this._mergers[iterator];
    				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

    				cache.items.merge = merge > 1 || cache.items.merge;

    				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
    			}

    			this._widths = widths;
    		}
    	}, {
    		filter: [ 'items', 'settings' ],
    		run: function() {
    			var clones = [],
    				items = this._items,
    				settings = this.settings,
    				// TODO: Should be computed from number of min width items in stage
    				view = Math.max(settings.items * 2, 4),
    				size = Math.ceil(items.length / 2) * 2,
    				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
    				append = '',
    				prepend = '';

    			repeat /= 2;

    			while (repeat > 0) {
    				// Switch to only using appended clones
    				clones.push(this.normalize(clones.length / 2, true));
    				append = append + items[clones[clones.length - 1]][0].outerHTML;
    				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
    				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
    				repeat -= 1;
    			}

    			this._clones = clones;

    			$(append).addClass('cloned').appendTo(this.$stage);
    			$(prepend).addClass('cloned').prependTo(this.$stage);
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function() {
    			var rtl = this.settings.rtl ? 1 : -1,
    				size = this._clones.length + this._items.length,
    				iterator = -1,
    				previous = 0,
    				current = 0,
    				coordinates = [];

    			while (++iterator < size) {
    				previous = coordinates[iterator - 1] || 0;
    				current = this._widths[this.relative(iterator)] + this.settings.margin;
    				coordinates.push(previous + current * rtl);
    			}

    			this._coordinates = coordinates;
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function() {
    			var padding = this.settings.stagePadding,
    				coordinates = this._coordinates,
    				css = {
    					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
    					'padding-left': padding || '',
    					'padding-right': padding || ''
    				};

    			this.$stage.css(css);
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var iterator = this._coordinates.length,
    				grid = !this.settings.autoWidth,
    				items = this.$stage.children();

    			if (grid && cache.items.merge) {
    				while (iterator--) {
    					cache.css.width = this._widths[this.relative(iterator)];
    					items.eq(iterator).css(cache.css);
    				}
    			} else if (grid) {
    				cache.css.width = cache.items.width;
    				items.css(cache.css);
    			}
    		}
    	}, {
    		filter: [ 'items' ],
    		run: function() {
    			this._coordinates.length < 1 && this.$stage.removeAttr('style');
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
    			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
    			this.reset(cache.current);
    		}
    	}, {
    		filter: [ 'position' ],
    		run: function() {
    			this.animate(this.coordinates(this._current));
    		}
    	}, {
    		filter: [ 'width', 'position', 'items', 'settings' ],
    		run: function() {
    			var rtl = this.settings.rtl ? 1 : -1,
    				padding = this.settings.stagePadding * 2,
    				begin = this.coordinates(this.current()) + padding,
    				end = begin + this.width() * rtl,
    				inner, outer, matches = [], i, n;

    			for (i = 0, n = this._coordinates.length; i < n; i++) {
    				inner = this._coordinates[i - 1] || 0;
    				outer = Math.abs(this._coordinates[i]) + padding * rtl;

    				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
    					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
    					matches.push(i);
    				}
    			}

    			this.$stage.children('.active').removeClass('active');
    			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

    			this.$stage.children('.center').removeClass('center');
    			if (this.settings.center) {
    				this.$stage.children().eq(this.current()).addClass('center');
    			}
    		}
    	} ];

    	/**
    	 * Create the stage DOM element
    	 */
    	Owl.prototype.initializeStage = function() {
    		this.$stage = this.$element.find('.' + this.settings.stageClass);

    		// if the stage is already in the DOM, grab it and skip stage initialization
    		if (this.$stage.length) {
    			return;
    		}

    		this.$element.addClass(this.options.loadingClass);

    		// create stage
    		this.$stage = $('<' + this.settings.stageElement + '>', {
    			"class": this.settings.stageClass
    		}).wrap( $( '<div/>', {
    			"class": this.settings.stageOuterClass
    		}));

    		// append stage
    		this.$element.append(this.$stage.parent());
    	};

    	/**
    	 * Create item DOM elements
    	 */
    	Owl.prototype.initializeItems = function() {
    		var $items = this.$element.find('.owl-item');

    		// if the items are already in the DOM, grab them and skip item initialization
    		if ($items.length) {
    			this._items = $items.get().map(function(item) {
    				return $(item);
    			});

    			this._mergers = this._items.map(function() {
    				return 1;
    			});

    			this.refresh();

    			return;
    		}

    		// append content
    		this.replace(this.$element.children().not(this.$stage.parent()));

    		// check visibility
    		if (this.isVisible()) {
    			// update view
    			this.refresh();
    		} else {
    			// invalidate width
    			this.invalidate('width');
    		}

    		this.$element
    			.removeClass(this.options.loadingClass)
    			.addClass(this.options.loadedClass);
    	};

    	/**
    	 * Initializes the carousel.
    	 * @protected
    	 */
    	Owl.prototype.initialize = function() {
    		this.enter('initializing');
    		this.trigger('initialize');

    		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

    		if (this.settings.autoWidth && !this.is('pre-loading')) {
    			var imgs, nestedSelector, width;
    			imgs = this.$element.find('img');
    			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
    			width = this.$element.children(nestedSelector).width();

    			if (imgs.length && width <= 0) {
    				this.preloadAutoWidthImages(imgs);
    			}
    		}

    		this.initializeStage();
    		this.initializeItems();

    		// register event handlers
    		this.registerEventHandlers();

    		this.leave('initializing');
    		this.trigger('initialized');
    	};

    	/**
    	 * @returns {Boolean} visibility of $element
    	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
    	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
    	 */
    	Owl.prototype.isVisible = function() {
    		return this.settings.checkVisibility
    			? this.$element.is(':visible')
    			: true;
    	};

    	/**
    	 * Setups the current settings.
    	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
    	 * @todo Support for media queries by using `matchMedia` would be nice.
    	 * @public
    	 */
    	Owl.prototype.setup = function() {
    		var viewport = this.viewport(),
    			overwrites = this.options.responsive,
    			match = -1,
    			settings = null;

    		if (!overwrites) {
    			settings = $.extend({}, this.options);
    		} else {
    			$.each(overwrites, function(breakpoint) {
    				if (breakpoint <= viewport && breakpoint > match) {
    					match = Number(breakpoint);
    				}
    			});

    			settings = $.extend({}, this.options, overwrites[match]);
    			if (typeof settings.stagePadding === 'function') {
    				settings.stagePadding = settings.stagePadding();
    			}
    			delete settings.responsive;

    			// responsive class
    			if (settings.responsiveClass) {
    				this.$element.attr('class',
    					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
    				);
    			}
    		}

    		this.trigger('change', { property: { name: 'settings', value: settings } });
    		this._breakpoint = match;
    		this.settings = settings;
    		this.invalidate('settings');
    		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    	};

    	/**
    	 * Updates option logic if necessery.
    	 * @protected
    	 */
    	Owl.prototype.optionsLogic = function() {
    		if (this.settings.autoWidth) {
    			this.settings.stagePadding = false;
    			this.settings.merge = false;
    		}
    	};

    	/**
    	 * Prepares an item before add.
    	 * @todo Rename event parameter `content` to `item`.
    	 * @protected
    	 * @returns {jQuery|HTMLElement} - The item container.
    	 */
    	Owl.prototype.prepare = function(item) {
    		var event = this.trigger('prepare', { content: item });

    		if (!event.data) {
    			event.data = $('<' + this.settings.itemElement + '/>')
    				.addClass(this.options.itemClass).append(item);
    		}

    		this.trigger('prepared', { content: event.data });

    		return event.data;
    	};

    	/**
    	 * Updates the view.
    	 * @public
    	 */
    	Owl.prototype.update = function() {
    		var i = 0,
    			n = this._pipe.length,
    			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
    			cache = {};

    		while (i < n) {
    			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
    				this._pipe[i].run(cache);
    			}
    			i++;
    		}

    		this._invalidated = {};

    		!this.is('valid') && this.enter('valid');
    	};

    	/**
    	 * Gets the width of the view.
    	 * @public
    	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
    	 * @returns {Number} - The width of the view in pixel.
    	 */
    	Owl.prototype.width = function(dimension) {
    		dimension = dimension || Owl.Width.Default;
    		switch (dimension) {
    			case Owl.Width.Inner:
    			case Owl.Width.Outer:
    				return this._width;
    			default:
    				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    		}
    	};

    	/**
    	 * Refreshes the carousel primarily for adaptive purposes.
    	 * @public
    	 */
    	Owl.prototype.refresh = function() {
    		this.enter('refreshing');
    		this.trigger('refresh');

    		this.setup();

    		this.optionsLogic();

    		this.$element.addClass(this.options.refreshClass);

    		this.update();

    		this.$element.removeClass(this.options.refreshClass);

    		this.leave('refreshing');
    		this.trigger('refreshed');
    	};

    	/**
    	 * Checks window `resize` event.
    	 * @protected
    	 */
    	Owl.prototype.onThrottledResize = function() {
    		window.clearTimeout(this.resizeTimer);
    		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    	};

    	/**
    	 * Checks window `resize` event.
    	 * @protected
    	 */
    	Owl.prototype.onResize = function() {
    		if (!this._items.length) {
    			return false;
    		}

    		if (this._width === this.$element.width()) {
    			return false;
    		}

    		if (!this.isVisible()) {
    			return false;
    		}

    		this.enter('resizing');

    		if (this.trigger('resize').isDefaultPrevented()) {
    			this.leave('resizing');
    			return false;
    		}

    		this.invalidate('width');

    		this.refresh();

    		this.leave('resizing');
    		this.trigger('resized');
    	};

    	/**
    	 * Registers event handlers.
    	 * @todo Check `msPointerEnabled`
    	 * @todo #261
    	 * @protected
    	 */
    	Owl.prototype.registerEventHandlers = function() {
    		if ($.support.transition) {
    			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
    		}

    		if (this.settings.responsive !== false) {
    			this.on(window, 'resize', this._handlers.onThrottledResize);
    		}

    		if (this.settings.mouseDrag) {
    			this.$element.addClass(this.options.dragClass);
    			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
    			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
    		}

    		if (this.settings.touchDrag){
    			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
    			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    		}
    	};

    	/**
    	 * Handles `touchstart` and `mousedown` events.
    	 * @todo Horizontal swipe threshold as option
    	 * @todo #261
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragStart = function(event) {
    		var stage = null;

    		if (event.which === 3) {
    			return;
    		}

    		if ($.support.transform) {
    			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
    			stage = {
    				x: stage[stage.length === 16 ? 12 : 4],
    				y: stage[stage.length === 16 ? 13 : 5]
    			};
    		} else {
    			stage = this.$stage.position();
    			stage = {
    				x: this.settings.rtl ?
    					stage.left + this.$stage.width() - this.width() + this.settings.margin :
    					stage.left,
    				y: stage.top
    			};
    		}

    		if (this.is('animating')) {
    			$.support.transform ? this.animate(stage.x) : this.$stage.stop();
    			this.invalidate('position');
    		}

    		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

    		this.speed(0);

    		this._drag.time = new Date().getTime();
    		this._drag.target = $(event.target);
    		this._drag.stage.start = stage;
    		this._drag.stage.current = stage;
    		this._drag.pointer = this.pointer(event);

    		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

    		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
    			var delta = this.difference(this._drag.pointer, this.pointer(event));

    			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

    			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
    				return;
    			}

    			event.preventDefault();

    			this.enter('dragging');
    			this.trigger('drag');
    		}, this));
    	};

    	/**
    	 * Handles the `touchmove` and `mousemove` events.
    	 * @todo #261
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragMove = function(event) {
    		var minimum = null,
    			maximum = null,
    			pull = null,
    			delta = this.difference(this._drag.pointer, this.pointer(event)),
    			stage = this.difference(this._drag.stage.start, delta);

    		if (!this.is('dragging')) {
    			return;
    		}

    		event.preventDefault();

    		if (this.settings.loop) {
    			minimum = this.coordinates(this.minimum());
    			maximum = this.coordinates(this.maximum() + 1) - minimum;
    			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
    		} else {
    			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
    			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
    			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
    			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    		}

    		this._drag.stage.current = stage;

    		this.animate(stage.x);
    	};

    	/**
    	 * Handles the `touchend` and `mouseup` events.
    	 * @todo #261
    	 * @todo Threshold for click event
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragEnd = function(event) {
    		var delta = this.difference(this._drag.pointer, this.pointer(event)),
    			stage = this._drag.stage.current,
    			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

    		$(document).off('.owl.core');

    		this.$element.removeClass(this.options.grabClass);

    		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
    			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
    			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
    			this.invalidate('position');
    			this.update();

    			this._drag.direction = direction;

    			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
    				this._drag.target.one('click.owl.core', function() { return false; });
    			}
    		}

    		if (!this.is('dragging')) {
    			return;
    		}

    		this.leave('dragging');
    		this.trigger('dragged');
    	};

    	/**
    	 * Gets absolute position of the closest item for a coordinate.
    	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
    	 * @protected
    	 * @param {Number} coordinate - The coordinate in pixel.
    	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
    	 * @return {Number} - The absolute position of the closest item.
    	 */
    	Owl.prototype.closest = function(coordinate, direction) {
    		var position = -1,
    			pull = 30,
    			width = this.width(),
    			coordinates = this.coordinates();

    		if (!this.settings.freeDrag) {
    			// check closest item
    			$.each(coordinates, $.proxy(function(index, value) {
    				// on a left pull, check on current index
    				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
    					position = index;
    				// on a right pull, check on previous index
    				// to do so, subtract width from value and set position = index + 1
    				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
    					position = index + 1;
    				} else if (this.op(coordinate, '<', value)
    					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
    					position = direction === 'left' ? index + 1 : index;
    				}
    				return position === -1;
    			}, this));
    		}

    		if (!this.settings.loop) {
    			// non loop boundries
    			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
    				position = coordinate = this.minimum();
    			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
    				position = coordinate = this.maximum();
    			}
    		}

    		return position;
    	};

    	/**
    	 * Animates the stage.
    	 * @todo #270
    	 * @public
    	 * @param {Number} coordinate - The coordinate in pixels.
    	 */
    	Owl.prototype.animate = function(coordinate) {
    		var animate = this.speed() > 0;

    		this.is('animating') && this.onTransitionEnd();

    		if (animate) {
    			this.enter('animating');
    			this.trigger('translate');
    		}

    		if ($.support.transform3d && $.support.transition) {
    			this.$stage.css({
    				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
    				transition: (this.speed() / 1000) + 's' + (
    					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
    				)
    			});
    		} else if (animate) {
    			this.$stage.animate({
    				left: coordinate + 'px'
    			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
    		} else {
    			this.$stage.css({
    				left: coordinate + 'px'
    			});
    		}
    	};

    	/**
    	 * Checks whether the carousel is in a specific state or not.
    	 * @param {String} state - The state to check.
    	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
    	 */
    	Owl.prototype.is = function(state) {
    		return this._states.current[state] && this._states.current[state] > 0;
    	};

    	/**
    	 * Sets the absolute position of the current item.
    	 * @public
    	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
    	 * @returns {Number} - The absolute position of the current item.
    	 */
    	Owl.prototype.current = function(position) {
    		if (position === undefined) {
    			return this._current;
    		}

    		if (this._items.length === 0) {
    			return undefined;
    		}

    		position = this.normalize(position);

    		if (this._current !== position) {
    			var event = this.trigger('change', { property: { name: 'position', value: position } });

    			if (event.data !== undefined) {
    				position = this.normalize(event.data);
    			}

    			this._current = position;

    			this.invalidate('position');

    			this.trigger('changed', { property: { name: 'position', value: this._current } });
    		}

    		return this._current;
    	};

    	/**
    	 * Invalidates the given part of the update routine.
    	 * @param {String} [part] - The part to invalidate.
    	 * @returns {Array.<String>} - The invalidated parts.
    	 */
    	Owl.prototype.invalidate = function(part) {
    		if ($.type(part) === 'string') {
    			this._invalidated[part] = true;
    			this.is('valid') && this.leave('valid');
    		}
    		return $.map(this._invalidated, function(v, i) { return i });
    	};

    	/**
    	 * Resets the absolute position of the current item.
    	 * @public
    	 * @param {Number} position - The absolute position of the new item.
    	 */
    	Owl.prototype.reset = function(position) {
    		position = this.normalize(position);

    		if (position === undefined) {
    			return;
    		}

    		this._speed = 0;
    		this._current = position;

    		this.suppress([ 'translate', 'translated' ]);

    		this.animate(this.coordinates(position));

    		this.release([ 'translate', 'translated' ]);
    	};

    	/**
    	 * Normalizes an absolute or a relative position of an item.
    	 * @public
    	 * @param {Number} position - The absolute or relative position to normalize.
    	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
    	 * @returns {Number} - The normalized position.
    	 */
    	Owl.prototype.normalize = function(position, relative) {
    		var n = this._items.length,
    			m = relative ? 0 : this._clones.length;

    		if (!this.isNumeric(position) || n < 1) {
    			position = undefined;
    		} else if (position < 0 || position >= n + m) {
    			position = ((position - m / 2) % n + n) % n + m / 2;
    		}

    		return position;
    	};

    	/**
    	 * Converts an absolute position of an item into a relative one.
    	 * @public
    	 * @param {Number} position - The absolute position to convert.
    	 * @returns {Number} - The converted position.
    	 */
    	Owl.prototype.relative = function(position) {
    		position -= this._clones.length / 2;
    		return this.normalize(position, true);
    	};

    	/**
    	 * Gets the maximum position for the current item.
    	 * @public
    	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
    	 * @returns {Number}
    	 */
    	Owl.prototype.maximum = function(relative) {
    		var settings = this.settings,
    			maximum = this._coordinates.length,
    			iterator,
    			reciprocalItemsWidth,
    			elementWidth;

    		if (settings.loop) {
    			maximum = this._clones.length / 2 + this._items.length - 1;
    		} else if (settings.autoWidth || settings.merge) {
    			iterator = this._items.length;
    			if (iterator) {
    				reciprocalItemsWidth = this._items[--iterator].width();
    				elementWidth = this.$element.width();
    				while (iterator--) {
    					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
    					if (reciprocalItemsWidth > elementWidth) {
    						break;
    					}
    				}
    			}
    			maximum = iterator + 1;
    		} else if (settings.center) {
    			maximum = this._items.length - 1;
    		} else {
    			maximum = this._items.length - settings.items;
    		}

    		if (relative) {
    			maximum -= this._clones.length / 2;
    		}

    		return Math.max(maximum, 0);
    	};

    	/**
    	 * Gets the minimum position for the current item.
    	 * @public
    	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
    	 * @returns {Number}
    	 */
    	Owl.prototype.minimum = function(relative) {
    		return relative ? 0 : this._clones.length / 2;
    	};

    	/**
    	 * Gets an item at the specified relative position.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
    	 */
    	Owl.prototype.items = function(position) {
    		if (position === undefined) {
    			return this._items.slice();
    		}

    		position = this.normalize(position, true);
    		return this._items[position];
    	};

    	/**
    	 * Gets an item at the specified relative position.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
    	 */
    	Owl.prototype.mergers = function(position) {
    		if (position === undefined) {
    			return this._mergers.slice();
    		}

    		position = this.normalize(position, true);
    		return this._mergers[position];
    	};

    	/**
    	 * Gets the absolute positions of clones for an item.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
    	 */
    	Owl.prototype.clones = function(position) {
    		var odd = this._clones.length / 2,
    			even = odd + this._items.length,
    			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

    		if (position === undefined) {
    			return $.map(this._clones, function(v, i) { return map(i) });
    		}

    		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    	};

    	/**
    	 * Sets the current animation speed.
    	 * @public
    	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
    	 * @returns {Number} - The current animation speed in milliseconds.
    	 */
    	Owl.prototype.speed = function(speed) {
    		if (speed !== undefined) {
    			this._speed = speed;
    		}

    		return this._speed;
    	};

    	/**
    	 * Gets the coordinate of an item.
    	 * @todo The name of this method is missleanding.
    	 * @public
    	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
    	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
    	 */
    	Owl.prototype.coordinates = function(position) {
    		var multiplier = 1,
    			newPosition = position - 1,
    			coordinate;

    		if (position === undefined) {
    			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
    				return this.coordinates(index);
    			}, this));
    		}

    		if (this.settings.center) {
    			if (this.settings.rtl) {
    				multiplier = -1;
    				newPosition = position + 1;
    			}

    			coordinate = this._coordinates[position];
    			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    		} else {
    			coordinate = this._coordinates[newPosition] || 0;
    		}

    		coordinate = Math.ceil(coordinate);

    		return coordinate;
    	};

    	/**
    	 * Calculates the speed for a translation.
    	 * @protected
    	 * @param {Number} from - The absolute position of the start item.
    	 * @param {Number} to - The absolute position of the target item.
    	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
    	 * @returns {Number} - The time in milliseconds for the translation.
    	 */
    	Owl.prototype.duration = function(from, to, factor) {
    		if (factor === 0) {
    			return 0;
    		}

    		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    	};

    	/**
    	 * Slides to the specified item.
    	 * @public
    	 * @param {Number} position - The position of the item.
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.to = function(position, speed) {
    		var current = this.current(),
    			revert = null,
    			distance = position - this.relative(current),
    			direction = (distance > 0) - (distance < 0),
    			items = this._items.length,
    			minimum = this.minimum(),
    			maximum = this.maximum();

    		if (this.settings.loop) {
    			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
    				distance += direction * -1 * items;
    			}

    			position = current + distance;
    			revert = ((position - minimum) % items + items) % items + minimum;

    			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
    				current = revert - distance;
    				position = revert;
    				this.reset(current);
    			}
    		} else if (this.settings.rewind) {
    			maximum += 1;
    			position = (position % maximum + maximum) % maximum;
    		} else {
    			position = Math.max(minimum, Math.min(maximum, position));
    		}

    		this.speed(this.duration(current, position, speed));
    		this.current(position);

    		if (this.isVisible()) {
    			this.update();
    		}
    	};

    	/**
    	 * Slides to the next item.
    	 * @public
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.next = function(speed) {
    		speed = speed || false;
    		this.to(this.relative(this.current()) + 1, speed);
    	};

    	/**
    	 * Slides to the previous item.
    	 * @public
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.prev = function(speed) {
    		speed = speed || false;
    		this.to(this.relative(this.current()) - 1, speed);
    	};

    	/**
    	 * Handles the end of an animation.
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onTransitionEnd = function(event) {

    		// if css2 animation then event object is undefined
    		if (event !== undefined) {
    			event.stopPropagation();

    			// Catch only owl-stage transitionEnd event
    			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
    				return false;
    			}
    		}

    		this.leave('animating');
    		this.trigger('translated');
    	};

    	/**
    	 * Gets viewport width.
    	 * @protected
    	 * @return {Number} - The width in pixel.
    	 */
    	Owl.prototype.viewport = function() {
    		var width;
    		if (this.options.responsiveBaseElement !== window) {
    			width = $(this.options.responsiveBaseElement).width();
    		} else if (window.innerWidth) {
    			width = window.innerWidth;
    		} else if (document.documentElement && document.documentElement.clientWidth) {
    			width = document.documentElement.clientWidth;
    		} else {
    			console.warn('Can not detect viewport width.');
    		}
    		return width;
    	};

    	/**
    	 * Replaces the current content.
    	 * @public
    	 * @param {HTMLElement|jQuery|String} content - The new content.
    	 */
    	Owl.prototype.replace = function(content) {
    		this.$stage.empty();
    		this._items = [];

    		if (content) {
    			content = (content instanceof jQuery) ? content : $(content);
    		}

    		if (this.settings.nestedItemSelector) {
    			content = content.find('.' + this.settings.nestedItemSelector);
    		}

    		content.filter(function() {
    			return this.nodeType === 1;
    		}).each($.proxy(function(index, item) {
    			item = this.prepare(item);
    			this.$stage.append(item);
    			this._items.push(item);
    			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		}, this));

    		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

    		this.invalidate('items');
    	};

    	/**
    	 * Adds an item.
    	 * @todo Use `item` instead of `content` for the event arguments.
    	 * @public
    	 * @param {HTMLElement|jQuery|String} content - The item content to add.
    	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
    	 */
    	Owl.prototype.add = function(content, position) {
    		var current = this.relative(this._current);

    		position = position === undefined ? this._items.length : this.normalize(position, true);
    		content = content instanceof jQuery ? content : $(content);

    		this.trigger('add', { content: content, position: position });

    		content = this.prepare(content);

    		if (this._items.length === 0 || position === this._items.length) {
    			this._items.length === 0 && this.$stage.append(content);
    			this._items.length !== 0 && this._items[position - 1].after(content);
    			this._items.push(content);
    			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		} else {
    			this._items[position].before(content);
    			this._items.splice(position, 0, content);
    			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		}

    		this._items[current] && this.reset(this._items[current].index());

    		this.invalidate('items');

    		this.trigger('added', { content: content, position: position });
    	};

    	/**
    	 * Removes an item by its position.
    	 * @todo Use `item` instead of `content` for the event arguments.
    	 * @public
    	 * @param {Number} position - The relative position of the item to remove.
    	 */
    	Owl.prototype.remove = function(position) {
    		position = this.normalize(position, true);

    		if (position === undefined) {
    			return;
    		}

    		this.trigger('remove', { content: this._items[position], position: position });

    		this._items[position].remove();
    		this._items.splice(position, 1);
    		this._mergers.splice(position, 1);

    		this.invalidate('items');

    		this.trigger('removed', { content: null, position: position });
    	};

    	/**
    	 * Preloads images with auto width.
    	 * @todo Replace by a more generic approach
    	 * @protected
    	 */
    	Owl.prototype.preloadAutoWidthImages = function(images) {
    		images.each($.proxy(function(i, element) {
    			this.enter('pre-loading');
    			element = $(element);
    			$(new Image()).one('load', $.proxy(function(e) {
    				element.attr('src', e.target.src);
    				element.css('opacity', 1);
    				this.leave('pre-loading');
    				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
    			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
    		}, this));
    	};

    	/**
    	 * Destroys the carousel.
    	 * @public
    	 */
    	Owl.prototype.destroy = function() {

    		this.$element.off('.owl.core');
    		this.$stage.off('.owl.core');
    		$(document).off('.owl.core');

    		if (this.settings.responsive !== false) {
    			window.clearTimeout(this.resizeTimer);
    			this.off(window, 'resize', this._handlers.onThrottledResize);
    		}

    		for (var i in this._plugins) {
    			this._plugins[i].destroy();
    		}

    		this.$stage.children('.cloned').remove();

    		this.$stage.unwrap();
    		this.$stage.children().contents().unwrap();
    		this.$stage.children().unwrap();
    		this.$stage.remove();
    		this.$element
    			.removeClass(this.options.refreshClass)
    			.removeClass(this.options.loadingClass)
    			.removeClass(this.options.loadedClass)
    			.removeClass(this.options.rtlClass)
    			.removeClass(this.options.dragClass)
    			.removeClass(this.options.grabClass)
    			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
    			.removeData('owl.carousel');
    	};

    	/**
    	 * Operators to calculate right-to-left and left-to-right.
    	 * @protected
    	 * @param {Number} [a] - The left side operand.
    	 * @param {String} [o] - The operator.
    	 * @param {Number} [b] - The right side operand.
    	 */
    	Owl.prototype.op = function(a, o, b) {
    		var rtl = this.settings.rtl;
    		switch (o) {
    			case '<':
    				return rtl ? a > b : a < b;
    			case '>':
    				return rtl ? a < b : a > b;
    			case '>=':
    				return rtl ? a <= b : a >= b;
    			case '<=':
    				return rtl ? a >= b : a <= b;
    			default:
    				break;
    		}
    	};

    	/**
    	 * Attaches to an internal event.
    	 * @protected
    	 * @param {HTMLElement} element - The event source.
    	 * @param {String} event - The event name.
    	 * @param {Function} listener - The event handler to attach.
    	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
    	 */
    	Owl.prototype.on = function(element, event, listener, capture) {
    		if (element.addEventListener) {
    			element.addEventListener(event, listener, capture);
    		} else if (element.attachEvent) {
    			element.attachEvent('on' + event, listener);
    		}
    	};

    	/**
    	 * Detaches from an internal event.
    	 * @protected
    	 * @param {HTMLElement} element - The event source.
    	 * @param {String} event - The event name.
    	 * @param {Function} listener - The attached event handler to detach.
    	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
    	 */
    	Owl.prototype.off = function(element, event, listener, capture) {
    		if (element.removeEventListener) {
    			element.removeEventListener(event, listener, capture);
    		} else if (element.detachEvent) {
    			element.detachEvent('on' + event, listener);
    		}
    	};

    	/**
    	 * Triggers a public event.
    	 * @todo Remove `status`, `relatedTarget` should be used instead.
    	 * @protected
    	 * @param {String} name - The event name.
    	 * @param {*} [data=null] - The event data.
    	 * @param {String} [namespace=carousel] - The event namespace.
    	 * @param {String} [state] - The state which is associated with the event.
    	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
    	 * @returns {Event} - The event arguments.
    	 */
    	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
    		var status = {
    			item: { count: this._items.length, index: this.current() }
    		}, handler = $.camelCase(
    			$.grep([ 'on', name, namespace ], function(v) { return v })
    				.join('-').toLowerCase()
    		), event = $.Event(
    			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
    			$.extend({ relatedTarget: this }, status, data)
    		);

    		if (!this._supress[name]) {
    			$.each(this._plugins, function(name, plugin) {
    				if (plugin.onTrigger) {
    					plugin.onTrigger(event);
    				}
    			});

    			this.register({ type: Owl.Type.Event, name: name });
    			this.$element.trigger(event);

    			if (this.settings && typeof this.settings[handler] === 'function') {
    				this.settings[handler].call(this, event);
    			}
    		}

    		return event;
    	};

    	/**
    	 * Enters a state.
    	 * @param name - The state name.
    	 */
    	Owl.prototype.enter = function(name) {
    		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
    			if (this._states.current[name] === undefined) {
    				this._states.current[name] = 0;
    			}

    			this._states.current[name]++;
    		}, this));
    	};

    	/**
    	 * Leaves a state.
    	 * @param name - The state name.
    	 */
    	Owl.prototype.leave = function(name) {
    		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
    			this._states.current[name]--;
    		}, this));
    	};

    	/**
    	 * Registers an event or state.
    	 * @public
    	 * @param {Object} object - The event or state to register.
    	 */
    	Owl.prototype.register = function(object) {
    		if (object.type === Owl.Type.Event) {
    			if (!$.event.special[object.name]) {
    				$.event.special[object.name] = {};
    			}

    			if (!$.event.special[object.name].owl) {
    				var _default = $.event.special[object.name]._default;
    				$.event.special[object.name]._default = function(e) {
    					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
    						return _default.apply(this, arguments);
    					}
    					return e.namespace && e.namespace.indexOf('owl') > -1;
    				};
    				$.event.special[object.name].owl = true;
    			}
    		} else if (object.type === Owl.Type.State) {
    			if (!this._states.tags[object.name]) {
    				this._states.tags[object.name] = object.tags;
    			} else {
    				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
    			}

    			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
    				return $.inArray(tag, this._states.tags[object.name]) === i;
    			}, this));
    		}
    	};

    	/**
    	 * Suppresses events.
    	 * @protected
    	 * @param {Array.<String>} events - The events to suppress.
    	 */
    	Owl.prototype.suppress = function(events) {
    		$.each(events, $.proxy(function(index, event) {
    			this._supress[event] = true;
    		}, this));
    	};

    	/**
    	 * Releases suppressed events.
    	 * @protected
    	 * @param {Array.<String>} events - The events to release.
    	 */
    	Owl.prototype.release = function(events) {
    		$.each(events, $.proxy(function(index, event) {
    			delete this._supress[event];
    		}, this));
    	};

    	/**
    	 * Gets unified pointer coordinates from event.
    	 * @todo #261
    	 * @protected
    	 * @param {Event} - The `mousedown` or `touchstart` event.
    	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
    	 */
    	Owl.prototype.pointer = function(event) {
    		var result = { x: null, y: null };

    		event = event.originalEvent || event || window.event;

    		event = event.touches && event.touches.length ?
    			event.touches[0] : event.changedTouches && event.changedTouches.length ?
    				event.changedTouches[0] : event;

    		if (event.pageX) {
    			result.x = event.pageX;
    			result.y = event.pageY;
    		} else {
    			result.x = event.clientX;
    			result.y = event.clientY;
    		}

    		return result;
    	};

    	/**
    	 * Determines if the input is a Number or something that can be coerced to a Number
    	 * @protected
    	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
    	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
    	 */
    	Owl.prototype.isNumeric = function(number) {
    		return !isNaN(parseFloat(number));
    	};

    	/**
    	 * Gets the difference of two vectors.
    	 * @todo #261
    	 * @protected
    	 * @param {Object} - The first vector.
    	 * @param {Object} - The second vector.
    	 * @returns {Object} - The difference.
    	 */
    	Owl.prototype.difference = function(first, second) {
    		return {
    			x: first.x - second.x,
    			y: first.y - second.y
    		};
    	};

    	/**
    	 * The jQuery Plugin for the Owl Carousel
    	 * @todo Navigation plugin `next` and `prev`
    	 * @public
    	 */
    	$.fn.owlCarousel = function(option) {
    		var args = Array.prototype.slice.call(arguments, 1);

    		return this.each(function() {
    			var $this = $(this),
    				data = $this.data('owl.carousel');

    			if (!data) {
    				data = new Owl(this, typeof option == 'object' && option);
    				$this.data('owl.carousel', data);

    				$.each([
    					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
    				], function(i, event) {
    					data.register({ type: Owl.Type.Event, name: event });
    					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
    						if (e.namespace && e.relatedTarget !== this) {
    							this.suppress([ event ]);
    							data[event].apply(this, [].slice.call(arguments, 1));
    							this.release([ event ]);
    						}
    					}, data));
    				});
    			}

    			if (typeof option == 'string' && option.charAt(0) !== '_') {
    				data[option].apply(data, args);
    			}
    		});
    	};

    	/**
    	 * The constructor for the jQuery Plugin
    	 * @public
    	 */
    	$.fn.owlCarousel.Constructor = Owl;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the auto refresh plugin.
    	 * @class The Auto Refresh Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var AutoRefresh = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Refresh interval.
    		 * @protected
    		 * @type {number}
    		 */
    		this._interval = null;

    		/**
    		 * Whether the element is currently visible or not.
    		 * @protected
    		 * @type {Boolean}
    		 */
    		this._visible = null;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoRefresh) {
    					this.watch();
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	AutoRefresh.Defaults = {
    		autoRefresh: true,
    		autoRefreshInterval: 500
    	};

    	/**
    	 * Watches the element.
    	 */
    	AutoRefresh.prototype.watch = function() {
    		if (this._interval) {
    			return;
    		}

    		this._visible = this._core.isVisible();
    		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    	};

    	/**
    	 * Refreshes the element.
    	 */
    	AutoRefresh.prototype.refresh = function() {
    		if (this._core.isVisible() === this._visible) {
    			return;
    		}

    		this._visible = !this._visible;

    		this._core.$element.toggleClass('owl-hidden', !this._visible);

    		this._visible && (this._core.invalidate('width') && this._core.refresh());
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	AutoRefresh.prototype.destroy = function() {
    		var handler, property;

    		window.clearInterval(this._interval);

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the lazy plugin.
    	 * @class The Lazy Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Lazy = function(carousel) {

    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Already loaded items.
    		 * @protected
    		 * @type {Array.<jQuery>}
    		 */
    		this._loaded = [];

    		/**
    		 * Event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
    				if (!e.namespace) {
    					return;
    				}

    				if (!this._core.settings || !this._core.settings.lazyLoad) {
    					return;
    				}

    				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
    					var settings = this._core.settings,
    						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
    						i = ((settings.center && n * -1) || 0),
    						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
    						clones = this._core.clones().length,
    						load = $.proxy(function(i, v) { this.load(v); }, this);
    					//TODO: Need documentation for this new option
    					if (settings.lazyLoadEager > 0) {
    						n += settings.lazyLoadEager;
    						// If the carousel is looping also preload images that are to the "left"
    						if (settings.loop) {
                  position -= settings.lazyLoadEager;
                  n++;
                }
    					}

    					while (i++ < n) {
    						this.load(clones / 2 + this._core.relative(position));
    						clones && $.each(this._core.clones(this._core.relative(position)), load);
    						position++;
    					}
    				}
    			}, this)
    		};

    		// set the default options
    		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

    		// register event handler
    		this._core.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Lazy.Defaults = {
    		lazyLoad: false,
    		lazyLoadEager: 0
    	};

    	/**
    	 * Loads all resources of an item at the specified position.
    	 * @param {Number} position - The absolute position of the item.
    	 * @protected
    	 */
    	Lazy.prototype.load = function(position) {
    		var $item = this._core.$stage.children().eq(position),
    			$elements = $item && $item.find('.owl-lazy');

    		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
    			return;
    		}

    		$elements.each($.proxy(function(index, element) {
    			var $element = $(element), image,
                    url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

    			this._core.trigger('load', { element: $element, url: url }, 'lazy');

    			if ($element.is('img')) {
    				$element.one('load.owl.lazy', $.proxy(function() {
    					$element.css('opacity', 1);
    					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
    				}, this)).attr('src', url);
                } else if ($element.is('source')) {
                    $element.one('load.owl.lazy', $.proxy(function() {
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this)).attr('srcset', url);
    			} else {
    				image = new Image();
    				image.onload = $.proxy(function() {
    					$element.css({
    						'background-image': 'url("' + url + '")',
    						'opacity': '1'
    					});
    					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
    				}, this);
    				image.src = url;
    			}
    		}, this));

    		this._loaded.push($item.get(0));
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Lazy.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this.handlers) {
    			this._core.$element.off(handler, this.handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the auto height plugin.
    	 * @class The Auto Height Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var AutoHeight = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		this._previousHeight = null;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight) {
    					this.update();
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
    					this.update();
    				}
    			}, this),
    			'loaded.owl.lazy': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight
    					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
    					this.update();
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);
    		this._intervalId = null;
    		var refThis = this;

    		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
    		// and have been made compatible with the latest jQuery version
    		$(window).on('load', function() {
    			if (refThis._core.settings.autoHeight) {
    				refThis.update();
    			}
    		});

    		// Autoresize the height of the carousel when window is resized
    		// When carousel has images, the height is dependent on the width
    		// and should also change on resize
    		$(window).resize(function() {
    			if (refThis._core.settings.autoHeight) {
    				if (refThis._intervalId != null) {
    					clearTimeout(refThis._intervalId);
    				}

    				refThis._intervalId = setTimeout(function() {
    					refThis.update();
    				}, 250);
    			}
    		});

    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	AutoHeight.Defaults = {
    		autoHeight: false,
    		autoHeightClass: 'owl-height'
    	};

    	/**
    	 * Updates the view.
    	 */
    	AutoHeight.prototype.update = function() {
    		var start = this._core._current,
    			end = start + this._core.settings.items,
    			lazyLoadEnabled = this._core.settings.lazyLoad,
    			visible = this._core.$stage.children().toArray().slice(start, end),
    			heights = [],
    			maxheight = 0;

    		$.each(visible, function(index, item) {
    			heights.push($(item).height());
    		});

    		maxheight = Math.max.apply(null, heights);

    		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
    			maxheight = this._previousHeight;
    		}

    		this._previousHeight = maxheight;

    		this._core.$stage.parent()
    			.height(maxheight)
    			.addClass(this._core.settings.autoHeightClass);
    	};

    	AutoHeight.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] !== 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the video plugin.
    	 * @class The Video Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Video = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Cache all video URLs.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._videos = {};

    		/**
    		 * Current playing item.
    		 * @protected
    		 * @type {jQuery}
    		 */
    		this._playing = null;

    		/**
    		 * All event handlers.
    		 * @todo The cloned content removale is too late
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
    				}
    			}, this),
    			'resize.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
    					e.preventDefault();
    				}
    			}, this),
    			'refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.is('resizing')) {
    					this._core.$stage.find('.cloned .owl-video-frame').remove();
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'position' && this._playing) {
    					this.stop();
    				}
    			}, this),
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (!e.namespace) {
    					return;
    				}

    				var $element = $(e.content).find('.owl-video');

    				if ($element.length) {
    					$element.css('display', 'none');
    					this.fetch($element, $(e.content));
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Video.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);

    		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
    			this.play(e);
    		}, this));
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Video.Defaults = {
    		video: false,
    		videoHeight: false,
    		videoWidth: false
    	};

    	/**
    	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
    	 * @protected
    	 * @param {jQuery} target - The target containing the video data.
    	 * @param {jQuery} item - The item containing the video.
    	 */
    	Video.prototype.fetch = function(target, item) {
    			var type = (function() {
    					if (target.attr('data-vimeo-id')) {
    						return 'vimeo';
    					} else if (target.attr('data-vzaar-id')) {
    						return 'vzaar'
    					} else {
    						return 'youtube';
    					}
    				})(),
    				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
    				width = target.attr('data-width') || this._core.settings.videoWidth,
    				height = target.attr('data-height') || this._core.settings.videoHeight,
    				url = target.attr('href');

    		if (url) {

    			/*
    					Parses the id's out of the following urls (and probably more):
    					https://www.youtube.com/watch?v=:id
    					https://youtu.be/:id
    					https://vimeo.com/:id
    					https://vimeo.com/channels/:channel/:id
    					https://vimeo.com/groups/:group/videos/:id
    					https://app.vzaar.com/videos/:id

    					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
    			*/

    			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

    			if (id[3].indexOf('youtu') > -1) {
    				type = 'youtube';
    			} else if (id[3].indexOf('vimeo') > -1) {
    				type = 'vimeo';
    			} else if (id[3].indexOf('vzaar') > -1) {
    				type = 'vzaar';
    			} else {
    				throw new Error('Video URL not supported.');
    			}
    			id = id[6];
    		} else {
    			throw new Error('Missing video URL.');
    		}

    		this._videos[url] = {
    			type: type,
    			id: id,
    			width: width,
    			height: height
    		};

    		item.attr('data-video', url);

    		this.thumbnail(target, this._videos[url]);
    	};

    	/**
    	 * Creates video thumbnail.
    	 * @protected
    	 * @param {jQuery} target - The target containing the video data.
    	 * @param {Object} info - The video info object.
    	 * @see `fetch`
    	 */
    	Video.prototype.thumbnail = function(target, video) {
    		var tnLink,
    			icon,
    			path,
    			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
    			customTn = target.find('img'),
    			srcType = 'src',
    			lazyClass = '',
    			settings = this._core.settings,
    			create = function(path) {
    				icon = '<div class="owl-video-play-icon"></div>';

    				if (settings.lazyLoad) {
    					tnLink = $('<div/>',{
    						"class": 'owl-video-tn ' + lazyClass,
    						"srcType": path
    					});
    				} else {
    					tnLink = $( '<div/>', {
    						"class": "owl-video-tn",
    						"style": 'opacity:1;background-image:url(' + path + ')'
    					});
    				}
    				target.after(tnLink);
    				target.after(icon);
    			};

    		// wrap video content into owl-video-wrapper div
    		target.wrap( $( '<div/>', {
    			"class": "owl-video-wrapper",
    			"style": dimensions
    		}));

    		if (this._core.settings.lazyLoad) {
    			srcType = 'data-src';
    			lazyClass = 'owl-lazy';
    		}

    		// custom thumbnail
    		if (customTn.length) {
    			create(customTn.attr(srcType));
    			customTn.remove();
    			return false;
    		}

    		if (video.type === 'youtube') {
    			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
    			create(path);
    		} else if (video.type === 'vimeo') {
    			$.ajax({
    				type: 'GET',
    				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
    				jsonp: 'callback',
    				dataType: 'jsonp',
    				success: function(data) {
    					path = data[0].thumbnail_large;
    					create(path);
    				}
    			});
    		} else if (video.type === 'vzaar') {
    			$.ajax({
    				type: 'GET',
    				url: '//vzaar.com/api/videos/' + video.id + '.json',
    				jsonp: 'callback',
    				dataType: 'jsonp',
    				success: function(data) {
    					path = data.framegrab_url;
    					create(path);
    				}
    			});
    		}
    	};

    	/**
    	 * Stops the current video.
    	 * @public
    	 */
    	Video.prototype.stop = function() {
    		this._core.trigger('stop', null, 'video');
    		this._playing.find('.owl-video-frame').remove();
    		this._playing.removeClass('owl-video-playing');
    		this._playing = null;
    		this._core.leave('playing');
    		this._core.trigger('stopped', null, 'video');
    	};

    	/**
    	 * Starts the current video.
    	 * @public
    	 * @param {Event} event - The event arguments.
    	 */
    	Video.prototype.play = function(event) {
    		var target = $(event.target),
    			item = target.closest('.' + this._core.settings.itemClass),
    			video = this._videos[item.attr('data-video')],
    			width = video.width || '100%',
    			height = video.height || this._core.$stage.height(),
    			html,
    			iframe;

    		if (this._playing) {
    			return;
    		}

    		this._core.enter('playing');
    		this._core.trigger('play', null, 'video');

    		item = this._core.items(this._core.relative(item.index()));

    		this._core.reset(item.index());

    		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
    		html.attr( 'height', height );
    		html.attr( 'width', width );
    		if (video.type === 'youtube') {
    			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
    		} else if (video.type === 'vimeo') {
    			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
    		} else if (video.type === 'vzaar') {
    			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
    		}

    		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

    		this._playing = item.addClass('owl-video-playing');
    	};

    	/**
    	 * Checks whether an video is currently in full screen mode or not.
    	 * @todo Bad style because looks like a readonly method but changes members.
    	 * @protected
    	 * @returns {Boolean}
    	 */
    	Video.prototype.isInFullScreen = function() {
    		var element = document.fullscreenElement || document.mozFullScreenElement ||
    				document.webkitFullscreenElement;

    		return element && $(element).parent().hasClass('owl-video-frame');
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	Video.prototype.destroy = function() {
    		var handler, property;

    		this._core.$element.off('click.owl.video');

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the animate plugin.
    	 * @class The Navigation Plugin
    	 * @param {Owl} scope - The Owl Carousel
    	 */
    	var Animate = function(scope) {
    		this.core = scope;
    		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    		this.swapping = true;
    		this.previous = undefined;
    		this.next = undefined;

    		this.handlers = {
    			'change.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name == 'position') {
    					this.previous = this.core.current();
    					this.next = e.property.value;
    				}
    			}, this),
    			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					this.swapping = e.type == 'translated';
    				}
    			}, this),
    			'translate.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
    					this.swap();
    				}
    			}, this)
    		};

    		this.core.$element.on(this.handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Animate.Defaults = {
    		animateOut: false,
    		animateIn: false
    	};

    	/**
    	 * Toggles the animation classes whenever an translations starts.
    	 * @protected
    	 * @returns {Boolean|undefined}
    	 */
    	Animate.prototype.swap = function() {

    		if (this.core.settings.items !== 1) {
    			return;
    		}

    		if (!$.support.animation || !$.support.transition) {
    			return;
    		}

    		this.core.speed(0);

    		var left,
    			clear = $.proxy(this.clear, this),
    			previous = this.core.$stage.children().eq(this.previous),
    			next = this.core.$stage.children().eq(this.next),
    			incoming = this.core.settings.animateIn,
    			outgoing = this.core.settings.animateOut;

    		if (this.core.current() === this.previous) {
    			return;
    		}

    		if (outgoing) {
    			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
    			previous.one($.support.animation.end, clear)
    				.css( { 'left': left + 'px' } )
    				.addClass('animated owl-animated-out')
    				.addClass(outgoing);
    		}

    		if (incoming) {
    			next.one($.support.animation.end, clear)
    				.addClass('animated owl-animated-in')
    				.addClass(incoming);
    		}
    	};

    	Animate.prototype.clear = function(e) {
    		$(e.target).css( { 'left': '' } )
    			.removeClass('animated owl-animated-out owl-animated-in')
    			.removeClass(this.core.settings.animateIn)
    			.removeClass(this.core.settings.animateOut);
    		this.core.onTransitionEnd();
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Animate.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this.handlers) {
    			this.core.$element.off(handler, this.handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the autoplay plugin.
    	 * @class The Autoplay Plugin
    	 * @param {Owl} scope - The Owl Carousel
    	 */
    	var Autoplay = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * The autoplay timeout id.
    		 * @type {Number}
    		 */
    		this._call = null;

    		/**
    		 * Depending on the state of the plugin, this variable contains either
    		 * the start time of the timer or the current timer value if it's
    		 * paused. Since we start in a paused state we initialize the timer
    		 * value.
    		 * @type {Number}
    		 */
    		this._time = 0;

    		/**
    		 * Stores the timeout currently used.
    		 * @type {Number}
    		 */
    		this._timeout = 0;

    		/**
    		 * Indicates whenever the autoplay is paused.
    		 * @type {Boolean}
    		 */
    		this._paused = true;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'settings') {
    					if (this._core.settings.autoplay) {
    						this.play();
    					} else {
    						this.stop();
    					}
    				} else if (e.namespace && e.property.name === 'position' && this._paused) {
    					// Reset the timer. This code is triggered when the position
    					// of the carousel was changed through user interaction.
    					this._time = 0;
    				}
    			}, this),
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoplay) {
    					this.play();
    				}
    			}, this),
    			'play.owl.autoplay': $.proxy(function(e, t, s) {
    				if (e.namespace) {
    					this.play(t, s);
    				}
    			}, this),
    			'stop.owl.autoplay': $.proxy(function(e) {
    				if (e.namespace) {
    					this.stop();
    				}
    			}, this),
    			'mouseover.owl.autoplay': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.pause();
    				}
    			}, this),
    			'mouseleave.owl.autoplay': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.play();
    				}
    			}, this),
    			'touchstart.owl.core': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.pause();
    				}
    			}, this),
    			'touchend.owl.core': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause) {
    					this.play();
    				}
    			}, this)
    		};

    		// register event handlers
    		this._core.$element.on(this._handlers);

    		// set default options
    		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Autoplay.Defaults = {
    		autoplay: false,
    		autoplayTimeout: 5000,
    		autoplayHoverPause: false,
    		autoplaySpeed: false
    	};

    	/**
    	 * Transition to the next slide and set a timeout for the next transition.
    	 * @private
    	 * @param {Number} [speed] - The animation speed for the animations.
    	 */
    	Autoplay.prototype._next = function(speed) {
    		this._call = window.setTimeout(
    			$.proxy(this._next, this, speed),
    			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
    		);

    		if (this._core.is('interacting') || document.hidden) {
    			return;
    		}
    		this._core.next(speed || this._core.settings.autoplaySpeed);
    	};

    	/**
    	 * Reads the current timer value when the timer is playing.
    	 * @public
    	 */
    	Autoplay.prototype.read = function() {
    		return new Date().getTime() - this._time;
    	};

    	/**
    	 * Starts the autoplay.
    	 * @public
    	 * @param {Number} [timeout] - The interval before the next animation starts.
    	 * @param {Number} [speed] - The animation speed for the animations.
    	 */
    	Autoplay.prototype.play = function(timeout, speed) {
    		var elapsed;

    		if (!this._core.is('rotating')) {
    			this._core.enter('rotating');
    		}

    		timeout = timeout || this._core.settings.autoplayTimeout;

    		// Calculate the elapsed time since the last transition. If the carousel
    		// wasn't playing this calculation will yield zero.
    		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

    		if (this._paused) {
    			// Start the clock.
    			this._time = this.read();
    			this._paused = false;
    		} else {
    			// Clear the active timeout to allow replacement.
    			window.clearTimeout(this._call);
    		}

    		// Adjust the origin of the timer to match the new timeout value.
    		this._time += this.read() % timeout - elapsed;

    		this._timeout = timeout;
    		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    	};

    	/**
    	 * Stops the autoplay.
    	 * @public
    	 */
    	Autoplay.prototype.stop = function() {
    		if (this._core.is('rotating')) {
    			// Reset the clock.
    			this._time = 0;
    			this._paused = true;

    			window.clearTimeout(this._call);
    			this._core.leave('rotating');
    		}
    	};

    	/**
    	 * Pauses the autoplay.
    	 * @public
    	 */
    	Autoplay.prototype.pause = function() {
    		if (this._core.is('rotating') && !this._paused) {
    			// Pause the clock.
    			this._time = this.read();
    			this._paused = true;

    			window.clearTimeout(this._call);
    		}
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	Autoplay.prototype.destroy = function() {
    		var handler, property;

    		this.stop();

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the navigation plugin.
    	 * @class The Navigation Plugin
    	 * @param {Owl} carousel - The Owl Carousel.
    	 */
    	var Navigation = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Indicates whether the plugin is initialized or not.
    		 * @protected
    		 * @type {Boolean}
    		 */
    		this._initialized = false;

    		/**
    		 * The current paging indexes.
    		 * @protected
    		 * @type {Array}
    		 */
    		this._pages = [];

    		/**
    		 * All DOM elements of the user interface.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._controls = {};

    		/**
    		 * Markup for an indicator.
    		 * @protected
    		 * @type {Array.<String>}
    		 */
    		this._templates = [];

    		/**
    		 * The carousel element.
    		 * @type {jQuery}
    		 */
    		this.$element = this._core.$element;

    		/**
    		 * Overridden methods of the carousel.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._overrides = {
    			next: this._core.next,
    			prev: this._core.prev,
    			to: this._core.to
    		};

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
    						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
    				}
    			}, this),
    			'added.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.splice(e.position, 0, this._templates.pop());
    				}
    			}, this),
    			'remove.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.splice(e.position, 1);
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name == 'position') {
    					this.draw();
    				}
    			}, this),
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && !this._initialized) {
    					this._core.trigger('initialize', null, 'navigation');
    					this.initialize();
    					this.update();
    					this.draw();
    					this._initialized = true;
    					this._core.trigger('initialized', null, 'navigation');
    				}
    			}, this),
    			'refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._initialized) {
    					this._core.trigger('refresh', null, 'navigation');
    					this.update();
    					this.draw();
    					this._core.trigger('refreshed', null, 'navigation');
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

    		// register event handlers
    		this.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 * @todo Rename `slideBy` to `navBy`
    	 */
    	Navigation.Defaults = {
    		nav: false,
    		navText: [
    			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
    			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
    		],
    		navSpeed: false,
    		navElement: 'button type="button" role="presentation"',
    		navContainer: false,
    		navContainerClass: 'owl-nav',
    		navClass: [
    			'owl-prev',
    			'owl-next'
    		],
    		slideBy: 1,
    		dotClass: 'owl-dot',
    		dotsClass: 'owl-dots',
    		dots: true,
    		dotsEach: false,
    		dotsData: false,
    		dotsSpeed: false,
    		dotsContainer: false
    	};

    	/**
    	 * Initializes the layout of the plugin and extends the carousel.
    	 * @protected
    	 */
    	Navigation.prototype.initialize = function() {
    		var override,
    			settings = this._core.settings;

    		// create DOM structure for relative navigation
    		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
    			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

    		this._controls.$previous = $('<' + settings.navElement + '>')
    			.addClass(settings.navClass[0])
    			.html(settings.navText[0])
    			.prependTo(this._controls.$relative)
    			.on('click', $.proxy(function(e) {
    				this.prev(settings.navSpeed);
    			}, this));
    		this._controls.$next = $('<' + settings.navElement + '>')
    			.addClass(settings.navClass[1])
    			.html(settings.navText[1])
    			.appendTo(this._controls.$relative)
    			.on('click', $.proxy(function(e) {
    				this.next(settings.navSpeed);
    			}, this));

    		// create DOM structure for absolute navigation
    		if (!settings.dotsData) {
    			this._templates = [ $('<button role="button">')
    				.addClass(settings.dotClass)
    				.append($('<span>'))
    				.prop('outerHTML') ];
    		}

    		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
    			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

    		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
    			var index = $(e.target).parent().is(this._controls.$absolute)
    				? $(e.target).index() : $(e.target).parent().index();

    			e.preventDefault();

    			this.to(index, settings.dotsSpeed);
    		}, this));

    		/*$el.on('focusin', function() {
    			$(document).off(".carousel");

    			$(document).on('keydown.carousel', function(e) {
    				if(e.keyCode == 37) {
    					$el.trigger('prev.owl')
    				}
    				if(e.keyCode == 39) {
    					$el.trigger('next.owl')
    				}
    			});
    		});*/

    		// override public methods of the carousel
    		for (override in this._overrides) {
    			this._core[override] = $.proxy(this[override], this);
    		}
    	};

    	/**
    	 * Destroys the plugin.
    	 * @protected
    	 */
    	Navigation.prototype.destroy = function() {
    		var handler, control, property, override, settings;
    		settings = this._core.settings;

    		for (handler in this._handlers) {
    			this.$element.off(handler, this._handlers[handler]);
    		}
    		for (control in this._controls) {
    			if (control === '$relative' && settings.navContainer) {
    				this._controls[control].html('');
    			} else {
    				this._controls[control].remove();
    			}
    		}
    		for (override in this.overides) {
    			this._core[override] = this._overrides[override];
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	/**
    	 * Updates the internal state.
    	 * @protected
    	 */
    	Navigation.prototype.update = function() {
    		var i, j, k,
    			lower = this._core.clones().length / 2,
    			upper = lower + this._core.items().length,
    			maximum = this._core.maximum(true),
    			settings = this._core.settings,
    			size = settings.center || settings.autoWidth || settings.dotsData
    				? 1 : settings.dotsEach || settings.items;

    		if (settings.slideBy !== 'page') {
    			settings.slideBy = Math.min(settings.slideBy, settings.items);
    		}

    		if (settings.dots || settings.slideBy == 'page') {
    			this._pages = [];

    			for (i = lower, j = 0, k = 0; i < upper; i++) {
    				if (j >= size || j === 0) {
    					this._pages.push({
    						start: Math.min(maximum, i - lower),
    						end: i - lower + size - 1
    					});
    					if (Math.min(maximum, i - lower) === maximum) {
    						break;
    					}
    					j = 0, ++k;
    				}
    				j += this._core.mergers(this._core.relative(i));
    			}
    		}
    	};

    	/**
    	 * Draws the user interface.
    	 * @todo The option `dotsData` wont work.
    	 * @protected
    	 */
    	Navigation.prototype.draw = function() {
    		var difference,
    			settings = this._core.settings,
    			disabled = this._core.items().length <= settings.items,
    			index = this._core.relative(this._core.current()),
    			loop = settings.loop || settings.rewind;

    		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

    		if (settings.nav) {
    			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
    			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
    		}

    		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

    		if (settings.dots) {
    			difference = this._pages.length - this._controls.$absolute.children().length;

    			if (settings.dotsData && difference !== 0) {
    				this._controls.$absolute.html(this._templates.join(''));
    			} else if (difference > 0) {
    				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
    			} else if (difference < 0) {
    				this._controls.$absolute.children().slice(difference).remove();
    			}

    			this._controls.$absolute.find('.active').removeClass('active');
    			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    		}
    	};

    	/**
    	 * Extends event data.
    	 * @protected
    	 * @param {Event} event - The event object which gets thrown.
    	 */
    	Navigation.prototype.onTrigger = function(event) {
    		var settings = this._core.settings;

    		event.page = {
    			index: $.inArray(this.current(), this._pages),
    			count: this._pages.length,
    			size: settings && (settings.center || settings.autoWidth || settings.dotsData
    				? 1 : settings.dotsEach || settings.items)
    		};
    	};

    	/**
    	 * Gets the current page position of the carousel.
    	 * @protected
    	 * @returns {Number}
    	 */
    	Navigation.prototype.current = function() {
    		var current = this._core.relative(this._core.current());
    		return $.grep(this._pages, $.proxy(function(page, index) {
    			return page.start <= current && page.end >= current;
    		}, this)).pop();
    	};

    	/**
    	 * Gets the current succesor/predecessor position.
    	 * @protected
    	 * @returns {Number}
    	 */
    	Navigation.prototype.getPosition = function(successor) {
    		var position, length,
    			settings = this._core.settings;

    		if (settings.slideBy == 'page') {
    			position = $.inArray(this.current(), this._pages);
    			length = this._pages.length;
    			successor ? ++position : --position;
    			position = this._pages[((position % length) + length) % length].start;
    		} else {
    			position = this._core.relative(this._core.current());
    			length = this._core.items().length;
    			successor ? position += settings.slideBy : position -= settings.slideBy;
    		}

    		return position;
    	};

    	/**
    	 * Slides to the next item or page.
    	 * @public
    	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
    	 */
    	Navigation.prototype.next = function(speed) {
    		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    	};

    	/**
    	 * Slides to the previous item or page.
    	 * @public
    	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
    	 */
    	Navigation.prototype.prev = function(speed) {
    		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    	};

    	/**
    	 * Slides to the specified item or page.
    	 * @public
    	 * @param {Number} position - The position of the item or page.
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
    	 */
    	Navigation.prototype.to = function(position, speed, standard) {
    		var length;

    		if (!standard && this._pages.length) {
    			length = this._pages.length;
    			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
    		} else {
    			$.proxy(this._overrides.to, this._core)(position, speed);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the hash plugin.
    	 * @class The Hash Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Hash = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Hash index for the items.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._hashes = {};

    		/**
    		 * The carousel element.
    		 * @type {jQuery}
    		 */
    		this.$element = this._core.$element;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
    					$(window).trigger('hashchange.owl.navigation');
    				}
    			}, this),
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

    					if (!hash) {
    						return;
    					}

    					this._hashes[hash] = e.content;
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'position') {
    					var current = this._core.items(this._core.relative(this._core.current())),
    						hash = $.map(this._hashes, function(item, hash) {
    							return item === current ? hash : null;
    						}).join();

    					if (!hash || window.location.hash.slice(1) === hash) {
    						return;
    					}

    					window.location.hash = hash;
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

    		// register the event handlers
    		this.$element.on(this._handlers);

    		// register event listener for hash navigation
    		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
    			var hash = window.location.hash.substring(1),
    				items = this._core.$stage.children(),
    				position = this._hashes[hash] && items.index(this._hashes[hash]);

    			if (position === undefined || position === this._core.current()) {
    				return;
    			}

    			this._core.to(this._core.relative(position), false, true);
    		}, this));
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Hash.Defaults = {
    		URLhashListener: false
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Hash.prototype.destroy = function() {
    		var handler, property;

    		$(window).off('hashchange.owl.navigation');

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	var style = $('<support>').get(0).style,
    		prefixes = 'Webkit Moz O ms'.split(' '),
    		events = {
    			transition: {
    				end: {
    					WebkitTransition: 'webkitTransitionEnd',
    					MozTransition: 'transitionend',
    					OTransition: 'oTransitionEnd',
    					transition: 'transitionend'
    				}
    			},
    			animation: {
    				end: {
    					WebkitAnimation: 'webkitAnimationEnd',
    					MozAnimation: 'animationend',
    					OAnimation: 'oAnimationEnd',
    					animation: 'animationend'
    				}
    			}
    		},
    		tests = {
    			csstransforms: function() {
    				return !!test('transform');
    			},
    			csstransforms3d: function() {
    				return !!test('perspective');
    			},
    			csstransitions: function() {
    				return !!test('transition');
    			},
    			cssanimations: function() {
    				return !!test('animation');
    			}
    		};

    	function test(property, prefixed) {
    		var result = false,
    			upper = property.charAt(0).toUpperCase() + property.slice(1);

    		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
    			if (style[property] !== undefined) {
    				result = prefixed ? property : true;
    				return false;
    			}
    		});

    		return result;
    	}

    	function prefixed(property) {
    		return test(property, true);
    	}

    	if (tests.csstransitions()) {
    		/* jshint -W053 */
    		$.support.transition = new String(prefixed('transition'));
    		$.support.transition.end = events.transition.end[ $.support.transition ];
    	}

    	if (tests.cssanimations()) {
    		/* jshint -W053 */
    		$.support.animation = new String(prefixed('animation'));
    		$.support.animation.end = events.animation.end[ $.support.animation ];
    	}

    	if (tests.csstransforms()) {
    		/* jshint -W053 */
    		$.support.transform = new String(prefixed('transform'));
    		$.support.transform3d = tests.csstransforms3d();
    	}

    })(window.Zepto || window.jQuery, window, document);

    var $ = window.jQuery;
    var ReactOwlCarousel = /** @class */ (function (_super) {
        __extends(ReactOwlCarousel, _super);
        function ReactOwlCarousel(props) {
            var _this = _super.call(this, props) || this;
            _this.containerRef = function (inst) {
                _this.container = inst;
            };
            var _a = filterOptions(_this.props), options = _a[0], propsWithoutOptions = _a[1];
            _this.options = options;
            _this.propsWithoutOptions = propsWithoutOptions;
            return _this;
        }
        ReactOwlCarousel.prototype.componentDidMount = function () {
            this.$ele = $(this.container);
            this.create();
        };
        ReactOwlCarousel.prototype.UNSAFE_componentWillReceiveProps = function () {
            this.destory();
        };
        ReactOwlCarousel.prototype.componentDidUpdate = function () {
            var _a = filterOptions(this.props), options = _a[0], propsWithoutOptions = _a[1];
            this.options = options;
            this.propsWithoutOptions = propsWithoutOptions;
            this.create();
        };
        ReactOwlCarousel.prototype.next = function (speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof speed === 'number') {
                this.$ele.trigger('next.owl.carousel', [speed]);
            }
            else {
                this.$ele.trigger('next.owl.carousel', speed);
            }
        };
        ReactOwlCarousel.prototype.prev = function (speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof speed === 'number') {
                this.$ele.trigger('prev.owl.carousel', [speed]);
            }
            else {
                this.$ele.trigger('prev.owl.carousel', speed);
            }
        };
        ReactOwlCarousel.prototype.to = function (position, speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof position === 'number' && typeof speed === 'number') {
                this.$ele.trigger('to.owl.carousel', [position, speed]);
            }
            else {
                this.$ele.trigger('to.owl.carousel');
            }
        };
        ReactOwlCarousel.prototype.create = function (options) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.owlCarousel(options || this.options);
        };
        ReactOwlCarousel.prototype.destory = function () {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.trigger('destroy.owl.carousel');
        };
        ReactOwlCarousel.prototype.play = function (timeout, speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof timeout === 'number' && typeof speed === 'number') {
                this.$ele.trigger('play.owl.autoplay', [timeout, speed]);
            }
            else {
                this.$ele.trigger('play.owl.autoplay');
            }
        };
        ReactOwlCarousel.prototype.stop = function () {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.trigger('stop.owl.autoplay');
        };
        ReactOwlCarousel.prototype.render = function () {
            var _a = this.propsWithoutOptions, className = _a.className, props = __rest(_a, ["className"]);
            return (React__default.createElement("div", __assign({ className: "owl-carousel " + className, ref: this.containerRef }, props)));
        };
        return ReactOwlCarousel;
    }(React.Component));
    var OPTIONS = new Set([
        'items',
        'margin',
        'loop',
        'center',
        'mouseDrag',
        'touchDrag',
        'pullDrag',
        'freeDrag',
        'stagePadding',
        'merge',
        'mergeFit',
        'autoWidth',
        'startPosition',
        'URLhashListener',
        'nav',
        'rewind',
        'navText',
        'navElement',
        'slideBy',
        'dots',
        'dotsEach',
        'dotData',
        'lazyLoad',
        'lazyContent',
        'autoplay',
        'autoplayTimeout',
        'autoplayHoverPause',
        'smartSpeed',
        'fluidSpeed',
        'autoplaySpeed',
        'navSpeed',
        'dotsSpeed',
        'dragEndSpeed',
        'callbacks',
        'responsive',
        'responsiveRefreshRate',
        'responsiveBaseElement',
        'video',
        'videoHeight',
        'videoWidth',
        'animateOut',
        'animateIn',
        'fallbackEasing',
        'info',
        'nestedItemSelector',
        'itemElement',
        'stageElement',
        'navContainer',
        'dotsContainer',
        // 'CLASSES'
        'refreshClass',
        'loadingClass',
        'loadedClass',
        'rtlClass',
        'dragClass',
        'grabClass',
        'stageClass',
        'stageOuterClass',
        'navContainerClass',
        'navClass',
        'controlsClass',
        'dotClass',
        'dotsClass',
        'autoHeightClass',
        'responsiveClass',
        // 'EVENTS'
        'onInitialize',
        'onInitialized',
        'onResize',
        'onResized',
        'onRefresh',
        'onRefreshed',
        'onDrag',
        'onDragged',
        'onTranslate',
        'onTranslated',
        'onChange',
        'onChanged',
        'onLoadLazy',
        'onLoadedLazy',
        'onStopVideo',
        'onPlayVideo',
    ]);
    function filterOptions(item) {
        var options = {};
        var propsWithoutOptions = {};
        Object.keys(item).forEach(function (key) {
            if (OPTIONS.has(key)) {
                options[key] = item[key];
            }
            else {
                propsWithoutOptions[key] = item[key];
            }
        });
        return [options, propsWithoutOptions];
    }

    return ReactOwlCarousel;

})));


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

/***/ "./node_modules/reactstrap/es/Fade.js":
/*!********************************************!*\
  !*** ./node_modules/reactstrap/es/Fade.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/reactstrap/node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");



var _excluded = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var propTypes = _objectSpread(_objectSpread({}, react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition.propTypes), {}, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node)]),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  baseClass: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  baseClassActive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)])
});

var defaultProps = _objectSpread(_objectSpread({}, react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition.defaultProps), {}, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: _utils__WEBPACK_IMPORTED_MODULE_7__.TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var transitionProps = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.pick)(otherProps, _utils__WEBPACK_IMPORTED_MODULE_7__.TransitionPropTypeKeys);
  var childProps = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.omit)(otherProps, _utils__WEBPACK_IMPORTED_MODULE_7__.TransitionPropTypeKeys);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, baseClass, isActive && baseClassActive), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);

/***/ }),

/***/ "./node_modules/reactstrap/es/Modal.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Portal */ "./node_modules/reactstrap/es/Portal.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fade */ "./node_modules/reactstrap/es/Fade.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function noop() {}

var FadePropTypes = prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes);
var propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  centered: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  scrollable: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  keyboard: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  role: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  labelledBy: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['static'])]),
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onOpened: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onClosed: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  wrapClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  modalClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  backdropClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  contentClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  external: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)]),
  unmountOnClose: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  returnFocusAfterClose: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  container: _utils__WEBPACK_IMPORTED_MODULE_8__.targetPropType,
  trapFocus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
var propsToOmit = Object.keys(propTypes);
var defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: _utils__WEBPACK_IMPORTED_MODULE_8__.TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: _utils__WEBPACK_IMPORTED_MODULE_8__.TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Modal = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleEscape = _this.handleEscape.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleTab = _this.handleTab.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onOpened = _this.onOpened.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onClosed = _this.onClosed.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.trapFocus = _this.trapFocus.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Modal, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) //element is not attached
      return;
    if (this._dialog && this._dialog.parentNode === ev.target) // initial focus when the Modal is opened
      return;
    if (this.modalIndex < Modal.openCount - 1) // last opened modal
      return;
    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i++) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(_utils__WEBPACK_IMPORTED_MODULE_8__.focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === _utils__WEBPACK_IMPORTED_MODULE_8__.keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getTarget)(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getOriginalBodyPadding)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_8__.conditionallyUpdateScrollbar)();

    if (Modal.openCount === 0) {
      document.body.className = classnames__WEBPACK_IMPORTED_MODULE_5___default()(document.body.className, (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)('modal-open', this.props.cssModule));
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    (0,_utils__WEBPACK_IMPORTED_MODULE_8__.setScrollbarWidth)(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.omit)(this.props, propsToOmit);
    var dialogBaseClass = 'modal-dialog';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule: cssModule,
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()('modal-backdrop', backdropClassName), cssModule)
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        node: this._element
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(wrapClassName)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.openCount = 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./node_modules/reactstrap/es/ModalBody.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/ModalBody.js ***!
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


var _excluded = ["className", "cssModule", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'modal-body'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalBody);

/***/ }),

/***/ "./node_modules/reactstrap/es/ModalFooter.js":
/*!***************************************************!*\
  !*** ./node_modules/reactstrap/es/ModalFooter.js ***!
  \***************************************************/
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
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'modal-footer'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFooter);

/***/ }),

/***/ "./node_modules/reactstrap/es/ModalHeader.js":
/*!***************************************************!*\
  !*** ./node_modules/reactstrap/es/ModalHeader.js ***!
  \***************************************************/
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


var _excluded = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  wrapTag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  closeAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  charCode: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)]),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      close = props.close,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'modal-header'), cssModule);

  if (!close && toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
      type: "button",
      onClick: toggle,
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)('close', cssModule),
      "aria-label": closeAriaLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      "aria-hidden": "true"
    }, closeIcon));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(WrapTag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, {
    className: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)('modal-title', cssModule)
  }, children), close || closeButton);
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);

/***/ }),

/***/ "./node_modules/reactstrap/es/Nav.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Nav.js ***!
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


var _excluded = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];




var propTypes = {
  tabs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  pills: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
  horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  justified: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  navbar: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  card: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
var defaultProps = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./node_modules/reactstrap/es/NavItem.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/NavItem.js ***!
  \***********************************************/
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


var _excluded = ["className", "cssModule", "active", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'nav-item', active ? 'active' : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/NavLink.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/NavLink.js ***!
  \***********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "active", "tag", "innerRef"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_6__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)]),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any)
};
var defaultProps = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./node_modules/reactstrap/es/Portal.js":
/*!**********************************************!*\
  !*** ./node_modules/reactstrap/es/Portal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired),
  node: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};

var Portal = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!_utils__WEBPACK_IMPORTED_MODULE_4__.canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

Portal.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContent.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.omit)(this.props, Object.keys(propTypes));
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-content', className), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContent);
TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContext.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContext": () => (/* binding */ TabContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./node_modules/reactstrap/es/TabPane.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/TabPane.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabPane)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tabId", "tag"];





var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  tabId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any)
};
var defaultProps = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var getClasses = function getClasses(activeTabId) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

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

/***/ "./node_modules/reactstrap/node_modules/dom-helpers/class/addClass.js":
/*!****************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/reactstrap/node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/reactstrap/node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/reactstrap/node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/reactstrap/node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/reactstrap/node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : 0;
var _default = CSSTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
var _default = ReplaceTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/Transition.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/Transition.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/reactstrap/node_modules/react-transition-group/utils/PropTypes.js");

var _TransitionGroupContext = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroupContext.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = _react.default.Children.only(children);

    return (// allows for nested Transitions
      _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: null
      }, _react.default.cloneElement(child, childProps))
    );
  };

  return Transition;
}(_react.default.Component);

Transition.contextType = _TransitionGroupContext.default;
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : 0;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _TransitionGroupContext = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroupContext.js"));

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/reactstrap/node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: contextValue
      }, children);
    }

    return _react.default.createElement(_TransitionGroupContext.default.Provider, {
      value: contextValue
    }, _react.default.createElement(Component, props, children));
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : 0;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroupContext.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroupContext.js ***!
  \***********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react.default.createContext(null);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/index.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/reactstrap/node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/reactstrap/node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/reactstrap/node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/reactstrap/node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : 0;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : 0;
exports.classNamesShape = classNamesShape;

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

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