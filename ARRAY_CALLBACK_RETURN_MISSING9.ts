/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for recognizing TypeScript Array<> type annotation. (BD-5710)

function test(arr: Array<number>) {
  arr.filter(function (n) { n > 0 } /* alarm */);
}
