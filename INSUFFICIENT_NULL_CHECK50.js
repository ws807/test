/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for applying string property access filtering only when primitive is possible. (BD-5737)

function test1(arr?: number[]) {
  console.log(arr.length);
  if (arr) { // alarm
    foo(arr);
  }
}

function test2(x) {
  function getArr(x) {
    if (x) {
      return [x];
    } else {
      return null;
    }
  }

  var arr = getArr(x);
  console.log(arr.length);
  if (arr) { // alarm
    foo(arr);
  }
}
