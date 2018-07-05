/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcases for optional chaining (BD-5565)

x?.y; // alarm
x?.[y]; // alarm

x?.offsetHeight; // no alarm for reflow

(0, x)?.(); // no alarm for indirect call pattern
