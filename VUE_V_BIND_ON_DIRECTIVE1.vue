<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<template>
  <div>
    <div :v-if="foo">Foo</div> <!-- alarm -->
    <div v-bind:v-if="bar">Bar</div> <!-- alarm -->
    <comp :v-bind="obj"/> <!-- alarm -->
  </div>
</template>

<script>
export default {
  name: 'v-bind-on-directive1',
  props: ["foo", "bar", "obj"]
};
</script>
