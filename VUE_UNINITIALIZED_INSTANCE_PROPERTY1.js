/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component('my-comp', {
  data() {
    return { msg: 'hi' };
  },
  methods: {
    foo() {
      if (this.$data.msg == 'hi') { // alarm because foo() is called in beforeCreate()
        // do something
      }
    },
    bar() {
      if (this.$data.msg == 'hi') { // no alarm
        // do something
      }
    }
  },
  beforeCreate() {
    if (Math.random()) {
      this.foo();
    }

    if (this.$data.msg == 'hi') { // alarm
      // do something
    }
  }
});

Vue.component('my-comp', {
  data() {
    return { msg: 'hi' };
  },
  beforeCreate() {
    if (this.$options.abc) { // no alarm
      // do something
    }
  },
  mounted() {
    if (this.$data.msg == 'hi') { // no alarm
      // do something
    }
  }
});

new Vue({
  el: '#app',
  data: { msg: 'hi' },
  created() {
    this.$el.abc = 1; // alarm
  }
});

new Vue({
  el: '#app',
  data: { msg: 'hi' },
  created() {
    if (this.$data.msg == 'hi') { // no alarm
      // do something
    }
  }
});
