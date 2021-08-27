"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.awaitAll = function (array, asyncFunction) {
        return Promise.all(array.map(asyncFunction));
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
//# sourceMappingURL=array.js.map