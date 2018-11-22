import defaultExport, {
  name01,            // no alarm
  name02,            // no alarm
  name03 as alias01, // no alarm
  name04,            // no alarm
  var03,             // alarm
  var04 as alias02,  // alarm
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
  name18,            // alarm
  prop1,             // alarm
  prop2 as alias03   // alarm
} from './export1.js';

function component(arg) {
  let element = document.createElement('div');
  element.innerHTML = arg;
  return element;
}

document.body.appendChild(component(name01));
document.body.appendChild(component(name02));
document.body.appendChild(component(alias01));
document.body.appendChild(component(name04));
document.body.appendChild(component(var03));
document.body.appendChild(component(alias02));
document.body.appendChild(component(name05));
document.body.appendChild(component(name06));
document.body.appendChild(component(name07));
document.body.appendChild(component(name08));
document.body.appendChild(component(name09));
document.body.appendChild(component(name10));
document.body.appendChild(component(name11));
document.body.appendChild(component(name12));
document.body.appendChild(component(name13));
document.body.appendChild(component(name14));
document.body.appendChild(component(name15));
document.body.appendChild(component(name16));
document.body.appendChild(component(name17));
document.body.appendChild(component(name18));
document.body.appendChild(component(prop1));
document.body.appendChild(component(alias03));
document.body.appendChild(component(defaultExport));
document.body.appendChild(component(defaultExport2));
