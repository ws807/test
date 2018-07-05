/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests alarm detection at OptionalDot (BD-5565)

import React from "react";

export class Foo extends React.Component {
  render() {
    return (
      <div>
        {a?.length && a[0]} {/* alarm */}
        {a?.b.length && a.b[0]} {/* alarm */}
      </div>
    );
  }
}
