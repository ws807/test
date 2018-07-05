/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

new Vue({
  data: {
    currentYear: new Date().getFullYear()
  },
  computed: {
    prevYear() { // alarm
      this.getPrevYear();
    },
    nextYear: {
      get() { // alarm
        this.getNextYear();
      },
      set(nextYear) {
        this.currentYear = nextYear - 1;
      }
    }
  },
  methods: {
    getPrevYear() {
      return this.currentYear - 1;
    },
    getNextYear() {
      return this.currentYear + 1;
    }
  }
});
