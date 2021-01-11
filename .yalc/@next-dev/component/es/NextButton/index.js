import "antd/es/button/style";
import _Button from "antd/es/button";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { memo } from 'react';
import classnames from 'classnames';
export var NextButton = function NextButton(_ref) {
  var nextTheme = _ref.nextTheme,
      _ref$btnDisplay = _ref.btnDisplay,
      btnDisplay = _ref$btnDisplay === void 0 ? 'flex' : _ref$btnDisplay,
      _ref$btnJustify = _ref.btnJustify,
      btnJustify = _ref$btnJustify === void 0 ? 'center' : _ref$btnJustify,
      customStyle = _ref.customStyle,
      btnCls = _ref.btnCls,
      style = _ref.style,
      children = _ref.children,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["nextTheme", "btnDisplay", "btnJustify", "customStyle", "btnCls", "style", "children", "disabled"]);

  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: btnDisplay,
      justifyContent: btnJustify
    },
    className: classnames(!disabled && nextTheme && nextTheme, btnCls)
  }, /*#__PURE__*/React.createElement(_Button, _extends({
    disabled: Boolean(rest.loading),
    style: _objectSpread({
      color: customStyle === null || customStyle === void 0 ? void 0 : customStyle.textColor,
      backgroundColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.backgroundColor,
      borderColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.backgroundColor
    }, style)
  }, rest), children));
};
export default /*#__PURE__*/memo(NextButton);