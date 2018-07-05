/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for more sound DFA of CalleeGuesser

class Hello {
  foo() {
    var that = this; // 'that' assigned
    function clearThat() {
      that = { // 'that' assigned
        bar() { // has return value
          return 42;
        }
      };
    }
    clearThat();
    return that.bar() + 1; // no alarm
  }
  bar() { // has no return value
    doSomething();
  }
}