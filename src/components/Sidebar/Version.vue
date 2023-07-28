<template>
  <p class="text-center text-primary-dark-2 h-2 sm:mb-0 mb-3 absolute bottom-0 left-0 w-full">
   v{{appVersion}}
  </p>
</template>

<script setup lang="ts">
import {envVariable} from "../../composables/useStates";
const {appVersion}=envVariable()
</script>

<style scoped>

</style>