<!--
     Copyright (c) 2018, S-Core.
     All rights reserved.

     Use is subject to license terms.

     This distribution may include materials developed by third parties.
-->

<template>
  <div>
    <!-- alarm case -->
    <textarea v-model="message">{{ message }}</textarea>
    <textarea v-model="message">{{ message2 }}</textarea>
    <textarea v-model="message">useless text</textarea>
    <textarea v-model="message">
      first child
      {{ second_child }}
      third child
    </textarea>

    <!-- no alarm case -->
    <textarea>{{ message }}</textarea>
    <textarea v-model="message" />
    <textarea v-model="message"></textarea>
    <textarea v-model="message">
	</textarea>
    <textarea> Simple text </textarea>
    <textarea>
      first child
      {{ second_child }}
      third child
    </textarea>
  </div>
</template>
