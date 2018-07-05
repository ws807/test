/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component('my-comp', {
  data: { msg: 'hi' }, // alarm
  props: [{ abc: String }], // alarm
  computed: 'computed', // alarm
  methods: {
    abc: 'aaa', // alarm
    def() {}
  },
  template: '<div>{{ msg }}</div>'
});

Vue.component('my-comp', {
  data() { // no alarm
    return { msg: 'hi' };
  },
  props: ['abc'], // no alarm
  computed: { // no alarm
    foo() {
      return this.abc + 'b';
    }
  },
  methods: {
    abc() {}, // no alarm
    def() {}
  },
  template: '<div>{{ msg }}</div>'
});