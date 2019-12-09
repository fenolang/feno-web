<template>
    <span>
        <span class="func">{{ name }}</span><span class="func">(</span><slot></slot><span class="func">)</span>
    </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class El extends Vue {
    @Prop(String) readonly name!: string
}
</script>

<style scoped>
    .func {
        color: #0db5df !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>