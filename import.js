/*******************************************************************************
    Copyright (c) 2020, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Basic test case for inter-module detection

import { GLOBAL_RE1, GLOBAL_RE2, NON_GLOBAL_RE } from "./export";

export function test1(str) {
  return GLOBAL_RE1.test(str); // alarm
}

export function test2(str) {
  if (GLOBAL_RE2.test(str)) {
    return str.replace(GLOBAL_RE2, ""); // alarm. "test/replace pattern" filtering is not applied for imported value.
  }
}

export function test3(str) {
  return NON_GLOBAL_RE.test(str); // no alarm
}
