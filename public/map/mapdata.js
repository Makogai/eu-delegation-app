var simplemaps_countrymap_mapdata={
    main_settings: {
        //General settings
        width: "500", //'700' or 'responsive'
        background_color: "#d02e2e",
        background_transparent: "yes",
        // background_image_url: "map_images/angryimg.png",
        border_color: "#ffffff",

        //State defaults
        state_description: "State description",
        state_color: "#0372C6",
        state_hover_color: "#3B729F",
        state_url: "",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "yes",

        //Location defaults
        location_description: "Location description",
        location_url: "",
        location_color: "#FF0067",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_size: 25,
        location_type: "square",
        location_image_source: "frog.png",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",

        //Zoom settings
        zoom: "yes",
        manual_zoom: "no",
        back_image: "no",
        initial_back: "no",
        initial_zoom: "-1",
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website",
        popups: "detect",
        state_image_url: "",
        state_image_position: "",
        location_image_url: ""
    },
    state_specific: {
        2: {
            name: "Bar"
        },
        23: {
            name: "Ulcinj"
        },
        5: {
            name: "Budva"
        },
        6: {
            name: "Cetinje"
        },
        19: {
            name: "Rožaje"
        },
        15: {
            name: "Plav"
        },
        9: {
            name: "Herceg Novi"
        },
        11: {
            name: "Kotor"
        },
        1: {
            name: "Andrijevica"
        },
        3: {
            name: "Berane"
        },
        4: {
            name: "Bijelo Polje"
        },
        7: {
            name: "Danilovgrad"
        },
        10: {
            name: "Kolašin"
        },
        12: {
            name: "Mojkovac"
        },
        13: {
            name: "Nikšic",
        },
        17: {
            name: "Plužine"
        },
        16: {
            name: "Pljevlja"
        },
        18: {
            name: "Podgorica"
        },
        21: {
            name: "Tivat"
        },
        20: {
            name: "Šavnik"
        },
        24: {
            name: "Žabljak"
        }
    },
    locations: {},
    labels: {
        "0": {
            name: "Niksic",
            url: "javascript:alert('You clicked the US')"
        },
        "1": {
            name: "Bar",
            parent_id: "2",
            x: 358.3,
            y: 976.2
        },
        "2": {
            name: "Ulcinj",
            parent_id: "23",
            x: 437.3,
            y: 1122.6
        },
        "3": {
            name: "Budva",
            parent_id: "5",
            x: "218.7",
            y: "879.9"
        },
        "4": {
            name: "Cetinje",
            parent_id: "6",
            x: 196.2,
            y: 677.6
        },
        "5": {
            name: "Rožaje",
            parent_id: "19",
            x: 914.8,
            y: 477.5
        },
        "6": {
            name: "Plav",
            parent_id: "15",
            x: 788.1,
            y: 667.9
        },
        "7": {
            name: "Herceg Novi",
            parent_id: "9",
            x: "50.9",
            y: 739.4
        },
        "8": {
            name: "Kotor",
            parent_id: "11",
            x: 90.9,
            y: 690.1
        },
        "9": {
            name: "Andrijevica",
            parent_id: "1",
            x: "697.7",
            y: 596.8
        },
        "10": {
            name: "Berane",
            parent_id: "3",
            x: 777.3,
            y: 498.9
        },
        "11": {
            name: "Bijelo Polje",
            parent_id: "4",
            x: 689,
            y: 379.4
        },
        "12": {
            name: "Danilovgrad",
            parent_id: "7",
            x: 353.4,
            y: 668.1
        },
        "13": {
            name: "Kolašin",
            parent_id: "10",
            x: 493.6,
            y: 537
        },
        "14": {
            name: "Mojkovac",
            parent_id: "12",
            x: 543.5,
            y: 411.1
        },
        "15": {
            name: "Nikšic",
            parent_id: "13",
            x: 128.8,
            y: 487.1
        },
        "16": {
            name: "Plužine",
            parent_id: "17",
            x: 210.3,
            y: 261.4
        },
        "17": {
            name: "Pljevlja",
            parent_id: "16",
            x: 417.4,
            y: 176.4
        },
        "18": {
            name: "Podgorica",
            parent_id: "18",
            x: 497.2,
            y: 721.8
        },
        "19": {
            name: "Tivat",
            parent_id: "21",
            x: "129.6",
            y: 818.4
        },
        "20": {
            name: "Šavnik",
            parent_id: "20",
            x: 364.1,
            y: 419.2
        },
        "21": {
            name: "Žabljak",
            parent_id: "24",
            x: 363.9,
            y: 294.2
        }
    },
    legend: {
        entries: []
    },
    regions: {
        "0": {
            states: [
                "MNE149"
            ],
            name: "Sjever",
            color: "#ff2626",
            hover_color: "#84d158"
        }
    }
};
