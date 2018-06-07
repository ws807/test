<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- test code for v-text -->

<template>
  <div>
    <div v-text /> <!-- alarm -->
    <div v-text:aaa="foo" /> <!-- alarm -->
    <div v-text.aaa.bbb="foo" /> <!-- alarm -->
    <div v-text="foo" /> <!-- no alarm -->
  </div>
</template>
<script>
  export default {
    data() {
      return { foo: 'hi' };
    }
  }
</script>