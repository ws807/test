/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for detection after pruning undefined/null. (BD-4815)

function test(cond) {
  var arr;
  if (cond) {
    arr = [1, 2, 3, 4, 5];
  }
  for (var x in arr /* alarm */) {
    foo(arr[x]);
  }
}
