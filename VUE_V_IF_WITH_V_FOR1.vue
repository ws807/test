<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<template>
  <div>
    <!-- alarm case -->
    <ul>
      <li
        v-for="user in users"
        v-if="shouldShowUsers"
        :key="user.id"
      >
        {{ user.name }}
      </li>
    </ul>

    <!-- alarm case -->
    <ul>
      <li
        v-if="foo({users})"
        v-for="user in users"
        :key="user.id"
      >
        {{ user.name }}
      </li>
    </ul>

    <!-- alarm case -->
    <ul>
      <li
        v-if="todos.length"
        v-for="todo in todos"
      >
        {{ todo }}
      </li>
    </ul>

    <!-- alarm case -->
    <ul>
      <li
        v-if="users.length > 0"
        v-for="[user] in users"
      >
        {{ user }}
      </li>
    </ul>

    <!-- alarm case -->
    <div>
      <template v-for="field in customFields"
        v-if="showFields"
        :slot="field.name"
        slot-scope="{ field, errors }">
        <slot :name="field.name"
          :field="field"
          :errors="errors"/>
      </template>
    </div>

    <!-- no alarm case -->
    <ul v-if="shouldShowUsers">
      <li
        v-for="user in users"
        :key="user.id"
      >
        {{ user.name }}
      </li>
    </ul>

    <!-- no alarm case -->
    <ul>
      <li
        v-if="foo({user})"
        v-for="user in users"
        :key="user.id"
      >
        {{ user.name }}
      </li>
    </ul>

    <!-- no alarm case -->
    <li 
      v-for="todo in todos"
      v-if="!todo.isComplete"
    >
      {{ todo }}
    </li>

    <!-- no alarm case -->
    <ul>
      <li
        v-if="user.id"
        v-for="user in users"
      >
        {{ user }}
      </li>
    </ul>

    <!-- no alarm case -->
    <ul>
      <li
        v-if="item1 && item2"
        v-for="[item1, item2] in items"
      >
        {{ item2 }}
      </li>
    </ul>

    <!-- no alarm case -->
    <div>
      <template v-for="field in customFields"
        v-if="field.meta.custom"
        :slot="field.name"
        slot-scope="{ field, errors }">
        <slot :name="field.name"
          :field="field"
          :errors="errors"/>
      </template>
    </div>
  </div>
</template>
