<template>
    <section class="markk mt0 mb0 d-ib">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class CodeBox extends Vue {
}
</script>

<style>
    .markk {
        padding: 2px;
        border-radius: 3px;
        border: 1px solid #f1d142;
        background: #1b2027 !important;
        font-family: 'Consolas' !important;
    }
</style>