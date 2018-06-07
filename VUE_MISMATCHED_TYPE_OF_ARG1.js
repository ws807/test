/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.component({ // alarm
  name: 'my-comp',
  data() {
    return { msg: 'hi' };
  },
  template: '<div>{{ msg }}</div>'
});

Vue.component('my-comp', { // no alarm
  data() {
    return { msg: 'hi' };
  },
  template: '<div>{{ msg }}</div>',
  methods: {
    abc() {
      this.$on(function (msg) { // alarm
        // do something
      });
    },
    def: () => {
      this.$on(function (msg) { // no alarm
        // do something
      });
    }
  },
  computed: {
    foo() {
      var self = this;
      self.$on('test', function (msg) {
        self.$watch(1 /*alarm*/, function (val, newVal) {
        });
      });
    },
    bar: {
      get() {
        this.$on(function (msg) { // alarm
          // do something
        });
      },
      set() {
        this.$on(function (msg) { // alarm
          // do something
        });
      }
    }
  }
});

Vue.component('my-comp', { // no alarm
  data() {
    return { msg: 'hi' };
  },
  template: '<div>{{ msg }}</div>',
  methods: {
    abc() {
      this.$on('test', function (msg) { // no alarm
        // do something
      });
    }
  },
  computed: {
    foo() {
      this.$on('test', function (msg) { // no alarm
        // do something
      });
    },
    bar: {
      get() {
        this.$on('test', function (msg) { // no alarm
          // do something
        });
      },
      set() {
        this.$on('test', function (msg) { // no alarm
          // do something
        });
      }
    }
  }
});