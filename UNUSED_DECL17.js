/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for filtering alarms for decorated class definition. (BD-5589)

function test1() {
  @Register
  class Foo1 { // no alarm
    method() { }
  }
}

function test2() {
  class Foo2 { // alarm
    @readonly
    prop = 11;

    @readonly
    method() { }

    @readonly foo
    static staticProp = 22;

    @readonly foo
    static staticMethod() { }
  }
}
