<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<!-- test duplicate non-DOM attributes -->

<template>
  <div>
    <button @click="noOp" @click="noOp">Click me</button> <!-- high -->
    <button v-on:click="noOp" v-on:click="noOp">Click me</button> <!-- high -->
    <button v-on:click="noOp" @click="noOp">Click me</button> <!-- no alarm -->

    <div v-for="i in 5" v-for="j in 5" :key="i + '' + j"/> <!-- high -->

    <div flag flag>123</div> <!-- medium -->
    <div flag flag="1">123</div> <!-- medium -->
    <div flag="1" flag>123</div> <!-- medium -->
    <div flag="1" flag="1">123</div> <!-- high -->

    <div flag="" flag="">123</div> <!-- medium -->
    <div flag="" flag="1">123</div> <!-- medium -->
    <div flag="1" flag="">123</div> <!-- medium -->
    <div flag="1" flag="1">123</div> <!-- high -->
  </div>
</template>

<script>
export default {
  methods: {
    noOp: function() {}
  }
}
</script>