<template>
  <div>
    {{ foo }}
  </div>
</template>
<script>
export default {
  props: {
    foo: String,
  },
  computed: {
    bar() {
      return "duplicated";
    }
  },
  data() {
    return {
      msg : "",
      foo : "FOO", // alarm
      bar : "BAR", // alarm
      silent: ""
    }
  },
  methods: {
    msg() { // alarm
      return "duplicated";
    }
  }
};
</script>
