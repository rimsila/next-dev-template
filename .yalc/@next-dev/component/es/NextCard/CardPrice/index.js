function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classnames from 'classnames';
import './styles.less';
export var NextBlogCard = function NextBlogCard(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      nextTheme = _ref.nextTheme,
      width = _ref.width,
      alt = _ref.alt,
      rest = _objectWithoutProperties(_ref, ["data", "nextTheme", "width", "alt"]);

  var title = data.title;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classnames('next_blog_card', alt && 'alt')
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      backgroundImage: 'url("https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg")'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    className: "details"
  }, /*#__PURE__*/React.createElement("li", {
    className: "author"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "John Doe")), /*#__PURE__*/React.createElement("li", {
    className: "date"
  }, "Aug. 24, 2015"), /*#__PURE__*/React.createElement("li", {
    className: "tags"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Learn")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Code")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "HTML")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "CSS")))))), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, title && /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("h2", null, "Opening a door to the future"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."), /*#__PURE__*/React.createElement("p", {
    className: "read-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Read More")))));
};
export default NextBlogCard;