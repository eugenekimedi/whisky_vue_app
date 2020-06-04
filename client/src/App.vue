<template>
    <div>
        <h2>Distilleries</h2>
        <distillery-list 
            class="distillery-list" 
            :distilleries='distilleries'
        ></distillery-list>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";
import RegionService from "@/services/regionService"
import DistilleryService from "@/services/distilleryService"
import WhiskyService from "@/services/whiskyService"
import DistilleryList from "@/components/DistilleryList.vue"

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
    }
}
</script>

<style>

</style>