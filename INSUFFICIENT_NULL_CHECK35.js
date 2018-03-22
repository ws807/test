/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for treating builtin call arguments as access point. (BD-5313)

function test1(x) {
  if (x) { // alarm
    x.prop = 123;
  }
  return Object.keys(x);
}

function test2(x) {
  var keys = Object.keys(x);
  if (x) {
    return foo(x, keys);
  }
}
