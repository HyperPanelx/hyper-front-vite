<template>
  <template v-if="freeze">
    <teleport to="body">
      <section v-if="freeze" class="page-preloader !z-[99999] dark:!bg-primary-dark-1 flex flex-col !h-full !bg-primary-light-1 !fixed">
        <half-circle-spinner
            :animation-duration="1300"
            :size="windowWidth>500 ? 170 : 130"
            color="#727cf5"
        />
        <p class="text-center sm:text-1.2 text-1 mt-2 text-gray-700 dark:text-secondary-light-1">Switching on {{getServerIP}} server. please wait...</p>
      </section>
    </teleport>
  </template>
  <template v-else>
    <section v-if="on" class="page-preloader flex flex-col ">
      <half-circle-spinner
          :animation-duration="1300"
          :size="windowWidth>500 ? 150 : 130"
          color="#727cf5"
      />
      <p class="text-center sm:text-1 text-0.9 mt-2.5 text-gray-700 dark:text-secondary-light-1 animate-pulse">Fetching page data...</p>
    </section>
  </template>

</template>

<script setup lang="ts">
import {useServerStore} from "../../composables/useStates";
import {useDashboardStore} from "../../composables/useStates";
import { HalfCircleSpinner } from 'epic-spinners'
const {getServerIP}=useServerStore()
const {windowWidth}=useDashboardStore()
defineProps({
  on:{
    required:true,
    type:Boolean
  },
  freeze:{
    required:false,
    type:Boolean,
    default:false
  }
})


</script>

<style scoped>

</style>