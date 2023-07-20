(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_lms_src_admin_components_settings_Settings_js"],{

/***/ "./resources/lms/src/admin/components/settings/Settings.js":
/*!*****************************************************************!*\
  !*** ./resources/lms/src/admin/components/settings/Settings.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SettingsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsForm */ "./resources/lms/src/admin/components/settings/SettingsForm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../appConstant */ "./resources/lms/src/appConstant.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/settingAction */ "./resources/lms/src/admin/store/actions/settingAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }














var Settings = function Settings(props) {
  var currencies = props.currencies,
    fetchSettings = props.fetchSettings,
    fetchCurrencies = props.fetchCurrencies,
    postSettings = props.postSettings,
    postAppLogo = props.postAppLogo,
    selectedCurrency = props.selectedCurrency,
    settings = props.settings,
    selectedLanguage = props.selectedLanguage,
    exist_library_logo = props.exist_library_logo,
    exist_favicon_logo = props.exist_favicon_logo,
    postAppFavicon = props.postAppFavicon;
  var bookLanguagesOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_4__.languageOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchSettings(true);
    fetchCurrencies();
  }, []);
  var onSaveSettings = function onSaveSettings(formValues) {
    postSettings([].concat(_toConsumableArray(formValues), [exist_library_logo, exist_favicon_logo]));
  };
  var onChangeAppLogo = function onChangeAppLogo(file) {
    if (file) {
      var formData = new FormData();
      formData.append('logo', file, file.name);
      postAppLogo(formData);
    }
  };
  var onChangeAppFavicon = function onChangeAppFavicon(file) {
    if (file) {
      var formData = new FormData();
      formData.append('favicon', file, file.name);
      postAppFavicon(formData);
    }
  };
  var getLogo = function getLogo(settings, key) {
    return settings && settings[key] ? settings[key].logo_url : null;
  };
  var prepareFormOption = {
    currencies: currencies,
    initialValues: {
      currency: selectedCurrency,
      issue_due_days: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_DUE_DAYS] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_DUE_DAYS].value : null,
      stripe_key: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_KEY] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_KEY].value : null,
      stripe_secret: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_SECRET] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_SECRET].value : null,
      return_due_days: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RETURN_DUE_DAYS] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RETURN_DUE_DAYS].value : null,
      issue_books_limit: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_BOOKS_LIMIT] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_BOOKS_LIMIT].value : null,
      reserve_books_limit: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RESERVE_BOOKS_LIMIT] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RESERVE_BOOKS_LIMIT].value : null,
      library_name: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_NAME] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_NAME].value : null,
      penalty_per_day: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.PENALTY_PER_DAY] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.PENALTY_PER_DAY].value : null,
      book_due_reminder_before_days: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.BOOK_DUE_REMINDER_BEFORE_DAYS] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.BOOK_DUE_REMINDER_BEFORE_DAYS].value : null,
      library_logo: getLogo(settings, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_LOGO),
      library_favicon: getLogo(settings, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON),
      language: bookLanguagesOptions.find(function (lang) {
        return lang.id === selectedLanguage.id;
      })
    },
    onSaveSettings: onSaveSettings,
    onChangeAppLogo: onChangeAppLogo,
    onChangeAppFavicon: onChangeAppFavicon
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Settings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        xs: 12,
        className: "mb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h5", {
          className: "page-heading",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('settings.title')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "sticky-table-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SettingsForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, prepareFormOption))
            })
          })
        })
      })]
    })]
  });
};
Settings.propTypes = {
  selectedCurrency: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  selectedLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  exist_library_logo: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  exist_favicon_logo: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  settings: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  currencies: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  fetchSettings: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  fetchCurrencies: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  postSettings: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  postAppLogo: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  postAppFavicon: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func)
};
var prepareCurrencies = function prepareCurrencies(currencies) {
  var currenciesArray = [];
  currencies.forEach(function (cur) {
    return currenciesArray.push({
      id: cur.iso_code,
      name: cur.country,
      symbol: cur.symbol
    });
  });
  return currenciesArray;
};
var prepareSelectedSetting = function prepareSelectedSetting(settings, filterKey) {
  var setting = settings.filter(function (setting) {
    return setting.key === filterKey;
  }).map(function (_ref) {
    var value = _ref.value,
      display_name = _ref.display_name,
      currency_symbol = _ref.currency_symbol;
    return {
      id: value,
      name: display_name,
      symbol: currency_symbol
    };
  });
  if (setting.length > 0) {
    return {
      id: setting[0].id,
      name: setting[0].name,
      symbol: setting[0].symbol
    };
  }
};
var mapStateToProps = function mapStateToProps(state) {
  var currencies = state.currencies,
    settings = state.settings;
  var settingsArray = Object.values(settings);
  var settingsArr = lodash__WEBPACK_IMPORTED_MODULE_2___default().mapKeys(settingsArray, 'key');
  return {
    currencies: prepareCurrencies(currencies),
    selectedCurrency: prepareSelectedSetting(settingsArray, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.CURRENCY),
    settings: settingsArr,
    selectedLanguage: prepareSelectedSetting(settingsArray, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LANGUAGE),
    exist_library_logo: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_LOGO] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_LOGO] : null,
    exist_favicon_logo: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON] : null
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchSettings: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.fetchSettings,
  fetchCurrencies: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.fetchCurrencies,
  postSettings: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.postSettings,
  postAppLogo: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.postAppLogo,
  postAppFavicon: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.postAppFavicon
})(Settings));

/***/ }),

/***/ "./resources/lms/src/admin/components/settings/SettingsForm.js":
/*!*********************************************************************!*\
  !*** ./resources/lms/src/admin/components/settings/SettingsForm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _settings_settingsFormValidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/settingsFormValidate */ "./resources/lms/src/admin/components/settings/settingsFormValidate.js");
/* harmony import */ var _Settings_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings.scss */ "./resources/lms/src/admin/components/settings/Settings.scss");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../appConstant */ "./resources/lms/src/appConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/lms/src/shared/components/Select.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/lms/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/lms/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/image-picker/ImagePicker */ "./resources/lms/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_components_ImageCropper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/ImageCropper */ "./resources/lms/src/shared/components/ImageCropper.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/lms/src/shared/custom-hooks/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var SettingsForm = function SettingsForm(props) {
  var currencies = props.currencies,
    initialValues = props.initialValues,
    change = props.change,
    onChangeAppLogo = props.onChangeAppLogo,
    toggleModal = props.toggleModal,
    onSaveSettings = props.onSaveSettings,
    handleSubmit = props.handleSubmit,
    onChangeAppFavicon = props.onChangeAppFavicon;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues.currency ? initialValues.currency.symbol : null),
    _useState2 = _slicedToArray(_useState, 2),
    groupText = _useState2[0],
    setGroupText = _useState2[1];
  var settingRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    logoRef = _useState4[0],
    setLogoRef = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    faviconRef = _useState6[0],
    setFaviconRef = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isToggleLogo = _useState8[0],
    setToggleLogo = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isToggleFavicon = _useState10[0],
    setToggleFavicon = _useState10[1];
  var _imagePicker = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.imagePicker)(change, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO, !!!initialValues.library_logo),
    _imagePicker2 = _slicedToArray(_imagePicker, 5),
    logo = _imagePicker2[0],
    isDefaultLogo = _imagePicker2[1],
    logoFile = _imagePicker2[2],
    onLogoChange = _imagePicker2[3],
    onRemoveLogo = _imagePicker2[4];
  var _imagePicker3 = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.imagePicker)(change, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_FAVICON, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_FAVICON, !!!initialValues.library_favicon),
    _imagePicker4 = _slicedToArray(_imagePicker3, 5),
    favicon = _imagePicker4[0],
    isDefaultFavicon = _imagePicker4[1],
    faviconFile = _imagePicker4[2],
    onFaviconChange = _imagePicker4[3],
    onRemoveFavicon = _imagePicker4[4];
  var bookLanguagesOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.languageOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    settingRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelector(".inputBox").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox1").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox2").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox3").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox4").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox5").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
  }, []);
  var onSelectCurrency = function onSelectCurrency(option) {
    if (option) setGroupText(option.symbol);
  };
  var prepareFormData = function prepareFormData(key, value, display_name) {
    return {
      key: key,
      value: value,
      display_name: display_name
    };
  };
  var onSave = function onSave(formValues) {
    var currency = formValues.currency,
      issue_due_days = formValues.issue_due_days,
      return_due_days = formValues.return_due_days,
      library_name = formValues.library_name,
      language = formValues.language,
      reserve_books_limit = formValues.reserve_books_limit,
      stripe_key = formValues.stripe_key,
      stripe_secret = formValues.stripe_secret,
      issue_books_limit = formValues.issue_books_limit,
      penalty_per_day = formValues.penalty_per_day,
      book_due_reminder_before_days = formValues.book_due_reminder_before_days;
    var settings = [prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.CURRENCY, currency.id, currency.name), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.LIBRARY_NAME, library_name, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.APP_NAME), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.PENALTY_PER_DAY, penalty_per_day, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.PENALTY_PER_DAY), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.ISSUE_DUE_DAYS, issue_due_days, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.ISSUE_DUE_DAYS), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.RETURN_DUE_DAYS, return_due_days, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.RETURN_DUE_DAYS), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.LANGUAGE, language.id, language.name), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.RESERVE_BOOKS_LIMIT, reserve_books_limit, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.RESERVE_BOOKS_LIMIT), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.ISSUE_BOOKS_LIMIT, issue_books_limit, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.ISSUE_BOOKS_LIMIT), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.BOOK_DUE_REMINDER_BEFORE_DAYS, book_due_reminder_before_days, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.BOOK_DUE_REMINDER_BEFORE_DAYS), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.STRIPE_KEY, stripe_key, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.STRIPE_KEY), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.STRIPE_SECRET, stripe_secret, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.STRIPE_SECRET)];
    onSaveSettings(settings);
  };
  var onChangingLogo = function onChangingLogo(event) {
    setLogoRef(logoFile);
    onLogoChange(event);
    setToggleFavicon(false);
    setToggleLogo(true);
    toggleModal();
  };
  var onChangingFavicon = function onChangingFavicon(event) {
    setFaviconRef(faviconFile);
    onFaviconChange(event);
    setToggleLogo(false);
    setToggleFavicon(true);
    toggleModal();
  };
  var onRemovingLogo = function onRemovingLogo() {
    onChangeAppLogo(null);
    onRemoveLogo();
  };
  var onRemovingFavicon = function onRemovingFavicon() {
    onChangeAppFavicon(null);
    onRemoveFavicon();
  };
  var emitLogoChange = function emitLogoChange(fileRef) {
    setLogoRef(fileRef);
  };
  var emitFaviconChange = function emitFaviconChange(fileRef) {
    setFaviconRef(fileRef);
  };
  var onSaveLogo = function onSaveLogo() {
    if (isToggleFavicon) {
      onChangeAppFavicon(logoRef);
    } else {
      onChangeAppLogo(logoRef);
    }
    toggleModal();
  };
  var onSaveFavicon = function onSaveFavicon() {
    onChangeAppFavicon(faviconRef);
    toggleModal();
  };
  var onCancel = function onCancel() {
    toggleModal();
  };
  var logoPickerOptions = {
    image: initialValues.library_logo ? initialValues.library_logo : _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO,
    isDefaultImage: isDefaultLogo,
    buttonName: 'image-picker.dropdown.logo.label',
    onRemovePhoto: onRemovingLogo,
    onFileChange: onChangingLogo,
    isRemoveOption: false,
    inputField: 'logo-picker'
  };
  var logoCropperOptions = {
    image: logo,
    emitFileChange: emitLogoChange,
    onSave: onSaveLogo,
    onCancel: onCancel,
    isToggle: isToggleLogo
  };
  var faviconPickerOptions = {
    image: initialValues.library_favicon ? initialValues.library_favicon : _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO,
    isDefaultImage: isDefaultFavicon,
    buttonName: 'image-picker.dropdown.favicon.label',
    onRemovePhoto: onRemovingFavicon,
    onFileChange: onChangingFavicon,
    isRemoveOption: false,
    inputField: 'favicon-picker',
    isFavicon: true
  };
  var faviconCropperOptions = {
    image: favicon,
    emitFileChange: emitFaviconChange,
    onSave: onSaveFavicon,
    onCancel: onCancel,
    isToggle: isToggleFavicon,
    isFavicon: true
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 2,
      className: "settings__logo",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h6", {
        className: "settings__logo-heading",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('image-picker.dropdown.logo.label')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
          name: "file_name",
          type: "hidden",
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_components_ImageCropper__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread({}, logoCropperOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, logoPickerOptions))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h6", {
        className: "settings__favicon-heading mt-3",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('image-picker.dropdown.favicon.label')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
          name: "file_name",
          type: "hidden",
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_components_ImageCropper__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread({}, faviconCropperOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, faviconPickerOptions))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 10,
      className: "settings__form",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "settings__form-columns",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "library_name",
            type: "text",
            label: "settings.input.app-name.label",
            required: true,
            groupText: "list",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"],
            inputRef: settingRef
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "currency",
            label: "settings.select.currency.label",
            required: true,
            groupText: groupText,
            options: currencies,
            onChange: onSelectCurrency,
            isDefaultCurrency: true,
            placeholder: "settings.select.currency.placeholder",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
            isSearchable: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "issue_due_days",
            className: "inputBox",
            type: "number",
            label: "settings.input.issue-due-days.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "return_due_days",
            className: "inputBox1",
            type: "number",
            label: "settings.input.return-due-days.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "issue_books_limit",
            className: "inputBox2",
            type: "number",
            label: "settings.input.max-issue-books-limit.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "reserve_books_limit",
            className: "inputBox3",
            type: "number",
            label: "settings.input.max-reserve-books-limit.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "book_due_reminder_before_days",
            type: "number",
            className: "inputBox4",
            label: "settings.input.book-due-reminder-before-days.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "penalty_per_day",
            type: "number",
            className: "inputBox5",
            label: "settings.input.penalty.label",
            min: "0",
            isDefaultCurrency: true,
            required: true,
            groupText: groupText,
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "language",
            label: "settings.select.language.label",
            required: true,
            groupText: "language",
            options: bookLanguagesOptions,
            placeholder: "settings.select.language.placeholder",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
            isSearchable: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "stripe_key",
            type: "text",
            label: "settings.input.stripe-key.label",
            groupText: "list",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "stripe_secret",
            type: "text",
            label: "settings.input.stripe-secret.label",
            groupText: "list",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 2,
      className: "settings__favicon mt-2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
        onSave: handleSubmit(onSave),
        isHideCancel: true
      }, props))
    })]
  });
};
SettingsForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  currencies: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().array),
  onSaveSettings: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  change: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  onChangeAppLogo: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  onChangeAppFavicon: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func)
};
var form = (0,redux_form__WEBPACK_IMPORTED_MODULE_19__["default"])({
  form: 'settingsForm',
  validate: _settings_settingsFormValidate__WEBPACK_IMPORTED_MODULE_2__["default"],
  enableReinitialize: true
})(SettingsForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_12__.toggleModal
})(form));

/***/ }),

/***/ "./resources/lms/src/admin/components/settings/settingsFormValidate.js":
/*!*****************************************************************************!*\
  !*** ./resources/lms/src/admin/components/settings/settingsFormValidate.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.library_name) {
    errors.library_name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.app-name.validate.label');
  }
  if (!formValues.currency) {
    errors.currency = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.select.currency.validate.label');
  }
  if (!formValues.issue_due_days) {
    errors.issue_due_days = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.issue-due-days.validate.label');
  }
  if (!formValues.return_due_days) {
    errors.return_due_days = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.return-due-days.validate.label');
  }
  if (!formValues.language) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.select.language.validate.label');
  }
  if (!formValues.reserve_books_limit) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.max-reserve-books-limit.validate.label');
  }
  if (!formValues.issue_books_limit) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.max-issue-books-limit.validate.label');
  }
  if (!formValues.stripe_key) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)("settings.input.stripe-key.validate.label");
  }
  if (!formValues.stripe_secret) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)("Stripe secret must be required.");
  }
  return errors;
});

/***/ }),

/***/ "./resources/lms/src/shared/action-buttons/ConfirmAction.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/shared/action-buttons/ConfirmAction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ConfirmAction = function ConfirmAction(props) {
  var onConfirm = props.onConfirm,
    onCancel = props.onCancel;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "success",
      onClick: onConfirm,
      children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('global.input.yes-btn.label')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "secondary",
      onClick: onCancel,
      children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('global.input.no-btn.label')
    })]
  });
};
ConfirmAction.propTypes = {
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmAction);

/***/ }),

/***/ "./resources/lms/src/shared/components/ImageCropper.js":
/*!*************************************************************!*\
  !*** ./resources/lms/src/shared/components/ImageCropper.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _action_buttons_ConfirmAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-buttons/ConfirmAction */ "./resources/lms/src/shared/action-buttons/ConfirmAction.js");
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component.scss */ "./resources/lms/src/shared/components/Component.scss");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var imageRef = null;
var ImageCropper = function ImageCropper(props) {
  var image = props.image,
    emitFileChange = props.emitFileChange,
    onSave = props.onSave,
    onCancel = props.onCancel,
    isToggle = props.isToggle,
    _props$isFavicon = props.isFavicon,
    isFavicon = _props$isFavicon === void 0 ? false : _props$isFavicon;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      aspect: 16 / 9,
      unit: 'px',
      width: 50,
      height: 50
    }),
    _useState2 = _slicedToArray(_useState, 2),
    crop = _useState2[0],
    setCrop = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    croppedImageUrl = _useState4[0],
    setCroppedImageUrl = _useState4[1];
  var faviocnExtraOptions = {
    minHeight: 50,
    maxHeight: 50,
    minWidth: 50,
    maxWidth: 50
  };
  var onImageLoaded = function onImageLoaded(image) {
    imageRef = image;
  };
  var onCropComplete = function onCropComplete(crop) {
    makeClientCrop(crop).then(function (croppedImageUrl) {
      setCroppedImageUrl(croppedImageUrl);
    });
  };
  var onCropChange = function onCropChange(crop, percentCrop) {
    setCrop(crop);
  };
  var makeClientCrop = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(crop) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(imageRef && crop.width && crop.height)) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return getCroppedImg(imageRef, crop, "newFile.jpeg");
          case 3:
            return _context.abrupt("return", _context.sent);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function makeClientCrop(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getCroppedImg = function getCroppedImg(image, crop, fileName) {
    var canvas = document.createElement("canvas");
    var scaleX = image.naturalWidth / image.width;
    var scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        if (!blob) {
          // reject(new Error('Canvas is empty'));
          return;
        }
        blob.name = fileName;
        blob.lastModifiedDate = new Date();
        emitFileChange(blob, croppedImageUrl);
        resolve(window.URL.createObjectURL(blob));
      }, "image/jpeg");
    });
  };
  var prepareCropOption = {
    src: image,
    crop: crop,
    onImageLoaded: onImageLoaded,
    onComplete: onCropComplete,
    onChange: onCropChange
  };
  if (isFavicon) {
    prepareCropOption = _objectSpread(_objectSpread({}, prepareCropOption), faviocnExtraOptions);
  }
  var prepareModalOption = {
    className: 'membership-plan-modal',
    title: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('image-cropper.modal.title'),
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((react_image_crop__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({}, prepareCropOption)), croppedImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "mt-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
          children: "Preview"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
            alt: "Crop",
            className: "react-img-cropper__img",
            src: croppedImageUrl
          })
        })]
      })]
    }),
    actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_action_buttons_ConfirmAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onConfirm: onSave,
      onCancel: onCancel
    })
  };
  return image && isToggle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, prepareModalOption)) : null;
};
ImageCropper.propTypes = {
  image: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  isToggle: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  isFavicon: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  emitFileChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCropper);

/***/ }),

/***/ "./resources/lms/src/shared/image-picker/ImagePicker.js":
/*!**************************************************************!*\
  !*** ./resources/lms/src/shared/image-picker/ImagePicker.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Dropdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var _ImagePicker_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagePicker.scss */ "./resources/lms/src/shared/image-picker/ImagePicker.scss");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ImagePicker = function ImagePicker(props) {
  var image = props.image,
    isDefaultImage = props.isDefaultImage,
    onFileChange = props.onFileChange,
    onRemovePhoto = props.onRemovePhoto,
    _props$inputField = props.inputField,
    inputField = _props$inputField === void 0 ? 'userInput' : _props$inputField,
    _props$buttonName = props.buttonName,
    buttonName = _props$buttonName === void 0 ? "image-picker.dropdown.profile.label" : _props$buttonName,
    _props$isRemoveOption = props.isRemoveOption,
    isRemoveOption = _props$isRemoveOption === void 0 ? true : _props$isRemoveOption,
    user = props.user,
    _props$isFavicon = props.isFavicon,
    isFavicon = _props$isFavicon === void 0 ? false : _props$isFavicon;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggle = function toggle() {
    setIsOpen(!isOpen);
  };
  var openFileSelect = function openFileSelect() {
    document.getElementById(inputField).click();
  };
  var getConcatedMessage = function getConcatedMessage(messageId) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [(0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)(messageId), " \xA0", (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)(buttonName)]
    });
  };
  var renderRemoveOption = function renderRemoveOption() {
    if (!isDefaultImage && isRemoveOption) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "text-center",
        onClick: function onClick() {
          return onRemovePhoto();
        },
        children: getConcatedMessage("image-picker.dropdown.remove.label")
      });
    }
  };
  var toggleClass = !isFavicon ? 'image__dropdown-btn' : 'image__favicon-dropdown-btn';
  var dropMenuClass = !isFavicon ? 'image__dropdown-menu' : 'image__favicon-dropdown-menu';
  var holderClass = !isFavicon ? 'image__holder' : 'image__favicon-holder';
  var previewClass = !isFavicon ? 'image__preview' : 'image__favicon-preview';
  var avatarClass = !isFavicon ? 'image__avatar' : 'image__favicon-avatar-text';
  var avatarTextClass = !isFavicon ? 'image__avatar-text' : 'image__favicon-avatar-text';
  var height = !isFavicon ? 200 : 120;
  var width = !isFavicon ? 200 : 120;
  var renderPopOver = function renderPopOver() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isOpen: isOpen,
      toggle: toggle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: toggleClass,
        children: isDefaultImage ? getConcatedMessage('image-picker.dropdown.add.label') : getConcatedMessage('image-picker.dropdown.change.label')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: dropMenuClass,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "text-center",
          onClick: function onClick() {
            return openFileSelect();
          },
          children: isDefaultImage ? getConcatedMessage('image-picker.dropdown.add.label') : getConcatedMessage('image-picker.dropdown.change.label')
        }), renderRemoveOption(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "text-center",
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("global.input.cancel-btn.label")
        })]
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      id: inputField,
      type: "file",
      onClick: function onClick(e) {
        return e.target.value = null;
      },
      className: "d-none",
      onChange: function onChange(e) {
        return onFileChange(e);
      },
      accept: "image/*"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: holderClass,
      children: [image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: image ? image : null,
        className: "".concat(previewClass, " mx-auto d-block"),
        height: height,
        width: width,
        alt: image
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: avatarClass,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: avatarTextClass,
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getAvatarName)(user ? user.name : null)
        })
      }), renderPopOver()]
    })]
  });
};
ImagePicker.propTypes = {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  inputField: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  buttonName: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  isDefaultImage: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  isRemoveOption: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  onFileChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onRemovePhoto: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePicker);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/settings/Settings.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/settings/Settings.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings .image__preview {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n@media (max-width: 1544px) {\n  html[dir=rtl] .settings__form {\n    right: 6.3%;\n    max-width: 77%;\n  }\n}\n@media (max-width: 1250px) {\n  html[dir=rtl] .settings__form {\n    right: 10.3%;\n    max-width: 73%;\n  }\n}\n\n@media (max-width: 1544px) {\n  .settings__form {\n    left: 6.3%;\n    max-width: 77%;\n  }\n}\n@media (max-width: 1250px) {\n  .settings__form {\n    left: 10.3%;\n    max-width: 73%;\n  }\n}\n@media (max-width: 1060px) {\n  .settings {\n    flex-direction: column;\n    align-items: center;\n  }\n  .settings .settings__favicon,\n.settings .settings__logo {\n    max-width: 100%;\n    margin-bottom: 30px;\n    width: 100%;\n  }\n  .settings .settings__favicon .settings__favicon-heading,\n.settings .settings__favicon .settings__logo-heading,\n.settings .settings__logo .settings__favicon-heading,\n.settings .settings__logo .settings__logo-heading {\n    margin-left: calc(1px + 15%);\n  }\n\n  .settings__form {\n    left: 0;\n    right: 0 !important;\n    max-width: 100% !important;\n    width: 100%;\n  }\n  .settings__form .settings__form-columns {\n    flex-direction: column;\n  }\n  .settings__form .settings__form-columns .col-6 {\n    width: 100%;\n  }\n}\n.input-group-prepend .input-group-text {\n  min-width: 45px !important;\n}\n\n.react-select__input {\n  width: calc(100% - 45px) !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/image-picker/ImagePicker.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/image-picker/ImagePicker.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".image__holder {\n  position: relative;\n  width: 200px;\n  margin: auto;\n  border-radius: 10px;\n  background: gray;\n  cursor: pointer;\n}\n@media (max-width: 576px) {\n  .image__holder {\n    width: 185px;\n  }\n}\n.image__holder .btn-secondary:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n.image__favicon-holder {\n  position: relative;\n  width: 120px;\n  margin: auto;\n  border-radius: 10px;\n  background: gray;\n  cursor: pointer;\n}\n.image__favicon-holder .btn-secondary:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n.image__preview {\n  border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  text-align: center;\n  width: 100%;\n}\n.image__favicon-preview {\n  border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  text-align: center;\n}\n.image__dropdown-btn {\n  background-color: #e2e2e28f !important;\n  border: 0 !important;\n  position: absolute;\n  top: -146px;\n  left: 25%;\n  width: 100px;\n  height: 96px;\n  white-space: normal;\n  font-size: 13px;\n  font-weight: 700;\n}\n.image__favicon-dropdown-btn {\n  border: 0 !important;\n  position: absolute;\n  top: -96px;\n  left: 18%;\n  width: 74px;\n  height: 76px;\n  white-space: normal;\n  font-size: 13px;\n  font-weight: 700;\n}\n.image__dropdown-menu {\n  top: -37px !important;\n  left: -32px !important;\n}\n.image__favicon-dropdown-menu {\n  font-size: 13px;\n  min-width: 70px;\n  top: -37px !important;\n  left: -31px !important;\n}\n.image__avatar {\n  height: 200px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.image__avatar-text {\n  height: auto;\n  background-color: #7d68f0;\n  color: white;\n  border-radius: 50%;\n  padding: 50px;\n  font-size: 50px;\n}\n.image__favicon-avatar {\n  height: 120px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.image__favicon-avatar-text {\n  height: auto;\n  background-color: #7d68f0;\n  color: white;\n  border-radius: 50%;\n  padding: 50px;\n  font-size: 50px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/lms/src/admin/components/settings/Settings.scss":
/*!*******************************************************************!*\
  !*** ./resources/lms/src/admin/components/settings/Settings.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Settings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./Settings.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/admin/components/settings/Settings.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Settings_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Settings_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/lms/src/shared/image-picker/ImagePicker.scss":
/*!****************************************************************!*\
  !*** ./resources/lms/src/shared/image-picker/ImagePicker.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_ImagePicker_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./ImagePicker.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/image-picker/ImagePicker.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_ImagePicker_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_ImagePicker_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/react-image-crop/dist/ReactCrop.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-image-crop/dist/ReactCrop.min.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(this,(function(e){return(()=>{var t={703:(e,t,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},427:t=>{"use strict";t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";o.r(n),o.d(n,{Component:()=>S,containCrop:()=>O,default:()=>S,makeAspectCrop:()=>C});var e=o(427),t=o.n(e),r=o(697),i=o.n(r);function a(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t,r){return Math.min(Math.max(e,t),r)}function y(e){return e&&!isNaN(e.width)&&!isNaN(e.height)}function w(e){return"n"===e?"s":"ne"===e?"sw":"e"===e?"w":"se"===e?"nw":"s"===e?"n":"sw"===e?"ne":"w"===e?"e":"nw"===e?"se":e}function C(e,t,r){if(isNaN(e.aspect))return console.warn("`crop.aspect` should be a number in order to make an aspect crop",e),e;var o=m({unit:"px",x:0,y:0},e);return e.width&&(o.height=o.width/e.aspect),e.height&&(o.width=o.height*e.aspect),o.y+o.height>r&&(o.height=r-o.y,o.width=o.height*e.aspect),o.x+o.width>t&&(o.width=t-o.x,o.height=o.width/e.aspect),o}function b(e,t,r){return"%"===e.unit?e:{unit:"%",aspect:e.aspect,x:e.x/t*100,y:e.y/r*100,width:e.width/t*100,height:e.height/r*100}}function x(e,t,r){return e.unit?"px"===e.unit?e:{unit:"px",aspect:e.aspect,x:e.x*t/100,y:e.y*r/100,width:e.width*t/100,height:e.height*r/100}:m(m({},e),{},{unit:"px"})}function O(e,t,r,o){var n=x(t,r,o),i=x(e,r,o),a=m({},n);if(!n.aspect)return n.x<0?(a.x=0,a.width+=n.x):n.x+n.width>r&&(a.width=r-n.x),n.y+n.height>o&&(a.height=o-n.y),a;var s=!1;n.x<0?(a.x=0,a.width+=n.x,a.height=a.width/n.aspect,s=!0):n.x+n.width>r&&(a.width=r-n.x,a.height=a.width/n.aspect,s=!0),s&&i.y>a.y&&(a.y=n.y+(n.height-a.height));var c=!1;return a.y+a.height>o&&(a.height=o-n.y,a.width=a.height*n.aspect,c=!0),c&&i.x>a.x&&(a.x=n.x+(n.width-a.width)),a}var D={capture:!0,passive:!1},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(f,e);var r,o,n,i,s=(n=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(i){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function f(){var e;c(this,f);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return v(u(e=s.call.apply(s,[this].concat(r))),"window","undefined"!=typeof window?window:{}),v(u(e),"document","undefined"!=typeof document?document:{}),v(u(e),"state",{}),v(u(e),"keysDown",new Set),v(u(e),"onCropPointerDown",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=e.mediaDimensions,a=x(o,i.width,i.height);if(!n){t.cancelable&&t.preventDefault(),e.bindDocMove(),e.componentRef.focus({preventScroll:!0});var s=t.target.dataset.ord,c="nw"===s||"w"===s||"sw"===s,d="nw"===s||"n"===s||"ne"===s;e.evData={clientStartX:t.clientX,clientStartY:t.clientY,cropStartWidth:a.width,cropStartHeight:a.height,cropStartX:c?a.x+a.width:a.x,cropStartY:d?a.y+a.height:a.y,xInversed:c,yInversed:d,xCrossOver:c,yCrossOver:d,startXCrossOver:c,startYCrossOver:d,isResize:t.target.dataset.ord,ord:s},e.mouseDownOnCrop=!0,e.setState({cropIsActive:!0})}})),v(u(e),"onComponentPointerDown",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.locked,a=r.keepSelection,s=r.onChange,c=e.mediaWrapperRef.firstChild;if(t.target===c&&c.contains(t.target)&&!(n||i||a&&y(o))){t.cancelable&&t.preventDefault(),e.bindDocMove(),e.componentRef.focus({preventScroll:!0});var d=e.mediaWrapperRef.getBoundingClientRect(),p=t.clientX-d.left,h=t.clientY-d.top,u={unit:"px",aspect:o?o.aspect:void 0,x:p,y:h,width:0,height:0};e.evData={clientStartX:t.clientX,clientStartY:t.clientY,cropStartWidth:u.width,cropStartHeight:u.height,cropStartX:u.x,cropStartY:u.y,xInversed:!1,yInversed:!1,xCrossOver:!1,yCrossOver:!1,startXCrossOver:!1,startYCrossOver:!1,isResize:!0,ord:"nw"},e.mouseDownOnCrop=!0;var l=e.mediaDimensions,f=l.width,m=l.height;s(x(u,f,m),b(u,f,m)),e.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})}})),v(u(e),"onDocPointerMove",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.onChange,a=r.onDragStart;if(!n&&e.mouseDownOnCrop){t.cancelable&&t.preventDefault(),e.dragStarted||(e.dragStarted=!0,a(t));var s,c=u(e).evData;if(c.xDiff=t.clientX-c.clientStartX,c.yDiff=t.clientY-c.clientStartY,(s=c.isResize?e.resizeCrop():e.dragCrop())!==o){var d=e.mediaDimensions,p=d.width,h=d.height;i(x(s,p,h),b(s,p,h))}}})),v(u(e),"onComponentKeyDown",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.onChange,a=r.onComplete;if(!n){e.keysDown.add(t.key);var s=!1;if(y(o)){var c=e.makeNewCrop(),d=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?f.nudgeStepLarge:t.shiftKey?f.nudgeStepMedium:f.nudgeStep;if(e.keysDown.has("ArrowLeft")&&(c.x-=d,s=!0),e.keysDown.has("ArrowRight")&&(c.x+=d,s=!0),e.keysDown.has("ArrowUp")&&(c.y-=d,s=!0),e.keysDown.has("ArrowDown")&&(c.y+=d,s=!0),s){t.cancelable&&t.preventDefault();var p=e.mediaDimensions,h=p.width,u=p.height;c.x=g(c.x,0,h-c.width),c.y=g(c.y,0,u-c.height);var l=x(c,h,u),m=b(c,h,u);i(l,m),a(l,m)}}}})),v(u(e),"onComponentKeyUp",(function(t){e.keysDown.delete(t.key)})),v(u(e),"onDocPointerDone",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.onComplete,a=r.onDragEnd;if(e.unbindDocMove(),!n&&e.mouseDownOnCrop){e.mouseDownOnCrop=!1,e.dragStarted=!1;var s=e.mediaDimensions,c=s.width,d=s.height;a(t),i(x(o,c,d),b(o,c,d)),e.setState({cropIsActive:!1,newCropIsBeingDrawn:!1})}})),v(u(e),"onMediaLoaded",(function(){var t=e.props,r=t.onComplete,o=t.onChange,n=e.createNewCrop(),i=n.pixelCrop,a=n.percentCrop;o(i,a),r(i,a)})),v(u(e),"onImageLoad",(function(t){var r=t.target,o=e.props,n=o.onComplete,i=o.onChange;if(!1!==(0,o.onImageLoaded)(r)){var a=e.createNewCrop(),s=a.pixelCrop,c=a.percentCrop;i(s,c),n(s,c)}})),v(u(e),"bindComponentRef",(function(t){e.componentRef=t})),v(u(e),"bindMediaWrapperRef",(function(t){e.mediaWrapperRef=t})),v(u(e),"bindImageRef",(function(t){e.imageRef=t})),v(u(e),"bindCropSelectionRef",(function(t){e.cropSelectRef=t})),e}return r=f,(o=[{key:"componentDidMount",value:function(){this.componentRef.addEventListener&&this.componentRef.addEventListener("medialoaded",this.onMediaLoaded)}},{key:"componentWillUnmount",value:function(){this.componentRef.removeEventListener&&this.componentRef.removeEventListener("medialoaded",this.onMediaLoaded)}},{key:"componentDidUpdate",value:function(e){var t=this.props.crop;if(this.imageRef&&e.crop!==t&&t.aspect&&(t.width&&!t.height||!t.width&&t.height)){var r=this.imageRef,o=r.width,n=r.height,i=C(this.makeNewCrop(),o,n),a=x(i,o,n),s=b(i,o,n);this.props.onChange(a,s),this.props.onComplete(a,s)}}},{key:"bindDocMove",value:function(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,D),this.document.addEventListener("pointerup",this.onDocPointerDone,D),this.document.addEventListener("pointercancel",this.onDocPointerDone,D),this.docMoveBound=!0)}},{key:"unbindDocMove",value:function(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,D),this.document.removeEventListener("pointerup",this.onDocPointerDone,D),this.document.removeEventListener("pointercancel",this.onDocPointerDone,D),this.docMoveBound=!1)}},{key:"createNewCrop",value:function(){var e,t,r,o=this.mediaDimensions,n=o.width,i=o.height,a=(e=this.makeNewCrop(),t=n,r=i,!e.aspect||e.width&&e.height?e:C(e,t,r));return{pixelCrop:x(a,n,i),percentCrop:b(a,n,i)}}},{key:"mediaDimensions",get:function(){var e=this.mediaWrapperRef;return{width:e.clientWidth,height:e.clientHeight}}},{key:"getCropStyle",value:function(){var e=this.makeNewCrop(this.props.crop?this.props.crop.unit:"px");return{top:"".concat(e.y).concat(e.unit),left:"".concat(e.x).concat(e.unit),width:"".concat(e.width).concat(e.unit),height:"".concat(e.height).concat(e.unit)}}},{key:"getNewSize",value:function(){var e,t=this.props,r=t.crop,o=t.minWidth,n=t.maxWidth,i=t.minHeight,a=t.maxHeight,s=this.evData,c=this.mediaDimensions,d=c.width,p=c.height,h=s.cropStartWidth+s.xDiff;return s.xCrossOver&&(h=Math.abs(h)),h=g(h,o,n||d),e=r.aspect?h/r.aspect:s.cropStartHeight+s.yDiff,s.yCrossOver&&(e=Math.min(Math.abs(e),s.cropStartY)),e=g(e,i,a||p),r.aspect&&(h=g(e*r.aspect,0,d)),{width:h,height:e}}},{key:"dragCrop",value:function(){var e=this.makeNewCrop(),t=this.evData,r=this.mediaDimensions,o=r.width,n=r.height;return e.x=g(t.cropStartX+t.xDiff,0,o-e.width),e.y=g(t.cropStartY+t.yDiff,0,n-e.height),e}},{key:"resizeCrop",value:function(){var e=this.evData,t=this.makeNewCrop(),r=e.ord;e.xInversed&&(e.xDiff-=2*e.cropStartWidth),e.yInversed&&(e.yDiff-=2*e.cropStartHeight);var o=this.getNewSize(),n=e.cropStartX,i=e.cropStartY;e.xCrossOver&&(n=t.x+(t.width-o.width)),e.yCrossOver&&(i=!1===e.lastYCrossover?t.y-o.height:t.y+(t.height-o.height));var a=this.mediaDimensions,s=a.width,c=a.height,d=O(this.props.crop,{unit:t.unit,x:n,y:i,width:o.width,height:o.height,aspect:t.aspect},s,c);return t.aspect||f.xyOrds.indexOf(r)>-1?(t.x=d.x,t.y=d.y,t.width=d.width,t.height=d.height):f.xOrds.indexOf(r)>-1?(t.x=d.x,t.width=d.width):f.yOrds.indexOf(r)>-1&&(t.y=d.y,t.height=d.height),e.lastYCrossover=e.yCrossOver,this.crossOverCheck(),t.width<this.props.minWidth||t.height<this.props.minHeight?this.props.crop:t}},{key:"createCropSelection",value:function(){var e=this.props,r=e.disabled,o=e.locked,n=e.renderSelectionAddon,i=e.ruleOfThirds,a=e.crop,s=this.getCropStyle();return t().createElement("div",{ref:this.bindCropSelectionRef,style:s,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown},!r&&!o&&t().createElement("div",{className:"ReactCrop__drag-elements"},t().createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w"})),n&&y(a)&&t().createElement("div",{className:"ReactCrop__selection-addon",onMouseDown:function(e){return e.stopPropagation()}},n(this.state)),i&&t().createElement(t().Fragment,null,t().createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),t().createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}},{key:"makeNewCrop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"px",t=m(m({},f.defaultCrop),this.props.crop||{}),r=this.mediaDimensions,o=r.width,n=r.height;return"px"===e?x(t,o,n):b(t,o,n)}},{key:"crossOverCheck",value:function(){var e=this.evData,t=this.props,r=t.minWidth,o=t.minHeight;!r&&(!e.xCrossOver&&-Math.abs(e.cropStartWidth)-e.xDiff>=0||e.xCrossOver&&-Math.abs(e.cropStartWidth)-e.xDiff<=0)&&(e.xCrossOver=!e.xCrossOver),!o&&(!e.yCrossOver&&-Math.abs(e.cropStartHeight)-e.yDiff>=0||e.yCrossOver&&-Math.abs(e.cropStartHeight)-e.yDiff<=0)&&(e.yCrossOver=!e.yCrossOver);var n=e.xCrossOver!==e.startXCrossOver,i=e.yCrossOver!==e.startYCrossOver;e.inversedXOrd=!!n&&w(e.ord),e.inversedYOrd=!!i&&w(e.ord)}},{key:"render",value:function(){var e=this.props,r=e.children,o=e.circularCrop,n=e.className,i=e.crossorigin,s=e.crop,c=e.disabled,d=e.locked,p=e.imageAlt,h=e.onImageError,u=e.renderComponent,l=e.src,f=e.style,m=e.imageStyle,v=e.ruleOfThirds,g=this.state,w=g.cropIsActive,C=g.newCropIsBeingDrawn,b=y(s)&&this.componentRef?this.createCropSelection():null,x=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}("ReactCrop",n,{"ReactCrop--active":w,"ReactCrop--disabled":c,"ReactCrop--locked":d,"ReactCrop--new-crop":C,"ReactCrop--fixed-aspect":s&&s.aspect,"ReactCrop--circular-crop":s&&o,"ReactCrop--rule-of-thirds":s&&v,"ReactCrop--invisible-crop":!this.dragStarted&&s&&!s.width&&!s.height});return t().createElement("div",{ref:this.bindComponentRef,className:x,style:f,onPointerDown:this.onComponentPointerDown,tabIndex:0,onKeyDown:this.onComponentKeyDown,onKeyUp:this.onComponentKeyUp},t().createElement("div",{ref:this.bindMediaWrapperRef},u||t().createElement("img",{ref:this.bindImageRef,crossOrigin:i,className:"ReactCrop__image",style:m,src:l,onLoad:this.onImageLoad,onError:h,alt:p})),r,b)}}])&&d(r.prototype,o),f}(e.PureComponent);S.xOrds=["e","w"],S.yOrds=["n","s"],S.xyOrds=["nw","ne","se","sw"],S.nudgeStep=1,S.nudgeStepMedium=10,S.nudgeStepLarge=100,S.defaultCrop={x:0,y:0,width:0,height:0,unit:"px"},S.propTypes={className:i().string,children:i().oneOfType([i().arrayOf(i().node),i().node]),circularCrop:i().bool,crop:i().shape({aspect:i().number,x:i().number,y:i().number,width:i().number,height:i().number,unit:i().oneOf(["px","%"])}),crossorigin:i().string,disabled:i().bool,locked:i().bool,imageAlt:i().string,imageStyle:i().shape({}),keepSelection:i().bool,minWidth:i().number,minHeight:i().number,maxWidth:i().number,maxHeight:i().number,onChange:i().func.isRequired,onImageError:i().func,onComplete:i().func,onImageLoaded:i().func,onDragStart:i().func,onDragEnd:i().func,src:i().string.isRequired,style:i().shape({}),renderComponent:i().node,renderSelectionAddon:i().func,ruleOfThirds:i().bool},S.defaultProps={circularCrop:!1,className:void 0,crop:void 0,crossorigin:void 0,disabled:!1,locked:!1,imageAlt:"",maxWidth:void 0,maxHeight:void 0,minWidth:0,minHeight:0,keepSelection:!1,onComplete:function(){},onImageError:function(){},onImageLoaded:function(){},onDragStart:function(){},onDragEnd:function(){},children:void 0,style:void 0,renderComponent:void 0,imageStyle:void 0,renderSelectionAddon:void 0,ruleOfThirds:!1}})(),n})()}));

/***/ }),

/***/ "./node_modules/reactstrap/es/Dropdown.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/Dropdown.js ***!
  \************************************************/
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
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/reactstrap/es/DropdownContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag", "menuRole"];

/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md






var propTypes = {
  a11y: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['up', 'down', 'left', 'right']),
  group: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  nav: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['prepend', 'append'])]),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  inNavbar: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  setActiveFromChild: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  menuRole: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['listbox', 'menu'])
};
var defaultProps = {
  a11y: true,
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.space, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.enter, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.up, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.down, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.end, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.home];

var Dropdown = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.removeEvents = _this.removeEvents.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.toggle = _this.toggle.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleMenuRef = _this.handleMenuRef.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.containerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createRef();
    _this.menuRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createRef();
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.handleMenuRef = function handleMenuRef(menuRef) {
    this.menuRef.current = menuRef;
  };

  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled,
      // Callback that should be called by DropdownMenu to provide a ref to
      // a HTML tag that's used for the DropdownMenu
      onMenuRef: this.handleMenuRef,
      menuRole: this.props.menuRole
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };

  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };

  _proto.getMenu = function getMenu() {
    return this.menuRef.current;
  };

  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  };

  _proto.getItemType = function getItemType() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.getMenuItems = function getMenuItems() {
    // In a real menu with a child DropdownMenu, `this.getMenu()` should never
    // be null, but it is sometimes null in tests. To mitigate that, we just
    // use `this.getContainer()` as the fallback `menuContainer`.
    var menuContainer = this.getMenu() || this.getContainer();
    return [].slice.call(menuContainer.querySelectorAll("[role=\"" + this.getItemType() + "\"]"));
  };

  _proto.addEvents = function addEvents() {
    var _this2 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.addEventListener(event, _this2.handleDocumentClick, true);
    });
  };

  _proto.removeEvents = function removeEvents() {
    var _this3 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.removeEventListener(event, _this3.handleDocumentClick, true);
    });
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.tab)) return;
    var container = this.getContainer();
    var menu = this.getMenu();
    var clickIsInContainer = container.contains(e.target) && container !== e.target;
    var clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;

    if ((clickIsInContainer || clickIsInMenu) && (e.type !== 'keyup' || e.which === _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this4 = this;

    var isTargetMenuItem = e.target.getAttribute('role') === 'menuitem' || e.target.getAttribute('role') === 'option';
    var isTargetMenuCtrl = this.getMenuCtrl() === e.target;
    var isTab = _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.tab === e.which;

    if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (isTargetMenuCtrl) {
      if ([_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.space, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.enter, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.up, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.down].indexOf(e.which) > -1) {
        // Open the menu (if not open) and focus the first menu item
        if (!this.props.isOpen) {
          this.toggle(e);
        }

        setTimeout(function () {
          return _this4.getMenuItems()[0].focus();
        });
      } else if (this.props.isOpen && isTab) {
        // Focus the first menu item if tabbing from an open menu. We need this
        // for cases where the DropdownMenu sets a custom container, which may
        // not be the natural next item to tab to from the DropdownToggle.
        e.preventDefault();
        this.getMenuItems()[0].focus();
      } else if (this.props.isOpen && e.which === _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && isTargetMenuItem) {
      if ([_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.tab, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.space, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.down, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.up].indexOf(e.which) > -1 || [_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.n, _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);

        if (_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.up === e.which || _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.down === e.which || _utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();

        _$menuitems[_$menuitems.length - 1].focus();
      } else if (_utils__WEBPACK_IMPORTED_MODULE_7__.keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();

        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();

        var charPressed = String.fromCharCode(e.which).toLowerCase();

        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();

            break;
          }
        }
      }
    }
  };

  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _classNames, _ref;

    var _omit = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.omit)(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        direction = _omit.direction,
        isOpen = _omit.isOpen,
        group = _omit.group,
        size = _omit.size,
        nav = _omit.nav,
        setActiveFromChild = _omit.setActiveFromChild,
        active = _omit.active,
        addonType = _omit.addonType,
        tag = _omit.tag,
        menuRole = _omit.menuRole,
        attrs = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_omit, _excluded);

    var Tag = tag || (nav ? 'li' : 'div');
    var subItemIsActive = false;

    if (setActiveFromChild) {
      react__WEBPACK_IMPORTED_MODULE_4__.Children.map(this.props.children[1].props.children, function (dropdownItem) {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, direction !== 'down' && "drop" + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames['btn-group'] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_DropdownContext__WEBPACK_IMPORTED_MODULE_8__.DropdownContext.Provider, {
      value: this.getContextValue()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_popper__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./node_modules/reactstrap/es/DropdownContext.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactstrap/es/DropdownContext.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownContext": () => (/* binding */ DropdownContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 *  disabled: PropTypes.bool
 * }
 */

var DropdownContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./node_modules/reactstrap/es/DropdownItem.js":
/*!****************************************************!*\
  !*** ./node_modules/reactstrap/es/DropdownItem.js ***!
  \****************************************************/
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
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/reactstrap/es/DropdownContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "divider", "tag", "header", "active", "text"];





var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  divider: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  header: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
var defaultProps = {
  tag: 'button',
  toggle: true
};

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.getTabIndex = _this.getTabIndex.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.onClick = function onClick(e) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        header = _this$props.header,
        divider = _this$props.divider,
        text = _this$props.text;

    if (disabled || header || divider || text) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };

  _proto.getTabIndex = function getTabIndex() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        header = _this$props2.header,
        divider = _this$props2.divider,
        text = _this$props2.text;

    if (disabled || header || divider || text) {
      return '-1';
    }

    return '0';
  };

  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? this.getRole() : undefined;

    var _omit = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.omit)(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        text = _omit.text,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_omit, _excluded);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, {
      disabled: props.disabled,
      'dropdown-item': !divider && !header && !text,
      active: active,
      'dropdown-header': header,
      'dropdown-divider': divider,
      'dropdown-item-text': text
    }), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      } else if (text) {
        Tag = 'span';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }));
  };

  return DropdownItem;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextType = _DropdownContext__WEBPACK_IMPORTED_MODULE_8__.DropdownContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/DropdownMenu.js":
/*!****************************************************!*\
  !*** ./node_modules/reactstrap/es/DropdownMenu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/reactstrap/es/DropdownContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist", "positionFixed", "container"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node.isRequired),
  right: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  flip: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  modifiers: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  persist: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  positionFixed: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  container: _utils__WEBPACK_IMPORTED_MODULE_7__.targetPropType
};
var defaultProps = {
  tag: 'div',
  flip: true
};
var noFlipModifier = {
  flip: {
    enabled: false
  }
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};

var DropdownMenu = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'listbox';
    }

    return 'menu';
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        right = _this$props.right,
        tag = _this$props.tag,
        flip = _this$props.flip,
        modifiers = _this$props.modifiers,
        persist = _this$props.persist,
        positionFixed = _this$props.positionFixed,
        container = _this$props.container,
        attrs = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, _excluded);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, 'dropdown-menu', {
      'dropdown-menu-right': right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;

    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || 'bottom';
      var position2 = right ? 'end' : 'start';
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = !flip ? _objectSpread(_objectSpread({}, modifiers), noFlipModifier) : modifiers;
      var popperPositionFixed = !!positionFixed;
      var popper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_popper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placement: poperPlacement,
        modifiers: poperModifiers,
        positionFixed: popperPositionFixed
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement;

        var combinedStyle = _objectSpread(_objectSpread({}, _this.props.style), style);

        var handleRef = function handleRef(tagRef) {
          // Send the ref to `react-popper`
          ref(tagRef); // Send the ref to the parent Dropdown so that clicks outside
          // it will cause it to close

          var onMenuRef = _this.context.onMenuRef;
          if (onMenuRef) onMenuRef(tagRef);
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          tabIndex: "-1",
          role: _this.getRole(),
          ref: handleRef
        }, attrs, {
          style: combinedStyle,
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "x-placement": placement
        }));
      });

      if (container) {
        return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal(popper, (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getTarget)(container));
      } else {
        return popper;
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      tabIndex: "-1",
      role: this.getRole()
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "x-placement": attrs.placement
    }));
  };

  return DropdownMenu;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

;
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextType = _DropdownContext__WEBPACK_IMPORTED_MODULE_10__.DropdownContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenu);

/***/ }),

/***/ "./node_modules/reactstrap/es/DropdownToggle.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/DropdownToggle.js ***!
  \******************************************************/
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
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Reference.js");
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/reactstrap/es/DropdownContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./node_modules/reactstrap/es/Button.js");




var _excluded = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];







var propTypes = {
  caret: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  'aria-haspopup': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  split: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  nav: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
var defaultProps = {
  color: 'secondary',
  'aria-haspopup': true
};

var DropdownToggle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  _proto.getRole = function getRole() {
    return this.context.menuRole || this.props['aria-haspopup'];
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color,
        cssModule = _this$props.cssModule,
        caret = _this$props.caret,
        split = _this$props.split,
        nav = _this$props.nav,
        tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav
    }), cssModule);
    var children = typeof props.children !== 'undefined' ? props.children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      className: "sr-only"
    }, ariaLabel);
    var Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = _Button__WEBPACK_IMPORTED_MODULE_8__["default"];
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children: children
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_popper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      innerRef: innerRef
    }, function (_ref) {
      var _ref2;

      var ref = _ref.ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        "aria-haspopup": _this2.getRole(),
        children: children
      }));
    });
  };

  return DropdownToggle;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextType = _DropdownContext__WEBPACK_IMPORTED_MODULE_10__.DropdownContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownToggle);

/***/ })

}]);