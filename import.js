/*******************************************************************************
    Copyright (c) 2020, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for 'isRequired' prop

import React from 'react';
import Person from "./export";

export function foo1() {
    const address = {
        city: "Seoul"
    };
    const props = {
        address: address,
        contact: {
        }
    };
    return <Person {...props}/>; // alarm: no 'age' and 'address.country' / name has default prop
}
