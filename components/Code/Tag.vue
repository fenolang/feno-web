<template>
    <span class="tag">
        &lt;<slot></slot>&gt;
    </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class Tag extends Vue {
    @Prop(String) readonly lt!: string
}
</script>

<style>
    .tag {
        color: #ef4c4c !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>