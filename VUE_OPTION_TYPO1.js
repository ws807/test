/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component('my-comp', {
  beforecreate() { // alarm
    // do something
  },
  template: '<div>{{ msg }}</div>'
});

Vue.component('my-comp', {
  beforeCreate() { // no alarm
    // do something
  },
  template: '<div>{{ msg }}</div>'
});

new Vue({
  el: '#app',
  myOption: { // no alarm
    prop: 1
  },
  template: '<div>Hello</div>'
});
