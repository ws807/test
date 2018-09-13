<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<template>
  <div>
    <!-- alarm case -->
    <template v-show="flag">
      Only show me if flag is true!
    </template>
    <template v-show="flag" v-if="flag2">
      Only render if flag2 is true
      <template v-show="flag3">
        nested template
      </template>
    </template>

    <!-- no alarm case -->
    <template v-if="flag">
      Only show me if flag is true!
    </template>
    <template v-if="flag2">
      Only render if flag2 is true
      <div v-show="flag3">
        nested template
      </div>
    </template>
  </div>
</template>
