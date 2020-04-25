<template>
  <div class="card" :class="attrs">
    <div class="header">Resultado:</div>
    <div class="tabs" v-if="tabs && tabs.length">
      <div class="actual-tab d-ib dk">&nbsp;&nbsp; {{ tabs }} &nbsp;&nbsp;&nbsp;x&nbsp;</div>
      <div class="d-ib dk ft12 click">&nbsp;+</div>
    </div>
    <div class="spac">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const anchorJS = require('anchor-js');
export default {
    props: ["attrs", "tabs"]
}
</script>

<style scoped>
.header {
  background: #000 !important;
  color: #fff;
  padding: 5px !important;
  border-radius: 2px;
  font-size: 13px;
}
.tabs {
  background: #080808 !important;
}
.actual-tab {
  background: #131313 !important;
  padding: 3px !important;
  font-size: 10px;
}
.spac {
  padding: 20px !important;
}
.card {
  border-radius: 10px !important;
  background: #080808 !important;
}
</style>