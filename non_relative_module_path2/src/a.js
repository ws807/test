/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for non-relative module path - local dependency

import {foo} from "my-lib/lib";

function bar() {
    if (foo() === true) return;
}
