<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- Tests alarm detection at Vue inline JS code. (BD-5648) -->

<template>
  <div>
    <div :attr="foo"/>
    <div @click="foo">CLICK</div>
    <div @click="foo;">CLICK</div> <!-- alarm -->
    <div @click="foo; bar();">CLICK</div> <!-- alarm -->
    {{ foo, bar }} <!-- alarm -->
    {{ foo }}
  </div>
</template>

<script>
export default {
  name: 'test',
}
</script>
