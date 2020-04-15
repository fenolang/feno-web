<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12>
            <v-img src="/cat1.jpg" gradient="to right, rgb(0, 0, 0), rgb(8, 8, 8)" :height="mdAndUp ? 600 : 400">
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="center-txt pt130" :class="mdAndUp ? '' : 'spacing'">
                    <vue-typed-js :strings="titles" class="center-this d-block" :loop="true" :backSpeed="50" :backDelay="3000" fadeOutClass="ft-medium ft0">
                      <span class="ft-medium mb-0 ft0 typing" :class="mdAndUp ? 'ft40' : 'ft60'" style="line-height: 2;"></span>
                    </vue-typed-js>
                    <p class="ft-medium dk" :class="mdAndUp ? 'ft16' : 'ft12'">
                      Desarrolla tu siguiente proyecto con Feno, es simple, es rápido y es fuerte.
                    </p>
                    <v-btn rounded large depressed class="c0 dk bold mr-1" :to="localePath('docs')">
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

<script>
const anchorJS = require('anchor-js');
import { CodeBox, Func, String } from "@/components/Code/index";
import Screens from '@/components/screens.vue';

export default {
  mixins: [Screens],
  components: {
    CodeBox, Func, String
  },
  created() {
  },
  data() {
    return {
      words: [
        'def String hello = "Hello World!"',
        '&lt;p>{{ hello }}&lt;/p>'
      ],
      titles: [
        "The JavaScript for great web development.",
        "A different way to code web pages.",
        "Easier, Better, Faster, Stronger.",
        "Welcome to Feno."
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.g {
  background: linear-gradient(to right, rgb(162, 247, 181), rgb(240, 210, 127));
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