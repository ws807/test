<template>
  <div>
    <!-- alarm cases -->
    <comp v-for="item in list"/> <!-- no key -->
    <comp v-for="item in list" v-bind:key.prop="'a' + item"/> <!-- no bind with prop modifier -->
    <comp v-for="item in list" v-bind:key.sync="'b' + item"/> <!-- no bind with sync modifier -->
    <comp v-for="item in list" v-bind.prop="'c' + item"/> <!-- no bind with prop modifier -->
    <comp v-for="item in list" v-bind.sync="'d' + item"/> <!-- no bind with sync modifier -->

    <!-- no alarm cases -->
    <comp v-for="item in list" :key="'e' + item"/> <!-- has valid key -->
    <comp v-for="item in list" key="'f' + item"/> <!-- on only static key -->
    <comp v-for="item in list" v-bind:key.camel="'g' + item"/> <!-- valid key with camel modifier -->
    <div v-for="item in list"> {{ item }} </div> <!-- ignore HTML tag -->
    <svg v-for="item in list"/> <!-- ignore SVG tag -->
    <slot v-for="item in list"/> <!-- no alarm on builtin components -->
    <transition v-for="item in list3"/> <!-- no alarm on redefinable builtin components -->
    <comp v-for="item in list2" v-bind.camel="'h' + item"/> <!-- valid key with camel modifier -->
  </div>
</template>
<script>
export default {
  data() {
    return { list: [1,2,3] };
  },
  components: {
    comp: {
      props: ["value"],
      template: '<div> {{ value }} </div>'
    }
  }
};
</script>
