/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component('123abc', { // alarm
  data: function () {
    return { msg: 'hi' };
  }
});

Vue.extend({
  name: 'slot', // alarm
  data: function () {
    return { msg: 'hi' };
  }
});

new Vue({
  el: '#app',
  components: {
    div: {} // alarm
  }
});

Vue.component('my-comp', { // no alarm
  data: function () {
    return { msg: 'hi' };
  }
});

Vue.extend({
  name: 'mySlot', // no alarm
  data: function () {
    return { msg: 'hi' };
  }
});

new Vue({
  el: '#app',
  components: {
    myDiv: {} // no alarm
  }
});