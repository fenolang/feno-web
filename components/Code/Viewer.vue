<template>
  <div class="card">
    <div class="header">Resultado:</div>
    <div class="spac">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Viewer extends Vue {}
</script>

<style scoped>
.header {
  background: #47B984 !important;
  color: #fff;
  padding: 5px !important;
  border-radius: 2px;
  font-size: 13px;
}
.spac {
  padding: 20px !important;
}
.card {
  border-radius: 10px !important;
  background: #fff !important;
  border: 1px solid #e6e6e6 !important;
}
</style>