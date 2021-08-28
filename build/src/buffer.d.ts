/// <reference types="node" />
export declare class BufferUtils {
    static forEachBit(buf: Buffer, callback: (bit: number, i: number, j: number) => any): void;
    static sizeHeader(size: number): Buffer;
    static bitStream(buf: Buffer): Generator<number, void, unknown>;
}
