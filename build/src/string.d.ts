export declare class StringUtils {
    static escapeANSI(text: string): string;
    static template(input: string, data: any): string;
    static countMatches(text: string, match: string | RegExp): number;
}
