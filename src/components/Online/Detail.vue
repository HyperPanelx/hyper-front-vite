<script setup lang="ts">
import {useDetail} from "../../composables/online/useDetail.ts";
import VModal from "../global/VModal.vue";
///////////////////
const props=defineProps<{
  user:string
}>();
const {modelFlag,toggleModalFlag,openModal,closeModal,fetchData}=useDetail(props)

</script>

<template>
  <button @click="toggleModalFlag" class="btn btn-primary w-8 btn-sm relative z-10" >
    Show detail
  </button>

  <VModal @open="openModal" @close="closeModal" class="!p-0 !h-auto" :fade-outside="true" v-model="modelFlag">
    <template v-if="fetchData.flag">
      <div class="px-1.5 py-1">
        <div class="flex items-center w-[65%] m-auto">
          <p class="font-second h6 text-secondary-light-2">
            <span  class="inline-block w-0.5 rounded-full h-0.5 bg-secondary-light-2"></span> username:
          </p>
          <p class="font-second ml-3 h6">
            {{user}}
          </p>
        </div>
        <div class="flex items-center  mt-1 w-[65%] m-auto">
          <p class="font-second h6 text-secondary-light-2">
             <span  class="inline-block w-0.5 rounded-full h-0.5 bg-secondary-light-2"></span> multi users:
          </p>
          <p class="font-second ml-3 h6">
            {{fetchData.data.lenuser}}
          </p>
        </div>
        <div class="flex items-center  mt-1 w-[65%] m-auto">
          <p class="font-second h6 text-secondary-light-2 ">
             <span  class="inline-block w-0.5 rounded-full h-0.5 bg-secondary-light-2"></span> IP Address:
          </p>
          <p class="font-second ml-3 h6">
            {{fetchData.data.ipaddress}}
          </p>
        </div>
        <div class="flex items-center  mt-1 w-[68%] m-auto">
          <p class="font-second h6 text-center text-secondary-light-2 ">
             <span  class="inline-block w-0.5 rounded-full h-0.5 bg-secondary-light-2"></span> Client IP:
          </p>
          <p class="font-second ml-3 h6 w-11 text-hidden overflow-x-scroll scroller">
            {{fetchData.data.client_ip.join(' - ')}}
          </p>
        </div>
      </div>
    </template>
    <p v-else class="animate-pulse text-center p-3 h5">
      fetching data...
    </p>
    <div class="modal-footer">
      <button class="btn btn-indigo btn-sm" @click="closeModal">
        Close
      </button>
    </div>
  </VModal>

</template>

<style scoped>

</style>