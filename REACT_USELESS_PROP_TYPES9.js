/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for getSnapshotBeforeUpdate() and getDerivedStateFromProps()

import React from "react";
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  getSnapshotBeforeUpdate(nextProps) {
    return nextProps.x1;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.abc = snapshot;
  }
  static getDerivedStateFromProps(nextProps) {
    return { msg: nextProps.x2 };
  }
  render() {
    return <div>myComponent</div>;
  }
}

MyComponent.propTypes = {
  x1: PropTypes.string, // no alarm
  x2: PropTypes.string, // no alarm
  x3: PropTypes.string // alarm
};
