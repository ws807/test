/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for alarm filtering on object rest with computed properties. (BD-5624)

function test1(obj, prop) {
  const { [prop]: _unused /* no alarm */, ...rest } = obj;
  return rest;
}

function test2(obj) {
  const { [123]: _unused /* no alarm */, ...rest } = obj;
  return rest;
}
