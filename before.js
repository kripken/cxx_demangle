/**
 * Exposes a function that demangles function names.
 * Can be found at: https://github.com/kripken/cxx_demangle
 */
var demangle = (function() {
  // In Firefox CommonJS environment, the module boilerplate thinks it's node,
  // but `process` does not exist.
  if (typeof process !== "object" && typeof window !== "object" && typeof require === "function") {
    // null out `require` since no filesystem is necessary in this module, and this
    // way the boilerplate thinks its in a shell.
    require = null;
    // The `print` function only exists in scope when in a node environment,
    // and there doesn't seem to account for when in a shell environment and NOT node.js,
    // so just stub out the print function.
    var print = function(){}
  }

