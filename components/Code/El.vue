<template>
    <span class="tag">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class El extends Vue {
    @Prop(String) readonly lt!: string
}
</script>

<style scoped>
    .tag {
        color: #ef4c4c !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>