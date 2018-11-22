// @flow
import type {
  type01, // no alarm
  type02  // no alarm, because the module uses type annotation
} from './export3.js'
import defaultExport, {
  name01,            // no alarm
  name02,            // no alarm
  name03 as alias01, // no alarm
  name04,            // no alarm
  var03,             // no alarm, because the module uses type annotation
  var04 as alias02,  // no alarm, because the module uses type annotation
  name05,            // no alarm
  name06,            // no alarm
  name07,            // no alarm
  name08,            // no alarm
  name09,            // no alarm
  name10,            // no alarm
  name11,            // no alarm
  name12,            // no alarm
  name13,            // no alarm, re-exported from export1
  name14,            // no alarm, re-exported from export1
  name15,            // no alarm, re-exported from export1
  name16,            // no alarm, re-exported from export1
  name17,            // no alarm, re-exported from export1
  name18,            // no alarm, because the module uses type annotation
  prop1,             // no alarm, because the module uses type annotation
  prop2 as alias03,  // no alarm, because the module uses type annotation
  interface01,       // no alarm
  interface02,       // no alarm
  interface03        // no alarm, because the module uses type annotation
} from './export1.js';

function component(arg: type01): type02 {
  let element = document.createElement('div');
  element.innerHTML = arg;
  return element;
}

var arr = Array(
    name01, name02, alias01, name04, var03, alias02, name05,
    name06, name07, name08, name09, name10, name11, name12,
    name13, name14, name15, name16, name17, name18, prop1,
    alias03, defaultExport.prop1);
arr.forEach(str => console.log(component(str)));

function doSomething(arg1: interface01, arg2: interface02): interface03 {
  if (arg2.field01) return arg1;
  else return { field01: "something" };
}
doSomething({field01: "to use interfaces"}, {field01: true});
