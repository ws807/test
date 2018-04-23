/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for Flow implements clause. (BD-5158)

import {
  I1, // no alarm
  I2, // no alarm
  I3, // no alarm
  I4  // alarm
} from "foo";

export class A implements I1, I2<I3> {
}
