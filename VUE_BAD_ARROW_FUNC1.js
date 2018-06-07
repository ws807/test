/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

new Vue({
  data: { msg: 'hello' },
  computed: {
    foo: () => {
      return this.msg /*alarm*/? this.msg + ' hi' : 'hi';
    },
    bar: {
      get: () => {
        return this.msg /*alarm*/ + ' bar';
      }
    }
  },
  created: () => {
    this.msg /*alarm*/ += ' created';
  }
});

new Vue({
  data: { msg: 'hello' },
  computed: {
    foo() {
      return this.msg + ' hi'; // no alarm
    },
    bar: {
      get() {
        return this.msg + ' bar'; // no alarm
      }
    }
  },
  created() {
    this.msg += ' created'; // no alarm
  }
});

new Vue({
  data: { msg: 'hello' },
  computed: {
    foo: (vm) => {
      return vm.msg + ' hi'; // no alarm
    },
    bar: {
      get: (vm) => {
        return vm.msg + ' bar'; // no alarm
      }
    }
  }
});