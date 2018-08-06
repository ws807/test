<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- Testcase for correctly differentiating SYNTAX_ERROR and NON_REFERENCE_LHS. (BD-5657) -->

<template>
  <div>
    <div v-if="foo;"/> <!-- SYNTAX_ERROR alarm -->
  </div>
</template>
