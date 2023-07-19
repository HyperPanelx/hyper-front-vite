<template>
  <div v-bind="$attrs" class="container-full">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "containerFluid"
})
</script>

<style scoped>
@tailwind components;
.container-full{
  @apply max-w-full ;
}
</style>