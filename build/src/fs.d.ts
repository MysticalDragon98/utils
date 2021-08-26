/// <reference types="node" />
export declare class FileSystem {
    static readCSV<T = any>(path: string, separator?: string): Promise<T[]>;
    static read(path: string): Promise<String>;
    static write(path: string, data: string | Buffer): Promise<void>;
    static remove(path: string): Promise<void>;
    static readSync(path: string): any;
    static writeSync(path: string, data: string): void;
    static lookup(dirs: string[], name: string): Promise<String | null>;
}
