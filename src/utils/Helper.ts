import {ISidebar} from "./Types";
import { useNotification } from "@kyvg/vue3-notification";


/////////// helper variables
export const date=new Date();
export const currentYear=Number(date.getFullYear());
export const currentMonth=Number(date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1);
export const currentDate=Number(date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
export const usernameRegex=/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g
export const passwordRegex=/^.{3,20}$/g
export const yearRegex=/^(\d{0,4})/g
export const monthRegex=/(?<=\-)(\d{0,2})(?=\-)/g
export const dayRegex=/(?<=\-)(\d{0,2})$/g

/////////////// helper data
export const sidebarItemData:ISidebar[]=[
    {
        title:'Dashboard',
        icon:'fa-solid fa-house',
        link:{name:'DASHBOARD'},
        hasSub:false,
    },{
        title:'Users',
        icon:'fa-solid fa-user-group',
        link:{name:'USERS'},
        hasSub:true,
        sub:[
            {
              title:'list',
              link:{name:'USERS'}
            },
            {
                title:'Create user',
                link:{name:'CREATE_USER'}
            },
            {
                title:'Generate user',
                link:{name:'GENERATE_USER'}
            },
        ]
    },{
        title:'Online users',
        icon:'fa-solid fa-tower-broadcast',
        link:{name:'ONLINE'},
        hasSub:false,

    },{
        title:'Servers',
        icon:'fa-solid fa-server',
        link:{name:'SERVERS'},
        hasSub:false,
    }
]
export const settingDropdownOption=[
    {
        icon:'fa-solid fa-trash',
        title:'Delete user',
        theme:'text-red-500'
    },{
        icon:'fa-solid fa-key',
        title:'Change password',
        theme:'text-blue-500'
    },{
        icon:'fa-solid fa-right-left',
        title:'Renew user',
        theme:'text-cyan-500'
    },{
        icon:'fa-solid fa-users-line',
        title:'Change Multi',
        theme:'text-green-500'
    },{
        icon:'fa-solid fa-lock',
        title:'Lock user',
        theme:'text-red-500'
    },{
        icon:'fa-solid fa-lock-open',
        title:'Unlock user',
        theme:'text-green-500'
    },
];

export const settingTabItems=[
    {title:'Create admin user',icon:'fa-solid fa-user-plus',query:'create-admin-user',status:true},
    {title:'Change password',icon:'fa-solid fa-key',query:'change-password',status:true},
    {title:'Add multi server',icon:'fa-solid fa-server',query:'add-multi-server',status:true},
    {title:'Change ssh port',icon: 'fa-brands fa-megaport',query:'ssh-port',status:false},
    {title:'User limitation',icon: 'fa-solid fa-skull-crossbones',query:'user-limitation',status:false},
    {title:'Telegram robot',icon: 'fa-brands fa-telegram',query:'telegram-robot',status:false},
    {title:'Backup & restore',icon: 'fa-solid fa-trash-arrow-up',query:'backup-and-restore',status:false},
    {title:'API',icon: 'fa-solid fa-code-pull-request',query:'API',status:false},
    {title:'IP block',query:'ip-block',icon: 'fa-solid fa-ban',status:false},
]


//////////////// helper functions
export const bandWidthOption=(download:number, upload:number,unit:string)=>{
    return {
        series: [download, upload],
        chartOptions: {
            labels:['download','upload'],
            chart: {
                width: 350,
                type: 'donut',
                fontFamily:'Montserrat,sans-serif'
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: 'bottom',
                offsetY: -20,
                height: 70,
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true,
                                formatter: function (w:any) {
                                    return w.globals.seriesTotals.reduce((a: number, b: number) => {
                                        return a+b;
                                    }, 0).toFixed(2) + ` ${unit}`
                                }
                            },

                        }
                    }
                }
            },
            tooltip: {
                y: {
                    formatter: function (val:string) {
                        return val + ` ${unit}`
                    }
                }
            }
        }
    }
}
export const serverStatusChartOption=(prc:number,label:string)=>{
    return {
        chartOptions: {
            chart: {
                height: 260,
                type: "radialBar",
                fontFamily:'Montserrat,sans-serif'
            },
            colors: ["#20E647"],
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    track: {
                        background: '#333',
                        startAngle: -135,
                        endAngle: 135,
                    },
                    hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                    },

                    dataLabels: {
                        name: {
                            offsetY: -10,
                            color: "#fff",
                            fontSize: "13px"
                        },
                        value: {
                            color: "#fff",
                            fontSize: "30px",
                            show: true
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "vertical",
                    gradientToColors: ["#87D4F9"],
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: [`${label} Usage`]
        },
        series: [prc],
    }
}
export const declareNumberToArray = (num:number) => {
    const res=[]
    for (let n=1;n<num+1;n++){
        res.push(n)
    }
    return res
}
export const bodyEncode = (username,password) => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "");
    urlencoded.append("scope", "");
    urlencoded.append("client_id", "");
    urlencoded.append("client_secret", "");
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    return urlencoded
}
export const stringToPassword=(str:string)=>{
    return str.split('').map(()=>'•').join('')
}
export const copyText = async (txt:string) => {
    const { notify }  = useNotification()
    if(navigator.clipboard){
       await navigator.clipboard.writeText(txt);
        notify({
            type:'success',
            title:'Copied',
            duration:1
        })
    }else{
        notify({
            type:'error',
            title:'copy text is not allowed over http secure origin!',
            duration:2
        })
    }
}
export const querySerialize = (obj:object) => {
    return Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&');
}
export const downloadTextFile = (txt:string) => {
    return "data:text/json;charset=utf-8," + encodeURI(txt);
}
export const downloadJsonFile = (json:string) => {
    return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
}

export const handleIconClick = (node) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

export const getEXdateDetail=(exdate:string)=>{
    const userExYear=Number(exdate?.match(yearRegex)[0]) ?? null
    const userExMonth=Number(exdate?.match(monthRegex)[0]) ?? null
    const userExDay=Number(exdate?.match(dayRegex)[0]) ?? null
    /// 10  2
    if(userExMonth>9 && userExDay<10){
        return `${userExYear}-${userExMonth}-0${userExDay}`
    }

    // 9 13
    if(userExMonth<10 && userExDay>10){
        return `${userExYear}-0${userExMonth}-${userExDay}`
    }

    // 3 9
    if(userExMonth<10 && userExDay<10){
        return `${userExYear}-0${userExMonth}-0${userExDay}`

    }
}

export const textColor=(key:string)=>{
    return  {'text-red-600':key==='red','text-sky-600':key==='blue','text-indigo-600':key==='indigo','text-green-600':key==='green','text-yellow-600':key==='yellow'}
}

export const bgColor=(key:string)=>{
    return {'!bg-red-200':key==='red','!bg-sky-200':key==='blue','!bg-indigo-200':key==='indigo','!bg-green-200':key==='green','!bg-yellow-200':key==='yellow'}
}

export const btnColor=(key:string)=>{
    return {
        'btn-primary-full':key==='indigo',
        'btn-sky-full':key==='blue',
        'btn-red-full':key==='red'
    }
}