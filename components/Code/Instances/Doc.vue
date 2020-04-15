<template>
    <span class="ftt">
        <El>doc:</El> { <br>
        <Tab /> <slot></slot> <br>
        } <br>
    </span>
</template>

<script>
const anchorJS = require('anchor-js');
import { El, Tab } from '@/components/Code/index'

export default {
    components: {
        El, Tab
    }
}
</script>

<style>
    .ftt {
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>