/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for general detection of array in condition. (BD-5385)

function test1(arr) {
  var [,, ...rest] = arr;
  if (rest) { // Medium alarm
    foo(rest);
  }
}

function test2(...rest) {
  function inner() {
    if (rest) { // Medium alarm
      foo(rest)
    }
  }
  inner();
}

function test3(obj) {
  if (Object.keys(obj)) { // Medium alarm
    console.log("obj is non-empty.");
  }
}
