/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for optional chaining operator. (BD-5470)

function test1(x) {
  return (a?.b).c; // alarm
}

function test2(x) {
  return (a?.b)?.c; // no alarm
}
