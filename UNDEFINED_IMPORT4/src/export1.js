// @flow
const name01 = "name01";
var name02 = "name02";
const var03 = "var03", var04 = "var04";

export { name01, name02 };
export { var03 as name03, var04 as name04 };
export let name05 = { }, name06 = 42;
export var name07 = { }, name08 = 42;
export const name09 = { }, name10 = 42;
export function name11() {
  return "do something";
}
export class name12 {
  something: string;
  constructor(something: string) {
    this.something = something;
  }
}

export default {
  "prop1": "property 01",
  "prop2": "property 02"
};

export * from './export2.js'; // no alarm
export {
  name13, // no alarm
  name14  // alarm
} from './export2.js';
export {
  super01 as name15, // no alarm
  super02 as name16  // alarm
} from './export2.js';
export * from './export3.js'; // no alarm
