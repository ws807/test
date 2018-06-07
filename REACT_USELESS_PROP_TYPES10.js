/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for checking accesses in HOC helper functions.

import React, { Component, PropTypes } from 'react';

class Hello extends Component {
  render () {
    return <div>Hello</div>;
  }
}

Hello.propTypes = {
  prop1: PropTypes.string, // no alarm
  prop2: PropTypes.string, // no alarm
  prop3: PropTypes.string, // no alarm
  prop4: PropTypes.string  // alarm
};

const helper1 = {
  func(props) {
    return props.prop1;  // using prop1
  }
};

const helper2 = (otherParam, ownProps) => ownProps.prop2; // using prop2

const helper3 = ({prop3}) => prop3; // using prop3

exports.Hello = combiner(helper1)(Hello)(helper2, converter(helper3));
