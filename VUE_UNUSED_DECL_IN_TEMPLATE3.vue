<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- test filterable -->

<template>
  <div>
    <div v-for="(x, i) in items" :key="'a' + x"> <!-- alarm on i -->
      {{ x | i }}
    </div>
    <div v-for="(x, i) in items" :key="'b' + x"> <!-- no alarm -->
      {{ x | add(i) }}
    </div>
    <div v-for="(x, i) in items" :key="'c' + x"> <!-- alarm on i -->
      <comp :v="x | i"/>
    </div>
    <div v-for="(x, i) in items" :key="'d' + x"> <!-- no alarm -->
      <comp :v="x | add(i)"/>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: [1,2,3]
    };
  },
  filters: {
    i: function (x) { return x + 1; },
    add: function (x, y) { return x + y; }
  }
}
</script>