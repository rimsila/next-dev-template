import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/form/style";
import _Form from "antd/es/form";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { useIntl } from '../../../../provider/es';
import { LAYOUT_COL_AUTH } from '@next-dev/core/es/constants';
var FormItem = _Form.Item;
export var defaultProps = {
  next: {
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    logoWidth: 40
  }
};

var ResetPassword = function ResetPassword(_ref) {
  var next = _ref.next,
      rest = _objectWithoutProperties(_ref, ["next"]);

  var _useIntl = useIntl(),
      getMessage = _useIntl.getMessage;

  var _defaultProps$next = defaultProps.next,
      logo = _defaultProps$next.logo,
      logoWidth = _defaultProps$next.logoWidth;
  return /*#__PURE__*/React.createElement(_Col, _extends({
    className: "box_extend"
  }, LAYOUT_COL_AUTH, next === null || next === void 0 ? void 0 : next.colProps), /*#__PURE__*/React.createElement("div", {
    className: "gx-login-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx-login-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: (next === null || next === void 0 ? void 0 : next.logo) || logo,
    width: (next === null || next === void 0 ? void 0 : next.logoWidth) || logoWidth,
    alt: "wieldy",
    title: "wieldy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gx-mb-4"
  }, /*#__PURE__*/React.createElement("h2", null, "Reset Password"), /*#__PURE__*/React.createElement("p", null, " ", getMessage('appModule_enterPasswordReset', ''))), /*#__PURE__*/React.createElement(_Form, _extends({
    className: "gx-login-form gx-form-row0"
  }, rest), /*#__PURE__*/React.createElement(FormItem, {
    rules: [{
      required: true,
      message: 'Please input your password!'
    }],
    name: "password"
  }, /*#__PURE__*/React.createElement(_Input, {
    type: "password",
    placeholder: "New Password"
  })), /*#__PURE__*/React.createElement(FormItem, {
    name: "confirm",
    rules: [{
      required: true,
      message: 'Please confirm your password!'
    }]
  }, /*#__PURE__*/React.createElement(_Input, {
    placeholder: "Retype New Password",
    type: "password"
  })), /*#__PURE__*/React.createElement(FormItem, null, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    htmlType: "submit"
  }, getMessage('app_userAuth_reset', ''))))));
};

export default ResetPassword;