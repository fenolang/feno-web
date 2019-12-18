<template>
  <v-app dark>
    <Menu />
    <v-content class="STwhite">
      <div class="line"></div>
      <nuxt />
    </v-content>
    <v-footer padless>
      <v-card flat tile width="100%" class="center-txt bg-dk pt20 pb20">
        <span class="dk">
          Copyright &copy; 2019
          <span class="ft-green bold">YahirGNz</span>
        </span>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Menu from "@/components/Index/Menu.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Menu
  }
})
export default class Default extends Vue {}
</script>

<style scoped>
.line {
  background: #47B984 !important;
  width: 100%;
  height: 3px;
}
</style>
