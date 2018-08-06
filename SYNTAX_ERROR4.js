/*******************************************************************************
    Copyright (c) 2014, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for non-early syntax error on regular expression.
// Currently, we do not detect non-early syntax errors. (BD-5641)

var x = /?/g; // no alarm
