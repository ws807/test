<template>
  <div>
    <input class="input" type="text" v-model="newAttributeName">
    <button @click="addAttr">+</button>
    <button @click="deleteAttr">-</button>
    <p>
      {{ this.$data }}
    </p>
  </div>
</template>
 
<script>
import Vue from "vue";

var fake_obj = {
  fake_function: function() {
    this.$set(this, this.newAttributeName, ''); // no alarm
    this.$delete(this, this.newAttributeName); // no alarm
    this.$set(this.$data, this.newAttributeName, ''); // no alarm
    this.$delete(this.$data, this.newAttributeName); // no alarm
    Vue.set(this, this.newAttributeName, ''); // no alarm
    Vue.delete(this, this.newAttributeName); // no alarm
    Vue.set(this.$data, this.newAttributeName, ''); // no alarm
    Vue.delete(this.$data, this.newAttributeName); // no alarm
  }
};
fake_obj.fake_function();

export default {
  data() {
    return {
      newAttributeName: "",
      product: { }
    }
  },
  methods: {
    addAttr () {
      // NOTE: this.$set is an alias to the global Vue.set
      this.$set(this, "$parent", ''); // no alarm
      this.$set(this, "newAttributeName", ''); // no alarm
      this.$set(this, "undefinedProperty", ''); // alarm

      this.$set(this.$data, "newAttributeName", ''); // no alarm
      this.$set(this.$data, "undefinedProperty", ''); // alarm

      this.$set(this, this.newAttributeName, ''); // alarm
      Vue.set(this, this.newAttributeName, ''); // alarm

      this.$set(this.$data, this.newAttributeName, ''); // alarm
      Vue.set(this.$data, this.newAttributeName, ''); // alarm

      this.$set(this.$root, this.newAttributeName, ''); // alarm
      Vue.set(this.$parent, this.newAttributeName, ''); // alarm
      Vue.set(this.$parent.$parent, this.newAttributeName, ''); // alarm


      this.$set(this.$root.$data, this.newAttributeName, ''); // alarm
      Vue.set(this.$parent.$data, this.newAttributeName, ''); // alarm

      var parent = this.$parent;
      Vue.set(parent.$parent.$data, this.newAttributeName, ''); // alarm

      this.$parent.$set(this, this.newAttributeName, ''); // alarm
      this.$parent.$set(this.$data, this.newAttributeName, ''); // alarm

      this.$parent.$set(this.component, this.newAttributeName, ''); // no alarm
      this.$set(this.component, this.newAttributeName, ''); // no alarm
      Vue.set(this.component, this.newAttributeName, ''); // no alarm
      Vue.set(this.$data.$data, this.newAttributeName, ''); // no alarm

      var fake = {
        $data: { },
        $set: function (a, b, c) { a[b] = c; },
        $delete: function (a, b) { delete a[b]; }
      };
      fake.$set(this, this.newAttributeName, ''); // no alarm
      this.$set(fake, this.newAttributeName, ''); // no alarm
      this.$set(fake.$data, this.newAttributeName, ''); // no alarm
    },
    deleteAttr () {
      // NOTE: this.$delete is an alias to the global Vue.delete
      this.$delete(this, "$parent"); // alarm
      this.$delete(this, "newAttributeName"); // alarm
      this.$delete(this, "undefinedProperty"); // alarm

      this.$delete(this.$data, "newAttributeName"); // alarm
      this.$delete(this.$data, "undefinedProperty"); // alarm

      this.$delete(this, this.newAttributeName); // alarm
      Vue.delete(this, this.newAttributeName); // alarm

      this.$delete(this.$data, this.newAttributeName); // alarm
      Vue.delete(this.$data, this.newAttributeName); // alarm

      this.$delete(this.$root, this.newAttributeName); // alarm
      Vue.delete(this.$parent, this.newAttributeName); // alarm
      Vue.delete(this.$parent.$parent, this.newAttributeName); // alarm

      this.$delete(this.$root.$data, this.newAttributeName); // alarm
      Vue.delete(this.$parent.$data, this.newAttributeName); // alarm

      var parent = this.$parent;
      Vue.delete(parent.$parent.$data, this.newAttributeName); // alarm

      this.$parent.$delete(this, this.newAttributeName); // alarm
      this.$parent.$delete(this.$data, this.newAttributeName); // alarm

      this.$parent.$delete(this.component, this.newAttributeName); // no alarm
      this.$delete(this.component, this.newAttributeName); // no alarm
      Vue.delete(this.component, this.newAttributeName); // no alarm
      Vue.delete(this.$data.$data, this.newAttributeName); // no alarm

      var fake = {
        $data: { },
        $set: function (a, b, c) { a[b] = c; },
        $delete: function (a, b) { delete a[b]; }
      };
      fake.$delete(this, this.newAttributeName); // no alarm
      this.$delete(fake, this.newAttributeName); // no alarm
      this.$delete(fake.$data, this.newAttributeName); // no alarm
    },
  }
};
</script>
