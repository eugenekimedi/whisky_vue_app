<template>
    <div class="whisky-list" v-if="whiskiesToDisplay.length">
        <whisky-list-item
            v-for="(whisky, index) in whiskiesToDisplay"
            :whisky="whisky"
            :key="index"
        />
    </div>
</template>

<script>
import DistilleryService from "@/services/distilleryService"
import WhiskyListItem from "@/components/WhiskyListItem"

export default {
    name: "whisky-list",
    props: ["distillery", "whiskies"],
    computed: {
        whiskiesToDisplay: function() {
            return this.whiskies.filter(whisky => whisky.distillery_id === this.distillery.id)
        }
    },
    components: {
        'whisky-list-item': WhiskyListItem
    }
}
</script>

<style>
.whisky-list{
    background-color: #CC8E69;
    float:left;
    margin-right: 10px;
    padding:10px;
    width: 20%;
}
</style>