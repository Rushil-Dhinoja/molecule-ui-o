"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const DiscountTagSolid = ({ fill, size = 'normal', customSize, className }) => {
    const sizeValues = ['small', 'normal', 'large', 'huge'];
    if (size && typeof size !== 'string') {
        helpers_1.throwPropError('Value of props.size must be a string.');
    }
    if (!size)
        helpers_1.throwPropError("Value of props.size can't be an empty string ");
    if (size) {
        if (sizeValues.indexOf(size) === -1)
            helpers_1.throwPropError('Value of props.size must be any one of  "huge"  "large"  "normal"  "small". ');
    }
    if (fill && typeof fill !== 'string') {
        helpers_1.throwPropError('Value of props.fill must be a string');
    }
    if (fill && typeof fill === 'string') {
        if (!fill.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
            helpers_1.throwPropError('Value of props.fill must be a valid "HEXCODE".');
        }
    }
    if (customSize && typeof customSize !== 'string') {
        helpers_1.throwPropError('Value of props.customSize must be a string');
    }
    if (className && typeof className !== 'string') {
        helpers_1.throwPropError('Value of props.className must be a string');
    }
    const classes = classnames_1.default(size, className);
    return (React.createElement("svg", { className: classes, style: { width: customSize, height: customSize }, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M8 8.414a1 1 0 01.293-.707l3-3a1 1 0 011.414 0l3 3a1 1 0 01.293.707V19a1 1 0 01-1 1H9a1 1 0 01-1-1V8.414zM11 7a1 1 0 112 0 1 1 0 01-2 0zm3.354 5.646a.5.5 0 00-.708 0l-4 4a.5.5 0 00.708.708l4-4a.5.5 0 000-.708zM10 13.5a.5.5 0 111 0 .5.5 0 01-1 0zm3.5 3.5a.5.5 0 100-1 .5.5 0 000 1z", clipRule: "evenodd" })));
};
exports.default = DiscountTagSolid;