/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component('hello', {
  props: {
    foo: String
  },
  computed: {
    foo() { // alarm
      return this.msg + ' hi';
    }
  },
  methods: {
    foo() { // alarm
      // do something
    }
  },
  data() {
    return { msg: 'myData' };
  },
  template: '<div>{{ foo }}</div>'
});
