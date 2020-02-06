<template>
    <span class="attribute">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Attr extends Vue {
}
</script>

<style scoped>
    .attribute {
        color: #fbb129 !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>