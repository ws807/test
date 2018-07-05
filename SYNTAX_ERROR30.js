/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

class A {}

class B extends A {
  constructor() {
    super() // no alarm
  }
}

class C {
  constructor() {
    super() // alarm
  }
}
