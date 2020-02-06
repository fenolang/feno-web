<template>
<no-ssr>
  <v-app dark>
    <Menu />
    <v-content class="STwhite">
      <div class="line"></div>
      <v-layout row wrap>
          <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp">
            <v-container>
              <DocsMenu/>
            </v-container>
          </v-flex>
          <v-flex xs12 md9>
              <v-container grid-list-lg>
                  <nuxt />
              </v-container>
          </v-flex>
      </v-layout>
    </v-content>
    <v-footer padless>
      <v-card flat tile width="100%" class="center-txt black pt20 pb20">
        <span class="dk">
          Copyright &copy; 2019
          <span class="ft ft15 bold">YahirGNz</span>
        </span>
      </v-card>
    </v-footer>
  </v-app>
  </no-ssr>
</template>

<script lang="ts">
import Menu from "@/components/Index/Menu.vue";
import DocsMenu from '@/components/Docs/Menu.vue';
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Menu, DocsMenu
  }
})
export default class Default extends Vue {}
</script>

<style scoped>
.line {
  background: #000 !important;
  width: 100%;
  height: 3px;
}
</style>
