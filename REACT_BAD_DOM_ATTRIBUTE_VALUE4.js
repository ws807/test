/*******************************************************************************
    Copyright (c) 2017, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Testcase for detection after pruning undefined/null. (BD-4815)

import ReactDOM from 'react-dom';

export function test(cond) {
  var isAutoComplete;
  if (cond) {
    isAutoComplete = true;
  }
  ReactDOM.render(
    <input type="text" autoComplete={isAutoComplete /* alarm */} />,
    document.getElementById('root')
  );
}
