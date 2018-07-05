/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

new Vue({
  el: '#app',
  data: { $data: 'hi' }, // alarm
  methods: {
    $nextTick() { // alarm
      // do something
    }
  },
  computed: {
    $options() { // alarm
      return this.$data;
    }
  },
  props: {
    key: { // alarm
      type: Object
    }
  }
});

new Vue({
  el: '#app',
  data: { dataStr: 'hi' }, // no alarm
  methods: {
    nextTickMethod() { // no alarm
      // do something
    }
  },
  computed: {
    optionDataStr() { // no alarm
      return this.dataStr;
    }
  },
  props: ['keyProp'] // no alarm
});