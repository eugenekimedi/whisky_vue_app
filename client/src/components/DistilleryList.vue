<template>
    <div class="distillery-list" v-if="distilleries.length">
        <distillery-list-item
            v-for="(distillery, index) in distilleries"
            :distillery="distillery"
            :key="index"
        />
    </div>
</template>

<script>
import DistilleryListItem from "@/components/DistilleryListItem.vue"

export default {
    name: "distillery-list",
    props: ["distilleries"],
    components: {
        'distillery-list-item': DistilleryListItem
    }
}
</script>

<style>
.distillery-list {
    display: inline-block;
    background-color: #CC8E69;
}
</style>