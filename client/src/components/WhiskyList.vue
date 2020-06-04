<template>
</template>

<script>
import DistilleryService from "@/services/distilleryService"

export default {
    name: "whisky-list",
    props: ["distillery", "whiskies"],
    computed: {
        whiskiesToDisplay: function() {
            return this.whiskies.filter(whisky => whisky.distillery_id === this.distillery.id);
        }
    },
    methods: {
        getWhiskiesByDistillery() {
            DistilleryService.getWhiskiesByDistillery(this.distillery.id)
                .then(whiskies => this.whiskies = whiskies)
        }
    },
}
</script>

<style>
.whisky-list{
    display: inline-block;
    background-color: #CC8E69;
}
</style>