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
    this.helloRef = React.createRef();
  }
  UNSAFE_componentWillUpdate() { // alarm
    this.abc = 1;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.msg !== this.state.msg) {
      return this.helloRef.current.offsetLeft;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.helloRef.current.style.left = (snapshot + 10) + 'px';
    }
  }
  render() {
    return <div ref={this.helloRef}>{this.state.msg}</div>;
  }
}