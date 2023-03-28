<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    name: "CountryMap",
    mounted: function(){
        simplemaps_countrymap.load();
        // On click back to default color
        simplemaps_countrymap.hooks.back = () => {
            Bus.$emit('back-clicked');
        };
        simplemaps_countrymap.hooks.zoomable_click_state = (id, name) => {
            // Emit event to parent component
            this.$emit('state-clicked', id, name);
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
