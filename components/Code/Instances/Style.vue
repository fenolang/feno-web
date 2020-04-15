<template>
    <span class="ftt">
        <El>style:</El> { <br>
        <Tab /> <slot></slot>
        } <br>
    </span>
</template>

<script>
const anchorJS = require('anchor-js');
import { El, Tab } from '@/components/Code/index';

export default {
    components: {
        El, Tab
    }
}
</script>

<style scoped>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>