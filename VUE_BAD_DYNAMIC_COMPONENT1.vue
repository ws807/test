<template>
  <div>
    <component/> <!-- alarm -->
    <component is="currentMsg"/> <!-- alarm -->
  </div>
</template>
<script>
Vue.component('say-hello', {
  template: '<div>Hello</div>'
});
Vue.component('say-bye', {
  template: '<div>Bye</div>'
});
export default {
  computed: {
    currentMsg: function () {
      if (Math.random() > 0.5) return "say-hello";
      else return "say-bye";
    }
  }
};
</script>
