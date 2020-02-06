<template>
    <span class="comment">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Comment extends Vue {
}
</script>

<style scoped>
    .comment {
        color: #6a6f97 !important;
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>