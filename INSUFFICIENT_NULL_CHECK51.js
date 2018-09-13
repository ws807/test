/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for compiling isUndefined() to comparison operator. (BD-5129)

function test(x) {
  foo(x.prop1);
  if (!_.isUndefined(x)) { // alarm
    foo(x.prop2);
  }
}
