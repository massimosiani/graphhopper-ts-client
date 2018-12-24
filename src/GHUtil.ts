export default new class GHUtil {
    clone<T>(obj: T): T {
        var newObj = {} as T;
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                newObj[prop] = obj[prop];
            }
        }
        return newObj;
    }

    copyProperties<T, U>(args: T, argsInto: U): T & U {
        const result = argsInto as T & U;
        if (!args)
            return result;

        for (var prop in args) {
            if (args.hasOwnProperty(prop) && args[prop] !== undefined) {
                result[prop] = (<any>args)[prop];
            }
        }

        return result;
    }

    decodePath(encoded, is3D) {
        var len = encoded.length;
        var index = 0;
        var array = [];
        var lat = 0;
        var lng = 0;
        var ele = 0;

        while (index < len) {
            var b: number;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += deltaLat;

            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLon = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += deltaLon;

            if (is3D) {
                // elevation
                shift = 0;
                result = 0;
                do {
                    b = encoded.charCodeAt(index++) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);
                var deltaEle = ((result & 1) ? ~(result >> 1) : (result >> 1));
                ele += deltaEle;
                array.push([lng * 1e-5, lat * 1e-5, ele / 100]);
            } else
                array.push([lng * 1e-5, lat * 1e-5]);
        }
        return array;
    }

    extractError(res: string | { body: string | { message: string } } | any, url: string) {
        var msg: string;

        if (typeof res === 'string') {
            msg = res;
        } else if (res && res.body) {
            if (typeof res.body === 'string') msg = res.body;
            else if (res.body.message)
                msg = res.body.message;
        } else {
            msg = res;
        }

        return new Error(`${msg} for url ${url}`);
    }

    isArray(value: any) {
        var stringValue = Object.prototype.toString.call(value);
        return (stringValue.toLowerCase() === "[object array]");
    }

    isObject(value: any) {
        var stringValue = Object.prototype.toString.call(value);
        return (stringValue.toLowerCase() === "[object object]");
    }

    isString(value: any): value is string {
        return (typeof value === 'string');
    }
}
