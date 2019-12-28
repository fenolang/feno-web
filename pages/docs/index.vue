<template>
    <div>
      <v-layout row wrap>
          <v-flex xs12>
              <div class="pt20 spacing">
                  <p class="ft35 bold">{{ $t('docs.menu.what') }}</p>
                  <p class="ft15 lTXTgrey">
                    {{ $t('docs.what.sub') }}
                  </p>
              </div>
          </v-flex>
        <v-flex xs12>
          <p class="ft15 bold">{{ $t('docs.what.what_i_need') }}</p>
          <p class="ft12 lTXTgrey">{{ $t('docs.what.what_i_need_2') }}</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </v-flex>
        <v-flex xs12 class="mt-4">
          <p class="ft15 bold">{{ $t('docs.what.why_feno') }}</p>
          <div class="spacing">
            <p class="ft12 lTXTgrey">
              {{ $t('docs.what.why_feno_sub') }}
            </p>
            <ul class="mt30 mb30">
              <li v-for="(item, index) in $t('docs.what.why_feno_things')" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 class="mt-4">
          <p class="ft15 bold">{{ $t('docs.what.feno_works') }}</p>
          <div class="spacing">
            <p class="ft12 lTXTgrey">
              {{ $t('docs.what.feno_works_2') }}
            </p>
          </div>
        </v-flex>
        <v-flex xs12 class="mt-4">
          <p class="ft15 bold">{{ $t('docs.what.feno_and_web') }}</p>
          <div class="spacing">
            <p class="ft12 lTXTgrey">
              {{ $t('docs.what.feno_and_web_2') }}
            </p>
          </div>
        </v-flex>
        <v-flex xs12 class="mt-4 mb-3">
          <p class="ft15 bold">{{ $t('docs.what.feno_and_electron') }}</p>
          <div class="spacing">
            <p class="ft12 lTXTgrey">
              {{ $t('docs.what.feno_and_electron_2') }}
            </p>
          </div>
        </v-flex>
      </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';

const MenuModule = namespace('menu');

@Component({
  layout: 'doc'
})

export default class DocsIndex extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ])
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
</style>
