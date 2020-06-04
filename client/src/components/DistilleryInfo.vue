<template>
<div class="distillery-info">
  <p>Name: {{distillery.name}}</p>
  <p>Region: {{this.region.name}}</p>
  <p>Latitude Coordinates: {{distillery.lat}}</p>
  <p>Longitude Coordinates: {{distillery.long}}</p>
</div>
</template>

<script>
import RegionService from "@/services/regionService"
import { eventBus } from "@/main.js";


export default {
    name: "distillery-info",
    props: ['distillery'],
    data() {
        return {
            region: ''
        }
    },
    mounted() {
        this.getRegion(this.distillery),
        eventBus.$on('distillery-selected', (distillery) => this.region = this.getRegion(distillery))
    },
    methods: {
        async getRegion(distillery) {
            RegionService.getRegionById(distillery.region_id)
            .then(region => this.region = region[0])
        }
    }
}
</script>

<style>
.distillery-info {
    display: inline-block;
    background-color: #CC8E69;
}
</style>