<template>
  <div class="workspace" :class="h">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CodeBox extends Vue {
  @Prop(String) readonly h !: String;
}
</script>

<style>
.workspace {
  padding-bottom: 15px !important;
  border-radius: 5px !important;
  border-left: 6px solid #F6AF91 !important;
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

@media (max-width: 1000px) {
  .spacing {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>