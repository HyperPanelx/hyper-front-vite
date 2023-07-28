import {useRoute, useRouter} from "vue-router";
import {shallowRef, watch} from "vue";
/////
import create from "../pages/settings/create.vue";
import changePassword from "../pages/settings/changePassword.vue";
import multi from "../pages/settings/multi.vue";
import SSH from "../pages/settings/SSH.vue";
import api from "../pages/settings/api.vue";
import limitation from "../pages/settings/limitation.vue";
import robot from "../pages/settings/robot.vue";
import backup from "../pages/settings/backup.vue";
import ip from "../pages/settings/ip.vue";


export const useSetting=()=>{
    const route=useRoute();
    const router=useRouter();
    const modalFlag=shallowRef(false);
    const selected_component=shallowRef(null)
    const closeModal = () => {
        modalFlag.value=false
        router.push({query:null})
    }

    watch(
        ()=>route.query.page,
        ()=>{
            if(route.query.section){
                const section=route.query.section;
                selected_component.value=section==='create-admin-user' ? create : section==='change-password' ? changePassword : section==='add-multi-server' ? multi : section==='ssh-port' ? SSH : section==='api' ? api : section==='user-limitation' ? limitation : section==='telegram-robot' ? robot : section==='backup-and-restore' ? backup : section==='ip-block' ? ip : null;
                modalFlag.value=true
            }
        }
    )




    return{
        closeModal,selected_component,modalFlag
    }
}