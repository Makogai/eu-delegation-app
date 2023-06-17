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
            path: 'project/:id',
            name: 'project',
            component: () => import('@apppages/SingleProject.vue'),
            meta: { title: 'global.project' }
        },


    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes
})
