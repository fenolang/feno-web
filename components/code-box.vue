<template>
  <div class="space-code bg-dk dk">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CodeBox extends Vue {}
</script>

<style>
.space-code {
  padding-bottom: 15px !important;
  border-radius: 5px !important;
  border-left: 6px solid #47B984 !important;
  font-family: "Consolas" !important;
  font-size: 13px !important;
  padding-left: 20px !important;
  padding-top: 15px !important;
}
.line {
  font-family: "Consolas" !important;
  font-size: 13px;
}
.string {
  color: #6dc253 !important;
}
.spacing {
  padding-right: 30%;
}
</style>