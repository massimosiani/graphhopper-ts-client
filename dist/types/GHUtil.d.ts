declare const _default: {
    clone<T>(obj: T): T;
    copyProperties<T, U>(args: T, argsInto: U): T & U;
    decodePath(encoded: {
        length: any;
        charCodeAt: {
            (arg0: number): number;
            (arg0: number): number;
            (arg0: number): number;
        };
    }, is3D: any): number[][];
    extractError(res: any, url: string, requestBody?: string): Error;
    isArray(value: any): boolean;
    isObject(value: any): boolean;
    isString(value: any): value is string;
};
export default _default;
