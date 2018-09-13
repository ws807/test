/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for variable span with Flow type annotation. (BD-5688)

function test1() {
  var x /* alarm */ : number = 123;
}

function test2(x /* alarm */ ? : number = 123) {
}

var test3 = (x /* alarm */ ? : number = 123) => {
};
