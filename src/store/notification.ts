import {reactive} from "vue";
import {INotification} from "../utils/Types";


export const notificationStore=reactive({
    notificationData:[] as INotification[],
    isUserExpired(username:string){
        return this.notificationData?.some(item=>item.username===username) ?? false
    },
    getUserExpiredDetail(username){
        return this.notificationData?.filter(item=>item.username===username)[0] ?? null
    },
    get getNewsNotification(){
        return this.notificationData.filter(item=>item.status==='news')
    },
    get getWarningNotification(){
        return this.notificationData.filter(item=>item.status==='warning')
    },
    get getDangerNotification(){
        return this.notificationData.filter(item=>item.status==='danger')
    },
    resetNotifications(){
        this.notificationData=[...this.notificationData].filter(item=>item.status!=='warning' && item.status!=='danger')
    },
    addNotification(action:INotification){
        const isExist=this.notificationData.some(item=>item.username===action.username);
        if(!isExist){
            this.notificationData.push(action)
        }
    },
    removeNotification(username:string|string[]){
        if(typeof username==='object'){
            username.forEach(user=>{
                const isExist=this.notificationData.some(item=>item.username===user);
                if(isExist){
                    const idx=this.notificationData.findIndex(item=>item.username===user)
                    this.notificationData.splice(idx,1)
                }
            })
        }else{
            const isExist=this.notificationData.some(item=>item.username===username);
            if(isExist){
                const idx=this.notificationData.findIndex(item=>item.username===username)
                this.notificationData.splice(idx,1)
            }

        }

    },
    async fetchNotification(){
        try {
            const response=await fetch('http://166.1.131.76:3939/notify');
            const news:{title:string,content:string,link:string}[]=await response.json();
            const result:INotification[]=news.map(item=>{
                return {
                    title:item.title,
                    status:'news',
                    msg:item.content,
                    link:item.link.startsWith('http') ? item.link : 'https://'+item.link
                }
            });
            result.forEach(item=>{this.addNotification(item)})
        }catch (err) {
            console.log(err)
        }
    }
})

