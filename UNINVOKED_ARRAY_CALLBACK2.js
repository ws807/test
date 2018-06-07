/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test cases for SpreadElement and Parenthesized. (BD-5522)

// SpreadElement
function test1(elems, callback) {
  return new Array(...elems).map(elem => callback(elem)) // no alarm
}

// Parenthesized
function test2(callback) {
  return new Array(("abc")).map(_ => callback()) // no alarm
}

// Parenthesized
function test3(callback) {
  return new Array((123)).map(_ => callback()) // alarm
}
