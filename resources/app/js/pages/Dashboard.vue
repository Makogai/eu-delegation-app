<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-success card-header-icon">
              <div class="card-icon">
                <i class="material-icons">language</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.dashboard') }}
              </h4>
            </div>
            <div class="card-body">
              {{ $t('global.youAreLoggedIn') }}
            </div>

              <h1>Total projects: {{ total }}</h1>

              <div v-for="project in data">
                  project: {{ project.contract_title }}
              </div>

              <RouterLink to="/test">Go to test</RouterLink>
          </div>
        </div>
          <div class="col-12">
                <CountryMap></CountryMap>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import CountryMap from './CountryMap'
export default {
    components: {
        CountryMap
    },
    data() {
        return {

            query: { sort: 'id', order: 'desc', limit: 100, s: '' },
            xprops: {
                module: 'ProjectsIndex',
                route: 'projects',
                permission_prefix: 'project_'
            }
        }
    },
    beforeDestroy() {
        this.resetState()
    },
    computed: {
        ...mapGetters('ProjectsIndex', ['data', 'total', 'loading'])
    },
    mounted() {
        this.fetchIndexData()
    },
    watch: {
        query: {
            handler(query) {
                // this.setQuery(query)
                this.fetchIndexData()
            },
            deep: true
        }
    },
    methods: {
        ...mapActions('ProjectsIndex', ['fetchIndexData', 'resetState'])
    }
}
</script>
