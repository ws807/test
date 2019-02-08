/*******************************************************************************
    Copyright (c) 2019, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for ".mjs" module. (BD-6107)

import { foo1 } from "./export";
import { foo2 } from "./export.mjs";
import { foo3 } from "./export_dir";

foo1(null); // NULL_POINTER alarm
foo2(null); // NULL_POINTER alarm
foo3(null); // NULL_POINTER alarm
