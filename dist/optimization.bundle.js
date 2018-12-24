window["optimization"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"optimization": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpoptimization"] = window["webpackJsonpoptimization"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/directions-client.ts","vendors~optimization"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GHUtil.ts":
/*!***********************!*\
  !*** ./src/GHUtil.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = new /** @class */ (function () {\n    function GHUtil() {\n    }\n    GHUtil.prototype.clone = function (obj) {\n        var newObj = {};\n        for (var prop in obj) {\n            if (obj.hasOwnProperty(prop)) {\n                newObj[prop] = obj[prop];\n            }\n        }\n        return newObj;\n    };\n    GHUtil.prototype.copyProperties = function (args, argsInto) {\n        var result = argsInto;\n        if (!args)\n            return result;\n        for (var prop in args) {\n            if (args.hasOwnProperty(prop) && args[prop] !== undefined) {\n                result[prop] = args[prop];\n            }\n        }\n        return result;\n    };\n    GHUtil.prototype.decodePath = function (encoded, is3D) {\n        var len = encoded.length;\n        var index = 0;\n        var array = [];\n        var lat = 0;\n        var lng = 0;\n        var ele = 0;\n        while (index < len) {\n            var b;\n            var shift = 0;\n            var result = 0;\n            do {\n                b = encoded.charCodeAt(index++) - 63;\n                result |= (b & 0x1f) << shift;\n                shift += 5;\n            } while (b >= 0x20);\n            var deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1));\n            lat += deltaLat;\n            shift = 0;\n            result = 0;\n            do {\n                b = encoded.charCodeAt(index++) - 63;\n                result |= (b & 0x1f) << shift;\n                shift += 5;\n            } while (b >= 0x20);\n            var deltaLon = ((result & 1) ? ~(result >> 1) : (result >> 1));\n            lng += deltaLon;\n            if (is3D) {\n                // elevation\n                shift = 0;\n                result = 0;\n                do {\n                    b = encoded.charCodeAt(index++) - 63;\n                    result |= (b & 0x1f) << shift;\n                    shift += 5;\n                } while (b >= 0x20);\n                var deltaEle = ((result & 1) ? ~(result >> 1) : (result >> 1));\n                ele += deltaEle;\n                array.push([lng * 1e-5, lat * 1e-5, ele / 100]);\n            }\n            else\n                array.push([lng * 1e-5, lat * 1e-5]);\n        }\n        return array;\n    };\n    GHUtil.prototype.extractError = function (res, url) {\n        var msg;\n        if (typeof res === 'string') {\n            msg = res;\n        }\n        else if (res && res.body) {\n            if (typeof res.body === 'string')\n                msg = res.body;\n            else if (res.body.message)\n                msg = res.body.message;\n        }\n        else {\n            msg = res;\n        }\n        return new Error(msg + \" for url \" + url);\n    };\n    GHUtil.prototype.isArray = function (value) {\n        var stringValue = Object.prototype.toString.call(value);\n        return (stringValue.toLowerCase() === \"[object array]\");\n    };\n    GHUtil.prototype.isObject = function (value) {\n        var stringValue = Object.prototype.toString.call(value);\n        return (stringValue.toLowerCase() === \"[object object]\");\n    };\n    GHUtil.prototype.isString = function (value) {\n        return (typeof value === 'string');\n    };\n    return GHUtil;\n}());\n\n\n//# sourceURL=webpack://optimization/./src/GHUtil.ts?");

/***/ }),

/***/ "./src/directions-client.ts":
/*!**********************************!*\
  !*** ./src/directions-client.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar request = __webpack_require__(/*! superagent */ \"./node_modules/superagent/lib/client.js\");\nvar GHUtil_1 = __webpack_require__(/*! ./GHUtil */ \"./src/GHUtil.ts\");\nvar GraphHopperOptimization = /** @class */ (function () {\n    function GraphHopperOptimization(args) {\n        this.points = [];\n        this.host = 'https://graphhopper.com/api/1';\n        this.key = args.key;\n        this.profile = args.profile;\n        this.basePath = '/vrp';\n        this.waitInMillis = 1000;\n        this.timeout = 10000;\n        this.postTimeout = 15000;\n        GHUtil_1.default.copyProperties(args, this);\n    }\n    GraphHopperOptimization.prototype.addPoint = function (input) {\n        this.points.push(input);\n    };\n    GraphHopperOptimization.prototype.clear = function () {\n        this.points.length = 0;\n    };\n    GraphHopperOptimization.prototype.doTSPRequest = function () {\n        return this.doVRPRequest(1);\n    };\n    GraphHopperOptimization.prototype.doVRPRequest = function (vehicles) {\n        var firstPoint = this.points[0];\n        var servicesArray = [];\n        this.points.forEach(function (point, pointIndex) {\n            if (pointIndex < 1) {\n                return;\n            }\n            var obj = {\n                id: '_' + pointIndex,\n                type: 'pickup',\n                name: 'maintenance ' + pointIndex,\n                address: {\n                    location_id: '_location_' + pointIndex,\n                    lon: point.lng,\n                    lat: point.lat\n                }\n            };\n            servicesArray.push(obj);\n        });\n        var list = [];\n        for (var i = 0; i < vehicles; i++) {\n            list.push({\n                vehicle_id: '_vehicle_' + i,\n                start_address: {\n                    location_id: '_start_location',\n                    lon: firstPoint.lng,\n                    lat: firstPoint.lat\n                },\n                type_id: '_vtype_1'\n            });\n        }\n        var jsonInput = {\n            algorithm: {\n                problem_type: 'min-max'\n            },\n            vehicles: list,\n            vehicle_types: [{\n                    type_id: '_vtype_1',\n                    profile: this.profile\n                }],\n            services: servicesArray\n        };\n        return this.doRequest(jsonInput, null);\n    };\n    GraphHopperOptimization.prototype.doRequest = function (jsonInput, reqArgs) {\n        var vehicleTypeProfileMap = {};\n        var vehicleTypeMap = {};\n        var vehicleProfileMap = {};\n        var serviceMap = {};\n        var shipmentMap = {};\n        var locationMap = {};\n        var hasCustomCostMatrix = jsonInput.cost_matrices && jsonInput.cost_matrices.length > 0;\n        var hasGeometries = jsonInput.configuration && !hasCustomCostMatrix &&\n            jsonInput.configuration.routing.calc_points === true;\n        if (!hasGeometries) {\n            if (!jsonInput.configuration && !hasCustomCostMatrix) {\n                jsonInput.configuration = { routing: { calc_points: true } };\n            }\n        }\n        if (jsonInput.vehicle_types) {\n            for (var _i = 0, _a = jsonInput.vehicle_types; _i < _a.length; _i++) {\n                var type = _a[_i];\n                vehicleTypeProfileMap[type.type_id] = type.profile;\n                vehicleTypeMap[type.type_id] = type;\n            }\n        }\n        if (jsonInput.services) {\n            for (var _b = 0, _c = jsonInput.services; _b < _c.length; _b++) {\n                var service = _c[_b];\n                locationMap[service.address.location_id] = service.address;\n                serviceMap[service.id] = service;\n            }\n        }\n        if (jsonInput.shipments) {\n            for (var _d = 0, _e = jsonInput.shipments; _d < _e.length; _d++) {\n                var shipment = _e[_d];\n                locationMap[shipment.pickup.address.location_id] = shipment.pickup.address;\n                locationMap[shipment.delivery.address.location_id] = shipment.delivery.address;\n                shipmentMap[shipment.id] = shipment;\n            }\n        }\n        var breakMap = {};\n        var vehicleMap = {};\n        if (jsonInput.vehicles) {\n            for (var _f = 0, _g = jsonInput.vehicles; _f < _g.length; _f++) {\n                var vehicle = _g[_f];\n                vehicleMap[vehicle.vehicle_id] = vehicle;\n                var profile = null;\n                if (vehicle.type_id !== null) {\n                    profile = vehicleTypeProfileMap[vehicle.type_id];\n                    vehicleProfileMap[vehicle.vehicle_id] = profile !== null ? profile : 'car';\n                }\n                else {\n                    vehicleProfileMap[vehicle.vehicle_id] = 'car';\n                }\n                if (vehicle.start_address) {\n                    locationMap[vehicle.start_address.location_id] = vehicle.start_address;\n                }\n                if (vehicle.end_address) {\n                    locationMap[vehicle.end_address.location_id] = vehicle.end_address;\n                }\n                if (vehicle.break) {\n                    var breakId = vehicle.vehicle_id + '_break';\n                    breakMap[breakId] = vehicle.break;\n                }\n            }\n        }\n        var promise = this.doRawRequest(jsonInput, reqArgs);\n        promise.then(function (json) {\n            if (json.solution) {\n                var sol = json.solution;\n                json.raw_solution = JSON.parse(JSON.stringify(sol));\n                sol.calc_points = hasGeometries;\n                for (var _i = 0, _a = sol.routes; _i < _a.length; _i++) {\n                    var route = _a[_i];\n                    var vehicleId = route.vehicle_id;\n                    var profile = vehicleProfileMap[vehicleId];\n                    route.profile = profile;\n                    for (var _b = 0, _c = route.activities; _b < _c.length; _b++) {\n                        var act = _c[_b];\n                        act.address = locationMap[act.location_id];\n                        if (act.id) {\n                            var driverBreak = breakMap[act.id];\n                            // console.log(act.id + ' ' + driverBreak);\n                            if (driverBreak) {\n                                act.break = breakMap[act.id];\n                            }\n                            else if (serviceMap[act.id]) {\n                                act.service = serviceMap[act.id];\n                            }\n                            else if (shipmentMap[act.id]) {\n                                act.shipment = shipmentMap[act.id];\n                            }\n                        }\n                        else {\n                            var vehicle = vehicleMap[vehicleId];\n                            act.vehicle = vehicle;\n                            act.vehicle_type = vehicleTypeMap[vehicle.type_id];\n                        }\n                    }\n                }\n                var unassignedServices = new Array();\n                for (var _d = 0, _e = sol.unassigned.services; _d < _e.length; _d++) {\n                    var serviceId = _e[_d];\n                    unassignedServices.push(serviceMap[serviceId]);\n                }\n                sol.unassigned_services = unassignedServices;\n                var unassignedShipments = new Array();\n                for (var _f = 0, _g = sol.unassigned.shipments; _f < _g.length; _f++) {\n                    var shipmentId = _g[_f];\n                    unassignedShipments.push(shipmentMap[shipmentId]);\n                }\n                sol.unassigned_shipments = unassignedShipments;\n            }\n            return json;\n        });\n        return promise;\n    };\n    GraphHopperOptimization.prototype.doRawRequest = function (jsonInput, reqArgs) {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            var args = GHUtil_1.default.clone(_this);\n            if (reqArgs) {\n                args = GHUtil_1.default.copyProperties(reqArgs, args);\n            }\n            var url = args.host + args.basePath + '/optimize?key=' + args.key;\n            request\n                .post(url)\n                .send(JSON.stringify(jsonInput))\n                .accept('application/json; charset=utf-8')\n                .type('application/json')\n                .timeout(args.postTimeout)\n                .end(function (err, res) {\n                if (err || !res.ok) {\n                    reject(GHUtil_1.default.extractError(res, url));\n                }\n                else if (res) {\n                    var solutionUrl_1 = \"\" + args.host + args.basePath + \"/solution/\" + res.body.job_id + \"?key=\" + args.key;\n                    var timerRet_1 = window.setInterval(function () { return _this.pollTrigger(solutionUrl_1, args.postTimeout, timerRet_1, url, reject, resolve); }, _this.waitInMillis);\n                }\n            });\n        });\n    };\n    GraphHopperOptimization.prototype.pollTrigger = function (solutionUrl, timeout, timerRet, url, reject, resolve) {\n        request\n            .get(solutionUrl)\n            .accept('application/json')\n            .timeout(timeout)\n            .end(function (err, res) {\n            if (err || !res.ok || res.body === undefined) {\n                clearInterval(timerRet);\n                reject(GHUtil_1.default.extractError(res, url));\n            }\n            else if (res && (res.body.status === 'finished' || res.body.message)) {\n                clearInterval(timerRet);\n                resolve(res.body);\n            }\n        });\n    };\n    return GraphHopperOptimization;\n}());\nexports.GraphHopperOptimization = GraphHopperOptimization;\n\n\n//# sourceURL=webpack://optimization/./src/directions-client.ts?");

/***/ })

/******/ });