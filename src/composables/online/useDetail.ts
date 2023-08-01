import {IResponse} from "../../utils/Types";
import {shallowRef,reactive} from "vue";
import {envVariable,useAuthStore} from "../useStates";
import { useNotification } from "@kyvg/vue3-notification";
type response_data={lenuser:number,ipaddress:string,client_ip:string[]};

export const useDetail=(props)=>{
    const { notify }  = useNotification()
    const {apiBase}=envVariable()
    const modelFlag=shallowRef<boolean>(false);
    const fetchData=reactive({
        flag:false,
        data:{
            client_ip:[] as string[],
            ipaddress:''as string,
            lenuser:''as string
        }
    })
    const {token}=useAuthStore()
    const toggleModalFlag = () => {
        modelFlag.value=!modelFlag.value
    }

    const openModal = async () => {
        try {
            const request=await fetch(apiBase+`user-active-ip?username=${props.user}`,{
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token.value}`
                }
            })
            const response:IResponse<response_data[]>=await request.json();
            if(response.success){
                fetchData.flag=true
                fetchData.data.client_ip=response.data[0].client_ip
                fetchData.data.ipaddress=response.data[0].ipaddress
                fetchData.data.lenuser=response.data[0].lenuser
            }else{
                errorHandler(response.message)
            }
        }catch (err) {
            errorHandler('error in network connection!')
        }

    }
    const closeModal = () => {
        fetchData.data.lenuser=''
        fetchData.data.ipaddress=''
        fetchData.data.client_ip=[]
        fetchData.flag=false
        modelFlag.value=false
    }
    const errorHandler = (msg:string) => {
        notify({
            title: "Operation failed!",
            text: msg,
            type:'error'
        });
        closeModal()
    }





    return{
        closeModal,openModal,toggleModalFlag,fetchData,modelFlag
    }
}