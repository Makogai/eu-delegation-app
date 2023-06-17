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
                    {{ $t('global.back') }}
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
