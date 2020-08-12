"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const AlarmAdd = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M9.45 3.072A10.25 10.25 0 003.726 6.95a.482.482 0 00.132.686c.23.152.54.087.704-.135A9.25 9.25 0 019.65 4.053a.522.522 0 00.386-.603.482.482 0 00-.588-.378zm5.547.126a.482.482 0 00-.604.35.522.522 0 00.358.62 9.25 9.25 0 014.928 3.674c.154.23.46.308.697.167a.482.482 0 00.163-.68 10.25 10.25 0 00-5.542-4.131zM20 13a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0zm-7-3.994a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 11-1 0v-3h-3a.5.5 0 110-1h3v-3a.5.5 0 01.5-.5z", clipRule: "evenodd" })));
};
exports.default = AlarmAdd;