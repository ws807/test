/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for not considering let declaration as overwrites
// Need to check the message

for (let x1 in obj) { // alarm, no overwrites
  let x2 = 123; // alarm, no overwrites
  let x3;
  x3 = "Hello"; // alarm, previous line is not the overwrite
}
