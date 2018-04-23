/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

function foo1(a) {
  a.forEach(e => {
    if (e.prop)
      return true // alarm
  })
  return false
}

function foo2(a) {
  a.forEach(e => { // no alarm
    if (e.prop)
      return true
  })
  return; // return nothing
}

function foo3(a) {
  a.forEach(e => { // no alarm
    if (e.prop)
      return true
  })
  return a; // return Top
}

function foo4(a) {
  a.forEach(e => { // no alarm
    if (e.prop1)
      return e.prop2 // return Top
  })
  return true;
}