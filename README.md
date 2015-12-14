# cxx_demangle

A port of the libc++abi name demangler to JavaScript, using Emscripten.

## Install

`$ npm install demangle`

## Usage

In CommonJS:

```javascript
let { demangle } = require("demangle");
console.log(demangle("__Znwj")); // "operator new(unsigned int)"
console.log(demangle("__Z3FooIidEvi")); // "void Foo<int, double>(int)"
```

In a browser, including `demangle.js` in a script tag will set a `demangle` function on `window`. Untested.

## Building

`$ emmake ./build.sh`

## Test

`$ npm test`

## License

The MIT License (MIT)

Copyright (c) 2015 libcxxabi authors, emscripten authors
