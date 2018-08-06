<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- Testcase for allowing function expressions at v-on directive value. (BD-5655) -->

<template>
  <div>
    <div @click="() => foo()">Click</div> <!-- no alarm -->
    <div @click="function () { foo(); }">Click</div> <!-- no alarm -->
    <div @click="  function () { foo(); }  ">Click</div> <!-- no alarm -->
  </div>
</template>
