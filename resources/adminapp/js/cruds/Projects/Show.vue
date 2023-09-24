<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary card-header-icon">
                        <div class="card-icon">
                            <i class="material-icons">remove_red_eye</i>
                        </div>
                        <h4 class="card-title">
                            {{ $t('global.view') }}
                            <strong>{{ $t('cruds.project.title_singular') }}</strong>
                        </h4>
                    </div>
                    <div class="card-body">
                        <back-button></back-button>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <div class="table">
                                        <tbody>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.id') }}
                                            </td>
                                            <td>
                                                {{ entry.id }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.financial_perspective') }}
                                            </td>
                                            <td>
                                                <datatable-single
                                                    :row="entry"
                                                    field="financial_perspective.perspective"
                                                >
                                                </datatable-single>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.programme') }}
                                            </td>
                                            <td>
                                                <datatable-single :row="entry" field="programme.name">
                                                </datatable-single>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.sector') }}
                                            </td>
                                            <td>
                                                <datatable-list :row="entry" field="sector.name">
                                                </datatable-list>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.contract_title') }}
                                            </td>
                                            <td>
                                                {{ entry.contract_title }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.commitment_year') }}
                                            </td>
                                            <td>
                                                {{ entry.commitment_year }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.contract_year') }}
                                            </td>
                                            <td>
                                                {{ entry.contract_year }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.start_date') }}
                                            </td>
                                            <td>
                                                {{ entry.start_date }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.end_date') }}
                                            </td>
                                            <td>
                                                {{ entry.end_date }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.contract_number') }}
                                            </td>
                                            <td>
                                                {{ entry.contract_number }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.contracting_party') }}
                                            </td>
                                            <td>
                                                {{ entry.contracting_party }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.contract_type') }}
                                            </td>
                                            <td>
                                                <datatable-list
                                                    :row="entry"
                                                    field="contract_type.name"
                                                >
                                                </datatable-list>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.end_beneficiary') }}
                                            </td>
                                            <td>
                                                {{ entry.end_beneficiary }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{
                                                    $t(
                                                        'cruds.project.fields.contracted_eu_contribution'
                                                    )
                                                }}
                                            </td>
                                            <td>
                                                {{ entry.contracted_eu_contribution }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.co_funding') }}
                                            </td>
                                            <td>
                                                {{ entry.co_funding }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.loan') }}
                                            </td>
                                            <td>
                                                {{ entry.loan }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.contract_value_montenegro') }}
                                            </td>
                                            <td>
                                                {{ entry.contract_value_montenegro }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.total_euro_value') }}
                                            </td>
                                            <td>
                                                {{ entry.total_euro_value }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.municipality') }}
                                            </td>
                                            <td>
                                                <datatable-list
                                                    :row="entry"
                                                    field="municipality.name"
                                                >
                                                </datatable-list>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.short_description') }}
                                            </td>
                                            <td>
                                                {{ entry.short_description }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.keywords') }}
                                            </td>
                                            <td>
                                                {{ entry.keywords }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.links_to_project_page') }}
                                            </td>
                                            <td>
                                                {{ entry.links_to_project_page }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.project.fields.show') }}
                                            </td>
                                            <td>
                                                <datatable-checkbox :value="entry.show">
                                                </datatable-checkbox>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </div>
                                </div>
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
import DatatableSingle from '@components/Datatables/DatatableSingle'
import DatatableList from '@components/Datatables/DatatableList'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'

export default {
    components: {
        DatatableSingle,
        DatatableList,
        DatatableCheckbox
    },
    data() {
        return {}
    },
    beforeDestroy() {
        this.resetState()
    },
    computed: {
        ...mapGetters('ProjectsSingle', ['entry'])
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler() {
                this.resetState()
                this.fetchShowData(this.$route.params.id)
            }
        }
    },
    methods: {
        ...mapActions('ProjectsSingle', ['fetchShowData', 'resetState'])
    }
}
</script>
