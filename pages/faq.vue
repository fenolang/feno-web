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
                    <p class="ft20 txt-dk">{{ $t('faq.when_comes') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('faq.answer') }} <router-link :to="localePath('roadmap')" class="txt-dk">{{ $t('faq.road') }}</router-link> {{ $t('faq.answer2') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 v-for="(item, index) in $t('faq.ask_group')" :key="index">
                <v-layout row wrap>
                    <!-- TÍTULO -->
                    <v-flex xs12>
                        <div class="spacing">
                            <Subtitle>{{ item.name }}</Subtitle>
                        </div>
                    </v-flex>
                    <!-- PREGUNTAS -->
                    <v-flex xs12 v-for="(ask, index) in item.asks" :key="index">
                        <div class="spacing">
                            <p class="ft15 txt-dk">{{ ask.name }}</p>
                            <p class="ft13 lTXTgrey" v-html="ask.answer"></p>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

export default {
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark,
        Doc, Head, Dmeta,
    },

    mounted() {
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }
}
</script>