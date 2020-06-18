<template>
    <div class="distillery-list-item" v-if="distillery">
        <p v-on:click="setSelected">{{distillery.name}}</p>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";
import DistilleryService from "@/services/distilleryService"

export default {
    name: "distillery-list-item",
    props: ["distillery", "whiskies"],
    methods: {
        selectWhisky: function() {
            return this.whiskies.filter(whisky => whisky.distillery_id === this.distillery.id)[0]
        },
        setSelected: function() {
            eventBus.$emit("distillery-selected", this.distillery);
            eventBus.$emit("whisky-selected", this.selectWhisky())
        },
    },
}
</script>

<style>
.distillery-list-item {
    margin-left: 10px;
}
</style>