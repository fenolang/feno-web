<template>
    <span class="string">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class String extends Vue {
}
</script>

<style scoped>
    .string {
        color: #6dc253 !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>