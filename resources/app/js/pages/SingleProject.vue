<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-10">
                <img src="/md/img/logo-large-new2.png" alt="logo" class="img-fluid mb-5">
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-10">
                <button type="button" class="btn btn-default bg-primaryeu2" @click="$router.go(-1)">
                    <i class="material-icons">arrow_back</i>
                    GO BACK
                </button>

                <div class="card shadow-sm p-3">
                    <div class="row row-cols-1 row-cols-lg-2 gx-5">
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Contract title</h5>
                                <p class="lead">
                                    {{ entry.contract_title}}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Programme</h5>
                                <p class="lead">
                                    {{ entry.programme ? entry.programme.name : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Sector</h5>
                                <p class="lead">
                                    <ul v-if="entry.sector.length > 0">
                                        <li v-for="sector in entry.sector">
                                            {{ sector.name }}
                                        </li>
                                    </ul>
                                    <ul v-else>
                                        <p>N/A</p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Financial Perspective</h5>
                                <p class="lead">
                                    {{ entry.financial_perspective ? entry.financial_perspective.perspective : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Contract Year</h5>
                                <p class="lead">
                                    {{ entry.contract_year ? entry.contract_year : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Start Date</h5>
                                <p class="lead">
                                    {{ entry.start_date ? entry.start_date : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">End Date</h5>
                                <p class="lead">
                                    {{ entry.end_date ? entry.end_date : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Contract Number</h5>
                                <p class="lead">
                                    {{ entry.contract_number ? entry.contract_number : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Contract Type</h5>
                                <p class="lead">
                                    {{ entry.contract_type.name ? entry.contract_type.name : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">End Beneficiary</h5>
                                <p class="lead">
                                    {{ entry.end_beneficiary ? entry.end_beneficiary : 'N/A' }}
                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Contracted Eu Contribution</h5>
                                <p class="lead">
                                    {{ entry.contracted_eu_contribution ? entry.contracted_eu_contribution : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Co Funding</h5>
                                <p class="lead">
                                    {{ entry.co_funding ? entry.co_funding : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Loan</h5>
                                <p class="lead">
                                    {{ entry.loan ? entry.loan : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Total Euro Value</h5>
                                <p class="lead">
                                    {{ entry.total_euro_value ? entry.total_euro_value : 'N/A' }}
                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Municipality</h5>
                                <p class="lead">
                                    <ul v-if="entry.municipality.length > 0">
                                        <li v-for="municipality in entry.municipality">
                                            {{ municipality.name }}
                                        </li>
                                    </ul>
                                    <ul v-else>
                                        <p>N/A</p>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Short Description</h5>
                                <p class="lead">
                                    {{ entry.short_description ? entry.short_description : 'N/A' }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-3">
                                <h5 class="text-primary">Keywords</h5>
                                <p class="lead">
                                    <ul v-if="entry.keywords">
                                        <li v-for="keyword in breakStringToArray(entry.keywords)">
                                            {{ keyword }}
                                        </li>
                                    </ul>
                                    <ul v-else>
                                        <p>N/A</p>
                                    </ul>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {},

    data() {
        return {};
    },

    beforeDestroy() {
        this.resetState();
    },

    computed: {
        ...mapGetters('ProjectsSingle', ['entry']),
    },

    watch: {
        '$route.params.id': {
            immediate: true,
            handler() {
                this.resetState();
                this.fetchShowData(this.$route.params.id);
            },
        },
    },

    methods: {
        ...mapActions('ProjectsSingle', ['fetchShowData', 'resetState']),

        // A mthod to break a string by , and return an array
        breakStringToArray(string) {
            return string.split(',');
        },
    },
};
</script>

<style scoped>
.card {
    border-radius: 15px;
}

.bg-primaryeu2 {
    background-color: #d2d3d5 !important;
    color: #041020 !important;
    border-radius: 0 !important;
    transition: 0.2s all ease-in-out;
    box-shadow: none !important;
    //border: none!important;
}

.bg-primaryeu2:hover {
    background-color: #ffc000 !important;
    color: #041020 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
}
</style>
