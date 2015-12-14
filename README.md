# cxx_demangle

A port of the libc++abi name demangler to JavaScript, using Emscripten.

## Usage

Load `demangle.js`, and then run something like

    demangle("__Znwj");

## Building

    emmake ./build.sh

