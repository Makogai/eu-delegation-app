import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@apppages/Layout/MainLayout.vue'),
    redirect: 'app',
    children: [
      {
        path: 'app',
        name: 'app',
        component: () => import('@apppages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
        {
            path: 'test',
            name: 'test',
            component: () => import('@apppages/Dashboard2.vue'),
            meta: { title: 'global.dashboard' }
        },


    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes
})
