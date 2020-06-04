<template>
    <p>Hello World</p>
</template>

<script>
import RegionService from "@/services/regionService"
import DistilleryService from "@/services/distilleryService"

export default {
    name: "app",
    data() {
        return {
            regions: [],
            distilleries: [],
            whiskies: [],
        }
    },
    mounted() {
        this.getRegions();
        this.getDistilleries();
    },
    methods: {
        getRegions() {
            RegionService.getRegions()
            .then(regions => this.regions = regions)
        },
        getDistilleries() {
            DistilleryService.getDistilleries()
            .then(distilleries => this.distilleries = distilleries)
        }
    }
}
</script>

<style>

</style>