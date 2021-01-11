import "antd/es/message/style";
import _message from "antd/es/message";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import axios from 'axios';
import omit from 'lodash/omit';
import { getToken, setToken } from './authority';
import { newGuid } from './utils';
import { encrypt, decrypt, encryptKey } from './crypto';
import { CryptoType } from './core';
var instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeoutErrorMessage: 'Request timed out, please try again!'
});
export var configInstance = function configInstance(config) {
  instance = axios.create(config);
};
var globalHeaders;
export var configGlobalHeader = function configGlobalHeader(func) {
  globalHeaders = func;
};

var refreshToken = function refreshToken() {
  return Promise.reject(new Error('refreshToken has not been initialized'));
};

export var configRefreshToken = function configRefreshToken(func) {
  refreshToken = func;
};
var commonRequestInterceptor = [function (option) {
  var config = option;
  var tokenStore = getToken();

  if (tokenStore && tokenStore.token) {
    config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
      Authorization: "Bearer ".concat(tokenStore.token)
    });
  }

  if (config.crypto) {
    config['cryptoKey'] = newGuid();

    if (config.crypto === CryptoType.In || config.crypto === CryptoType.Both) {
      config.data = encrypt(config.data, config['cryptoKey']);
    }

    config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
      Triple_DES_Key: encryptKey(config['cryptoKey'])
    });
  }

  if (globalHeaders) {
    var otherHeaders = globalHeaders();

    if (otherHeaders) {
      config.headers = _objectSpread(_objectSpread({}, config.headers), otherHeaders);
    }
  }

  return config;
}];
var commonResponseInterceptor = [function (response) {
  var data = response.data,
      config = response.config;
  var requestConfig = config;

  if (requestConfig.responseType && requestConfig.responseType.toLowerCase() === 'arraybuffer') {
    return Promise.resolve(data);
  }

  if (requestConfig.successTip) {
    _message.success('Operation successful', 2);
  }

  if (requestConfig.crypto === CryptoType.Out || requestConfig.crypto === CryptoType.Both) {
    if (typeof data === 'string') {
      var decryptData = decrypt(data, config['cryptoKey']);
      return Promise.resolve(JSON.parse(decryptData));
    }
  }

  return Promise.resolve(data);
}, function (_ref) {
  var response = _ref.response;
  return Promise.reject(response);
}];
var isRefreshing = false;
var requests = [];
var commonResponseWithRefreshTokenInterceptor = [function (response) {
  var data = response.data,
      config = response.config;
  var requestConfig = config;

  if (requestConfig.responseType && requestConfig.responseType.toLowerCase() === 'arraybuffer') {
    return Promise.resolve(data);
  }

  if (requestConfig.crypto === CryptoType.Out || requestConfig.crypto === CryptoType.Both) {
    if (typeof data === 'string') {
      var decryptData = decrypt(data, config['cryptoKey']);
      return Promise.resolve(JSON.parse(decryptData));
    }
  }

  return Promise.resolve(data);
}, function (_ref2) {
  var response = _ref2.response;

  if (!response || response.status !== 401) {
    return Promise.reject(response);
  }

  var token = getToken();

  if (!token) {
    return Promise.reject(response);
  }

  var config = response.config;

  if (!isRefreshing) {
    isRefreshing = true;
    return refreshToken().then(function (result) {
      if (!result || !result.token) {
        throw new Error('Refresh token failed, no new token was obtained');
      }

      setToken({
        token: result.token,
        refreshToken: result.refreshToken
      });
      requests.forEach(function (cb) {
        return cb();
      });
      requests = [];
      return request(config);
    }).finally(function () {
      isRefreshing = false;
    });
  }

  return new Promise(function (resolve) {
    requests.push(function () {
      resolve(request(config));
    });
  });
}];
export function request(_x) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opt) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return instance.request(opt);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _request.apply(this, arguments);
}

export function get(_x2, _x3) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, opt) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return request(_objectSpread(_objectSpread({
              url: url
            }, omit(opt, 'data')), {}, {
              method: 'get',
              params: _objectSpread({
                timespan: new Date().getTime()
              }, opt === null || opt === void 0 ? void 0 : opt.data),
              successTip: false
            }));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _get.apply(this, arguments);
}

export function post(_x4, _x5) {
  return _post.apply(this, arguments);
}

function _post() {
  _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, opt) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return request(_objectSpread(_objectSpread({
              url: url,
              successTip: true
            }, opt), {}, {
              method: 'post'
            }));

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _post.apply(this, arguments);
}

export function put(_x6, _x7) {
  return _put.apply(this, arguments);
}

function _put() {
  _put = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url, opt) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return request(_objectSpread(_objectSpread({
              url: url,
              successTip: true
            }, opt), {}, {
              method: 'put'
            }));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _put.apply(this, arguments);
}

export function patch(_x8, _x9) {
  return _patch.apply(this, arguments);
}

function _patch() {
  _patch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url, opt) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return request(_objectSpread(_objectSpread({
              url: url,
              successTip: true
            }, opt), {}, {
              method: 'patch'
            }));

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _patch.apply(this, arguments);
}

export function del(_x10, _x11) {
  return _del.apply(this, arguments);
}

function _del() {
  _del = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(url, opt) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return request(_objectSpread(_objectSpread({
              url: url,
              successTip: true
            }, opt), {}, {
              method: 'delete'
            }));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _del.apply(this, arguments);
}

export function head(_x12, _x13) {
  return _head.apply(this, arguments);
}

function _head() {
  _head = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(url, opt) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return request(_objectSpread(_objectSpread({
              url: url,
              successTip: true
            }, opt), {}, {
              method: 'HEAD'
            }));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _head.apply(this, arguments);
}

export function options(_x14, _x15) {
  return _options.apply(this, arguments);
}

function _options() {
  _options = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(url, opt) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return request(_objectSpread(_objectSpread({
              url: url,
              successTip: true
            }, opt), {}, {
              method: 'OPTIONS'
            }));

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _options.apply(this, arguments);
}

function addRequestInterceptor(onFulfilled, onRejected) {
  return instance.interceptors.request.use(onFulfilled, onRejected);
}

function ejectRequestInterceptor(interceptorId) {
  return instance.interceptors.request.eject(interceptorId);
}

function addResponseInterceptor(onFulfilled, onRejected) {
  return instance.interceptors.response.use(onFulfilled, onRejected);
}

function ejectResponseInterceptor(interceptorId) {
  return instance.interceptors.response.eject(interceptorId);
}

export { axios, instance, globalHeaders, commonRequestInterceptor, commonResponseInterceptor, commonResponseWithRefreshTokenInterceptor, addRequestInterceptor, ejectRequestInterceptor, addResponseInterceptor, ejectResponseInterceptor };