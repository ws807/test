<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- Test case for disable directives inside inline JS code -->

<template>
  <div>
    <div :foo="!x instanceof y /* deepscan-disable-line */"/>
    <div :foo="!x instanceof y /* deepscan-disable-line BAD_NEGATION_OPERATOR */"/>
    <div :foo="!x instanceof y /* alarm */ /* deepscan-disable-line BAD_BITWISE_OPERATOR */"/>
    {{ foo, bar /* deepscan-disable-line UNUSED_EXPR */ }}
    {{ foo /* alarm */, bar }}
    {{ /* deepscan-disable UNUSED_EXPR */
       foo, bar
    }}
    {{ foo, bar }}
    {{ /* deepscan-enable UNUSED_EXPR */
       foo /* alarm */, bar
    }}
    {{ /* deepscan-disable-next-line */
       foo, bar
    }}
  </div>
</template>
