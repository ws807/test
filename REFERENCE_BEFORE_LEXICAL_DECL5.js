/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for 1-depth inter-procedural detection. (BD-5416)

function test1(cond) {
  if (cond) {
    foo(); // alarm
  }
  foo(); // alarm
  let x = 123;
  function foo() {
    if (x) {
      console.log(x);
    }
  }
}

function test2() {
  const x = getX(); // alarm
  function getX() {
    return x;
  }
}

function test3() {
  const x = getX(123); // alarm
  function getX(init) {
    if (!init) {
      throw new Error();
    }
    return x;
  }
}

function test4() {
  const x = getX(123); // no alarm
  function getX(init = x) {
    return init;
  }
  return getX();
}

function test5() {
  function foo() {
    return x;
  }
  let x = 123;
  return foo(); // no alarm
}
