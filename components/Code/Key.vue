<template>
    <span class="key">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Key extends Vue {
}
</script>

<style scoped>
    .key {
        color: #9653c2 !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>