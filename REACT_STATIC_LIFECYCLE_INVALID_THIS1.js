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
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.msg !== this.state.msg) { // high alarm
      return {};
    }
    return null;
  }
  render() {
    return <div>{this.state.msg}</div>;
  }
}

class Hello2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: 'hi' };
  }
  render() {
    return <div>{this.state.msg}</div>;
  }
}

Hello2.getDerivedStateFromProps = function (nextProps, prevState) {
  return foo(this); // medium alarm
}

class Hello3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: 'hi' };
  }
  render() {
    return <div>{this.state.msg}</div>;
  }
}

Hello3.getDerivedStateFromProps = (function (nextProps, prevState) {
  if (nextProps.msg !== this.state.msg) { // no alarm
    return {};
  }
  return null;
}).bind(Hello3);