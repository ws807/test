/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component('my-comp', {
  propsData: { // alarm
    msg: 'hello'
  },
  el: '#app', // alarm
  template: '<div>{{ msg }}</div>'
});

Vue.component('my-comp', {
  props: ['msg'], // no alarm
  template: '<div>{{ msg }}</div>'
});

new Vue({
  el: '#app', // no alarm
  template: '<div>Hello</div>'
});
