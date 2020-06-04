<template>
    <div class="whisky-info">
        <p>Name: {{whisky.name}}</p>
        <p>Distillery: {{distillery.name}}</p>
        <p>ABV: {{whisky.abv}}</p>
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