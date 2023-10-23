<script setup lang="ts">
import { ref } from "vue";
import findChar from "./Finder";

const props = defineProps<{ name: string; iteration: number; code: boolean }>();

const message = ref("");
</script>

<template>
  <div class="coder-wrapper">
    <h2>{{ name }}</h2>
    <p></p>
    <div id="input-form">
      <input
        v-model="message"
        placeholder="input your message"
        required
        pattern="[0-9]"
        min="0"
        max="49"
      />
    </div>
    <div id="output-form">
      <p>output</p>
      <div class="output">
        <p>{{ findChar(message, props.iteration, props.code) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coder-wrapper {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.output {
  padding: 1rem;
  min-width: 100px;
  background-color: darkgrey;
  border-radius: 5px;
}
</style>
./Finder.ts
