/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import { bar } from "./export2";

export function foo1(x) {
  return x.prop;
}

export function foo2(x) {
  return helper(x);
}

export function foo3() {
  return function(x) {
    return x.prop;
  }
}

export function foo4(x) {
  return bar(x);
}

function helper(x) {
  return x.prop;
}
