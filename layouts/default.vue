<template>
  <no-ssr>
    <v-app dark>
      <Menu />
      <v-content class="dark-color">
        <!--<div class="line"></div>-->
        <nuxt />
      </v-content>
      <v-footer padless>
        <v-card flat tile width="100%" class="center-txt black pt20 pb20">
          <span class="dk">
            Copyright &copy; 2019
            <span class="ft0 ft15 bold">YahirGNz</span>
          </span>
        </v-card>
      </v-footer>
    </v-app>
  </no-ssr>
</template>

<script>
const anchorJS = require('anchor-js');
import Menu from "@/components/Index/Menu.vue";

export default {
  components: {
    Menu
  }
}
</script>

<style scoped>
.line {
  background: #000 !important;
  width: 100%;
  height: 3px;
}
</style>
