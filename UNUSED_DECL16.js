/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for filtering alarms when "@interface" JsDoc. (BD-5589)

function test() {
  /** @interface */
  class Foo { // no alarm
    method() { }
  }
}
