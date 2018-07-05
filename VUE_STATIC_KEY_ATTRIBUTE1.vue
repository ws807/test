<template>
  <div>
    <!-- alarm cases -->
    <comp v-for="item in list1" key="item"/> <!-- alarm -->
    <div v-for="item in list2" key="item"> {{ item }} </div> <!-- alarm -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: [1,2,3],
      list2: [4,5,6]
    };
  },
  components: {
    comp: {
      props: ["value"],
      template: '<div> {{ value }} </div>'
    }
  }
};
</script>
