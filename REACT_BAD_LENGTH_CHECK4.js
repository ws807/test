/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for no alarm detection on Vue JSX. (BD-5568)

import Vue from "vue";

new Vue({
  el: '#app',
  render(h) {
    return (
      <div>
        {arr.length && arr} {/* no alarm */}
      </div>
    );
  }
});
