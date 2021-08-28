"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferUtils = void 0;
var BufferUtils = /** @class */ (function () {
    function BufferUtils() {
    }
    BufferUtils.forEachBit = function (buf, callback) {
        for (var i = 0; i < buf.length; i++) {
            var num = buf[i];
            for (var j = 0; j < 8; j++) {
                callback((num >> j) & 1, i, j);
            }
        }
    };
    return BufferUtils;
}());
exports.BufferUtils = BufferUtils;
//# sourceMappingURL=buffer.js.map