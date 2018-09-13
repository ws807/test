/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test for DFA alarm detection. (BD-5330)

function test1(x) {
  let type = typeof x;
  if (type == undefined) { // alarm
    return 'undefined type';
  } else if (type == 'array') { // alarm
    return 'array type';
  }
}

function test2(x, y) {
  let type;
  if (x) {
    type = typeof x;
  } else {
    type = typeof y;
  }
  return type === 'array'; // alarm
}

function test3(x) {
  let type = typeof x;
  if (!type) { // alarm
    return 'undefined';
  }
}

function test4(x) {
  let type;
  if (isArray(x)) {
    type = 'array';
  } else {
    type = typeof x;
  }
  return type === 'array'; // no alarm
}
