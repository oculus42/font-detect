# Font Detect
Based on js-css-font-detect by Lalit Patel.

## About

0.3.0 is the original code from 2012.
If you want the original, `npm install js-css-font-detect@0.3.0`.

0.4.0 is a minor performance optimization (up to ~10%) with the same browser support as the original.

## Usage

```javascript

var d = new Detector();
d.detect('font name');

```

## TODO

* Provide minified version.
* Significantly speed detection for arrays to improve libraries like ClientJS.
