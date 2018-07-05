<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- Test for parsing slot-scope attribute -->

<template>
  <div>
    <test slot-scope="x"> {{ x }} </test>
    <test slot-scope="{x, y = 1}"> {{ x }} </test>
    <test slot-scope="[first = { p, q }, second]"> {{ first }} </test>
    <test slot-scope="x,y"> {{ x + y }} </test>  <!-- no alarm -->
    <test slot-scope="x,,"> {{ x }} </test> <!-- alarm -->
  </div>
</template>