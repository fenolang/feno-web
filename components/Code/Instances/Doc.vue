<template>
    <span class="ftt">
        <El>doc:</El> { <br>
        <Tab /> <slot></slot> <br>
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

export default class Doc extends Vue {

}
</script>

<style scoped>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>