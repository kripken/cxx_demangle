#!/bin/sh

$CC -s 'EXPORTED_FUNCTIONS=["___cxa_demangle"]' -s MODULARIZE=1 -Oz -s NO_FILESYSTEM=1 -s NO_BROWSER=1 empty.cpp --memory-init-file 0 -s 'EXPORTED_RUNTIME_METHODS=["Pointer_stringify", "writeStringToMemory"]' -o compiled.js --closure 2
cp before.js demangle.js
cat compiled.js >> demangle.js
cat after.js >> demangle.js

