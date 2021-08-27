import EventEmitter from "events";

export class EventUtils {

    static waitOnce (emitter: EventEmitter, event: string, timeout?: number) {
        return new Promise((reject, resolve) => {
            if (timeout) setTimeout(reject, timeout);

            emitter.once(event, resolve);
        })
    }
}