<template>
    <span>
        <span class="func">{{ name }}</span><span class="func">(</span><span class="txt"><slot></slot></span><span class="func">)</span>
    </span>
</template>

<script>
const anchorJS = require('anchor-js');
export default {
    props: ["name"]
}
</script>

<style scoped>
    .func {
        color: #0db5df !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
    .txt {
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>