<template>
  <nav class="navbar" :class="{'n-collapse':sidebarCollapseFlag}">
    <div class="navbar-left">
      <font-awesome-icon @click="collapseSidebar"  class="cursor-pointer mr-2 dark:!text-primary-dark-2 text-1.5 text-gray-700" icon="fa-solid fa-bars" color="black" />
      <NavbarSearchDesktop v-model="openDropdownFlag"/>
    </div>
    <div class="navbar-right">
      <NavbarSearchMobile />
      <NavbarNotification/>
      <NavbarTheme />
      <font-awesome-icon @click="requestFullScreen"
            :icon="fullScreenFlag ? 'fa-solid fa-compress' : 'fa-solid fa-expand'" class="navbar-icon  md:!block !hidden w-1.6"

      />
    </div>
    <NavbarUser />
  </nav>
</template>

<script setup lang="ts">
import {ref,onMounted} from "vue";
import  NavbarSearchDesktop from '../Navbar/Search/Desktop.vue'
import  NavbarSearchMobile from '../Navbar/Search/Mobile.vue'
import NavbarNotification from '../Navbar/Notification.vue'
import NavbarTheme from '../Navbar/Theme.vue'
import NavbarUser from '../Navbar/User.vue'
import {useDashboardStore} from "../../composables/useStates";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {dashboardStore} from "../../store/dashboard";
///////////////
const {windowWidth,sidebarCollapseFlag}=useDashboardStore();
const fullScreenFlag=ref<boolean>(false)
const openDropdownFlag=ref<boolean>(false)
///////////////
const collapseSidebar = () => {
  dashboardStore.sidebarCollapseFlag=!dashboardStore.sidebarCollapseFlag
}
const requestFullScreen = () => {
  if(document.documentElement.requestFullscreen){
    fullScreenFlag.value=!fullScreenFlag.value
    if(fullScreenFlag.value){
      document.documentElement.requestFullscreen()
    }else{
      document.exitFullscreen()
    }
  }
}

onMounted(()=>{
  if(windowWidth && windowWidth>500 && windowWidth<960){
    dashboardStore.sidebarCollapseFlag=true
  }
})

</script>

<style scoped>

</style>