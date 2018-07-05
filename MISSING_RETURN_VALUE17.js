/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for alarm detection when the use point is decorator (BD-

function decorator1() {
  console.log("Should return value");
}

function decorator2(x) {
  return x;
}

@decorator1() // alarm
class Foo1 { }

@decorator2(readonly) // no alarm
class Foo2 { }
