<template>
    <span class="ftt">
        <El>head:</El> { <br>
        <slot></slot> <br>
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

export default class Head extends Vue {

}
</script>

<style scoped>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>