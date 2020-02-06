<template>
    <span class="ftt">
        <El>meta:</El> [ <br>
        <slot></slot> <br>
        <Tab/>]
    </span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { El, Tab } from '@/components/Code/index';

@Component({
    components: {
        El, Tab
    }
})

export default class Dmeta extends Vue {

}
</script>

<style scoped>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>