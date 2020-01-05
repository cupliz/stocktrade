import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import AWS from '@/components/aws'
import AWSDetail from '@/components/aws/detail'
import Launch from '@/components/aws/launch.vue'
import AZURE from '@/components/azure/Azure.vue'
import OCI from '@/components/oci/Oci.vue'
import Profile from '@/components/user/Profile.vue'
import Signin from '@/components/user/Signin.vue'
import Signup from '@/components/user/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
    meta: { auth:true, title: 'Dashboard' }
  },
  {
    path: '/aws',
    name: 'aws',
    component: AWS,
    meta: { auth:true, title: 'AWS' }
  },
  {
    path: '/aws/:id',
    name: 'aws',
    component: AWSDetail
  },
  {
    path: '/oci',
    name: 'oci',
    component: OCI,
    meta: { auth:true, title: 'Oracle' }
  },
  {
    path: '/azure',
    name: 'azure',
    component: AZURE,
    meta: { auth:true, title: 'Azure' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/launch',
    name: 'launch',
    component: Launch
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
