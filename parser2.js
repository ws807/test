/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests non-trivial computed property in object pattern. (BD-5611)

var { length: len, [len - 1]: last} = [1, 2, 3];
