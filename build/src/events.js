"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUtils = void 0;
var EventUtils = /** @class */ (function () {
    function EventUtils() {
    }
    EventUtils.waitOnce = function (emitter, event, timeout) {
        return new Promise(function (reject, resolve) {
            if (timeout)
                setTimeout(reject, timeout);
            emitter.once(event, resolve);
        });
    };
    return EventUtils;
}());
exports.EventUtils = EventUtils;
//# sourceMappingURL=events.js.map