"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferUtils = void 0;
var BufferUtils = /** @class */ (function () {
    function BufferUtils() {
    }
    BufferUtils.forEachBit = function (buf, callback) {
        for (var i = 0; i < buf.length; i++) {
            var num = buf[i];
            for (var j = 7; j >= 0; j--) {
                callback((num >> j) & 1, i, 7 - j);
            }
        }
    };
    BufferUtils.sizeHeader = function (size) {
        return Buffer.from([0xFF000000 & size, 0x00FF0000 & size, 0x0000FF00 & size, 0x000000FF & size]);
    };
    BufferUtils.bitStream = function (buf) {
        var i, num, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < buf.length)) return [3 /*break*/, 6];
                    num = buf[i];
                    j = 7;
                    _a.label = 2;
                case 2:
                    if (!(j >= 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (num >> j) & 1];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    j--;
                    return [3 /*break*/, 2];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    };
    return BufferUtils;
}());
exports.BufferUtils = BufferUtils;
//# sourceMappingURL=buffer.js.map