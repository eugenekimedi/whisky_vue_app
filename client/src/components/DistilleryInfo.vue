<template>
<div class="distillery-info">
  <p>Name: {{distillery.name}}</p>
  <p>Region: {{this.region.name}}</p>
  <p>Latitude Coordinates: {{distillery.lat}}</p>
  <p>Longitude Coordinates: {{distillery.long}}</p>
  <img width="300" height="200" :src="getImage()">
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
        },
        getImage() {
            const images = ["https://images.pexels.com/photos/1267359/pexels-photo-1267359.jpeg?cs=srgb&dl=barrels-on-trailers-1267359.jpg&fm=jpg", "https://images.pexels.com/photos/2440529/pexels-photo-2440529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://live.staticflickr.com/65535/47943444598_d9af95da95_b.jpg", "https://live.staticflickr.com/6164/6219047046_28d1552c61_b.jpg", "https://live.staticflickr.com/322/18961195459_d1f9b9f8c9_b.jpg"]
            
            return this.distillery.image_url ? this.distillery.image_url : images[Math.floor(Math.random() * images.length)];
        }
    }
}
</script>

<style>
.distillery-info {
    display: inline-block;
    background-color: #CC8E69;
};
</style>