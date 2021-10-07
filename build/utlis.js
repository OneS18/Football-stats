"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSringToDate = void 0;
var dateSringToDate = function (dateString) {
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[1], dateParts[1] - 1, dateParts[0]);
};
exports.dateSringToDate = dateSringToDate;
