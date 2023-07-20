(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./resources/lms/src/admin/components/users/CreateUser.js":
/*!****************************************************************!*\
  !*** ./resources/lms/src/admin/components/users/CreateUser.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserForm */ "./resources/lms/src/admin/components/users/UserForm.js");
/* harmony import */ var _shared_prepareUserFormData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/prepareUserFormData */ "./resources/lms/src/admin/shared/prepareUserFormData.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/userAction */ "./resources/lms/src/admin/store/actions/userAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var CreateUser = function CreateUser(props) {
  var addUser = props.addUser,
      toggleModal = props.toggleModal;

  var onSaveUser = function onSaveUser(formValues) {
    addUser(Object(_shared_prepareUserFormData__WEBPACK_IMPORTED_MODULE_4__["default"])(formValues), _constants__WEBPACK_IMPORTED_MODULE_7__["Filters"].OBJ);
  };

  var prepareFormOption = {
    initialValues: {
      is_active: true,
      isCreate: true
    },
    onSaveUser: onSaveUser,
    onCancel: toggleModal
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserForm__WEBPACK_IMPORTED_MODULE_3__["default"], prepareFormOption)
  }));
};

CreateUser.propTypes = {
  addUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  addUser: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_6__["addUser"]
})(CreateUser));

/***/ }),

/***/ "./resources/lms/src/admin/components/users/DeleteUser.js":
/*!****************************************************************!*\
  !*** ./resources/lms/src/admin/components/users/DeleteUser.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/lms/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/userAction */ "./resources/lms/src/admin/store/actions/userAction.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var DeleteUser = function DeleteUser(props) {
  var userId = props.userId,
      deleteUser = props.deleteUser,
      toggleModal = props.toggleModal;

  var onDeleteUser = function onDeleteUser() {
    deleteUser(userId);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onDelete: onDeleteUser,
      onCancel: toggleModal
    })
  }));
};

DeleteUser.propTypes = {
  userId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  deleteUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  deleteUser: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_5__["deleteUser"]
})(DeleteUser));

/***/ }),

/***/ "./resources/lms/src/admin/components/users/UserModal.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/admin/components/users/UserModal.js ***!
  \***************************************************************/
/*! exports provided: UserModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModal", function() { return UserModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateUser */ "./resources/lms/src/admin/components/users/CreateUser.js");
/* harmony import */ var _EditUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditUser */ "./resources/lms/src/admin/components/users/EditUser.js");
/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteUser */ "./resources/lms/src/admin/components/users/DeleteUser.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/lms/src/shared/modal-config/ModalConfig.js");







var UserModal = function UserModal(props) {
  var user = props.user,
      isCreate = props.isCreate,
      isEdit = props.isEdit,
      isDelete = props.isDelete;
  var editConfig = {
    user: user
  };
  var delConfig = {
    userId: user ? user.id : null
  };
  var modalOptions = {
    modalTitle: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__["getModalTitle"])(isCreate, isEdit, isDelete, 'users.modal.add.title', 'users.modal.edit.title', 'users.modal.delete.title'),
    NewComponent: _CreateUser__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditComponent: _EditUser__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteComponent: _DeleteUser__WEBPACK_IMPORTED_MODULE_4__["default"],
    deleteKey: user ? user.first_name + ' ' + user.last_name : null,
    editConfig: editConfig,
    delConfig: delConfig,
    isWide: true,
    props: props
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_6__["default"], modalOptions);
};
UserModal.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isCreate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (UserModal);

/***/ }),

/***/ "./resources/lms/src/admin/components/users/UserTable.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/admin/components/users/UserTable.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Users.scss */ "./resources/lms/src/admin/components/users/Users.scss");
/* harmony import */ var _Users_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../appConstant */ "./resources/lms/src/appConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/lms/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/ToggleSwitch */ "./resources/lms/src/shared/components/ToggleSwitch.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/lms/src/shared/table/ReactDataTable.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/lms/src/admin/shared/sharedMethod.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
















var UserTable = function UserTable(props) {
  var users = props.users,
      onClickModal = props.onClickModal,
      setActiveInactive = props.setActiveInactive,
      history = props.history,
      isLoading = props.isLoading,
      totalRecord = props.totalRecord,
      onChangeData = props.onChangeData,
      user = props.user;
  var columns = [{
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('profile.title'),
    selector: 'image',
    width: '90px',
    cell: function cell(row) {
      var imageUrl = row.image_path ? row.image_path : null;
      if (imageUrl) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: imageUrl,
        className: "user-table-row__profile-img",
        alt: imageUrl
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user__avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getAvatarName"])(row.first_name + ' ' + row.last_name)));
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('react-data-table.name.column'),
    selector: 'first_name',
    sortable: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.first_name + ' ' + row.last_name);
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('profile.input.email.label'),
    selector: 'email',
    sortable: true
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('profile.input.phone.label'),
    selector: 'phone',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.phone ? row.phone : 'N/A');
    },
    sortable: true
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('users.select.role.label'),
    selector: 'role_name',
    sortable: true,
    cell: function cell(row) {
      if (row.roles) {
        row.role_name = row.roles[0].display_name;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.role_name);
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('react-data-table.status.column'),
    selector: 'status',
    width: '90px',
    center: true,
    cell: function cell(row) {
      return Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__["getCurrentUser"])().id !== row.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-form__switch"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "is_active",
        checked: row.is_active,
        component: _shared_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_8__["default"],
        onChange: function onChange() {
          return onChecked(row);
        }
      })) : null;
    }
  }, {
    name: Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__["getFormattedMessage"])('react-data-table.action.column'),
    selector: 'id',
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    center: true,
    width: '150px',
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onOpenModal: onClickModal,
        isHideDetailIcon: false,
        goToDetailScreen: goToUserDetail,
        item: row,
        isHideDeleteIcon: user.id === row.id
      });
    }
  }];

  var onChecked = function onChecked(user) {
    setActiveInactive(user.id, user.is_active);
  };

  var goToUserDetail = function goToUserDetail(userId) {
    history.push("".concat(_constants__WEBPACK_IMPORTED_MODULE_6__["Routes"].USERS + userId, "/details"));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
    items: users,
    columns: columns,
    emptyStateMessageId: "users.empty-state.title",
    emptyNotFoundStateMessageId: "users.not-found.empty-state.title",
    loading: isLoading,
    totalRows: totalRecord,
    onChange: onChangeData,
    icon: _constants__WEBPACK_IMPORTED_MODULE_6__["icon"].USERS
  });
};

UserTable.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  users: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  totalRecord: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onChangeData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onClickModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  setActiveInactive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.profile
  };
};

var userForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'userForm'
})(UserTable);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  addToast: _store_action_toastAction__WEBPACK_IMPORTED_MODULE_12__["addToast"]
})(userForm));

/***/ }),

/***/ "./resources/lms/src/admin/components/users/Users.js":
/*!***********************************************************!*\
  !*** ./resources/lms/src/admin/components/users/Users.js ***!
  \***********************************************************/
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
/* harmony import */ var _UserModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserModal */ "./resources/lms/src/admin/components/users/UserModal.js");
/* harmony import */ var _UserTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserTable */ "./resources/lms/src/admin/components/users/UserTable.js");
/* harmony import */ var _Users_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Users.scss */ "./resources/lms/src/admin/components/users/Users.scss");
/* harmony import */ var _Users_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/lms/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/userAction */ "./resources/lms/src/admin/store/actions/userAction.js");
/* harmony import */ var _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/roleAction */ "./resources/lms/src/admin/store/actions/roleAction.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var Users = function Users(props) {
  var users = props.users,
      fetchUsers = props.fetchUsers,
      toggleModal = props.toggleModal,
      history = props.history,
      isLoading = props.isLoading,
      totalRecord = props.totalRecord,
      activeInactiveUser = props.activeInactiveUser;

  var _openModal = Object(_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_10__["openModal"])(),
      _openModal2 = _slicedToArray(_openModal, 5),
      isCreate = _openModal2[0],
      isEdit = _openModal2[1],
      isDelete = _openModal2[2],
      user = _openModal2[3],
      onOpenModal = _openModal2[4];

  var cardModalProps = {
    user: user,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal
  };

  var onChangeData = function onChangeData(filter) {
    fetchUsers(filter, true);
  };

  var onClickModal = function onClickModal(isEdit) {
    var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, user, isDelete);
    toggleModal();
  };

  var setActiveInactive = function setActiveInactive(id, isActive) {
    if (id) activeInactiveUser(id, isActive);
  };

  var cardBodyProps = {
    users: users,
    setActiveInactive: setActiveInactive,
    onClickModal: onClickModal,
    history: history,
    isLoading: isLoading,
    totalRecord: totalRecord,
    onChangeData: onChangeData
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Users"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "page-heading"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('users.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return onClickModal(false);
    },
    size: "md",
    color: "primary ml-2"
  }, Object(_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__["getFormattedMessage"])('users.modal.add.title')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserTable__WEBPACK_IMPORTED_MODULE_5__["default"], cardBodyProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserModal__WEBPACK_IMPORTED_MODULE_4__["default"], cardModalProps))))));
};

Users.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  users: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  totalRecord: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  activeInactiveUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  fetchRoles: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  toggleModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  var users = state.users,
      isLoading = state.isLoading,
      totalRecord = state.totalRecord;
  return {
    users: users,
    isLoading: isLoading,
    totalRecord: totalRecord
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  fetchUsers: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_12__["fetchUsers"],
  activeInactiveUser: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_12__["activeInactiveUser"],
  fetchRoles: _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_13__["fetchRoles"],
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__["toggleModal"]
})(Users));

/***/ })

}]);