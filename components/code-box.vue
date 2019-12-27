<template>
  <div class="workspace">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CodeBox extends Vue {}
</script>

<style>
.workspace {
  padding-bottom: 15px !important;
  border-radius: 5px !important;
  border-left: 6px solid #47B984 !important;
  font-family: "Consolas" !important;
  font-size: 13px !important;
  padding-left: 20px !important;
  padding-top: 15px !important;
  background: #181818 !important;
  color: #fff;
}
.font {
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