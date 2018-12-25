declare const _default: {
    clone<T>(obj: T): T;
    copyProperties<T, U>(args: T, argsInto: U): T & U;
    decodePath(encoded: any, is3D: any): any[];
    extractError(res: any, url: string): Error;
    isArray(value: any): boolean;
    isObject(value: any): boolean;
    isString(value: any): value is string;
};
export default _default;
