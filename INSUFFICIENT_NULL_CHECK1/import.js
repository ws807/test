/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test cases for summary-based detection (BD-5366)

import { foo1, foo2, foo3, foo4 } from "./export1";

export function test1(x) {
  if (x) { // alarm
    console.log(x);
  }
  foo1(x);
}

export function test2(x) {
  if (x) { // alarm
    console.log(x);
  }
  foo2(x);
}

export function test3(x) {
  if (x) { // alarm
    console.log(x);
  }
  foo3()(x);
}

export function test4(x) {
  if (x) { // alarm
    console.log(x);
  }
  foo4(x);
}
