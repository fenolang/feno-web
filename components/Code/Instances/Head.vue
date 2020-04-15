<template>
    <span class="ftt">
        <El>head:</El> { <br>
        <slot></slot> <br>
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