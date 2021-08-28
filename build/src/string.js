"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
var pattern = [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
].join('|');
var ansiRegex = new RegExp(pattern, 'g');
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.escapeANSI = function (text) {
        return text.replace(ansiRegex, "");
    };
    StringUtils.template = function (input, data) {
        return input.replace(/\{\{\s*(.+?)\s*\}\}/g, function ($0, $1) { return data[$1.trim()]; });
    };
    StringUtils.countMatches = function (text, match) {
        var count = 0;
        if (typeof match === "string")
            match = new RegExp(match, "g");
        text.replace(match, function () {
            count++;
            return "";
        });
        return count;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
//# sourceMappingURL=string.js.map