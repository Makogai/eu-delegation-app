<template>
    <div class="container-fluid">
        <form @submit.prevent="submitForm">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary card-header-icon">
                            <div class="card-icon">
                                <i class="material-icons">add</i>
                            </div>
                            <h4 class="card-title">
                                {{ $t('global.create') }}
                                <strong>{{ $t('cruds.project.title_singular') }}</strong>
                            </h4>
                        </div>
                        <div class="card-body">
                            <back-button></back-button>
                        </div>
                        <div class="card-body">
                            <bootstrap-alert />
                            <div class="row">
                                <div class="col-md-12">
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.financial_perspective_id !== null,
                      'is-focused': activeField == 'financial_perspective'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.financial_perspective')
                                            }}</label>
                                        <v-select
                                            name="financial_perspective"
                                            label="perspective"
                                            :key="'financial_perspective-field'"
                                            :value="entry.financial_perspective_id"
                                            :options="lists.financial_perspective"
                                            :reduce="entry => entry.id"
                                            @input="updateFinancialPerspective"
                                            @search.focus="focusField('financial_perspective')"
                                            @search.blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.programme_id !== null,
                      'is-focused': activeField == 'programme'
                    }"
                                    >
                                        <label class="bmd-label-floating required">{{
                                                $t('cruds.project.fields.programme')
                                            }}</label>
                                        <v-select
                                            name="programme"
                                            label="name"
                                            :key="'programme-field'"
                                            :value="entry.programme_id"
                                            :options="lists.programme"
                                            :reduce="entry => entry.id"
                                            @input="updateProgramme"
                                            @search.focus="focusField('programme')"
                                            @search.blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.sector.length !== 0,
                      'is-focused': activeField == 'sector'
                    }"
                                    >
                                        <label class="bmd-label-floating required">{{
                                                $t('cruds.project.fields.sector')
                                            }}</label>
                                        <v-select
                                            name="sector"
                                            label="name"
                                            :key="'sector-field'"
                                            :value="entry.sector"
                                            :options="lists.sector"
                                            :closeOnSelect="false"
                                            multiple
                                            @input="updateSector"
                                            @search.focus="focusField('sector')"
                                            @search.blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.contract_title,
                      'is-focused': activeField == 'contract_title'
                    }"
                                    >
                                        <label class="bmd-label-floating required">{{
                                                $t('cruds.project.fields.contract_title')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="entry.contract_title"
                                            @input="updateContractTitle"
                                            @focus="focusField('contract_title')"
                                            @blur="clearFocus"
                                            required
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.commitment_year,
                      'is-focused': activeField == 'commitment_year'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.commitment_year')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            step="1"
                                            :value="entry.commitment_year"
                                            @input="updateCommitmentYear"
                                            @focus="focusField('commitment_year')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.contract_year,
                      'is-focused': activeField == 'contract_year'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.contract_year')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            step="1"
                                            :value="entry.contract_year"
                                            @input="updateContractYear"
                                            @focus="focusField('contract_year')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.start_date,
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
                                            :value="entry.start_date"
                                            @input="updateStartDate"
                                            @focus="focusField('start_date')"
                                            @blur="clearFocus"
                                        >
                                        </datetime-picker>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ $t('cruds.project.fields.end_date') }}</label>
                                        <div
                                            class="form-group bmd-form-group"
                                            :class="{
                        'has-items': entry.end_date,
                        'is-focused': activeField == 'end_date'
                      }"
                                        >
                                            <label class="bmd-label-floating">{{
                                                    $t('cruds.project.fields.end_date_helper')
                                                }}</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                :value="entry.end_date"
                                                @input="updateEndDate"
                                                @focus="focusField('end_date')"
                                                @blur="clearFocus"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.contract_number,
                      'is-focused': activeField == 'contract_number'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.contract_number')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="entry.contract_number"
                                            @input="updateContractNumber"
                                            @focus="focusField('contract_number')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.contracting_party,
                      'is-focused': activeField == 'contracting_party'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.contracting_party')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="entry.contracting_party"
                                            @input="updateContractingParty"
                                            @focus="focusField('contracting_party')"
                                            @blur="clearFocus"
                                        />
                                    </div>

                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.end_beneficiary,
                      'is-focused': activeField == 'end_beneficiary'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.end_beneficiary')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="entry.end_beneficiary"
                                            @input="updateEndBeneficiary"
                                            @focus="focusField('end_beneficiary')"
                                            @blur="clearFocus"
                                        />
                                    </div>

                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.contract_type.length !== 0,
                      'is-focused': activeField == 'contract_type'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.contract_type')
                                            }}</label>
                                        <v-select
                                            name="contract_type"
                                            label="name"
                                            :key="'contract_type-field'"
                                            :value="entry.contract_type"
                                            :options="lists.contract_type"
                                            :closeOnSelect="false"
                                            multiple
                                            @input="updateContractType"
                                            @search.focus="focusField('contract_type')"
                                            @search.blur="clearFocus"
                                        />
                                    </div>

                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.contracted_eu_contribution,
                      'is-focused': activeField == 'contracted_eu_contribution'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.contracted_eu_contribution')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            step="0.01"
                                            :value="entry.contracted_eu_contribution"
                                            @input="updateContractedEuContribution"
                                            @focus="focusField('contracted_eu_contribution')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.co_funding,
                      'is-focused': activeField == 'co_funding'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.co_funding')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            step="0.01"
                                            :value="entry.co_funding"
                                            @input="updateCoFunding"
                                            @focus="focusField('co_funding')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.contract_value_montenegro,
                      'is-focused': activeField == 'contract_value_montenegro'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.contract_value_montenegro')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            step="0.01"
                                            :value="entry.contract_value_montenegro"
                                            @input="updateContractValueMontenegro"
                                            @focus="focusField('contract_value_montenegro')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.loan,
                      'is-focused': activeField == 'loan'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.loan')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            step="0.01"
                                            :value="entry.loan"
                                            @input="updateLoan"
                                            @focus="focusField('loan')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.total_euro_value,
                      'is-focused': activeField == 'total_euro_value'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.total_euro_value')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            step="0.01"
                                            :value="entry.total_euro_value"
                                            @input="updateTotalEuroValue"
                                            @focus="focusField('total_euro_value')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.municipality.length !== 0,
                      'is-focused': activeField == 'municipality'
                    }"
                                    >
                                        <label class="bmd-label-floating required">{{
                                                $t('cruds.project.fields.municipality')
                                            }}</label>
                                        <v-select
                                            name="municipality"
                                            label="name"
                                            :key="'municipality-field'"
                                            :value="entry.municipality"
                                            :options="lists.municipality"
                                            :closeOnSelect="false"
                                            multiple
                                            @input="updateMunicipality"
                                            @search.focus="focusField('municipality')"
                                            @search.blur="clearFocus"
                                        />
                                    </div>

                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.country.length !== 0,
                      'is-focused': activeField == 'municipality'
                    }"
                                    >
                                        <label class="bmd-label-floating required">{{
                                                $t('cruds.project.fields.country')
                                            }}</label>
                                        <v-select
                                            name="country"
                                            label="name"
                                            :key="'country-field'"
                                            :value="entry.municipality"
                                            :options="lists.country"
                                            :closeOnSelect="false"
                                            multiple
                                            @input="updateCountry"
                                            @search.focus="focusField('country')"
                                            @search.blur="clearFocus"
                                        />
                                    </div>

                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.short_description,
                      'is-focused': activeField == 'short_description'
                    }"
                                    >
                                        <label class="bmd-label-floating required">{{
                                                $t('cruds.project.fields.short_description')
                                            }}</label>
                                        <textarea
                                            class="form-control"
                                            rows="5"
                                            :value="entry.short_description"
                                            @input="updateShortDescription"
                                            @focus="focusField('short_description')"
                                            @blur="clearFocus"
                                            required
                                        ></textarea>
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.keywords,
                      'is-focused': activeField == 'keywords'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.keywords')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="entry.keywords"
                                            @input="updateKeywords"
                                            @focus="focusField('keywords')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                      'has-items': entry.links_to_project_page,
                      'is-focused': activeField == 'links_to_project_page'
                    }"
                                    >
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.links_to_project_page')
                                            }}</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="entry.links_to_project_page"
                                            @input="updateLinksToProjectPage"
                                            @focus="focusField('links_to_project_page')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div class="form-group bmd-form-group form-check has-items">
                                        <label class="bmd-label-floating">{{
                                                $t('cruds.project.fields.show_helper')
                                            }}</label>
                                        <label class="form-check-label"
                                        ><input
                                            class="form-check-input"
                                            type="checkbox"
                                            :value="entry.show"
                                            :checked="entry.show"
                                            @change="updateShow"
                                        /><span class="form-check-sign"
                                        ><span class="check"></span></span
                                        >{{ $t('cruds.project.fields.show') }}</label
                                        >
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
import {mapGetters, mapActions} from 'vuex'

export default {
    data() {
        return {
            status: '',
            activeField: ''
        }
    },
    computed: {
        ...mapGetters('ProjectsSingle', ['entry', 'loading', 'lists'])
    },
    mounted() {
        this.fetchCreateData()
    },
    beforeDestroy() {
        this.resetState()
    },
    methods: {
        ...mapActions('ProjectsSingle', [
            'storeData',
            'resetState',
            'setAssistanceFramework',
            'setProgramme',
            'setSector',
            'setContractTitle',
            'setContractType',
            'setCommitmentYear',
            'setContractYear',
            'setStartDate',
            'setEndDate',
            'setContractNumber',
            'setContractingParty',
            'setContractedEuContribution',
            'setCoFundingOrLoan',
            'setTotalEuroValue',
            'setCoFundingParty',
            'setMunicipality',
            'setShortDescription',
            'setEndBeneficiary',
            'setKeywords',
            'setLinksToProjectPage',
            'setShow',
            'setFinancialPerspective',
            'fetchCreateData'
        ]),
        updateAssistanceFramework(e) {
            this.setAssistanceFramework(e.target.value)
        },
        updateProgramme(value) {
            this.setProgramme(value)
        },
        updateSector(value) {
            if(value.length > 3) {
                console.log(' you can only select two', e)
                value.pop()
            }
            this.setSector(value)
        },
        updateContractTitle(e) {
            this.setContractTitle(e.target.value)
        },
        updateContractType(value) {
            this.setContractType(value)
        },
        updateCommitmentYear(e) {
            this.setCommitmentYear(e.target.value)
        },
        updateContractYear(e) {
            this.setContractYear(e.target.value)
        },
        updateStartDate(e) {
            this.setStartDate(e.target.value)
        },
        updateEndDate(e) {
            this.setEndDate(e.target.value)
        },
        updateContractNumber(e) {
            this.setContractNumber(e.target.value)
        },
        updateContractingParty(e) {
            this.setContractingParty(e.target.value)
        },
        updateContractedEuContribution(e) {
            this.setContractedEuContribution(e.target.value)
        },
        updateContractValueMontenegro(e) {
            this.setContractValueMontenegro(e.target.value)
        },
        updateCoFundingOrLoan(e) {
            this.setCoFundingOrLoan(e.target.value)
        },
        updateTotalEuroValue(e) {
            this.setTotalEuroValue(e.target.value)
        },
        updateCoFunding(e){
            this.setCoFunding(e.target.value)
        },
        updateLoan(e){
            this.setLoan(e.target.value)
        },
        updateCoFundingParty(e) {
            this.setCoFundingParty(e.target.value)
        },
        updateMunicipality(value) {
            this.setMunicipality(value)
        },
        updateCountry(value) {
            this.setCountry(value)
        },
        updateShortDescription(e) {
            this.setShortDescription(e.target.value)
        },
        updateEndBeneficiary(e) {
            this.setEndBeneficiary(e.target.value)
        },
        updateKeywords(e) {
            this.setKeywords(e.target.value)
        },
        updateLinksToProjectPage(e) {
            this.setLinksToProjectPage(e.target.value)
        },
        updateShow(e) {
            this.setShow(e.target.checked)
        },
        updateFinancialPerspective(value) {
            this.setFinancialPerspective(value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({name: 'projects.index'})
                    this.$eventHub.$emit('create-success')
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
