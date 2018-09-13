/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for recognizing for-of RHS as property access. (BD-5705)

function test1(arr) {
  if (arr /* alarm */) bar(arr);
  for (let x of arr) {
    bar(x);
  }
}

async function test2(arr) {
  for await (let x of arr) {
    bar(x);
  }
  if (arr /* alarm */) bar(arr);
}
