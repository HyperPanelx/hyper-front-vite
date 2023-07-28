import {createRouter,createWebHashHistory,RouteRecordRaw,createWebHistory} from "vue-router";
import {authStore} from './store/auth'
import {dashboardStore} from "./store/dashboard.ts";
import NProgress from "nprogress";
//// pages
const MainIndex=()=>import(  './pages/index.vue')
const dashboard=()=>import( './pages/dashboard.vue')
const usersIndex=()=>import( './pages/users/index.vue')
const createUser=()=>import( './pages/users/create.vue')
const usersList=()=>import( './pages/users/list.vue')
const onlineUsers=()=>import( './pages/onlineUsers.vue')
const generateUser=()=>import('./pages/users/generate.vue')
const login=()=>import( './pages/login.vue')
const error=()=>import( './pages/error.vue')
const editUser=()=>import('./pages/users/edit.vue')
const servers=()=>import('./pages/server.vue')





const routes:RouteRecordRaw[]=[
    {
        component:MainIndex,
        path:'/',
        redirect:{
            name:'DASHBOARD'
        },
        children:[
            {
                component:dashboard,
                path:'dashboard',
                name:'DASHBOARD',
                meta:{
                    title:'Dashboard | Hyper',
                    status:true,
                    breadCrumb:null
                }
            },
            {
                component:usersIndex,
                path:'users',
                name:'USERS_INDEX',
                redirect:{
                    name:'USERS'
                },
                children:[
                    {
                        component:editUser,
                        path:'edit/:username',
                        name:'EDIT_USER',
                        meta:{
                            title:'Edit User | Hyper',
                            status:true,
                            breadCrumb:[{name:'Home',link:'DASHBOARD'},{name:'Users',link:'USERS'},{name:'Edit User'}]
                        }
                    },
                    {
                        component:createUser,
                        path:'create',
                        name:'CREATE_USER',
                        meta:{
                            title:'Create User | Hyper',
                            status:true,
                            breadCrumb:[{name:'Home',link:'DASHBOARD'},{name:'Users',link:'USERS'},{name:'Create User'}]
                        },
                    },{
                        component:usersList,
                        path:'',
                        name:'USERS',
                        meta: {
                            title:'Users | Hyper',
                            status:true,
                            breadCrumb: [{name:'Home',link:'DASHBOARD'},{name:'Users'}]
                        },
                    },
                    {
                        component:generateUser,
                        path:'generate',
                        name:'GENERATE_USER',
                        meta:{
                            title:'Generate Users | Hyper',
                            status:true,
                            breadCrumb: [{name:'Home',link:'DASHBOARD'},{name:'Users',link:'USERS'},{name:'Generate New Users'}]

                        },
                    },
                ]
            },
            {
                component:onlineUsers,
                name:'ONLINE',
                path:'online',
                meta:{
                    title:'Online Users | Hyper',
                    status:true,
                    breadCrumb:[{name:'Home',link:'DASHBOARD'},{name:'Online Users'}]
                },
            },
            {
                component:servers,
                name:'SERVERS',
                path:'servers',
                meta:{
                    title:'Servers | Hyper',
                    status:true,
                    breadCrumb: [{name:'Home',link:'DASHBOARD'},{name:'Servers'}]
                },
            }
        ]
    },
    {
        component:login,
        name:'LOGIN',
        path:'/login',
        meta:{
            title:'Login | Hyper',
            status:true,
            breadCrumb:null
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: error ,
        meta:{
            title:'Page not found!',
            status:true,
            breadCrumb:null
        },
    },

]
///////////////////////
const isDevelopment=import.meta.env.MODE === 'development'
const historyMode=isDevelopment ? createWebHashHistory() : createWebHistory();
///////////////////////
const router=createRouter({
    routes,
    history:historyMode,
    scrollBehavior() {
        return { top: 0 }
    },
})


router.afterEach((to)=>{
    (document.title as any)=to.meta.title;
    if (!to.hash || !to.query) {
        NProgress.done();
    }

    if(to.name==='CREATE_USER' || to.name==='GENERATE_USER'){
        dashboardStore.showPreloaderFlag=false
        document.body.style.overflowY='auto'
    }
})

//@ts-ignore
router.beforeEach((to,from,next)=>{
    if(to.meta.status){
        if(to.name!=='LOGIN'){
            if(authStore.isLogin){
                next()
            }
        }else{
            next()
        }
    }
    if (!to.hash || !to.query) {
        NProgress.start();
    }

})

export default router