<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">FAQ</p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <p class="ft20">{{ $t('faq.when_comes') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('faq.answer') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 v-for="(item, index) in $t('faq.ask_group')" :key="index">
                <v-layout row wrap>
                    <!-- TÍTULO -->
                    <v-flex xs12>
                        <div class="spacing ft0">
                            <Subtitle>{{ item.name }}</Subtitle>
                        </div>
                    </v-flex>
                    <!-- PREGUNTAS -->
                    <v-flex xs12 v-for="(ask, index) in item.asks" :key="index">
                        <div class="spacing">
                            <p class="ft15">{{ ask.name }}</p>
                            <p class="ft13 lTXTgrey" v-html="ask.answer"></p>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { page } from '@/mixins/index'
const anchorJS = require('anchor-js');

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