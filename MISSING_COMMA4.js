/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests alarm detection at OptionalDot (BD-5565)

function foo1(x) {
  console?.log(x. a.b);  // alarm
}

function foo2(x) {
  console?.log(x. a. b);  // 2 alarms
}

function foo3(x) {
  console.log?.(x. a[0]);  // alarm
}
