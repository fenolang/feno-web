<template>
    <span>
        <span class="func"><slot></slot></span>
    </span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Fun extends Vue {

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