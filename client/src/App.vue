<template>
    <p>Hello World</p>
</template>

<script>
import RegionService from "@/services/regionService"
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
    },
    methods: {
        getRegions() {
            RegionService.getRegions()
            .then (regions => this.regions = regions)
        }
    }
}
</script>

<style>

</style>