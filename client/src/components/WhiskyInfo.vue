<template>
    <div class="whisky-info">
        <p>Name: {{whisky.name}}</p>
        <p>Distillery: {{distillery.name}}</p>
        <p>ABV: {{whisky.abv}}</p>
        <img height="300" width="200" :src="getImage()">
    </div>
</template>

<script>
import DistilleryService from "@/services/distilleryService"

export default {
    name: "whisky-info",
    props: ['whisky'],
    data() {
        return {
            distillery: ''
        }
    },
    mounted() {
        this.getDistillery()
    },
    methods: {
        getDistillery() {
            DistilleryService.getDistilleryById(this.whisky.distillery_id)
            .then(distillery => this.distillery = distillery[0])
        },
        getImage() {
            const default_image_url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffictionalcompanies.fandom.com%2Fwiki%2FGlencallan&psig=AOvVaw107IrJvXZW2241NjVFznBA&ust=1591445494707000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDR5L3S6ukCFQAAAAAdAAAAABAs"
            
            return this.whisky.image_url ? this.whisky.image_url : default_image_url;
        }
    }
}
</script>

<style>
.whisky-info {
    display: inline-block;
    background-color: #CC8E69;
}
</style>