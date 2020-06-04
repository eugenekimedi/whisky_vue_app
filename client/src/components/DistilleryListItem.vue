<template>
    <div class="distillery-list-item" v-if="distillery">
        <p>{{distillery.name}}</p>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: "distillery-list-item",
    props: ["distillery"],
}
</script>

<style>

</style>