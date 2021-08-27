import EventEmitter from "events";

export class EventUtils {

    static waitOnce (emitter: EventEmitter, event: string, timeout?: number) {
        return new Promise((resolve, reject) => {
            if (timeout) setTimeout(reject, timeout);

            emitter.once(event, resolve);
        })
    }
}