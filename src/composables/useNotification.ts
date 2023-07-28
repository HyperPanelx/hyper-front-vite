import {ref, watch} from "vue";
import {useRoute} from "vue-router";

export const useNotification=()=>{
    const dropdownFlag=ref<boolean>(false);
    const route=useRoute()
    watch(
        ()=>route.query,
        ()=>{
            dropdownFlag.value=false
        }
    )

    return {
        dropdownFlag
    }
}