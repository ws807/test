/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for filtering side-effect intended alarms at ||= of && operands (BD-5565, BD-5223)

function test1(x) {
  (x ||= []) && f(x); // no alarm
}

function test2(x) {
  cond && (x ||= []) && f(x); // no alarm
}

function test3(x) {
  cond && (x ||= []) ? f(): g(); // alarm on the right-most operand
}
