<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12 v-if="smAndDown">
              <v-img contain :width="mdAndUp ? 400 : 150"
              src="/geometric_design.png"
              :class="smAndDown ? 'center-this mt30' : ''"></v-img>
          </v-flex>
          <v-flex xs12 md6>
            <v-container grid-list-lg>
              <div class="title-padding">
                <p class="bold mb-1" :class="mdAndUp ? 'ft80' : 'ft50'">Feno</p>
                <p class="pb10" :class="mdAndUp ? 'ft20' : 'ft18'">
                  {{ $t('banner.subtitle') }}
                </p>
                <v-btn rounded large depressed class="bg dk bold mr-1" :to="localePath('docs')">
                  <v-icon class="mr-3">mdi-rocket</v-icon>
                  {{ $t('banner.btn') }}
                </v-btn>
                <v-btn rounded large outlined class="border-btn-dk ft-dk bold" target="_blank" href="https://github.com/fenolang/feno">
                  <v-icon class="mr-2">mdi-github-circle</v-icon>
                  Github
                </v-btn>
              </div>
            </v-container>
          </v-flex>
          <v-flex md6 v-if="mdAndUp">
            <v-img contain width="400" src="/geometric_design.png"></v-img>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Screens from '@/components/screens.vue';

@Component({
  mixins: [Screens]
})

export default class Banner extends Vue {

}
</script>

<style scoped>
.banner-title {
  font-weight: bold;
  font-size: 80px;
}

.title-padding {
  padding-top: 60px;
  padding-left: 30%;
}

.sub-padding {
  padding-left: 30%;
  padding-right: 30%;
}
.shadoww {
  box-shadow: 0px 2px 5px 0px #0000001a !important;
}
.underline {
  animation-name: anima;
  animation-duration: 1s;
  animation-delay: 2s;
  transition: all 0.3s ease !important;
  border-bottom: 6px solid #47B984;
}

@keyframes anima {
  from {
    transition: all 0.3s ease !important;
    border-bottom: 0px solid #47B984;
  }
  to {
    transition: all 0.3s ease !important;
    border-bottom: 6px solid #47B984;
  }
}

@media (max-width: 1000px) {
  .title-padding {
    padding-top: 0px;
    padding-left: 10%;
  }
  
  .sub-padding {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>