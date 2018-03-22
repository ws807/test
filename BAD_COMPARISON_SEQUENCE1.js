/*******************************************************************************
    Copyright (c) 2017, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

function eq1(a, b, c) {
  return a === b === c;  // alarm
}

function eq2(a, b, c) {
  return a <= b < c;  // alarm
}

function eq3(a, b, c) {
  return a === b == c; // alarm
}

function eq4(a, b, c) {
  return a === b !== c; // alarm
}

function eq5(a, b, c) {
  return a === (b === c); // no alarm
}

function eq6(a, b, c) {
  return a === b === true; // no alarm
}