<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- Tests alarm detection at Vue inline JS code. (BD-5648) -->

<template>
  <div :func="num => { square: num * num }"/>
</template>

<script>
export default {
  name: 'test',
}
</script>
