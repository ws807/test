/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Tests JSX spread child. (BD-5141)
// No alarm detection because JSX spread child is not well-established feature.

import React from 'react';

export class Hello extends React.Component {
  render() {
    return (
      <div>
        { ...[<div key="hello">Hello</div>, <div value="hello">Hi</div>] /* no alarm */ }
      </div>
    );
  }
}
