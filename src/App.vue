<template>
  <notifications position="bottom right" duration="6" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import {useAuth} from "./composables/useAuth.ts";
useAuth();
</script>

<style scoped>

</style>