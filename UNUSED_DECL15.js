/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for unused class declaration. (BD-5589)

function test() {
  class Foo { // alarm
    prop = 11;
    method() { }
    get getter() { return this.prop; }
    set setter(x) { this.prop = x; }

    static staticProp = 22;
    static staticMethod() { }
    static get staticGetter() { return Foo.staticProp; }
    static set staticSetter(x) { Foo.staticProp = x; }
  }
}
