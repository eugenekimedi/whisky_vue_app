<template>
    <div v-if="whisky">
        <p v-on:click="setSelected">{{whisky.name}}</p>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: "whisky-list-item",
    props: ["whisky"],
    methods: {
        setSelected: function() {
            eventBus.$emit("whisky-selected", this.whisky)
        }
    }
}
</script>

<style>
</style>