import Vue from 'vue';

Vue.component('hello', {
  data() {
    return {
      $options: [ // alarm
        {id: 'opt1', name: 'my option 1'},
        {id: 'opt1', name: 'my option 1'},
      ]
    }
  },
  template: '<div> <div v-for="opt in $options" :key="opt.id"> {{ opt.name }} </div></div>'
});

new Vue({
  el: "#ftn",
  data() {
    return {
      $options: [ // alarm
        {id: 'opt1', name: 'my option 1'},
        {id: 'opt1', name: 'my option 1'},
      ]
    }
  },
  template: '<div> <div v-for="opt in $options" :key="opt.id"> {{ opt.name }} </div></div>'
});

new Vue({
  el: "#obj",
  data: {
    $options: [ // alarm
      {id: 'opt1', name: 'my option 1'},
      {id: 'opt1', name: 'my option 1'},
    ]
  },
  template: '<div> <div v-for="opt in $options" :key="opt.id"> {{ opt.name }} </div></div>'
});
