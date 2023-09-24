<template>
    <div class="container-fluid">
        <div class="container-fluid py-4">
            <img src="/md/img/logo2.png" alt="">
            <div class="row">
                <div class="col-md-3 d-sm-none d-xl-block">
                    <div class="row py-4 mt-5 pr-md-5 pr-0">
                        <h4 class="py-2 d-block bg-primaryeu text-white">FILTER</h4>


                        <div class="col-12 mt-5">
                            <div class="form-group ci keywords">
                                <label class="">Keywords</label>
                                <div class="form-group bmd-form-group icon-input-wrapper">
                                    <input class="form-control" type="text" v-model="query.keywords"/>
                                </div>
                            </div>
                        </div>


                        <div class="col-12 mt-4">
                            <div
                                class="form-group bmd-form-group cs municipality"
                                :class="{
                          'has-items': cities.length !== 0,
                            }"
                            >
                                <label class="bmd-label-floating">Municipality</label>
                                <v-select
                                    name="municipality"
                                    label="name"
                                    :reduce="city => city.id"
                                    :key="'municipality-field'"
                                    :value="query.municipality"
                                    :options="cities"
                                    :closeOnSelect="false"
                                    multiple
                                    v-model="query.municipality"
                                />
                            </div>
                        </div>
                        <div class="col-12 mt-5">
                            <div
                                class="form-group bmd-form-group cs sector"
                                :class="{
                          'has-items': sectors.length !== 0,
                        }"
                            >
                                <label class="bmd-label-floating">Sector</label>
                                <v-select
                                    name="sector"
                                    label="name"
                                    :reduce="sector => sector.id"
                                    :key="'sector-field'"
                                    :value="query.sector"
                                    :options="sectors"
                                    :closeOnSelect="false"
                                    multiple
                                    v-model="query.sector"
                                />
                            </div>
                        </div>

                        <div class="col-12 mt-5">
                            <div
                                class="form-group bmd-form-group cs programme"
                                :class="{
                          'has-items': cities.length !== 0,
                        }"
                            >
                                <label class="bmd-label-floating">Programme</label>
                                <v-select
                                    name="programme"
                                    label="name"
                                    :reduce="programme => programme.id"
                                    :key="'programme-field'"
                                    :value="query.programme"
                                    :options="programmes"
                                    :closeOnSelect="false"
                                    multiple
                                    v-model="query.programme"
                                />
                            </div>
                        </div>

                        <div class="col-12 mt-5">
                            <div
                                class="form-group bmd-form-group cs startyear"
                                :class="{
                          'has-items': cities.length !== 0,
                        }"
                            >
                                <label class="bmd-label-floating">Start Year</label>
                                <v-select
                                    name="programme"
                                    label="name"
                                    :options="data.years"
                                    :closeOnSelect="false"
                                    v-model="query.startYear"
                                />
                            </div>
                        </div>

                        <div class="col-12 mt-5">
                            <div
                                class="form-group bmd-form-group cs startyear"
                                :class="{
                          'has-items': cities.length !== 0,
                        }"
                            >
                                <label class="bmd-label-floating">End Year</label>
                                <v-select
                                    name="programme"
                                    label="name"
                                    :options="data.endYears"
                                    :closeOnSelect="true"
                                    v-model="query.endYear"
                                />
                            </div>
                        </div>
                        <div class="col-12 mt-5">
                            <div
                                class="form-group bmd-form-group cs startyear"
                                :class="{
                          'has-items': cities.length !== 0,
                        }"
                            >
                                <label class="bmd-label-floating">Commitment Year</label>
                                <v-select
                                    name="programme"
                                    label="name"
                                    :options="data.commitment_years"
                                    :closeOnSelect="true"
                                    v-model="query.commitmentYear"
                                />
                            </div>
                        </div>


                        <div class="col-12 mt-3">

                            <button class="btn bg-primaryeu2 rounded-o px-3"><img src="303-loop2.svg"
                                                                                  style="fill: white; margin-right: 5px;"
                                                                                  alt="reset"> Reset
                            </button>
                        </div>

                    </div>
                </div>
                <div class="col-sm-12 col-lg-3 d-none d-md-block">
                    <CountryMap @state-clicked="handleStateClicked" @back-clicked="resetQuery"></CountryMap>
                </div>
                <div class="col-md-12 col-lg-9 col-xl-6 projects-holderaa px-4">
                    <div class="card border-0">
                        <div class="card-header bg-transparent border-bottom-0">
                            <h1 class="card-title text-primary text-right pt-3 projects-title">EU PROJEKTI U CRNOJ
                                GORI</h1>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 mt-4 pt-2">
                                    <div class="map__data-container">
                                        <div class="map-info-box">
                                            <div class="map-info-box__item">
                                                <div class="map-info-box__text">Projekata</div>
                                                <div class="map-info-box__value">{{ data.total }}</div>
                                            </div>
                                            <div class="map-info-box__item">
                                                <div class="map-info-box__text">Sektora</div>
                                                <div class="map-info-box__value">{{ data.totalSectors }}</div>
                                            </div>

                                            <div class="map-info-box__separator"></div>

                                            <div class="map-info-box__item">
                                                <div class="map-info-box__small-text">Više od</div>
                                                <div class="map-info-box__value">{{ data.totalProjectsValue }}</div>
                                                <div class="map-info-box__text">{{ data.totalProjectsWord }} evra</div>
                                                <div class="map-info-box__small-text">U vrijednostima projekata</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card shadow-lg">
                                        <div class="card-header bg-primary text-white">
                                            <ul class="nav nav-tabs card-header-tabs">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="projects-tab" data-toggle="tab"
                                                       href="#projects" role="tab" aria-controls="projects"
                                                       aria-selected="true">Projects ({{ data.total }})</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="sectors-tab" data-toggle="tab"
                                                       href="#sectors" role="tab" aria-controls="sectors"
                                                       aria-selected="false">Sectors ({{ data.totalSectors }})</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-body projects-holder">
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="projects" role="tabpanel"
                                                     aria-labelledby="projects-tab">
<!--                                                    <h1>Total projects: {{ data.total }}</h1>-->
                                                    <div v-for="project in data.projects" class="single-project">
                                                        <RouterLink :to="`/project/${project.id}`">
<!--                                                            {{ project.contract_title }}-->

                                                        <div class="map-project__brief">
                                                            <div class="map-project__date">{{ project.duration}}
                                                            </div>
                                                            <h2 class="map-project__title">{{ project.contract_title }}</h2>
                                                        </div>
                                                        </RouterLink>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="sectors" role="tabpanel"
                                                     aria-labelledby="sectors-tab">
                                                    <div v-for="sector in data.sectors">
                                                        <h2 class="map-sector__title mb-3">{{ sector.sector.name }} ({{ sector.count }})</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

<style>
.map-project__date {
    font-size: 14px;
    font-weight: 600;
    color: #ffc000;
}
.map-project__title {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 600;
}
.map-sector__title {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 500;
}
.card {
    border-radius: 0px !important;
    border: none !important;
    box-shadow: none !important;
}

.single-project {

    padding: 10px;
    border-bottom: 1px solid #ccc;

}

.single-project:hover {
    background: #f5f5f5;
}

.single-project a {
    //color: #000;
    text-decoration: none;
}

.projects-holder {
    height: 90vh;
    overflow: auto;
}

.cs .v-select:before {
    content: "\E90E";
    position: absolute;
    top: -2px;
    left: 0px;
    font-family: icomoon;
    font-size: 24px;
    color: #ffc000;
}

.icon-input-wrapper:before {
    content: "search";
    position: absolute;
    top: 6px;
    left: 0px;
    font-family: 'icomoon';
    font-size: 24px;
    color: #ffc000;
}

.ci input:invalid{
    background: none!important;
}
.ci input {
    background: transparent;
    border: 0;
    border-bottom: 2px solid #ffc000;
    border-radius: 0!important;
    padding-left: 32px;
}

.municipality .v-select:before {
    content: "home" !important;
}

.programme .v-select:before {
    content: "folder" !important;
}

.sector .v-select:before {
    content: "drive" !important;
}

.startyear .v-select:before {
    content: "clock" !important;
}

.cs .v-select .vs__dropdown-toggle {
    padding-left: 32px;
}

.cs .vs__actions svg {
    fill: #ffc000;
}

.cs .vs__dropdown-toggle {
    border-bottom: 2px solid #ffc000;
}

.cs label, .ci label {
    font-size: 1rem !important;
    color: #3c3c3c !important;
    padding-bottom: 4px;
    top: -1.4rem !important;

}

.map-info-box__separator {
    display: block;
    width: 100%;
    height: 4px;
    margin-bottom: 20px;
    background-color: #fff;
}


.bg-primaryeu {
    background-color: #d2d3d5 !important;
    color: #041020 !important;
}

.bg-primaryeu2 {
    background-color: #d2d3d5 !important;
    color: #041020 !important;
    border-radius: 0 !important;
    transition: 0.2s all ease-in-out;
    box-shadow: none !important;
}


.bg-primaryeu2:hover {
    background-color: #ffc000 !important;
    color: #041020 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
}


.projects-title {
    color: #0C4DA2 !important;
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 20px;
}

.projects-holderaa {
    //margin-top: -137px;
    //height: 20vh!important;
    background: transparent!important;
}

/* CSS for small screens */
@media (max-width: 768px) {
    .projects-holderaa {
        margin-top: 0;
        font-size: 12px; /* Change to your preferred small screen font size */

    }
    .projects-title {
        text-align: center!important;
    }
}

/* CSS for large screens */
@media (min-width: 769px) {
    .projects-holderaa {
        margin-top: -137px;
        font-size: 16px; /* Change to your preferred large screen font size */
    }
}





.projects-holderaa .card {
    background: transparent!important;
}

.projects-holderaa .card-header{
    border-radius: 0!important;
    padding: 0!important;
}

.projects-holder {
    height: 70vh!important;
}

.card-header-tabs{
    margin: 0!important;
    padding: 0!important;
    border-radius: 0!important;
}

.card-header-tabs .nav-item{
    margin: 0!important;
    border-radius: 0!important;
}

.card-header-tabs .nav-item a{
    margin: 0!important;
    border-radius: 0!important;
}

#projects-tab{
    border-radius: 0!important;
}
/* ===== Scrollbar CSS ===== */
/* Firefox */



.card-title {
    color: #0C4DA2;
}

.nav-tabs .nav-link {
    color: #0C4DA2;
}

.nav-tabs .nav-link.active {
    color: #ffc000;
    background-color: #0C4DA2;
}

.card.bg-warning {
    border-color: #ffc000;
}

.display-4 {
    font-size: 2.5rem;
}

.card-header.bg-primary {
    background-color: #0C4DA2 !important;
}

.nav-tabs .nav-link.active {
    background-color: #ffc000 !important;
    color: #0C4DA2 !important;
}

.shadow-lg {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}



.map-info-box {
    max-width: 300px;
    padding: 15px 0 0;
}

.map-info-box {
    max-width: 360px;
    display: inline-flex;
    flex-wrap: wrap;
    flex-flow: column;
    padding: 20px 0 0;
    background-color: #ffc000;
    font-family: Barlow, Arial, Helvetica, sans-serif;
}

.map-info-box__item {
    text-align: center;
    flex-basis: 50%;
    flex-shrink: 1;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 20px;
}

.map-info-box__text {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    line-height: 1;
}

.map-info-box__value {
    font-size: 58px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    line-height: 0.9;
}

.map-info-box {
    width: 100%;
}


// Media query for small phones

@media only screen and (max-width: 400px) {
    .projects-holderaa {
        margin-top: 0px!important;
        background: red!important; /* Just for testing purposes */
    }
}
</style>


<script>
import {mapGetters, mapActions} from 'vuex'
import CountryMap from './CountryMap'
import { debounce } from 'lodash'


export default {
    components: {
        CountryMap
    },
    data() {
        return {
            debouncedFetch: debounce(function () {
                this.fetchIndexData()
            }, 300),

            query: {sort: 'id', order: 'desc', limit: 100, s: '', isClient: true},
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
        ...mapGetters('ProjectsIndex', ['data', 'total', 'loading']),
        ...mapGetters('AllCities', ['cities']),
        ...mapGetters('AllSectors', ['sectors']),
        ...mapGetters('AllProgrammes', ['programmes'])
    },
    mounted() {
        this.fetchIndexData()
        this.fetchAllCities()
        this.fetchAllSectors()
        this.fetchAllProgrammes()

        // On emit event from child component
        Bus.$on('back-clicked', () => {
            // alert('back clicked')
            this.resetQuery()
        })
    },
    watch: {
        query: {
            handler(query) {
                this.setQuery(query)

                // If the query change is about the keywords, use debounced fetch
                if ('keywords' in query) {
                    this.debouncedFetch()
                } else {
                    // Otherwise, fetch data right away
                    this.fetchIndexData()
                }

            },
            deep: true
        }
    },
    methods: {
        handleStateClicked(id, name) {
            // alert(id)
            // Find the municipality object in the `cities` array
            const municipality = this.cities.find(city => city.id == id);

            // Set the municipality to the found municipality object
            this.query = {...this.query, municipality: [municipality.id]}
        },

        resetQuery() {
            this.query = {...this.query, municipality: null}
        },
        ...mapActions('ProjectsIndex', ['fetchIndexData', 'setQuery', 'resetState']),
        ...mapActions('AllCities', ['fetchAllCities']),
        ...mapActions('AllSectors', ['fetchAllSectors']),
        ...mapActions('AllProgrammes', ['fetchAllProgrammes']),
    }
}
</script>
