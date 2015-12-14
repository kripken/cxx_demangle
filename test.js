print(demangle('__Znwj'));
print(demangle('_main'));
print(demangle('__Z2f2v'));
print(demangle('__Z12abcdabcdabcdi'));
print(demangle('__ZL12abcdabcdabcdi'));
print(demangle('__Z4testcsifdPvPiPc'));
print(demangle('__ZN4test5moarrEcslfdPvPiPc'));
print(demangle('__ZN4Waka1f12a234123412345pointEv'));
print(demangle('__Z3FooIiEvv'));
print(demangle('__Z3FooIidEvi'));
print(demangle('__ZN3Foo3BarILi5EEEvv'));
print(demangle('__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib'));
print(demangle('__Z9parsewordRPKciRi'));
print(demangle('__Z5multiwahtjmxyz'));
print(demangle('__Z1aA32_iPA5_c'));
print(demangle('__ZN21FWakaGLXFleeflsMarfooC2EjjjPKvbjj'));
print(demangle('__ZN5wakaw2Cm10RasterBaseINS_6watwat9PolocatorEE8merbine1INS4_2OREEEvPKjj'));
var t = Date.now();
for (var i = 0; i < 1000; i++) {
  demangle('__ZN5wakaw2Cm10RasterBaseINS_6watwat9PolocatorEE8merbine1INS4_2OREEEvPKjj');
}
print('benchmark: ' + (Date.now() - t));
print(demangle('__ZN5wakaw2Cm10RasterBaseINS_6watwat9PolocatorEE8merbine1INS4_2OREEEvPKjj'));

