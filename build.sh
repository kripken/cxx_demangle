#!/bin/sh

$CC -s 'EXPORTED_FUNCTIONS=["___cxa_demangle"]' -s MODULARIZE=1 -Oz -s NO_FILESYSTEM=1 -s NO_BROWSER=1 empty.cpp --memory-init-file 0 -s 'EXPORTED_RUNTIME_METHODS=["Pointer_stringify", "writeStringToMemory"]' -o compiled.js --closure 0 --llvm-lto 1 -s TOTAL_STACK=65536 -s TOTAL_MEMORY=1048576
cp before.js demangle.js
cat compiled.js >> demangle.js
cat after.js >> demangle.js
rm compiled.js
echo
echo "done."

