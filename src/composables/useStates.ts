import {authStore} from '../store/auth'
import {dashboardStore} from "../store/dashboard";
import {Table} from "../store/table";
import {Server} from "../store/server";
import {notificationStore} from '../store/notification'
import {computed} from "vue";
import {IUsers_Data, IOnline_Users_Data, INotification} from "../utils/Types";
import {storeToRefs} from "pinia";


export const envVariable=()=>{
    const apiBase:string|undefined=import.meta.env.APP_API_BASE || 'http://localhost/';
    const cookieName:string|undefined=import.meta.env.APP_COOKIE_NAME || 'fb69cda06c628';
    const appVersion:string|undefined=import.meta.env.APP_VERSION || '1.2.2';
    const server_ip:string|undefined=import.meta.env.APP_SERVER_IP || 'localhost';
    const ssh_port:string|undefined=import.meta.env.APP_SSH_PORT || 22;

    return{
        apiBase,cookieName,appVersion,server_ip,ssh_port
    }
}

export const useAuthStore=()=>{
    const username=computed<string>(()=>authStore.username)
    const isLogin=computed<boolean>(()=>authStore.isLogin)
    const token=computed<string>(()=>authStore.token)


    return {username,isLogin,token}
}


export const useDashboardStore=()=>{
    const sidebarCollapseFlag=computed<boolean>(()=>dashboardStore.sidebarCollapseFlag)
    const showPreloaderFlag=computed<boolean>(()=>dashboardStore.showPreloaderFlag)
    const fetchDashboardDataFlag=computed<boolean>(()=>dashboardStore.fetchDashboardDataFlag)
    const windowWidth:null|number= window.innerWidth

    return{
        sidebarCollapseFlag,windowWidth,showPreloaderFlag,fetchDashboardDataFlag
    }
}

export const useTableStore=()=>{
    const tableStore=Table()
    const {filterUser}=storeToRefs(tableStore)
    ///////////////////////
    const tableData=computed<IOnline_Users_Data | IUsers_Data>(()=>tableStore.tableData)
    const fetchTableDataFlag=computed<boolean>(()=>tableStore.fetchTableDataFlag)
    const selectedUserToDelete=computed<string[]>(()=>tableStore.selectedUserToDelete)
    const selectedOnlineUserToKill=computed<string[]>(()=>tableStore.selectedOnlineUserToKill)
    const paginationData=computed<any>(()=>tableStore.paginationData)
    const searchText=computed<string>(()=>tableStore.searchText)
    const resetPaginationControl=computed<boolean>(()=>tableStore.paginationData.resetFlag)


    return{
        tableData,
        fetchTableDataFlag,
        selectedUserToDelete,
        selectedOnlineUserToKill,
        tableStore,paginationData,
        searchText,filterUser,resetPaginationControl
    }
}


export const useServerStore=()=>{
    const serverStore=Server()
    const {getServerIP,getHostList,isEnable,freezeAppFlag}=storeToRefs(serverStore)
    const fetchServerListsFlag=computed<boolean>(()=>serverStore.fetchServerListFlag)



    return{
        getServerIP,serverStore,getHostList,fetchServerListsFlag,isEnable,freezeAppFlag
    }
}


export const useNotificationStore=()=>{
    const newsNotificationData=computed<INotification[]>(()=>notificationStore.getNewsNotification);
    const warningNotificationData=computed<INotification[]>(()=>notificationStore.getWarningNotification);
    const dangerNotificationData=computed<INotification[]>(()=>notificationStore.getDangerNotification);
    const getNotificationData=computed<INotification[]>(()=>notificationStore.notificationData);

    return {
        newsNotificationData,warningNotificationData,dangerNotificationData,getNotificationData
    }

}