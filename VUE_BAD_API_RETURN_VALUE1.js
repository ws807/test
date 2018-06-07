/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component('my-comp', {
  data() {
    return 'data'; // alarm
  },
  render() {
    return [<div>{this.data}</div>, <div>Hello</div>]; // alarm
  },
  beforeCreate() {
    return true; // alarm
  }
});

Vue.component('my-comp', {
  data() {
    return { myData: 'foo' }; // no alarm
  },
  render() {
    return <div>{this.myData}</div>; // no alarm
  },
  beforeCreate() {
    // do something // no alarm
  }
});