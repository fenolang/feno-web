<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12>
            <v-img src="/cat4.jpg" :height="mdAndUp ? 500 : 400">
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="center-txt pt80" :class="mdAndUp ? '' : 'spacing'">
                    <p class="ft-medium mb-0 ft-color" :class="mdAndUp ? 'ft80' : 'ft60'">Feno</p>
                    <p class="ft-medium upCase dk" :class="mdAndUp ? 'ft16' : 'ft12'">
                      {{ $t('banner.subtitle') }}
                    </p>
                    <v-btn rounded large depressed class="bg dk bold mr-1" :to="localePath('docs')">
                      <v-icon class="mr-3">mdi-rocket</v-icon>
                      {{ $t('banner.btn') }}
                    </v-btn>
                    <br v-if="smAndDown"><br v-if="smAndDown">
                    <v-btn rounded large depressed class="STblack dk bold" target="_blank" href="https://github.com/fenolang/feno">
                      <v-icon class="mr-2">mdi-github-circle</v-icon>
                      Github
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-img>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { CodeBox, Func, String } from "@/components/Code/index";
import Screens from '@/components/screens.vue';

@Component({
  mixins: [Screens],
  components: {
    CodeBox, Func, String
  }
})

export default class Banner extends Vue {

}
</script>

<style scoped>
.ft-color {
  color: #F6AF91 !important;
}

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
  border-bottom: 6px solid #F6AF91;
}

@keyframes anima {
  from {
    transition: all 0.3s ease !important;
    border-bottom: 0px solid #F6AF91;
  }
  to {
    transition: all 0.3s ease !important;
    border-bottom: 6px solid #F6AF91;
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