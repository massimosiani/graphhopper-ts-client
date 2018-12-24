# TypeScript client for the GraphHopper Directions API

Please refer to the original [repository](https://github.com/graphhopper/directions-api-js-client) for information on the API and examples.

The [bundled version](./dist/gh-optimization-client.bundle.js) can be referenced in the browser and provides a ```GHOptimization``` property in the window object.

## Usage

### Browser

This method doesn't add value with respect to the official source.

Include the [vendor~optimization bundle](./dist/vendors~gh-optimization-client.chunk.js) and the [optimization bundle](./dist/gh-optimization-client.bundle.js)
in your html, for instance:
```
<script type="text/javascript" src="https://raw.githubusercontent.com/massimosiani/graphhopper-ts-client/master/dist/vendors~gh-optimization-client.chunk.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/massimosiani/graphhopper-ts-client/master/dist/gh-optimization-client.bundle.js"></script>
```

Then you are ready to instantiate the object and call the API:
```
const args = { key: 'your_key', profile: 'car' };
const ghOptimization = new GHOptimization.GraphHopperOptimization(args);
ghOptimization.addPoint({lng: -0.103512, lat: 51.503634});
ghOptimization.addPoint({lng: -0.074673, lat: 51.519339});
ghOptimization.addPoint({lng: -0.103168, lat: 51.52681});
ghOptimization.doVRPRequest(1);
```

### NPM

To take full advantage of the TypeScript features, install the lib with npm:

```npm install graphhopper-ts-client --save```

And use it in your code:
```
import { GraphHopperOptimization } from 'graphhopper-ts-client';

const key = "[Sign-up for free and get your own key: https://www.graphhopper.com/products/]";
const profile = "car";

const ghOptimization = new GraphHopperOptimization({key, profile});
ghOptimization.addPoint({lng: -0.103512, lat: 51.503634});
ghOptimization.addPoint({lng: -0.074673, lat: 51.519339});
ghOptimization.addPoint({lng: -0.103168, lat: 51.52681});
ghOptimization.doVRPRequest(1);
```
