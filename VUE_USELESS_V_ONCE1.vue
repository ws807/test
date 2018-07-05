<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<template>
  <div>
    <div v-for="i in list">
      <span v-once>{{ i.text }}</span> <!-- alarm -->
      <span>{{ i.text }}</span>
      <div>
        <span v-once>Hi</span> <!-- alarm -->
      </div>
    </div>
    <div v-for="i in list" v-bind:key="i.key">
      <span v-once>{{ i.text }}</span> <!-- no alarm -->
      <span>{{ i.text }}</span>
    </div>
    <div v-for="i in list" v-bind="{ key: i.key }">
      <span v-once>{{ i.text }}</span> <!-- alarm -->
      <span>{{ i.text }}</span>
    </div>
    <div v-for="i in list" key="i.key">
      <span v-once>{{ i.text }}</span> <!-- no alarm -->
      <div v-for="j in list">
        <span v-once>{{ j.text }}</span> <!-- alarm -->
      </div>
    </div>
    <div v-for="i in list">
      <div v-for="j in list" key="j.key" v-once> <!-- alarm -->
        {{ j.text }}
      </div>
      <div v-once /> <!-- alarm -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return { list: [{ key: 'akey', text: 'a' }, { key: 'bkey', text: 'b' }] };
    }
  }
</script>