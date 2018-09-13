<template>
  <div>
    <!-- alarm case -->
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition name="flip-list" tag="ul"> <!-- it has multile children -->
        <li v-for="item in items">
          {{ item }}
        </li>
      </transition>
    </div>

    <!-- alarm case -->
    <transition> <!-- it has multiple children -->
      <button key="saved">
        Edit
      </button>
      <button key="edited">
        Save
      </button>
      <button key="editing">
        Cancel
      </button>
    </transition>

    <!-- alarm case -->
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items"> <!-- child with no :key -->
          {{ item }}
        </li>
      </transitio-group>
    </div>

    <!-- alarm case -->
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <template v-if="ok"> <!-- <template> is a invisible wrapper -->
          <li v-for="item in items"> <!-- child with no :key -->
            {{ item }}
          </li>
        </template>
      </transitio-group>
    </div>

    <!-- no alarm case -->
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">
          {{ item }}
        </li>
      </transition-group>
    </div>


    <!-- no alarm case -->
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <template v-if="ok">
          <li v-for="item in items" v-bind:key="item">
            {{ item }}
          </li>
        </template>
      </transition-group>
    </div>

    <!-- no alarm case -->
    <transition>
      <button v-if="docState === 'saved'" key="saved">
        Edit
      </button>
      <button v-if="docState === 'edited'" key="edited">
        Save
      </button>
      <button v-if="docState === 'editing'" key="editing">
        Cancel
      </button>
    </transition>

    <!-- no alarm case -->
    <transition>
      <button key="saved">
        Edit
      </button>
    </transition>
  </div>
</template>
