<template>
  <DefaultLayout>
    <VPreloader :on="showPreloaderFlag" :freeze="freezeAppFlag" />
    <FAB
        :items="settingTabItems"
        fab-icon="fa-solid fa-gear"
    />
    <VModal :fade-outside="true" @close="closeModal" class="!p-0 !h-auto" v-model="modalFlag">
      <div class="modal-body !px-0 !pb-0">
        <p class="capitalize px-1.5 text-1.1 dark:text-secondary-light-1 mt-1 mb-0.5 text-primary-dark-1">{{String($route.query.section).split('-').join(' ')}}</p>
        <component @close="closeModal" :is="selected_component"/>
      </div>
    </VModal>
    <router-view></router-view>
  </DefaultLayout>
</template>

<script setup lang="ts">
import VModal from '../components/global/VModal.vue'
import {settingTabItems} from "../utils/Helper";
import FAB from '../components/Setting/FAB.vue'
import DefaultLayout from '../layouts/default.vue'
import VPreloader from '../components/global/VPreloader.vue'
import {useInitialFetch} from "../composables/useInitialFetch.ts";
import {useSetting} from "../composables/useSetting.ts";
import {useDashboardStore, useServerStore} from "../composables/useStates.ts";
////////
useInitialFetch();
const {closeModal,modalFlag,selected_component}=useSetting()
const {showPreloaderFlag}=useDashboardStore();
const {freezeAppFlag}=useServerStore();

</script>

<style scoped>

</style>