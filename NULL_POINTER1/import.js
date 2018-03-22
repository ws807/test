/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test cases for summary-based detection (BD-5353)

import { foo1, foo2, foo3, foo4 } from "./export1";

export function test1() {
  foo1(null); // alarm
}

export function test2() {
  var x = null;
  foo2(x); // alarm
}

export function test3() {
  var x = cond ? {} : null;
  foo3()(x); // alarm
}

export function test4() {
  foo4(); // alarm
}

export function test5(x) {
  if (!x) {
    foo1(x); // alarm
  }
}
