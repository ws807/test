/*******************************************************************************
    Copyright (c) 2016, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case LiteValue-based alarm detection on | operator. (BD-5054)

function test1(obj) {
  console.log(obj | {}); // alarm
  console.log(obj | {p: 123}); // alarm
  console.log(obj | [123]); // alarm
  console.log(obj.f() | {}); // alarm

  return obj;
}

function test2(arr) {
  function check(item) { return item > 0; }

  var res;
  for (var i = 0; i < arr.length; i++) {
    res |= check(arr[i]); // alarm
  }
  return res;
}

function test3() {
  console.log("123" | 0); // no alarm
  console.log(1 | "123"); // no alarm

  return obj;
}
