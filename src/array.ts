export class ArrayUtils {

    static awaitAll<T, U> (array: T[], asyncFunction: (...args: any[]) => U) {
        return Promise.all(array.map(asyncFunction));
    }
}