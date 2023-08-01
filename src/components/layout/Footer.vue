<template>
  <footer class="footer" :class="{'n-collapse':sidebarCollapseFlag,'!mt-[250px]':$route.name==='NotFound'}">
    <p class="text-gray-500 dark:text-primary-dark-3 sm:mb-0 mb-0.3 sm:text-0.9 text-0.8">Copyright &copy; {{currentYear}}. All right is reserved.</p>
    <p class="text-gray-500 dark:text-primary-dark-3 sm:text-0.9 text-0.8">Designed and developed by <AppLink class="text-secondary-light-2 hover:underline" href="https://github.com/hoomanFsmo77">Hooman</AppLink> & <AppLink class="text-secondary-light-2 hover:underline" href="https://github.com/officialalikhani">Alireza</AppLink> </p>
  </footer>
</template>

<script setup lang="ts">
import AppLink from "../global/AppLink.vue";
import {useDashboardStore} from "../../composables/useStates";
import {currentYear} from "../../utils/Helper";
const {sidebarCollapseFlag}=useDashboardStore();

</script>

<style scoped>
@tailwind components;
@layer components {
  .footer{
    @apply p-1 !pr-2 sm:ml-[260px] sm:w-[calc(100vw-260px)] transition-all shadow-[0_0_30px_rgba(0,0,0,0.1)] flex sm:flex-row flex-col justify-between items-center bg-primary-light-1 dark:bg-primary-dark-1 mt-[31px]
  }
  .footer.n-collapse{
    @apply sm:!ml-[70px] sm:!w-auto
  }
}
</style>