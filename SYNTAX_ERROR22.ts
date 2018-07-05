/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests duplicate variables between import and export declarations. (BD-5066)

import foo from "foo";
export var foo;
