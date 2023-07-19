

export interface Login_Response {
    access_token:string,
    token_type:'bearer'
}

export interface Response {
    error:boolean,
    msg:string|null,
    data:any|null
}
export interface ISidebar {
    title:string
    icon:string
    link:{name:string}
    hasSub:boolean,
    sub?:{
        title:string,
        link:{name:string}
    }[]
}

export interface IUser_Data {
    username:string,
    password:string
    rememberMe:boolean
}



export interface IUsers_Data {
    title:string
    number:number
    theme:string
}

export interface IServer_Status {
    cpu:number
    ram:number
    disk:number
    bandWidth?:{
        download:number
        upload:number,
        downloadSpeed:number,
        speedUnit:string,
        uploadSpeed:number,
    }
}
export type IServer_Usage_Response= [
    {
        "cpu": number,
        "mem": number,
        "hdd": number
    },
    {
        "Upload": string,
        "Download": string,
        "Upload Speed": string,
        "Download Speed": string
    }
]
export interface IUser_Status {
    total_users:number
    total_active_users:number
    total_enable_users:number
    total_disabled_users:number
}

export interface IUser_Item {
    desc: string
    email: string
    exdate: string
    multi: number
    passwd: string
    phone: number
    referral: string
    status: string
    telegram_id: string
    traffic: string
    user: string
    server:string
    ordered_by:string
}

export interface IUsers_Data {
    titles:string[],
    rows:IUser_Item[];

}

export interface IOnline_Users_Data{
    titles:string[],
    rows:{
      user:string,
      uid:number,
      ip:string
    }[]
}
export interface ICreate_User {
    username:string,
    password?:string,
    email?:string,
    phone:string,
    concurrent_user:number,
    expiration_date:string,
    traffic?:string,
    traffic_unit?:string,
    referral?:string,
    telegram_id:string,
    description?:string
}


export interface INotification {
    title:string,
    msg:string,
    username?:string,
    status:'warning' | 'news' | 'danger'
    link?:string|object
}

export interface IServer_List{
    host:string
    port:number
    status:string
}

export interface IResponse<T>{
    success:boolean,
    message:string,
    data:T|any
}

export interface IUseChartRef {
    cpu:{options:any,series:any}
    ram:{options:any,series:any}
    disk:{options:any,series:any}
    bandwidth?:{options:any,series:any}
}
export interface IUseUserStatusRef {
    title:string
    number:number
    theme:string
}