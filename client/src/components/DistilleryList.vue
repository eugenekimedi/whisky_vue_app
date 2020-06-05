<template>
    <div class="distillery-list" v-if="distilleries.length">
        <distillery-list-item
            v-for="(distillery, index) in distilleries"
            :distillery="distillery"
            :whiskies="whiskies"
            :key="index"
        />
    </div>
</template>

<script>
import DistilleryListItem from "@/components/DistilleryListItem.vue"

export default {
    name: "distillery-list",
    props: ["distilleries", "whiskies"],
    components: {
        'distillery-list-item': DistilleryListItem
    }
}
</script>

<style>
.distillery-list {
    background-color: #CC8E69;
    float:left;
    width: 25%;
    margin-right: 10px;
    padding:10px;
}
</style>