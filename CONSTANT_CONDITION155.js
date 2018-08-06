/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for for-await-of side effect. (BD-5609)

async function test() {
  if (this.state.ok) {
    for await (var x of asyncItems) {
      if (this.state.ok) {
        foo = x;
      }
    }
  }
}
