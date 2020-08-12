"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const GamepadSolid = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M10 5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3.293a.5.5 0 01-.146.353l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5A.5.5 0 0110 8.793V5.5zm4 13a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3.292a.5.5 0 01.146-.354l1.5-1.5a.5.5 0 01.707 0l1.5 1.499a.5.5 0 01.147.354v3.292zm4.5-8.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3.292a.5.5 0 01-.354-.146l-1.5-1.5a.5.5 0 010-.707l1.5-1.5a.5.5 0 01.354-.146h3.293zm-13 0a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3.293a.5.5 0 00.353-.146l1.5-1.5a.5.5 0 000-.708l-1.5-1.5A.5.5 0 008.793 10H5.5z", clipRule: "evenodd" })));
};
exports.default = GamepadSolid;