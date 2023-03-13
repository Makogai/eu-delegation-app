import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'projects',
        name: 'projects.index',
        component: () => import('@cruds/Projects/Index.vue'),
        meta: { title: 'cruds.project.title' }
      },
      {
        path: 'projects/create',
        name: 'projects.create',
        component: () => import('@cruds/Projects/Create.vue'),
        meta: { title: 'cruds.project.title' }
      },
      {
        path: 'projects/:id',
        name: 'projects.show',
        component: () => import('@cruds/Projects/Show.vue'),
        meta: { title: 'cruds.project.title' }
      },
      {
        path: 'projects/:id/edit',
        name: 'projects.edit',
        component: () => import('@cruds/Projects/Edit.vue'),
        meta: { title: 'cruds.project.title' }
      },
      {
        path: 'project-dropdown',
        name: 'project_dropdown',
        component: View,
        redirect: { name: 'countries.index' },
        children: [
          {
            path: 'countries',
            name: 'countries.index',
            component: () => import('@cruds/Countries/Index.vue'),
            meta: { title: 'cruds.country.title' }
          },
          {
            path: 'countries/:id',
            name: 'countries.show',
            component: () => import('@cruds/Countries/Show.vue'),
            meta: { title: 'cruds.country.title' }
          },
          {
            path: 'cities',
            name: 'cities.index',
            component: () => import('@cruds/Cities/Index.vue'),
            meta: { title: 'cruds.city.title' }
          },
          {
            path: 'cities/create',
            name: 'cities.create',
            component: () => import('@cruds/Cities/Create.vue'),
            meta: { title: 'cruds.city.title' }
          },
          {
            path: 'cities/:id',
            name: 'cities.show',
            component: () => import('@cruds/Cities/Show.vue'),
            meta: { title: 'cruds.city.title' }
          },
          {
            path: 'cities/:id/edit',
            name: 'cities.edit',
            component: () => import('@cruds/Cities/Edit.vue'),
            meta: { title: 'cruds.city.title' }
          },
          {
            path: 'programmes',
            name: 'programmes.index',
            component: () => import('@cruds/Programmes/Index.vue'),
            meta: { title: 'cruds.programme.title' }
          },
          {
            path: 'programmes/create',
            name: 'programmes.create',
            component: () => import('@cruds/Programmes/Create.vue'),
            meta: { title: 'cruds.programme.title' }
          },
          {
            path: 'programmes/:id',
            name: 'programmes.show',
            component: () => import('@cruds/Programmes/Show.vue'),
            meta: { title: 'cruds.programme.title' }
          },
          {
            path: 'programmes/:id/edit',
            name: 'programmes.edit',
            component: () => import('@cruds/Programmes/Edit.vue'),
            meta: { title: 'cruds.programme.title' }
          },
          {
            path: 'financial-perspectives',
            name: 'financial_perspectives.index',
            component: () => import('@cruds/FinancialPerspectives/Index.vue'),
            meta: { title: 'cruds.financialPerspective.title' }
          },
          {
            path: 'financial-perspectives/create',
            name: 'financial_perspectives.create',
            component: () => import('@cruds/FinancialPerspectives/Create.vue'),
            meta: { title: 'cruds.financialPerspective.title' }
          },
          {
            path: 'financial-perspectives/:id',
            name: 'financial_perspectives.show',
            component: () => import('@cruds/FinancialPerspectives/Show.vue'),
            meta: { title: 'cruds.financialPerspective.title' }
          },
          {
            path: 'financial-perspectives/:id/edit',
            name: 'financial_perspectives.edit',
            component: () => import('@cruds/FinancialPerspectives/Edit.vue'),
            meta: { title: 'cruds.financialPerspective.title' }
          },
          {
            path: 'sectors',
            name: 'sectors.index',
            component: () => import('@cruds/Sectors/Index.vue'),
            meta: { title: 'cruds.sector.title' }
          },
          {
            path: 'sectors/create',
            name: 'sectors.create',
            component: () => import('@cruds/Sectors/Create.vue'),
            meta: { title: 'cruds.sector.title' }
          },
          {
            path: 'sectors/:id',
            name: 'sectors.show',
            component: () => import('@cruds/Sectors/Show.vue'),
            meta: { title: 'cruds.sector.title' }
          },
          {
            path: 'sectors/:id/edit',
            name: 'sectors.edit',
            component: () => import('@cruds/Sectors/Edit.vue'),
            meta: { title: 'cruds.sector.title' }
          },
          {
            path: 'fundings',
            name: 'fundings.index',
            component: () => import('@cruds/Fundings/Index.vue'),
            meta: { title: 'cruds.funding.title' }
          },
          {
            path: 'fundings/create',
            name: 'fundings.create',
            component: () => import('@cruds/Fundings/Create.vue'),
            meta: { title: 'cruds.funding.title' }
          },
          {
            path: 'fundings/:id',
            name: 'fundings.show',
            component: () => import('@cruds/Fundings/Show.vue'),
            meta: { title: 'cruds.funding.title' }
          },
          {
            path: 'fundings/:id/edit',
            name: 'fundings.edit',
            component: () => import('@cruds/Fundings/Edit.vue'),
            meta: { title: 'cruds.funding.title' }
          },
          {
            path: 'funding-types',
            name: 'funding_types.index',
            component: () => import('@cruds/FundingTypes/Index.vue'),
            meta: { title: 'cruds.fundingType.title' }
          },
          {
            path: 'funding-types/create',
            name: 'funding_types.create',
            component: () => import('@cruds/FundingTypes/Create.vue'),
            meta: { title: 'cruds.fundingType.title' }
          },
          {
            path: 'funding-types/:id',
            name: 'funding_types.show',
            component: () => import('@cruds/FundingTypes/Show.vue'),
            meta: { title: 'cruds.fundingType.title' }
          },
          {
            path: 'funding-types/:id/edit',
            name: 'funding_types.edit',
            component: () => import('@cruds/FundingTypes/Edit.vue'),
            meta: { title: 'cruds.fundingType.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
