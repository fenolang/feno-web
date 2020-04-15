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
          <div class="spacing">
            <p class="ft15 bold">{{ $t('docs.what.what_i_need') }}</p>
            <p class="ft13 lTXTgrey">{{ $t('docs.what.what_i_need_2') }}</p>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 class="mt-4">
          <div class="spacing">
            <p class="ft15 bold">{{ $t('docs.what.why_feno') }}</p>
          </div>
          <div class="spacing">
            <p class="ft13 lTXTgrey">
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
          <div class="spacing">
            <p class="ft15 bold">{{ $t('docs.what.feno_works') }}</p>
            <p class="ft13 lTXTgrey">
              {{ $t('docs.what.feno_works_2') }}
            </p>
          </div>
        </v-flex>
        <v-flex xs12 class="mt-4">
          <div class="spacing">
            <p class="ft15 bold">{{ $t('docs.what.feno_and_web') }}</p>
            <p class="ft13 lTXTgrey">
              {{ $t('docs.what.feno_and_web_2') }}
            </p>
          </div>
        </v-flex>
        <v-flex xs12 class="mt-4 mb-3">
          <div class="spacing">
            <p class="ft15 bold">{{ $t('docs.what.feno_and_electron') }}</p>
            <p class="ft13 lTXTgrey">
              {{ $t('docs.what.feno_and_electron_2') }}
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
    @media (max-width: 1000px) {
      .spacing {
        padding-left: 10%;
        padding-right: 10%;
      }
    }
</style>
