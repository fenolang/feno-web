<template>
    <div>
        <p class="ft20 mt20"><slot></slot></p>
        <hr class="mark-this">
    </div>
</template>

<style>
    .mark-this {
        background: #FE612C !important;
        width: 60px;
        height: 3px;
        border: none;
        margin-bottom: 30px;
    }
</style>