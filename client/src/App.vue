<template>
<div>
    <div class="distillery-map-wrapper">
        <div class="distillery-list">
            <h2 class="title">Distilleries</h2>
            <distillery-list 
                :distilleries='distilleries'
                :whiskies='whiskies'
            ></distillery-list>
        </div>
        <div class="leaflet-map">
            <leaflet-map
                :distilleries="distilleries"
                :whiskies='whiskies'
            ></leaflet-map>
        </div>
    </div>
    <div class="info-wrapper">
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
                class="whisky-info"
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
.distillery-map-wrapper {
    display: inline-block;
    width: 100%;
    background-color: dodgerblue;
}
.info-wrapper {
    display: inline-block;
    width: 100%;
    background:dodgerblue;
}
.title {
    text-align: center;
}
</style>