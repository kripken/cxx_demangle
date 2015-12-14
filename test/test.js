var demangle = require("../").demangle;
var expect = require("chai").expect;

describe("demangle", function () {
  it("demangles correctly", function () {
    var values = [
      ["__Znwj", "operator new(unsigned int)"],
      ["_main", null],
      ["__Z2f2v", "f2()"],
      ["__Z12abcdabcdabcdi", "abcdabcdabcd(int)"],
      ["__ZL12abcdabcdabcdi", "abcdabcdabcd(int)"],
      ["__Z4testcsifdPvPiPc", "test(char, short, int, float, double, void*, int*, char*)"],
      ["__ZN4test5moarrEcslfdPvPiPc", "test::moarr(char, short, long, float, double, void*, int*, char*)"],
      ["__ZN4Waka1f12a234123412345pointEv", "Waka::f::a23412341234::point()"],
      ["__Z3FooIiEvv", "void Foo<int>()"],
      ["__Z3FooIidEvi", "void Foo<int, double>(int)"],
      ["__ZN3Foo3BarILi5EEEvv", "void Foo::Bar<5>()"],
      ["__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib", "__cxxabiv1::__si_class_type_info::search_below_dst(__cxxabiv1::__dynamic_cast_info*, void const*, int, bool) const"],
      ["__Z9parsewordRPKciRi", "parseword(char const*&, int, int&)"],
      ["__Z5multiwahtjmxyz", "multi(wchar_t, signed char, unsigned char, unsigned short, unsigned int, unsigned long, long long, unsigned long long, ...)"],
      ["__Z1aA32_iPA5_c", "a(int [32], char (*) [5])"],
      ["__ZN21FWakaGLXFleeflsMarfooC2EjjjPKvbjj", "FWakaGLXFleeflsMarfoo::FWakaGLXFleeflsMarfoo(unsigned int, unsigned int, unsigned int, void const*, bool, unsigned int, unsigned int)"],
      ["__ZN5wakaw2Cm10RasterBaseINS_6watwat9PolocatorEE8merbine1INS4_2OREEEvPKjj", "void wakaw::Cm::RasterBase<wakaw::watwat::Polocator>::merbine1<wakaw::Cm::RasterBase<wakaw::watwat::Polocator>::OR>(unsigned int const*, unsigned int)"],
    ];

    for (var i = 0; i < values.length; i++) {
      var source = values[i][0];
      var expected = values[i][1];
      var demangled = demangle(source);

      console.log("Demangling: ", source, "->", demangled);
      expect(demangled).to.be.equal(expected);
    }
  });

  it("benchmark 1000 demangles", function () {
    for (var i = 0; i < 1000; i++) {
      demangle("__ZN5wakaw2Cm10RasterBaseINS_6watwat9PolocatorEE8merbine1INS4_2OREEEvPKjj");
    }
  });
});
