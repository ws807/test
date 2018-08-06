<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<template>
  <div>
    <div v-if="foo == 1">111</div>
    <div v-else>222</div>
    <div v-else>333</div> <!-- alarm -->
    <div v-else-if="foo == 4">444</div> <!-- alarm -->
  </div>
</template>

<script>
export default {
  name: 'invalid-v-else1',
  props: [foo]
};
</script>
