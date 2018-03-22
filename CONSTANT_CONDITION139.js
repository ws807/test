/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for pruning at LHS of 'instanceof' operator (BD-5311, BD-5312)

function test1(x) {
  if (x instanceof String) {
    if (typeof x === "string") { // Medium alarm
      return;
    }
  }
}

function test2(x) {
  if (x instanceof Array) {
    if (!Array.isArray(x)) { // Medium alarm
      return;
    }
  }
}
