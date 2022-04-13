    <template>
      <div>
        <!-- Example 1 -->
        <transition> <!-- VUE_BAD_TRANSITION_GROUP alarm because '<transition>' has three elements as children. -->
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
      </div>
    </template>
