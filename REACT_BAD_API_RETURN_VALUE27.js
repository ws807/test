/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for detecting React.forwardRef() API's first argument function

import React from "react";

function Greeting(Component) {
  class Hello extends React.Component {
    render() {
      return <Component ref={this.props.forwardedRef} />;
    }
  }

  return React.forwardRef((props, ref) => {
    <Hello forwardedRef={ref} />; // alarm
  });
}

