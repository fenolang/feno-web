<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="pt20 spacing">
          <p class="ft35 bold">{{ $t('docs.menu.ecosystem') }}</p>
          <p class="ft15 lTXTgrey">
            {{ $t('docs.eco.sub') }}
          </p>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs3>
            <v-card outlined class="card">
              <v-img class="STwhite pt20" height="80">
                <v-img src="/logo.png" height="40" contain></v-img>
              </v-img>
              <div class="pl10 pt5 pr5">
                <p class="ft15 bold">Cactus Language</p>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-card outlined class="card">
              <v-img class="STwhite pt20" height="80">
                <v-img src="/gflow.png" height="40" contain></v-img>
              </v-img>
              <div class="pl10 pt5 pr5">
                <p class="ft15 bold">GFlow</p>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-card outlined class="card">
              <v-img class="gs-banner" height="80">
                <div class="pt25 dk center-txt">
                  <p class="ft20 bold gs-font">GStyled</p>
                </div>
              </v-img>
              <div class="pt5 pl10 pr5">
                <p class="ft15 bold">GStyled</p>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 v-for="(item, index) in $t('docs.eco.cards')" :key="index">
        <div :class="item.class">
          <p class="ft30">{{ item.title }}</p>
          <p class="ft13 lTXTgrey">{{ item.content }}</p>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="pt10 pb20 spacing">
          <p class="ft13 lTXTgrey">
            {{ $t('docs.eco.last_text') }}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
const anchorJS = require('anchor-js');
import { page } from '@/mixins/index'

export default {
    layout: 'doc',
    mixins: [page],

    mounted() {
        const anchors = new anchorJS();
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }
}
</script>

<style scoped>
    .link:hover {
        color: #2c6d57 !important;
    }
    .spacing {
        padding-right: 30%;
    }
    .card:hover {
      border-radius: 20px 20px 20px 20px rgba(0, 0, 0, 0.466) !important;
      cursor: pointer;
    }
    .gs-banner {
      background: #0742c0 !important;
    }
    .gs-font {
      font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important;
    }
</style>
