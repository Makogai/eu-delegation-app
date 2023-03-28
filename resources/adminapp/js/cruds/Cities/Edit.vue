<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.edit') }}
                <strong>{{ $t('cruds.city.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.city.fields.name')
                    }}</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.name,
                        'is-focused': activeField == 'name'
                      }"
                    >
                      <label class="bmd-label-floating">{{
                        $t('cruds.city.fields.name_helper')
                      }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="entry.name"
                        @input="updateName"
                        @focus="focusField('name')"
                        @blur="clearFocus"
                        required
                      />
                    </div>
                  </div>
                  <label>{{ $t('cruds.city.fields.country') }}</label>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.country_id !== null,
                      'is-focused': activeField == 'country'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.city.fields.country_helper')
                    }}</label>
                    <v-select
                      name="country"
                      label="name"
                      :key="'country-field'"
                      :value="entry.country_id"
                      :options="lists.country"
                      :reduce="entry => entry.id"
                      @input="updateCountry"
                      @search.focus="focusField('country')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.region,
                      'is-focused': activeField == 'region'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.city.fields.region')
                    }}</label>
                    <v-select
                      name="region"
                      :key="'region-field'"
                      :value="entry.region"
                      :options="lists.region"
                      :reduce="entry => entry.value"
                      @input="updateRegion"
                      @search.focus="focusField('region')"
                      @search.blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('CitiesSingle', ['entry', 'loading', 'lists'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('CitiesSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setName',
      'setCountry',
      'setRegion'
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updateCountry(value) {
      this.setCountry(value)
    },
    updateRegion(value) {
      this.setRegion(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'cities.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
