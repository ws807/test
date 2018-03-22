/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

function foo(callback) {
  return new Array(4).map(_ => callback()) // alarm
}

function bar(callback) {
  return Array(3).forEach(_ => callback()) // alarm
}

function indent() {
  return Array(4).join(" "); // no alarm
}