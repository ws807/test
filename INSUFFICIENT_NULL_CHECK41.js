/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for allowing multiple arguments for assert pattern compile of 'invariant' (BD-5369)

function test(x) {
  invariant(x, "error: %s %s", msg1, msg2);
  if (x) {  // no alarm
    ret = x.p1;
  }
  ret = x.p2;
  return ret;
}
