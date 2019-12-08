<template>
    <div>
        <p class="ft20 mb-2"><slot></slot></p>
        <hr class="mark-this">
    </div>
</template>

<style>
    .mark-this {
        background: #2c2e41 !important;
        width: 60px;
        height: 3px;
        border: none;
        margin-bottom: 30px;
    }
</style>