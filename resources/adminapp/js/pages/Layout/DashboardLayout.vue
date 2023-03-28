<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'global.dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
          title: 'cruds.userManagement.title',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'cruds.permission.title',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'cruds.role.title',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            },
            {
              title: 'cruds.user.title',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            }
          ]
        },
        {
          title: 'cruds.project.title',
          icon: 'table_view',
          path: { name: 'projects.index' },
          gate: 'project_access'
        },
        {
          title: 'cruds.projectDropdown.title',
          icon: 'table_view',
          path: { name: 'project_dropdown' },
          gate: 'project_dropdown_access',
          children: [
            {
              title: 'cruds.country.title',
              icon: 'table_view',
              path: { name: 'countries.index' },
              gate: 'country_access'
            },
            {
              title: 'cruds.city.title',
              icon: 'table_view',
              path: { name: 'cities.index' },
              gate: 'city_access'
            },
            {
              title: 'cruds.programme.title',
              icon: 'table_view',
              path: { name: 'programmes.index' },
              gate: 'programme_access'
            },
            {
              title: 'cruds.financialPerspective.title',
              icon: 'table_view',
              path: { name: 'financial_perspectives.index' },
              gate: 'financial_perspective_access'
            },
            {
              title: 'cruds.sector.title',
              icon: 'table_view',
              path: { name: 'sectors.index' },
              gate: 'sector_access'
            },
            {
              title: 'cruds.funding.title',
              icon: 'table_view',
              path: { name: 'fundings.index' },
              gate: 'funding_access'
            },
            {
              title: 'cruds.fundingType.title',
              icon: 'table_view',
              path: { name: 'funding_types.index' },
              gate: 'funding_type_access'
            }
          ]
        }
      ]
    }
  }
}
</script>
