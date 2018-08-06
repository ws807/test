/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

import Vue from 'vue';

Vue.extend({
  name: '', // no alarm
  data: function () {
    return { msg: 'hi' };
  }
});

Vue.component('my-comp', { // no alarm
  data: function () {
    return { msg: 'hi' };
  }
});

Vue.component('', { // alarm
  data: function () {
    return { msg: 'hi' };
  }
});
