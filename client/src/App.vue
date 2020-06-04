<template>
<div>
    <div>
        <h2>Distilleries</h2>
        <distillery-list class="distillery-list" :distilleries='distilleries'></distillery-list>
    </div>
    <div>
        <leaflet-map
            :distilleries="distilleries"
        ></leaflet-map>
    </div>
    <div v-if="selectedDistillery">
        <h2>Distillery Info:</h2>
        <distillery-info
            class="distillery-info"
            v-if="selectedDistillery"
            :distillery="selectedDistillery"
        ></distillery-info>
    </div>
    <div v-if="selectedDistillery">
        <h2>Whiskies</h2>
        <whisky-list
            :distillery="selectedDistillery"
            :whiskies="this.whiskies"
        ></whisky-list>
    </div>
    <div v-if="selectedWhisky">
        <h2>Whisky Info:</h2>
        <whisky-info
            class="whisky-info"
            v-if="selectedWhisky"
            :whisky="selectedWhisky"
        ></whisky-info>
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

</style>