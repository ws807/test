/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for detection on non-API values (BD-4988)

function test1() {
  return (123 === "123"); // alarm
}

function test2() {
  var x = 0;
  if (Math.random()) {
    x = 123;
  }
  if (x !== false) f(); // alarm
  if (x !== undefined) f(); // alarm
}

function test3() {
  var x;
  if (Math.random()) {
    x = 123;
  }
  if (x === null) f(); // alarm on comparison of undefined and null value
}
