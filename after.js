
  var m = Module();
  var status = m._malloc(4);
  var buf = m._malloc(2048);

  return function(func) {
    if (func.length >= 2048) return null;
    m.writeStringToMemory(func.substr(1), buf);
    var ret = m['___cxa_demangle'](buf, 0, 0, status);
    if (m.HEAP32[status >> 2] === 0 && ret) {
      return m.Pointer_stringify(ret);
    }
    return null;
  };
})();

// The emscripten compiler exports the Module object; we just want
// the demangle function
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = demangle;
}
