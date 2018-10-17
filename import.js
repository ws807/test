/*******************************************************************************
    Copyright (c) 2017, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import React from 'react';
import MyElement from './export'

export class App extends React.Component {
  m(c) {
    var style;
    if (c) style = { padding: 20 };
    else style = { padding: 10 };
    return <MyElement style={style}/>; // alarm
  }
  render() {
    return <MyElement style={{padding: 20}}/>;  // alarm
  }
}

