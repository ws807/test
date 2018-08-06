/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

var obj = {
  msg: 'hi'
};

Vue.component('my-comp', {
  data() {
    return obj; // alarm
  },
  template: '<div>{{ msg }}</div>'
});

Vue.component('my-comp2', {
  data() {
    return new Object(obj); // no alarm
  }
});

Vue.component('my-comp3', {
  data() {
    var obj;

    function foo() {
      obj = { msg: 'hi' };
    }
    foo();

    return obj; // no alarm
  }
});