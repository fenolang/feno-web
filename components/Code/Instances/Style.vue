<template>
    <span class="ftt">
        <El>style:</El> { <br>
        <Tab /> <slot></slot>
        } <br>
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

export default class Style extends Vue {

}
</script>

<style scoped>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>