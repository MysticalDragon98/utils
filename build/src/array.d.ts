export declare class ArrayUtils {
    static awaitAll<T, U>(array: T[], asyncFunction: (...args: any[]) => U): Promise<U[]>;
}
