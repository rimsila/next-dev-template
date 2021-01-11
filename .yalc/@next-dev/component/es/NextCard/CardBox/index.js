import React from 'react';

var CardBox = function CardBox(_ref) {
  var heading = _ref.heading,
      children = _ref.children,
      styleName = _ref.styleName,
      childrenStyle = _ref.childrenStyle;
  return /*#__PURE__*/React.createElement("div", {
    className: "gx-card ".concat(styleName)
  }, heading && /*#__PURE__*/React.createElement("div", {
    className: "gx-card-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "gx-card-title"
  }, heading)), /*#__PURE__*/React.createElement("div", {
    className: "gx-card-body ".concat(childrenStyle)
  }, children));
};

export default CardBox;