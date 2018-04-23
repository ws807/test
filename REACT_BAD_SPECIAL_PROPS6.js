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
  }
  getSnapshotBeforeUpdate(prevProps) {
    return prevProps.key; // alarm
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot != null) {
      // do something
    }
  }
  static getDerivedStateFromProps(prevProps) {
    return { myKey: prevProps.key }; // alarm
  }
  render() {
    return <h1>Hello, world!</h1>;
  }
}