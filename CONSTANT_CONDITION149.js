/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests ConstantConditionArrayBug that contains '...' in code snippet. (BD-5538)

function test() {
  if ([x,
       y
      ]) { // alarm
  }
}
