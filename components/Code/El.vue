<template>
    <span class="tag">
        <slot></slot>
    </span>
</template>

<script>
const anchorJS = require('anchor-js');
export default {
    props: ["lt"]
}
</script>

<style scoped>
    .tag {
        color: #ef4c4c !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>