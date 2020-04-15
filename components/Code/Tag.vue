<template>
    <span class="tag">
        &lt;<slot></slot>&gt;
    </span>
</template>

<script>
const anchorJS = require('anchor-js');
export default {
    props: ["lt"]
}
</script>

<style>
    .tag {
        color: #ef4c4c !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>