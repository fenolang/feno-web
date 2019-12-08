<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="h350 STwhite pt60 center-txt pl30">
                    <v-img contain height="45" src="/logo.png"></v-img>
                    <span class="ft60 bold ft-dk underline">Daft</span>
                    <div class="sub-padding mt15">
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
    .underline {
        animation-name: anima;
        animation-duration: 1s;
        animation-delay: 2s;
        transition: all 0.3s ease !important;
        border-bottom: 6px solid #99CA3E;
    }

    @keyframes anima {
        from {
            transition: all 0.3s ease !important;
            border-bottom: 0px solid #99CA3E;
        }
        to {
            transition: all 0.3s ease !important;
            border-bottom: 6px solid #99CA3E;
        }
    }

    @media( max-width: 1000px ) {
        .sub-padding {
            padding-left: 15%;
            padding-right: 15%;
        }
    }


</style>