<template>
    <div>
        <div id="map"></div>
        <div>
            <button v-on:click="make_red" v-if="!map_red">Make Red</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryMap",
    mounted: function(){
        simplemaps_countrymap.load();
        simplemaps_countrymap.hooks.zoomable_click_state = function(id, name) {
            // alert('Clicked on state: ' + name + ' (' + id + ')');
            console.log('Clicked on state:', name);
            console.log('State ID:', id);
            // console.log('State object:', stateObj);
        };
    },
    data() {
        return {
            map_red: false
        }
    },
    computed: {
        simplemaps_countrymap: function () {return window.simplemaps_countrymap;}
    },
    methods: {
        make_red: function(){
            this.map_red = true;
            simplemaps_countrymap.mapdata.main_settings.state_color = 'red';
            simplemaps_countrymap.refresh();
        }
    }
}
</script>

<style scoped>

</style>
