/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests alarm detection on the right most operand of ?? operator. (BD-5572)

import React from "react";

export class Foo extends React.Component {
  render() {
    return (
      <div>
        {elem ?? arr.length && arr} {/* alarm */}
        {(elem ?? arr.length) && f(elem, arr)} {/* alarm */}
      </div>
    );
  }
}
