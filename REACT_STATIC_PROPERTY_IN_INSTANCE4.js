/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greetName: 'hi' };
  }
  getDerivedStateFromProps() { // alarm
    return { greetName: 'bye' };
  }
  render() {
    return <div>{this.state.greetName}</div>;
  }
}