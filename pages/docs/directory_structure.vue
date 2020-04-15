<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="pt20 spacing">
                    <p class="ft35 bold">{{ $t('docs.menu.directory_structure') }}</p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.structure.sub') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="directories">{{ $t('docs.menu.directories') }}</Title>
                    <div v-for="(item, index) in $t('docs.structure.folders')" :key="index">
                        <p class="ft20 mb-2" v-html="item.title"></p>
                        <hr class="mark-this">
                        <p class="ft13 lTXTgrey" v-html="item.desc"></p>
                    </div>
                </div>
            </v-flex>
            <v-flex xs12 class="mt-3">
                <div class="spacing">
                    <Subtitle id="files">{{ $t('docs.menu.files') }}</Subtitle>
                    <div v-for="(item, index) in $t('docs.structure.files')" :key="index">
                        <p class="ft20 mb-2" v-html="item.title"></p>
                        <hr class="mark-this">
                        <p class="ft13 lTXTgrey" v-html="item.desc"></p>
                    </div>
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
        anchors.add('#directories');
        anchors.add('#files');
    }
}
</script>

<style>
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