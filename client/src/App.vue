<template>
<div>
    <div>
        <h2>Distilleries</h2>
        <distillery-list 
            class="distillery-list" 
            :distilleries='distilleries'
        ></distillery-list>
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


export default {
    name: "app",
    data() {
        return {
            regions: [],
            distilleries: [],
            whiskies: [],
            selectedDistillery: ''
        }
    },
    mounted() {
        this.getRegions();
        this.getDistilleries();
        this.getWhiskies();
        eventBus.$on('distillery-selected', (distillery) => this.selectedDistillery = distillery)
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
        }
    },
    components: {
        'distillery-list': DistilleryList,
        'distillery-info': DistilleryInfo,
        'whisky-list': WhiskyList,
    }
}
</script>

<style>

</style>