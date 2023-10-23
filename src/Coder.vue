<script setup lang="ts">
import CodeDecode from "./components/CodeDecode.vue";
import { ref } from "vue";

const iterations = ref(0);
</script>

<template>
  <div class="forms">
    <div class="iteration-form">
      <input
        v-model="iterations"
        type="number"
        placeholder="ВВедите число итераций"
      />
    </div>
    <div class="content">
      <CodeDecode name="Кодер" :iteration="iterations" :code="true" />
      <CodeDecode name="Декодер" :iteration="iterations" :code="false" />
    </div>
  </div>
</template>

<style scoped>
.forms {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iteration-form {
  padding: 1rem;
}
.content {
  display: flex;
  justify-content: space-around;
}
</style>
