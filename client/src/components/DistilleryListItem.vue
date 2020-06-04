<template>
    <div class="distillery-list-item" v-if="distillery">
        <p v-on:click="setSelected">{{distillery.name}}</p>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: "distillery-list-item",
    props: ["distillery"],
    methods: {
        setSelected: function() {
            eventBus.$emit("distillery-selected", this.distillery)
        }
    }
}
</script>

<style>

</style>