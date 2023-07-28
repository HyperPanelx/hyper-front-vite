import {useServerStore} from "./useStates.ts";
import {onMounted} from "vue";
import {notificationStore} from "../store/notification.ts";

export const useInitialFetch=()=>{
    const {serverStore}=useServerStore();

    onMounted(()=>{
        serverStore.fetchServersList();
        notificationStore.fetchNotification()
    })



}