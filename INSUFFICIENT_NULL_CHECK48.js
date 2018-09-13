/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for not applying string property filtering for null check pattern. (BD-5732)

// Pattern: e && (!)? e.prop
function test1(x1, x2) {
  foo(x1.length);
  if (x1 /* alarm */ && x1.length) {
    bar1(x);
  }

  foo(x2.y.length);
  if (x2.y /* alarm */ && !x2.y.length) {
    bar2(x);
  }
}

// Pattern: e && e.prop (== | === | != | !== | >) 0
function test2(x1, x2, x3, x4, x5) {
  foo(x1.length);
  if (x1 /* alarm */ && x1.length == 0) {
    bar1(x1);
  }

  foo(x2.y.length);
  if (x2.y /* alarm */ && x2.y.length === 0) {
    bar2(x2);
  }

  foo(x3.length);
  if (cond && x3 /* alarm */ && x3.prop != 0) {
    bar3(x3);
  }

  foo(x4.length);
  if (x4 /* alarm */ && x4[prop] !== 0) {
    bar4(x4);
  }

  foo(x5.length);
  if (x5 /* alarm */ && x5.length > 0) {
    bar5(x5);
  }
}

// Pattern: !e || (!)? e.prop
function test3(x1, x2) {
  foo(x1.length);
  if (!x1 /* alarm */ || x1.length) {
    bar1(x);
  }

  foo(x2.y.length);
  if (!x2.y /* alarm */ || !x2.y.length) {
    bar2(x);
  }
}

// Pattern: !e || e.prop (== | === | != | !== | >) 0
function test4(x1, x2, x3, x4, x5) {
  foo(x1.length);
  if (!x1 /* alarm */ || x1.length == 0) {
    bar1(x1);
  }

  foo(x2.y.length);
  if (!x2.y /* alarm */ || x2.y.length === 0) {
    bar2(x2);
  }

  foo(x3.length);
  if (cond || !x3 /* alarm */ || x3.prop != 0) {
    bar3(x3);
  }

  foo(x4.length);
  if (!x4 /* alarm */ || x4[prop] !== 0) {
    bar4(x4);
  }

  foo(x5.length);
  if (!x5 /* alarm */ || x5.length > 0) {
    bar5(x5);
  }
}

// Pattern: e || []
function test5(x) {
  foo(x.length);
  bar(x /* alarm */ || []);
}

// Pattern: e || ''
function test6(x) {
  foo(x.length);
  bar(x /* alarm */ || '');
}
