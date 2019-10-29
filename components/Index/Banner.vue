<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="h350 STwhite pt60 center-txt pl30">
                    <v-img contain height="30" src="/logo.png"></v-img>
                    <h1 class="ft60 ft-dk">Óleo</h1>
                    <div class="sub-padding">
                        <p class="lTXTgrey ft15">{{ $t('banner.subtitle') }}</p>
                    </div>
                    <v-btn elevation="1" class="bg3 shadoww" dark>
                        <v-icon class="mr-2">mdi-rocket</v-icon>
                        {{ $t('banner.btn') }}
                    </v-btn>
                    <v-btn outlined class="border-btn-dk ft-dk">
                        <v-icon class="mr-2">mdi-github-circle</v-icon>
                        Github
                    </v-btn>
                    <div class="pt20">
                        <v-icon class="ft-green" size="20">mdi-chevron-down</v-icon>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Banner extends Vue {

}

</script>

<style scoped>
    .sub-padding {
        padding-left: 30%;
        padding-right: 30%;
    }
    .shadoww {
        box-shadow: 0px 2px 5px 0px #0000001a !important;
    }

    @media( max-width: 1000px ) {
        .sub-padding {
            padding-left: 15%;
            padding-right: 15%;
        }
    }
</style>