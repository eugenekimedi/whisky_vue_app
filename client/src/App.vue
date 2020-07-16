<template>
<div>
    <div class="distillery-map-wrapper">
        <div class="logo-div">
            <img src="logo.png" alt="Whiskies of Scotland" class="logo">
        </div>
        <div class="leaflet-map">
            <leaflet-map
                :distilleries="distilleries"
                :whiskies='whiskies'
            ></leaflet-map>
        </div>
    </div>
    <div class="info-wrapper">
        <div class="distillery-list">
            <h2 class="title">Distilleries</h2>
            <distillery-list 
                :distilleries='distilleries'
                :whiskies='whiskies'
            ></distillery-list>
        </div>
        <div 
            v-if="selectedDistillery"
            class="distillery-info"
        >
            <h2 class="title">Distillery Info</h2>
            <distillery-info
                v-if="selectedDistillery"
                :distillery="selectedDistillery"
            ></distillery-info>
        </div>
        <div
            class="whisky-list" 
            v-if="selectedDistillery"
        >
            <h2 class="title">Whiskies</h2>
            <whisky-list
                :distillery="selectedDistillery"
                :whiskies="this.whiskies"
            ></whisky-list>
        </div>
        <div 
            v-if="selectedWhisky"
            class="whisky-info"
        >
            <h2 class="title">Whisky Info</h2>
            <whisky-info
                v-if="selectedWhisky"
                :whisky="selectedWhisky"
            ></whisky-info>
        </div>
    </div>
</div>
</template>

<script>
import { eventBus } from "@/main.js";
import RegionService from "@/services/regionService"
import DistilleryService from "@/services/distilleryService"
import WhiskyService from "@/services/whiskyService"
import DistilleryList from "@/components/DistilleryList.vue"
import DistilleryInfo from "@/components/DistilleryInfo.vue"
import WhiskyList from "@/components/WhiskyList.vue"
import WhiskyInfo from "@/components/WhiskyInfo.vue"
import LeafletMap from "@/components/LeafletMap.vue"

export default {
    name: "app",
    data() {
        return {
            regions: [],
            distilleries: [],
            whiskies: [],
            selectedDistillery: '',
            selectedWhisky: ''
        }
    },
    mounted() {
        this.getRegions();
        this.getDistilleries();
        this.getWhiskies();
        eventBus.$on('distillery-selected', (distillery) => this.setDistillery(distillery))
        eventBus.$on('whisky-selected', (whisky) => this.selectedWhisky = whisky)
    },
    methods: {
        getRegions() {
            RegionService.getRegions()
            .then(regions => this.regions = regions)
        },
        getDistilleries() {
            DistilleryService.getDistilleries()
            .then(distilleries => this.distilleries = distilleries)
        },
        getWhiskies() {
            WhiskyService.getWhiskies()
            .then(whiskies => this.whiskies = whiskies)
        },
        setDistillery(distillery) {
            this.selectedDistillery = distillery;
            this.selectedWhisky = '';
        }
    },
    components: {
        'distillery-list': DistilleryList,
        'distillery-info': DistilleryInfo,
        'whisky-list': WhiskyList,
        'whisky-info': WhiskyInfo,
        'leaflet-map': LeafletMap
    }
}
</script>

<style>

html {
  background: url('../public/background.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed ;
  background-position-y: bottom;
  background-position-x: left;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.logo {
    width: 80%;
    height: auto;
}

.logo-div {
    align-self: center;
    text-align: center;
}

.leaflet-map {
    justify-self: center;
}

.distillery-map-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
}

.info-wrapper {
    display: inline-block;
    width: 100%;
}

.title {
    text-align: center;
}
</style>