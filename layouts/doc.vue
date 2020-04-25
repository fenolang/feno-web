<template>
<no-ssr>
  <v-app dark>
    <Menu />
    <v-content class="dark-color">
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
          Copyright &copy; {{ new Date().getFullYear() }}
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
import DocsMenu from '@/components/Docs/Menu.vue';

export default {  
  components: {
    Menu, DocsMenu
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
