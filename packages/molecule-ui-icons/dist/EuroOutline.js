"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const EuroOutline = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M19 12a7 7 0 11-14 0 7 7 0 0114 0zm1 0a8 8 0 11-16 0 8 8 0 0116 0zm-5 1.6c-.096.927-.401 1.643-.915 2.148-.51.501-1.19.752-2.04.752-.92 0-1.659-.371-2.215-1.113A3.948 3.948 0 019.184 14H8v-1h1.022A7.595 7.595 0 019 12.41V12H8v-1h1.022c.047-.584.168-1.11.363-1.58.26-.619.628-1.092 1.103-1.42.475-.334 1.024-.5 1.649-.5.827 0 1.491.26 1.99.782.5.517.79 1.235.873 2.154h-1.033c-.09-.698-.284-1.203-.583-1.516-.297-.313-.712-.47-1.248-.47-.656 0-1.172.273-1.546.819-.294.432-.472 1.01-.533 1.731H12v1h-1.967v.445c0 .193.007.378.022.555H12v1h-1.76c.083.265.19.503.323.713.353.562.847.843 1.482.843.571 0 1.008-.145 1.312-.434.307-.293.51-.8.61-1.522H15z", clipRule: "evenodd" })));
};
exports.default = EuroOutline;