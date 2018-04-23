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
    this.state = { msg: 'hi' };
  }
  render() {
    return <div>{this.state.msg}</div>;
  }
  getSnapshotbeforeUpdate(nextProps, prevState) { // alarm
    return prevState.msg;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot != null) {
      // do something
    }
  }
  static getDerivedStateFromProp(nextProps, prevState) { // alarm
    return {
      msg: prevState.msg + nextProps.cnt
    };
  }
}