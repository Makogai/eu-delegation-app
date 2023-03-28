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
                <CountryMap @state-clicked="handleStateClicked" @back-clicked="resetQuery"></CountryMap>
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

            query: { sort: 'id', order: 'desc', limit: 100, s: '', isClient: true },
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

        // On emit event from child component
        Bus.$on('back-clicked', () => {
            alert('back clicked')
            this.resetQuery()
        })
    },
    watch: {
        query: {
            handler(query) {
                this.setQuery(query)
                this.fetchIndexData()
            },
            deep: true
        }
    },
    methods: {
        handleStateClicked(id, name) {
            console.log(id, name)
            // Handle the state-clicked event here
            // Filter the data by municipality
            this.query = { ...this.query, municipality: id }
        },
        resetQuery() {
            this.query = { ...this.query, municipality: null }
        },
        ...mapActions('ProjectsIndex', ['fetchIndexData', 'resetState', 'setQuery']),
    }
}
</script>
