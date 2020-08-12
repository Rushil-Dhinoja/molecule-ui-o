"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const WifiSolid = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M12 10a7.49 7.49 0 00-6.094 3.127.5.5 0 11-.812-.584A8.49 8.49 0 0112 9a8.49 8.49 0 016.906 3.543.5.5 0 01-.812.584A7.49 7.49 0 0012 10zm0 2c-1.84 0-3.47.903-4.469 2.293a.5.5 0 01-.812-.583A6.492 6.492 0 0112 11a6.492 6.492 0 015.281 2.71.5.5 0 11-.812.583A5.492 5.492 0 0012 12zm0 2a3.495 3.495 0 00-2.844 1.46.5.5 0 01-.812-.584A4.495 4.495 0 0112 13c1.507 0 2.84.74 3.656 1.876a.5.5 0 11-.812.584A3.495 3.495 0 0012 14z", clipRule: "evenodd" })));
};
exports.default = WifiSolid;