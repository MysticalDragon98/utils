/// <reference types="node" />
import EventEmitter from "events";
export declare class EventUtils {
    static waitOnce(emitter: EventEmitter, event: string, timeout?: number): Promise<unknown>;
}
