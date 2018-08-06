<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- Tests holes at LHS of v-for directive. (BD-5649) -->

<template>
  <div>
    <div v-for="(item,,index) in itemList" :key="index"> <!-- alarm -->
    </div>
  </div>
</template>
