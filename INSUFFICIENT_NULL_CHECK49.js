/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests access filtering on toString() calls when the check is falsy check. (BD-5516)

function test1(x) {
  foo(x.toString());
  if (x) { // no alarm because toString() can be used on primitive values
    bar(x);
  }
}

function test2(x) {
  foo(x.valueOf());
  if (x) { // alarm because valueOf() is rarely used on primitive values
    bar(x);
  }
}
