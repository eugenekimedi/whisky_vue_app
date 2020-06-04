<template>
    <div class="distillery-list" v-if="distilleries.length">
        <p v-for="distillery in distilleries">{{distillery.name}}</p>
    </div>
</template>

<script>

export default {
    name: "distillery-list",
    props: ["distilleries"]
}
</script>

<style>
.distillery-list {
    display: inline-block;
    background-color: #CC8E69;
}
</style>