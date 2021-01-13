import 'antd/es/button/style';
import _Button from 'antd/es/button';
import 'antd/es/input/style';
import _Input from 'antd/es/input';
import 'antd/es/avatar/style';
import _Avatar from 'antd/es/avatar';
import 'antd/es/form/style';
import _Form from 'antd/es/form';

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

import React from 'react';
import { useIntl, enUS } from '@next-dev/provider/es';
var FormItem = _Form.Item;
export var defaultProps = {
  next: {
    logoWith: 40,
    alt: 'logo',
    title: 'logo',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
};

var NextLockScreen = function NextLockScreen(_ref) {
  var rest = _extends({}, _ref);

  var _useIntl = useIntl(),
    getMessage = _useIntl.getMessage;

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'gx-login-container',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'gx-login-content gx-text-center',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'gx-login-header',
        },
        /*#__PURE__*/ React.createElement(_Avatar, {
          shape: 'circle',
          className: 'gx-size-120',
          src: 'https://via.placeholder.com/150x150',
        }),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'gx-mb-4',
        },
        /*#__PURE__*/ React.createElement('h3', null, 'John Smith'),
        /*#__PURE__*/ React.createElement(
          'p',
          null,
          getMessage('appModule_enterPasswordUnlock', enUS.appModule_enterPasswordUnlock),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Form,
        _extends(
          {
            className: 'gx-login-form gx-form-row0',
          },
          rest,
        ),
        /*#__PURE__*/ React.createElement(
          FormItem,
          {
            name: 'password',
            rules: [
              {
                required: true,
                message: 'Please input your Password!',
              },
            ],
          },
          /*#__PURE__*/ React.createElement(_Input, {
            type: 'password',
            placeholder: 'Password',
          }),
        ),
        /*#__PURE__*/ React.createElement(
          FormItem,
          null,
          /*#__PURE__*/ React.createElement(
            _Button,
            {
              type: 'primary',
              htmlType: 'submit',
            },
            getMessage('app_userAuth_unLock', enUS.app_userAuth_unLock),
          ),
        ),
      ),
    ),
  );
};

export default NextLockScreen;
