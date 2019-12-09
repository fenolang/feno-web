<template>
    <div>
        <p class="ft20 bold mt20"><slot></slot></p>
        <hr class="danger-this">
    </div>
</template>

<style>
    .danger-this {
        background: #ec2e2e !important;
        width: 60px;
        height: 3px;
        border: none;
        margin-bottom: 30px;
    }
</style>