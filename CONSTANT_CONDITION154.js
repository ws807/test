/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests alarm filtering on ?? operator sub-conditions. (BD-5571)

function test1() {
  var x = {};
  if (x ?? y) { // 2 alarms (no filtering)
    return x;
  }
}

function test2() {
  var x = {};
  if ((x ?? y) ?? z) { // 2 alarms (filter alarm on 'x ?? y')
    return x;
  }
}
