<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.table') }}
              <strong>{{ $t('cruds.project.title') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <router-link
              class="btn btn-primary"
              v-if="$can(xprops.permission_prefix + 'create')"
              :to="{ name: xprops.route + '.create' }"
            >
              <i class="material-icons">
                add
              </i>
              {{ $t('global.add') }}
            </router-link>
            <button
              type="button"
              class="btn btn-default"
              @click="fetchIndexData"
              :disabled="loading"
              :class="{ disabled: loading }"
            >
              <i class="material-icons" :class="{ 'fa-spin': loading }">
                refresh
              </i>
              {{ $t('global.refresh') }}
            </button>
              <form action="">
              <div class="row py-4">

                  <div class="col-6">
                          <div
                              class="form-group bmd-form-group"
                              :class="{
                          'has-items': cities.length !== 0,
                          'is-focused': activeField === 'municipality'
                        }"
                          >
                          <label class="bmd-label-floating">{{
                                  $t('cruds.project.fields.municipality')
                              }}</label>
                          <v-select
                              name="municipality"
                              label="name"
                              :reduce="city => city.id"
                              :key="'municipality-field'"
                              :value="query.municipality"
                              :options="cities"
                              :closeOnSelect="false"
                              @search.focus="focusField('municipality')"
                              @search.blur="clearFocus"
                              multiple
                              v-model="query.municipality"
                          />
                      </div>
                  </div>

                  <div class="col-6">
                      <div
                          class="form-group bmd-form-group"
                          :class="{
                          'has-items': cities.length !== 0,
                          'is-focused': activeField === 'sector'
                        }"
                      >
                          <label class="bmd-label-floating">{{
                                  $t('cruds.project.fields.sector')
                              }}</label>
                          <v-select
                              name="sector"
                              label="name"
                              :reduce="sector => sector.id"
                              :key="'sector-field'"
                              :value="query.sector"
                              :options="sectors"
                              :closeOnSelect="false"
                              @search.focus="focusField('sector')"
                              @search.blur="clearFocus"
                              multiple
                              v-model="query.sector"
                          />
                      </div>
                  </div>

                  <div class="col-6">
                      <div
                          class="form-group bmd-form-group"
                          :class="{
                          'has-items': cities.length !== 0,
                          'is-focused': activeField === 'programme'
                        }"
                      >
                          <label class="bmd-label-floating">{{
                                  $t('cruds.project.fields.programme')
                              }}</label>
                          <v-select
                              name="programme"
                              label="name"
                              :reduce="programme => programme.id"
                              :key="'programme-field'"
                              :value="query.programme"
                              :options="programmes"
                              :closeOnSelect="false"
                              @search.focus="focusField('porgramme')"
                              @search.blur="clearFocus"
                              multiple
                              v-model="query.programme"
                          />
                      </div>
                  </div>

                  <div class="col-6">
                      <div
                          class="form-group bmd-form-group is-filled"
                          :class="{
                      'has-items': query.start_date,
                      'is-focused': activeField == 'start_date'
                    }"
                      >
                          <label class="bmd-label-floating">{{
                                  $t('cruds.project.fields.start_date')
                              }}</label>
                          <datetime-picker
                              class="form-control"
                              type="text"
                              picker="date"
                              :value="query.startDate"
                              v-model="query.startDate"
                              @input="updateStartDate"
                              @focus="focusField('start_date')"
                              @blur="clearFocus"
                          >
                          </datetime-picker>
                      </div>
                  </div>
                  <div class="col-6">
                      <div
                          class="form-group bmd-form-group is-filled"
                          :class="{
                      'has-items': query.decision_number,
                    }"
                      >
                          <label class="bmd-label-floating">Decision number</label>
                          <input
                              class="form-control"
                              type="text"
                              v-model="query.decision_number"
                              @input="updateDecisionNumber"
                              @focus="focusField('decision_number')"
                              @blur="clearFocus"
                          >
                      </div>
                  </div>

                  <div class="col-6">
                      <div
                          class="form-group bmd-form-group is-filled"
                          :class="{
                      'has-items': query.end_date,
                    }"
                      >
                          <label class="bmd-label-floating">{{
                                  $t('cruds.project.fields.end_date')
                              }}</label>
                          <datetime-picker
                              class="form-control"
                              type="text"
                              picker="date"
                              :value="query.endDate"
                              v-model="query.endDate"
                              @input="updateEndDate"
                              @focus="focusField('end_date')"
                              @blur="clearFocus"
                          >
                          </datetime-picker>
                      </div>
                  </div>


                  <div class="col-6">
                      <div
                          class="form-group bmd-form-group is-filled"
                          :class="{
                          // 'has-items': commitmentYears.length !== 0,
                          'is-focused': activeField === 'commitment_year'
                        }"
                      >
                          <label class="bmd-label-floating">{{
                                  $t('cruds.project.fields.commitment_year')
                              }}</label>
                          <v-select
                              name="commitmentYear"
                              label="name"
                              :key="'commitment-year-field'"
                              :value="query.commitmentYear"
                              :options="commitmentYears"
                              :closeOnSelect="true"
                              @search.focus="focusField('commitment_year')"
                              @search.blur="clearFocus"
                              v-model="query.commitmentYear"
                          />
                      </div>
                  </div>

<!--                  <div class="col-6">-->
<!--                      <div-->
<!--                          class="form-group bmd-form-group"-->
<!--                          :class="{-->
<!--                          'has-items': cities.length !== 0,-->
<!--                          'is-focused': activeField === 'country'-->
<!--                        }"-->
<!--                      >-->
<!--                          <label class="bmd-label-floating">{{-->
<!--                                  $t('cruds.project.fields.country')-->
<!--                              }}</label>-->
<!--                          <v-select-->
<!--                              name="country"-->
<!--                              label="name"-->
<!--                              :reduce="city => city.id"-->
<!--                              :key="'country-field'"-->
<!--                              :value="query.country"-->
<!--                              :options="countries"-->
<!--                              :closeOnSelect="false"-->
<!--                              @search.focus="focusField('country')"-->
<!--                              @search.blur="clearFocus"-->
<!--                              multiple-->
<!--                              v-model="query.country"-->
<!--                          />-->
<!--                      </div>-->
<!--                  </div>-->


                  <div class="col-12 mt-3">
                      <h4>Total value: <b>{{ totalValue }}</b></h4>
                      <h4>Total EU Contribution: <b>{{ totalEUValue }}</b></h4>
                      <h4>Total projects: <b>{{ total }}</b></h4>
                  </div>

              </div>
              </form>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-overlay" v-show="loading">
                  <div class="table-overlay-container">
                    <material-spinner></material-spinner>
                    <span>Loading...</span>
                  </div>
                </div>
                <datatable
                  :columns="columns"
                  :data="data"
                  :total="total"
                  :query="query"
                  :xprops="xprops"
                  :HeaderSettings="false"
                  :pageSizeOptions="[10, 25, 50, 100]"
                >
                  <global-search :query="query" class="pull-left" />
                  <header-settings :columns="columns" class="pull-right" />
                </datatable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableActions from '@components/Datatables/DatatableActions'
import DatatableLink from '@components/Datatables/DatatableLink'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'
import DatatableSingle from '@components/Datatables/DatatableSingle'
import DatatableList from '@components/Datatables/DatatableList'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'

export default {
  components: {
    GlobalSearch,
    HeaderSettings
  },
  data() {
    return {
        columns: [
            {
                title: 'cruds.project.fields.id',
                field: 'id',
                thComp: TranslatedHeader,
                sortable: true,
                colStyle: 'width: 100px;'
            },
            {
                title: 'cruds.project.fields.financial_perspective',
                field: 'financial_perspective.perspective',
                thComp: TranslatedHeader,
                tdComp: DatatableSingle,
                sortable: false
            },
            {
                title: 'cruds.project.fields.programme',
                field: 'programme.name',
                thComp: TranslatedHeader,
                tdComp: DatatableSingle,
                sortable: false
            },
            {
                title: 'cruds.project.fields.sector',
                field: 'sector.name',
                thComp: TranslatedHeader,
                tdComp: DatatableList
            },
            {
                title: 'cruds.project.fields.contract_title',
                field: 'contract_title',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.contract_number',
                field: 'contract_number',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.contracting_party',
                field: 'contracting_party',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.contract_type',
                field: 'contract_type.name',
                thComp: TranslatedHeader,
                tdComp: DatatableList
            },
            {
                title: 'cruds.project.fields.end_beneficiary',
                field: 'end_beneficiary',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.contracted_eu_contribution',
                field: 'contracted_eu_contribution',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.co_funding',
                field: 'co_funding',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.loan',
                field: 'loan',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.contract_value_montenegro',
                field: 'contract_value_montenegro',
                thComp: TranslatedHeader,
                sortable: false
            },
            {
                title: 'cruds.project.fields.total_euro_value',
                field: 'total_euro_value',
                thComp: TranslatedHeader,
                sortable: true
            },
            {
                title: 'cruds.project.fields.municipality',
                field: 'municipality.name',
                thComp: TranslatedHeader,
                tdComp: DatatableList
            },
            {
                title: 'cruds.project.fields.country',
                field: 'country.name',
                thComp: TranslatedHeader,
                tdComp: DatatableList
            },
            {
                title: 'cruds.project.fields.keywords',
                field: 'keywords',
                thComp: TranslatedHeader,
                sortable: false
            },,
            {
                title: 'cruds.project.fields.decision_number',
                field: 'decision_number',
                thComp: TranslatedHeader,
                sortable: false
            },
            // {
            //     title: 'cruds.project.fields.links_to_project_page',
            //     field: 'links_to_project_page',
            //     thComp: TranslatedHeader,
            //     tdComp: DatatableLink,
            //     sortable: false
            // },
            {
                title: 'cruds.project.fields.show',
                field: 'show',
                thComp: TranslatedHeader,
                tdComp: DatatableCheckbox,
                sortable: false
            },
            {
                title: 'global.actions',
                thComp: TranslatedHeader,
                tdComp: DatatableActions,
                visible: true,
                thClass: 'text-right',
                tdClass: 'text-right td-actions',
                colStyle: 'width: 150px;'
            }
        ],
      query: {
          sort: 'id',
          order: 'desc',
          limit: 100,
          s: '',
          municipality: []
      },
      xprops: {
        module: 'ProjectsIndex',
        route: 'projects',
        permission_prefix: 'project_'
      },
        activeField: ''
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('ProjectsIndex', ['data', 'total', 'loading', 'totalValue', 'totalEUValue', 'endYears', 'commitmentYears']),
    ...mapGetters('AllCities', ['cities']),
    ...mapGetters('AllSectors', ['sectors']),
    ...mapGetters('AllProgrammes', ['programmes']),
    ...mapGetters('AllCountries', ['countries'])
  },
  watch: {
    query: {
      handler(query) {
        this.setQuery(query)
        this.fetchIndexData()
          this.fetchAllCities()
          this.fetchAllSectors()
          this.fetchAllProgrammes()
          this.fetchAllCountries()
      },
      deep: true
    }
  },
  methods: {
      updateStartDate(e) {
          this.query.startDate = e.target.value
      },
      updateDecisionNumber(e) {
          this.query.decision_number = e.target.value
      },
      updateEndDate(e) {
          this.query.endDate = e.target.value
      },
      focusField(name) {
          // alert(name)
          this.activeField = name
      },
      clearFocus() {
          this.activeField = ''
      },
    ...mapActions('ProjectsIndex', ['fetchIndexData', 'setQuery', 'resetState']),
    ...mapActions('AllCities', ['fetchAllCities']),
    ...mapActions('AllSectors', ['fetchAllSectors']),
    ...mapActions('AllProgrammes', ['fetchAllProgrammes']),
    ...mapActions('AllCountries', ['fetchAllCountries']),

  }
}
</script>
