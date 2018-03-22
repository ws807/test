/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

function foo1(a) {
  if (a === {}) { // alarm
    console.log("empty object");
  } else if (a === []) { // alarm
    console.log("empty array");
  }

  var obj = {};

  if (obj == {}) { // alarm
    console.log("empty object");
  }
}

function foo2(a) {
  if (typeof a === "object" && Object.keys(a).length === 0) { // no alarm
    console.log("empty object");
  } else if (Array.isArray(a) && a.length === 0) { // no alarm
    console.log("empty array");
  }

  if ("[object Object]" == {}) { // no alarm
  }
}

