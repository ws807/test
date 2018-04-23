/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case of non-relative module path - webpack configuration

var mm = require("s/a");

function main() {
    if (mm() === true) return;  // alarm
}

module.exports = {};