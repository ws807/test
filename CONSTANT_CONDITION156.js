/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for Medium impact ConstantConditionChecker alarm on definite RegExp object. (BD-5517)

function test1(str) {
  if (/foo/) { // Medium impact alarm
    console.log("str contains foo.");
  }
}

function test2(str) {
  var re = /foo/;
  if (re) { // Medium impact alarm
    console.log("str contains foo.");
  }
}
