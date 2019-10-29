<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12>
      <Banner />
    </v-flex>
    <v-flex xs12>
      <div class="pt30 center-txt">
        <p class="ft30 bold ft-dk">
          {{ $t('index.what') }} <span class="ft-green">Óleo</span>?
        </p>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md6>
            <v-img width="600" src="/draw/mac.png"></v-img>
          </v-flex>
          <v-flex xs10 md6>
            <div class="pt30">
              <p class="lTXTgrey" v-html="$t('index.what_content')">
                
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 class="mb-4">
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md4 v-for="(item, index) in $t('index.cards')" :key="index">
            <v-card outlined>
              <v-img :src="item.image"></v-img>
              <div class="pl20 pr20 pb10">
                <p class="ft20 ft-dk bold mb-1">{{ item.title }}</p>
                <p class="ft12 lTXTgrey">
                  {{ item.content }}
                </p>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 class="mt-4"> 
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md6>
            <div>
              <p class="ft40 bold ft-dk">{{ $t('index.support.title') }}</p>
              <p>{{ $t('index.support.sub') }}</p>
              <v-btn class="shadows bg3 dk">{{ $t('btns.support') }}</v-btn>
            </div>
          </v-flex>
          <v-flex xs10 md6>
            <v-img width="400" class="center-this" src="/draw/transfer_money.png"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12>
      <div class="h350 bg-dk pt40 pb30 center-txt">
        <p class="ft30 bold dk">{{ $t('suscribe.title') }}</p>
        <p class="dk">{{ $t('suscribe.subtitle') }}</p>
        <div class="bform">
          <v-text-field
          :label="$t('suscribe.email_label')"
          color="teal accent-4"
          dark
          outlined
          ></v-text-field>
        </div>
        <v-btn depressed class="bg3 dk bold">{{ $t('suscribe.btn') }}</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import Banner from '@/components/Index/Banner.vue';

const MenuModule = namespace('menu');

@Component({
  components: {
    Banner
  }
})

export default class Index extends Vue {
  @MenuModule.Action setConfig : any
  @MenuModule.Action setButtons : any

  mounted() {
    this.setButtons([
      { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
      { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs') },
      { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
      { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
    ])
  }
}
</script>

<style>

</style>
